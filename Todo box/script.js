let text = document.querySelector(".inputs input");
let inputData = document.querySelector('.input_data');
function add_data(){

    if(text.value == ''){
        alert("Please enter you task ");
    }
    else{

        let li = document.createElement("p");
        li.innerHTML = text.value.toUpperCase();
        inputData.appendChild(li);

    }
     text.value=""
}

