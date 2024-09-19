const searchBtn = document.getElementById("search-btn")
const resultsEl = document.getElementById("results-el")


//create an array of physician/last consult pairs
let physicians = [
    ["Mohammad Eslami",0],
    ["Ali AbuRahma",0],
    ["Matthew Beasley",0],
    ["Andrew Lee",0],
    ["Catherine Go",0],
    ["Zach AbuRahma",0]
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

console.log(physicians)


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

searchBtn.addEventListener("click", function() {
    let diag = document.getElementById("test").value
    let phys = []
    let lastPicked = 0
    //resultsEl.textContent = diag
    for (let i=0; i<physicians.length; i++) {
        console.log(physicians[i])
        phys = physicians[i]
        console.log(phys[1])
        lastPicked = phys[1]
        if (lastPicked == 1) {
             console.log('last picked = 1')
             continue        
         } else if (lastPicked == 0) {             
             console.log("last picked = 0")
             phys.pop()      
             phys.push(1)    
             console.log(phys[0])
             resultsEl.textContent = "The next available physician is: " + phys[0]
             break           
         }
    }
} )