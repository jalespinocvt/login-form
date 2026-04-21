// Function: Simple login validation demo
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user && pass) {
    alert("Login successful for user: " + user);
  } else {
    alert("Please enter both username and password.");
  }
}
