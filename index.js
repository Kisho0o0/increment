let counter = document.getElementById("entry")
count = 0 
function increment() {
    count = count + 1 
    counter.textContent = count
}

 
 let saved = document.getElementById("entries")

 
 function save() {
    saved.textContent += "  " + count + " -"
    count = 0 
    document.getElementById("entry").innerText = 0
 }

 

