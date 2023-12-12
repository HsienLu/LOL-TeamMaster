if (!userIsLogin) location.href = "index.html";
import axios from "axios";
import Swal from "sweetalert2";
import { api_path, userIsLogin, memberId } from "./config";

let avatarSelect;
let rankSelect;
let positionSelect;

const jsAvatarWrap = document.querySelector(".jsAvatarWrap");
const jsRankWrap = document.querySelector(".jsRankWrap");
const jsPositionWrap = document.querySelector(".jsPositionWrap");

const setMemberAccount = document.querySelector("#editMemberAccount");
const newMemberPassword = document.querySelector("#newMemberPassword");
const checkMemberPassword = document.querySelector("#checkMemberPassword");
const setMemberName = document.querySelector("#editMemberName");
const selectActiveMd = document.querySelector(".avatarMd");
const selectHero = document.querySelector("select");
const setMemberHero = document.querySelector("#editMemberHero");
const jsChangeInfoBtn = document.querySelector(".jsChangeInfoBtn");
const jsChangePasswordBtn = document.querySelector(".jsChangePasswordBtn");

axios
  .get(`${api_path}/600/users/${memberId}`, {
    headers: {
      Authorization: `Bearer ${userIsLogin}`,
    },
  })
  .then((res) => {
    setMemberAccount.value = res.data.email;
    setMemberName.value = res.data.username;
    selectActiveMd.src = `./images/avatar/${res.data.avatar}.png`;

    avatarSelect = document.querySelector(`[data-avatar='${res.data.avatar}']`);
    avatarSelect.classList.add("avatarActive");
    avatarSelect = avatarSelect.getAttribute("data-avatar");

    rankSelect = document.querySelector(`[data-rank='${res.data.userRank}']`);
    rankSelect.classList.remove("bg-opacity-20");
    rankSelect = rankSelect.getAttribute("data-rank");

    positionSelect = document.querySelector(
      `[data-position='${res.data.likePosition}']`
    );
    positionSelect.classList.remove("bg-opacity-20");
    positionSelect = positionSelect.getAttribute("data-position");

    selectHero.value = res.data.likeHero;
    setMemberHero.style = `background-image: url(./images/champion/${res.data.likeHero}.jpg)`;
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

  selectActiveMd.src = `./images/avatar/${avatarSelect}.png`;
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

selectHero.addEventListener("change", (e) => {
  setMemberHero.style = `background-image: url(./images/champion/${selectHero.value}.jpg)`;
});

jsChangeInfoBtn.addEventListener("click", (e) => {
  e.preventDefault();

  axios
    .patch(
      `${api_path}/600/users/${memberId}`,
      {
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

jsChangePasswordBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (newMemberPassword.value === checkMemberPassword.value) {
    axios
      .patch(
        `${api_path}/600/users/${memberId}`,
        {
          password: newMemberPassword.value,
        },
        {
          headers: {
            Authorization: `Bearer ${userIsLogin}`,
          },
        }
      )
      .then((res) => {
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
  } else {
    Swal.fire({
      icon: "error",
      title: "新密碼與確認新密碼不相同",
      showConfirmButton: false,
      timer: 2500,
      background: "#060818",
      color: "#D6EEFF",
    });
  }
});
