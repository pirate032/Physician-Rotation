const searchBtn = document.getElementById("search-btn")
const resultsEl = document.getElementById("results-el")
const diagnosesEl = document.getElementById("diagnoses-el")


//create an array of physician/last consult pairs
let physicians = [
    ["Mohammad Eslami",0],
    ["Ali AbuRahma",0],
    ["Matthew Beasley",0],
    ["Andrew Lee",0],
    ["Catherine Go",0],
    ["Zach AbuRahma",0]
]

console.log(physicians)
console.log(diagnosesEl)

searchBtn.addEventListener("click", function() {
    console.log(diagnosesEl.nodeValue)
})