import { dnaToBin } from './function/dnaToBin';
import { binUncompressor } from './function/binUncompressor';
import { rsDecoder } from './function/rsDecoder';
import { binToMusic } from './function/binToMusic/index';

const decryptor = (data: string): string => {
  console.log('input: ', data, '\n');

  const bin: string = dnaToBin(data);

  //const uncompressedBin = binUncompressor(bin);

  const decodedBin = rsDecoder(bin, 16);

  const music: string = binToMusic(decodedBin);

  console.log('length:', music.length, '\n');
  return music;
};

export { decryptor };
