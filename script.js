let input = document.querySelector("#input");
let btn = document.querySelectorAll('button');

let answer ="";
let arr = Array.from(btn);

arr.forEach(function(event){
    event.addEventListener("click",function(e){
        let checkValue = e.target.innerText;

        switch (checkValue) {
            case "=":
                answer = eval(answer)
                input.value = answer;
                break;
            case "C":
                answer = "";
                input.value =answer;
                break;
            case "Del":
                answer= answer.substring(0, answer.length-1);
                input.value = answer;
                break;
            default:
                answer += e.target.innerText;
                input.value = answer
                break;
        }
        
    })
})