const db = require('../config/database');

const category = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM categories';
        db.query(sql, callback);
    },
    
    create: (category, callback) => {
        const { name } = category;
        const sql = 'INSERT into categories (name) VALUES (?)';
        db.query(sql, [name], callback);
    },
    
    update: (id, category, callback) => {
        const { name } = category;
        const sql = 'UPDATE categories SET name = ? WHERE id = ?';
        db.query(sql, [name, id], callback);
    },
    
    delete: (id, callback) => {
        const sql = 'DELETE FROM categories WHERE id = ?';
        db.query(sql, [id], callback);
    },
    
    getById: (id, callback) => {
        const sql = 'SELECT * FROM categories WHERE id = ?';
        db.query(sql, [id], callback);
    }
};
 
module.exports = category;