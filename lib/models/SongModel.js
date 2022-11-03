const pool = require('../utils/pool');
module.exports = class SongModel {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.band = row.band;
    this.album = row.album;
    this.year = row.year;
    this.length = row.length;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from songs');
    return rows.map((songRow) => new SongModel(songRow));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * from songs WHERE id = $1', [
      id,
    ]);
    return new SongModel(rows[0]);
  }
};
