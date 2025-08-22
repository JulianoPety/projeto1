const express = require ('express');
const app = express();
const PORT = 3000;

const db = require('./config/database');

app.use(express.json());

app.get(('/'), (req, res) => {
    res.send('Servidor funcionando!');
});

app.get('/games', (req, res) => {
    const sql = 'SELECT * FROM GAMES';
    
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erro na consulta:', err);
            res.status(500).json({ error: 'Erro ao buscar jogos' });
            return;
        }
        res.json(results);
    });
});

app.post('/games', (req, res) => {
    const { title, description, image, available } = req.body;

    const sql = 'INSERT INTO games (title, description, image, available) VALUES (?, ?, ?, ?)';

    db.query(sql, [title, description, image, available], (err, result) => {
        if (err) {
            console.error('Erro ao inserir:', err);
            return res.status(500).json({ error: 'Erro ao adicionar jogo'});
        }
        res.json({ message: 'Jogo adicionado com sucesso!', id: result.insertId });
    });
});

app.put('/games/:id', (req, res) => {
    const { id } = req.params;

    const { title, description, image, available } = req.body;

    const sql = 'UPDATE games SET title = ?, description = ?, image = ?, available = ? WHERE id = ?'
    db.query(sql, [title, description, image, available, id], (err, results) => {
        if (err) {
            console.error('Erro ao atualizar:', err);
            return res.status(500).json({ error: 'Erro ao atualizar jogo '});
        }
        res.json({ message: 'Jogo atualizado com sucesso!' });
    });
});

app.delete('/games/:id', (req, res) => {
    const { id } = req.params

    const sql = 'DELETE games FROM WHERE id = ?';

    db.query(sql, [title, description, image, available, id], (err,resultado) => {
        if (err) {
            console.error('Erro ao deletar', err);
            return res.status(500).json({ error: 'Erro ao remover jogo' });
        }
        res.json({ message: 'Jogo removido com sucesso!' });
   });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});






