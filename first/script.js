let switchMode = document.getElementById("switchMode");

switchMode.onclick = function() {
    let theme = document.getElementById("theme")

    if(theme.getAttribute("href") == "style.css"){
        theme.href = "dark-mode.css"
    }
    else {
        theme.href = "style.css"
    }

    let burger = document.getElementById("burger");

    if(burger.getAttribute("href") == "burger-button.css") {
        burger.href = "dark-burger.css";
    }
    else {
        burger.href = "burger-button.css";
    }
}