document.addEventListener('DOMContentLoaded', function () {

var arrInt1 = [5,8,11,17,35];
var arrInt2 = [1,3,5,7,2,9,10,11,12,13,14,15,16,17,18,19,20];
var context = [];

for (let i = 0; i < 11; i++) {
    var int1 = arrInt1[Math.floor(Math.random() * arrInt1.length)];
    var int2 = arrInt2[Math.floor(Math.random() * arrInt2.length)];
    var int3 = arrInt1[Math.floor(Math.random() * arrInt1.length)];
    var int4 = arrInt2[Math.floor(Math.random() * arrInt2.length)];
    var int5 = int1*int2+int3*int4;

    const ele = document.createElement("h1");
    ele.setAttribute('id', 'q' + i);
    const node = document.createTextNode(int1 + " X " + int2 + " + " + int3 + " X " + int4);
    ele.appendChild(node);
    document.body.appendChild(ele);

    var input = document.createElement('input');
    input.setAttribute('id', 'i' + i);
    document.body.appendChild(input);

    var answer = document.createElement('h1');
    answer.setAttribute('id', 'a' + i);
    answer.setAttribute('hidden', 'hidden');
    var node1 = document.createTextNode(int5);
    answer.appendChild(node1);
    document.body.appendChild(answer);

    const br = document.createElement("hr");
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");

    context.push([int1, int2, int3, int4, int5])
}

document.body.style.backgroundColor = "rgb(75, 75, 75)";

let inputs = document.querySelectorAll("input");
inputs.style.padding = "10px"
for(var i = 0; i < 11; i++){
    inputs[i].addEventListener('focusout',function(){
        let p = 10
        for (let i = 1; i < p + 1; i++) {
            console.log(document.getElementById("i" + i).value);
            console.log(document.getElementById("a" + i).innerHTML);
            console.log("...")
            if (document.getElementById("i" + i).value == document.getElementById("a" + i).innerHTML) {
                document.getElementById("i" + i).style.backgroundColor = "green";
            } else if (document.getElementById("i" + i).value == "") {
                document.getElementById("i" + i).style.backgroundColor = "white";
            } else {
                document.getElementById("i" + i).style.backgroundColor = "red";
            }
    }  
    })
}

})
