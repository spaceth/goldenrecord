/* BURN_BABY_BURN--MASTER_IGNITION_ROUTINE */

import { musicToBin, binToMusic } from './functions/musicConverter';
import { binToDna, dnaToBin } from './functions/binConverter';

const music: string =
  'E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4';

let encrypted: string = '';

/**
 *
 * @param {string} data input data in form of music pitches string (note-octave)
 * @returns {string} encrypted data in a form of nucleotide sequence
 */
const encryptor = (data: string): string => {
  console.log('/*begin*/');

  console.log('input: ', data, '\n');
  console.log('/*convert to binaries*/\n');
  const bin: string = musicToBin(data);
  console.log('binaries: ', bin, '\n');

  console.log('/*convert to nt*/');
  const nt: string = binToDna(bin);
  console.log('nucleotides: ', nt, '\n');

  console.log('/*final result*/');
  console.log(nt);
  console.log('length:', nt.length);
  console.log(
    'A:',
    (nt.match(/A/g) || []).length,
    ' T:',
    (nt.match(/T/g) || []).length,
    ' C:',
    (nt.match(/C/g) || []).length,
    ' G:',
    (nt.match(/G/g) || []).length,
    '\n',
  );
  encrypted = nt;
  return nt;
};

const decryptor = (data: string): string => {
  console.log('/*begin*/');

  console.log('input: ', data, '\n');
  console.log('/*convert to binaries*/');
  const bin: string = dnaToBin(data);
  console.log('binaries: ', bin, '\n');

  console.log('/*convert to pitch*/');
  const music: string = binToMusic(bin);
  console.log('Music: ', music, '\n');

  console.log('/*final result*/');
  console.log(music);
  console.log('length:', music.length, '\n');
  return music;
};

console.log('-----------Encrypt-----------');
console.log(encryptor(music));
console.log('\n-----------Decrypt-----------');
console.log(decryptor(encrypted));

export { encryptor, decryptor };
