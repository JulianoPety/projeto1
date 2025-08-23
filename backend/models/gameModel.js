const db = require('../config/database');

const game = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM games';
        db.query(sql, callback);
    },
    
    create: (game, callback) => {
        const { title, description, image, available } = game;
        const sql = 'INSERT into games (title, description, image, available) VALUES (?, ?, ?, ?)';
        db.query(sql, [title, description, image, available], callback);
    },
    
    update: (id, game, callback) => {
        const { title, description, image, available } = game;
        const sql = 'UPDATE games SET title = ?, description = ?, image = ?, available = ? WHERE id = ?';
        db.query(sql, [title, description, image, available, id], callback);
    },
    
    delete: (id, callback) => {
        const sql = 'DELETE FROM games WHERE id = ?';
        db.query(sql, [id], callback);
    },
    
    getById: (id, callback) => {
        const sql = 'SELECT * FROM games WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = game;