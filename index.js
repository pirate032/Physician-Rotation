//import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js"

// import { getDatabase,
//     ref,
//     push,
//     onValue,
//     remove } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js"

// const firebaseConfig = {
//    databaseURL: "https://physicianpicker-default-rtdb.firebaseio.com/"
// }

// const app = initializeApp(firebaseConfig)
// const database = getDatabase(app)
// const referenceInDB = ref(database, "physicians")

const diagnosisEl = document.getElementById("diagnoses-el")
const searchBtn = document.getElementById("search-btn")
console.log(diagnosisEl)
//create an array of physician/last consult pairs
let physicians = [
    ["Mohammad Eslami",False],
    ["Ali AbuRahma",False],
    ["Matthew Beasley",False],
    ["Andrew Lee",False],
    ["Catherine Go",False],
    ["Zach AbuRahma",False]
]

// function setPhysicians () {
//     console.log("creating physician DB")
//     push(referenceInDB, ["Mohammad Eslami",False])
//     push(referenceInDB, ["Ali AbuRahma",False])
//     push(referenceInDB, ["Matthew Beasley",False])
//     push(referenceInDB, ["Andrew Lee",False])
//     push(referenceInDB, ["Catherine Go",False])
//     push(referenceInDB, ["Zach AbuRahma",False])
// }

//onValue (referenceInDB, function(snapshot) {
//     const snapshotDoesExist = snapshot.exists()
//     if (snapshotDoesExist) {
//         const snapshotValues = snapshot.val()
//         /onst leads = Object.values(snapshotValues)
//         render(leads)
//         console.log("snapshot exists")
//     } else {
//         console.log("no snapshot") 
//     }
//    console.log(snapshot)
//})

searchBtn.addEventListener("click", function() {
    //push(referenceInDB, searchEl.value)
    //inputEl.value = "" 
    console.log("search clicked" + diagnosisEl.value)
})

//setPhysicians()
