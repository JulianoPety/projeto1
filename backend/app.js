const express = require ('express');
const app = express();
const PORT = 3000;

const gameRoutes = require('./routes/gameRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use(express.json());
app.use('/api', gameRoutes);
app.use('/api', categoryRoutes);

app.get(('/'), (req, res) => {
    res.send('Servidor funcionando!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});






