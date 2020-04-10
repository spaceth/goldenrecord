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
  let i: number = 0;
  console.log('🧬 Convert to NT');
  let binCount: [number, string][] = [
    [0, '00'],
    [0, '01'],
    [0, '10'],
    [0, '11'],
  ];
  let dna = 'CGAT'.split('');
  //let dnaArr: any = Object.keys(dna);
  data.match(/../g).forEach((x: string): void => {
    ++binCount[parseInt(x, 2)][0];
  });
  binCount.sort((x: [number, string], y: [number, string]) => {
    return x[0] - y[0];
  });
  //console.log('\ncount:', ...binCount, '\n');

  let dnaObject = {};
  binCount.forEach(
    (x: [number, string]) => (dnaObject[x[1]] = dna[i++]),
  );
  console.log(dnaObject, '\n');

  let header: string = Array.from(Array(10).keys())
    .map((x: number) => {
      return dnaObject[x.toString(2).padStart(2, '0')];
    })
    .join('');

  //console.log('create header:', header, '\n');

  const nt = data
    .match(/../g)
    .map((x: string): string => dnaObject[x])
    .join('');
  console.log('header + nucleotides: ', header, '+', nt, '\n');

  let final = header + nt;
  final = final.match(/.{1,8}/g).join('G');

  return final;
};

export { binToDna };
