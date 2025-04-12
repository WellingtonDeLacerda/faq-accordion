let iconeMais = document.querySelectorAll('img.mais')
let iconeMenos = document.querySelectorAll("img.menos")
let parag = document.querySelectorAll("p.parag")
for(let i = 0;i < iconeMais.length;i++){
    iconeMais[i].style.display = "block"
}
for(let i = 0;i < iconeMenos.length;i++){
    iconeMenos[i].style.display = "none"
}
for (i = 0; i < parag.length; i++) {
    parag[i].style.display = "none"
}
iconeMais[0].style.display = "none"
iconeMenos[0].style.display = "block"
parag[0].style.display = "block"

function clicarMais1() {
    if(true) {
        iconeMais[0].style.display = "none"
        iconeMenos[0].style.display = "block"
        parag[0].style.display = "block"
    }
}
function clicarMais2() {
    if(true) {
        iconeMais[1].style.display = "none"
        iconeMenos[1].style.display = "block"
        parag[1].style.display = "block"
    }
}
function clicarMais3() {
    if(true) {
        iconeMais[2].style.display = "none"
        iconeMenos[2].style.display = "block"
        parag[2].style.display = "block"
    }
}
function clicarMais4() {
    if(true) {
        iconeMais[3].style.display = "none"
        iconeMenos[3].style.display = "block"
        parag[3].style.display = "block"
    }
}
function clicarMenos1() {
    if(true) {
        iconeMais[0].style.display = "block"
        iconeMenos[0].style.display = "none"
        parag[0].style.display = "none"
    }
}
function clicarMenos2() {
    if(true) {
        iconeMais[1].style.display = "block"
        iconeMenos[1].style.display = "none"
        parag[1].style.display = "none"
    }
}
function clicarMenos3() {
    if(true) {
        iconeMais[2].style.display = "block"
        iconeMenos[2].style.display = "none"
        parag[2].style.display = "none"
    }
}
function clicarMenos4() {
    if(true) {
        iconeMais[3].style.display = "block"
        iconeMenos[3].style.display = "none"
        parag[3].style.display = "none"
    }
}


