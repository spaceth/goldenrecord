import { dnaToBin } from './function/dnaToBin';
import { binToMusic } from './function/binToMusic/index';

const decryptor = (data: string): string => {
  console.log('input: ', data, '\n');
  console.log('💻 Convert to Binaries\n');
  const bin: string = dnaToBin(data);
  console.log('👾 Binaries: ', bin, '\n');

  console.log('🎼 Convert to Pitch');
  const music: string = binToMusic(bin);
  console.log('🎵 Music: ', music, '\n');

  console.log('✅ Final Result');
  console.log(music);
  console.log('length:', music.length, '\n');
  return music;
};

export { decryptor };
