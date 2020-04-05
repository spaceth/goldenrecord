/**
 *
 * @param {string} data input datain form of nucleotide sequences string (A, T, C or G)
 * @returns binaries string
 */
const dnaToBin = (data: string): string => {
  let header = data.substring(0, 4);
  let i: number = 0;
  console.log('header:', header);
  let dna = {};
  header.split('').forEach((x) => {
    dna[x] = i.toString(2).padStart(2, '0');
    console.log(x, ':', i.toString(2).padStart(2, '0'));
    ++i;
  });

  data = data.substring(4);

  console.log('\n💻 Convert to Binaries\n');
  const bin = data
    .split('')
    .map((x: string) => dna[x])
    .join('');
  console.log('👾 Binaries: ', bin, '\n');
  return bin;
};

export { dnaToBin };
