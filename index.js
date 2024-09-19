import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import { getDatabase,
    ref,
    push,
    onValue,
    remove } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js"

const firebaseConfig = {
   databaseURL: "https://physicianpicker-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")

const diagnosisEl = document.getElementById("diagnoses-el").value
const searchBtn = document.getElementById("search-btn")
console.log(diagnosisEl)

onValue(referenceInDB, function(snapshot) {
    const snapshotDoesExist = snapshot.exists()
    if (snapshotDoesExist) {
        const snapshotValues = snapshot.val()
        const leads = Object.values(snapshotValues)
        render(leads)
    }
})

searchBtn.addEventListener("click", function() {
    //push(referenceInDB, searchEl.value)
    //inputEl.value = "" 
})