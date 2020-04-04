import { createToolsObject } from '../../../function/createMusicObject';

const toolsObject = createToolsObject();
const toolsKeys = Object.keys(toolsObject);

/**
 *
 * @param {string} data compressed music data
 * @returns {string} uncompresssed music data
 */
const musicUncompressor = (data: any): string => {
  console.log('\n🔑 Uncompressing Music\n');
  const keysArray = toolsKeys.filter(
    (x: string): boolean => x.indexOf('R') !== -1,
  );
  const keysObject: {
    [keys: string]: string;
  } = keysArray.reduce((a: {}, b: string) => ((a[b] = ''), a), {});
  keysArray.forEach((x: string): void => {
    let loc = data.indexOf(x);
    let end = data.indexOf(x, loc + 1);
    let str = data.slice(loc + 3, end);
    str = str
      .split('-')
      .filter(
        (y: string): boolean =>
          y[0] !== 'R' || (y[0] === 'R' && +y[1] < +x[1]),
      );
    keysObject[x] = str.join('-');
    console.log('find key', x, ':', keysObject[x]);
  });
  console.log('');
  data = data.split('-');
  let i: string;
  for (i of keysArray.reverse()) {
    //console.log(data);
    let count: number = 0;
    data = data.map((x: string): string => {
      if (x === i) {
        console.log(x, '->', keysObject[x].slice(0, -1));
        count++;
        return count <= 2 ? '' : keysObject[x].slice(0, -1);
      } else return x;
    });
    data = data
      .filter((x: string): boolean => x !== '')
      .join('-')
      .split('-');
  }
  data = data.filter((x: string): boolean => x !== '').join('-');
  if (data[data.length - 1] === '-') data = data.slice(0, -1);
  console.log('\nUncompressed: ', data);
  console.log('🔓 Done!\n');
  // console.log(keysObject);
  return data;
};

// E4-H0-G4-f4-U2-H0-G4-C4-U2-H0-G4-E4-B4-G4-E4-D4-
// E5-D5-U2-H0-B4-C5-U2-H0-B4-A4-U2-H1-
// R1-G4-H0-G4-A4-U2-G4-
// G4-G4-A4-D5-H0-U0-U2-H0-B4-H0-U2-H1-

// E4-H0-G4-F#4-U2-H0-G4-C4-U2-H0-G4-E4-B4-G4-E4-D4-
// E5-D5-U2-H0-B4-C5-U2-H0-B4-A4-U2-H1-
// R1-G4-H0-G4-A4-U2-G4-
// G4-G4-A4-D5-H0-U0-U2-H0-B4-H0-U2-H1-

// E4-H0-G4-F#4-U2-H0-G4-C4-U2-H0-G4-E4-B4-G4-E4-D4-
// E5-D5-U2-H0-B4-C5-U2-H0-B4-A4-U2-H1-R2-
// R1-G4-H0-G4-A4-U2-G4-
// G4-G4-A4-D5-H0-U0-U2-H0-B4-H0-U2-H1-

/* FLY ME TO THE MOON */

export { musicUncompressor };
