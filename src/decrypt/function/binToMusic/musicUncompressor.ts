import { createModifiersObject } from '../../../function/createMusicObject';

const modifiersObject = createModifiersObject();
const modifiersKeys = Object.keys(modifiersObject);

/**
 *
 * @param {string} data compressed music data
 * @returns {string} uncompresssed music data
 */
const musicUncompressor = (data: any): string => {
  console.log('\n🔑 Uncompressing Music');
  if (data[data.length - 1] !== '-') data = data + '-';
  const keysArray = modifiersKeys
    .filter((x: string): boolean => x.indexOf('R') !== -1)
    .reverse();
  for (let i of keysArray) {
    if (data.indexOf(i) !== -1) {
      let substring = data.split(i)[0];
      i = i + '-';
      console.log('subsequence :', substring);
      console.log(data.split(i));
      data = data.split(i).slice(1).join(substring);
    }
  }

  if (data[data.length - 1] === '-') data = data.slice(0, -1);
  //console.log('\nUncompressed: ', data);
  console.log('🔓 Done!\n');
  // console.log(keysObject);
  return data;
};

export { musicUncompressor };
