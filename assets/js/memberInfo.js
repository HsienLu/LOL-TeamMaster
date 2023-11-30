import axios from "axios";
// import Swal from "sweetalert2";
import { api_path, userIsLogin } from "./config";

if (!userIsLogin) location.href = "index.html";
const memberId = localStorage.getItem("userId");
const memberAccount = document.querySelector("#memberAccount");
const memberName = document.querySelector("#memberName");
const memberThumb = document.querySelector("#memberThumb");
const memberAvatar = document.querySelector("#memberAvatar");
const memberRank = document.querySelector("#memberRank");
const memberPosition = document.querySelector("#memberPosition");

axios
  .get(`${api_path}/600/users/${memberId}`, {
    headers: {
      Authorization: `Bearer ${userIsLogin}`,
    },
  })
  .then((res) => {
    memberAccount.value = res.data.email;
    memberName.value = res.data.username;
    memberThumb.textContent = res.data.thumb;
    memberAvatar.src = `../assets/images/${res.data.avatar}.png`;
    memberRank.textContent = res.data.userRank;
    memberPosition.textContent = res.data.likePosition;
  })
  .then((error) => {
    console.log(error);
  });
