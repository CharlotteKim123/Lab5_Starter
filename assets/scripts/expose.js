// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectHorn = document.getElementById("horn-select");
  const button = document.querySelector('button');
  const hornSound = document.querySelector('audio');
  const vSlider = document.getElementById('volume');
  const volume = document.querySelector('#volume-controls img');
  const horn = document.querySelector('#expose img');
  const jsConfetti = new JSConfetti();

  selectHorn.addEventListener('change', () => {
    const selected = selectHorn.value;
    if (selected === 'select') {
      horn.src = 'assets/images/no-image.png';
      horn.alt = 'No image selected';
      hornSound.src = '';
    } 
    else {
      horn.src = `assets/images/${selected}.svg`;
      horn.alt = selected.replace('-', ' ');
      hornSound.src = `assets/audio/${selected}.mp3`;
    }
  });

  vSlider.addEventListener('input', () => {
    const value = parseInt(vSlider.value);
    hornSound.volume = value / 100;

    if (value === 0) {
      volume.src = 'assets/icons/volume-level-0.svg';
      volume.alt = 'Volume level 0';
    } 
    else if (value < 33) {
      volume.src = 'assets/icons/volume-level-1.svg';
      volume.alt = 'Volume level 1';
    } 
    else if (value < 67) {
      volume.src = 'assets/icons/volume-level-2.svg';
      volume.alt = 'Volume level 2';
    } 
    else {
      volume.src = 'assets/icons/volume-level-3.svg';
      volume.alt = 'Volume level 3';
    }
  });

  button.addEventListener('click', () => {
    if (hornSound.src) {
      hornSound.play();
      if (selectHorn.value === 'party-horn') {
        jsConfetti.addConfetti();
      }
    }
  });

}





