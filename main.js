const buttons = document.querySelectorAll('.tecla');
const songs = document.querySelectorAll('audio');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){songs[i].play()});

  };