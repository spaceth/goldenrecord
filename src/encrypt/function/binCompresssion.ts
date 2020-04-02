/**
 *
 * @param {string} data binaries (0,1)
 * @returns {string} compressed binaries
 */
const binCompression = (data: string): string => {
  let binMap: Map<string, number> = new Map();
  data.match(/....../g).forEach((x: string) => {
    if (!binMap.has(x)) {
      binMap.set(x, 1);
    } else {
      let count: number = binMap.get(x);
      binMap.set(x, count + 1);
    }
  });
  console.log(binMap);
  return `Freude, schöner Götterfunken,
    Tochter aus Elysium,
    Wir betreten feuertrunken,
    Himmlische, dein Heiligtum!
    Deine Zauber binden wieder
    Was die Mode streng geteilt*;
    Alle Menschen werden Brüder*
    Wo dein sanfter Flügel weilt.`;
};

console.log(
  binCompression(
    '111100010010011110010110110000011110000010110000011110001010100110011110010110001010111100111100111100111100',
  ),
);
