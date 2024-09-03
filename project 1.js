window.addEventListener('scroll',function() {
    var navbar = document.getElementById('navbar');
    if (this.window.scroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});