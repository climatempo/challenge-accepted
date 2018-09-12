<p align="center">
      <img src="http://aboxsoft.com.br/img/abox/logo_black.png" alt="Aboxsoft, Inc." width="300px"/>
</p>

## Desenvolvido por:

Alberto Barrios & Rafael Bertolini

## Notas do desafio

Olá, optamos por executar o desafio apenas como desafio pessoal, tanto para divulgar nosso trabalho como para colocar nossos serviços à disposição.

Nos atemos exclusivamente aos requisitos pedidos no desafio, e mesmo que segundo nosso entendimento houvesse soluções mais adequadas, optamos por simplesmente atender o exigido, o que justifica a falta de uso de determinados componentes, como por exemplo o tratamento das datas; nosso framework faz uso do formato nacional, e como não há consenso entre JavaScript e PHP quanto ao formato padrão, optamos por transcrevê-las no código como valores absolutos e inteiros.

Esperamos que o resultado de algumas horas de dedicação seja ao menos satisfatório, obrigado.

Aboxsoft DEV Team.

## Linguagens e frameworks

Usamos o <i>set</i> básico HTML/CSS/JavaScript/PHP, e os frameworks JQuery e <b>ABLIB</b>.

ABLIB é um framework que integra JavaScript e PHP, é de nossa autoria e pode ser consultado no nosso <a href='https://github.com/aboxsoft/ablib'>github</a>.

## Filosofia 

Nosso famework se baseia na filosofia SPA (Single Page Application), com implementação de <i>XMLHttpRequest</i>'s e algumas classes para tratamento de informações, formatação de elementos visuais e mapeamento de variáveis em tempo de execução.

## Estrutura dos arquivos do projeto (apenas os utilizados)

<pre>
|---------------------------|----------------------------------------------|
| Arquivo                   | Descrição                                    |
|---------------------------|----------------------------------------------|
| /.ROOT                    | Indica o ponto de partida para o framework   |
| /index.php                | <i>launcher</i>                                     |
| /etc/loader.php           | Carrega informações do servidor              |
| /etc/loader.d/locale.conf | Arquivo de instrução para o loader.php       |
| /lib/constants.php        | Constants do framework                       |
| /lib/core.php             | Conjunto de funções de classes base do ABLIB |
| /lib/std.css              | Conjunto de formatação visual padrão         |
| /lib/std.min.js           | Conjunto de classes do framework ABLIB       |
| /project/header.php       | Primeira página carregada pelo launcher      |
| /project/weather/tile.php | Template dos blocos de informação mostrados  |
| /src/img/*                | Imagens utilizadas no projeto                |
| /src/json/*               | Arquivos base para consultas                 |
| /var/.PROJ                | Nome do projeto                              |
| /var/.HTTP                | URL do projeto                               |
|---------------------------|----------------------------------------------|
</pre>

Nota: Há mais arquivos, porém são dependências obrigatórias do ABLIB, mas não têm seus componentes utilizados neste projeto.

## Requisitos

O projeto foi desenvolvido sob as condições abaixo descritas:

- uname -a: Linux 4.18.7-arch1-1-ARCH #1 SMP PREEMPT Sun Sep 9 11:27:58 UTC 2018 x86_64
- nginx -v: nginx/1.15.3
- php-fpm -v: PHP 7.2.10 (fpm-fcgi) Zend Engine v3.2.0
- google-chrome-unstable --version: Google Chrome 70.0.3538.9 dev

Mas pode ser executado em quaquer <i>setup</i> qu inclui um servidor <i>http</i> e um interpretador PHP à partir de um navegador moderno, com as versões equivalentes às descritas a cima.

## Execução

Com as ferramentas adequadas e os serviços listados ativos, basta clonar o repositório na pasta raiz do servidor <i>http</i> e acessá-lo através do navegador usando a URL: <i>http://localhost/challenge-accepted.</i>

## Considerações

Esperamos de coração que nossos esforços não tenham sido em vão, reafirmo que não temos como finalidade angariar a vaga de <i>fullstack</i> disponível, nossa priore é a criação de um vínculo que pode ser proveitoso tanto para a <b>CLIMATEMPO</b> quanto para nós da <i><b>ABOXSOFT</b></i>, através de contratações pontuais ou participação de projetos, seja por contrato ou consultoria.

Não encontramos uma formula possível que sustentasse alguma coesão para que fosse possível carregar imagens de climas que tivessem relação com o descritivo de cada <i>text</i> no objeto <i>weather.json</i>, portanto ustilizamos uma única e ilustrativa. Também consideramos que ao serem duplicadas as informações do arquivo locales.json com weather.json, o documento com menor conteúdo poderia ser desprezado, uma vez que do ponto de vista de um desenvolvedor de banco de dados essa é uma relação insatisfatória.

Poderíamos ter nos dedicado à equilibrar questões como o aspecto visual dos ícones fornecidos, tal qual sua coloração, que julgamos não adequada à proposta visual que escolhemos, porém, isso nos custaria um tempo que não temos.

Quanto à data, consideramos, à título de demonstração, que a data 'atual' é 04/02, assim sendo, os elementos podem ser explorados com maior facilidade. Esta opção se dá com base no arquivo <i>json</i> fornecido, que traz um <i>range</i> específico de dias.

## Agradecimentos

Obrigado ao Giovani Cruz, que indiretamente nos trouxe a luz deste desafio.

Atenciosamente,

Equipe Aboxsoft DEV Team.<br>
Email: <a href='malito:contato@aboxsoft.com.br'>contato@aboxsoft.com.br</a> 

<pre>
    _    ____   _____  ______   ___  _____ _____
   / \  | __ ) / _ \ \/ / ___| / _ \|  ___|_   _|
  / _ \ |  _ \| | | \  /\___ \| | | | |_    | |  
 / ___ \| |_) | |_| /  \ ___) | |_| |  _|   | |  
/_/   \_\____/ \___/_/\_\____/ \___/|_|     |_|
</pre>
