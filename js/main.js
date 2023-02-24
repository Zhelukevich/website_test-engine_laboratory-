document.addEventListener('DOMContentLoaded', function () {
  // BURGER
  const burger = document.getElementById('burger');
  const navID = document.getElementById('nav');
  const navLink = document.querySelectorAll('.nav-link');
  const text_1 = document.querySelector('.inform__text');
  const text_2 = document.querySelector('.inform__tel');
  const text_3 = document.querySelector('.bottom-dots');

  burger.addEventListener('click', function () {
    navID.classList.toggle('open');
    burger.classList.toggle('click');
    burger.classList.toggle('open');
    text_1.classList.toggle('click');
    text_2.classList.toggle('click');
    text_3.classList.toggle('click');
  })

  navLink.forEach(function (el) {
    el.addEventListener('click', function () {
      navID.classList.toggle('open');
      burger.classList.toggle('click');
      burger.classList.toggle('open');
      text_1.classList.toggle('click');
      text_2.classList.toggle('click');
      text_3.classList.toggle('click');
    })

  })

  // Inputmask
  const selector = document.querySelector("input[type='tel']");
  let im = new Inputmask("+7 (99)-999-99-99");

  im.mask(selector);

  // POPUP
  const popupOpen = document.getElementById('open-pop-up');
  const popupCloses = document.getElementById('popup-closes');
  const popup = document.getElementById('popup');

  popupOpen.addEventListener('click', (e) => {
    popup.classList.add('popup--visible');
  });

  popupCloses.addEventListener('click', (e) => {
    popup.classList.remove('popup--visible');
  });

  const closePopup = event => {
    const target = event.target;

    if (target === popup) {
      popup.classList.remove('popup--visible');
    }
  }

  popup.addEventListener('click', closePopup);

  setTimeout(() => {
    popup.classList.add('popup--visible');
  }, "10000")

  // FORM
  const form = document.getElementById('form');

  form.addEventListener('submit', formSend);

  function formSend(e) {
    e.preventDefault();
  }

  const checkbox = document.getElementById('formCheckbox');
  const formBtn = document.querySelector('.form__btn');

  checkbox.addEventListener('change', () => {
    formBtn.disabled = !checkbox.checked
  });


})
