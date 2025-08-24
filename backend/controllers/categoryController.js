const category = require('../models/categoryModel.js');

const categoryController = {
    getAllCategories: (req, res) => {
        category.getAll((err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results); 
        })
    },
    
    getCategoryById: (req, res) => {
        const { id } = req.params;
        category.getById(id, (err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results[0]);
        });
    },
    
    createCategory: (req, res) => {
        category.create(req.body, (err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results?.insertId > 0 ? results : 'Erro ao criar categoria!');
        });
    },
    
    updateCategory: (req, res) => {
        const { id } = req.params;
        category.update(id, req.body, (err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results);
        });
    },
    
    deleteCategory: (req, res) => {
        const { id } = req.params;
        category.delete(id, (err) => {
            if (err) return res.status(500).json({ error: err});
            res.json ({ message: 'Categoria removida com sucesso! ' + id });
        });
    }
};
 
module.exports = categoryController;

