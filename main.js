window.addEventListener('DOMContentLoaded', (event) => {
    console.log("page loaded ");
    document.getElementById("contact-link").addEventListener("click", activateContact);
    document.getElementById("home-link").addEventListener("click", activateHome);
    document.getElementById("portfolio-link").addEventListener("click", activatePortfolio);
    document.getElementById("learn-more-link").addEventListener("click", activatePortfolio);


});



function activateContact(){
    removeActive();
    this.classList.add("active");
    document.getElementById("contact").hidden = false;
    
    
};

function activateHome(){
    removeActive();
    this.classList.add("active");
    document.getElementById("main").hidden = false;
    
};

function activatePortfolio(){
    removeActive();
    this.classList.add("active");
    document.getElementById("portfolio").hidden = false;
    
};

function removeActive(){
    var navList = document.getElementsByClassName("nav-link");
    for (var i = 0; i < navList.length; i++) {
        navList[i].classList.remove("active");
    }

    var pageList = document.getElementsByClassName("page");
    for (var i = 0; i < pageList.length; i++) {
        pageList[i].hidden = true
    }
};