import { binToMusic } from '../../../decrypt/function/binToMusic';
import { createHuffmanTable } from './huffman';

const bin =
  '111100010010011110010110110000011110000010110000011110001010100110011110010110001010111100111100111100111100';

/**
 *
 * @param {string} data binaries (0,1)
 * @returns {string} compressed binaries
 */
const binCompression = (data: string): string => {
  let huffmanTable: [string, string][] = createHuffmanTable(data);
  let huffmanObject: { [key: string]: string } = {};
  huffmanTable.forEach((x: [string, string]): void => {
    huffmanObject[x[0]] = x[1];
  });
  console.log('🔑 Replace binaries with keys');
  let compressedData = data
    .match(/....../g)
    .map((x: string): string => {
      console.log(x, '->', huffmanObject[x]);
      return huffmanObject[x];
    })
    .join('');
  console.log('Result:', compressedData, '\n');
  return compressedData;
};

console.log(binCompression(bin));
