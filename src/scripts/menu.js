function abrirMenu() {
    document.getElementById("menuMobile").style.transform = "translateX(0)"
}

function fecharMenu() {
    document.getElementById("menuMobile").style.transform = "translateX(-100%)"
}

document.addEventListener("scrollExit", fecharMenu)