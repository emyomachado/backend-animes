# API REST de Animes – Node.js

## 1. Descrição da Atividade

Este projeto foi desenvolvido como parte do **Desafio de Backend (Node.js + Webservices)**.  
Consiste em uma **API REST** que permite realizar consultas sobre **animes**, retornando dados em formato **JSON**, conforme os requisitos propostos.

A aplicação disponibiliza **múltiplos tipos de consulta**, como:
- Listagem geral de animes
- Consulta de anime por ID
- Consulta de animes por gênero
- Consulta de animes por nota mínima

## 2. Requisitos Técnicos Atendidos

- **Ambiente:** Node.js  
- **Framework:** Express.js  
- **Padrão:** RESTful API  
- **Formato das respostas:** JSON  
- **Banco de Dados:** SQLite (SQL)

## 3. Estrutura de Dados

O projeto utiliza um banco de dados **SQLite**, contendo a tabela `animes` com os seguintes campos:

- `id` – Identificador único do anime
- `titulo` – Nome do anime
- `genero` – Gênero(s) do anime
- `episodios` – Quantidade de episódios
- `nota` – Nota média
- `ano` – Ano de lançamento

## 4. Endpoints Disponíveis (Consultas)

Titulo, Gênero, Quantidade de episodios, Nota, Ano de lançamento.
Frieren: Beyond Journeys End', 'Fantasia, Aventura, Drama', 28, 9.3, 2023;
Lovely Complex', 'Romance, Shoujo', 24, 8.0, 2007;
Attack on Titan', 'Ação, Fantasia, Aventura', 87, 9.0, 2013;
No Game No Life', 'Isekai, Estratégia, Fantasia', 12, 8.0, 2014;
One Piece', 'Aventura, Ação, Fantasia', 1100, 9.1, 1999;
Demon Slayer', 'Ação, Fantasia', 55, 8.8, 2019;
Code Geass', 'Mecha, Suspense, Militar', 50, 8.7, 2006;
Fairy Tail', 'Ação, Aventura, Fantasia', 328, 7.5, 2009;
Kuroko no Basket', 'Esporte, Basquete', 75, 8.0, 2012;
Your Name', 'Romance, Drama', 1, 8.9, 2016.