const xorshift128plus = (number, [s1 = 1, s2 = 2]) => {
  let state0: number = s1;
  let state1: number = s2;
  let count = [0, 0];
  let randomString: string = '';
  for (let i = 0; i < number; i++) {
    let s1: number = state0;
    let s0: number = state1;
    state0 = s0;
    s1 ^= s1 << 23;
    s1 ^= s1 >> 17;
    s1 ^= s0;
    s1 ^= s0 >> 26;
    state1 = s1;
    let randomNumber: number = (state0 + state1) / 4294967296;
    console.log(Math.round(randomNumber));
    count[Math.round(randomNumber)]++;
    randomString += randomNumber.toString();
  }
  console.log(count);
  return randomString;
};

xorshift128plus(800, [1, 2]);

export { xorshift128plus };
