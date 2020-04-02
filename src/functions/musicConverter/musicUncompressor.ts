import { createToolsObject } from './createMusicObject';

const toolsObject = createToolsObject();
const toolsKeys = Object.keys(toolsObject);

/**
 *
 * @param {string} data compressed music data
 * @returns {string} uncompresssed music data
 */
const musicUncompressor = (data: string): string => {
  console.log('\n/* uncompressing music */');
  const keysObject: {
    [keys: string]: [string, boolean];
  } = toolsKeys
    .filter((x: string): boolean => x.indexOf('R') !== -1)
    .reduce((a: {}, b: string) => ((a[b] = ['', false]), a), {});
  data = data
    .split('-')
    .map((x: string): string => {
      if (toolsKeys.indexOf(x) !== -1 && x.indexOf('R') !== -1) {
        if (keysObject[x][0] === '') {
          let loc = data.indexOf(x);
          let end = data.indexOf(x, loc + 1);
          keysObject[x][0] = data.slice(loc + 3, end);
          console.log('find key', x, ':', keysObject[x][0]);
          return '';
        } else if (!keysObject[x][1]) {
          console.log('delete keys', x);
          keysObject[x][1] = true;
          return '';
        } else {
          console.log('replace', x, 'with', keysObject[x][0]);
          return keysObject[x][0];
        }
      } else return x + '-';
    })
    .join('')
    .slice(0, -1);
  console.log('uncompressed: ', data);
  console.log('/*done*/\n');
  // console.log(keysObject);
  return data;
};

/* FLY ME TO THE MOON */

export { musicUncompressor };
