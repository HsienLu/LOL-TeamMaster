const buildTeamName = document.querySelector("#buildTeamName");
const buildTeamTime = document.querySelector("#buildTeamTime");
const buildTeamTagGroup = document.querySelectorAll(
  "#buildTeamTagGroup .buildTeamTag"
);
const noticeGroup = document.querySelectorAll("#noticeGroup .messageItem");

let buildTeamNameText = "";
let buildTeamTimeText = "";
let buildTeamTagGroupText = "";
let noticeGroupText = ["", "", "", "", ""];

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
addTeamButtom.addEventListener("click", () => {
  let teamDetalis = {
    teamName: buildTeamNameText,
    playTime: buildTeamTimeText,
    rankLimt: buildTeamTagGroupText,
    teamNotice: noticeGroupText,
  };
  console.log(buildTeamNameText);
  console.log(buildTeamTimeText);
  console.log(buildTeamTagGroupText);
  console.log(noticeGroupText);
  console.log(teamDetalis);
});
