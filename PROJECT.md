# Configuração e Instalação

  - ## Requisitos
    - [Composer](https://getcomposer.org/download/)
    - [Adicionar Composer na linha de comando](https://getcomposer.org/doc/00-intro.md#globally)
    - PHP >= 5.6

  - ## Instalação
    - $ git clone https://github.com/luizsene/challenge-accepted.git
    - $ cd challenge-accepted
    - $ composer install
    ```
  
  - ## Executando em desenvolvimento
    - php -S localhost:8000 -t challenge-accepted
    - Acesse: http://localhost:8000
        - OU
    - caso tenha apache instalado coloque na pasta corespondente e acesse https://localhost/challenge-accepted

  - ## Executando testes
    $ php vendor/phpunit/phpunit/phpunit
    
    
   # Documentação
   
   - ## Ferramentas
        - jQuery: Para requisições simples em Ajax
        - CodeIgniter: Velocidade do desenvolvimento para esse tipo de aplicação
        
   - ## API     
             | Method | Endpoint | Parameters | Description |
             | `GET` | */api/query/weather?search=* | *search:* `string` | Consulta previsão de acordo com parametro passado. |
   
   - ## Requisitos não funcionais
       - Uso de design responsivo nas interfaces gráficas.
       - Utilização do estilo de código PSR-2.
    
   - ## Requisitos funcionais
       - Consultar localidade pelo nome
       - Consulta Previsao pelo id da Localidade
       