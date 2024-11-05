const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importando o cors
require('dotenv').config();
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');

const app = express();
app.use(cors()); // Usando o middleware CORS
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

app.use('/auth', authRoutes);
app.use('/contacts', contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
