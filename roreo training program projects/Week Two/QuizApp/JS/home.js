const homeContent1 = document.getElementById("homeContent1");
const homeContent2 = document.getElementById("homeContent2");
const proceedButton = document.getElementById("proceedButton");
let userName = "";

homeContent2.style.display = "none";
console.log(homeContent1);

homeContent1.addEventListener("click", () => {

    homeContent1.style.display = "none";
    homeContent2.style.display = "flex";
    proceedButton.addEventListener("click", () => {
        userName = document.querySelector("#homeContent2 .text").value;
        localStorage.setItem("userName", userName);
        window.location.href = "../HTML/quiz.html";

    });
});

