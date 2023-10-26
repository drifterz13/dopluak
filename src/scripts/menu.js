const hamburger = document.querySelector('.hamburger')
const navDrawer = document.querySelector('.nav-drawer')
const drawerOverlay = document.querySelector('.drawer-overlay')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navDrawer.classList.toggle('active')
  drawerOverlay.classList.toggle('active')

  document.body.classList.toggle('scroll')
})
