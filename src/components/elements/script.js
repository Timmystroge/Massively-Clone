// when this function is being called it open the menu bar
function displyMobileMenu(mobileMenu) {
  mobileMenu.style.display = "block";
  mobileMenu.classList.remove("closeMenu");
  mobileMenu.classList.add("openMenu");
}
// when this function is being called it closes the menu bar
function closeMobileMenu(mobileMenu) {
  mobileMenu.style.display = "block";
  mobileMenu.classList.remove("openMenu");
  mobileMenu.classList.add("closeMenu");
  setTimeout(() => {
    mobileMenu.style.display = "none";
  }, 300);
}
// exporting default and all functions
export default displyMobileMenu;
export { closeMobileMenu };
