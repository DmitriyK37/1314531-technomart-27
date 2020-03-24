
    var bigMap = document.querySelector(".modal-map");
    var closeMap = bigMap.querySelector(".modal-close");

    var openMap = document.querySelector(".mini-map");
  
    var link = document.querySelector(".write-us");
    
    var popup = document.querySelector(".modal-letter");
    var close = popup.querySelector(".modal-close");

    var form = popup.querySelector(".write-form");
    var yourName = popup.querySelector("[name=name]");
    var email = popup.querySelector("[name=email]");
  
    var slide = document.querySelector(".slide-image-block");
    var next = slide.querySelector(".icon-right-image");

    var slideOne = document.querySelector(".slide1-image-block");
    var before = slideOne.querySelector(".icon-left-image");

    var openBasket = document.querySelector(".product-in-basket");
    var closeBasket = openBasket.querySelector(".modal-close");

    var buyes = document.querySelectorAll(".buy");

    var guarantee = document.querySelector(".services-content-guarantee");

    var delivery = document.querySelector(".services-content-delivery");
    
    var credit = document.querySelector(".services-content-credit");
    
    var guaranteeButtom = document.querySelector(".services-menu-link-guarantee");
    
    var deliveryButtom = document.querySelector(".services-menu-link-delivery");
    
    var creditButtom = document.querySelector(".services-menu-link-credit");

    var isStorageSupport = true;
    var storage = "";

    try {
    storage = localStorage.getItem("name");
    } catch (err) {
    isStorageSupport = false;
    }

    next.addEventListener("click", function (evt) {
      evt.preventDefault();

      slide.classList.remove("slide-image-block-flex");
      slide.classList.add("slide-image-block-none");

      slideOne.classList.remove("slide-image-block-none");
      slideOne.classList.add("slide-image-block-flex");

      console.log("next");
    });

    before.addEventListener("click", function (evt) {
      evt.preventDefault();

      slideOne.classList.remove("slide-image-block-flex");
      slideOne.classList.add("slide-image-block-none");

      slide.classList.remove("slide-image-block-none");
      slide.classList.add("slide-image-block-flex");

      console.log("before");
    });

    link.addEventListener("click", function (evt) {
      console.log("link1");
      evt.preventDefault();
      console.log("link2");
      popup.classList.add("modal-show");
      console.log("link3");
      yourName.focus();
      console.log("link4");
    });

    close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    });

    form.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    form.addEventListener("submit", function (evt) {
      if (!yourName.value || !email.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
        console.log("Нужно ввести логин и пароль");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("name", name.value);
          console.log("Форма отправлена");
          popup.classList.remove("modal-show");
        }
      }
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
          popup.classList.remove("modal-error");
        }
      }
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (bigMap.classList.contains("open-map")) {
          bigMap.classList.remove("open-map");
        }
      }
    });
    
   for (var buyIndex = 0; buyIndex < buyes.length; buyIndex++) {
     buyes[buyIndex].addEventListener("click", function (evt) {
        evt.preventDefault();
        openBasket.classList.add("modal-basket");
      });

   }

    closeBasket.addEventListener("click", function (evt) {
      evt.preventDefault();
      openBasket.classList.remove("modal-basket");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (openBasket.classList.contains("modal-basket")) {
          openBasket.classList.remove("modal-basket");
        }
      }
    });

    deliveryButtom.addEventListener("click", function (evt) {
      evt.preventDefault();
      
      delivery.classList.remove("services-content-none");
      delivery.classList.add("services-content-flex");

      guarantee.classList.add("services-content-none");
      credit.classList.add("services-content-none");

      deliveryButtom.classList.add("active-services");
      guaranteeButtom.classList.remove("active-services");
      creditButtom.classList.remove("active-services");
    });

    guaranteeButtom.addEventListener("click", function (evt) {
          evt.preventDefault();
          
          delivery.classList.remove("services-content-flex");
          delivery.classList.add("services-content-none");

          guarantee.classList.remove("services-content-none");
          guarantee.classList.add("services-content-flex");

          deliveryButtom.classList.remove("active-services");

          creditButtom.classList.remove("active-services");

          guaranteeButtom.classList.add("active-services");
        });

        creditButtom.addEventListener("click", function (evt) {
          evt.preventDefault();
          
          delivery.classList.remove("services-content-flex");
          delivery.classList.add("services-content-none");

          guarantee.classList.remove("services-content-flex");
          guarantee.classList.add("services-content-none");

          credit.classList.remove("services-content-none");
          credit.classList.add("services-content-flex");

          deliveryButtom.classList.remove("active-services");

          guaranteeButtom.classList.remove("active-services");

          creditButtom.classList.add("active-services");
        });