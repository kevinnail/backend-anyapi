const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { songs } = require('../lib/songs-data.js');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/songs should return a list of songs', async () => {
    const res = await request(app).get('/songs');
    const expected = songs.map((song) => {
      return {
        id: song.id,
        name: song.name,
        band: song.band,
        album: song.album,
        year: song.year,
        length: song.length,
      };
    });
    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
