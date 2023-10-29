const hamburger = document.querySelector('.hamburger')
const navDrawer = document.querySelector('.nav-drawer')
const closeBtn = document.querySelector('.nav-drawer .close-btn')
const drawerOverlay = document.querySelector('.drawer-overlay')

function toggleMenu() {
  navDrawer.classList.toggle('active')
  drawerOverlay.classList.toggle('active')
  document.body.classList.toggle('scroll')
}

hamburger.addEventListener('click', toggleMenu)
closeBtn.addEventListener('click', toggleMenu)
