<p align="center">
  <a href="http://www.climatempo.com.br">
      <img src="http://i.imgur.com/Q9lCAMF.png" alt="Climatempo" width="300px"/>
  </a>
</p>

___


## Processo para Execução do Projeto

- O sistema foi desenvolvido sem utilizar nenhum Framework, portanto não se fazer necessário a instalação de nenhum software adicional;
- Para rodar, basta copiar a pasta "challenge-accepted" para dentro do servidor apache e acessar o arquivo "index.php" via browser;

### Tecnologias Utilizadas

- Linguagem: PHP;
- Justificativa: Atualmente, todos os sistema que desenvolvo são feitos em PHP, então devido a familiaridade com a linguagem, optei por utiliza-la;

- Front-end: Material Design Lite (MDL);
- Justificativa: Optei por utilizar o Material Design devido a simplicidade, e a semelhança aos componentes utilizados pela Google e pela própria Climatempo. 

- Autocomplete: Para realizar o autocomplete utilizei jQuery, Ajax e PHP para decodificar o Json, retornar os campos que seriam necessários para o processo e exibir em tela em forma de "opção".

- Testes: Para realizar os testes, pensei em utilizar PHPUnit para criar um teste unitário automizado, porém, por questão de tempo acabei não implementando o Framework, e realizei apenas um teste funcional de Caixa Preta.


### Teste de Caixa Preta
- RESULTADOS ESPERADOS:
1. Ao acessar via Tablet ou Mobile, a página deve ser redimensionada, sendo responsiva;
2. Ao realizar a busca por uma cidade que não está cadastrada no Json, o sistema não pode retornar erro;
3. Ao realizar uma buscar em branco, o sistema deve zerar os resultados;
4. Se for realizada uma busca utilizando números ou caracteres especiais, o sistema não deve gerar erro;
5. O sistema deve trazer as sugestões de autocomplete mesmo se a palavra não for digitada exatamente igual a que está cadastrada no Json (Letras maiúsculas e acentuação).

- RESULTADOS OBTIDOS:
1. Ao abrir em um tela grande (computador) o sistema exibe uma grade com 4 cards por linha, ao abrir em um tablet ele exibe 2 cards por linha, e ao abrir em um celular ele exibe 1 card por linha;
2. O sistema exibe a mensagem dizendo que a cidade ainda não está cadastrada;
3. O sistema limpa os resultados ao buscar em branco;
4. O sistema apenas exibe a mensagem dizendo que a cidade não está cadastrada, mas não exibe erros;
5. O sistema trata os campos antes de realizar a comparação, assim trazendo os resultados indenpendente se houver letras maiúsculas, minúsculas ou caracteres epeciais.


___


Qualquer dúvida estou a disposição.
Email: thiagoteberga@live.com
