document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav a');
    
    links.forEach(each => (each.onclick = scrollAnimation));

    function scrollAnimation(e) {
        e.preventDefault();
        let targetElement = document.querySelector(this.getAttribute("href"));
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    }
});

