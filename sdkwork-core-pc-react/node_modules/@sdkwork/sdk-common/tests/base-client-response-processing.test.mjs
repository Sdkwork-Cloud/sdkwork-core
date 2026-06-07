import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { once } from 'node:events';

import { ValidationError, createBaseHttpClient } from '../dist/index.js';

const rawSession = {
  accessToken: 'local-access-local-session-1',
  authToken: 'local-auth-local-session-1',
  refreshToken: 'local-refresh-local-session-1',
  expiresAt: '2099-01-01T00:00:00Z',
  sessionId: 'local-session-1',
  user: {
    id: 'local-user-1',
    username: 'test001@a.com',
  },
};

const server = createServer((request, response) => {
  if (request.url === '/raw-session') {
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify(rawSession));
    return;
  }

  if (request.url === '/enveloped-session') {
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify({ code: '2000', msg: 'SUCCESS', data: rawSession }));
    return;
  }

  if (request.url === '/error-envelope') {
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify({ code: '4000', msg: 'invalid credentials', data: null }));
    return;
  }

  if (request.url === '/empty') {
    response.writeHead(204);
    response.end();
    return;
  }

  response.writeHead(404, { 'content-type': 'application/json' });
  response.end(JSON.stringify({ code: '4040', msg: 'not found', data: null }));
});

server.listen(0, '127.0.0.1');
await once(server, 'listening');

try {
  const { port } = server.address();
  const client = createBaseHttpClient({
    baseUrl: `http://127.0.0.1:${port}`,
    logger: { level: 'silent' },
  });

  assert.deepEqual(
    await client.get('/raw-session'),
    rawSession,
    '200 JSON without an SDKWork envelope must be treated as the successful payload',
  );

  assert.deepEqual(
    await client.get('/enveloped-session'),
    rawSession,
    'standard SDKWork envelopes must still unwrap data',
  );

  await assert.rejects(
    () => client.get('/error-envelope'),
    (error) => error instanceof ValidationError && error.message === 'invalid credentials',
    'error envelopes must still throw',
  );

  assert.equal(
    await client.delete('/empty'),
    undefined,
    '204/no-content responses must not force JSON parsing',
  );
} finally {
  server.close();
  await once(server, 'close');
}
