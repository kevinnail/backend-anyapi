const pool = require('../utils/pool');
module.exports = class TreeModel {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.species = row.species;
    this.location = row.location;
    this.age = row.age;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from trees');
    return rows.map((treeRow) => new TreeModel(treeRow));
  }
};
