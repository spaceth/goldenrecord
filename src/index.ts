/* BURN_BABY_BURN--MASTER_IGNITION_ROUTINE */
import { encryptor } from './encrypt/index';
import { decryptor } from './decrypt/index';

const music: string =
  'E4-H0-G4-F#4-U2-H0-G4-C4-U2-H0-G4-E4-B4-G4-E4-D4-E4-H0-G4-F#4-U2-H0-G4-C4-U2-H0-G4-E4-B4-G4-E4-D4-E4-H0-G4-F#4-U2-H0-G4-C4-U2-H0-G4-E4-B4-G4-E4-D4-E4-H0-G4-F#4-U2-H0-G4-C4-U2-H0-G4-E4-B4-G4-E4-D4-S0-E5-D5-U2-H0-B4-C5-U2-H0-B4-A4-U2-H1-G4-H0-G4-A4-U2-G4-F#4-G4-U2-H2-E5-D5-U2-H0-B4-C5-U2-H0-B4-A4-U2-H1-S1-G4-G4-A4-D5-H0-U0-U2-H0-B4-H0-U2-H1-S0-E5-E5-G5-H1-U2-H0-D5-B4-S0-E5-E5-G5-H1-U2-H0-B5-C6-S0-E5-D5-U2-H0-B4-C5-U2-H0-B4-A4-U2-H1-G4-H0-G4-A4-U2-G4-H0-F#4-H0-U2-H0-G4-U2-H1-S0-E5-D5-U2-H0-B4-C5-U2-H0-B4-A4-U2-H1-G4-H0-G4-A4-U2-G4-F#4-G4-U2-H2-S0-E5-D5-U2-H0-B4-C5-U2-H0-B4-A4-U2-H1-S0-G4-G4-A4-D5-H0-U0-U2-H0-B4-H0-U2-H1-S0-E5-E5-F#5-H1-U2-H0-D5-H0-S0-E5-E5-F#5-H1-U2-H0-G5-H0-A5-H1-S0-E5-D5-U2-H0-B4-C5-U2-H0-B4-A4-U2-H1-G4-H0-G4-A4-U2-G4-H0-D5';

// const music: string =
//'C2-C#2-D2-D#2-E2-F#2-F2-G2-G#2-A2-A#2-B2-C3-C#3-D3-D#3-E3-F#3-F3-G3-G#3-A3-A#3-B3-C4-C#4-D4-D#4-E4-F#4-F4-G4-G#4-A4-A#4-B4-C5-C#5-D5-D#5-E5-F#5-F5-G5-G#5-A5-A#5-B5-H0';

console.log('-----------Encrypt-----------');
let encrypted: string = encryptor(music);
console.log(encrypted);

console.log('\n-----------Decrypt-----------');
console.log(decryptor(encrypted));

export { encryptor, decryptor };
