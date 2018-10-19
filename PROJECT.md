## Projeto de recrutamento

Segundo o meu entendimento, deveria ser desenvolvido um sistema para a busca de previsões do tempo de uma determinada cidade, a qual seria pesquisada pelo usuário em um campo disponível no layout.
Apesar da proposta do desafio pedir que fosse feita a leitura dos JSON's disponibilizados no diretório base, eu achei que seria muito simples e não mostraria a minha habilidade com os recursos do framework, então eu decidi criar um banco de dados e "populá-lo" com os dados contidos nos JSON's, podendo assim demonstrar também o uso de models, migrations e seeds.

### Sobre o sistema

O sistema foi desenvolvido utilizando o Laravel Framework 5.7.9, e dividido em duas camadas:

- ***View***
    - A view possui apenas um campo para interação com o usuário, sendo ele usado para pesquisar a cidade onde se deseja encontrar a previsão do tempo.
    - No campo de pesquisa foi implementado a função de autocomplete, para facilitar a experiência do usuário.
    - O layout é responsivo, possibilitando diferentes tamanhos de tela.
- ***API***
    - Essa possuí duas interfaces para a comunicação com o frontend, uma para a consultar as cidades e outra para consultar a previsão do tempo de uma cidade específica.
    - A interface de consulta de cidades é usada pelo autocomplete do campo de busca, permitindo ao frontend buscar as cidades que contém o termo digitado e sugerí-las ao usuário.

### Infraestrutura

Para o desenvolvimento foi utilizada a Vagrant, que também estará disponível para homologação.
Nela estão instalados:
- CentOS 7.5
- NGINX 1.12
- PHP 7.2
- MariaDB 5.5 (MySQL)

Essa instalação se faz de forma automática ao criar-lá, assim como a configuração do do Laravel.
A automatização foi feita com o uso de 3 arquivos (disponíveis no diretório "vagrant"):
- ***Vagrantfile***: contém instruções como, ip fixo, portas, diretório compartilhado, memória ram, entre outras.
- ***setup.sh***: responsável por instalar e configurar os programas necessários para a criação do Servidor Web, como nginx, php e mysql, entre outras dependências.
- ***bootstrap.sh***: responsável pela configuração do Laravel, executando composer, migrations e seeds.

___

### Como Testar

O teste será feito em duas etapas, primeiro faça o setup da aplicação, em seguida conclua com o teste funcional.

##### Setup

O teste pode ser feito de duas formas, com o uso da Vagrant, ou em um Servidor Web. Ambas serão descritas abaixo.
- ***Vagrant***
    - ***Requisitos***: ter instalado o VirtualBox e a Vagrant (preferencialmente no linux).
    - ***Uso***: 
        - Criar o Servidor Web:
            ```
            # Acesse o diretório "vagrant" na raiz do projeto e execute o seguinte comando:
            vagrant up
            
            # Aguarde até o fim da instalação e configuração, e execute o comando abaixo:
            vagrant reload
            ```
        - Após o servidor web criado, clique no link [Challenge Accepted - Wolmer](http://192.168.10.10/).
        - Ou se preferir, adicione o apontamento "192.168.10.10 climatempo.local". No linux isso deve ser feito no arquivo ```/etc/hosts```.
        

- ***Servidor Web***
    - ***Requisitos***: NGINX ou Apache, MySQL, PHP 7.2 (com as dependencias exigidas pele Laravel Framework 5.7), Composer.
    - ***Uso***:
        - Faça o upload de todos os diretórios e arquivos do projeto para o Servidor.
        - Aponte o ```document_root``` para ```[Pasta do Projeto]/public```.
        - Não esqueça de habilitar o PHP em seu vhost.
        - Crie um banco com o nome ```challenge```.
        - Acesse a raiz do projeto no servidor e altere os dados de conexão com o banco de dados no arquivo ```.env```, linhas 10, 12, 13 e 14.
        - Ainda no diretório raiz, execute os comandos abaixo:
            ```
            # Instalação das dependências do Framework
            composer install
            
            # Instalação do recurso "migration"
            php artisan migrate:install
            
            # Execução da migration para criação das tabelas e inserção de dados
            php artisan migrate --seed
            ```
        - Após isso, acesse o sistema com o endereço que você definiu.

##### Teste Funcional

Ao acessar o sistema, você verá um campo logo abaixo do logo da Climatempo, insira ali parte do nome da cidade ou sigla do estado que deseja visualizar.
Estão disponíveis para teste apenas as cidades "São Paulo - SP" e "Osasco - SP", as quais estavam no JSON enviado como base.


___



##### Observação

Eu comentei a linha 229 do ```.gitignore```, pois o arquivo ```.env``` já está configurado para funcionar utilizando a Vagrant.


___


Em caso de dúvidas, estou a disposição para esclarecimentos.