## Rodando a aplicação
Para rodar a aplicação basta seguir os passos abaixo:

- Clonar ou baixar a pasta do projeto.
- Acessar o diretório através do CMD ou abrir o diretório com o VSCode e abrir o terminal interno (Ctrl + '):
```
    cd /diretório/challenge-accepted
```
O projeto foi configurado para rodar com e sem Docker.

##### Com Docker: 
- É preciso ter o Docker instalado na máquina.
- Na raiz do diretório challenge-accepted basta rodar o seguinte comando para iniciar a aplicação:
```
    docker-compose up
```
- Para acessar a aplicação basta digitar [http://localhost:3000/](http://localhost:3000/) no navegador.

##### Sem Docker: 
- É preciso ter NodeJS e NPM instalados na máquina.
- À partir da raiz do diretório challenge-accepted, acesse os diretórios frontend e backend em termianis separados e execute o seguinte comando em ambos para instalar as dependências:
```
    npm install
```
- Após a instalação das dependências basta executar o seguinte comando para iniciar a aplicação e aguardar o navegador se abrir:
```
    npm run dev
```
- Se tudo correu bem será exibido no terminal a seguinte mensagem para cada núcleo de processamento que sua máquina possuir:

##### Observação: 
   * A aplicação foi configurada para executar na porta 3000. Caso a porta esteja em uso, será necessário pausar a aplicação que está utilizando esta porta para que seja possível rodar o projeto.

    