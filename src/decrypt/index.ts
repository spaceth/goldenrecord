import { dnaToBin } from './function/dnaToBin';
import { rsDecoder } from './function/rsDecoder';
import { binToMusic } from './function/binToMusic/index';
import { binRandomizer } from '../function/binRandomizer';

const decryptor = (data: string): string => {
  let s1 = 40398323; //Math.round(Math.random() * 100000000); //52162027 //40398323
  let s2 = 675273; //Math.round(Math.random() * 100000000); //91106843 //67527

  console.log('input: ', data, '\n');

  const bin: string = dnaToBin(data);

  const derandomizedBin = binRandomizer(bin, [s1, s2]);

  const decodedBin = rsDecoder(derandomizedBin, 16);

  const music: string = binToMusic(decodedBin);

  console.log('length:', music.length, '\n');
  return music;
};

export { decryptor };
