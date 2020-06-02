import {
  createNotesObject,
  createOctavesObject,
  createModifiersObject,
} from '../../../function/createMusicObject';

import { musicUncompressor } from './musicUncompressor';

const notesObject: { [keys: string]: string } = createNotesObject();
const octavesObject: { [keys: string]: string } = createOctavesObject(
  2,
  5,
);
const modifiersObject: {
  [keys: string]: string;
} = createModifiersObject();

const binToMusic = (data: string): string => {
  console.log('🎼 Convert to Pitch');

  let notesMap: Map<string, string> = new Map();
  let octavesMap: Map<string, string> = new Map();
  let modifiersMap: Map<string, string> = new Map();

  for (let [key, value] of Object.entries(notesObject)) {
    notesMap.set(value, key);
  }
  for (let [key, value] of Object.entries(octavesObject)) {
    octavesMap.set(value, key);
  }
  for (let [key, value] of Object.entries(modifiersObject)) {
    modifiersMap.set(value, key);
  }

  //console.log(data);
  data = data
    .match(/....../g)
    .map((x: string) => {
      if (modifiersMap.has(x)) {
        const data = modifiersMap.get(x);
        // console.log(x, ':', data);
        return data + '-';
      } else {
        const noteBin = x.slice(0, 4);
        const octaveBin = x.slice(4, 6);
        let noteMusic = notesMap.get(noteBin);
        const octaveMusic = octavesMap.get(octaveBin);
        if (noteMusic[0] === noteMusic[0].toLowerCase()) {
          noteMusic = noteMusic[0].toUpperCase() + '#';
        }
        return noteMusic + octaveMusic + '-';
      }
    })
    .join('')
    .slice(0, -1);
  console.log(data);
  let music = musicUncompressor(data);
  console.log('🎵 Music: ', music, '\n');
  return music;
};

export { binToMusic };
