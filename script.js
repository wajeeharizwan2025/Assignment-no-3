document.getElementById("signupForm").addEventListener("submit", function(event){
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let message = document.getElementById("message");

  // Validation
  if(name === "" || email === "" || password === "" || confirmPassword === ""){
    message.style.color = "red";
    message.innerText = "Please fill all fields!";
    return;
  }

  if(password.length < 6){
    message.style.color = "red";
    message.innerText = "Password must be at least 6 characters long!";
    return;
  }

  if(password !== confirmPassword){
    message.style.color = "red";
    message.innerText = "Passwords do not match!";
    return;
  }

  // Store user data (in local storage)
  let user = {
    name: name,
    email: email,
    password: password
  };
  
  localStorage.setItem("userData", JSON.stringify(user));

  message.style.color = "green";
  message.innerText = "Signup Successful!";

  // Clear input fields
  document.getElementById("signupForm").reset();
});
