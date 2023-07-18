let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName('tab-contents')


function opentab(tabName) {
  for (let tablink of tabLinks){
    tablink.classList.remove('active-link')
  }
  for (const tabContent of tabContents) {
    tabContent.classList.remove('active-tab')

  }
  event.currentTarget.classList.add("active-link")
  document.getElementById(tabName).classList.add("active-tab")
}
