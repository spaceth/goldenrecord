import { dnaToBin } from './function/dnaToBin';
import { binUncompressor } from './function/uncompressBin/index';
import { binToMusic } from './function/binToMusic/index';

const decryptor = (data: string): string => {
  console.log('input: ', data, '\n');

  const bin: string = dnaToBin(data);

  const uncompressedBin = binUncompressor(bin);

  const music: string = binToMusic(uncompressedBin);

  console.log('length:', music.length, '\n');
  return music;
};

export { decryptor };
