const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const forgotPass = document.querySelector("#forgot-pass");
const signupLink = document.querySelector("form .signup-link a");
document.querySelector("#breadcrumb-holder").innerHTML = "Đăng nhập";
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
  document.querySelector("#breadcrumb-holder").innerHTML = "Đăng ký";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
  document.querySelector("#breadcrumb-holder").innerHTML = "Đăng nhập";
};

signupLink.onclick = () => {
  signupBtn.click();
  return false;
};
