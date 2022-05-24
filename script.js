const DOM = {
  contMex: document.querySelector('#messages_container'),
  botMex: document.querySelector('.bot-messages'),
  userMex: document.querySelector('.user-messages'),
  mic: document.querySelector('.mic-content'),
}

DOM.userMex.style.display = 'none';
DOM.mic.style.display = 'none';

function startMessage(){
  const text_speak = new SpeechSynthesisUtterance();
  text_speak.lang = 'it-IT';
  voices = speechSynthesis.getVoices();
  console.log(voices);
  DOM.botMex.innerHTML = 'INIT';
}

function starTalk(){
  DOM.botMex.style.display = 'none';
  DOM.userMex.style.display = 'block';
  DOM.mic.style.display = 'block';
  const text_speak = new SpeechSynthesisUtterance();
  text_speak.lang = 'it-IT';
  text_speak.rate = 1;
  text_speak.pitch = '1';
  text_speak.voice = speechSynthesis.getVoices()[11];

  var day = new Date();
  var hr = day.getHours();

  if(hr >= 0 && hr < 12) {
    text_speak.text = 'buongiorno capo';
    window.speechSynthesis.speak(text_speak);
    jQuery(DOM.contMex).append("<p class='bot-messages'>Buongiorno capo</p>");
  }
  else if(hr >= 12 && hr < 13) {
    text_speak.text = "salve capo";
    window.speechSynthesis.speak(text_speak);
    jQuery(DOM.contMex).append("<p class='bot-messages'>Salve capo</p>");
  }
  else if(hr >= 13 && hr < 19) {
    text_speak.text = 'buon pomeriggio capo';
    window.speechSynthesis.speak(text_speak);
    jQuery(DOM.contMex).append("<p class='bot-messages'>Buon pomeriggio capo</p>");
  }
  else if(hr >= 19 && hr < 22) {
    text_speak.text = 'buona sera capo';
    window.speechSynthesis.speak(text_speak);
    jQuery(DOM.contMex).append("<p class='bot-messages'>Buona sera capo</p>");
  }
  else if(hr >= 22) {
    text_speak.text = 'buona notte capo';
    window.speechSynthesis.speak(text_speak);
    jQuery(DOM.contMex).append("<p class='bot-messages'>Buona notte capo</p>");
  }
}

window.addEventListener('click',startMessage)
DOM.botMex.addEventListener('click',starTalk)

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    DOM.userMex.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

DOM.mic.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
  if(!navigator.geolocation) {
    return false;
  } else {
    navigator.geolocation.getCurrentPosition(success);
  }

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
  }
  const speech = new SpeechSynthesisUtterance();
  speech.lang = 'it-IT';
  speech.rate = 1;
  speech.pitch = '1';
  speech.voice = speechSynthesis.getVoices()[11];

    speech.text = "Non ti sento, Riprova";

    //Personal

    if(message.includes('ciao')) {
        const finalText = "ti ascolto capo";
        speech.text = finalText;
    }

    else if(message.includes('come va')|| message.includes('come stai')) {
        const finalText = "tutto bene capo";
        speech.text = finalText;
    }

    else if(message.includes('tuo nome')) {
        const finalText = "Sono Luna";
        speech.text = finalText;
    }

    else if(message.includes('anni hai')) {
        const finalText = "io non ho. sono la tua assistente vocale";
        speech.text = finalText;
    }

    else if(message.includes('sono angela bos')|| message.includes('23-25')) {
        const finalText = "Ti conosco, il mio capo mi parla sempre di te. Dice che sei magnifica.";
        speech.text = finalText;
    }

    //util functions

    else if(message.includes('google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Lo apro";
        speech.text = finalText;
    }

    else if(message.includes('instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Lo apro";
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "Apro" + message;
        speech.text = finalText;
    }

    else if(message.includes('meteo')) {
      window.open(`https://www.google.com/search?q=meteo`, "_blank");
        const finalText = 'Lo cerco';
        speech.text = finalText;
    }

    else if(message.includes('ora')) {
        const timeHour = new Date().toLocaleString(undefined, {hour: "numeric"})
        const timeMinute = new Date().toLocaleString(undefined, {minute: "numeric"})
        const finalText = 'sono le ' + timeHour + ' e '+ timeMinute + ' minuti';
        speech.text = finalText;
    }

    else if(message.includes('data')) {
        const date = new Date().toLocaleString(undefined, {month: "long", day: "numeric"})
        const year = new Date().toLocaleString(undefined, {year: "numeric"})
        const finalText = 'oggi, il ' + date + " dell'anno " + year;
        speech.text = finalText;
    }
    else if(message.includes('mia posizione')) {
      const finalText = 'sono a ' + latitude + ' gradi di latitudine e '+ longitude + ' di longitudine';
      speech.text = finalText;
    }


    else {
        const finalText = "non so aiutarti perdonami";
        speech.text = finalText;
    }

    window.speechSynthesis.speak(speech);

    jQuery(DOM.contMex).append("<p class='bot-messages'>"+ speech.text +"</p>");
}
