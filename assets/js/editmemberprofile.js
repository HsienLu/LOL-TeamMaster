import axios from "axios";
import Swal from "sweetalert2";
import { api_path, userIsLogin } from "./config";

const memberId = localStorage.getItem("userId");

let avatarSelect;
let rankSelect;
let positionSelect;
const jsAvatarWrap = document.querySelector(".jsAvatarWrap");
const jsRankWrap = document.querySelector(".jsRankWrap");
const jsPositionWrap = document.querySelector(".jsPositionWrap");

const setMemberAccount = document.querySelector("#editMemberAccount");
const setMemberPassword = document.querySelector("#changeMemberPassword");
const changeMemberPassword = document.querySelector("#checkMemberPassword");
const setMemberName = document.querySelector("#editMemberName");
const selectActiveMd = document.querySelector(".avatarMd");
const selectHero = document.querySelector("select");
const jsChengeInfoBtn = document.querySelector(".jsChengeInfoBtn");

axios
  .get(`${api_path}/600/users/${memberId}`, {
    headers: {
      Authorization: `Bearer ${userIsLogin}`,
    },
  })
  .then((res) => {
    setMemberAccount.value = res.data.email;
    setMemberName.value = res.data.username;
    selectActiveMd.src = `../assets/images/${res.data.avatar}.png`;
    document
      .querySelector(`[data-avatar='${res.data.avatar}']`)
      .classList.add("avatarActive");
    document
      .querySelector(`[data-rank='${res.data.userRank}']`)
      .classList.remove("bg-opacity-20");
    document
      .querySelector(`[data-position='${res.data.likePosition}']`)
      .classList.remove("bg-opacity-20");
    selectHero.value = res.data.likeHero;
  })
  .catch((error) => {
    console.log(error);
  });

jsAvatarWrap.addEventListener("click", (e) => {
  const selectActiveImg = document.querySelectorAll("img");
  let avatarClass = e.target.getAttribute("class");

  if (avatarClass !== "avatarSmall pointer") {
    return;
  }

  selectActiveImg.forEach((item) => {
    if (item.classList[2] === "avatarActive")
      item.classList.remove("avatarActive");
  });

  avatarSelect = e.target.getAttribute("data-avatar");
  e.target.classList.add("avatarActive");

  selectActiveMd.src = `../assets/images/${avatarSelect}.png`;
});

jsRankWrap.addEventListener("click", (e) => {
  const selectActiveRank = document.querySelectorAll("[data-rank]");
  let badgeClass = e.target.getAttribute("class");

  if (badgeClass !== "badge bg-white text-dark fs-6 pointer bg-opacity-20") {
    return;
  }

  selectActiveRank.forEach((item) => {
    if (item.classList[5] !== "bg-opacity-20")
      item.classList.add("bg-opacity-20");
  });

  rankSelect = e.target.getAttribute("data-rank");
  e.target.classList.remove("bg-opacity-20");
});

jsPositionWrap.addEventListener("click", (e) => {
  const selectActivePosition = document.querySelectorAll("[data-position]");
  let badgeClass = e.target.getAttribute("class");

  if (badgeClass !== "badge bg-white text-dark fs-6 pointer bg-opacity-20") {
    return;
  }

  selectActivePosition.forEach((item) => {
    if (item.classList[5] !== "bg-opacity-20")
      item.classList.add("bg-opacity-20");
  });

  positionSelect = e.target.getAttribute("data-position");
  e.target.classList.remove("bg-opacity-20");
});

jsChengeInfoBtn.addEventListener("click", (e) => {
  e.preventDefault();

  axios
    .patch(
      `${api_path}/600/users/${memberId}`,
      {
        // password: changeMemberPassword.value,
        username: setMemberName.value,
        avatar: avatarSelect,
        userRank: rankSelect,
        likePosition: positionSelect,
        likeHero: selectHero.value,
      },
      {
        headers: {
          Authorization: `Bearer ${userIsLogin}`,
        },
      }
    )
    .then((res) => {
      localStorage.setItem("userAvatar", avatarSelect);
      Swal.fire({
        icon: "success",
        title: "修改成功",
        showConfirmButton: false,
        timer: 2000,
        background: "#060818",
        color: "#D6EEFF",
      });
      setTimeout(() => {
        location.href = "memberCenter.html";
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
