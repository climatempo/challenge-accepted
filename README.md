<p align="center">
  <a href="http://www.climatempo.com.br">
      <img src="http://i.imgur.com/Q9lCAMF.png" alt="Climatempo" width="300px"/>
  </a>
</p>

___


## Processo de recrutamento

Olá desenvolvedor, pronto para participar do nosso
processo de recrutamento para vaga de Full-stack (CLT)?

### Sobre a Vaga

- Empresa: Climatempo
- Cargo: Desenvolvedor Full-stack (CLT);
- VR e VT;
- Home Office;
- Flexibilidade no horário de trabalho para acompanhar eventos de tecnologia;
- Local: Parque Tecnológico - São José dos Campos (http://www.pqtec.org.br/).


### Requisitos

Requisitos para a vaga, bons conhecimentos em:

- HTML
- CSS
- Javascript
- NodeJS
- PHP
- SQL
- NoSQL
- RESTful
- React JS

IMPORTANTE:

- Residir no vale do paraíba ou nas proximidades.


### O Desafio

Um usuário quer saber como vai ficar o 
tempo para os próximos dias em Osasco e São Paulo utilizando
seu smartphone. 

O que esperamos:
 
 - Uma página responsiva para mobile (Qualquer resolução);
 - Um campo para buscar localidades;
 - Um card para cada dia de previsão de chuva, temperatura e o texto para a localidade buscada;
 - Uma API com endpoints para buscar localidades e previsão fazendo leitura dos JSONs no diretório base;
 - Testes (Pode ser teste de unidade ou funcional).
 
Exemplo:

<p align="center">
  <a href="http://www.climatempo.com.br">
      <img src="http://i.imgur.com/x3z4tYM.png" alt="Climatempo" width="400px"/>
  </a>
</p>

**Atenção:**  Não se preocupe em reproduzir o exemplo, use apenas como referência.
 
### Dados

A API deve fazer a leitura dos dados dos JSONs no diretório base.
 
Localidades:
    
    base/locales.json
 
| Propriedade   | Tipo   | Descrição                           |
| ------------- |:------:| ------------------------------------|
| `id`          | Number | Id da localidade                    |
| `name`        | String | Nome da localidade                  |
| `state`       | String | Sigla do estado da localidade       |
| `latitude`    | Number | Latitude do centro da localidade    |
| `longitude`   | Number | Longitude do centro da localidade   |
 
 
Os dados de previsão estão no JSON:
 
    base/weather.json
    
**period: Object**
 
| Propriedade        | Tipo   | Descrição                                  |
| ------------------ |:------:| -------------------------------------------|
| `period.begin`     | String | Data início da busca no formato AAAA-MM-DD |
| `period.end `      | String | Data fim  da busca no formato AAAA-MM-DD   |

**locale: Object**
 
Os mesmos dados do JSON de localidades.
 
**weather: Object**
 
| Propriedade                     | Tipo   | Descrição                                  |
| ------------------------------- |:------:| -------------------------------------------|
| `weather.date`                  | String | Data da previsão no formato AAAA-MM-DD     |
| `weather.text`                  | String | Texto sobre a previsão do dia              |
| `weather.temperature.min`       | Number | Temperatura mínima em graus celsius (°C)   |
| `weather.temperature.max`       | Number | Temperatura máxima em graus celsius (°C)   |
| `weather.rain.probability`      | Number | Probabilidade de chuva em porcentagem (%)  |
| `weather.rain.precipitation`    | Number | Precipitação de chuva em milímetros (mm)   |

### Avaliação

O que vamos avaliar:

- Desempenho;
- Manutenabilidade;
- Organização;
- Boas práticas.

### Stack
Para o desafio você deve utilizar qualquer biblioteca ou framework desde que seja em uma das linguagens:

- PHP
- Javascript (NodeJS)

### Comece

O processo do desafio deve ser:

1. Faça o fork do desafio.

2. Desenvolva! Você terá **2 dias** a partir da data do envio do desafio.

3. Crie um **PROJECT.md** com a explicação de como devemos executar o projeto e com o máximo de detalhes possível do que foi feito.

4. Após concluir faça um pull request.

5. Envie um e-mail para fullstack@climatempo.com.br com seu **curriculo, pretensão salarial e o link do seu pull request**.


___


Qualquer dúvida entre em contato com nossa equipe.
