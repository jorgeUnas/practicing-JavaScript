class Media{
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this.ratings;
  }
  set isCheckedOut(bol){
    this._isCheckedOut = bol;
  }
  toggleCheckOutStatus(){
    if(this._isCheckedOut == false){
      this._isCheckedOut = true;
    }else if(this._isCheckedOut == true){
      this._isCheckedOut = false;
    }
  }
  getAverageRating(){
    let sum = this._ratings.reduce((sum, current) => sum + current, 0);
    return sum/this._ratings.length;
  }
  addRating(newRating){
    if(newRating < 1 || newRating > 5){
      console.log('put a rating between 1 and 5')
    }else{
      this._ratings.push(newRating);
    }
  }
}
// subclass Book
class Book extends Media{
  constructor(title, author, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
}
// subclass Movie
class Movie extends Media{
  constructor(title, director, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
