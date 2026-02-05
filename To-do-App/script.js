let input=document.querySelector("input")
let btn=document.querySelector("button")
let list=document.querySelector("ol")

btn.addEventListener("click",taskhandler)

function taskhandler(){
    let data=input.value ;
    if(data ==""){
        alert("Please enter a task")
        return }
    let li=document.createElement("li")
    li.innerHTML=data
    list.appendChild(li)
    input.value=""

    let delbtn=document.createElement("button")
    delbtn.innerHTML="Delete"
    li.appendChild(delbtn)
    delbtn.addEventListener("click",deletehandler)
    function deletehandler(){
        list.removeChild(li)
    }
}