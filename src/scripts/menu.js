function abrirMenu() {
    document.getElementById("menuMobile").style.width = "100%"
}

function fecharMenu() {
    document.getElementById("menuMobile").style.width = "0"
}

document.addEventListener("scrollExit", fecharMenu)