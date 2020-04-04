/*
mainly implemented from JS ported ZXing code by cho45
 */

const createBlock = (data: string): string[] => {
  let block: any[] = [];
  const size: number = 8;
  let i: number;

  for (i = 0; i < data.length; i += size) {
    block.push(data.slice(i, i + size));
  }

  const lastData = block[block.length - 1];
  const lastBit = lastData[lastData.length - 1];

  console.log(lastData, lastBit);
  const fill: string =
    lastBit === '0'
      ? '1'.repeat(8 - lastData.length)
      : '0'.repeat(8 - lastData.length);
  block[block.length - 1] = lastData + fill;
  block = block.map((x: string): number => parseInt(x, 2));
  console.log(block);

  return block;
};

const reedSolomonEncoder = (data: string): string => {
  let block = createBlock(data);
  console.log(data);
  return '?';
};

export { reedSolomonEncoder };
