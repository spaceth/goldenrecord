import {
  createNotesObject,
  createOctavesObject,
  createToolsObject,
} from './createMusicObject';

import { musicCompressor } from './musicCompressor';

const notesObject = createNotesObject();
const octavesObject = createOctavesObject(2, 5);
const tools = createToolsObject();

/**
 *
 * @param {string} data input data in form of music pitches string (note-octave)
 * ex. R0-E4-G4-F4-H-G4-C4-H-G4-D4-A4-G4-F4-D4-R0
 * H for Hold
 * R0 for repeat no. 0
 */
const musicToBin = (data: string) => {
  const toolsName = Object.keys(tools);
  // const compresseddData = musicCompressor(data)
  let binaries = data
    .split('-')
    .map((x: string) => {
      if (!toolsName.includes(x)) {
        const [note, octave] = x.split('');
        const set = notesObject[note] + octavesObject[octave];
        return set;
      } else {
        return tools[x];
      }
    })
    .join('');
  return binaries;
};

const binToMusic = (data: string[]) => {};

export { musicToBin, binToMusic };
