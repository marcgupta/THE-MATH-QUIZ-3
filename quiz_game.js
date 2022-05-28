function send() {
Number1 =document.getElementById("number1").value;
Number2 =document.getElementById("number2").value;


act_ans = parseInt(number1) * parseInt(number2);


question_num = "<h4>" + Number1 + "X" + Number2 + "</h4>";
input_box = "<br>Answer : <input type='number' id = 'input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_num + input_box + check_button;

document.getElementById("output").innerHTML = row;

document.getElementById(number1).innerHTML = "";
document.getElementById(number2).innerHTML = "";
}