let themeOneButton = document.querySelectorAll("header section ul li")[0],
    themeTwoButton = document.querySelectorAll("header section ul li")[1],
    themeThreeButton = document.querySelectorAll("header section ul li")[2],
    body = document.querySelector("body");

themeOneButton.onclick = function () {
    themeOneButton.style.visibility = "visible";
    themeTwoButton.style.visibility = "hidden";
    themeThreeButton.style.visibility = "hidden";

    body.classList.remove("th-2");
    body.classList.remove("th-3");
    body.classList.add("th-1");
}

themeTwoButton.onclick = function () {
    themeTwoButton.style.visibility = "visible";
    themeOneButton.style.visibility = "hidden";
    themeThreeButton.style.visibility = "hidden";

    body.classList.remove("th-1");
    body.classList.remove("th-3");
    body.classList.add("th-2");
}

themeThreeButton.onclick = function () {
    themeThreeButton.style.visibility = "visible";
    themeOneButton.style.visibility = "hidden";
    themeTwoButton.style.visibility = "hidden";

    body.classList.remove("th-1");
    body.classList.remove("th-2");
    body.classList.add("th-3");
}
