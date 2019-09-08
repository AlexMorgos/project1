const links = document.querySelectorAll('a');
links.forEach((link) => {
    if (link.getAttribute('href') === window.location.pathname) {
        console.log(link)
    }
});