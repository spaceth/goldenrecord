import { createHuffmanTableD } from '../../function/huffman';

/**
 *
 * @param {string} data binaries (0,1)
 * @returns {string} compressed binaries
 */

const bin =
  '000010000000001101001000100001000110011000101011001011000001000101001001111010011110010111101100100000101101110010110010100100010011111111';

const decodePrefix = (data: string): [any, number] => {
  const amount = parseInt(data.slice(0, 8), 2);
  const max = parseInt(data.slice(8, 16), 2);

  console.log(
    'amount of prefixes:',
    data.slice(0, 8),
    amount,
    "\nbits used to determined prefixes' length:",
    data.slice(8, 16),
    '->',
    max,
    '\n',
  );

  const split = max + 6; //for regex size
  data = data.substr(16);
  const regex = new RegExp('.{1,' + split + '}', 'g');
  const array = data
    .match(regex)
    .slice(0, amount)
    .map((x: string): [string, number] => {
      const bin = x.slice(0, 12);
      const freq = parseInt(x.substr(x.length - max), 2);
      // console.log(x, '->', bin, ':', freq);
      return [bin, freq];
    });
  console.log('');
  return [createHuffmanTableD(array), amount * split + 16];
};

const binUncompressor = (data: string): string => {
  const [prefix, substr] = decodePrefix(data);
  const prefixObject: { [key: string]: string } = {};
  let i: number;

  data = data.substr(substr);

  for (i = 0; i < prefix.length; i++) {
    prefixObject[prefix[i][1]] = prefix[i][0];
  }

  let uncompressedData: string = '';
  let temp: string = '';
  if (data.slice(-2) === '11') {
    console.log('even data - remove identifier 11');
    data = data.slice(0, -2);
  } else {
    console.log('odd data - remove identifier 010');
    data = data.slice(0, -3);
  }

  for (i = 0; i < data.length; i++) {
    temp = temp + data[i];
    //console.log(i, temp);
    if (temp in prefixObject) {
      uncompressedData = uncompressedData + prefixObject[temp];
      //NOTE: Full log console.log(temp, '->', prefixObject[temp]);
      temp = '';
    }
  }

  console.log('📦 uncompressed binaries: ', uncompressedData, '\n');

  return uncompressedData;
};

/*
E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4
E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4
*/

export { binUncompressor };
