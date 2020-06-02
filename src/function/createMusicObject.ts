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

const createModifiersObject = () => {
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

  let modifiers: { [keys: string]: string } = {
    H0: '110000', // *2
    H1: '110001', // *4
    H2: '110010', // *8
    //H3: '110010', // 1
    S0: '110100', // 1
    S1: '110101', // 2
    S2: '110110', // 4
    //
    U0: '110110', // *3/2
    B0: '110111',
  };

  Array.from(Array(4).keys()).forEach((x: number) => {
    const repeat1 = '1110';
    modifiers[`R${x}`] = repeat1 + x.toString(2).padStart(2, '0');
  });

  Array.from(Array(4).keys()).forEach((x: number) => {
    const repeat = '1111';
    modifiers[`R${x + 4}`] = repeat + x.toString(2).padStart(2, '0');
  });

  return modifiers;
};

export {
  createNotesObject,
  createOctavesObject,
  createModifiersObject,
};

/* GOODBYE. COME AGAIN SOON. */
