import { createToolsObject } from '../../../function/createMusicObject';

/**
 *
 * @param {string} data input data in form of music pitches string (note-octave)
 * @return {string} best substring sequence
 */
const findSequence = (data: string): string[] => {
  let i: number;
  let j: number;
  let same: any = [];

  if (data[data.length - 1] !== '-') data = data + '-';
  //console.log(data, data.length);

  let dataCalc =
    data.length % 2 === 0 ? data.length : data.length - 3;

  for (i = dataCalc / 2; i >= 9; i -= 3) {
    let max: number = 0;
    let strMap: Map<string, Array<number>> = new Map();
    let numMap: Map<number, Array<string>> = new Map();
    for (j = 0; j < data.length - i + 1; j += 3) {
      let str: string = data.substr(j, i);
      if (!strMap.has(str)) {
        strMap.set(str, [1, j]);
        // console.log('new key', str, strMap.get(str));
      } else {
        let [count, loc] = strMap.get(str);
        if (j >= loc + i) {
          strMap.set(str, [++count, j]);
          //console.log('update key', str, j, strMap.get(str));
        }
      }
    }

    strMap.forEach((valueArr: number[], key: string) => {
      const value: number = valueArr[0];
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

  const compressLength: number[] = same.map((x) => x[0]);
  const indexOfMin: number = compressLength.indexOf(
    Math.min(...compressLength),
  );
  const minString: string[] = same.map((x) => x[1])[indexOfMin];
  //console.log(same.map(x => x[1]));

  return minString;
};

/**
 *
 * @param {string} data input data in form of music pitches string (note-octave)
 * @param {string} key replacement key
 */
const transformString = (data: string, key: string): string => {
  console.log('key:', key);
  if (findSequence(data)) {
    data = data + '-';
    key = key + '-';
    let subSequence: string = findSequence(data)[0];
    if (subSequence[subSequence.length - 1] !== '-')
      subSequence += '-';
    console.log('subsequence:', subSequence);
    data = data.replace(subSequence, key + '.' + key);
    while (data.indexOf(subSequence) !== -1) {
      data = data.replace(subSequence, key);
    }
    data = data.replace('.', subSequence);
    //console.log('hello', data);
    data = data.slice(0, -1);
    console.log('result', data);
    return data;
  }
  console.log('break: subsequences not found');
  return data;
};

const musicCompressor = (data: string): string => {
  const tools: { [keys: string]: string } = createToolsObject();
  const keys: string[] = Object.keys(tools).filter(
    (x: string) => x.indexOf('R') !== -1,
  );
  console.log('🔑 Compressing Music');
  keys.forEach((x: string) => (data = transformString(data, x)));
  console.log('Compressed: ', data);
  console.log('🔒 Done!\n');
  return data;
};

export { musicCompressor };
