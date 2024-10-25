import { ChunkOptions } from './types';

export function* chunkIterator<T>(array: T[], size: number): Generator<T[]> {
  for (let i = 0; i < array.length; i += size) {
    yield array.slice(i, Math.min(i + size, array.length));
  }
}

export function arrayChunks<T>(
  array: T[],
  size: number,
  options: ChunkOptions = {}
): T[][] | Generator<T[]> {
  // Validate inputs
  if (!Array.isArray(array)) {
    throw new TypeError('First argument must be an array');
  }
  if (!Number.isInteger(size) || size < 1) {
    throw new TypeError('Chunk size must be a positive integer');
  }

  // Return iterator if requested
  if (options.returnIterator) {
    return chunkIterator(array, size);
  }

  // Create chunks
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    
    // Handle incomplete chunks if fillIncomplete is true
    if (options.fillIncomplete && chunk.length < size) {
      chunk.push(...Array(size - chunk.length).fill(options.fillValue));
    }
    
    chunks.push(chunk);
  }

  return chunks;
}

export default arrayChunks;
