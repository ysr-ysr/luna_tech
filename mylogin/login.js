let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");

let btn = document.getElementById("button");

btn.addEventListener("click", () => {

    if (username.value === "" || password.value === "" || email.value === "") {

        username.style.border = "2x solid rgb(255, 132, 132)";
        password.style.border = "2px solid rgb(255, 132, 132)";
        email.style.border = "2px solid rgb(255, 132, 132)";

        return false;
    }



    

    if (username.value === "youssra" && password.value === "1234" && email.value === "youssrazahafy@gmail.com") {
        window.location.href = "../index.html";
        window.alert("Welcome " + username.value + " , you are logged in successfully :)");
    
        
    } else {
        alert("Womp Womp ,you are not logged in :'(");
    }
});

