import * as reedSolomon from 'reedsolomon';

//const bin = '110000110001110001111111111100011001011101111111110001111110110001110000110001111101110011111000011101110001011101100101110000011101111100110011011101011101100101001010110001110010110000110001101101111101110001110011010010010010111011110011010010010010011010110001111101011110110001100110110001110001111100110001111010010001110001011101011001110000110001011101000001110000110001011101010001101101011101010001001001111001010010001010110000110001101101000010110000110001101101100101111111111000111001111001111001111001111110111000110011111011011110110001111101001010101101111010011001111101011101111111111110110011111000111011011010110001111101001010110001111010001010';

function RS(messageLength, errorCorrectionLength) {
  const dataLength = messageLength - errorCorrectionLength;
  const encoder = new reedSolomon.ReedSolomonEncoder(
    reedSolomon.GenericGF.AZTEC_DATA_8(),
  );
  return {
    dataLength: dataLength,
    messageLength: messageLength,
    errorCorrectionLength: errorCorrectionLength,

    encode: (message) => {
      encoder.encode(message, errorCorrectionLength);
    },
  };
}

const createNumberArray = (data: string) => {
  let arr: any[] = data.match(/.{1,8}/g);
  if (arr[arr.length - 1].length !== 8) {
    arr[arr.length - 1] = arr[arr.length - 1].padEnd(
      8,
      arr[arr.length - 1].substring(-1) === '1' ? '0' : '1',
    );
  } else {
    arr.push(
      arr[arr.length - 1][7] === '1' ? '00000000' : '11111111',
    );
  }
  arr = arr.map((x: string): number => {
    return parseInt(x, 2);
  });
  console.log('\nCreate Payload', arr, '\n');
  return arr;
};

const rsEncoder = (data: string, t: number) => {
  const numberArray = createNumberArray(data);
  const blankArray = Array.from(Array(t)).fill(0);
  const numberArrayLength = numberArray.length;

  const payload = new Int32Array(numberArray.concat(blankArray));
  let errorCorrector = RS(numberArrayLength + t, t);

  errorCorrector.encode(payload);

  console.log('Encoded Array', payload, '\n');

  let messageString = '';
  payload.forEach((x: number) => {
    messageString = messageString + x.toString(2).padStart(8, '0');
  });

  console.log('To Binary:', messageString, '\n');

  return messageString;
};

//console.log(rsEncoder(bin, 16));

export { rsEncoder };
