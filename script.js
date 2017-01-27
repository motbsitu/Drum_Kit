function playSound(e){
  // console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);

  // console.log(audio);
  if(!audio) return;  //stop function if wrong key hit
  audio.currentTime = 0; //rewind to start
  audio.play();
  // console.log('key', key);
  key.classList.add('playing');
};

function removeTransition(e){
  if(e.propertyName !== 'transform') return;
  // console.log(e.propertyName);
  this.classList.remove('playing')
};

const keys = document.querySelectorAll('.key');
// console.log('keys', keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
