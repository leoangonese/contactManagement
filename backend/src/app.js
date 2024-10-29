const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => {
  console.log('Conectado ao MongoDB com sucesso!');
})
.catch(err => {
  console.error('Erro ao conectar ao MongoDB:', err);
});

const contactSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});

const Contact = mongoose.model('Contact', contactSchema);

app.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar contatos' });
  }
});

app.post('/contacts', async (req, res) => {
  const { id, name, email, phoneNumber } = req.body;

  if (!id || !name || !email || !phoneNumber) {
    return res.status(400).send('Todos os parâmetros são obrigatórios.');
  }

  const newContact = new Contact({ id, name, email, phoneNumber });

  try {
    await newContact.save();
    res.status(201).json({ message: 'Criado com sucesso!', contact: newContact });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).send('Contato com esse ID já existe.');
    } else {
      res.status(500).json({ error: 'Erro ao criar contato' });
    }
  }
});

app.put('/contacts/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, phoneNumber } = req.body;

  try {
    const updatedContact = await Contact.findOneAndUpdate(
      { id },
      { name, email, phoneNumber },
      { new: true }
    );

    if (updatedContact) {
      res.json(updatedContact);
    } else {
      res.status(404).send('Contato não encontrado');
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar contato' });
  }
});

app.delete('/contacts/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedContact = await Contact.findOneAndDelete({ id });
    
    if (deletedContact) {
      res.status(204).send();
    } else {
      res.status(404).send('Contato não encontrado');
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar contato' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
