import { createHuffmanTableD } from './huffman';

const bin =
  '111100010010011110010110110000011110000010110000011110001010100110011110010110001010111100111100111100111100';

/**
 *
 * @param {string} data binaries (0,1)
 * @returns {string} compressed binaries
 */

const decodePrefix = () => {
  let data: string =
    '000011010010001000010001100110001010110010110000010001010010011110100111100101';
  const max = parseInt(data.slice(0, 6), 2);
  console.log(max);
  const split = max + 6;
  data = data.substr(6);
  const regex = new RegExp('.{1,' + split + '}', 'g');
  const array = data.match(regex).map((x: string): [
    string,
    number,
  ] => {
    const bin = x.slice(0, 6);
    const freq = parseInt(x.substr(x.length - 3), 2);
    console.log(x, bin, x.substr(x.length - 3), freq);
    return [bin, freq];
  });
  createHuffmanTableD(array);
};

console.log(decodePrefix());

export { decodePrefix };
