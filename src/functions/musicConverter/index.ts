import {
  createNotesObject,
  createOctavesObject,
  createToolsObject,
} from './createMusicObject';

import { musicCompressor } from './musicCompressor';
import { musicUncompressor } from './musicUncompressor';

const notesObject: { [keys: string]: string } = createNotesObject();
const octavesObject: { [keys: string]: string } = createOctavesObject(
  2,
  5,
);
const toolsObject: { [keys: string]: string } = createToolsObject();

const notesKeys: string[] = Object.keys(notesObject);
const octavesKeys: string[] = Object.keys(octavesObject);
const toolsKeys: string[] = Object.keys(toolsObject);

const checker = (data: string): boolean => {
  const arr = data.split('-').filter((x: string): boolean => {
    return (
      notesKeys.indexOf(x[0]) === -1 &&
      octavesKeys.indexOf(x[1]) === -1 &&
      toolsKeys.indexOf(x) === -1
    );
  });
  if (arr.length === 0) {
    return true;
  } else {
    console.log('error', arr);
    return false;
  }
};

/**
 *
 * @param {string} data input data in form of music pitches string (note-octave)
 * ex. R0-E4-G4-F4-H-G4-C4-H-G4-D4-A4-G4-F4-D4-R0
 * H for Hold
 * R0 for repeat no. 0
 */
const musicToBin = (data: string): string => {
  if (checker(data)) {
    data = musicCompressor(data);
    const binaries: string = data
      .split('-')
      .map((x: string): string => {
        if (!toolsKeys.includes(x)) {
          const [note, octave] = x.split('');
          const set = notesObject[note] + octavesObject[octave];
          return set;
        } else {
          return toolsObject[x];
        }
      })
      .join('');
    return binaries;
  }
  return 'error';
};

/* BEAM ME UP, SCOTTY */
const binToMusic = (data: string): string => {
  let notesMap = new Map();
  let octavesMap = new Map();
  let toolsMap = new Map();

  for (let [key, value] of Object.entries(notesObject)) {
    notesMap.set(value, key);
  }
  for (let [key, value] of Object.entries(octavesObject)) {
    octavesMap.set(value, key);
  }
  for (let [key, value] of Object.entries(toolsObject)) {
    toolsMap.set(value, key);
  }

  data = data
    .match(/....../g)
    .map((x: string) => {
      if (toolsMap.has(x)) {
        const data = toolsMap.get(x);
        console.log(x, ':', data);
        return data + '-';
      } else {
        const noteBin = x.slice(0, 4);
        const octaveBin = x.slice(4, 6);
        const noteMusic = notesMap.get(noteBin);
        const octaveMusic = octavesMap.get(octaveBin);
        console.log(
          x,
          '->',
          noteBin,
          ':',
          noteMusic,
          '+',
          octaveBin,
          ':',
          octaveMusic,
          '->',
          noteMusic + octaveMusic,
        );
        return noteMusic + octaveMusic + '-';
      }
    })
    .join('')
    .slice(0, -1);
  console.log(data);
  data = musicUncompressor(data);
  return data;
};

export { musicToBin, binToMusic };
