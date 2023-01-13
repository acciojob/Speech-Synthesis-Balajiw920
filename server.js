 var textInput = document.getElementById("text-input");
  var voiceSelect = document.getElementById("voice-select");
  var startButton = document.getElementById("start-button");
  var stopButton = document.getElementById("stop-button");

  // Check if the browser supports the Web Speech API
  if ('speechSynthesis' in window) {
    // Get the available voices
    var voices = speechSynthesis.getVoices();

    // Add the voices to the voice select
    for (var i = 0; i < voices.length; i++) {
      var option = document.createElement("option");
      option.value = voices[i].name;
      option.innerHTML = voices[i].name;
      voiceSelect.appendChild(option);
    }
  } else {
    // If the browser doesn't support the Web Speech API, display an error message
    textInput.innerHTML = "Your browser does not support the Web Speech API.";
  }

  // Handle the start button click
  startButton.addEventListener("click", function() {
    // Create a new SpeechSynthesisUtterance for the text input
    var utterance = new SpeechSynthesisUtterance(textInput.value);

    // Set the voice to the selected voice
    utterance.voice = voices.filter(function(voice) { return voice.name == voiceSelect.value; })[0];

    // Speak the utterance
    speechSynthesis.speak(utterance);
  });

  // Handle the stop button click
  stopButton.addEventListener("click", function() {
    // Stop the speech synthesis
    speechSynthesis.cancel();
  });
