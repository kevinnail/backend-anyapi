const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const {songs} = require('../')

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  // it('example test - delete me!', () => {
  //   expect(1).toEqual(1);
  // });

  it('/songs should return a list of songs', async()=>{
    const res = await request(app).get('/songs');
    const expected = 
  });

  afterAll(() => {
    pool.end();
  });
});
