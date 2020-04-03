import { dnaToBin } from './function/dnaToBin';
import { binToMusic } from './function/binToMusic/index';

const decryptor = (data: string): string => {
  console.log('input: ', data, '\n');

  const bin: string = dnaToBin(data);

  const music: string = binToMusic(bin);

  console.log('✅ Final Result');
  console.log(music);
  console.log('length:', music.length, '\n');
  return music;
};

export { decryptor };
