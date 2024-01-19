const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}
const politelyAccept = (veg) => {
      console.log('Ok, I guess I will eat some ' + veg + '.');
}

// Decline all ingredients

const declineEverything = arr => {
  arr.forEach(politelyDecline);
}
declineEverything(veggies);

// Accept all ingredients

const acceptEverything = arr => {
  arr.forEach(politelyAccept);
}
acceptEverything(veggies);