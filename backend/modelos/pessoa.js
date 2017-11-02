var App = require('../config/app.js');

var Pessoa = function()
{
	this.nome;
	this.sobrenome;
	this.cpf;

	this.salvar = function(callback, cpfAlteracao){
		var query;
		if(cpfAlteracao == undefined) {
			query = "INSERT INTO pessoas SET cpf = '"+this.cpf+"', nome = '"+this.nome+"', sobrenome = '"+this.sobrenome+"'";
		}
		else {
			query = "UPDATE pessoas SET nome = '"+this.nome+"', sobrenome = '"+this.sobrenome+"' WHERE cpf = '"+this.cpf+"'";
		}

		App.db.cnn.exec(query, function(rows, err) {
			if(err) {
				console.log("Erro ao executar query => ("+query+")\n");
				callback.call();
			}
			else {
				callback.call();
			}
		});
	}

	this.excluir = function(callback){
		var query = "DELETE FROM pessoas WHERE cpf = '"+ this.cpf +"'";
		
		App.db.cnn.exec(query, function(rows, err) {
			if(err) {
				console.log("Erro ao executar query => ("+query+")\n");
				callback.call();
			}
			else {
				callback.call();
			}
		});
	}
}

Pessoa.buscar = function(cpf, callback){
	var query = "SELECT * FROM pessoas WHERE cpf = '"+cpf+"'";
	App.db.cnn.exec(query, function(rows, err) {
		if(err) {
			console.log("Erro ao executar query => ("+query+")\n");
			callback.call(null, []);
		}
		else {
			if(rows.length > 0) {
				callback.call(null, rows[0]);
			}
			else {
				callback.call(null, []);
			}
		}
	});
}

Pessoa.buscarNome = function(nome, callback){
	var query = "SELECT * FROM pessoas WHERE nome LIKE '%"+ nome +"%'";
	App.db.cnn.exec(query, function(rows, err) {
		if(err) {
			console.log("Erro ao executar query => ("+query+")\n");
			callback.call(null, []);
		}
		else {
			callback.call(null, rows);
		}
	});
}

Pessoa.todos = function(callback){
	var query = "SELECT * FROM pessoas";
	App.db.cnn.exec(query, function(rows, err) {
		if(err) {
			console.log("Erro ao executar query => ("+query+")\n");
			callback.call(null, []);
		}
		else {
			callback.call(null, rows);
		}
	});
}

module.exports = Pessoa;