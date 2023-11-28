import axios from "axios";
import Swal from "sweetalert2";

const api_path = "http://localhost:3000";
// const jsLoginForm = document.querySelector(".jsLoginForm");
const jsLoginBtn = document.querySelector(".jsLoginBtn");

jsLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const userEmail = document.querySelector("#userEmail-login").value;
  const userPassword = document.querySelector("#userPassword-login").value;

  axios
    .post(`${api_path}/login`, {
      email: userEmail,
      password: userPassword,
    })
    .then((res) => {
      console.log(res);
      localStorage.setItem("user", res.data.accessToken);
      Swal.fire({
        icon: "success",
        title: "登入成功",
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
