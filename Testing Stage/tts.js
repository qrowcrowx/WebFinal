// Enable/Disable text-to-speech feature
let isTextToSpeechEnabled = localStorage.getItem('textToSpeechEnabled') === 'true' || false;

// Check if the SpeechSynthesis API is supported
if ('speechSynthesis' in window) {
  const synth = window.speechSynthesis;
  let utterance = new SpeechSynthesisUtterance();

  // When text is selected, check if text-to-speech is enabled and speak the selected text
  window.addEventListener('mouseup', function () {
    const selectedText = window.getSelection().toString();
    if (isTextToSpeechEnabled && selectedText) {
      utterance.text = selectedText;
      synth.speak(utterance);
    }
  });

  // When text is unselected, stop the speech
  window.addEventListener('mousedown', function () {
    if (synth.speaking) {
      synth.cancel();
    }
  });
}

// Function to toggle the text-to-speech feature on/off
function toggleTextToSpeech() {
  isTextToSpeechEnabled = !isTextToSpeechEnabled;
  localStorage.setItem('textToSpeechEnabled', isTextToSpeechEnabled);
}

// Retrieve the saved state and update the checkbox on page load
document.addEventListener('DOMContentLoaded', function () {
  const toggleSpeechCheckbox = document.getElementById('toggleSpeech');
  toggleSpeechCheckbox.checked = isTextToSpeechEnabled;
});