const keys = document.querySelectorAll('.key');
  
  function playSound(e){
    // console.log(e.keyCode);
    // 1. play audio with corresponding data-key
      // [] =attribute selector
      // don't forget to add quotes around es6 templating string
    // Check for corresponding audio tag with keyCode
    console.log("e= ",e);
    console.log("keycode", e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      
    // console.log(audio); 
    if(!audio) return; //Stops code running altogether
    audio.currentTime = 0;//rewinds to the start
    audio.play();
    
    // 2. add class to divs
    // console.log(key);
    key.classList.add ('playing');
  }

  function removeTransition(e){
    // console.log("removeTransition e: ", e);
    if (e.propertyName !== 'transform') return; //skip if it's not transform
    // console.log(e.propertyName)
    this.classList.remove('playing');

  }
 
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener("keydown", playSound);