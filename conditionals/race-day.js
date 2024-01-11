let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = true;
let runnerAge = 19;

if(runnerAge > 18 && earlyRegistration){
  raceNumber += 1000; 
  console.log(`Runner number ${raceNumber} your race is at 9:30 am`);
}else if(runnerAge > 18 && !earlyRegistration){
  console.log(`Runner number ${raceNumber} your race is at 11:00 am`);
}else if(runnerAge < 18){
  console.log(`Runner number ${raceNumber} your race is at 12:30 am`);
}else if(runnerAge == 18){
  console.log('please, see registration desk');
}