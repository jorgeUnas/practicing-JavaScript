const team = {
  _players: [
    {firsName: 'jorge', lastName: 'unas', age: 37},
    {firsName: 'lopez', lastName: 'fulano', age: 2},
    {firsName: 'juan', lastName: 'gato', age: 8}
  ],
  _games: [
    {opponent: 'sur', teamPoints: 3, opponentPoints: 5},
    {opponent: 'norte', teamPoints: 6, opponentPoints: 9},
    {opponent: 'este', teamPoints: 8, opponentPoints: 2}
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge){
    let obj = {
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge
    };
    this._players.push(obj);
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players)