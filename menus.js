import { loadPage } from "./nail-product.js";
import { loadCarousel } from "./carousel.js";
function dropDownList() {
  const button = document.querySelector('.icon-menus-container');
  button.addEventListener('click', () => {
    const listEl = document.querySelector('.list-container');
    if(!listEl.classList.contains('js-list-container')){
    listEl.classList.add('js-list-container');
    }else{
      listEl.classList.remove('js-list-container');
    }
  })
}
function bookingButton(){
  document.querySelectorAll('.book-button').forEach(button => {
    button.addEventListener('click', () => {
      window.location.href = 'booking.html';
    });
  })

}
dropDownList();
loadPage();
loadCarousel();
bookingButton();