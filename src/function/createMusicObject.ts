/* HELLO THERE */

/**
 *
 * @param keys array that should be used as an object's key
 * @param value array that should be used as an object's value
 */
const createObject = (
  keys: string[] | number[],
  value: any[],
): any => {
  let result = {};
  keys.forEach(
    (key: string | number, i: number) => (result[key] = value[i]),
  );
  return result;
};

/**
 * @returns {object} Keys: pitch, Value: binaries representative
 */
const createNotesObject = (): { [keys: string]: string } => {
  /**
   * @param {Array} noteArr chromatic scale pitch
   */
  const notesArr: string[] = [
    'C',
    'c',
    'D',
    'd',
    'E',
    'F',
    'f',
    'G',
    'g',
    'A',
    'a',
    'B',
  ];

  const notesObject: { [keys: number]: string } = { ...notesArr };

  const notesBin: string[] = Object.keys(notesObject).map(
    (x: string) => {
      return parseInt(x).toString(2).padStart(4, '0');
    },
  );

  return createObject(notesArr, notesBin);
};

/**
 *
 * @param {number} min lowest octave (from middle c)
 * @param {number} max highest octave (from middle c)
 * @returns {object} Binaries representative for each octave
 */
const createOctavesObject = (
  min: number,
  max: number,
): { [keys: string]: string } => {
  const range = Math.abs(max - min) + 1;
  const binRequired = Math.ceil(Math.sqrt(range));

  const arr = Array.from(Array(range).keys());

  const octavesArr: number[] = arr.map((x: number) => {
    return x + min;
  });

  const octavesBin: string[] = arr.map((x: number) => {
    return x.toString(2).padStart(binRequired, '0');
  });
  return createObject(octavesArr, octavesBin);
};

const createToolsObject = () => {
  /*
  16-12 -> 4 unused stages
  1100, 1101, 1110, 1111
  */

  /* TEMPORARY, I HOPE HOPE HOPE */

  /* VERSION 1 */
  // let tools: { [keys: string]: string } = {}
  // Array.from(Array(4).keys()).forEach((x: number) => {
  //   const hold = '1100';
  //   tools[`H${x}`] = hold + x.toString(2).padStart(2, '0');
  //   const stop = '1101';
  //   tools[`S${x}`] = stop + x.toString(2).padStart(2, '0');
  //   const util = '1110';
  //   tools[`U${x}`] = util + x.toString(2).padStart(2, '0');
  //   const repeat = '1111';
  //   tools[`R${x}`] = repeat + x.toString(2).padStart(2, '0');
  // });
  /* VERSION 2 */

  let tools: { [keys: string]: string } = {
    H0: '110000', // 1/2 (U0)
    H1: '110001', // 1
    S0: '110010', // 16th note
    S1: '110011', // 8th note
    U2: '110100', // long (L)
  };

  Array.from(Array(4).keys()).forEach((x: number) => {
    const repeat1 = '1110';
    tools[`R${x}`] = repeat1 + x.toString(2).padStart(2, '0');
  });

  Array.from(Array(4).keys()).forEach((x: number) => {
    const repeat = '1111';
    tools[`R${x + 4}`] = repeat + x.toString(2).padStart(2, '0');
  });

  return tools;
};

export { createNotesObject, createOctavesObject, createToolsObject };

/* GOODBYE. COME AGAIN SOON. */
