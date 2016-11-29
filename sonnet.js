var theSonnet = document.getElementById("sonnet").innerHTML;
console.log(theSonnet);

console.log("orphans", theSonnet.indexOf("orphans"))

var numOfCharacters = theSonnet.length
console.log("numOfCharacters", numOfCharacters)

newSonnet = theSonnet.replace("winter", "yuletide").split(" the ").join(" a large ")
console.log(newSonnet)

document.getElementById("sonnet").innerHTML = newSonnet