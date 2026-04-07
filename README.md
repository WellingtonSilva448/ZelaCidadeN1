# 🚀 ZelaCidade
## 📌 Sobre o Projeto

A API **ZelaCidade** foi criada para registrar e gerenciar problemas urbanos, como: 

- Buracos
- Vazamentos
- Lixo
- Iluminação
- Saneamento Basico

Essa API nos permite criar registros, visualizar, atualizar e deletar ocorrência.

## 🛠️ Tencnologisa utilizadas

- Node.Js
- Express
- SQLite
- SQLite3
- Postman
- Nodemon

---

## 📦 instalação
`npm install`

---

## ▶️ Como Executar 
```bash
npm run dev
```
`http://localhost:3000
`
[Click aqui](http://localhost:3000)

---

## 🗄️ Banco de Dados
O banco de dados é criado automaticamente ao iniciar o projeto.

```
database.db
```

## 📃 Tabela

|Campo           |Descrição                |
|----------------|-------------------------|
|id              |Identificar único        |
|tipo_problema   |Tipo do Problema         |
|localizacao     |Onde Ocorreu             |
|descricao       |Detalhes do Incidente    |
|prioridade      |Baixa, Média ou Grave    |
|nome_solicitante|Quem registrou           |
|data_registro   |Data do registro         |
|hora_registro   |Hora do registro         |
|status_resolucao|Status (Padrão: Pendente)|

---

## 🔗 Endpoints

### Rota Inicial
```
http GET/
```
Retorna uma página HTML simples com informações da API

---

### Rota para listar todos os incidentes
``` 
http GET/incidentes
```
Retorna todos os registros do banco de dados

---
### Rota para buscar um incidentes específico (ID)
```
http GET/incidentes/:id
```
Ex.: /incidientes/1
Retorna uma corrência específica.

---
### Rota para criar um novo incidente
```http
POST /incidentes
```
### Body (JSON)
```json
{
    "tipo_problema": "Queda de árvore",
    "localicacao": "Praça da liberdade, 210",
    "descricao": "Árvore de grande porte caiu sobre a fiação",
    "propriedade": "Alta",
    "nome_solicitante": "Beatriz Lima",
    "data_registro": "23/03/2026",
    "hora_registro": "15:30"

}

```
## Rota para atualizar um incidentes
```json
PUT /incidentes/:id 

```
### Body (JSON)
```json
{
    "descricao": "Árvore retirada com sucesso",
    "propriedade": "Alta",
    "status_resolucao": "Resolvido"
}

```
### Rota para deletar um incidente
```http
DELETE /incidentes/:id
```

## 🔐 Segurança
A API utiliza `?` nas queries SQL:

```sql
WHERE id = ? 
```
Isso evita o SQL Injection

---
## 📚 Conceitos / Oque foi utilizado

- CRUD (Create, Read Update e Delete)
- Rotas com Express

---
## 🎓 Projeto Educacional
Este projeto foi desenvolvido para funs de aprendizado em back-and com Node.js para fins educativo, criado pelo aluno Wellingto Silva


<!-- ## Esses emojis é um padrão em praticamente TUDO REDME:

## 🚀 Nome da API / Projeto
## 📌 Sobre o Projeto
## 🎯 Objetivo
## 🛠️ Tecnologias
## 📦 Instalação
## ▶️ Como Executar
## ⚙️ Configurações
## 🗄️ Banco de Dados
## 🔗 Endpoints
## 🔐 Segurança
## 📚 Conceitos
## 💡 Dicas / Melhorias
## 🧑‍💻 Autor
---
## 📖 Descrição
## 🔧 Ferramentas
## 🖥️ Ambiente
## 📊 Dados
## 📃 Tabela
## 📡 Requisições
## 📥 Entrada de dados
## 📥Saida de dados
## 🚫 Bloqueios / Proteção
## 🧠 Aprendizado
## 🎓 Educacional
## ⚠️ Atenção
## ❗ importante
## 💛 Contribuição
## 📰 Licença >