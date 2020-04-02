import { dna } from '../../function/dna';

/**
 *
 * @param {string} data input datain form of nucleotide sequences string (A, T, C or G)
 * @returns binaries string
 */
const dnaToBin = (data: string): string => {
  return data
    .split('')
    .map((x: string) => dna[x])
    .join('');
};

export { dnaToBin };
