import {
  createNotesObject,
  createOctavesObject,
  createToolsObject,
} from '../../../function/createMusicObject';

import { musicCompressor } from './musicCompressor';

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
  console.log('💻 Convert to Binaries\n');
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
    console.log('👾 Binaries: ', binaries, '\n');
    return binaries;
  }
  return 'error';
};

export { musicToBin };
