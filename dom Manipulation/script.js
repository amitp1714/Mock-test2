let box = document.getElementById("boxmodel")
function changeBox(){
    if(box.style.width === "300px")
    {
    box.style.width = "600px";
    box.style.height = "600px";
    box.style.backgroundColor = "yellow";
    }
    else{
        box.style.width = "300px";
        box.style.height = "300px";
        box.style.backgroundColor = "red";
    }  

}