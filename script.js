const DOM = {
  //Elements to client
  menuIcon: document.querySelector('.nav_menu'),
  menuIconUn: document.querySelector('.nav_menuUn'),
  home : document.getElementById('home'),
  aboutMe : document.getElementById('aboutMe'),
  skills : document.getElementById('skills'),
  contact : document.getElementById('contact'),
  //Elements to server
  messages: document.querySelector('.things'),
  input: document.querySelector('.message-form__input'),
  form: document.querySelector('.message-form'),
  area: document.querySelector('.nav_title'),
};


//Client Settings
DOM.menuIconUn.style.display = 'none';

function menuVisible(){
  var menuStatus = 'visible';
  window.scrollTo( {
    top : 0,
    left : 0,
    behavior: 'smooth'
  });
  setTimeout(function(){
    document.getElementById("navMenu").style.height="700px";
    document.getElementById("navAnima").style.transform="translateY(0px)";
    DOM.menuIcon.style.display = 'none';
    DOM.menuIconUn.style.display = 'block';
    console.log(menuStatus);
  },300)
}
DOM.menuIcon.addEventListener('click', menuVisible);

function menuUnvisible(){
  var menuStatus = 'unvisible';
  document.getElementById("navMenu").style.height="0px";
  document.getElementById("navAnima").style.transform="translateY(-700px)";
  DOM.menuIconUn.style.display = 'none';
  DOM.menuIcon.style.display = 'block';
  console.log(menuStatus);
}
DOM.menuIconUn.addEventListener('click', menuUnvisible);

document.getElementById('WSTUDIO').style.display="none";

DOM.home.addEventListener('click',TOhome);
DOM.aboutMe.addEventListener('click',TOaboutUs);
DOM.skills.addEventListener('click',TOskills);
DOM.contact.addEventListener('click',TOcontact);


function TOhome(){
  menuUnvisible();
  setTimeout(function(){
    window.scrollTo( {
      top : 0,
      left : 0,
      behavior: 'smooth'
    });
  },1000)
}
function TOaboutUs(){
  menuUnvisible();
  setTimeout(function(){
    window.scrollTo( {
      top : 1600,
      left : 0,
      behavior: 'smooth'
    });
  },1000)
}
function TOskills(){
  menuUnvisible();
  setTimeout(function(){
    window.scrollTo( {
      top : 3200,
      left : 0,
      behavior: 'smooth'
    });
  },1000)
}
function TOcontact(){
  menuUnvisible();
  setTimeout(function(){
    window.scrollTo( {
      top : 4300,
      left : 0,
      behavior: 'smooth'
    });
  },1000)
}

window.addEventListener('onload',HeightRulesLoad());
function HeightRulesLoad(){
  window.scrollTo( {
    top : 0,
    left : 0,
    behavior: 'smooth'
  });
}


//Server Settings
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

function accessGranted(){
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
