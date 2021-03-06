# Desafio da Saúde MV
Esse software tem a função de disponibilizar os dados do Cadastro Nacional de Estabelecimentos de Saúde (CNES) no Brasil. Estas informações são armazenadas no banco de dados e são consumidos por outra aplicação que mostrará de forma legível os dados.

## Documentação do projeto.
A documentação do projeto se encontra no [Drive](https://docs.google.com/document/d/12jiaFyFmCxaV_yP61ug3WU68jDWK_vmNl_BLveDg5Lk/edit?usp=sharing)

## Backend

### Lista de programas que deve conter na sua máquina.
1. [NodeJs](https://nodejs.org/en/)
2. [MongoDB - versão: 3.4.20](https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-3.4.20-signed.msi/download)

### Comandos para instalar as dependencias antes de executar o código fonte.
1. Abra o prompt de comandos.
2. Acesse a pasta onde você fez o clone do projeto pelo prompt de comandos.
3. Após acessar, digite o comando: "npm install"

Com isso todas as dependencias que o projeto esta utilizando serão instaladas e você conseguirar executar o codigo fonte sem problemas.

### Comandos para Deixar o Backend da Aplicação executando.
1. Abra o prompt de comandos.
2. Execute o comando: _mongod_ isso iniciara o banco.
3. Acesse a pasta backend do projeto onde você salvou o clone do projeto por outro prompt de comandos.
4. Execute o comando: _npm run statDB_ isso fará que o nodejs leia o arquivo csv *cnes_ativonone.csv* e insira os dados no banco.
5. Execute o comando: _npm run dev_ isso iniciara a aplicação de modo desenvolvedor.

**OBS**: o passo 4 só precisa ser executado uma vez ou seja, caso não seja a sua primeira vez inicializando o projeto pode pular o passo 4.

Com isso o backend da aplicação já esta rodando e todos os dados do csv estão inseridos no banco de dados.

## Frontend

### Comandos para instalar as dependencias antes de executar o código fonte.
1. Abra o prompt de comandos.
2. Acesse a pasta frontend do projeto onde você salvou o clone do projeto.
3. Execute o comando: _npm install_ isso instalará todas as dependencias que a aplicação do frontend precisa.
4. Execute o comando: _npm start_ isso iniciará a aplicação frontend.
5. Abra o seu navegador padrão acesse a URL: http://localhost:4200