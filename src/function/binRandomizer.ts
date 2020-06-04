import { xorshift128plus } from './xorshift128';

const binRandomizer = (bin: string, [s1, s2]) => {
  let binLength: number = bin.length;
  let randomString: string = xorshift128plus(binLength, [s1, s2]);
  let result: string = '';
  for (let i = 0; i < binLength; i++) {
    result =
      result +
      (parseInt(bin[i]) ^ parseInt(randomString[i])).toString(2);
  }
  console.log('randomize bin: ', result, '\n');
  return result;
};

export { binRandomizer };
