import { dnaToBin, binToDna } from './functions/binConverter';
import { musicToBin, binToMusic } from './functions/musicConverter';

console.log('input: R0-E4-G4-F4-H-G4-C4-H-G4-D4-A4-G4-F4-D4-R0');
console.log();
console.log(
  `to binaries: ${musicToBin(
    'R0-E4-G4-F4-H-G4-C4-H-G4-D4-A4-G4-F4-D4-R0',
  )}`,
);
console.log();

console.log(
  `to nucleotide sequence: ${binToDna(
    musicToBin('R0-E4-G4-F4-H-G4-C4-H-G4-D4-A4-G4-F4-D4-R0'),
  )}`,
);
