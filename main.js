const buttons = document.querySelectorAll('.tecla');
const songs = document.querySelectorAll('audio');

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function(){songs[i].play()});

    buttons[i].onkeydown = function (evento){
      if (evento.code === 'Space' || evento.code === 'Enter'){
        buttons[i].classList.add('ativa');
      }
    }

    buttons[i].onkeyup = function (){
      buttons[i].classList.remove('ativa');

    }

  };