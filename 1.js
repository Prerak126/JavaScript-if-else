var x = prompt("Please enter your age","0");

var age=parseInt(x);

function checkAge(a) {
    if(a<=14){
        alert("Not Allowed");
    }
    else if(a>14 && a<65 && a!==50){
        alert("Regular price");
    }
    else if(a===50)
        alert("Special discount");
}

checkAge(age);