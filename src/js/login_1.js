const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const solid_btn = document.querySelector(".btn.solid");
const btn_sign_up = document.querySelector(".btn_sign_up");

const container = document.querySelector(".container");



function openSecondPage() {
    // Logic to open the second page goes here
    window.location.href = 'src/home.html';
    console.log("Opening the home page...");
  }

  const  loginBtn = document.getElementById('login-btn');

  loginBtn.addEventListener('click', openSecondPage);

// solid_btn.addEventListener("click",()  => {
// //   container.classList.add("sign-up-mode");
//   openSecondPage();

// });

btn_sign_up.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  solid_btn.classList.remove("sign-up-mode");
});


  