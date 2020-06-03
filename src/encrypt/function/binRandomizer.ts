import { xorshift128plus } from '../../function/xorshift128';

const binRandomizer = (bin: string) => {
  console.log('\nRandomize Bin\n');
  let binLength: number = bin.length;
  let randomString: string = xorshift128plus(binLength, [1, 2]);
  let result: string = '';
  for (let i = 0; i < binLength; i++) {
    result =
      result +
      (parseInt(bin[i]) ^ parseInt(randomString[i])).toString(2);
  }
  console.log(result);
  return result;
};

binRandomizer('1100234');

export { binRandomizer };
