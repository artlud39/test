const isEqual = require('./task-2.js');

test('примитивные типы', () => {
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual('a', 'a')).toBe(true);
    expect(isEqual('a', 'b')).toBe(false);
    expect(isEqual(true, true)).toBe(true);
    expect(isEqual(true, false)).toBe(false);
});

test('массивы', () => {
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    expect(isEqual([1, 2], [1, 2, 3])).toBe(false);
    expect(isEqual([], [])).toBe(true);
});

test('объекты', () => {
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
    expect(isEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
    expect(isEqual({}, {})).toBe(true);
});

test('вложенные структуры', () => {
    expect(isEqual({ a: { b: 2 } }, { a: { b: 2 } })).toBe(true);
    expect(isEqual({ a: { b: 2 } }, { a: { b: 3 } })).toBe(false);
    expect(isEqual([1, { a: 2 }], [1, { a: 2 }])).toBe(true);
    expect(isEqual([1, { a: 2 }], [1, { a: 3 }])).toBe(false);
});

test('смешанные типы', () => {
    expect(isEqual({ a: [1, 2, 3] }, { a: [1, 2, 3] })).toBe(true);
    expect(isEqual({ a: [1, 2, 3] }, { a: [1, 2, 4] })).toBe(false);
});

test('сравнение null и undefined', () => {
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(null, undefined)).toBe(false);
    expect(isEqual(undefined, undefined)).toBe(true);
});