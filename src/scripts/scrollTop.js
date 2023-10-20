const scrollTopBtn = document.getElementById("scrollTop");

scrollTopBtn.addEventListener('click', function () {
    window.scrollTo(0, 0)
});

const evt = new Event("scrollExit");

document.addEventListener('scroll', esconder)

function esconder() {
    if (window.scrollY > 40) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }


    document.dispatchEvent(evt)
}

esconder();
