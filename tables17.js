document.addEventListener('DOMContentLoaded', function () {

    var arrInt2 = [2,3,4,5,6,7,8,9,11,12,12,13,13,14,14,15,16,16,17,17,18,18,19,19,20];

    for (let i = 0; i < 91; i++) {

        var div = document.createElement('div');
        div.setAttribute('id', "div" + i);
//         level one
        var int1 = 17;
        var int2 = arrInt2[Math.floor(Math.random() * arrInt2.length)];
        var int5 = int1*int2;
        


        var input = document.createElement('input');
        input.setAttribute('id', 'i' + i);
        input.setAttribute('type', 'number');

        const ele = document.createElement("h3");
        ele.setAttribute('id', 'q' + i);
//         level one
        ele.innerHTML = int1 + " X " + int2;

        div.appendChild(ele);
        div.appendChild(input)

        document.body.appendChild(div);

        var answer = document.createElement('h1');
        answer.setAttribute('id', 'a' + i);
        answer.setAttribute('hidden', 'hidden');
        answer.innerHTML = int5;
        document.body.appendChild(answer);

    }

    let inputs = document.querySelectorAll("input");
    for(var i = 0; i < 91; i++){
        inputs[i].addEventListener('focusout',function(){
            let p = 91
            for (let i = 0; i < p + 1; i++) {
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
        });
    }
});
