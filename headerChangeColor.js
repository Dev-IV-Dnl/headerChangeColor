//Header qui change de couleur au scrollY :
let navigation = document.querySelector("#navigation");
let iconeMenuBurger = document.querySelector("#iconeMenuBurger");
let logo = document.querySelector(".logo");
let departScroll = window.pageYOffset;
let voileBurger = document.getElementById("voileBurger");

window.onscroll = function () {
    let top = window.scrollY;
    console.log(top);
    if (top >= 5) {
        navigation.classList.add("bgBlack");
        if(window.matchMedia("(max-width:1010px)").matches) { // si on atteind moins de 1010px on met le logo avec text en le changeant de couleur
            logo.style.backgroundImage = "url(img/logo-blanc-text2.jpg)";
        } else {
            logo.style.backgroundImage = "url(img/logo-blanc.jpg)"; // ici pas de text car largeur suffisante pour afficher le titre du cabinet
        }
        iconeMenuBurger.style.border = "1px solid var(--col5)";
    } else if (top <= 5) {
        navigation.classList.remove("bgBlack");
        if(window.matchMedia("(max-width:1010px)").matches) {
            logo.style.backgroundImage = "url(img/logo-noir-text2.jpg)"; // inverse pour revenir au logo noir d'origine lorsqu'en haut de la page
        } else {
            logo.style.backgroundImage = "url(img/logo-noir.jpg)";
        }
        iconeMenuBurger.style.border = "1px solid var(--col4)";
    }
}


//Variables pour la recherche :
let btnRecherche = document.getElementById("btnRecherche");
let voileRecherche = document.getElementById("voileRecherche");
let navVoileRecherche = document.querySelector(".navVoileRecherche");
let iconeMenuBurgerRecherche = document.getElementById("iconeMenuBurgerRecherche");
let croixVoileRecherche = document.getElementById("croixVoileRecherche");
let mesNav = document.querySelector('.mesNav');

//Variables Formulaire :
let formRecherche = document.querySelector("#formRecherche");
let inputRecherche = document.querySelector("#inputRecherche");
let labelRecherche = document.querySelector("#labelRecherche");


//Gestion de l'évènement click sur la recherche :
btnRecherche.addEventListener("click", (e) => {
    mesNav.classList.remove("lienNav");
    mesNav.classList.add("lienNav2");
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

let navVoileBurger = document.getElementById("navVoileBurger");
let croixVoileBurger = document.getElementById("croixVoileBurger");
let ligne1 = document.querySelector("ligne1Burger");
let ligne2 = document.querySelector("ligne2Burger");
let ligne3 = document.querySelector("ligne3Burger");
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


//---------------------------------JS CARDS-------------------------------------
let card = document.querySelectorAll('.imgCard');
//Filtre sur tous sauf hover :
card.forEach(element => {
    element.addEventListener('mouseover', e => {
        card.forEach(elementHover => {
            elementHover.classList.add('imgHover');
        })
        if (e.target.classList.contains('imgHover')) {
            e.target.classList.remove('imgHover');
            console.log(e.target.classList);
        }
    })
    element.addEventListener('mouseout', e => {
        card.forEach(elementUnHover => {
            elementUnHover.classList.remove('imgHover');
        });
    });
});
