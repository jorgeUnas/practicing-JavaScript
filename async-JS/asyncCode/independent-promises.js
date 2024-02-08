// Lets resolve some ingredients 

let cookBeans = () => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('beans');
   }, 5000);
 });
}

let steamBroccoli = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('broccoli');
   }, 5000);
 });
}

let cookRice = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('rice');
   }, 5000);
 });
}

let bakeChicken = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('chicken');
   }, 5000);
 });
}

// Now serve the dinner without innecessary delays

async function serveDinner(){
  let vegetablePromise = steamBroccoli();
  let starchPromise = cookRice();
  let proteinPromise = bakeChicken();
  let sidePromise = cookBeans();
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}

serveDinner();  // Every ingredient was cooked independently and served at the same time


// Now use the Promise.all()

async function serveDinnerAgain(){
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`)
}

serveDinnerAgain();