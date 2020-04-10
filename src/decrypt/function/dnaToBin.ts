/**
 *
 * @param {string} data input datain form of nucleotide sequences string (A, T, C or G)
 * @returns binaries string
 */
const dnaToBin = (data: string): string => {
  data = data
    .match(/.{1,9}/g)
    .map((el) => {
      return el.length === 9 ? el.slice(0, -1) : el;
    })
    .join('');
  console.log(data);
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

// Happy Birthday
// G3 G3 A2 G2 C2 B1
// G3 G3 A2 G2 D2 C1
// G3 G3 G2 E2 C2 B2 A2
// F3 F3 E2 C2 D2 C1
