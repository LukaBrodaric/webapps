function camelize(str) {

    let arr = str.split(" ");
    return arr.map(function (words) {
        return words.charAt(0).toUpperCase() + words.substring(1);
    }).join("");
}

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));