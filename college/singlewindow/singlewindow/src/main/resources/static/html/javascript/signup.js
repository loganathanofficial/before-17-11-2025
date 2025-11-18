// 🌙 Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        document.body.style.background = "linear-gradient(135deg, #000, #222)";
    } else {
        document.body.style.background = "linear-gradient(135deg, #141e30, #243b55)";
    }
}

// 🌟 Form Submission
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    // Create JSON object
    const userData = { name, email, password, role };

    // Send data to API
    fetch("http://localhost:8080/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        alert("User registered successfully!");
        console.log("Success:", data);
    })
    .catch(error => {
        alert("Error registering user.");
        console.error("Error:", error);
    });
}); 