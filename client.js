$(document).ready(onReady);

function onReady() {
  console.log('Here are all the available people:', people);

  let casieImg = document.createElement('img');
  casieImg.src = 'pictures/Casie.jpeg';
  $('#pictures').append(casieImg);

  let chrisImg = document.createElement('img');
  chrisImg.src = 'pictures/Chris.jpeg';
  $('#pictures').append(chrisImg);

  let daneImg = document.createElement('img');
  daneImg.src = 'pictures/Dane.jpeg';
  $('#pictures').append(daneImg);

  let devImg = document.createElement('img');
  devImg.src = 'pictures/Dev.png';
  $('#pictures').append(devImg);

  let edanImg = document.createElement('img');
  edanImg.src = 'pictures/Edan.jpeg';
  $('#pictures').append(edanImg);

  let krisImg = document.createElement('img');
  krisImg.src = 'pictures/Kris.jpeg';
  $('#pictures').append(krisImg);

  let maryImg = document.createElement('img');
  maryImg.src = 'pictures/Mary.jpeg';
  $('#pictures').append(maryImg);
}
