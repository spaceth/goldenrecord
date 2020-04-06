/* I use GF(2^8) for the algorithm */

// bits represents polynomial equation
// e.g. 11001 -> x^4 + x^3 + 1

const primitive: number = 0x011d; // GF(2^8) representation (AES Polynoial)
const size: number = 256; // 0x100; // Value overflow checking

const polyAdd = (a: string, b: string): string => {
  let x: number = parseInt(a, 2);
  let y: number = parseInt(b, 2);

  let result: string = (x ^ y).toString(2).padStart(8, '0');
  return result;
};

const polyMul = (a: string, b: string): string => {
  let x: number = parseInt(a, 2);
  let y: number = parseInt(b, 2);

  let resultNum: number = 0;

  while (y > 0) {
    if (y & 1) resultNum = resultNum ^ x;
    y = y >> 1; // divide by 2
    x = x << 1; // multiply by 2
    if (x & size) x = x ^ primitive;
  }

  let result: string = resultNum.toString(2).padStart(8, '0');
  return result;

  /*
    Thank you very much to http://www.cs.utsa.edu/~wagner/laws/FFM.html and
    https://crypto.stackexchange.com/questions/63139/how-to-do-hexadecimal-multiplication-in-gf28
  */
};

const generator = (): [number[], number[]] => {
  // const base: number = 1;
  // const errCor: number = 8;

  let expArr: number[] = new Array(size).fill(0);
  let logArr: number[] = new Array(size).fill(0);

  let x: number = 1;
  let i: number = 1;

  for (i = 0; i < size; i++) {
    expArr[i] = x;
    x = x * 2; // we're assuming the generator alpha is 2
    if (x >= size) {
      x = x ^ primitive;
      x = x & (size - 1);
    }
  }

  for (i = 0; i < size - 1; i++) {
    logArr[expArr[i]] = i;
  }

  //console.log(result);
  return [expArr, logArr];
};

const polyDivision = (a: string, b: string): [string, string] => {
  let x: number = parseInt(a, 2);
  let y: number = parseInt(b, 2);
  let xlen: number = x.toString(2).length; // 4
  let ylen: number = y.toString(2).length; // 1
  let i: number;
  let q: number = 0;
  for (i = xlen - ylen + 1; i >= 0; i--) {
    if (xlen == ylen + i) {
      console.log(i);
      x = x ^ (y << i);
      q |= 1 << i;
    }
  }
  console.log(q, x);
  console.log(q.toString(2), x.toString(2));

  return ['wtf', 'yes, wtf'];
};

console.log(polyMul('110', '11'));
console.log(generator());
//console.log(polyAdd('10110110', '01010011'));
//console.log(generator());
//console.log(encode());
