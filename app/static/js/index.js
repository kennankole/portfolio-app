function myFunction(x){
    let show = document.querySelector('.right');
    x.classList.toggle("change");
    show.classList.toggle('show-menu');
    show.classList.toggle('show-menu>a');
}

const humberger = document.querySelector(".hambuger-menu");
const navMenu = document.querySelector(".right");

document.querySelectorAll(".right").forEach(e => e.addEventListener("click", () => {
    humberger.classList.remove("change");
    navMenu.classList.remove("show-menu");
}));
