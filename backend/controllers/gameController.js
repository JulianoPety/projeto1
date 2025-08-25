const game = require('../models/gameModel');

const gameController = {
    getAllGames: (req, res) => {
        game.getAll((err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results); 
        });
    },
    
    getGameById: (req, res) => {
        const { id } = req.params;
        game.getById(id, (err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results > 0 ? results : 'Jogo não encontrado');
        });
    },
    
    createGame: (req, res) => {
        game.create(req.body, (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json(result > 0 ? result : 'Erro ao inserir!');
        });
    },
    
    updateGame: (req, res) => {
        const { id } = req.params;
        game.update(id, req.body, (err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json ({ message: 'Jogo atualizado com sucesso!' });
        });
    },
    
    deleteGame: (req, res) => {
        const { id } = req.params;
        game.delete(id, (err) => {
            if (err) return res.status(500).json({ error: err});
            res.json ({ message: 'Jogo removido com sucesso!' });
        });
    }
};
 
module.exports = gameController;

