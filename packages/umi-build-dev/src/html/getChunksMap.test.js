import getChunksMap from './getChunksMap';

describe('getChunksMap', () => {
  it('normal', () => {
    expect(
      getChunksMap({
        a: ['a.1816b15e.async.js'],
        umi: ['umi.4d5989ce.js', 'umi.30c54e86.css'],
      }),
    ).toEqual({
      'a.js': 'a.1816b15e.async.js',
      'umi.js': 'umi.4d5989ce.js',
      'umi.css': 'umi.30c54e86.css',
    });
  });
});
