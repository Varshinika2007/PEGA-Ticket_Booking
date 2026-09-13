function registerUser(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const password = document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    if (password !== confirmPassword) {

        alert("Passwords do not match!");

        return;
    }


    localStorage.setItem("userName", name);


    alert("Registration successful!");


    window.location.href = "login.html";
}



function loginUser(event) {

    event.preventDefault();


    const email =
        document.getElementById("loginEmail").value;


    localStorage.setItem("userEmail", email);


    alert("Login successful!");


    window.location.href = "index.html";
}