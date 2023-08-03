var buttons = document.querySelectorAll('.tecla');
var songs = document.querySelectorAll('audio');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){songs[i].play()});

  };