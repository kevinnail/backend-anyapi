const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { songs } = require('../lib/songs-data.js');
const { trees } = require('../lib/trees-data.js');

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

  it('/songs/:id should return song detail', async () => {
    const res = await request(app).get('/songs/1');
    const thirdEye = {
      id: '1',
      name: 'Third Eye',
      band: 'TOOL',
      album: 'Aenima',
      year: 1996,
      length: '13:47',
    };
    expect(res.body).toEqual(thirdEye);
  });

  it('/trees should return a list of trees', async () => {
    const res = await request(app).get('/trees');
    const expected = trees.map((tree) => {
      return {
        id: tree.id,
        name: tree.name,
        species: tree.species,
        location: tree.location,
        age: tree.age,
      };
    });

    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
