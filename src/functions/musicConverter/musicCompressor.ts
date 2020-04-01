/**
 *
 * @param {string} data input data in form of music pitches string (note-octave)
 * @return {string} best substring sequence
 */
const findSequence = (data: string): string => {
  let i: number;
  let j: number;
  let same: any = [];

  data = data + '-';
  //console.log(data, data.length);

  let dataCalc =
    data.length % 2 === 0 ? data.length : data.length - 3;

  for (i = dataCalc / 2; i >= 9; i -= 3) {
    let max: number = 0;
    let strMap: Map<string, Array<number>> = new Map();
    let numMap: Map<number, Array<string>> = new Map();
    for (j = 0; j < data.length - i + 1; j += 3) {
      let str = data.substr(j, i);
      if (!strMap.has(str)) {
        strMap.set(str, [1, j]);
        // console.log('new key', str, strMap.get(str));
      } else {
        let [count, loc] = strMap.get(str);
        if (j >= loc + i) {
          strMap.set(str, [++count, j]);
          // console.log('update key', str, j, strMap.get(str));
        }
      }
    }

    strMap.forEach((valueArr, key) => {
      const value = valueArr[0];
      if (value >= max) {
        max = value;
        if (!numMap.has(value)) {
          numMap.set(value, [key]);
        } else {
          let keyArr = numMap.get(value);
          keyArr.push(key);
          numMap.set(value, keyArr);
        }
      }
    });

    if (max > 1) {
      //console.log(i, max, numMap.get(max));
      same.push([
        data.length - i * (max - 1) + (max + 1) * 3,
        numMap.get(max),
      ]);
    }
  }

  const compressLength = same.map(x => x[0]);
  const indexOfMin = compressLength.indexOf(
    Math.min(...compressLength),
  );
  const minString: string = same.map(x => x[1])[indexOfMin];

  return minString;
};

// TODO: rewrite this mess omg

const transformString = (data: string): string => {
  data = data + '-';
  let subSequence: string = findSequence(data);
  console.log(subSequence);
  let loc = data.indexOf(subSequence);
  data = [
    'R0-' +
      data.slice(loc, loc + subSequence.length + 1) +
      'R0-' +
      data.slice(loc + subSequence.length),
  ].join();
  console.log(loc, data);
  loc = data.indexOf(subSequence, loc + 4);
  while (loc !== -1) {
    //console.log(loc);
    data = [
      data.slice(0, loc - 1) +
        'R0-' +
        data.slice(loc + subSequence.length),
    ].join('');
    //console.log(data);
    loc = data.indexOf(subSequence, loc + 1);
  }
  data = data.slice(0, -2);
  console.log(data);
  return data;
};

const musicCompressor = (data: string): string => {
  let i: number;
  for (i = 0; i < 4; i++) {
    data = transformString(data);
  }
  return data;
};

console.log(
  musicCompressor(
    'E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4',
  ),
);

export { musicCompressor };
