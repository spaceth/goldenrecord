const dna = {
  A: '00',
  T: '01',
  C: '10',
  G: '11',
};

const binToDna = (data: string): string => {
  const dnaArr = Object.keys(dna);
  return data
    .match(/../g)
    .map((x: string) => {
      return dnaArr[parseInt(x, 2)];
    })
    .join('');
};

const dnaToBin = (data: string): string => {
  return data
    .split('')
    .map((x: string) => dna[x])
    .join('');
};

export { dnaToBin, binToDna };
