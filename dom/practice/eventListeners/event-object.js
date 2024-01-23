let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) {
  event.target.style.display = 'none'; // event.target is the element the event is related
  text.innerHTML = event.timeStamp; 
}

share.addEventListener('click', sharePhoto);