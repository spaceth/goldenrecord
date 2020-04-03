/* BURN_BABY_BURN--MASTER_IGNITION_ROUTINE */
import { encryptor } from './encrypt/index';
import { decryptor } from './decrypt/index';

const music: string =
  'E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4';

// const music: string =
//'C1-C#1-D1-D#1-E1-F#1-F1-G1-G#1-A1-A#1-B1-C2-C#2-D1-D#2-E2-F#2-F2-G2-G#2-A2-A#2-B2-C3-C#3-D3-D#3-E3-F#3-F3-G3-G#3-A3-A#3-B3-C4-C#4-D4-D#4-E4-F#4-F4-G4-G#4-A4-A#4-B4-C5-C#5-D5-D#5-E5-F#5-F5-G5-G#5-A5-A#5-B5-C6-C#6-D6-D#6-E6-F#6-F6-G6-G#6-A6-A#6-B6-C7-C#7-D7-D#7-E7-F#7-F7-G7-G#7-A7-A#7-B7-C8-C#8-D8-D#8-E8-F#8-F8-G8-G#8-A8-A#8-B8-H0';

console.log('-----------Encrypt-----------');
let encrypted: string = encryptor(music);
console.log(encrypted);

//console.log('\n-----------Decrypt-----------');
//console.log(decryptor(encrypted));

//export { encryptor, decryptor };
