document.addEventListener("DOMContentLoaded", () => {
  const loginRadio = document.getElementById("login");
  const signupRadio = document.getElementById("signup");
  const signupLink = document.querySelector(".signup-link a");
  const formInner = document.querySelector(".form-inner");

  signupRadio.onclick = () => {
    formInner.style.transform = "translateX(-50%)";
  };

  loginRadio.onclick = () => {
    formInner.style.transform = "translateX(0%)";
  };

  signupLink.onclick = (e) => {
    e.preventDefault();
    signupRadio.checked = true;
    formInner.style.transform = "translateX(-50%)";
  };
});
