document.addEventListener("DOMContentLoaded",()=>{
    let shortText = document.getElementById('shortText')
    let text = shortText.textContent; 
    shortText.textContent = text.slice(0,30);
    let a = document.createElement("a");
    a.textContent = "Læs mere";
    let a2 = document.createElement("a");
    a2.textContent = "Læs mindre";
    shortText.appendChild(a);
    //shows the #more
    a.addEventListener("click",()=>{
        shortText.textContent = text;
        shortText.appendChild(a2);

    })
    a2.addEventListener("click",()=>{
        shortText.textContent = text.slice(0,30)
        shortText.appendChild(a);
    })
})
