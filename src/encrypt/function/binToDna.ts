/*
Carl: The pale blue dot, the only home we've ever known.
Elon: Mars!
*/

/**
 *
 * @param {string} data input data in form of binaries string (0 or 1)
 * @returns nucleotide sequences string
 */
const binToDna = (data: string): string => {
  console.log('🧬 Convert to NT');
  let dna: string[] = ['A', 'T', 'C', 'G'];

  const nt = data
    .match(/[01]{2}/g)
    .map((x: string): string => dna[parseInt(x, 2)])
    .join('');

  let final = nt;
  final = final.match(/[ATCG]{1,8}/g).join('G');

  return final;
};

export { binToDna };
