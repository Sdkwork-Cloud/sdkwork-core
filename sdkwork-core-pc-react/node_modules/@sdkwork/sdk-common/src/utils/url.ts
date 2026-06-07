export interface UrlComponents {
  protocol: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  hash: string;
  username: string;
  password: string;
  origin: string;
  href: string;
}

export interface QueryParams {
  [key: string]: string | string[] | undefined;
}

export function parse(url: string): UrlComponents | null {
  try {
    const parsed = new URL(url);
    return {
      protocol: parsed.protocol.replace(':', ''),
      hostname: parsed.hostname,
      port: parsed.port,
      pathname: parsed.pathname,
      search: parsed.search,
      hash: parsed.hash,
      username: parsed.username,
      password: parsed.password,
      origin: parsed.origin,
      href: parsed.href,
    };
  } catch {
    return null;
  }
}

export function isValid(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function isAbsolute(url: string): boolean {
  return /^[a-z][a-z\d+\-.]*:\/\//i.test(url);
}

export function isRelative(url: string): boolean {
  return !isAbsolute(url);
}

export function build(components: Partial<UrlComponents>): string {
  const {
    protocol = 'https',
    hostname = '',
    port = '',
    pathname = '',
    search = '',
    hash = '',
    username = '',
    password = '',
  } = components;

  let url = '';

  if (username && password) {
    url = `${protocol}://${username}:${password}@${hostname}`;
  } else if (username) {
    url = `${protocol}://${username}@${hostname}`;
  } else {
    url = `${protocol}://${hostname}`;
  }

  if (port) {
    url += `:${port}`;
  }

  if (pathname) {
    url += pathname.startsWith('/') ? pathname : `/${pathname}`;
  }

  if (search) {
    url += search.startsWith('?') ? search : `?${search}`;
  }

  if (hash) {
    url += hash.startsWith('#') ? hash : `#${hash}`;
  }

  return url;
}

export function resolve(baseUrl: string, relativeUrl: string): string {
  try {
    return new URL(relativeUrl, baseUrl).href;
  } catch {
    return relativeUrl;
  }
}

export function join(...segments: string[]): string {
  let result = '';
  for (let i = 0; i < segments.length; i++) {
    let segment = segments[i]!;
    if (i === 0 && isAbsolute(segment)) {
      result = segment.replace(/\/+$/, '');
    } else {
      segment = segment.replace(/^\/+|\/+$/g, '');
      if (result) {
        result += '/' + segment;
      } else {
        result = segment;
      }
    }
  }
  return result;
}

export function normalize(url: string): string {
  try {
    const parsed = new URL(url);
    parsed.pathname = parsed.pathname.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
    return parsed.href;
  } catch {
    return url.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
  }
}

export function getProtocol(url: string): string {
  try {
    return new URL(url).protocol.replace(':', '');
  } catch {
    return '';
  }
}

export function getHostname(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return '';
  }
}

export function getPort(url: string): string {
  try {
    return new URL(url).port;
  } catch {
    return '';
  }
}

export function getPathname(url: string): string {
  try {
    return new URL(url).pathname;
  } catch {
    return '';
  }
}

export function getSearch(url: string): string {
  try {
    return new URL(url).search;
  } catch {
    return '';
  }
}

export function getHash(url: string): string {
  try {
    return new URL(url).hash;
  } catch {
    return '';
  }
}

export function getOrigin(url: string): string {
  try {
    return new URL(url).origin;
  } catch {
    return '';
  }
}

export function setProtocol(url: string, protocol: string): string {
  try {
    const parsed = new URL(url);
    parsed.protocol = protocol.endsWith(':') ? protocol : `${protocol}:`;
    return parsed.href;
  } catch {
    return url;
  }
}

export function setHostname(url: string, hostname: string): string {
  try {
    const parsed = new URL(url);
    parsed.hostname = hostname;
    return parsed.href;
  } catch {
    return url;
  }
}

export function setPort(url: string, port: string | number): string {
  try {
    const parsed = new URL(url);
    parsed.port = String(port);
    return parsed.href;
  } catch {
    return url;
  }
}

export function setPathname(url: string, pathname: string): string {
  try {
    const parsed = new URL(url);
    parsed.pathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
    return parsed.href;
  } catch {
    return url;
  }
}

export function setSearch(url: string, search: string | QueryParams): string {
  try {
    const parsed = new URL(url);
    if (typeof search === 'string') {
      parsed.search = search.startsWith('?') ? search : `?${search}`;
    } else {
      parsed.search = stringifyQuery(search);
    }
    return parsed.href;
  } catch {
    return url;
  }
}

export function setHash(url: string, hash: string): string {
  try {
    const parsed = new URL(url);
    parsed.hash = hash.startsWith('#') ? hash : `#${hash}`;
    return parsed.href;
  } catch {
    return url;
  }
}

export function appendPathname(url: string, path: string): string {
  try {
    const parsed = new URL(url);
    const currentPath = parsed.pathname.replace(/\/$/, '');
    const newPath = path.startsWith('/') ? path : `/${path}`;
    parsed.pathname = currentPath + newPath;
    return parsed.href;
  } catch {
    return url;
  }
}

export function appendQuery(url: string, params: QueryParams): string {
  try {
    const parsed = new URL(url);
    const existingParams = parseQuery(parsed.search);
    const mergedParams = { ...existingParams, ...params };
    parsed.search = stringifyQuery(mergedParams);
    return parsed.href;
  } catch {
    return url;
  }
}

export function parseQuery(search: string): QueryParams {
  const result: QueryParams = {};
  const searchStr = search.startsWith('?') ? search.slice(1) : search;
  if (!searchStr) return result;

  const params = new URLSearchParams(searchStr);
  params.forEach((value, key) => {
    const existing = result[key];
    if (existing === undefined) {
      result[key] = value;
    } else if (Array.isArray(existing)) {
      existing.push(value);
    } else {
      result[key] = [existing, value];
    }
  });

  return result;
}

export function stringifyQuery(params: QueryParams): string {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      for (const v of value) {
        searchParams.append(key, v);
      }
    } else {
      searchParams.set(key, value);
    }
  }

  const str = searchParams.toString();
  return str ? `?${str}` : '';
}

export function getQueryParam(url: string, key: string): string | undefined {
  try {
    const parsed = new URL(url);
    return parsed.searchParams.get(key) ?? undefined;
  } catch {
    return undefined;
  }
}

export function getQueryParams(url: string): QueryParams {
  try {
    const parsed = new URL(url);
    return parseQuery(parsed.search);
  } catch {
    return {};
  }
}

export function setQueryParam(url: string, key: string, value: string | string[]): string {
  try {
    const parsed = new URL(url);
    if (Array.isArray(value)) {
      parsed.searchParams.delete(key);
      for (const v of value) {
        parsed.searchParams.append(key, v);
      }
    } else {
      parsed.searchParams.set(key, value);
    }
    return parsed.href;
  } catch {
    return url;
  }
}

export function removeQueryParam(url: string, key: string): string {
  try {
    const parsed = new URL(url);
    parsed.searchParams.delete(key);
    return parsed.href;
  } catch {
    return url;
  }
}

export function hasQueryParam(url: string, key: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.searchParams.has(key);
  } catch {
    return false;
  }
}

export function isHttp(url: string): boolean {
  return getProtocol(url).toLowerCase() === 'http';
}

export function isHttps(url: string): boolean {
  return getProtocol(url).toLowerCase() === 'https';
}

export function isWebSocket(url: string): boolean {
  const protocol = getProtocol(url).toLowerCase();
  return protocol === 'ws' || protocol === 'wss';
}

export function toHttp(url: string): string {
  return setProtocol(url, 'http');
}

export function toHttps(url: string): string {
  return setProtocol(url, 'https');
}

export function toWebSocket(url: string): string {
  const protocol = getProtocol(url).toLowerCase();
  if (protocol === 'https') {
    return setProtocol(url, 'wss');
  }
  return setProtocol(url, 'ws');
}

export function extractDomain(url: string): string {
  return getHostname(url);
}

export function extractSubdomain(url: string): string {
  const hostname = getHostname(url);
  const parts = hostname.split('.');
  if (parts.length > 2) {
    return parts.slice(0, -2).join('.');
  }
  return '';
}

export function extractTld(url: string): string {
  const hostname = getHostname(url);
  const parts = hostname.split('.');
  if (parts.length > 1) {
    return parts.slice(-1)[0] ?? '';
  }
  return '';
}

export function extractDomainWithTld(url: string): string {
  const hostname = getHostname(url);
  const parts = hostname.split('.');
  if (parts.length > 1) {
    return parts.slice(-2).join('.');
  }
  return hostname;
}

export function isLocalhost(url: string): boolean {
  const hostname = getHostname(url).toLowerCase();
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1' || hostname.startsWith('192.168.') || hostname.startsWith('10.') || hostname.startsWith('172.');
}

export function isIpAddress(url: string): boolean {
  const hostname = getHostname(url);
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Regex = /^\[?([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}\]?$/;
  return ipv4Regex.test(hostname) || ipv6Regex.test(hostname);
}

export function encode(url: string): string {
  return encodeURIComponent(url);
}

export function decode(url: string): string {
  try {
    return decodeURIComponent(url);
  } catch {
    return url;
  }
}

export function encodeComponent(component: string): string {
  return encodeURIComponent(component);
}

export function decodeComponent(component: string): string {
  try {
    return decodeURIComponent(component);
  } catch {
    return component;
  }
}

export function encodeQuery(query: QueryParams): string {
  return stringifyQuery(query);
}

export function decodeQuery(search: string): QueryParams {
  return parseQuery(search);
}

export function extractFileExtension(url: string): string {
  const pathname = getPathname(url);
  const match = pathname.match(/\.([^./?]+)(?:[?#]|$)/);
  return match ? match[1]!.toLowerCase() : '';
}

export function extractFilename(url: string): string {
  const pathname = getPathname(url);
  const parts = pathname.split('/');
  const filename = parts[parts.length - 1] ?? '';
  const dotIndex = filename.lastIndexOf('.');
  return dotIndex > 0 ? filename.slice(0, dotIndex) : filename;
}

export function extractFilenameWithExtension(url: string): string {
  const pathname = getPathname(url);
  const parts = pathname.split('/');
  return parts[parts.length - 1] ?? '';
}

export function addTrailingSlash(url: string): string {
  try {
    const parsed = new URL(url);
    if (!parsed.pathname.endsWith('/')) {
      parsed.pathname += '/';
    }
    return parsed.href;
  } catch {
    return url.endsWith('/') ? url : `${url}/`;
  }
}

export function removeTrailingSlash(url: string): string {
  try {
    const parsed = new URL(url);
    parsed.pathname = parsed.pathname.replace(/\/+$/, '') || '/';
    return parsed.href;
  } catch {
    return url.replace(/\/+$/, '') || '/';
  }
}

export function addLeadingSlash(path: string): string {
  return path.startsWith('/') ? path : `/${path}`;
}

export function removeLeadingSlash(path: string): string {
  return path.startsWith('/') ? path.slice(1) : path;
}

export function isSameOrigin(url1: string, url2: string): boolean {
  return getOrigin(url1) === getOrigin(url2);
}

export function isSameHostname(url1: string, url2: string): boolean {
  return getHostname(url1) === getHostname(url2);
}

export function isSamePathname(url1: string, url2: string): boolean {
  return getPathname(url1) === getPathname(url2);
}

export function isAnchor(url: string): boolean {
  return url.startsWith('#');
}

export function isMailto(url: string): boolean {
  return url.toLowerCase().startsWith('mailto:');
}

export function isTel(url: string): boolean {
  return url.toLowerCase().startsWith('tel:');
}

export function isDataUrl(url: string): boolean {
  return url.toLowerCase().startsWith('data:');
}

export function isBlobUrl(url: string): boolean {
  return url.toLowerCase().startsWith('blob:');
}

export function extractEmail(url: string): string {
  if (isMailto(url)) {
    return url.slice(7);
  }
  return '';
}

export function extractPhone(url: string): string {
  if (isTel(url)) {
    return url.slice(4);
  }
  return '';
}

export function extractDataUrlParts(url: string): { mimeType: string; data: string; base64: boolean } | null {
  if (!isDataUrl(url)) return null;

  const match = url.match(/^data:([^;,]+)?(?:;base64)?,(.*)$/);
  if (!match) return null;

  return {
    mimeType: match[1] ?? 'text/plain',
    data: match[2] ?? '',
    base64: url.includes(';base64'),
  };
}

export function createDataUrl(data: string, mimeType: string = 'text/plain', base64: boolean = false): string {
  const encodedData = base64 ? btoa(data) : encodeURIComponent(data);
  return `data:${mimeType}${base64 ? ';base64' : ''},${encodedData}`;
}

export function createObjectUrl(blob: Blob): string {
  return URL.createObjectURL(blob);
}

export function revokeObjectUrl(url: string): void {
  URL.revokeObjectURL(url);
}

export function parseUrlPattern(pattern: string): RegExp {
  const escaped = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const withParams = escaped.replace(/:(\w+)/g, '(?<$1>[^/]+)');
  return new RegExp(`^${withParams}$`);
}

export function matchUrlPattern(pattern: string, url: string): Record<string, string> | null {
  const regex = parseUrlPattern(pattern);
  const pathname = getPathname(url);
  const match = pathname.match(regex);
  if (!match) return null;
  return match.groups ?? {};
}

export function buildUrlPattern(pattern: string, params: Record<string, string>): string {
  let result = pattern;
  for (const [key, value] of Object.entries(params)) {
    result = result.replace(`:${key}`, value);
  }
  return result;
}

export function getCurrentUrl(): string {
  if (typeof window !== 'undefined') {
    return window.location.href;
  }
  return '';
}

export function getCurrentOrigin(): string {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return '';
}

export function getCurrentPathname(): string {
  if (typeof window !== 'undefined') {
    return window.location.pathname;
  }
  return '';
}

export function getCurrentSearch(): string {
  if (typeof window !== 'undefined') {
    return window.location.search;
  }
  return '';
}

export function getCurrentHash(): string {
  if (typeof window !== 'undefined') {
    return window.location.hash;
  }
  return '';
}

export function redirect(url: string): void {
  if (typeof window !== 'undefined') {
    window.location.href = url;
  }
}

export function reload(): void {
  if (typeof window !== 'undefined') {
    window.location.reload();
  }
}

export function replace(url: string): void {
  if (typeof window !== 'undefined') {
    window.location.replace(url);
  }
}

export function assign(url: string): void {
  if (typeof window !== 'undefined') {
    window.location.assign(url);
  }
}

export function pushState(state: unknown, title: string, url: string): void {
  if (typeof window !== 'undefined' && window.history) {
    window.history.pushState(state, title, url);
  }
}

export function replaceState(state: unknown, title: string, url: string): void {
  if (typeof window !== 'undefined' && window.history) {
    window.history.replaceState(state, title, url);
  }
}

export function back(): void {
  if (typeof window !== 'undefined' && window.history) {
    window.history.back();
  }
}

export function forward(): void {
  if (typeof window !== 'undefined' && window.history) {
    window.history.forward();
  }
}

export function go(delta: number): void {
  if (typeof window !== 'undefined' && window.history) {
    window.history.go(delta);
  }
}
