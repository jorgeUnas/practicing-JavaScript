function getSleepHours(day){
  switch(day){
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 8;
      break;
    case 'Wednesday':
      return 8;
      break;
    case 'Thursday':
      return 8;
      break;
    case 'Friday':
      return 8;
      break;
    case 'Saturday':
      return 8;
      break;
    case 'Sunday':
      return 8;
      break;
  }
}
//console.log(getSleepHours('Monday'));
function getActualSleepHours(){
  let sleepHours = getSleepHours('Monday') + getSleepHours('Tuesday')+getSleepHours('Wednesday')+getSleepHours('Thursday')+getSleepHours('Friday')+getSleepHours('Saturday')+getSleepHours('Sunday');
  return sleepHours;
}
function getIdealSleepHours(hours = 8){
  let idealHours = hours;
  return idealHours * 7;
}

//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());
function calculateSleepDebt(){
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if(actualSleepHours == idealSleepHours){
    console.log(`You're sleeping ${actualSleepHours} hours per week. Congrats! Your're sleeping the perfect number of hours.`);
  }else if(actualSleepHours > idealSleepHours){
    console.log(`You're sleeping ${actualSleepHours -  idealSleepHours} hours more per week than needed.`);
  }else{
    console.log(`You're sleeping ${idealSleepHours - actualSleepHours} hours less per week than needed.You should get more rest.`);
  };
}

calculateSleepDebt();