function myFunction() {
    var x = document.querySelector(".nav-list");
    console.log(x.style.display);
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
}

document.querySelector(".icon").addEventListener("click", myFunction())




function scrollToTop() {
    window.scrollTo(0, 0);
}