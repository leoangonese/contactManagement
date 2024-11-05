const Contact = require('../models/contact');

exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();

        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar contatos' });
    }
};

exports.createContact = async (req, res) => {
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
};

exports.updateContact = async (req, res) => {
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
};

exports.deleteContact = async (req, res) => {
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
};
