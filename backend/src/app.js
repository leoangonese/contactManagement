const express = require('express');
const bodyParser = require('body-parser');

// Inicialização do servidor
const app = express();
app.use(bodyParser.json());

// Array para armazenar contatos em memória
const contacts = [];

// Rota para listar todos os contatos
app.get('/contacts', (req, res) => {
  res.json(contacts);
});

// Rota para criar um novo contato
app.post('/contacts', (req, res) => {
  const newContact = req.body;
  const { id, name, email, phoneNumber } = newContact;

  // Verificar se o contato já existe
  if (contacts.some((contact) => contact.id === newContact.id)) {
    return res.status(400).send('Contato com esse ID já existe.');
  } else if (!id || !name || !email || !phoneNumber) {
    return res.status(400).send('Todos os parametros são obrigatórios.');
  }

  contacts.push(newContact);
  res.status(201).json({ message: `Criado com sucesso!`, contact: newContact });
});

// Rota para atualizar um contato existente
app.put('/contacts/:id', (req, res) => {
  const { id } = req.params;
  const updatedContact = req.body;

  const index = contacts.findIndex((contact) => contact.id === id);
  if (index !== -1) {
    contacts[index] = updatedContact;
    res.json(updatedContact);
  } else {
    res.status(404).send('Contato não encontrado');
  }
});

// Rota para excluir um contato
app.delete('/contacts/:id', (req, res) => {
  const { id } = req.params;
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index !== -1) {
    contacts.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Contato não encontrado');
  }
});

// Início do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
