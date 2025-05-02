const db = require('../services/database');

class User {
  static async findAll() {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  static async create(userData) {
    return new Promise((resolve, reject) => {
      const { name, email } = userData;
      db.run(
        'INSERT INTO users (name, email) VALUES (?, ?)',
        [name, email],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve({ id: this.lastID, name, email });
          }
        }
      );
    });
  }
}

module.exports = User;