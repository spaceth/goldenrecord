import { encryptor, decryptor } from '../src/index';

import { expect } from 'chai';
import 'mocha';

describe('Full cycle music pitches encryption and decryption', () => {
  it('set 1: should return true', () => {
    const music: string =
      'E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4';
    const result: string = decryptor(encryptor(music));
    expect(result).to.equal(music);
  });
  it('set 2: should return true', () => {
    const music: string =
      'E4-H0-G4-F#4-U2-H0-G4-C4-U2-H0-G4-E4-B4-G4-E4-D4-E4-H0-G4-F#4-U2-H0-G4-C4-U2-H0-G4-E4-B4-G4-E4-D4-E4-H0-G4-F#4-U2-H0-G4-C4-U2-H0-G4-E4-B4-G4-E4-D4-E4-H0-G4-F#4-U2-H0-G4-C4-U2-H0-G4-E4-B4-G4-E4-D4-S0-E5-D5-U2-H0-B4-C5-U2-H0-B4-A4-U2-H1-G4-H0-G4-A4-U2-G4-F#4-G4-U2-H2-E5-D5-U2-H0-B4-C5-U2-H0-B4-A4-U2-H1-S1-G4-G4-A4-D5-H0-U0-U2-H0-B4-H0-U2-H1-S0-E5-E5-G5-H1-U2-H0-D5-B4-S0-E5-E5-G5-H1-U2-H0-B5-C6-S0-E5-D5-U2-H0-B4-C5-U2-H0-B4-A4-U2-H1-G4-H0-G4-A4-U2-G4-H0-F#4-H0-U2-H0-G4-U2-H1-S0-E5-D5-U2-H0-B4-C5-U2-H0-B4-A4-U2-H1-G4-H0-G4-A4-U2-G4-F#4-G4-U2-H2-S0-E5-D5-U2-H0-B4-C5-U2-H0-B4-A4-U2-H1-S0-G4-G4-A4-D5-H0-U0-U2-H0-B4-H0-U2-H1';
    const result: string = decryptor(encryptor(music));
    expect(result).to.equal(music);
  });
});
