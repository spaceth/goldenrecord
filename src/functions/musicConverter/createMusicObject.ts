const createObject = (keys: any[], value: any[]): any => {
  let result = {};
  keys.forEach(
    (key: string | number, i: number) => (result[key] = value[i]),
  );
  return result;
};

const createNotesObject = () => {
  const notesArr: string[] = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
  ];

  const notesObject: { [keys: number]: string } = { ...notesArr };

  const notesBin: string[] = Object.keys(notesObject).map(
    (x: string) => {
      return parseInt(x)
        .toString(2)
        .padStart(4, '0');
    },
  );

  return createObject(notesArr, notesBin);
};

const createOctavesObject = (
  min: number,
  max: number,
): { [keys: string]: string } => {
  const range = Math.abs(max - min) + 1;
  const binRequired = Math.ceil(Math.sqrt(range));

  const octavesArr: number[] = Array.from(Array(range).keys()).map(
    (x: number) => {
      return x + min;
    },
  );

  const octavesBin: string[] = Array.from(Array(range).keys()).map(
    (x: number) => {
      return x.toString(2).padStart(binRequired, '0');
    },
  );

  return createObject(octavesArr, octavesBin);
};

export { createNotesObject, createOctavesObject };
