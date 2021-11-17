//Header qui change de couleur au scrollY :
let nav = document.querySelector("#nav");
let iconeMenuBurger = document.querySelector(".iconeMenuBurger");
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


//Faire apparaître le voileRecherche :
let btnRecherche = document.getElementById("btnRecherche");
let voileRecherche = document.getElementById("voileRecherche");
let navVoile = document.getElementById("navVoile");
croixVoileRecherche = document.getElementById("croixVoileRecherche");

let formRecherche = document.querySelector("#formRecherche");
let inputRecherche = document.querySelector("#inputRecherche");
let labelRecherche = document.querySelector("#labelRecherche");



btnRecherche.addEventListener("click", (e) => {
    navVoile.style.opacity = "1";
    navVoile.style.zIndex = "0";
    voileRecherche.classList.remove("voileRechercheOff");
    voileRecherche.classList.add("voileRechercheOn");
    formRecherche.classList.remove("formRechercheOff");
    formRecherche.classList.add("formRechercheOn");
    inputRecherche.classList.remove("inputRechercheOff");
    inputRecherche.classList.add("inputRechercheOn");
    labelRecherche.classList.remove("labelRechercheOff");
    labelRecherche.classList.add("labelRechercheOn");
})

croixVoileRecherche.addEventListener("click", (e) => {
    voileRecherche.classList.remove("voileRechercheOn");
    voileRecherche.classList.add("voileRechercheOff");
    navVoile.style.zIndex = "-10";
    formRecherche.classList.remove("formRechercheOn");
    formRecherche.classList.add("formRechercheOff");
    inputRecherche.classList.remove("inputRechercheOn");
    inputRecherche.classList.add("inputRechercheOff");
    labelRecherche.classList.remove("labelRechercheOn");
    labelRecherche.classList.add("labelRechercheOff");
})


