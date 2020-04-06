import { musicToBin } from './function/musicToBin/index';
import { binCompressor } from './function/compressBin';
import { binToDna } from './function/binToDna';
import { splitter } from './function/splitter';

/**
 *
 * @param {string} data input data in form of music pitches string (note-octave)
 * @returns {string} encrypted data in a form of nucleotide sequence
 */
const encryptor = (data: string): string => {
  console.log('input: ', data, '\n');

  const bin: string = musicToBin(data, [3, 6]);

  // const compressedBin = binCompressor(bin);

  const nt: string = binToDna(bin);

  const compressionSize: number =
    data.split('-').length * 3 - nt.length;

  console.log('✅ Final Result:', nt);
  console.log('\nlength:', nt.length);
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
  console.log(
    'compressed: ',
    data.split('-').length * 3,
    '-',
    nt.length,
    '=',
    compressionSize,
    'nt\n',
  );

  const split = splitter(nt);
  console.log(split, '\n');

  return nt;
};

export { encryptor };
