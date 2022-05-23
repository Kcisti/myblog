const btn = document.querySelector('.micContent');
const content = document.querySelector('.message');
document.getElementById('sirio').play();

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);
    text_speak.lang = 'it_IT';
    text_speak.rate = 0.90;
    text_speak.pitch = 0.8;
    window.speechSynthesis.speak(text_speak);
}

window.addEventListener('load', ()=>{
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Buongiorno");
    }

    else if(hr == 12) {
        speak("Spero si una buona giornata");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Buon Pomeriggio");
    }

    else {
        speak("Buona sera");
    }
}


function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "Non ti sento, Riprova";

    //Personal

    if(message.includes('ciao')) {
        const finalText = "Ciao sono Nick. Chiedi la mansione da svolgere, io ti ascolto";
        speech.text = finalText;
    }

    else if(message.includes('come va')) {
        const finalText = "Tutto bene";
        speech.text = finalText;
    }

    else if(message.includes('tuo nome')) {
        const finalText = "Sono Nick";
        speech.text = finalText;
    }

    else if(message.includes('anni hai')) {
        const finalText = "Ho diciotto anni";
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

    else if(message.includes('cosa è') || message.includes('chi è') || message.includes('dove è')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Cerco su internet riguardo " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "Apro wikipedia " + message;
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
        const finalText = 'sono le' + timeHour + 'e'+ timeMinute + 'minuti';
        speech.text = finalText;
    }

    else if(message.includes('data')) {
        const date = new Date().toLocaleString(undefined, {month: "long", day: "numeric"})
        const year = new Date().toLocaleString(undefined, {year: "numeric"})
        const finalText = 'oggi è il' + date + " . dell'anno" + year;
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Posso cercare su google";
        speech.text = finalText;
    }

    speech.lang = 'it_IT';
    speech.rate = 0.95;
    speech.pitch = 1;
    speech.volume=1;

    window.speechSynthesis.speak(speech);
}
