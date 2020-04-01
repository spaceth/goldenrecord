/**
 * @param {object} dna binaries representative of each nucleic acid
 */
const dna: { [keys: string]: string } = {
  A: '00',
  T: '01',
  C: '10',
  G: '11',
};

/**
 *
 * @param {string} data input data in form of binaries string (0 or 1)
 * @returns nucleotide sequences string
 */
const binToDna = (data: string): string => {
  const dnaArr = Object.keys(dna);
  return data
    .match(/../g)
    .map((x: string) => {
      return dnaArr[parseInt(x, 2)];
    })
    .join('');
};

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

export { dnaToBin, binToDna };
