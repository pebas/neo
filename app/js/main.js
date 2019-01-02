var ime = ["Slobodno!", "Dvojka!", "Trojka!", "A kako promasujes!!!"]

function kosarkaskiPoeni(poen) {
    var answer = ime;
    switch (poen) {
        case 1: 1;
            answer = ime[0];
            break;
        case 2: 2;
            answer = ime[1];
            break;
        case 3: 3;
            answer = ime[2];
            break;
        default:
            answer = ime[3];
            break;
    }
    return answer;

}

console.log(kosarkaskiPoeni(2));

/*
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
*/