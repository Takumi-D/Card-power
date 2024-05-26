import "./styles/normalize.scss";
import "./styles/fonts.scss";
import "./styles/header.scss";
import "./styles/container.scss";
import "./styles/root.scss";
import "./styles/footer.scss";
import "./styles/header-mobule.scss";
import "./styles/banner.scss";
import "./styles/photos-and-videos.scss";
import "./styles/selection.scss";
import "./styles/offer.scss";

const dropDownMenu = document.querySelector(".drop-down-menu");

const wrapperCards = document.querySelector(".wrapper-cards");
const cards = document.querySelector(".cards");
const arrowCardsItemLeft = document.querySelector(".arrow-cards-item-left");
const arrowCardsItemRight = document.querySelector(".arrow-cards-item-right");

const wrapperVideoPhoto = document.querySelector(".photos-and-videos__wrapper-scroll");
const rowVideoPhoto = document.querySelector(".photos-and-videos__scroll-items");
const arrowVideoPhotoLeft = document.querySelector(".photos-and-videos__wrapper-arrow-left");
const arrowVideoPhotoRight = document.querySelector(".photos-and-videos__wrapper-arrow-right");

const wrapperOffer = document.querySelector(".wrapper-cards-offer");
const rowOffer = document.querySelector(".cards-offer");
const arrowOfferLeft = document.querySelector(".offer-item-left");
const arrowOfferRight = document.querySelector(".offer-item-right");

const burgerMenuMobile = document.querySelector(".header-mobile__wrapper-burger-menu");
const menuMobile = document.querySelector(".menu-mobile");

const form = document.querySelector(".footer__form");

document.addEventListener("click", ($event) => {
   if($event.target.closest(".header__wrapper-drop-down-menu")?.classList.contains("header__wrapper-drop-down-menu")){
       if(dropDownMenu?.style.display === ""){
           dropDownMenu.style.display = "flex";
       } else {
           if($event.target.closest(".drop-down-menu")?.classList.contains("drop-down-menu")){

           } else {
               dropDownMenu.style.display = "";
           }
       }
   } else {
       if(dropDownMenu?.style.display === "flex"){
           dropDownMenu.style.display = "";
       }
   }
});


const state = {
    cart: 0,
    valueCart: "cart",
    VideoPhoto: 0,
    ValueVideoPhoto: "VideoPhoto",
    offer: 0,
    valueOffer: "offer"
};

function spinRight(state, nameItemValue, wrapperRowEl, rowEl, itemWidth){
    state[nameItemValue] += itemWidth;

    if(state[nameItemValue] + wrapperRowEl.clientWidth - 20  > rowEl.scrollWidth){
        state[nameItemValue] = 0;
    }

    rowEl.style.left = `-${state[nameItemValue]}px`;
}

function spinLeft(state, nameItemValue, rowEl, itemWidth){
    if(state[nameItemValue] === 0){
        return;
    }

    state[nameItemValue] -= itemWidth;
    rowEl.style.left = `-${state[nameItemValue]}px`;
}

arrowCardsItemRight.addEventListener("click", () => spinRight(state, state.valueCart, wrapperCards, cards, 236));
arrowCardsItemLeft.addEventListener("click", () => spinLeft(state, state.valueCart, cards, 236));


arrowVideoPhotoRight.addEventListener("click", () => spinRight(state, state.ValueVideoPhoto, wrapperVideoPhoto, rowVideoPhoto, 280));
arrowVideoPhotoLeft.addEventListener("click", () => spinLeft(state, state.ValueVideoPhoto, rowVideoPhoto, 280));


arrowOfferRight.addEventListener("click", () => spinRight(state, state.valueOffer, wrapperOffer, rowOffer, 236));
arrowOfferLeft.addEventListener("click", () => spinLeft(state, state.valueOffer, rowOffer, 236));

burgerMenuMobile.addEventListener("click", () => {
    burgerMenuMobile.classList.toggle("open-menu");

    if(menuMobile.style.left === "-100%"){
        menuMobile.style.left = "0";
        document.body.style.overflow = "hidden";
    } else {
        menuMobile.style.left = "-100%";
        document.body.style.overflow = "initial";
    }

});

form.addEventListener("submit", ($event) => {
    $event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    if (!name.value || !email.value || !phone.value) {
        alert("Все поля должны быть заполнены");
    } else if(!isValidEmail(email.value)){
        alert("Введите корректный Email");
    } else if(!isValidPhone(phone.value)){
        alert("Введите корректный телефон");
    } else {
        name.value = email.value = phone.value = "";
        alert("Вы успешно заполнили фрму :)");
    }
})

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailPattern.test(email);
}

function isValidPhone(phone) {
    const PhonePattern = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

    return PhonePattern.test(phone);
}



