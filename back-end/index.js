const express = require('express');
const fs = require('fs').promises;
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/tasks', async (req, res) => {
  try {
    const dados = await fs.readFile('./dbTasks.json')
    return res.status(200).json(JSON.parse(dados))
  } catch (error) {
    return res.status(400).json({ message: "Houve um problema ao buscar os dados" })
  }
})

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`))