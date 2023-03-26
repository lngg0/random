let rec = 10;
let n = 10;
let dice = Math.trunc(Math.random() * 100) + 1;

document.querySelector(".schet-text1").innerHTML= n;
document.querySelector(".rec-text1").innerHTML= rec;


function check() {
    console.log(dice);
    let x = document.querySelector(".in-put").value;
    if (x > 100){
        alert("число больше 100")
    } else if (x < 1){
        alert("число меньше 1")
    } else {
        if (x == dice){
            document.querySelector(".text-vopros").innerHTML= dice;
            console.log("win")
            if (rec > (10 - n + 1)) {
                rec = 10 - n + 1;
                console.log("mega-win");
                document.querySelector(".rec-text1").innerHTML= rec;
            }
        } else {
            n  = n - 1;
            document.querySelector(".schet-text1").innerHTML= n;
            if (x < dice) {
                document.querySelector(".pos1").innerHTML = "ЗАГАДОННОЕ ЧИСЛО БОЛЬШЕ ЧЕМ ЧИСЛО ИГРОКА";
            } else {
                document.querySelector(".pos1").innerHTML = "ЗАГАДОННОЕ ЧИСЛО МЕНЬШЕ ЧЕМ ЧИСЛО ИГРОКА";
            }
        }
    }
    document.querySelector(".in-put").value = "";
}

function res() {
    dice = Math.trunc(Math.random() * 100) + 1;
    n = 10;
    document.querySelector(".text-vopros").innerHTML= "?";
    document.querySelector(".schet-text1").innerHTML= 10;
    document.querySelector(".pos1").innerHTML = "ЗАГАДОННОЕ ЧИСЛО БОЛЬШЕ/МЕНЬШЕ ЧЕМ ЧИСЛО ИГРОКА";
}