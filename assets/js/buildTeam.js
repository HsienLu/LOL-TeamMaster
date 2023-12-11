import axios from "axios";
import Swal from "sweetalert2";
import { api_path, localhost, memberId, userIsLogin } from "./config";
if (!userIsLogin) {
  Swal.fire({
    title: "請先登入會員",
    icon: "warning",
  }).then(() => {
    console.log("Wait");
    location.href = "index.html";
  });
}

const buildTeamName = document.querySelector("#buildTeamName");
const buildTeamTime = document.querySelector("#buildTeamTime");
const buildTeamTagGroup = document.querySelectorAll(
  "#buildTeamTagGroup .buildTeamTag"
);
const noticeGroup = document.querySelectorAll("#noticeGroup .messageItem");
let idc = memberId;
let buildTeamNameText = "";
let buildTeamTimeText = "";
let buildTeamTagGroupText = "";
let noticeGroupText = ["", "", "", "", ""];
const userlogin = async () => {
  let data = axios.get(`${api_path}/users/${idc}`);

  return data;
};
// let data = await userlogin();
// data = data.data;
console.log(data);
buildTeamName.addEventListener("input", (e) => {
  buildTeamNameText = e.target.value;
});
buildTeamTime.addEventListener("input", (e) => {
  buildTeamTimeText = e.target.value;
});
buildTeamTagGroup.forEach((v) => {
  v.addEventListener("click", (e) => {
    let buildTeamTagList = [...v.classList];
    let checked = buildTeamTagList.find((v) => {
      console.log(v);
      return v === "buildTeamTagActive";
    });
    console.log(checked);
    if (checked === undefined) {
      buildTeamTagGroup.forEach((v) => {
        v.classList.remove("buildTeamTagActive");
      });

      v.classList.add("buildTeamTagActive");
    } else {
      v.classList.remove("buildTeamTagActive");
    }
    buildTeamTagGroupText = v.dataset.rank;
  });
});

noticeGroup.forEach((v, i) => {
  v.addEventListener("input", (e) => {
    console.log(e.target.value);
    noticeGroupText[i] = e.target.value;
  });
});
let posHash = 0;
let posArr = [0, 0, 0, 0, 0];
switch (data.likePosition) {
  case "TOP":
    posHash = 0;
    break;
  case "JG":
    posHash = 1;
    break;
  case "MID":
    posHash = 2;
    break;
  case "AD":
    posHash = 3;
    break;
  case "SUP":
    posHash = 4;
    break;
}
posArr[posHash] = parseInt(idc);
console.log(posHash);
addTeamButtom.addEventListener("click", () => {
  let teamDetalis = {
    userId: idc,
    teamName: buildTeamNameText,
    playTime: buildTeamTimeText,
    rankLimt: buildTeamTagGroupText,
    teamNotice: noticeGroupText,
    teamMerberId: posArr,
    createAt: `${new Date()}`,
  };
  axios.post("http://localhost:3000/teams", teamDetalis).then((res) => {
    console.log(res);
    Swal.fire({
      title: "建立隊伍成功",
      icon: "success",
    }).then(() => {
      location.href = `${localhost}/LOL-TeamMaster/pages/teamList.html`;
    });
  });
});
