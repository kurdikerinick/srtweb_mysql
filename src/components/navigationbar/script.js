window.addEventListener('scroll', function() {
    var header = document.querySelector("header.sticky");
    if (window.pageYOffset > 0) {
        header.classList.add("sticky-active");
    } else {
        header.classList.remove("sticky-active"); 
    }
});
