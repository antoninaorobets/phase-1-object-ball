function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },


                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },

            }
        }
    }
}

const homeTeam = gameObject()["home"].players;
const awayTeam = gameObject()["away"].players;
const game = gameObject()
const players = Object.assign({}, homeTeam, awayTeam)
console.log(players)
const homeTeamData = Object.values(homeTeam)
const awayTeamData = Object.values(awayTeam)
const playersNames = Object.keys(players)
const playersData = Object.values(players)





function playerType(name) {
    if (gameObject()["home"].players[name]) { return "home"; }
    else if (gameObject()["away"].players[name]) { return "away"; };
}

function numPointsScored(name) {
    const type = playerType(name);
    return gameObject()[type].players[name].points;
}


function shoeSize(name) {
    return gameObject()[playerType(name)].players[name].shoe;
}


function teamColors(name) {
    return gameObject()[playerType(name)].colors;

}

function teamNames() {
    return Object.keys(players);
}


function playerNumbers(teamName) {
    const playersTeam = Object.values(game)
        .find((team) => team.teamName === teamName)
        .players

    return Object.values(playersTeam)
        .map((playerData) => playerData.number)
}


function playerStats(name) {
    playerType(name)
    return gameObject()[playerType(name)].players[name];
}



function bigShoeRebounds() {
    const sizeArray = []
    for (let type in gameObject())
        for (let name in gameObject()[type].players) {
            console.log(name)
            console.log("size=", gameObject()[type].players[name].shoe)
            sizeArray.push(gameObject()[type].players[name].shoe)
        };
    const maxSize = Math.max(...sizeArray);
    debugger;
    for (let type in gameObject())
        for (let name in gameObject()[type].players) {
            if (gameObject()[type].players[name].shoe === maxSize) {
                let reb = gameObject()[type].players[name].rebounds
                debugger
                return reb;
            }
        }
}

function maxPoints(max, arr) {
    return Math.max(max, arr[1].points)
}

function getElementWithMaxPoints(element) {
    return (element.points === maxPoint);
}
function mostPointsScored() {
    return Object.entries(players)
        .reduce((player1, player2) => {
            if (player1[1].points > player2[1].points) {
                return player1;
            } else {
                return player2;
            }
        })[0];
}

function sum(player, accumulator) {
    return player.points + accumulator;
}

function sumData(sum, element) {
    return sum + element.points;
}

function winningTeam() {
    const sumTeam1 = homeTeamData.reduce(sumData, 0)
    const sumTeam2 = awayTeamData.reduce(sumData, 0)
    switch (true) {
        case (sumTeam1 > sumTeam2): return game.home.teamName;
        case (sumTeam1 < sumTeam2): return game.away.teamName;
        default: return console.log("equal")
    }
}

function compareTwoNumbers(max, name) {
    if (name.length > max) return name.length
    else return max;
}

function playerWithLongestName() {
    return playersNames.reduce(compareTwoNumbers, 0)
}


function maxSteal(max, element) {
    if (element.steals > max) {
        return element.steals
    }
    else {
        return max
    }


}
function doesLongNameStealATon() {
    const biggestSteal = playersData.reduce(maxSteal, 0);
    const longestName = playerWithLongestName()
    return (players[longestName].steals === biggestSteal)
}


//console.log(doesLongNameStealATon())

//console.log(playerWithLongestName())

//console.log(winningTeam())

// console.log(playerStats("Alan Anderson"))
console.log(mostPointsScored())

console.log( playerNumbers ( "Brooklyn Nets"))
 console.log( playerNumbers ( "Charlotte Hornets"))

//console.log(teamNames())


// console.log(numPointsScored("Alan Anderson"))
// console.log(numPointsScored("Bismak Biyombo"))
// debugger;

// console.log("shoeSize")
// console.log(shoeSize("Alan Anderson"))
// console.log(shoeSize("Bismak Biyombo"))
// debugger;

// console.log("colors")
// console.log(teamColors("Alan Anderson"))
// console.log(teamColors("Bismak Biyombo"))
debugger;