document.getElementById('WSTUDIO').style.display="none";
var themes_moon = document.getElementById("themes_moon");
var themes_sun = document.getElementById("themes_sun");

themes_sun.style.display='none';

const CLIENT_ID = 'EFslC1FFGukiWwqQ';
const drone = new ScaleDrone(CLIENT_ID, {
  data: { name: 'Kcisti'}
});

drone.on('open', error => {
  if (error) {
    return console.error(error);
  }
  console.log('Successfully connected to Scaledrone');

  const room = drone.subscribe('observable-room');
  room.on('open', error => {
    if (error) {
      return console.error(error);
    }
    console.log('Successfully joined room');
  });

  room.on('data', (text,) => {
      addMessageToListDOM(text);
  });
});
const DOM = {
  messages: document.querySelector('.things'),
  input: document.querySelector('.message-form__input'),
  form: document.querySelector('.message-form'),
  area: document.querySelector('.head_title'),
};

function openStudio(){
  document.getElementById('WSTUDIO').style.display="block";
  document.getElementById('check').style.display="block";
  document.getElementById('room').style.display="none";
  document.getElementById('message_form').style.display="none";
}
function closeStudio(){
  document.getElementById('WSTUDIO').style.display="none";
  document.getElementById('room').style.display="block";
}
DOM.area.addEventListener('click', openStudio);

function accessG(){
  var pin = document.getElementById("checkpin").value;
  if (pin === '2321222425') {
    document.getElementById('check_resultTitle').style.color="#343A90";
    document.getElementById('check_resultTitle').innerText="ACCESS GRANTED";
    setTimeout(function(){
      document.getElementById('check').style.display="none";
      document.getElementById('message_form').style.display="block";
    },700)
  } else {
    document.getElementById('check_resultTitle').style.color="red";
    document.getElementById('checkpin').style.border="1px solid red";
    document.getElementById('check_resultTitle').innerText="ACCESS DENIED";

  }
}

function sunappear(){
  themes_moon.style.display='none';
  themes_sun.style.display='block';
}
function moonappear(){
  themes_moon.style.display='block';
  themes_sun.style.display='none';
}

function sendMessage() {
  const value = DOM.input.value;
  if (value === '') {
    return;
  }
  DOM.input.value = '';
  drone.publish({
    room: 'observable-room',
    message: value,
  });
  closeStudio();
}
DOM.form.addEventListener('click', sendMessage);

function addZero(i){
  if (i < 10) {
    i = "0" + i;
  } return i;
}

function createMessageElement(text) {
  var numero = Math.floor(Math.random()*10000);
  var postid = 'post' + numero;
  jQuery("#things").append("<div class='post' id='"+ postid +"'></div>");
  var select = document.getElementById("cat");
  var topic = select.options[select.selectedIndex].value;
  jQuery("#"+ postid).append("<p class='things_topic'>"+ topic +"</p>");
  var el = document.createTextNode(text);
  jQuery("#"+ postid).append("<p class='things_write'>"+ el.wholeText +"</p>");
  var d = new Date();
  var date = d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear();
  var ora = addZero(d.getHours());
  var min = addZero(d.getMinutes());
  jQuery("#"+ postid).append("<p class='things_name'>Kcisti</p>");
  jQuery("#"+ postid).append("<p class='things_dates'>" + date + "</p>");
  jQuery("#"+ postid).append("<ion-icon name='time-outline' class='things_hourI'></ion-icon>");
  jQuery("#"+ postid).append("<p class='things_hour'>"+ ora +":"+ min +"</p>");
}

function addMessageToListDOM(text) {
  const content = DOM.messages;
  content.append(createMessageElement(text));
}
