import styled from 'styled-components'
import schedules from '../data/schedules/schedules.json'

const Colunas = styled.th`
`

const Linhas = styled.tr`
`

function returnSchedule(team) {
    
    const tabelaFinal = []
    const equipe = schedules[team]
    
    Object.keys(equipe.week).forEach(partida => {

        tabelaFinal.push(game(equipe, partida));

    })

    return tabelaFinal
    
}

const tabelas = schedules.BAL

function game(tabelas, match_id) {

    const semana = `Week ${tabelas.week[match_id]}`
    const data_hora = `${tabelas.gameday[match_id]} - ${tabelas.gametime[match_id]}`
    const estadio = tabelas.stadium[match_id]
    const casa = `${tabelas.home_team[match_id]}: ${tabelas.home_score[match_id]}`
    const fora = `${tabelas.away_team[match_id]}: ${tabelas.away_score[match_id]}`

    return (
        // [semana, data_hora, estadio, casa, fora]
        `${semana} - ${data_hora} @ ${estadio}` +
        `  ${casa} || ${fora}`
    )

}

const games = returnSchedule('CLE')

const nomesCols = ['Semana', 'Data', 'Casa', 'Fora', 'Estádio']

// function games() {

//     return (
//         // <Colunas>
//         //     nomesCols.map(col =>)
//         // </Colunas>
//         // <Linhas></Linhas>
//     )

// }

export default games

// export default JSON.stringify(games)

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