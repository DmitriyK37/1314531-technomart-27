var openBasket = document.querySelector(".product-in-basket");
var closeBasket = openBasket.querySelector(".modal-close");

var buyes = document.querySelectorAll(".buy");

var isStorageSupport = true;
var storage = "";

try {
storage = localStorage.getItem("name");
} catch (err) {
isStorageSupport = false;
}

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
