var x = prompt("Enter a Year","A+");

function grade(a) {
    if(a==="A+"){
        alert("Excellent");
    }

    else if(a==="A"){
        alert("Very Good");
    }

    else if(a==="A-"){
        alert("Good");
    }

    else if(a==="B+"){
        alert("Okay");
    }

    else if(a==="B"){
        alert("Not bad");
    }

    else if(a==="B-"){
        alert("Bad");
    }

    else if(a==="F") {
        alert("Fail");
    }
    else
        alert("So So");
}

grade(x);