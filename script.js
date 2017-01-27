window.addEventListener('keydown', function (e){
  console.log(event.keyCode);
  const audio = document.querySelector('audio[data-key="${e.keyCode}"]');
  console.log(audio);
});
