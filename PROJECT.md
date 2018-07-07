## Projeto desenvolvido por João Victor Fornitani Silva
Email: jfornitani@hotmail.com

### Nessecidades para execução:

- Servidor Web para executar PHP
- Navegador


### Desenvolvimento:

Foi ultilizado :
**CSS**
**HTML**
**JAVASCRIPT**
**PHP**

### Frameworks:
Foi ultilizado :
**Jquery**

### Procedimento :

- **Layout**

Foi feito um modelo de layout que iria bater com proposto no exemplo, e a partir desse ponto foi feito a interface, 
visando melhor usabilidade. 

- **CSS** 

A partir de um modelo proposto pelo layout desenhado, foi feito toda divisão de elementos do documento.
Nenhuma biblioteca de CSS foi ultilizada, apenas arquivos externos que foram linkados a página principal.

- **HTML**

Modelo proposto pelo modelo 5, apenas criando um corpo e algumas tags, para divisão do documento, seguindo padrão proposto pela norma.

- **JAVASCRIPT**

Foi ultilizado o framework Jquery para que fosse feito a passagem de valores sem a ultilização de um recarregar na página,
além de seletores para manipular alguns valores, seu uso principal foi para envio de valores por meio de $_POST para o PHP.

**EXEMPLO:**

$.post('php/locales.php', {
                valor: enviar
            }, function (response) {
                if (response == true) {
                    $.post('index.php', {
                        g: enviar
                    }, function (response1) {
                    });

Como pode ver ele envia um valor por $_POST e dependendo da resposta ele faz uma determinada função
que no caso é enviar outro valor. Esse código está na linha 38 do index.

- **PHP**

Não foi ultilizado nenhum framework de PHP, existem 3 arquivos dentre eles:

LOCALES: Responsavel por receber a cidade que está procurando e ver se ela está entre a lista de cidades
e voltar com true se existe a cidade ou false se não existe.

WEATHER: Recebe a cidade que foi procurada e existe, esse arquivo só é chamado quando a cidade existe para gerar o que chamo de cards
são os container responsaveis por abrigar os dados contidos no arquivo json das localidades, primeiro ele busca o indice da cidade buscada:

foreach ($json as $locale) {
    if ($locale->locale->name == $local) {
        break;
    }
    $i++;
}

Quando ele acha para de incrementar o $i. OBS: levando em conta que já se sabe que a cidade existe.
Depois ele chama uma classe card montando os cards, estanciando a classe e passando os valores pelo construtor.

foreach ($json[$i]->weather as $resgistro) {
    $card = new Card($resgistro->date, $resgistro->text, $resgistro->temperature->min, $resgistro->temperature->max, $resgistro->rain->probability, $resgistro->rain->precipitation);
    $card->montar_card();
    
CARD: Classe responsavel por receber por parâmetro as váriaveis da adquiridas no json das cidades, e monta essas div(s) que são geradas pelo número de informaçoes que a cidade disponibiliza.
Então cada vez que uma data nova é achada se chama novamente essa classe.

### Etapas   

O sistema começa abrindo uma sesão e perguntando se a página está recebendo um POST, caso esteja ele stribui um valor a uma variavél de Sessão para guardão a cidade atual.

Depois ele executa todo o arquivo de html e css, carregando suas classes, quando chega no script ele
fica esperando que o campo input de busca seja preechido e buscado, logo em seguida quando digitado ele chama o arquivo de php que verifica se a cidade consta na lista. Caso não
exista exibe uma mensagem, mas se existe ele chama um outro arquivo em php que faz o carregamento das informações do json.

Busca todos os dados necessarios e passa para classe card que exibe todos esses cards que foram adquiridos com os dados das respectivas cidade buscada.


### Conclusão

Tenta atender os pontos levantados nos requisitos, com testes feitos para ver possiveis erros, além de diferentes resoluções para ver a adptão de plataformas mobile.

Qualquer dúvida pode estar entrando em contato, fico a disposição para esclarecer eventuais dúvidas:

Email: jfornitani@hotmail.com

Telefone: (12) 997861119  
