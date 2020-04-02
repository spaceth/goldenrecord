import { dnaToBin, binToDna } from './functions/binConverter';
import { musicToBin, binToMusic } from './functions/musicConverter';

const music =
  'E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4';

const encryptor = (data: string) => {
  console.log('/*begin*/');
  console.log('input: ', data, '\n');
  const bin = musicToBin(data, true);
  const nt = binToDna(bin);
  console.log('/*convert to binaries*/');
  console.log('binaries: ', bin, '\n');
  console.log('/*convert to nt*/');
  console.log('nucleotides: ', nt, '\n');
  console.log('/*final result*/');
  console.log(nt);
  console.log('length:', nt.length);
  console.log(
    'A:',
    (nt.match(/A/g) || []).length,
    ' T:',
    (nt.match(/T/g) || []).length,
    ' C:',
    (nt.match(/C/g) || []).length,
    ' G:',
    (nt.match(/G/g) || []).length,
  );
};

console.log(encryptor(music));
