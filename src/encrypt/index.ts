import { musicToBin } from './function/musicToBin/index';
import { binCompressor } from './function/compressBin/index';
import { binToDna } from './function/binToDna';

/**
 *
 * @param {string} data input data in form of music pitches string (note-octave)
 * @returns {string} encrypted data in a form of nucleotide sequence
 */
const encryptor = (data: string): string => {
  console.log('input: ', data, '\n');

  const bin: string = musicToBin(data, [2, 5]);

  const compressedBin = binCompressor(bin);

  const nt: string = binToDna(compressedBin);

  const compressionSize: number =
    data.split('-').length * 3 - nt.length;

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
  console.log(
    'compressed: ',
    data.split('-').length * 3,
    '-',
    nt.length,
    '=',
    compressionSize,
    'nt\n',
  );

  return nt;
};

export { encryptor };
