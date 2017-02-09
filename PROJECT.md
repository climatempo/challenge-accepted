{\rtf1\ansi\ansicpg1252\cocoartf1504\cocoasubrtf810
{\fonttbl\f0\fswiss\fcharset0 ArialMT;\f1\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red201\green201\blue201;\red255\green255\blue255;
}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\cssrgb\c82745\c82745\c82745;\cssrgb\c100000\c100000\c100000;
}
{\*\listtable{\list\listtemplateid1\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{disc\}}{\leveltext\leveltemplateid1\'01\uc0\u8226 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listname ;}\listid1}
{\list\listtemplateid2\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{disc\}}{\leveltext\leveltemplateid101\'01\uc0\u8226 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listname ;}\listid2}
{\list\listtemplateid3\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{disc\}}{\leveltext\leveltemplateid201\'01\uc0\u8226 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listname ;}\listid3}}
{\*\listoverridetable{\listoverride\listid1\listoverridecount0\ls1}{\listoverride\listid2\listoverridecount0\ls2}{\listoverride\listid3\listoverridecount0\ls3}}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl360\sa266\qc\partightenfactor0

\f0\b\fs32 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 ESTRUTURA DO PROJETO
\f1\b0\fs24 \
\pard\pardeftab720\sl340\sa266\partightenfactor0

\f0\fs29\fsmilli14667 \cf2 O projeto challenge-accepted possui em sua raiz 6 pastas e 2 arquivos. 
\f1\fs24 \

\f0\fs29\fsmilli14667 As pastas s\'e3o: 
\f1\fs24 \
\pard\tx220\tx720\pardeftab720\li720\fi-720\sl340\sa266\partightenfactor0
\ls1\ilvl0
\f0\fs29\fsmilli14667 \cf2 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\'95	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 app: arquivos de codifica\'e7\'e3o do sistema. Nesta pasta se encontra acesso a banco de dados (nesse caso acesso aos JSONs), as rotas do sistema e os arquivos de visualiza\'e7\'e3o HTML; 
\f1\fs24 \uc0\u8232 \
\ls1\ilvl0
\f0\fs29\fsmilli14667 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\'95	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 base: arquivos JSONs que s\'e3o o banco de dados para o sistema;
\f1\fs24 \uc0\u8232 \
\ls1\ilvl0
\f0\fs29\fsmilli14667 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\'95	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 config: pasta que cont\'e9m o arquivo com a configura\'e7\'e3o das depend\'eancias do sistema;
\f1\fs24 \uc0\u8232 \
\ls1\ilvl0
\f0\fs29\fsmilli14667 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\'95	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 node_modules: aqui est\'e3o os plugins e ferramentas externas do sistema que foram baixados e instalados no projeto;
\f1\fs24 \uc0\u8232 \
\ls1\ilvl0
\f0\fs29\fsmilli14667 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\'95	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 public: arquivos de JS, CSS e imagens publicas que s\'e3o utilizadas pelo sistema;
\f1\fs24 \uc0\u8232 \
\ls1\ilvl0
\f0\fs29\fsmilli14667 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\'95	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 test: pasta com arquivos utilizados para teste de integra\'e7\'e3o.
\f1\fs24 \uc0\u8232 \
\pard\pardeftab720\sl340\sa266\partightenfactor0

\f0\fs29\fsmilli14667 \cf2 Os dois arquivos da raiz s\'e3o:
\f1\fs24 \
\pard\tx220\tx720\pardeftab720\li720\fi-720\sl340\sa266\partightenfactor0
\ls2\ilvl0
\f0\fs29\fsmilli14667 \cf2 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\'95	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 app.js: arquivo de inicializa\'e7\'e3o do projeto. Ele faz o carregamento do m\'f3dulo de configura\'e7\'e3o da pasta config e ap\'f3s isso sobe o servidor em localhost, na porta 3000;
\f1\fs24 \uc0\u8232 \
\ls2\ilvl0
\f0\fs29\fsmilli14667 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\'95	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 package.json: este arquivo cont\'e9m os detalhes sobre o projeto tal como: nome, vers\'e3o, descri\'e7\'e3o, autor e etc.
\f1\fs24 \uc0\u8232 \
\pard\pardeftab720\sl280\sa266\partightenfactor0
\cf2 \'a0\
\pard\pardeftab720\sl360\sa266\qc\partightenfactor0

\f0\b\fs32 \cf2 EXECUTANDO O PROJETO
\f1\b0\fs24 \
\pard\pardeftab720\sl340\sa266\partightenfactor0

\f0\fs29\fsmilli14667 \cf2 Para executar o projeto \'e9 necess\'e1rio ter instalado na m\'e1quina o NodeJS, preferencialmente na vers\'e3o 6.9.4, com o Node instalado basta entrar na pasta challenge-accepted onde se encontra o arquivo app.js, pelo terminal, e digitar o seguinte comando:
\f1\fs24 \
\pard\pardeftab720\sl360\qc\partightenfactor0

\f0\i\fs32 \cf2 \cb3 nodemon app 
\f1\i0\fs24 \cb4 \
\pard\pardeftab720\sl280\qc\partightenfactor0
\cf2 \'a0\
\pard\pardeftab720\sl340\sa266\partightenfactor0

\f0\fs29\fsmilli14667 \cf2 \cb1 O m\'f3dulo do nodemon j\'e1 est\'e1 instalado no projeto, e se encontra na pasta node_modules. A partir disso, o NodeJS estar\'e1 rodando na m\'e1quina no endere\'e7o http://localhost:3000.
\f1\fs24 \
\pard\pardeftab720\sl280\sa266\partightenfactor0
\cf2 \'a0\
\pard\pardeftab720\sl360\sa266\qc\partightenfactor0

\f0\b\fs32 \cf2 DETALHES DO FUNCIONAMENTO
\f1\b0\fs24 \
\pard\pardeftab720\sl340\sa266\partightenfactor0

\f0\fs29\fsmilli14667 \cf2 Ap\'f3s entrar no sistema, o usu\'e1rio deve digitar no campo de pesquisa o nome de uma cidade. A partir da\'ed, o sistema far\'e1 o envio do nome digitado para a rota /search onde o servidor NodeJS receber\'e1 essa requisi\'e7\'e3o HTTP/GET e verificar\'e1 no banco se existe previs\'e3o de clima para aquela cidade. Independente do resultado da busca, o sistema ir\'e1 retornar alguma informa\'e7\'e3o para o usu\'e1rio: caso tenha encontrado, retornar\'e1 a listagem de climas por data, e em caso negativo retornar\'e1 com alguma mensagem, relatando problema para buscar a informa\'e7\'e3o. 
\f1\fs24 \
\pard\pardeftab720\sl280\sa266\partightenfactor0
\cf2 \'a0\
\pard\pardeftab720\sl360\sa266\qc\partightenfactor0

\f0\b\fs32 \cf2 TECNOLOGIAS E FRAMEWORKS
\f1\b0\fs24 \
\pard\tx220\tx720\pardeftab720\li720\fi-720\sl360\sa266\partightenfactor0
\ls3\ilvl0
\f0\fs32 \cf2 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\'95	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 NodeJS vers\'e3o 6.9.4;
\f1\fs24 \uc0\u8232 \
\ls3\ilvl0
\f0\fs32 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\'95	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Express;
\f1\fs24 \uc0\u8232 \
\ls3\ilvl0
\f0\fs32 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\'95	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Express-load;
\f1\fs24 \uc0\u8232 \
\ls3\ilvl0
\f0\fs32 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\'95	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Nodemon;
\f1\fs24 \uc0\u8232 \
\ls3\ilvl0
\f0\fs32 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\'95	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Body-parser;
\f1\fs24 \uc0\u8232 \
\ls3\ilvl0
\f0\fs32 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\'95	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 EJS;
\f1\fs24 \uc0\u8232 \
\ls3\ilvl0
\f0\fs32 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\'95	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Moment;
\f1\fs24 \uc0\u8232 \
\ls3\ilvl0
\f0\fs32 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\'95	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Mocha
\f1\fs24 \uc0\u8232 \
\ls3\ilvl0
\f0\fs32 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\'95	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 CSS3;
\f1\fs24 \uc0\u8232 \
\ls3\ilvl0
\f0\fs32 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\'95	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Bootstrap 3.3.7
\f1\fs24 \uc0\u8232 \
\ls3\ilvl0
\f0\fs32 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 {\listtext	\'95	}\expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 HTML5;
\f1\fs24 \uc0\u8232 \
\pard\pardeftab720\sl280\sa266\partightenfactor0
\cf2 \'a0\
}