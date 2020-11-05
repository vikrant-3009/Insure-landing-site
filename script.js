function myFun() {
    
    var a = document.getElementById("main-nav");

    if (a.className === "top-right-nav") {
        a.classList.add("responsive");
    }
    else {
        a.className = "top-right-nav";
    }
}