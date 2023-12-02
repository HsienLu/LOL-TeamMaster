if (!userIsLogin) location.href = "index.html";
import axios from "axios";
// import Swal from "sweetalert2";
import { api_path, userIsLogin, memberId } from "./config";

const memberAccount = document.querySelector("#memberAccount");
const memberName = document.querySelector("#memberName");
const memberThumb = document.querySelector("#memberThumb");
const memberAvatar = document.querySelector("#memberAvatar");
const memberRank = document.querySelector("#memberRank");
const memberPosition = document.querySelector("#memberPosition");
const memberHero = document.querySelector("#memberHero");

const rankMap = {
  Iron: "鐵",
  Bronze: "銅",
  Silver: "銀",
  Gold: "金",
  Platinum: "白金",
  Emerald: "翡翠",
  Diamond: "鑽石",
  Master: "大師",
  Grandmaster: "宗師",
  Challenger: "菁英",
};

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
    memberAvatar.src = `../assets/images/avatar/${res.data.avatar}.png`;
    memberRank.textContent = rankMap[res.data.userRank];
    memberPosition.textContent = res.data.likePosition;
    memberHero.style = `background-image: url(../assets/images/champion/${res.data.likeHero}.jpg)`;
  })
  .then((error) => {
    console.log(error);
  });
