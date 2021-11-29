function gameObject(){ 
    return object = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
          "Alan Anderson":  { 
              number : 0,
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
                number : 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
                },
  
  
         "Bismak Biyombo" :{
                number : 0,
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

const players = Object.assign({},homeTeam, awayTeam)
console.log(players)



function playerType(name) {
    if (gameObject()["home"].players[name]) {return "home";}
    else if (gameObject()["away"].players[name]) {return "away";};
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


function ifHome(team) {
    if (gameObject()["home"].teamName ===team ) return "home";
    else 
       if (gameObject()["away"].teamName ===team ) return "away";
    
}
function playerNumbers(team) {
    const numbers = []
    const playersTeam = game[ifHome(team)].players
    
    for (let name in playersTeam) {
        numbers.push(playersTeam[name].number)
    }
    return numbers;
    
}


function playerStats(name){
    playerType(name)
    return gameObject()[playerType(name)].players[name];
}



function bigShoeRebounds() {
    const sizeArray = []
    for (let type in gameObject() )
        for (let name in gameObject()[type].players) {
            console.log(name)
            console.log("size=",gameObject()[type].players[name].shoe)
            sizeArray.push(gameObject()[type].players[name].shoe)
        
        };
    const maxSize = Math.max(...sizeArray);
    debugger;
    for (let type in gameObject() )
        for (let name in gameObject()[type].players) {
            if (gameObject()[type].players[name].shoe === maxSize) {
                let reb = gameObject()[type].players[name].rebounds
                debugger
                return reb;
            }
        }
}

function mostPointsScored () {
    const pointsArray = []
    for (let type in gameObject() )
        for (let name in gameObject()[type].players) {
            console.log(name)
            console.log("size=",gameObject()[type].players[name].points)
            pointsArray.push(gameObject()[type].players[name].points)
        
        };
    const maxPoints = Math.max(...pointsArray);
    console.log(pointsArray)
    for (let type in gameObject() )
        for (let name in gameObject()[type].players) {
            if (gameObject()[type].players[name].points === maxPoints) {
                return name;
            }
        }
}

function sum(player, accumulator) {
    return player.points+accumulator;
}


function winningTeam (){
    const teamScore = []
    for (let type in gameObject() ) {
        let score = 0
        for (let name in gameObject()[type].players) {
            score = score + gameObject()[type].players[name].points  
        }
        teamScore.push({team: [gameObject()[type].teamName], score :[score]});  
    }
    if (teamScore[0].score>teamScore[1].score) {
        return console.log(teamScore[0].team) }
        else {
         return console.log(teamScore[1].team)
    }   
}



//console.log(winningTeam())

// console.log(playerStats("Alan Anderson"))


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