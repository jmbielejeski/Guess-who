## TODO

- [x] update github profile with picture
- [x] On DOM loan append divs for each person in the data.js file to the DOM with jQuery
  - [x] each containing an image from each GitHub profile - see provided data.js file

## Start the game

- [x] prompt the player to pick one of the people displaying a randomly selected name

## Game logic

- [x] if the play clicks on the correct person
  - [x] give them a success message
  - [x] prompt the player to pick another person randomly and let them keep playing
- [x] if they pick the wrong person
  - [x] give them an error message
  - [x] allow them to try again

## STRETCH

- [] When the player clicks on the correct person

  - [] add a visual cue that indicates that they picked the correct person.
  - [] Then change it back after 2 seconds and resume the game
    You'll need to use the [built in `setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout) function for the timing. This function waits a given amount of time and then calls a function you specify.

- [] add some jQuery effects, animations and styling [See the Docs!](https://api.jquery.com/category/effects/)
- [] randomize the array of images before displaying them on the page
