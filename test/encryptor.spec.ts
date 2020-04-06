import { encryptor, decryptor } from '../src/index';

import { expect } from 'chai';
import 'mocha';

describe('Full cycle music pitches encryption and decryption', () => {
  it('set 1: should return true', () => {
    const music: string = 'E4-G4-F4-H0-G4-C4-H0';
    const result: string = decryptor(encryptor(music));
    expect(result).to.equal(music);
  });
  it('set 2: should return true', () => {
    const music: string = 'E4-H0-G4-F#4-U2-H0';
    const result: string = decryptor(encryptor(music));
    expect(result).to.equal(music);
  });
});
