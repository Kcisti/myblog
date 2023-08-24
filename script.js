const DOM ={
    homebutton : document.querySelector('#homebutton'),
    aboutbutton : document.querySelector('#aboutbutton'),
    homeaboutbutton : document.querySelector('#homeaboutbutton'),
    projectbutton : document.querySelector('#projectbutton'),
    contactbutton : document.querySelector('#contactbutton'),
    home : document.querySelector('.home'),

    menubutton : document.querySelector('.menu'),
    menubuttonclose : document.querySelector('.head_menu_icon_2'),
    menu : document.querySelector('.head_menu_mobile'),
    homebuttonmob : document.querySelector('#homebuttonmob'),
    aboutbuttonmob : document.querySelector('#aboutbuttonmob'),
    projectbuttonmob : document.querySelector('#projectbuttonmob'),
    contactbuttonmob : document.querySelector('#contactbuttonmob'),
}


function homeSectionF(){
    window.scrollTo( {
        top : 0,
        left : 0,
        behavior: 'smooth'
      });
      mobilemenu();
}
DOM.homebutton.addEventListener('click', homeSectionF);  
DOM.homebuttonmob.addEventListener('click', homeSectionF); 


function aboutSectionF(){
    window.scrollTo( {
        top : 600,
        left : 0,
        behavior: 'smooth'
      });
      mobilemenu();
}
DOM.aboutbutton.addEventListener('click', aboutSectionF);  
DOM.aboutbuttonmob.addEventListener('click', aboutSectionF);  
DOM.homeaboutbutton.addEventListener('click', aboutSectionF);  


function projectSectionF(){
    window.scrollTo( {
        top : 1200,
        left : 0,
        behavior: 'smooth'
      });
      mobilemenu();
}
DOM.projectbutton.addEventListener('click', projectSectionF);
DOM.projectbuttonmob.addEventListener('click', projectSectionF);


function contactSectionF(){
    window.scrollTo( {
        top : 1800,
        left : 0,
        behavior: 'smooth'
      });
      mobilemenu();
}
DOM.contactbutton.addEventListener('click', contactSectionF);
DOM.contactbuttonmob.addEventListener('click', contactSectionF);




function mobilemenu(){
    DOM.menu.classList.toggle('head_menu_mobile_close');
    DOM.homebuttonmob.classList.toggle('head_menu_section_close');
    DOM.aboutbuttonmob.classList.toggle('head_menu_section_close');
    DOM.projectbuttonmob.classList.toggle('head_menu_section_close');
    DOM.contactbuttonmob.classList.toggle('head_menu_section_close');
}
DOM.menubutton.addEventListener('click', mobilemenu);
window.addEventListener('load', mobilemenu);