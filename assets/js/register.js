import axios from "axios";
import validate from "validate.js";
import Swal from "sweetalert2";
import { api_path, userIsLogin } from "./config";

let hasError = false;
const jsRegisterForm = document.querySelector(".jsRegisterForm");
const createAccountBtn = document.querySelector(".jsCreateAccountBtn");

const constraints = {
  Email: {
    presence: {
      allowEmpty: false,
      message: "不可空白",
    },
  },
  Password: {
    presence: {
      allowEmpty: false,
      message: "不可空白",
    },
    length: {
      minimum: 8,
      maximum: 16,
      message: "需要 8-16 碼",
    },
  },
  userName: {
    presence: {
      allowEmpty: false,
      message: "不可空白",
    },
  },
};

if (!userIsLogin) {
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

    if (hasError) {
      Swal.fire({
        icon: "error",
        title: "資料有錯誤",
        showConfirmButton: false,
        timer: 1500,
        background: "#060818",
        color: "#D6EEFF",
      });
      return;
    }

    axios
      .post(`${api_path}/register`, {
        email: userEmail,
        password: userPassword,
        username: userName,
        createdAt: Date.now(),
        avatar: "img-avatar-01.png",
        thumb: 0,
        userRank: "bronze",
        likePosition: "MID",
        likeHero: "艾希",
        valid: true,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "註冊成功",
          showConfirmButton: false,
          timer: 2000,
          background: "#060818",
          color: "#D6EEFF",
        });
        setTimeout(() => {
          location.href = "index.html";
        }, 2000);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.response.data,
          showConfirmButton: false,
          timer: 2500,
          background: "#060818",
          color: "#D6EEFF",
        });
      });
  });
}
