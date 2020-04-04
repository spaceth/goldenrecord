const splitter = (data: string): string[] => {
  console.log('✂️ Split Data\n');

  const length: number = data.length;
  const size: number = length <= 80 ? 1 : Math.ceil(length / 60);
  const splitLength: number = Math.floor(length / size);

  let i: number;
  let x: string;
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
      splitArr[i] +
      splitArr[i - 1]
        .substring(0, 20)
        .split('')
        .reverse()
        .join('');
  }

  console.log('');
  return splitArr;
};

export { splitter };
