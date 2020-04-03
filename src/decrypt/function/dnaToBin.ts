import { dna } from '../../function/dna';

/**
 *
 * @param {string} data input datain form of nucleotide sequences string (A, T, C or G)
 * @returns binaries string
 */
const dnaToBin = (data: string): string => {
  console.log('💻 Convert to Binaries\n');
  const bin = data
    .split('')
    .map((x: string) => dna[x])
    .join('');
  console.log('👾 Binaries: ', bin, '\n');
  return bin;
};

export { dnaToBin };
