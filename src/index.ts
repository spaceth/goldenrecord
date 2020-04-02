/* BURN_BABY_BURN--MASTER_IGNITION_ROUTINE */

import { musicToBin, binToMusic } from './functions/musicConverter';
import { binToDna, dnaToBin } from './functions/binConverter';

const music =
  'E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4';

/**
 *
 * @param {string} data input data in form of music pitches string (note-octave)
 * @returns {string} encrypted data in a form of nucleotide sequence
 */
const encryptor = (data: string): string => {
  console.log('/*begin*/');

  console.log('input: ', data, '\n');
  console.log('/*convert to binaries*/', '\n');
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
  return nt;
};

const decryptor = (data: string): string => {
  return 'hello';
};

console.log(encryptor(music));

export { encryptor, decryptor };
