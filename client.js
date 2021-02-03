$(document).ready(onReady);

function onReady() {
  console.log('Here are all the available people:', people);

  // append to the DOM the peoples images
  for (let i = 0; i < people.length; i++) {
    $('body').append(`
    <div>
    <img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}">
    </div>
    `);
  }
}
