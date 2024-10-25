# arrkit 📦

Simple yet powerful array chunking utility - split arrays into chunks with ease.

## Features

- 🚀 Lightweight & fast
- 🛡️ TypeScript support
- 💪 Zero dependencies 
- 🎯 Memory efficient with iterator support
- ✨ Simple API

## Installation

```bash
npm install arrkit

## Usage
import arrkit from 'arrkit';

// Basic chunking
const numbers = [1, 2, 3, 4, 5];
arrkit(numbers, 2);
// Output: [[1, 2], [3, 4], [5]]

// Fill incomplete chunks
const data = ['a', 'b', 'c', 'd', 'e'];
arrkit(data, 3, { 
  fillIncomplete: true, 
  fillValue: null 
});
// Output: [['a', 'b', 'c'], ['d', 'e', null]]

// Memory efficient iteration
const bigArray = [1, 2, 3, 4, 5, 6, 7, 8];
const iterator = arrkit(bigArray, 3, { 
  returnIterator: true 
});

for (const chunk of iterator) {
  console.log(chunk);
}

## API

arrkit<T>(array: T[], size: number, options?: ChunkOptions)
Parameters
ParameterTypeDescriptionarrayT[]Array to chunksizenumberSize of each chunkoptionsChunkOptionsOptional configuration
Options
OptionTypeDefaultDescriptionfillIncompletebooleanfalseFill incomplete chunksfillValueanyundefinedValue for fillingreturnIteratorbooleanfalseReturn generator instead of array
Common Use Cases

🔄 Batch processing large datasets
📱 Creating grid layouts
🚀 API request batching
📊 Data visualization

Connect

🐦 Twitter: @azagsam
☕ Buy me a coffee buymeacoffee.com/azgsami

License
MIT