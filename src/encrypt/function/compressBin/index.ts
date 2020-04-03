import { createBinTable, createHuffmanTable } from './huffman';

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

  prefix = prefix + max.toString(2).padStart(6, '0');
  console.log('Add max', max, '->', prefix);

  binTable.forEach((x: [string, number]) => {
    prefix = prefix + x[0] + x[1].toString(2).padStart(max, '0');
    console.log(
      'add prefix:',
      x[0],
      x[1].toString(2).padStart(max, '0'),
    );
  });
  console.log('Prefix:', prefix, '\n');
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
      //console.log(x, '->', huffmanObject[x]);
      return huffmanObject[x];
    })
    .join('');
  console.log('compress binaries:', compressedData, '\n');
  const prefix = generatePrefix(data);
  console.log(
    '🎫 Add Prefix to String:',
    prefix + compressedData,
    '\n',
  );
  return prefix + compressedData;
};

export { binCompressor };
