import { musicToBin } from './function/musicToBin/index';
import { binToDna } from './function/binToDna';

/**
 *
 * @param {string} data input data in form of music pitches string (note-octave)
 * @returns {string} encrypted data in a form of nucleotide sequence
 */
const encryptor = (data: string): string => {
  console.log('input: ', data, '\n');
  console.log('💻 Convert to Binaries\n');
  const bin: string = musicToBin(data);
  console.log('👾 Binaries: ', bin, '\n');

  console.log('🧬 Convert to NT');
  const nt: string = binToDna(bin);
  console.log('nucleotides: ', nt, '\n');

  console.log('✅ Final Result');
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

export { encryptor };
