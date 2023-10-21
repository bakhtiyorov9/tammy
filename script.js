let headerMenu = document.querySelector(".header__menu")
let headerMenuLine = document.querySelector(".header__menu-line")
let headerBurger = document.querySelector(".header__burger")

headerMenu.addEventListener("click", function(){
    headerMenuLine.classList.toggle("active")
    headerBurger.classList.toggle("active")
})


let headerSubtitle = document.querySelector(".header_subtitle")
let fullText = headerSubtitle.innerHTML
let stop = 0

headerSubtitle.innerHTML = ""

function runText(x = 0) {
    headerSubtitle.innerHTML += fullText[x]
    x++

    stop = setTimeout(() => {
        runText(x)
    }, 200);

    if (x == 19) {
        clearTimeout(stop)
        headerSubtitle.classList.add("active")
    }

}

runText()


