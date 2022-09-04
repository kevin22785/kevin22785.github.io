document.addEventListener('DOMContentLoaded', function () {

    var arrInt1 = [5,8,11,17,35];
    var arrInt2 = [1,3,5,7,2,9,10,11,12,13,14,15,16,17,18,19,20];

    for (let i = 0; i < 11; i++) {

        var div = document.createElement('div');
        div.setAttribute('id', "div" + i);
//         level one
        var int1 = arrInt1[Math.floor(Math.random() * arrInt1.length)];
        var int2 = arrInt2[Math.floor(Math.random() * arrInt2.length)];
        var int5 = int1*int2;
        


        var input = document.createElement('input');
        input.setAttribute('id', 'i' + i);
        input.setAttribute('type', 'number');

        const ele = document.createElement("h1");
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
    for(var i = 0; i < 11; i++){
        inputs[i].addEventListener('focusout',function(){
            let p = 11
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
