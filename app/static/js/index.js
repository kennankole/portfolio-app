function myFunction(x){
    let show = document.querySelector('.right');
    x.classList.toggle("change");
    show.classList.toggle('show-menu');
    

}

function closeMenuItem(){
    let menuItem = document.querySelector('.menu-item');
    let show = document.querySelector('.right');
    myFunction(show);
}





