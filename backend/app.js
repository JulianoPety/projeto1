const express = require ('express');
const app = express();
const PORT = 3000;

const gameRoutes = require('./routes/gameRoutes');

app.use(express.json());
app.use('/games', gameRoutes);

app.get(('/'), (req, res) => {
    res.send('Servidor funcionando!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});






