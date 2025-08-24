const db = require('../config/database');

const game = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM games';
        db.query(sql, callback);
    },
    
    create: (game, callback) => {
        const { title, description, image, available, category_id } = game;
        const sql = 'INSERT into games (title, description, image, available, category_id) VALUES (?, ?, ?, ?, ?)';
        db.query(sql, [title, description, image, available, category_id], callback);
    },
    
    update: (id, game, callback) => {
        const { title, description, image, available, category_id } = game;
        const sql = 'UPDATE games SET title = ?, description = ?, image = ?, available = ?, category_id = ? WHERE id = ?';
        db.query(sql, [title, description, image, available, category_id, id], callback);
    },
    
    delete: (id, callback) => {
        const sql = 'DELETE FROM games WHERE id = ?';
        db.query(sql, [id], callback);
    },
    
    getById: (id, callback) => {
        const sql = 'SELECT * FROM games WHERE id = ?';
        db.query(sql, [id], callback);
    },
    
    getAllByCategoryId: (category_id, callback) => {
        const sql = 'SELECT * FROM games WHERE category_id = ?';
        db.query(sql, [category_id], callback);
    },
    
    getAllByCategories: (categories, callback) => {
        const sql = 'SELECT * FROM games WHERE category_id IN (?)';
        db.query(sql, [categories], callback);
    }
};

module.exports = game;