import {
  createBinTable,
  createHuffmanTable,
} from '../../function/huffman';

// # huffman prefix
// bit used to define length - pair
// original - length - amount

const generatePrefix = (data: string): string => {
  /* data = data.sort(
    (a: [string, string], b: [string, string]): number => {
      return a[1].length - b[1].length;
    },
  );

  const num: number = 5;
  let prefix: string = num.toString(2) + ' ';

  console.log('Add initial number:', num, '->', prefix);

  const min: number = data[0][1].length;
  const max: number = data[data.length - 1][1].length;
  let i: number = 0;

  for (i = min; i <= max; i++) {
    let filterArr = data.filter((x: [string, string]): boolean => {
      return x[1].length === i;
    });
    prefix =
      prefix + filterArr.length.toString(2).padStart(5, '0') + ' ';
    console.log(
      'length label added:',
      filterArr.length,
      '->',
      filterArr.length.toString(2).padStart(5, '0'),
    );
    filterArr.forEach((x: [string, string]): void => {
      prefix = prefix + x[0] + x[1] + ' ';
      console.log('prefix added:', x[0], x[1]);
    });
  } */

  /* LOL */

  console.log('📒 Add Prefixes');
  let prefix: string = '';

  const binTable = createBinTable(data);
  const max = binTable[binTable.length - 1][1].toString(2).length;
  const size = binTable.length;

  prefix = prefix + size.toString(2).padStart(8, '0');
  console.log('Add size', size, '->', prefix);

  prefix = prefix + max.toString(2).padStart(8, '0');
  console.log('Add max', max, '->', prefix);

  binTable.forEach((x: [string, number]) => {
    prefix = prefix + x[0] + x[1].toString(2).padStart(max, '0');
    /*console.log(
      'add prefix:',
      x[0],
      x[1].toString(2).padStart(max, '0'),
    );*/
  });

  return prefix;
};

/**
 *
 * @param {string} data binaries (0,1)
 * @returns {string} compressed binaries
 */
const binCompressor = (data: string): string => {
  let huffmanTable: [string, string][] = createHuffmanTable(data);
  let huffmanObject: { [key: string]: string } = {};
  huffmanTable.forEach((x: [string, string]): void => {
    huffmanObject[x[0]] = x[1];
  });
  console.log('🔑 Replace binaries with keys');
  let compressedData = data
    .match(/....../g)
    .map((x: string): string => {
      //NOTE: full log console.log(x, '->', huffmanObject[x]);
      return huffmanObject[x];
    })
    .join('');
  console.log('compressed binaries:', compressedData, '\n');
  const prefix = generatePrefix(data);
  let result = prefix + compressedData;
  if (result.length % 2 === 1) {
    console.log('odd length -> label 001 (0+C) at the end');
    result += '001';
  } else {
    result += '11';
    console.log('even length -> label 11 (G) at the end');
  }
  console.log('🗜 compression result:', result, '\n');
  return result;
};

export { binCompressor };
