/*
Carl: The pale blue dot, the only home we've ever known.
Elon: Mars!
*/

import { dna } from '../../function/dna';

/**
 *
 * @param {string} data input data in form of binaries string (0 or 1)
 * @returns nucleotide sequences string
 */
const binToDna = (data: string): string => {
  console.log('🧬 Convert to NT');
  const dnaArr = Object.keys(dna);
  const nt = data
    .match(/../g)
    .map((x: string): string => {
      return dnaArr[parseInt(x, 2)];
    })
    .join('');
  console.log('nucleotides: ', nt, '\n');
  return nt;
};

export { binToDna };
