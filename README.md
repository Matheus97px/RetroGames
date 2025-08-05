# 🎮 E-Commerce de Jogos Retrô – Projeto Generation

Este é um projeto de e-commerce de jogos desenvolvido como parte do bootcamp **Tech Fullstack JavaScript** da **Generation Brasil**. O sistema permite o cadastro e a gestão de jogos retrô, com controle de fabricantes, plataformas, gêneros e estoque.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **TypeORM**
- **PostgreSQL**
- **Class Validator**
- **Insomnia** (para testes de API)

---

## 📁 Estrutura de Entidades

- `Jogo` – Entidade principal com sinopse, preço, estoque e relacionamentos
- `Fabricante` – Empresa responsável pela fabricação do jogo
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
- ✅ Realizar venda e compra de unidades (estoque)
- ✅ Relacionar jogo com gênero, fabricante e plataforma

---

## 📦 Instalação Local

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
