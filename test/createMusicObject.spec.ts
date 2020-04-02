import {
  createNotesObject,
  createOctavesObject,
} from '../src/functions/musicConverter/createMusicObject';

import { expect } from 'chai';
import 'mocha';

describe('Create Notes Object', () => {
  it('should return the right data set', () => {
    const result = createNotesObject();
    expect(result['C#']).to.equal('0001');
    expect(result['G']).to.equal('0111');
  });
});

describe('Create Octaves Object', () => {
  it('should return the right data set', () => {
    const result = createOctavesObject(2, 5);
    expect(result['2']).to.equal('00');
    expect(result['5']).to.equal('11');
  });
});
