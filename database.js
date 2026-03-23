const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

const criarBanco = async () => {
    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });

    await db.exec(`
    CREATE TABLE IF NOT EXISTS incidentes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tipo_problema TEXT,                         --O que aconteceu (Buraco, lux, luz, água e etc...)
        localizacao TEXT,                           --Onde aconteceu (Rua, Bairro)
        descricao TEXT,                             --Detalhes da reclamação
        prioridade TEXT,                            --Baixa, média ou alta
        nome_solicitante TEXT,                      --Quem está avisando
        data_registro TEXT,                         --Data em formado (Ex.: 16/03 ou 16.03)
        hora_registro TEXT,                         --Hora que foi regristrado
        status_resolucao TEXT DEFAULT 'pendentes'   
    )
    `);

    console.log("Banco de dados configurado: A tabela de registros urbanos está pronta!!!");

    //==================================================//
    //Insert - C do CRUD - CREAT
    //==================================================//

    const checagem = await db.get(`SELECT COUNT (*) AS total FROM incidentes`);

    if (checagem.total === 0) {
        await db.exec(`
    INSERT INTO incidentes (tipo_problema, localizacao, descricao, prioridade, nome_solicitante, data_registro, hora_registro) VALUES
    ('Iluminação', 'Rua Candido Mendes, 85, Bairro de Mesquita', 'Transformador do poste queimado desde sexta-feira', 'Grave', 'Raimunda Silva', '16/03/2026', '03:34am'),
    ('Falta de agua', 'Rua General Rodrigo Pimentel, Bairro de Belford Roxo', 'Tubulação na rua estourada há 2 dias', 'Grave', 'Marcos Silveirsa', '14/03/2026', '14:45pm'),
    ('Falta de saneamento', 'Rua São francisco, Bairro Vila da Penha', 'Carro da coleta de lixo nao passa há dias', 'Media', 'Andressa Freitas', '16/03/2026', '12:30pm')
    `);
    } else {
        console.log(`Banco pronto com ${checagem.total} de incidades`);
    }



    const todosOsIncidentes = await db.all('SELECT * FROM incidentes');
    console.table(todosOsIncidentes);

    //Exemplo de SELECT específico
    const chamadoAndressa = await db.all(`SELECT * FROM incidentes WHERE nome_solicitante = "Andressa Freitas" `,

    );
    console.table(chamadoAndressa);

    //UPDATE
    await db.run(`
        UPDATE incidentes
        SET status_resolucao = "Resolvido"
        WHERE tipo_problema = "Falta de saneamento"
        `);

    console.log("TProblema do saneamento resolvido");

    //DELETE
    await db.run(`DELETE from incidentes WHERE id = 3`);
    console.log("Registro do ID 2 removido");

    //Relatorio final!
    console.log("Relatorio Atualizado (FINAL)");
    const resultadoFinal = await db.all(`SELECT * FROM incidentes`);
    console.table(resultadoFinal);

    return db; //Retorna o banco(Entregando a chave do banco pra alguem)

};

module.exports = { criarBanco } //Cria uma ponte que permite compartilhar funções entre os arquivos
