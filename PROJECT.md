## Resolução do Desafio
###### [English version](/PROJECT_ENGLISH.md)

### Como executar usando o Docker
Vá para o diretório raiz do desafio e execute:
```shell
docker-compose up
```
ou, se você tiver npm disponível:
```shell
npm run docker
```

### How to run locally
###### Requirements
* Elastic search ^8 instalado sem TLS
* Node.js ^19 instalado
* npm ^8 instalado

Defina as seguintes variáveis de ambiente
* `ELASTIC_HOST=[elastic address with port]`
* `ELASTIC_USER=[elastic user]`
* `ELASTIC_PASSWORD=[elastic password]`

Você pode criar um arquivo `.env` na pasta `/server` para declarar essas variáveis.

Vá para o diretório raiz do desafio e execute:
```shell
npm install
npm start
```

### How to run tests
```shell
npm install
npm run test
```

## Approach
#### Server
Primeiro comecei a entender os [dados fictícios](base) oferecidos no repositório. Como os dados estavam muito desatualizados comecei a pesquisar se os dados estavam disponíveis publicamente, descubro a [API Clima Tempo Advisor](https://advisor.climatempo.com.br/), que permitia apenas a busca limitada de uma cidade por token por 24hs.

Eu vi que o [site Clima Tempo](https://www.climatempo.com.br/) oferece gratuitamente o clima de qualquer cidade na base, então decidi implementar o *web scrapping* para coletar dados climáticos dinamicamente. Isso é o que [`ClimaTempo.engine`](server/src/Engines/ClimaTempo/ClimaTempo.engine.ts) faz.

Então o [dados fictícios usados](server/src/dummy.json) foram atualizados com dados reais do período de 26/11/2022 a 10/12/2022 com as seguintes cidades:

- Osasco, SP (Brasil) *
- São Paulo, SP (Brasil) *
- Juiz de Fora, MG (Brasil) **
- Chácara, MG (Brasil) **
- Fortaleza, CE (Brasil)
- Gramado, RS (Brasil)
- Porto de Galinhas, PE (Brasil)
- Rio de Janeiro, RJ (Brasil)
- Curitiba, PR (Brasil)
- Arraial do Cabo, RJ (Brasil)
- Natal, RN (Brasil)
- Campos do Jordão, SP (Brasil)
- Belo Horizonte, MG (Brasil)
- Angra dos Reis, RJ (Brasil)

###### * Cidade obrigatória no desafio
###### ** Cidades que frequento

Quando o servidor é iniciado pela primeira vez, os dados fictícios são indexados no elasticsearch para estarem disponíveis para a pesquisa pelo usuário.

O servidor encadiará automaticamente qualquer solicitação ao mecanismo ClimaTempo e indexará a resposta, fazendo com que o elasticsearch atue como um cache. Se o elasticsearch já tiver os dados, ele será enviado rapidamente para o cliente e posteriormente desencadiará o mecanismo ClimaTempo para atualizar os dados do elasticsearch.

##### Os endpoints disponíveis são:
```shell
GET /search/[string] # para pesquisar cidades pelo nome
GET /ping # Para fazer ping-pong no servidor
GET /city/[id] # Para obter informações básicas da cidade
GET /city/[id]/now # Para obter o clima atual
GET /city/[code]/weather # Para obter o clima do dia atual
GET /city/[code]/weathers # Para obter o clima do dia atual e os próximos 14 dias
```

#### Frontend
O frontend está usando o kit de design [MUI](https://mui.com/) e [Tailwindcss](https://tailwindcss.com/) para estilo, ele foi projetado de forma responsiva para desktop, tablet e celular. No cabeçalho você pode:
* Pesquisar a cidade com opções dinâmicas de preenchimento automático
* Alternar entre o modo escuro e claro (primeiro seguirá o padrão do sistema e a opção de cache se você alterá-lo manualmente)
* Alternar entre as unidades °C e °F (o padrão é °C, ele armazena em cache se você alterá-lo manualmente)
* Alternar entre unidades de *mm* e *polegadas* (o padrão é *mm*, ele armazena em cache se você o alterar manualmente)

### O formato de dados do web scraping:

###### [Informações básicas da cidade](server/src/Models/Locale.model.ts)
```yaml
id: número # O id da cidade
name: string # O nome da cidade
uf: string # O estado da cidade
city: number # Código da cidade
region: string # A região da cidade
acrônimo: string # Sigla do país da cidade
```

###### [Informações detalhadas da cidade](server/src/Models/DetailedLocale.model.ts)
```yaml
idlocale: number # O id da cidade
idcity: number # Código da cidade
capital: boolean # Se a cidade for uma capital
idcountry: number # O id do país
ac: string # A sigla do país
country: string # O nome do país
uf: string # O estado da cidade
city: string # O nome da cidade
region: string # A região da cidade
seaside: boolean # Se for uma cidade litorânea
latitude: number # Latitude da cidade
longitude: number # A longitude da cidade
tourist: boolean # Se for uma cidade turística
agricola: boolean # Se for uma cidade agricola
base: string # Parece o nome da coleção da cidade
searchPoints: number # Qual a probabilidade desejada
```

###### [Informações meteorológicas instantâneas](server/src/Models/InstantWeather.model.ts)
```yaml
idlocale: number # O id da cidade
temperatura: number # A temperatura atual
icon: string # O alias para ícones do tempo
condição: string # Uma descrição do clima atual
umidade: number # O nível de umidade atual
sensação: number # A sensação de temperatura atual
windVelocity: number # A velocidade atual do vento
pressão: number # A pressão atmosférica atual
date: string # A data e hora desta informação meteorológica
```

###### [Informações meteorológicas diárias](server/src/Models/InstantWeather.model.ts)
```yaml
idcity: number # Código da cidade
moon: string[] # Lista de luas do dia
rainbow: string # A descrição da probabilidade de um arco-íris
description: string # Currículo do clima do dia
data: string # A data do dia
temperatura:
  min: number # A temperatura mínima do dia
  max: number # A temperatura máxima do dia
chuva:
  precipitação: number # Precipitação de chuva do dia
  probabilidade: number # O dia está chovendo provavelmente
vento:
  bússola: string # A direção do vento em cartesiano
  velocidade: number # A velocidade média do vento
umidade:
  min: number # A umidade mínima do dia
  max: number # A umidade máxima do dia
Sol:
  manhã: string # A hora do sol
  tarde: string # A hora do nascer do sol
```