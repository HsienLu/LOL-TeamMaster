import Swal from "sweetalert2";
import { userIsLogin, memberAvatar } from "./config";

const headerAvatar = document.querySelector(".headerAvatar");
const jsHeaderLogin = document.querySelector(".jsHeaderLogin");
const jsHeaderLogout = document.querySelector(".jsHeaderLogout");

headerAvatar.src = `/assets/images/${memberAvatar}.png`;

if (userIsLogin) {
  jsHeaderLogin.classList.add("d-flex");
  jsHeaderLogout.classList.add("d-none");
} else {
  jsHeaderLogin.classList.add("d-none");
  jsHeaderLogout.classList.add("d-flex");
}

if (userIsLogin) {
  const jsLogout = document.querySelector(".jsLogout");

  jsLogout.addEventListener("click", (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "登出成功",
      showConfirmButton: false,
      timer: 2000,
      background: "#060818",
      color: "#D6EEFF",
    });
    localStorage.clear();
    setTimeout(() => {
      location.href = "index.html";
    }, 2000);
  });
}
