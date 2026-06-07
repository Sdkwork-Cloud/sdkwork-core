export type CompareFunction<T> = (a: T, b: T) => number;

export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

export function isEmpty<T>(arr: T[] | readonly T[]): boolean {
  return arr.length === 0;
}

export function isNotEmpty<T>(arr: T[] | readonly T[]): boolean {
  return arr.length > 0;
}

export function first<T>(arr: T[] | readonly T[]): T | undefined {
  return arr[0];
}

export function last<T>(arr: T[] | readonly T[]): T | undefined {
  return arr[arr.length - 1];
}

export function nth<T>(arr: T[] | readonly T[], index: number): T | undefined {
  if (index < 0) {
    index = arr.length + index;
  }
  return arr[index];
}

export function head<T>(arr: T[] | readonly T[]): T | undefined {
  return first(arr);
}

export function tail<T>(arr: T[] | readonly T[]): T[] {
  return arr.slice(1);
}

export function initial<T>(arr: T[] | readonly T[]): T[] {
  return arr.slice(0, -1);
}

export function take<T>(arr: T[] | readonly T[], count: number): T[] {
  return arr.slice(0, count);
}

export function takeRight<T>(arr: T[] | readonly T[], count: number): T[] {
  return arr.slice(-count);
}

export function takeWhile<T>(arr: T[] | readonly T[], predicate: (value: T, index: number) => boolean): T[] {
  const result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i]!, i)) {
      result.push(arr[i]!);
    } else {
      break;
    }
  }
  return result;
}

export function takeRightWhile<T>(arr: T[] | readonly T[], predicate: (value: T, index: number) => boolean): T[] {
  const result: T[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i]!, i)) {
      result.unshift(arr[i]!);
    } else {
      break;
    }
  }
  return result;
}

export function drop<T>(arr: T[] | readonly T[], count: number): T[] {
  return arr.slice(count);
}

export function dropRight<T>(arr: T[] | readonly T[], count: number): T[] {
  return arr.slice(0, -count);
}

export function dropWhile<T>(arr: T[] | readonly T[], predicate: (value: T, index: number) => boolean): T[] {
  let dropIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i]!, i)) {
      dropIndex = i + 1;
    } else {
      break;
    }
  }
  return arr.slice(dropIndex);
}

export function dropRightWhile<T>(arr: T[] | readonly T[], predicate: (value: T, index: number) => boolean): T[] {
  let dropIndex = arr.length;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i]!, i)) {
      dropIndex = i;
    } else {
      break;
    }
  }
  return arr.slice(0, dropIndex);
}

export function compact<T>(arr: (T | null | undefined | false | 0 | '' | 0n)[] | readonly (T | null | undefined | false | 0 | '' | 0n)[]): T[] {
  return arr.filter(Boolean) as T[];
}

export function flatten<T>(arr: (T | T[])[] | readonly (T | T[])[]): T[] {
  return arr.flat() as T[];
}

export function flattenDeep<T>(arr: unknown[] | readonly unknown[]): T[] {
  return arr.flat(Infinity) as T[];
}

export function flattenDepth<T>(arr: unknown[] | readonly unknown[], depth: number = 1): T[] {
  return arr.flat(depth) as T[];
}

export function uniq<T>(arr: T[] | readonly T[]): T[] {
  return [...new Set(arr)];
}

export function uniqBy<T, K>(arr: T[] | readonly T[], iteratee: (value: T) => K): T[] {
  const seen = new Set<K>();
  return arr.filter((item) => {
    const key = iteratee(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

export function uniqWith<T>(arr: T[] | readonly T[], comparator: (a: T, b: T) => boolean): T[] {
  return arr.filter((item, index) => {
    for (let i = 0; i < index; i++) {
      if (comparator(arr[i]!, item)) {
        return false;
      }
    }
    return true;
  });
}

export function union<T>(...arrays: (T[] | readonly T[])[]): T[] {
  return uniq(arrays.flat());
}

export function unionBy<T, K>(arrays: (T[] | readonly T[])[], iteratee: (value: T) => K): T[] {
  return uniqBy(arrays.flat(), iteratee);
}

export function unionWith<T>(arrays: (T[] | readonly T[])[], comparator: (a: T, b: T) => boolean): T[] {
  return uniqWith(arrays.flat(), comparator);
}

export function intersection<T>(...arrays: (T[] | readonly T[])[]): T[] {
  if (arrays.length === 0) return [];
  const [first, ...rest] = arrays;
  if (!first) return [];
  return first.filter((item) => rest.every((arr) => arr.includes(item)));
}

export function intersectionBy<T, K>(arrays: (T[] | readonly T[])[], iteratee: (value: T) => K): T[] {
  if (arrays.length === 0) return [];
  const [first, ...rest] = arrays;
  if (!first) return [];
  return first.filter((item) => {
    const key = iteratee(item);
    return rest.every((arr) => arr.some((val) => iteratee(val) === key));
  });
}

export function intersectionWith<T>(arrays: (T[] | readonly T[])[], comparator: (a: T, b: T) => boolean): T[] {
  if (arrays.length === 0) return [];
  const [first, ...rest] = arrays;
  if (!first) return [];
  return first.filter((item) => rest.every((arr) => arr.some((val) => comparator(val, item))));
}

export function difference<T>(arr: T[] | readonly T[], ...values: (T[] | readonly T[])[]): T[] {
  const excludeSet = new Set(values.flat());
  return arr.filter((item) => !excludeSet.has(item));
}

export function differenceBy<T, K>(arr: T[] | readonly T[], values: (T[] | readonly T[])[], iteratee: (value: T) => K): T[] {
  const excludeSet = new Set(values.flat().map(iteratee));
  return arr.filter((item) => !excludeSet.has(iteratee(item)));
}

export function differenceWith<T>(arr: T[] | readonly T[], values: (T[] | readonly T[])[], comparator: (a: T, b: T) => boolean): T[] {
  const excludeValues = values.flat();
  return arr.filter((item) => !excludeValues.some((val) => comparator(val, item)));
}

export function xor<T>(...arrays: (T[] | readonly T[])[]): T[] {
  const counts = new Map<T, number>();
  for (const arr of arrays) {
    for (const item of arr) {
      counts.set(item, (counts.get(item) ?? 0) + 1);
    }
  }
  return [...counts.entries()].filter(([, count]) => count === 1).map(([key]) => key);
}

export function xorBy<T, K>(arrays: (T[] | readonly T[])[], iteratee: (value: T) => K): T[] {
  const counts = new Map<K, { count: number; item: T }>();
  for (const arr of arrays) {
    for (const item of arr) {
      const key = iteratee(item);
      const existing = counts.get(key);
      if (existing) {
        existing.count++;
      } else {
        counts.set(key, { count: 1, item });
      }
    }
  }
  return [...counts.values()].filter(({ count }) => count === 1).map(({ item }) => item);
}

export function xorWith<T>(arrays: (T[] | readonly T[])[], comparator: (a: T, b: T) => boolean): T[] {
  const allItems = arrays.flat();
  return allItems.filter((item) => {
    let count = 0;
    for (let i = 0; i < allItems.length; i++) {
      if (comparator(allItems[i]!, item)) {
        count++;
      }
    }
    return count === 1;
  });
}

export function without<T>(arr: T[] | readonly T[], ...values: T[]): T[] {
  const excludeSet = new Set(values);
  return arr.filter((item) => !excludeSet.has(item));
}

export function chunk<T>(arr: T[] | readonly T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export function zip<T, U>(arr1: T[] | readonly T[], arr2: U[] | readonly U[]): [T, U][] {
  const length = Math.min(arr1.length, arr2.length);
  const result: [T, U][] = [];
  for (let i = 0; i < length; i++) {
    result.push([arr1[i]!, arr2[i]!]);
  }
  return result;
}

export function zipWith<T, U, V>(arr1: T[] | readonly T[], arr2: U[] | readonly U[], iteratee: (a: T, b: U) => V): V[] {
  const length = Math.min(arr1.length, arr2.length);
  const result: V[] = [];
  for (let i = 0; i < length; i++) {
    result.push(iteratee(arr1[i]!, arr2[i]!));
  }
  return result;
}

export function unzip<T, U>(arr: [T, U][] | readonly [T, U][]): [T[], U[]] {
  const result1: T[] = [];
  const result2: U[] = [];
  for (const [a, b] of arr) {
    result1.push(a);
    result2.push(b);
  }
  return [result1, result2];
}

export function unzipWith<T, U, V>(arr: [T, U][] | readonly [T, U][], iteratee: (a: T, b: U) => V): V[] {
  return arr.map(([a, b]) => iteratee(a, b));
}

export function zipObject<K extends string, V>(keys: K[] | readonly K[], values: V[] | readonly V[]): Record<K, V> {
  const result = {} as Record<K, V>;
  const length = Math.min(keys.length, values.length);
  for (let i = 0; i < length; i++) {
    result[keys[i]!] = values[i]!;
  }
  return result;
}

export function zipObjectDeep<V>(paths: string[] | readonly string[], values: V[] | readonly V[]): Record<string, V> {
  const result: Record<string, V> = {};
  const length = Math.min(paths.length, values.length);
  for (let i = 0; i < length; i++) {
    const path = paths[i]!;
    const keys = path.split('.');
    let current: Record<string, unknown> = result;
    for (let j = 0; j < keys.length - 1; j++) {
      const key = keys[j]!;
      if (!(key in current)) {
        current[key] = {};
      }
      current = current[key] as Record<string, unknown>;
    }
    current[keys[keys.length - 1]!] = values[i];
  }
  return result;
}

export function groupBy<T, K extends string | number>(arr: T[] | readonly T[], iteratee: (value: T) => K): Record<K, T[]> {
  const result = {} as Record<K, T[]>;
  for (const item of arr) {
    const key = iteratee(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key]!.push(item);
  }
  return result;
}

export function keyBy<T, K extends string | number>(arr: T[] | readonly T[], iteratee: (value: T) => K): Record<K, T> {
  const result = {} as Record<K, T>;
  for (const item of arr) {
    const key = iteratee(item);
    result[key] = item;
  }
  return result;
}

export function countBy<T, K extends string | number>(arr: T[] | readonly T[], iteratee: (value: T) => K): Record<K, number> {
  const result = {} as Record<K, number>;
  for (const item of arr) {
    const key = iteratee(item);
    result[key] = (result[key] ?? 0) + 1;
  }
  return result;
}

export function sortBy<T>(arr: T[] | readonly T[], iteratees: ((value: T) => unknown)[]): T[] {
  return [...arr].sort((a, b) => {
    for (const iteratee of iteratees) {
      const aVal = iteratee(a);
      const bVal = iteratee(b);
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        if (aVal < bVal) return -1;
        if (aVal > bVal) return 1;
      } else if (typeof aVal === 'string' && typeof bVal === 'string') {
        if (aVal < bVal) return -1;
        if (aVal > bVal) return 1;
      }
    }
    return 0;
  });
}

export function orderBy<T>(arr: T[] | readonly T[], iteratees: ((value: T) => unknown)[], orders: ('asc' | 'desc')[]): T[] {
  return [...arr].sort((a, b) => {
    for (let i = 0; i < iteratees.length; i++) {
      const iteratee = iteratees[i]!;
      const order = orders[i] ?? 'asc';
      const aVal = iteratee(a);
      const bVal = iteratee(b);
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        if (aVal < bVal) return order === 'asc' ? -1 : 1;
        if (aVal > bVal) return order === 'asc' ? 1 : -1;
      } else if (typeof aVal === 'string' && typeof bVal === 'string') {
        if (aVal < bVal) return order === 'asc' ? -1 : 1;
        if (aVal > bVal) return order === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });
}

export function partition<T>(arr: T[] | readonly T[], predicate: (value: T, index: number) => boolean): [T[], T[]] {
  const pass: T[] = [];
  const fail: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i]!, i)) {
      pass.push(arr[i]!);
    } else {
      fail.push(arr[i]!);
    }
  }
  return [pass, fail];
}

export function findIndex<T>(arr: T[] | readonly T[], predicate: (value: T, index: number) => boolean, fromIndex: number = 0): number {
  for (let i = fromIndex; i < arr.length; i++) {
    if (predicate(arr[i]!, i)) {
      return i;
    }
  }
  return -1;
}

export function findLastIndex<T>(arr: T[] | readonly T[], predicate: (value: T, index: number) => boolean, fromIndex?: number): number {
  const start = fromIndex ?? arr.length - 1;
  for (let i = start; i >= 0; i--) {
    if (predicate(arr[i]!, i)) {
      return i;
    }
  }
  return -1;
}

export function indexOf<T>(arr: T[] | readonly T[], value: T, fromIndex: number = 0): number {
  return arr.indexOf(value, fromIndex);
}

export function lastIndexOf<T>(arr: T[] | readonly T[], value: T, fromIndex?: number): number {
  return arr.lastIndexOf(value, fromIndex);
}

export function find<T>(arr: T[] | readonly T[], predicate: (value: T, index: number) => boolean): T | undefined {
  return arr.find(predicate);
}

export function findLast<T>(arr: T[] | readonly T[], predicate: (value: T, index: number) => boolean): T | undefined {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i]!, i)) {
      return arr[i];
    }
  }
  return undefined;
}

export function includes<T>(arr: T[] | readonly T[], value: T, fromIndex: number = 0): boolean {
  return arr.includes(value, fromIndex);
}

export function every<T>(arr: T[] | readonly T[], predicate: (value: T, index: number) => boolean): boolean {
  return arr.every(predicate);
}

export function some<T>(arr: T[] | readonly T[], predicate: (value: T, index: number) => boolean): boolean {
  return arr.some(predicate);
}

export function none<T>(arr: T[] | readonly T[], predicate: (value: T, index: number) => boolean): boolean {
  return !arr.some(predicate);
}

export function map<T, U>(arr: T[] | readonly T[], iteratee: (value: T, index: number) => U): U[] {
  return arr.map(iteratee);
}

export function flatMap<T, U>(arr: T[] | readonly T[], iteratee: (value: T, index: number) => U | U[]): U[] {
  return arr.flatMap(iteratee);
}

export function flatMapDeep<T, U>(arr: T[] | readonly T[], iteratee: (value: T, index: number) => unknown): U[] {
  return arr.flatMap(iteratee).flat(Infinity) as U[];
}

export function flatMapDepth<T, U>(arr: T[] | readonly T[], iteratee: (value: T, index: number) => unknown, depth: number = 1): U[] {
  return arr.flatMap(iteratee).flat(depth) as U[];
}

export function filter<T, S extends T>(arr: T[] | readonly T[], predicate: (value: T, index: number) => value is S): S[];
export function filter<T>(arr: T[] | readonly T[], predicate: (value: T, index: number) => boolean): T[];
export function filter<T>(arr: T[] | readonly T[], predicate: (value: T, index: number) => boolean): T[] {
  return arr.filter(predicate);
}

export function reject<T>(arr: T[] | readonly T[], predicate: (value: T, index: number) => boolean): T[] {
  return arr.filter((item, index) => !predicate(item, index));
}

export function reduce<T, U>(arr: T[] | readonly T[], iteratee: (accumulator: U, value: T, index: number) => U, initialValue: U): U {
  let result: U = initialValue;
  for (let i = 0; i < arr.length; i++) {
    result = iteratee(result, arr[i]!, i);
  }
  return result;
}

export function reduceRight<T, U>(arr: T[] | readonly T[], iteratee: (accumulator: U, value: T, index: number) => U, initialValue: U): U {
  let result: U = initialValue;
  for (let i = arr.length - 1; i >= 0; i--) {
    result = iteratee(result, arr[i]!, i);
  }
  return result;
}

export function forEach<T>(arr: T[] | readonly T[], iteratee: (value: T, index: number) => void | boolean): void {
  for (let i = 0; i < arr.length; i++) {
    if (iteratee(arr[i]!, i) === false) {
      break;
    }
  }
}

export function forEachRight<T>(arr: T[] | readonly T[], iteratee: (value: T, index: number) => void | boolean): void {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (iteratee(arr[i]!, i) === false) {
      break;
    }
  }
}

export function size<T>(arr: T[] | readonly T[]): number {
  return arr.length;
}

export function fill<T>(arr: T[], value: T, start: number = 0, end?: number): T[] {
  return arr.fill(value, start, end);
}

export function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

export function concat<T>(...arrays: (T | T[] | readonly T[])[]): T[] {
  return ([] as T[]).concat(...arrays);
}

export function slice<T>(arr: T[] | readonly T[], start?: number, end?: number): T[] {
  return arr.slice(start, end);
}

export function splice<T>(arr: T[], start: number, deleteCount?: number, ...items: T[]): T[] {
  return arr.splice(start, deleteCount ?? arr.length - start, ...items);
}

export function push<T>(arr: T[], ...items: T[]): number {
  return arr.push(...items);
}

export function pop<T>(arr: T[]): T | undefined {
  return arr.pop();
}

export function shift<T>(arr: T[]): T | undefined {
  return arr.shift();
}

export function unshift<T>(arr: T[], ...items: T[]): number {
  return arr.unshift(...items);
}

export function join<T>(arr: T[] | readonly T[], separator: string = ','): string {
  return arr.join(separator);
}

export function indexOfAll<T>(arr: T[] | readonly T[], value: T): number[] {
  const indices: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      indices.push(i);
    }
  }
  return indices;
}

export function pull<T>(arr: T[], ...values: T[]): T[] {
  const set = new Set(values);
  for (let i = arr.length - 1; i >= 0; i--) {
    if (set.has(arr[i]!)) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

export function pullAll<T>(arr: T[], values: T[]): T[] {
  return pull(arr, ...values);
}

export function pullAllBy<T, K>(arr: T[], values: T[], iteratee: (value: T) => K): T[] {
  const set = new Set(values.map(iteratee));
  for (let i = arr.length - 1; i >= 0; i--) {
    if (set.has(iteratee(arr[i]!))) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

export function pullAllWith<T>(arr: T[], values: T[], comparator: (a: T, b: T) => boolean): T[] {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (values.some((val) => comparator(arr[i]!, val))) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

export function pullAt<T>(arr: T[], ...indices: number[]): T[] {
  const sortedIndices = [...indices].sort((a, b) => b - a);
  const removed: T[] = [];
  for (const index of sortedIndices) {
    removed.unshift(...arr.splice(index, 1));
  }
  return removed;
}

export function remove<T>(arr: T[], predicate: (value: T, index: number) => boolean): T[] {
  const removed: T[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i]!, i)) {
      removed.unshift(...arr.splice(i, 1));
    }
  }
  return removed;
}

export function at<T>(arr: T[] | readonly T[], ...indices: number[]): (T | undefined)[] {
  return indices.map((index) => nth(arr, index));
}

export function sample<T>(arr: T[] | readonly T[]): T | undefined {
  if (arr.length === 0) return undefined;
  return arr[Math.floor(Math.random() * arr.length)];
}

export function sampleSize<T>(arr: T[] | readonly T[], size: number): T[] {
  const result = [...arr];
  for (let i = 0; i < Math.min(size, result.length); i++) {
    const j = i + Math.floor(Math.random() * (result.length - i));
    [result[i], result[j]] = [result[j]!, result[i]!];
  }
  return result.slice(0, size);
}

export function shuffle<T>(arr: T[] | readonly T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j]!, result[i]!];
  }
  return result;
}

export function min<T>(arr: T[] | readonly T[]): T | undefined {
  if (arr.length === 0) return undefined;
  return Math.min(...arr as number[]) as T;
}

export function max<T>(arr: T[] | readonly T[]): T | undefined {
  if (arr.length === 0) return undefined;
  return Math.max(...arr as number[]) as T;
}

export function minBy<T>(arr: T[] | readonly T[], iteratee: (value: T) => number): T | undefined {
  if (arr.length === 0) return undefined;
  let minItem = arr[0];
  let minValue = iteratee(minItem!);
  for (let i = 1; i < arr.length; i++) {
    const value = iteratee(arr[i]!);
    if (value < minValue) {
      minValue = value;
      minItem = arr[i];
    }
  }
  return minItem;
}

export function maxBy<T>(arr: T[] | readonly T[], iteratee: (value: T) => number): T | undefined {
  if (arr.length === 0) return undefined;
  let maxItem = arr[0];
  let maxValue = iteratee(maxItem!);
  for (let i = 1; i < arr.length; i++) {
    const value = iteratee(arr[i]!);
    if (value > maxValue) {
      maxValue = value;
      maxItem = arr[i];
    }
  }
  return maxItem;
}

export function sum(arr: number[] | readonly number[]): number {
  let result = 0;
  for (const val of arr) {
    result += val;
  }
  return result;
}

export function sumBy<T>(arr: T[] | readonly T[], iteratee: (value: T) => number): number {
  let result = 0;
  for (const val of arr) {
    result += iteratee(val);
  }
  return result;
}

export function mean(arr: number[] | readonly number[]): number {
  if (arr.length === 0) return 0;
  return sum(arr) / arr.length;
}

export function meanBy<T>(arr: T[] | readonly T[], iteratee: (value: T) => number): number {
  if (arr.length === 0) return 0;
  return sumBy(arr, iteratee) / arr.length;
}

export function median(arr: number[] | readonly number[]): number {
  if (arr.length === 0) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid]! : (sorted[mid - 1]! + sorted[mid]!) / 2;
}

export function mode<T>(arr: T[] | readonly T[]): T[] {
  const counts = new Map<T, number>();
  let maxCount = 0;
  for (const item of arr) {
    const count = (counts.get(item) ?? 0) + 1;
    counts.set(item, count);
    maxCount = Math.max(maxCount, count);
  }
  return [...counts.entries()].filter(([, count]) => count === maxCount).map(([key]) => key);
}

export function variance(arr: number[] | readonly number[], population: boolean = false): number {
  if (arr.length === 0) return 0;
  const avg = mean(arr);
  const squaredDiffs = arr.map((val) => Math.pow(val - avg, 2));
  return sum(squaredDiffs) / (population ? arr.length : arr.length - 1);
}

export function standardDeviation(arr: number[] | readonly number[], population: boolean = false): number {
  return Math.sqrt(variance(arr, population));
}

export function range(start: number, end?: number, step: number = 1): number[] {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  const result: number[] = [];
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  } else if (step < 0) {
    for (let i = start; i > end; i += step) {
      result.push(i);
    }
  }
  return result;
}

export function fromPairs<T extends string | number, U>(pairs: [T, U][] | readonly [T, U][]): Record<T, U> {
  return Object.fromEntries(pairs) as Record<T, U>;
}

export function toPairs<T extends object>(obj: T): [string, T[keyof T]][] {
  return Object.entries(obj);
}

export function sortedIndex<T>(arr: T[] | readonly T[], value: T): number {
  let low = 0;
  let high = arr.length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid]! < value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

export function sortedIndexBy<T>(arr: T[] | readonly T[], value: T, iteratee: (value: T) => number): number {
  const valueKey = iteratee(value);
  let low = 0;
  let high = arr.length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (iteratee(arr[mid]!) < valueKey) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

export function sortedIndexOf<T>(arr: T[] | readonly T[], value: T): number {
  const index = sortedIndex(arr, value);
  return arr[index] === value ? index : -1;
}

export function sortedLastIndex<T>(arr: T[] | readonly T[], value: T): number {
  let low = 0;
  let high = arr.length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (value < arr[mid]!) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

export function sortedLastIndexOf<T>(arr: T[] | readonly T[], value: T): number {
  const index = sortedLastIndex(arr, value) - 1;
  return arr[index] === value ? index : -1;
}

export function sortedUniq<T>(arr: T[] | readonly T[]): T[] {
  const result: T[] = [];
  for (const item of arr) {
    if (result.length === 0 || result[result.length - 1] !== item) {
      result.push(item);
    }
  }
  return result;
}

export function sortedUniqBy<T, K>(arr: T[] | readonly T[], iteratee: (value: T) => K): T[] {
  const result: T[] = [];
  let lastKey: K | undefined;
  for (const item of arr) {
    const key = iteratee(item);
    if (lastKey === undefined || lastKey !== key) {
      result.push(item);
      lastKey = key;
    }
  }
  return result;
}

export function isArrayLike(value: unknown): boolean {
  return value != null && typeof value !== 'function' && typeof (value as { length: unknown }).length === 'number';
}

export function isArrayLikeObject(value: unknown): value is object & { length: number } {
  return typeof value === 'object' && value !== null && isArrayLike(value);
}

export function castArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}

export function toArray<T>(value: T | T[] | readonly T[]): T[] {
  if (Array.isArray(value)) return [...value];
  if (value === null || value === undefined) return [];
  return [value as T];
}

export function wrap<T>(value: T | T[] | undefined | null): T[] {
  if (value === null || value === undefined) return [];
  return Array.isArray(value) ? value : [value];
}

export function unwrap<T>(value: T | T[] | undefined | null): T | undefined {
  if (value === null || value === undefined) return undefined;
  return Array.isArray(value) ? value[0] : value;
}

export function flattenObject(obj: Record<string, unknown>, prefix: string = ''): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(result, flattenObject(value as Record<string, unknown>, newKey));
    } else {
      result[newKey] = value;
    }
  }
  return result;
}

export function unflattenObject(obj: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    const keys = key.split('.');
    let current: Record<string, unknown> = result;
    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i]!;
      if (!(k in current)) {
        current[k] = {};
      }
      current = current[k] as Record<string, unknown>;
    }
    current[keys[keys.length - 1]!] = value;
  }
  return result;
}

export function isArrayBuffer(value: unknown): value is ArrayBuffer {
  return value instanceof ArrayBuffer;
}

export function isTypedArray(value: unknown): boolean {
  return ArrayBuffer.isView(value) && !(value instanceof DataView);
}

export function isBuffer(value: unknown): boolean {
  return typeof Buffer !== 'undefined' && Buffer.isBuffer(value);
}

export function isArrayBufferView(value: unknown): value is ArrayBufferView {
  return ArrayBuffer.isView(value);
}

export function isDataView(value: unknown): value is DataView {
  return value instanceof DataView;
}

export function isFloat32Array(value: unknown): value is Float32Array {
  return value instanceof Float32Array;
}

export function isFloat64Array(value: unknown): value is Float64Array {
  return value instanceof Float64Array;
}

export function isInt8Array(value: unknown): value is Int8Array {
  return value instanceof Int8Array;
}

export function isInt16Array(value: unknown): value is Int16Array {
  return value instanceof Int16Array;
}

export function isInt32Array(value: unknown): value is Int32Array {
  return value instanceof Int32Array;
}

export function isUint8Array(value: unknown): value is Uint8Array {
  return value instanceof Uint8Array;
}

export function isUint8ClampedArray(value: unknown): value is Uint8ClampedArray {
  return value instanceof Uint8ClampedArray;
}

export function isUint16Array(value: unknown): value is Uint16Array {
  return value instanceof Uint16Array;
}

export function isUint32Array(value: unknown): value is Uint32Array {
  return value instanceof Uint32Array;
}

export function isBigInt64Array(value: unknown): value is BigInt64Array {
  return typeof BigInt64Array !== 'undefined' && value instanceof BigInt64Array;
}

export function isBigUint64Array(value: unknown): value is BigUint64Array {
  return typeof BigUint64Array !== 'undefined' && value instanceof BigUint64Array;
}

export function toArrayBuffer(value: string | ArrayBuffer | ArrayBufferView): ArrayBuffer {
  if (value instanceof ArrayBuffer) return value;
  if (ArrayBuffer.isView(value)) return value.buffer as ArrayBuffer;
  const encoder = new TextEncoder();
  return encoder.encode(value).buffer;
}

export function toUint8Array(value: string | ArrayBuffer | ArrayBufferView): Uint8Array {
  if (value instanceof Uint8Array) return value;
  if (typeof value === 'string') {
    return new TextEncoder().encode(value);
  }
  if (value instanceof ArrayBuffer) {
    return new Uint8Array(value);
  }
  return new Uint8Array(value.buffer);
}

export function toStringArray(value: ArrayBuffer | ArrayBufferView): string {
  const arr = value instanceof ArrayBuffer ? new Uint8Array(value) : new Uint8Array(value.buffer);
  return new TextDecoder().decode(arr);
}
