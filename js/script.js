
    var bigMap = document.querySelector(".modal-map");
    var closeMap = bigMap.querySelector(".modal-close")

    var openMap = document.querySelector(".mini-map");
  
    var link = document.querySelector(".write-us");
    
    var popup = document.querySelector(".modal-letter");
    var close = popup.querySelector(".modal-close");

    var form = popup.querySelector(".write-form");
    var yourName = popup.querySelector("[name=name]");
    var email = popup.querySelector("[name=email]");
  
    var next = document.querySelector(".icon-right-image");

    var before = document.querySelector(".icon-left-image");

    var slide = document.querySelector(".slide-image-block");

    var slideOne = document.querySelector(".slide1-image-block");

    var openBasket = document.querySelector(".product-in-basket");
    var close = openBasket.querySelector(".modal-close");

    var buy = document.querySelector(".buy");

    var isStorageSupport = true;
    var storage = "";

    try {
    storage = localStorage.getItem("name");
    } catch (err) {
    isStorageSupport = false;
    }

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
      yourName.focus();
    });

    close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    });

    form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    console.log("Нужно ввести Имя и e-mail");
    });

    openMap.addEventListener("click", function (evt) {
      evt.preventDefault();
      bigMap.classList.add("open-map");
    });

    closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    bigMap.classList.remove("open-map");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
        }
      }
    });

    next.addEventListener("click", function (evt) {
      evt.preventDefault();
      slide.classList.add("close-slide");
      console.log("next");
    });

    buy.addEventListener("click", function (evt) {
      evt.preventDefault();
      openBasket.classList.add("modal-basket");
      name.focus();
    });

      close.addEventListener("click", function (evt) {
      evt.preventDefault();
      openBasket.classList.remove("modal-basket");
    });
 
