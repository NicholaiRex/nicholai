function LoggInn() {
    console.log("you click me")
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let localStorageemail = localStorage.getItem("email");
    let localStoragepassword = localStorage.getItem("password");
    
    if(email === localStorageemail && password === localStoragepassword) {
        window.location.href = "http://127.0.0.1:5501/html/velkommen.html"
    }
    console.log(email, password);
}

function createuser() {
console.log("let me in")

let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repeatpassword = document.getElementById("repeatpassword").value;

    if (password === repeatpassword){
        console.log("Nice")
        localStorage.setItem("emial", email);
        localStorage.setItem("password", password);
        window.location.href = "http://127.0.0.1:5501/html/velkommen.html"
    }

    else{
        alert("Try again, password did not match")
        console.log("Better luck next time")
}

    console.log(email, password, repeatpassword);
}