// Function: Simple login validation demo
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  console.log("Username:", user);
  console.log("Password:", pass);
  if (user && pass) {
    alert("Login successful for user: " + user);
  } else {
    alert("Please enter both username and password.");
  }
}
