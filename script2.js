document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const fullName = document.getElementById("fullname").value;
    const contact = document.getElementById("contact").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const gender = document.getElementById("gender").value;

    // Validate name
    if (!/^[A-Za-z\s]+$/.test(fullName)) {
      alert("Name must contain only alphabets and spaces");
      return;
    }

    // Validate telephone number
    if (!/^\d+$/.test(contact)) {
      alert("Contact must contain only numbers");
      return;
    }

    // Store user data in local storage
    const userData = {
      fullName,
      contact,
      dob,
      email,
      password,
      gender,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    // Alert for successful registration
    alert("Registration successful! You can now log in.");

    // Redirect to login page
    window.location.href = "./login1.html";
  });

  // Adding input event listener for full name validation
  const fullNameInput = document.getElementById("fullname");
  fullNameInput.addEventListener("input", function () {
    const nameValue = fullNameInput.value;
    const nameRegex = /^[A-Za-z\s]+$/;
    const isValid = nameRegex.test(nameValue);
    if (!isValid) {
      fullNameInput.setCustomValidity(
        "Name must contain only alphabets and spaces"
      );
    } else {
      fullNameInput.setCustomValidity("");
    }
  });
});
