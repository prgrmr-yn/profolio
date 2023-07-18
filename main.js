let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName('tab-contents')


function opentab(tabName) {
  for (const tablink of tabLinks){
    tablink.classList.remove('active-link')
  }
  for (const tabContent of tabContents) {
    tabContent.classList.remove('active-tab')

  }
  event.currentTarget.classList.add("active-link")
  document.getElementById(tabName).classList.add("active-tab")
}

let sideMenu = document.getElementById('side-menu');

function openMenu(){
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}

// Form

const scriptURL = 'https://script.google.com/macros/s/AKfycbw6hGm-IYpYdpKCNOJtxmvBfYzNAUSUZsgptJ2dpy409r9kUZynMAbphso0rVEqouZb/exec'
const form = document.forms['submit-to-google-sheet']
const msg= document.getElementById('msg')
const inputFields = document.getElementsByName('input')
console.log(inputFields);
console.log('hi');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.textContent='Message Sent Successfully';
      setTimeout(() => {
        msg.textContent='';
      }, 5000)
    })
    .catch(error => console.error('Error!', error.message))
});
