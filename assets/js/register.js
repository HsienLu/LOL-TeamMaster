import axios from "axios";
import validate from "validate.js";
import Swal from "sweetalert2";

let hasError = false;
const jsRegisterForm = document.querySelector(".jsRegisterForm");
const createAccountBtn = document.querySelector(".jsCreateAccountBtn");

const constraints = {
  Email: {
    presence: {
      allowEmpty: false,
      message: "必填",
    },
  },
  Password: {
    presence: {
      allowEmpty: false,
      message: "請輸入 8-16 位密碼",
    },
    length: {
      minimum: 8,
      maximum: 16,
      message: "請輸入 8-16 位密碼1",
    },
  },
  userName: {
    presence: {
      allowEmpty: false,
      message: "必填",
    },
  },
};

createAccountBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const alertMessages = document.querySelectorAll(".alertMessage p");

  alertMessages.forEach((item) => {
    item.textContent = "";
  });

  hasError = 0;

  const userEmail = document.querySelector("#userEmail-register").value;
  const userPassword = document.querySelector("#userPassword-register").value;
  const userName = document.querySelector("#userName-register").value;

  const errors = validate(jsRegisterForm, constraints);

  if (errors) {
    Object.keys(errors).forEach((keys) => {
      document.querySelector(`[data-message="${keys}"]`).textContent =
        errors[keys];
    });
    hasError = 1;
  }

  if (hasError) return;

  axios
    .post(`http://localhost:3000/register`, {
      email: userEmail,
      password: userPassword,
      username: userName,
      createdAt: Date.now(),
      avatar: "null",
      thumb: 0,
      userRank: "null",
      likePosition: "MID",
      likeHero: "null",
      valid: true,
    })
    .then((res) => {
      jsRegisterForm.reset();
      console.log(res);
      Swal.fire({
        icon: "success",
        title: "註冊成功",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        location.href = "memberCentre.html";
      }, 1500);
    })
    .catch((error) => {
      console.log(error);
    });
});
