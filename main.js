/* ##########################################################################
######################### Functionalty toggle theme #########################
########################################################################## */

let buttonsTaggleTheme = document.querySelectorAll("header section ul li"),
    themesBody = ["th-1", "th-2", "th-3"],
    body = document.querySelector("body");

function taggleButton(active, remove1, remove2) {
    // active to button whith click her
    buttonsTaggleTheme[active].style.visibility = "visible";
    // remove active to all buttons
    buttonsTaggleTheme[remove1].style.visibility = "hidden";
    buttonsTaggleTheme[remove2].style.visibility = "hidden";
}

function taggleTheme(active, remove1, remove2) {
    // remove all classes body 
    body.classList.remove(themesBody[remove1]);
    body.classList.remove(themesBody[remove2]);
    // Add class this theme buttons to body
    body.classList.add(themesBody[active]);
}

buttonsTaggleTheme[0].onclick = function () {
    // function => active button on click and remove active all buttons
    taggleButton(0, 1, 2);
    // function : remove all classes themes to body and add theme button here
    taggleTheme(0, 1, 2);
    // remove all classes body 
}

buttonsTaggleTheme[1].onclick = function () {
    // function => active button on click and remove active all button 
    taggleButton(1, 0, 2);
    // function : remove all classes themes to body and add theme button here
    taggleTheme(1, 0, 2);
}

buttonsTaggleTheme[2].onclick = function () {
    // function => active button on click and remove active all button
    taggleButton(2, 0, 1);
    // function : remove all classes themes to body and add theme button here
    taggleTheme(2, 0, 1);
}

/* ##########################################################################
######################### Functionalty Calculation  #########################
########################################################################## */

let NumbersButton = document.querySelectorAll("button"),
    NumbersButtonArray = [],
    outputOne = "",
    outputTwo = "",
    mainOutput = 0,
    oprator = "",
    screen = document.querySelector(".output");

// add buttons Number to Array 
NumbersButtonArray = Object.values(NumbersButton).filter(function (element) {
    return !isNaN(parseInt(element.textContent));
});

// Buttons Number on click
for (let i = 0; i < NumbersButtonArray.length; i++) {
    // when click to Number buttons
    NumbersButtonArray[i].onclick = function () {
        // change value output one
        outputOne += this.value;
        //screen whathed frist output
        screen.textContent = outputOne;
    }
}

// addition button click
add.onclick = function () {
    // screen and oprator rest to addition
    screen.textContent = "+";
    oprator = "add";
    // rest screen value and output
    for (let i = 0; i < NumbersButtonArray.length; i++) {
        // when click to Number buttons
        NumbersButtonArray[i].onclick = function () {
            // change value output two
            outputTwo += this.value;
            //screen whathed secound output
            screen.textContent = outputTwo;
        }
    }
}

// subtraction button click
sub.onclick = function () {
    // screen and oprator rest to subtraction
    screen.textContent = "-";
    oprator = "sub";
    // rest screen value and output
    for (let i = 0; i < NumbersButtonArray.length; i++) {
        // when click to Number buttons
        NumbersButtonArray[i].onclick = function () {
            // change value output two
            outputTwo += this.value;
            //screen whathed secound output
            screen.textContent = outputTwo;
        }
    }
}

// multiplication button click
mult.onclick = function () {
    // screen and oprator rest to multiplication
    screen.textContent = "*";
    oprator = "mult";
    // rest screen value and output
    for (let i = 0; i < NumbersButtonArray.length; i++) {
        // when click to Number buttons
        NumbersButtonArray[i].onclick = function () {
            // change value output two
            outputTwo += this.value;
            //screen whathed secound output
            screen.textContent = outputTwo;
        }
    }
}

// division button click
div.onclick = function () {
    // screen and oprator rest to division
    screen.textContent = "/";
    oprator = "div";
    // rest screen value and output
    for (let i = 0; i < NumbersButtonArray.length; i++) {
        // when click to Number buttons
        NumbersButtonArray[i].onclick = function () {
            // change value output two
            outputTwo += this.value;
            //screen whathed secound output
            screen.textContent = outputTwo;
        }
    }
}

// function button equal
equal.onclick = function () {
    // condition to Calculation 
    switch (oprator) {
        case "add": // addition Calculation
            mainOutput = +outputOne + +outputTwo;
            break;
        case "sub": // subtraction Calculation
            mainOutput = +outputOne - +outputTwo;
            break;
        case "mult": // multiplication Calculation
            mainOutput = +outputOne * +outputTwo;
            break;
        case "div": // division Calculation
            mainOutput = +outputOne / +outputTwo;
            break;
        default: 
            mainOutput = 0;
    }
    //screen whathed finsh output
    screen.textContent = mainOutput;
    // reset values output varibles
    outputOne = mainOutput;
    outputTwo = "";
}



