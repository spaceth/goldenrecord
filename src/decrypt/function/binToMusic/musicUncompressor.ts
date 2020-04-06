import { createToolsObject } from '../../../function/createMusicObject';

const toolsObject = createToolsObject();
const toolsKeys = Object.keys(toolsObject);

/**
 *
 * @param {string} data compressed music data
 * @returns {string} uncompresssed music data
 */
const musicUncompressor = (data: any): string => {
  console.log('\n🔑 Uncompressing Music');
  if (data[data.length - 1] !== '-') data = data + '-';
  const keysArray = toolsKeys
    .filter((x: string): boolean => x.indexOf('R') !== -1)
    .reverse();
  for (let i of keysArray) {
    if (data.indexOf(i) !== -1) {
      let substring = data.split(i)[0];
      i = i + '-';
      console.log('subsequence :', substring);
      //console.log(data.split(i));
      data = data.split(i).slice(1).join(substring);
    }
  }
  // keysArray.forEach((x: string): void => {
  //   let loc = data.indexOf(x);
  //   let end = data.indexOf(x, loc + 1);
  //   let str = data.slice(loc + 3, end);
  //   str = str
  //     .split('-')
  //     .filter(
  //       (y: string): boolean =>
  //         y[0] !== 'R' || (y[0] === 'R' && +y[1] < +x[1]),
  //     );
  //   keysObject[x] = str.join('-');
  //   console.log('find key', x, ':', keysObject[x]);
  // });
  // console.log('');
  // data = data.split('-');
  // let i: string;
  // for (i of keysArray.reverse()) {
  //   //console.log(data);
  //   let count: number = 0;
  //   data = data.map((x: string): string => {
  //     if (x === i) {
  //       //console.log(x, '->', keysObject[x].slice(0, -1));
  //       count++;
  //       return count <= 2 ? '' : keysObject[x].slice(0, -1);
  //     } else return x;
  //   });
  //   data = data
  //     .filter((x: string): boolean => x !== '')
  //     .join('-')
  //     .split('-');
  // }
  // data = data.filter((x: string): boolean => x !== '').join('-');
  if (data[data.length - 1] === '-') data = data.slice(0, -1);
  //console.log('\nUncompressed: ', data);
  console.log('🔓 Done!\n');
  // console.log(keysObject);
  return data;
};

/* FLY ME TO THE MOON */

export { musicUncompressor };
