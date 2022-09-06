document.addEventListener('DOMContentLoaded', function () {

    var arrInt1 = [5,8,11,17,35];
    var arrInt2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    for (let i = 0; i < 91; i++) {

        var div = document.createElement('div');
        div.setAttribute('id', "div" + i);

//         level three
        var int1 = arrInt1[Math.floor(Math.random() * arrInt1.length)];
        var int2 = arrInt2[Math.floor(Math.random() * arrInt2.length)];
        var int3 = arrInt1[Math.floor(Math.random() * arrInt1.length)];
        var int4 = arrInt2[Math.floor(Math.random() * arrInt2.length)];
        var int5 = arrInt1[Math.floor(Math.random() * arrInt1.length)];
        var int6 = arrInt2[Math.floor(Math.random() * arrInt2.length)];
        var int7 = int1*int2+int3*int4+int5*int6;

        var input = document.createElement('input');
        input.setAttribute('id', 'i' + i);
        input.setAttribute('type', 'number');

        const ele = document.createElement("h3");
        ele.setAttribute('id', 'q' + i);

        ele.innerHTML = int1 + " X " + int2 + " + " + int3 + " X " + int4 + " + " + int3 + " X " + int4;

        div.appendChild(ele);
        div.appendChild(input)

        document.body.appendChild(div);

        var answer = document.createElement('h1');
        answer.setAttribute('id', 'a' + i);
        answer.setAttribute('hidden', 'hidden');
        answer.innerHTML = int7;
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
