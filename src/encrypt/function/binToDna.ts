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
  const dnaArr = Object.keys(dna);
  return data
    .match(/../g)
    .map((x: string): string => {
      return dnaArr[parseInt(x, 2)];
    })
    .join('');
};

export { binToDna };
