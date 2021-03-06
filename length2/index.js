let textarea = document.getElementById("textarea1");
const btn1 = document.getElementById("btn1");
const result = document.querySelector(".result");

btn1.onclick = ()=>{
        let textarea_value = textarea.value.length;
        result.innerHTML =  " " + textarea_value
    
    
}