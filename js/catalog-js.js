var openBasket = document.querySelector(".product-in-basket");
var closeBasket = openBasket.querySelector(".modal-close");

var buy = document.querySelectorAll(".buy");

var isStorageSupport = true;
var storage = "";

try {
storage = localStorage.getItem("name");
} catch (err) {
isStorageSupport = false;
}

for (var buy of buy) {
    buy.addEventListener("click", function (evt) {
      evt.preventDefault();
      openBasket.classList.add("modal-basket");
    });
  }

    closeBasket.addEventListener("click", function (evt) {
    evt.preventDefault();
    openBasket.classList.remove("modal-basket");
  });
