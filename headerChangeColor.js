//Header qui change de couleur au scrollY :
let nav = document.querySelector("#nav");
let iconeMenuBurger = document.querySelector("#iconeMenuBurger");
let departScroll = window.pageYOffset;

window.onscroll = function () {
    let top = window.scrollY;
    if (top >= 5) {
        nav.classList.add("bgBlack");
        iconeMenuBurger.style.border = "1px solid var(--col5)";
    } else if (top <= 5) {
        nav.classList.remove("bgBlack");
        iconeMenuBurger.style.border = "1px solid var(--col3)";
    }
}


//Variables pour la recherche :
let btnRecherche = document.getElementById("btnRecherche");
let voileRecherche = document.getElementById("voileRecherche");
let navVoileRecherche = document.querySelector(".navVoileRecherche");
let croixVoileRecherche = document.getElementById("croixVoileRecherche");
let iconeMenuBurgerRecherche = document.getElementById("iconeMenuBurgerRecherche");

//Variables Formulaire :
let formRecherche = document.querySelector("#formRecherche");
let inputRecherche = document.querySelector("#inputRecherche");
let labelRecherche = document.querySelector("#labelRecherche");


//Gestion de l'évènement click sur la recherche :
btnRecherche.addEventListener("click", (e) => {
    iconeMenuBurgerRecherche.style.opacity = "0";
    iconeMenuBurgerRecherche.style.cursor = "none";
    navVoileRecherche.style.opacity = "1";
    navVoileRecherche.style.zIndex = "0";
    voileRecherche.classList.remove("voileRechercheOff");
    voileRecherche.classList.add("voileRechercheOn");
    formRecherche.classList.remove("formRechercheOff");
    formRecherche.classList.add("formRechercheOn");
    inputRecherche.classList.remove("inputRechercheOff");
    inputRecherche.classList.add("inputRechercheOn");
    labelRecherche.classList.remove("labelRechercheOff");
    labelRecherche.classList.add("labelRechercheOn");
})
//Gestion de la fermeture de la recherche :
croixVoileRecherche.addEventListener("click", (e) => {
    voileRecherche.classList.remove("voileRechercheOn");
    navVoileRecherche.style.zIndex = "-10";
    formRecherche.classList.remove("formRechercheOn");
    voileRecherche.classList.add("voileRechercheOff");
    formRecherche.classList.add("formRechercheOff");
    inputRecherche.classList.remove("inputRechercheOn");
    inputRecherche.classList.add("inputRechercheOff");
    labelRecherche.classList.remove("labelRechercheOn");
    labelRecherche.classList.add("labelRechercheOff");
})


//Variables du menuBurger :
let voileBurger = document.getElementById("voileBurger");
let navVoileBurger = document.getElementById("navVoileBurger");
let croixVoileBurger = document.getElementById("croixVoileBurger");
let btnVoileBurgerRecherche = document.getElementById("btnVoileBurgerRecherche");
let navPhone = document.getElementById("navPhone");

//Gestion de l'ouverture du voileBurger :
iconeMenuBurger.addEventListener("click", (e)=>{
    voileBurger.classList.remove("voileBurgerOff");
    voileBurger.classList.add("voileBurgerOn");
    navVoileBurger.style.opacity = "1";
    croixVoileBurger.style.border = "none";
    btnVoileBurgerRecherche.style.opacity = "0";
    btnVoileBurgerRecherche.style.cursor = "none";
    navPhone.style.display ="flex";
})

croixVoileBurger.addEventListener("click", (e)=> {
    voileBurger.classList.remove("voileBurgerOn");
    navPhone.style.display ="none";
})