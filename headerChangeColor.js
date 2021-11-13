let nav = document.querySelector("#nav");
let departScroll = window.pageYOffset;

window.onscroll = function() {
    let top = window.scrollY;
    if(top>=10) {
        nav.classList.add("bgBlack");
    }  else if (top<=10) {
        nav.classList.remove("bgBlack");
    }
}