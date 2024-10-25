import arrayChunks, { chunkIterator } from './index';

describe('arrayChunks', () => {
  test('basic chunking', () => {
    expect(arrayChunks([1, 2, 3, 4, 5], 2))
      .toEqual([[1, 2], [3, 4], [5]]);
  });

  test('empty array', () => {
    expect(arrayChunks([], 3)).toEqual([]);
  });

  test('chunk size equal to array length', () => {
    expect(arrayChunks([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
  });

  test('chunk size greater than array length', () => {
    expect(arrayChunks([1, 2], 3)).toEqual([[1, 2]]);
  });

  test('fill incomplete chunks', () => {
    expect(arrayChunks([1, 2, 3, 4, 5], 3, { 
      fillIncomplete: true, 
      fillValue: null 
    })).toEqual([[1, 2, 3], [4, 5, null]]);
  });

  test('iterator support', () => {
    const iterator = arrayChunks([1, 2, 3, 4], 2, { 
      returnIterator: true 
    }) as Generator<number[]>;
    
    expect([...iterator]).toEqual([[1, 2], [3, 4]]);
  });

  test('invalid inputs', () => {
    expect(() => arrayChunks('not an array' as any, 2)).toThrow(TypeError);
    expect(() => arrayChunks([1, 2, 3], 0)).toThrow(TypeError);
    expect(() => arrayChunks([1, 2, 3], -1)).toThrow(TypeError);
  });
});
