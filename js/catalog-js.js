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

buy.addEventListener("click", function (evt) {
evt.preventDefault();
openBasket.classList.add("modal-basket");
name.focus();
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
openBasket.classList.remove("modal-basket");
});