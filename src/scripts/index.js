const hamburger = document.querySelector(".hamburger");
const navDrawer = document.querySelector(".navDrawer");
const exit = document.querySelector(".exit");


hamburger.addEventListener("click", () => {
  if (navDrawer.classList.contains("hidden")) {
    navDrawer.classList.remove("hidden");
    navDrawer.classList.remove("close-drawer");
    navDrawer.classList.add("open-drawer");
  } else {
    navDrawer.classList.add("hidden");
  }
  hamburger.disabled = true; // Disable the button

});

exit.addEventListener("click", () => {
    navDrawer.classList.remove('open-drawer')
  navDrawer.classList.add("close-drawer");
  setTimeout(() => {
    navDrawer.classList.add("hidden");
    hamburger.disabled = false;
  }, 1000);
});
