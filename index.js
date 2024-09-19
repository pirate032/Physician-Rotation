const searchBtn = document.getElementById("search-btn")
const resultsEl = document.getElementById("results-el")


//create an array of physician/last consult pairs
let physicians = [
    "Mohammad Eslami",
    "Ali AbuRahma",
    "Matthew Beasley",
    "Andrew Lee",
    "Catherine Go",
    "Zach AbuRahma"
]

//create an array of diagnoses
// let diagnoses = [
//         "None",
//         "AAA",
//         "Bow Hunter",
//         "Carotid Artery Stenosis",
//         "Carotid Body Tumor",
//         "Celiac Artery Compression Syndrome",
//         "Claudication",
//         "Dissections - Chronic",
//         "DVT",
//         "ESRD - PCS - AVF - AVGS",
//         "Hemodialysis Access",
//         "Iliac Aneurysm",
//         "Lymphedema",
//         "May-Thurner",
//         "Mesenteric - Celiac Stenosis",
//         "Nutcracker Syndrome",
//         "Peripheral Artery Occlusive Disease",
//         "Popliteal Aneurysm",
//         "Pseudoaneurysm",
//         "Raynauds",
//         "Renal Artery Stenosis",
//         "Renal FMD",
//         "Splenic Aneurysm",
//         "Subclavian Steal",
//         "Subclavian Artery Stenosis",
//         "Temporal Arteritis",
//         "Thoracic Aorta Aneurysm",
//         "Vericose Veins",
//         "Vasculitis",
//         "Venous Insufficiency",
//         "Vertebral Artery Stenosis",
//         "Williams Syndrome",   
// ]

//console.log(physicians)


// function render(diagnoses) {
//     let listItems = ""
//     for (let i = 0; i < diagnoses.length; i++) {
//         listItems += `
//             <li>
//                 <a target='_blank' href='${diagnoses[i]}'>
//                     ${diagnoses[i]}
//                 </a>
//             </li>
//         `
//     }
//     diagnosesEl.innerHTML = listItems
// }
function manipulateArray(phys) {
    resultsEl.textContent = "The next available physician is: " + phys
    let tempPhys = physicians.splice(i, 1)  //this should remove the one from the list and return the rest as array
    console.log("Array after splice: " + physicians)
    physicians.push(phys)    //this should push the one removed to the end of array
    console.log("Array after push: ")
    console.log (physicians)
    tempPhys = []
}

searchBtn.addEventListener("click", function() {
    let diag = document.getElementById("test").value
    let phys1 = ""
    
    for (let i=0; i<physicians.length; i++) {
        phys1 = physicians[i]   //name of next physician
        console.log("Before Ifs: " + phys1)
        if (phys1 === "Mohammad Eslami" && diag === "carotidArteryStenosis") {
            manipulateArray(phys1)
         } else if (phys1 === "Mohammad Eslami" && diag === "AAA") {     
            manipulateArray(phys1)       
         } else if (phys1 === "Ali AbuRahma" && diag === "carotidArteryStenosis") {
            manipulateArray(phys1)
         } else if ((phys1 != "Ali AbuRahma" && diag === "carotidArteryStenosis") 
            || (phys1 != "Mohammad Eslami" && diag === "carotidArteryStenosis")
            || (phys1 != "Mohammad Eslami" && diag === "AAA") ){ 
            manipulateArray(phys1)          
         }
    }
} )