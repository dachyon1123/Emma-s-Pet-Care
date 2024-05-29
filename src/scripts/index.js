const hamburger = document.querySelector(".hamburger");
const navDrawer = document.querySelector(".navDrawer");
const exit = document.querySelector(".exit");
const body = document.body
const html = document.querySelector('html')


hamburger.addEventListener("click", () => {
  if (navDrawer.classList.contains("hidden")) {
    navDrawer.classList.remove("hidden");
    navDrawer.classList.remove("close-drawer");
    navDrawer.classList.add("open-drawer");
    navDrawer.classList.add("shadow-screen");
    body.classList.add('overflow-hidden')
    html.classList.add('overflow-hidden')

  } else {
    navDrawer.classList.add("hidden");
  }
  hamburger.disabled = true; // Disable the button

});

exit.addEventListener("click", () => {
  navDrawer.classList.remove('open-drawer')
  navDrawer.classList.remove('shadow-screen');
  navDrawer.classList.add("close-drawer");
  setTimeout(() => {
    navDrawer.classList.add("hidden");
    hamburger.disabled = false;
    body.classList.remove('overflow-hidden')
    html.classList.remove('overflow-hidden')

  }, 200);
});
