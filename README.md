# qualityMap-challenge
Repositório referente ao desafio proposto pela QualityMap.

## Pré-requisitos

- NodeJS instalado;
- Git;
- IDE (Visual Studio Code);
- Cucumber (Gherkin) Full Support (Plugin VSCode);
- Cuke Step Definition Generator (Plugin VSCode).

## Instalação

- Acessar o link [https://nodejs.org/](https://nodejs.org/), baixar e instalar o NodeJS versão 18 ou superior;
- Ao baixar o NodeJS, o gerenciador de pacotes NPM virá junto. Para verificar a instalação do NodeJS e do NPM, abrir o Prompt de Comando (em qualquer pasta) e digitar:

Para verificar a instalação/versão do pacote NodeJS (deve retornar algo como v18.14.2):

``node -v `` 

Para verificar a instalação/versão do gerenciador de pacoted NPM (deve retornar algo como v6.14.5):

``npm -v ``
- Acessar o link [https://git-scm.com/downloads](https://git-scm.com/downloads), baixar e instalar o Git/GitBash;
 - No Windows Explorer, navegar até a pasta onde deseja clonar o projeto, abrir o GitBash (botão direito -> *Git Bash Here*) e digitar:

``git clone https://github.com/matheusangellos/qualityMap-challenge.git ``
 - Para que o Cypress funcione, é necessário que ele seja instalado atraves do *npm install* na pasta raiz do projeto
``npm install``

## Execução dos testes

- No terminal do VSCode deve ser executado o seguinte comando para que o Cypress possa ser executado:

`` npm run cypress-open``

- Selecionar a opção *E2E Testing*
- Selecionar o navegador de sua preferência (*Google Chrome recomendado*)
- Executar o teste de sua preferência

## O que pode ser aprimorado
- Criação de novos usuários de forma automática, sem a necessidade de efetuar este passo de forma manual.
- Tornar o usuário que efetua a reserva dinâmico, para que o mesmo não falhe caso seja executado mais de uma vez no mesmo dia.
- Padronização dos seletores (foi utilizado mais de um tipo em caráter de amostragem de conhecimento apenas).