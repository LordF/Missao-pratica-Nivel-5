const  mongoose = require('mongoose');
const banco = require('./conexao');

const LivroSchema = new banco.Schema({
    _id: mongoose.Types.ObjectId,
    titulo: String,
    codEditora: Number,
    resumo: String,
    autores:[String]
});

const Livro = banco.model('Livro', LivroSchema, 'livros');

module.exports = Livro;
