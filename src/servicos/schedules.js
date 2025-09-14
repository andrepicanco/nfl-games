import styled from 'styled-components'
import schedules from '../data/schedules/schedules.json'

const ComponenTabela = styled.div`
    display: flex;
    flex-direction: column;
    font-size: calc(8px + 1vmin);
    text-align: center;
    margin: 2vmin;
    tablecontainer {
        overflow-x: auto;
    }
`

const Tabela = styled.table`
    width: auto;
    height: auto;
    border: 1px solid;
    border-collapse: collapse;
    padding: 4px;
`

const TableHeader = styled.th`
    border: 1px solid;
    padding: 4px;
    background-color: #002f8dff;
    color: white;
`

const Row = styled.tr`
    padding: 4px;
    background-color: #f7f7f7ff;

    &:hover {
        background-color: #2c4b8aff;
        color: white;
    }
`

const Dados = styled.td`
    border: 1px solid;
    padding: 6px 4px;
`

// Retorna a tabela completa do time selecionado.
function returnSchedule(team) {
    
    const tabelaFinal = []
    const equipe = schedules[team]
    
    Object.keys(equipe.week).forEach(partida => {

        tabelaFinal.push(game(equipe, partida));

    })

    return tabelaFinal
    
}

/*
        AJUSTAR TABELAS - DINAMICAMENTE
*/
const tabelas = schedules.BAL

// Retorna dados de partidas, através do "match_id"
function game(tabelas, match_id) {

    const semana = `Week ${tabelas.week[match_id]}`
    const data_hora = `${tabelas.gameday[match_id]} - ${tabelas.gametime[match_id]}`
    const estadio = tabelas.stadium[match_id]
    const casa = `${tabelas.home_team[match_id]}: ${tabelas.home_score[match_id]}`
    const fora = `${tabelas.away_team[match_id]}: ${tabelas.away_score[match_id]}`

    return ( [semana, data_hora, casa, fora, estadio] )

}

// const games = returnSchedule('CLE')

const nomesCols = ['Week', 'Date/Time', 'Home', 'Away', 'Stadium']

function ScheduleTable(NflTeam) {

    // const games = returnSchedule('BAL')
    const games = returnSchedule(NflTeam)
    
    return (
        // Montando tabela de jogos. Headers, linhas e dados
        <ComponenTabela>
            <Tabela>
                <thead>
                    <Row>
                        { nomesCols.map( (col) => (
                            <TableHeader>{col}</TableHeader>
                        ))}
                    </Row>
                </thead>
                <tbody>
                    {games.map( (game, n) => (

                        <Row key={n}>
                            {
                                game.map( (col, i) => (
                                    <Dados key={i}>{col}</Dados>
                                ))
                            }
                        </Row>

                    ))};
                </tbody>
            </Tabela>
        </ComponenTabela>
    )

}

export default ScheduleTable

/*

'''
SCHEDULES.JSON
(key, val) => (match_id, value)

week: number of the week
gameday: day when the game happens
gametime: time of the game
stadium: stadium to host the game
home_team: team in home
away_team: team away
away_score: away score
home_score: home score

'''

*/