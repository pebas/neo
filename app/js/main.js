let myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
}

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Your object have no such property."
    }
}

console.log(checkObj("gift"));