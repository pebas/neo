var imenaZaPoene = ["Slobodno!", "Dvojka!", "Trojka!", "A kako promasujes!!!"]

function kosarkaskiPoeni(poen) {
    var vratiIme = imenaZaPoene;
    switch (poen) {
        case 1: 1;
            vratiIme = imenaZaPoene[0];
            break;
        case 2: 2;
            vratiIme = imenaZaPoene[1];
            break;
        case 3: 3;
            vratiIme = imenaZaPoene[2];
            break;
        default:
            vratiIme = imenaZaPoene[3];
            break;
    }
    return vratiIme;
}

console.log(kosarkaskiPoeni(1));

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1: "Bob";
            answer = "Marley";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gamma";
            break;
        case 4:
            answer = "Delta";
            break;
        default:
            answer = "Nothing selected!";
            break;
    }
    return answer;
}

console.log(caseInSwitch("Bob"));