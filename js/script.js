//Efect move the scroll
window.onscroll = function(){
    const position = window.pageYOffset || document.documentElement.scrollTop;
    const icon_minecraft = document.getElementById("icon_minecraft");
    const icon_security = document.getElementById("icon_security");

    icon_minecraft.style.bottom = position * 0.2 + "px";
    icon_security.style.top = position * 0.1 + "px";
}
//show menu when clicked
document.getElementById("icon_menu").addEventListener("click", show_menu);

function show_menu(){
    document.querySelector(".menu").classList.toggle("show_menu");
}