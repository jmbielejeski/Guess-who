function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

let randomPerson = randomNumber(0, people.length);

function appendName() {
  $('h1').append(`
    ${people[randomPerson].name}
  `);
}

console.log(randomPerson);

$(document).ready(onReady);

function onReady() {
  console.log('Here are all the available people:', people);

  // append to the DOM the peoples images
  for (let i = 0; i < people.length; i++) {
    $('body').append(`
    <div class="person">
    <img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}">
    </div>
    `);
  }
  appendName();
}

//function to check if they clicked on right person.
//how to get right person
//generate a random name to display
