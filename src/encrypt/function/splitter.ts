const splitter = (data: string): string[] => {
  console.log('✂️ Split Data\n');

  const length: number = data.length;
  const size: number = length <= 80 ? 1 : Math.ceil(length / 60);
  const splitLength: number = Math.floor(length / size);

  let i: number;
  let leftOver: number = length % size;
  let temp: string = '';
  let splitArr: string[] = [];

  console.log(
    'full length:',
    length,
    '\ntotal amount of nt:',
    size,
    '\nlength per nt:',
    splitLength,
    '\n',
  );

  for (i = 0; i < length; i++) {
    temp = temp + data[i];
    if (temp.length === splitLength || i === length - 1) {
      if (leftOver > 0) {
        ++i;
        --leftOver;
        temp = temp + data[i];
      }
      splitArr.push(temp);
      console.log('line', Math.ceil(i / splitLength), ':', temp);
      temp = '';
    }
  }

  for (i = 1; i < splitArr.length; i++) {
    splitArr[i] =
      splitArr[i - 1]
        .substring(splitArr[i - 1].length - 20)
        .split('')
        .reverse()
        .map((x: string) => {
          const dna = {
            A: 'T',
            T: 'A',
            C: 'G',
            G: 'C',
          };
          return dna[x];
        })
        .join('') + splitArr[i];
  }

  console.log('\n');
  splitArr.forEach((x) => {
    console.log(
      'C:',
      ((x.match(/C/g).length / x.length) * 100).toFixed(2),
      'G:',
      ((x.match(/G/g).length / x.length) * 100).toFixed(2),
    );
  });

  console.log('');
  return splitArr;
};

export { splitter };
