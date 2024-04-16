// // Login form submission
// const loginForm = document.getElementById("loginForm");
// loginForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   // Get form values
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("loginPassword").value;

//   // Provide default login credentials
//   const defaultEmail = "example@example.com";
//   const defaultPassword = "password123";

//   // Validate username and password
//   if (username === defaultEmail && password === defaultPassword) {
//     alert("Login successful!");
//     // Redirect to dashboard or desired page after successful login
//     window.location.href = "index.html";
//   } else {
//     alert("Invalid username or password. Please try again.");
//   }
// });

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

    // Validate username and password
    if (userData.email === username && userData.password === password) {
      alert("Login successful!");
      // Redirect to dashboard or desired page after successful login
      window.location.href = "./index.html";
    } else {
      alert(
        "Invalid username or password or user not register so regsiter plaese Please try again."
      );
    }

    // Display user's name in navbar if logged in
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const navBar = document.getElementById("navbar");
      const userNameElement = document.createElement("span");
      userNameElement.textContent = `Welcome, ${loggedInUser}`;
      navBar.appendChild(userNameElement);
    }
  });
});
