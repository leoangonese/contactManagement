const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.register = async (req, res) => {
    const { name, cpf, phoneNumber, email, password, confirmPassword } = req.body;

    console.log(name, cpf, phoneNumber, email, password, confirmPassword)

    if (!name || !cpf || !phoneNumber || !email || !password || !confirmPassword) {
        return res.status(400).send('Todos os parâmetros são obrigatórios.');
    }
    if (password !== confirmPassword) {
        return res.status(400).send('As senhas não coincidem.');
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, cpf, phoneNumber, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).send('Usuário com esse CPF já existe.');
        } else {
            res.status(500).json({ error: 'Erro ao registrar usuário' });
        }
    }
};

exports.login = async (req, res) => {
    const { cpf, password } = req.body;
    if (!cpf || !password) {
        return res.status(400).send('CPF e senha são obrigatórios.');
    }

    try {
        const user = await User.findOne({ cpf });
        if (!user) return res.status(400).send('Usuário não encontrado.');

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) return res.status(400).send('Senha incorreta.');

        const token = jwt.sign({ cpf: user.cpf }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Login bem-sucedido!', token });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
};
