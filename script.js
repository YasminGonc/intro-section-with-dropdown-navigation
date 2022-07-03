var btnListRecursos = document.querySelector(".txtlist-recursos");

function toggleRecurso(){
    var seta = document.querySelector(".seta");
    var subMenu = document.querySelector(".sub-menu");
    subMenu.classList.toggle("on");
    seta.classList.toggle("on");
}
function toggleEmpresa(){
    var seta = document.querySelector(".seta2");
    var subMenu = document.querySelector(".sub-menu2");
    subMenu.classList.toggle("on");
    seta.classList.toggle("on");
}

function openNav(){
    var nav = document.querySelector("#nav");
    nav.classList.toggle("active");
}
