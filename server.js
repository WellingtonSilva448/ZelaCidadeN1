const express = require('express');
const { criarBanco } = require('./database');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <body>
            <h1>ZelaCidade</h1>
            <h2>Gestão de Problemas Urbanos</h2>
            <p>Endpoint que leva aos incidentes cadastrados: /incidentes</p>
        </body>
        `);
});

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
});

app.get('/incidentes', async (req, res) => {
    const db = await criarBanco()
    const listaIncidentes = await db.all(`SELECT * FROM incidentes`)
    res.json(listaIncidentes)
});

app.get('/incidentes/:id', async (req, res) => {
    const { id } = req.params
    const db = await criarBanco()
    const incidentesEspecifico = await db.all(`SELECT * FROM incidentes WHERE id = ?`, [id])
    res.json(incidentesEspecifico)

});

app.post('/incidentes', async (req, res) => {
    const { tipo_problema, localizacao, descricao, prioridade, nome_solicitante, data_registro, hora_registro } = req.body
    const db = await criarBanco()
    await db.run(`INSERT INTO incidentes(tipo_problema, localizacao, descricao, prioridade, nome_solicitante, data_registro, hora_registro) VALUES (?, ?, ?, ?, ?, ?, ?)`, [tipo_problema, localizacao, descricao, prioridade, nome_solicitante, data_registro, hora_registro])
    //resposta de confirmação para o cliente que fez a requisição
    res.send(`Incidente novo registrado ${tipo_problema} registrado na data ${data_registro} por ${nome_solicitante}`)

});

//Rota de atualização

app.put("/incidentes/:id", async (req, res) => {
    const { id } = req.params;
    const { descricao, prioridade, status_resolucao } = req.body;
    const db = await criarBanco();
    await db.run(`
        UPDATE incidentes
        SET descricao = ?, prioridade = ?, status_resolucao = ? 
        WHERE id = ?`, [descricao, prioridade, status_resolucao, id]
    )

    res.send(`O incidente de ${id} foi atualizada com sucesso`)

});

//Rota de remoção
app.delete("/incidentes/:id", async (req, res) => {
    const { id } = req.params;
    const db = await criarBanco()
    await db.run(`
        DELETE FROM incidentes WHERE id = ?
        `, [id]
    )
    res.send(`O incidentete de ${id} foi removido com sucesso`)
})