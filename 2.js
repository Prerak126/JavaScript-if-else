var x = prompt("Please enter your age","0");

var age=parseInt(x);

function checkAge(a) {
    if(a===14){
        alert("coupon 1");
    }
    else if(a===21){
        alert("coupon 2");
    }
    else if(a===30)
        alert("coupon 3");

    else if(a===50)
        alert("coupon 4");
    else
        alert("No coupon")
}

checkAge(age);