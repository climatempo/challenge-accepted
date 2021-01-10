# Como rodar o projeto:
- No projeto foi utilizado o gerenciador de pacotes yarn, então é necessário baixar.
- No projeto foi utilizado no back-end o Node.js, nesse link possui um tutorial de configuração para o Node: https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/ambiente_de_desenvolvimento
- No front-end foi utilizado o React.js, nesse link também possui um tutorial: https://developer.mozilla.org/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Comecando_com_React
- Depois que der o clone no repositório, entre nas pastas back-end e front-end e rode o comando yarn, para que assim possa baixar as depêndencias dos projetos
- Para melhor facilidade, abra o back-end e front-end em diferentes IDE's. No back-end rode o comando "yarn dev" e espere, e no front-end rode o comando "yarn start" e espere.
- Para rodar os testes no back-end, rode o comando "yarn jest"


# O que foi feito:
- No back-end, foi utilizado o framework Express.
- Foram feitas 3 rotas no back-end. A "localidade.routes", que possui 2 rotas, uma que retorna todas as localidades e outra que retorna a localidade passando o Id da cidade como parâmetro.
- A "weather.routes", que possui 2 rotas, uma que retorna todas as weathers e outra que retorna a weather passando o nome da cidade como parâmetro.
- E por último a "routes.js", que é a rota base que vai se encarregar do funcionamento das outras rotas.
- No arquivo "index.spec.js", é onde apliquei o TDD do back-end. Lá é onde foi feito o teste das rotas. Para rodar use o comando "yarn jest"


- No front-end, foi utilizado o React.js
- Possui o arquivo "api.js" dentro da pasta services, que é responsável pela comunicação do front-end com o back-end utilizando o axios
- Na pasta routes possui o arquivo "index.js", que é o responsável pelo roteamento entre as páginas da aplicação.
- Na pasta pages, é onde tem as páginas da aplicação. Para cada página foi criada uma pasta, onde dentro possui o index.js(responsável pelo código), e o style.js(responsável pela estilização)
- Na pasta images possui todas as imagens utilizadas no projeto
- Na pasta components, possui o componente "SearchInput.js", que é o input que utilizei para fazer as buscas das cidades.
