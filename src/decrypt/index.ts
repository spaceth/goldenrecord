import { dnaToBin } from './function/dnaToBin';
import { binUncompressor } from './function/uncompressBin';
import { binToMusic } from './function/binToMusic/index';

const decryptor = (data: string): string => {
  console.log('input: ', data, '\n');

  const bin: string = dnaToBin(data);

  //const uncompressedBin = binUncompressor(bin);

  const music: string = binToMusic(bin);

  console.log('length:', music.length, '\n');
  return music;
};

export { decryptor };
