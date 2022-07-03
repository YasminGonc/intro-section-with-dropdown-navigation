var btnListRecursos = document.querySelector(".txtlist-recursos");

btnListRecursos.addEventListener("click", toggleRecurso);

function toggleRecurso(){
    window.alert("Foi");
    /*var subMenu = document.querySelector(".sub-menu");
    subMenu.classList.toggle("on");*/
}

function openNav(){
    var nav = document.querySelector("#nav");
    nav.classList.toggle("active");
}
