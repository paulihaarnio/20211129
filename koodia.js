
let cources=[]



function add(){
    let cname=document.getElementById("cources").value;
    let num=document.getElementById("num").value;
    let cource={
        cource_name:cname,
        studentNum:num
    }
    cources.push(cource);
}

document.querySelector("button").addEventListener("click", add)

document.getElementById("show").addEventListener("click", näytä)

function näytä(){
    cources.forEach(cource=>{
        let li=document.createElement("li")
        li.textContent="Kurssin nimi: "+cource.cource_name+", "+cource.studentNum+" osallistujaa"
        document.querySelector("ul").appendChild(li)
    })
}


