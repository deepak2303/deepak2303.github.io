window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>0);
})
function openresume (){
    window.open("https://drive.google.com/file/d/1UGjie_DLpJWqcP9MvAMrcljRKd_LCcQw/view?usp=sharing")
}
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflow = "hidden";
}
cancelBtn.onclick = function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
}
let navLinks = document.querySelectorAll(".parent li a");
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click" , function() {
        navBar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
        body.style.overflow="auto";
    });
}