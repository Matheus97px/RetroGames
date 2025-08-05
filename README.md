# 🎮 Backend de uma Loja de Jogos Retrô - RetroGames – Projeto Generation

Este é um projeto de backend de uma loja de jogos desenvolvido como parte do bootcamp **Tech Fullstack JavaScript** da **Generation Brasil**. O sistema permite o cadastro e a gestão de jogos retrô, com controle de fabricantes, plataformas, gêneros e estoque.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **TypeORM**
- **Insomnia** (para testes de API)

---

## 📁 Estrutura de Entidades

- `Jogo` – Entidade principal com sinopse, preço, estoque e relacionamentos
- `Fabricante` – Empresa responsável pela fabricação do jogo ou console (ou os 2 )
- `Plataforma` – Consoles ou sistemas nos quais o jogo roda
- `Gênero` – Categoria (ex: Aventura, RPG, Luta, etc.)

---

## 🔗 Relacionamentos

- `Jogo` tem:
  - um `Fabricante`
  - um `Gênero`
  - uma `Plataforma`
- `Plataforma` pertence a um `Fabricante`

---

## 🔄 Funcionalidades

- ✅ Cadastrar, listar, buscar, atualizar e deletar jogos
- ✅ Controlar estoque e valores
- ✅ Registrar fabricantes, gêneros e plataformas
- ✅ Relacionar jogo com gênero, fabricante e plataforma

---
