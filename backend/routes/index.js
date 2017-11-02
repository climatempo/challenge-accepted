var express = require('express');
var router = express.Router();
var Pessoa = require('../modelos/pessoa.js');

router.get('/', function(req, res, next) {
  Pessoa.todos(function(pessoas) {
    res.render('index', {
      title: 'Pagina inicial',
      pessoas: pessoas
    });
  });
});

router.post('/alterar-pessoa', function(req, res, next) {
  var pessoa = new Pessoa();

  pessoa.nome       = req.body.nome;
  pessoa.sobrenome  = req.body.sobrenome;
  pessoa.cpf        = req.body.cpf;

  pessoa.salvar(function() {
    res.redirect('/');
  }, req.query.cpfAlteracao);
});

router.get('/alterar', function(req, res, next) {
  var cpf = req.query.cpf;
  Pessoa.buscar(cpf,function(pessoa){
    if(pessoa == []) {
      res.redirect('/');
    }
    else {
      res.render('alterar', {pessoa: pessoa});
    }
  });
});

router.get('/excluir', function(req, res, next) {
  var pessoa = new Pessoa();
  pessoa.cpf = req.query.cpf;

  pessoa.excluir(function(pessoas){
    res.redirect('/');
  });
});

router.post('/pesquisar', function(req, res, next) {
  Pessoa.buscarNome(req.body.nome, function(pessoas) {
    res.render('index', {
      title: 'Pesquisa',
      pessoas: pessoas
    });
  });
});

router.post('/cadastrar', function(req, res, next) {
	var pessoa = new Pessoa();

  pessoa.nome       = req.body.nome;
  pessoa.sobrenome  = req.body.sobrenome;
  pessoa.cpf        = req.body.cpf;

  pessoa.salvar(function() {
    res.redirect('/');
  });
});

module.exports = router;
