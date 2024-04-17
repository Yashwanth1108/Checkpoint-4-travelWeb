document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById("username").value;
    const password = document.getElementById("loginPassword").value;

    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem("userData");

    if (!storedUserData) {
      alert("No user registered. Please register first.");
      return;
    }

    const userData = JSON.parse(storedUserData);

    // Retrieve default username and password from JavaScript code
    const defaultUsername = "yash110820@gmail.com";
    const defaultPassword = "11223344";

    // Check if the entered username and password match the registered user's data or the default credentials
    if (
      (userData.email === username && userData.password === password) ||
      (username === defaultUsername && password === defaultPassword)
    ) {
      alert("Login successful!");

      // Store user's name in local storage
      localStorage.setItem("loggedInUser", userData.fullName);

      // Redirect to dashboard or desired page after successful login
      window.location.href = "./index.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });

  // Display user's name in navbar if logged in
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    const navBar = document.getElementById("navbar");
    const userNameElement = document.createElement("span");
    userNameElement.textContent = `Welcome, ${loggedInUser}`;
    navBar.appendChild(userNameElement);
  }
});
