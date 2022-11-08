// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi 
// contengono solo nomi e falli subiti e stampiamo tutto in console.

let soccerTeams = [
    {
        name: 'Udinese',
        score: 0,
        fouls: 0
    },
    {
        name: 'Catania',
        score: 0,
        fouls: 0
    },
    {
        name: 'Sassuolo',
        score: 0,
        fouls: 0
    }
];



let soccerTeams2 = soccerTeams.map(({name, score, fouls}) => {

    score = cpuNumberGenerator(1,20)
    fouls = cpuNumberGenerator(1,20)
    return {name,fouls}
})


console.log(soccerTeams2)

function cpuNumberGenerator(min,max){

    return parseInt(Math.floor(Math.random() * (max - min + 1) + min));
};

