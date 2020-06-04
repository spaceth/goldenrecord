import { musicToBin } from './function/musicToBin/index';
import { rsEncoder } from './function/rsEncoder';
import { binToDna } from './function/binToDna';
import { binRandomizer } from '../function/binRandomizer';
import { splitter } from './function/splitter';

//console.log = function () {};

/**
 *
 * @param {string} data input data in form of music pitches string (note-octave)
 * @returns {string} encrypted data in a form of nucleotide sequence
 */
const encryptor = (data: string): string => {
  console.log('input: ', data, '\n');

  const bin: string = musicToBin(data, [2, 5]);

  const encodedBin = rsEncoder(bin, 16);
  const start = new Date().getTime();
  let end;

  let s1 = 40398323; //Math.round(Math.random() * 100000000); //52162027 //40398323
  let s2 = 675273; //Math.round(Math.random() * 100000000); //91106843 //675273
  const randomizedBin = binRandomizer(encodedBin, [s1, s2]);
  const nt: string = binToDna(randomizedBin);

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
  console.info(s1, s2, (nt.match(/G/g) || []).length);

  //const split = splitter(nt);
  //console.log(split, '\n');
  return nt;
};

export { encryptor };
