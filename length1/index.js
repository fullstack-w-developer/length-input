const input1 = document.getElementById("input1");
const result = document.getElementById("result");

input1.onkeyup = ()=>{
    let input_value = input1.value.length;
    result.innerText = "length :" + input_value;
}