// DOM Elements for Sign-Up/Sign-In
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

//signUpButton.addEventListener('click', () => {
  //  container.classList.add("right-panel-active");
//});

//signInButton.addEventListener('click', () => {
  //  container.classList.remove("right-panel-active");
//});

// Forgot Password Functionality
const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");
const forgotPasswordModal = document.getElementById("forgotPasswordModal");
const closeModal = document.querySelector(".close");
const sendOtpBtn = document.getElementById("sendOtp");
const verifyOtpBtn = document.getElementById("verifyOtp");
const otpSection = document.getElementById("otpSection");
const emailInput = document.getElementById("forgotEmail");
const otpInput = document.getElementById("otpInput");
let generatedOtp = null;


// Export the globalUserData variable
//export let globalUserData = null;

// Export a function to update globalUserData
//function setGlobalUserData(data) {
  //  globalUserData = data;
   // console.log('Global User Data Updated:', globalUserData);
//}



forgotPasswordBtn.addEventListener("click", (e) => {
    e.preventDefault();
    forgotPasswordModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    clearForgotPasswordInputs();
    forgotPasswordModal.style.display = "none";
});

sendOtpBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !email.match(emailPattern)) {
        alert("Please enter a valid email address!");
        return;
    }

    generatedOtp = Math.floor(100000 + Math.random() * 900000);
    console.log("Generated OTP:", generatedOtp);
    alert(`OTP sent to ${email}`);
    otpSection.style.display = "block";
});

verifyOtpBtn.addEventListener("click", () => {
    const enteredOtp = otpInput.value;

    if (enteredOtp == generatedOtp) {
        alert("OTP Verified! You can now reset your password.");
        clearForgotPasswordInputs();
        forgotPasswordModal.style.display = "none";
    } else {
        alert("Invalid OTP. Try again.");
    }
});

function clearForgotPasswordInputs() {
    otpSection.style.display = "none";
    emailInput.value = "";
    otpInput.value = "";
    generatedOtp = null;
}

// Sign-In Form Submission
document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (!email || !password) {
        alert("Please fill in both email and password.");
        return;
    }

    const jsonData = { email, password };

    fetch('/user/iamentrepreneur', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.status === 202) {
            sessionStorage.setItem("userdata", JSON.stringify(data.data));
            window.location.href = 'user-dashboard2.html';
        } else {
            alert(`Error: ${data.message || 'Login failed'}`);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Login failed. Please check your credentials and try again.');
    });
});
