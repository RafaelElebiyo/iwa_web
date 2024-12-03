
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('btnTop').style.display = "block";
    } else {
        document.getElementById('btnTop').style.display = "none";
    }
};

document.getElementById('btnTop').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

