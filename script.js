//alert("testing")

window.addEventListener("load", sidenVises);

let showSettingsMusic = true;
let showSettingsSound = true;

function sidenVises() {
    console.log("sidenVises");
    showStart();
}

function showStart() {
    console.log("showStart");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#start_screen").classList.remove("hide");

    document.querySelector("#settings_button").addEventListener("click", showSettings);
    document.querySelector("#play_button").addEventListener("click", hideStart);

}


//********* SETTINGS ******************

function showSettings() {
    console.log("showSettings");

    document.querySelector("#settings_button").removeEventListener("click", showSettings);

    document.querySelector("#settings").classList.remove("hide");

    document.querySelector("#settings_music").addEventListener("click", toggleMusic);
    document.querySelector("#settings_sound").addEventListener("click", toggleSound);

    document.querySelector("#close_settings").addEventListener("click", hideSettings);
}


function toggleMusic() {
    console.log("toggleMusic");

    if (showSettingsMusic == true) {
        showSettingsMusic = false;
        document.querySelector("#music_sprite").classList.add("on_off");
        document.querySelector("#music_sprite").classList.remove("on");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOff);
    } else {
        showSettingsMusic = true;
        document.querySelector("#music_sprite").classList.add("off_on");
        document.querySelector("#music_sprite").classList.remove("off");

        document.querySelector("#music_sprite").addEventListener("animationend", musicOn);
    }
}

function musicOff() {
    console.log("musicOff function værdi er" + showSettingsMusic);
    document.querySelector("#music_sprite").removeEventListener("animationend", musicOff);

    document.querySelector("#music_sprite").classList.remove("on_off");
    document.querySelector("#music_sprite").classList.add("off");

    // document.querySelector("#music_mp3").pause();
}

function musicOn() {
    console.log("musicOn function værdi er" + showSettingsMusic);
    document.querySelector("#music_sprite").removeEventListener("animationend", musicOn);

    document.querySelector("#music_sprite").classList.remove("off_on");
    document.querySelector("#music_sprite").classList.add("on");

    // document.querySelector("#music_mp3").play();
}


function toggleSound() {
    console.log("toggleSound");

    if (showSettingsSound == true) {
        showSettingsSound = false;
        document.querySelector("#sound_sprite").classList.add("on_off");
        document.querySelector("#sound_sprite").classList.remove("on");
        document.querySelector("#sound_sprite").addEventListener("animationend", soundOff);
    } else {
        showSettingsSound = true;
        document.querySelector("#sound_sprite").classList.add("off_on");
        document.querySelector("#sound_sprite").classList.remove("off");

        document.querySelector("#sound_sprite").addEventListener("animationend", soundOn);
    }
}

function soundOff() {
    console.log("soundOff function værdi er" + showSettingsSound);
    document.querySelector("#sound_sprite").removeEventListener("animationend", soundOff);

    document.querySelector("#sound_sprite").classList.remove("on_off");
    document.querySelector("#sound_sprite").classList.add("off");

    //document.querySelector("#sound_mp3").muted = true;
}

function soundOn() {
    console.log("soundOn function værdi er" + showSettingsSound);
    document.querySelector("#sound_sprite").removeEventListener("animationend", soundOn);

    document.querySelector("#sound_sprite").classList.remove("off_on");
    document.querySelector("#sound_sprite").classList.add("on");

    //document.querySelector("#sound_mp3").muted = false;
}


function hideSettings() {
    console.log("hideSettings");
    document.querySelector("#close_settings").removeEventListener("click", hideSettings);
    document.querySelector("#settings").classList.add("hide");

    showStart();
}

//********* SETTINGS SLUT **************


function hideStart() {
    console.log("hideStart")
    document.querySelector("#start").classList.add("hide");

    showInstructions();
}

function showInstructions() {
    console.log("showInstructions")
    document.querySelector("#intro").classList.remove("hide");
    document.querySelector("#videre_knap").addEventListener("click", hideInstructions);

}

function hideInstructions() {
    console.log("hideInstructions")
    document.querySelector("#videre_knap").removeEventListener("click", hideInstructions);

    document.querySelector("#intro").classList.add("hide");
    document.querySelector("#start_screen").classList.add("hide");

    nyMail_1();
}

"use strict";
let points = 0;

//*********** EMAIL_1 *************************


function nyMail_1() {
    console.log("nyMail_1");

    points = 0;

    document.querySelector("#game_background1").classList.remove("hide");
    document.querySelector("#game_elements1").classList.remove("hide")

    document.querySelector("#slet1").addEventListener("click", visKorrekt_1);
    document.querySelector("#gem1").addEventListener("click", visForkert_1);
    document.querySelector("#videresend1").addEventListener("click", visForkert_1);
}


function visForkert_1() {
    console.log("visForkert_1");

    document.querySelector("#gem1").removeEventListener("click", visForkert_1);
    document.querySelector("#videresend1").removeEventListener("click", visForkert_1);

    document.querySelector("#game_background1").classList.add("blur");
    document.querySelector("#game_elements1").classList.add("blur");
    document.querySelector("#forkert1").classList.remove("hide");
    document.querySelector("#videre1").classList.remove("hide");


    document.querySelector("#videre1").addEventListener("click", hideNyMail_1);
}

function visKorrekt_1() {
    console.log("visKorrekt_1");

    document.querySelector("#slet1").removeEventListener("click", visKorrekt_1);

    document.querySelector("#game_background1").classList.add("blur");
    document.querySelector("#game_elements1").classList.add("blur");
    document.querySelector("#korrekt1").classList.remove("hide");
    document.querySelector("#videre1").classList.remove("hide");

    points++;

    document.querySelector("#videre1").addEventListener("click", hideNyMail_1);
}

function hideNyMail_1() {
    console.log("hideNyMail_1");

    document.querySelector("#videre1").removeEventListener("click", hideNyMail_1);

    document.querySelector("#game_background1").classList.add("hide");
    document.querySelector("#game_elements1").classList.add("hide");
    document.querySelector("#forkert1").classList.add("hide");
    document.querySelector("#korrekt1").classList.add("hide");
    document.querySelector("#videre1").classList.add("hide");

    nyMail_2();

}


//*********** EMAIL_1 SLUT ********************

//*********** EMAIL_2 *************************


function nyMail_2() {
    console.log("nyMail_2")

    document.querySelector("#game_background2").classList.remove("hide");
    document.querySelector("#game_elements2").classList.remove("hide")

    document.querySelector("#slet2").addEventListener("click", visKorrekt_2);
    document.querySelector("#gem2").addEventListener("click", visForkert_2);
    document.querySelector("#videresend2").addEventListener("click", visForkert_2);
}


function visForkert_2() {
    console.log("visForkert_2")

    document.querySelector("#gem2").removeEventListener("click", visForkert_2);
    document.querySelector("#videresend2").removeEventListener("click", visForkert_2);

    document.querySelector("#game_background2").classList.add("blur");
    document.querySelector("#game_elements2").classList.add("blur");
    document.querySelector("#forkert2").classList.remove("hide");
    document.querySelector("#videre2").classList.remove("hide");


    document.querySelector("#videre2").addEventListener("click", hideNyMail_2);

}

function visKorrekt_2() {
    console.log("visKorrekt_2")

    document.querySelector("#slet2").removeEventListener("click", visKorrekt_2);

    document.querySelector("#game_background2").classList.add("blur");
    document.querySelector("#game_elements2").classList.add("blur");
    document.querySelector("#korrekt2").classList.remove("hide");
    document.querySelector("#videre2").classList.remove("hide");

    points++;

    document.querySelector("#videre2").addEventListener("click", hideNyMail_2);
}

function hideNyMail_2() {
    console.log("hideNyMail_1");

    document.querySelector("#videre2").removeEventListener("click", hideNyMail_2);

    document.querySelector("#game_background2").classList.add("hide");
    document.querySelector("#game_elements2").classList.add("hide");
    document.querySelector("#forkert2").classList.add("hide");
    document.querySelector("#korrekt2").classList.add("hide");
    document.querySelector("#videre2").classList.add("hide");

    nyMail_3();

}

//*********** EMAIL_2 SLUT ********************

//*********** EMAIL_3 *************************


function nyMail_3() {
    console.log("nyMail_3")

    document.querySelector("#game_background3").classList.remove("hide");
    document.querySelector("#game_elements3").classList.remove("hide")


    document.querySelector("#gem3").addEventListener("click", visKorrekt_3);
    document.querySelector("#slet3").addEventListener("click", visForkert_3);
    document.querySelector("#videresend3").addEventListener("click", visForkert_3);
}

function visForkert_3() {
    console.log("visForkert_3")

    document.querySelector("#slet3").removeEventListener("click", visForkert_3);
    document.querySelector("#videresend3").removeEventListener("click", visForkert_3);

    document.querySelector("#game_background3").classList.add("blur");
    document.querySelector("#game_elements3").classList.add("blur");
    document.querySelector("#forkert3").classList.remove("hide");
    document.querySelector("#videre3").classList.remove("hide");


    document.querySelector("#videre3").addEventListener("click", hideNyMail_3);
}

function visKorrekt_3() {
    console.log("visKorrekt_3")

    document.querySelector("#gem3").removeEventListener("click", visKorrekt_3);

    document.querySelector("#game_background3").classList.add("blur");
    document.querySelector("#game_elements3").classList.add("blur");
    document.querySelector("#korrekt3").classList.remove("hide");
    document.querySelector("#videre3").classList.remove("hide");

    points++;

    document.querySelector("#videre3").addEventListener("click", hideNyMail_3);
}

function hideNyMail_3() {
    console.log("hideNyMail_1");

    document.querySelector("#videre3").removeEventListener("click", hideNyMail_3);

    document.querySelector("#game_background3").classList.add("blur");
    document.querySelector("#game_elements3").classList.add("blur");
    document.querySelector("#forkert3").classList.add("hide");
    document.querySelector("#korrekt3").classList.add("hide");
    document.querySelector("#videre3").classList.add("hide");

    gameStatus();

}


//*********** EMAIL_3 SLUT ********************

//************ GAME STATUS *******************

function gameStatus() {

    if (points == 0) {
        visFaengsel();
    }
    if (points == 1) {
        visFaengsel();
    }

    if (points == 2) {
        visPlet();
    }

    if (points == 3) {
        visFri();
    }

}

//************* GAMEOVER ************************

function visFaengsel() {
    console.log("visFaengsel")
    document.querySelector("#faengsel").classList.remove("hide");

    document.querySelector("#spiligen1").addEventListener("click", hideSlut);
}

function visFri() {
    console.log("visFri")
    document.querySelector("#fri").classList.remove("hide");

    document.querySelector("#spiligen2").addEventListener("click", hideSlut);
}

function visPlet() {
    console.log("visPlet")
    document.querySelector("#plet").classList.remove("hide");

    document.querySelector("#spiligen3").addEventListener("click", hideSlut);
}

//************* GAMEOVER SLUT *******************

function hideSlut() {
    document.querySelector("#spiligen1").removeEventListener("click", hideSlut);
    document.querySelector("#spiligen2").removeEventListener("click", hideSlut);
    document.querySelector("#spiligen3").removeEventListener("click", hideSlut);

    document.querySelector("#faengsel").classList.add("hide");
    document.querySelector("#fri").classList.add("hide");
    document.querySelector("#plet").classList.add("hide");
    document.querySelector("#game_background3").classList.add("hide");
    document.querySelector("#game_elements3").classList.add("hide");


    sidenVises();
}
