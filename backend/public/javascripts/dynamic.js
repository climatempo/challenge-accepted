var excluirDados = function(cpf) {
	if(confirm('Deseja excluir?')) {
		window.location.href = '/excluir?cpf='+cpf;
	}
}