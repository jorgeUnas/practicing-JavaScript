/*You are a college student and you want to stream a movie over one of the campus’s Wi-Fi networks. 
Based on the number of users, some networks won’t have the data to stream a movie.

The properties of the Network class are:

data: Total units of data supplied by the network
users: Total numbers of users currently on the network
Each user on average deducts 5 units from the network’s total data. To watch a movie you must connect to a network that has at least 10 remaining units of data.

Add a method movieTime() to the Network class that returns true if there is enough data available to watch a movie, false if there isn’t.
*/


class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }
  // Insert code below
  movieTime(){
    const userData = this.users*5;
    if(this.data - userData >= 10){
      return true;
    }else{
      return false;
    }
  }
}

/* 2. A video game consists of two players floating using 100 helium balloons. 
The players shoot pellets at each other’s balloons and after 10 minutes the player with the most balloons left wins.

Write a game function balloonAttack that takes two Player instances, calculates the balloons left for each player after 10 minutes
(using the hitsPerMinute property) and returns the name of the winner. If the result is a tie, return the string 'Tie'.

You can test your balloonAttack function by creating two instances of the Player class to use as arguments for your function like below:
*/



class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
  }
}

// Write function below

const balloonAttack = (player1, player2) => {
  for (let i = 1; i <= 10; i++){
    if(player2.balloonCount <= 0 || player1.balloonCount <= 0){
      break;
    }
    player2.balloonCount -= player1.hitsPerMinute
    player1.balloonCount -= player2.hitsPerMinute
    player1.status();
    player2.status();
  }
  if (player1.balloonCount > player2.balloonCount) {
    return player1.name;
  }else if (player2.balloonCount > player1.balloonCount)
    return player2.name

  return 'Tie'
}

const p1 = new Player('p1',11);
const p2 = new Player('p2', 12);

console.log(balloonAttack(p1, p2));


