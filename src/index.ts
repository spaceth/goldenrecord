/* BURN_BABY_BURN--MASTER_IGNITION_ROUTINE */

import { encryptor } from './encrypt/index';
import { decryptor } from './decrypt/index';

const music: string =
  'E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4';

console.log('-----------Encrypt-----------');
let encrypted: string = encryptor(music);
console.log(encrypted);

console.log('\n-----------Decrypt-----------');
console.log(decryptor(encrypted));

export { encryptor, decryptor };
