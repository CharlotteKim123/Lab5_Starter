// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const speechSynth = window.speechSynthesis;
  const face = document.querySelector('#explore img');
  const textToSpeak = document.getElementById('text-to-speak');
  const selectVoice = document.getElementById('voice-select');
  const button = document.querySelector('button');

  let voices = [];

  function populate() {
    voices = speechSynth.getVoices();
    
    selectVoice.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, i) => {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
      selectVoice.appendChild(option);
    });
  }

  populate();
  if (speechSynthesis.onvoiceschanged !== 'undefined') {
    speechSynthesis.onvoiceschanged = populate;
  }

  button.addEventListener('click', () => {

    if (textToSpeak.value === '' || selectVoice.value === 'select') return;

    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    utterance.voice = voices[selectVoice.value];

    utterance.onstart = () => {
      face.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      face.src = 'assets/images/smiling.png';
    };

    speechSynth.speak(utterance);
  });
}




