//alert("testing")

window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");
    showStart();

}

function showStart {
    console.log("showStart");

}

function hideStart {
    console.log("hideStart")

}

function showInstructions {
    console.log("showInstructions")

}

function hideInstructions {
    console.log("hideInstructions")

}


//********* SETTINGS ******************


//********* SETTINGS SLUT **************





//*********** EMAIL_1 *************************


function nyMail_1 {
    console.log("nyMail_1");

    document.querySelector("#game_background1").classList.remove("hide");
    document.querySelector("#game_elements1").classList.remove("hide")

    document.querySelector("#slet1").addEventListener("click", visKorrekt_1);
    document.querySelector("#gem1").addEventListener("click", visForkert_1);
    document.querySelector("#videresend1").addEventListener("click", visForkert_1);
}


function visForkert_1 {
    console.log("visForkert_1");

    document.querySelector("#game_background1").classList.add("blur");
    document.querySelector("#forkert1").classList.remove("hide");
    document.querySelector("#videre1").classList.remove("hide");


    document.querySelector("#videre1").addEventListener("click", hideNyMail_1);
}

function visKorrekt_1 {
    console.log("visKorrekt_1");

    document.querySelector("#game_background1").classList.add("blur");
    document.querySelector("#korrekt1").classList.remove("hide");
    document.querySelector("#videre1").classList.remove("hide");

    document.querySelector("#videre1").addEventListener("click", hideNyMail_1);
}

function hideNyMail_1 {
    console.log("hideNyMail_1");

    document.querySelector("#game_background1").classList.add("hide");
    document.querySelector("#game_elements1").classList.add("hide");
    document.querySelector("#forkert1").classList.add("hide");
    document.querySelector("#korrekt1").classList.add("hide");
    document.querySelector("#videre1").classList.add("hide");

    nyMail_2();

}


//*********** EMAIL_1 SLUT ********************








//*********** EMAIL_2 *************************


function nyMail_2 {
    console.log("nyMail_2")

    document.querySelector("#game_background2").classList.remove("hide");
    document.querySelector("#game_elements2").classList.remove("hide")

    document.querySelector("#slet2").addEventListener("click", visKorrekt_2);
    document.querySelector("#gem2").addEventListener("click", visForkert_2);
    document.querySelector("#videresend2").addEventListener("click", visForkert_2);
}


function visForkert_2 {
    console.log("visForkert_2")
}

function visKorrekt_2 {
    console.log("visKorrekt_2")
}



//*********** EMAIL_2 SLUT ********************





//*********** EMAIL_3 *************************


function nyMail_3 {
    console.log("nyMail_3")
}

function clickSlet_3 {
    console.log("clickSlet_3")
}

function clickGem_3 {
    console.log("clickGem_3")
}

function clickVideresend_3 {
    console.log("clickVideresend_3")
}

function visForkert_3 {
    console.log("visForkert_3")
}

function visKorrekt_3 {
    console.log("visKorrekt_3")
}

function clickVidere_3 {
    console.log("clickVidere_3")
}


//*********** EMAIL_3 SLUT ********************



//************* GAMEOVER ************************

function visFaengsel {
    console.log("visFaengsel")
}

function visPlet {
    console.log("visPlet")
}

function visFri {
    console.log("visFri")
}

//************* GAMEOVER SLUT *******************
