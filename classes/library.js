class Media{
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [4, 6, 14];
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
    let sum = this._ratings.reduce((sum, current) => sum + current);
    return sum/this._ratings.length;
  }
  addRating(newRating){
    this._ratings.push(newRating);
  }
}

