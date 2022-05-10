function C1Q1() {
    alert("Welcome to Javascript alerts");
}
function C1Q2() {
    alert("Error! Please enter a valid address");
}
 function C1Q3() {
    alert("Welcome to JS Land" + "\b" + "Happy Coding");
}
function C1Q4() {
    alert("Welcome to JS Land...");
    alert("Happy Coding");
}
function C1Q5() {
    //console.log(alert("i can run JS thorugh browser's console"))
}
function C2Q1() {
    var userName = ;
}
function C2Q2() {
    var myName = "Sunaira Shaikh";
}
function C2Q3() {
    var message;
    message = "Hello World";
    alert(message);
}
function C2Q4() {
    var name = "Sunaira";
    var age = 29;
    var course = "Web And App Development";
    alert(name);
    alert(age);
    alert(course);
}
function C2Q5() {
    let food = "PIZZA";
    for (let i = 5; i >= 1; i--) {
        for (let k = 0; k < i; k++) {
            document.write(food[k]);
        }
        document.write("<br>");

    }
    function C2Q6() {
        var email = "sunairashaikh@gmail.com";
        alert("my Email is " + email);
    
    }
    function C2Q7() {
        let book = "A smarter way to learn javascript";
        alert("i m trying to learn from the book which is " + book);
    
    }
    function C2Q8() {
        document.write("Yah! i can write on the browser through javascript");
    }
    function C2Q9() {
        let string = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
        alert(string);
        document.write(string);
    
    }
    function C3q1() {
        let a = 29;
        alert("I'm " + a + " years old")
    }
    function C3q2() {
        // let username = prompt("Enter your visits");
        // let visit;
    }
    function C3q3() {
        var birthYear = 1991;
        document.write("my birth year is 1991 <br> data type of declared variable is number");
    }
    function C3q4() {
        let myname = prompt("Enter your name");
        let product = prompt("Enter your product title");
        let quantity = prompt("Enter the quantity");
        alert(myname + " ordered " + quantity + " " + product);
    }
    function C4q1(){
        var variable1 = "Hello, World";
        var variable2 = "check...";
        var variable3 = 00;
    }
    function C4q3() {
        document.write("<h1>Rules For naming JS Variables</h1>");
        document.write("variable can only contain letters, digits, $, _. For Example : $an_1stVAriable <br> variable must begin with a letters, $, and _, For example : $name, _name, name <br> variable names ara case sensitive <br> variables name should not be JS Keywords");
    
    }
    function C5q1() {
    let a = Number(prompt("Enter the first number"));
    let b = Number(prompt("Enter the Second number"));
    let c = a + b;
    alert("sum of " + a + " + " + b + " is " + c);
}
function C5q2a() {
    let a = Number(prompt("Enter the first number"));
    let b = Number(prompt("Enter the Second number"));
    let c = a - b;
    alert("Subtract of " + a + " - " + b + " is " + c);
}

function C5q2b() {
    let a = Number(prompt("Enter the first number"));
    let b = Number(prompt("Enter the Second number"));
    let c = a * b;
    alert("product of " + a + " * " + b + " is " + c);
} function C5q2c() {
    let a = Number(prompt("Enter the first number"));
    let b = Number(prompt("Enter the Second number"));
    let c = a / b;
    alert("devision of " + a + " / " + b + " is " + c);

}
function C52d() {
    let a = Number(prompt("Enter the first number"));
    let b = Number(prompt("Enter the Second number"));
    let c = a % b;
    alert("modulus of " + a + " % " + b + " is " + c);

}
function C5q3() {

    var a;
    document.write("Value after variable declaration is " + a);
    a = 5;
    document.write("<br> Initial Value " + a);
    a++;
    document.write("<br>  Value after increment  " + a);
    a = a + 7;
    document.write("<br>  Value after addition is " + a);
    a--;
    document.write("<br>  Value after decrement  is " + a);
    a = a % 3;
    document.write("<br>  Remainder  is " + a);

}
function C5q4() {
    var cost = 600;
    var num = prompt("Enter no of tickets you want:");
    document.write("Total cost to buy " + num + " tickets to a movie is " + num * cost + " PKR")
}
function C5q5() {
    var number = parseInt(prompt('Enter an integer: '));

    for (let i = 1; i <= 10; i++) {

        const result = i * number;

        document.write(`${number} x ${i} = ${result} <br>`);
    }
    function C5q6() {
        var C = parseInt(prompt('Enter Celsius Temp : '));
        var F = parseInt(prompt('Enter Fahrenheit Temp : '));
        var cToFar = C * 9 / 5 + 32;
        var fToCel = (F - 32) * 5 / 9;
        alert(`${C} is ${cToFar}F
        ${F} is ${fToCel}C`)
    
    }
    function C5q7() {
        var item1 = parseInt(prompt('Enter price of item 1 : '));
        var quantity1 = parseInt(prompt('Enter quantity of item 1 : '));
        var item2 = parseInt(prompt('Enter price of item 2 : '));
        var quantity2 = parseInt(prompt('Enter quantity of item 2 : '));
        document.write("<h1>Shopping Cart</h1>");
        document.write("<br>price of item 1 is " + item1);
        document.write("<br>Quantity of item 1 is " + quantity1 * item1);
        document.write("<br>price of item 2 is " + item2);
        document.write("<br>Quantity of item 1 is " + quantity2 * item2);
        var total = (quantity1 * item1) + (quantity2 * item2);
        document.write("<br>Total Cost is  " + total);
    
    
    }
    function C5q8() {
        var OM = prompt("Enter obt marks");
        var TM = prompt("Enter total marks;");
        document.write("<h1>MarkSheet</h1>");
        document.write("<br>Obtained marks is " + OM);
        document.write("<br>Total marks is " + TM);
        document.write("<br>Percentage is " + ((OM / TM) * 100));
    
    
    }
    function C5q9() {
        var dollar = prompt("enter dollars");
        var riyal = prompt("Enter riyals:");
        document.write(`Total currency in PKR is : ${(dollar * 180.50) + (riyal * 48.11)}`);
    }
    function C5q10() {
        var a = (5 * 10) / 2;
        alert(a);
    }
    function C5q11() {
        var current = prompt("2022:");
        var dob = prompt("21.12.1991");
        document.write(`<h1>Age Calculator<h1> Current Year: ${current} <br> Birth Year: ${dob} <br> Your Age: ${current - dob}`)
    }
    function C5q12() {
        var radius = prompt("Enter radius:");
        var circumference = 2 * 3.141 * radius;
        var area = 3.141 * (radius * radius);
        document.write(`<h1>Geometrizer<h1> Radius of Circle: ${radius} <br> Circumference is : ${circumference} <br> Area is : ${area}`)
    
    }

