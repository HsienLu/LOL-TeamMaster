import { api_path, userIsLogin } from "./config";
let id = 1;
const fetchDataAll = async (id) => {
  try {
    const teamDetails = await axios.get(`${api_path}/teams/${id}?_expand=user`);
    const memberDetails = await axios.get(`${api_path}/teamsMember/${id}`);
    console.log(teamDetails.data);
    console.log(memberDetails.data);
    console.log(teamDetails.data.teamNotice);
    let noticComponent = teamDetails.data.teamNotice
      .map((v) => {
        return `<li class="fs-5 fs-lg-4">${v}</li>`;
      })
      .join("");

    let memberComponent = memberDetails.data
      .map((v) => {
        return `
    <li>
        <div
          class="flag greenShadow d-flex justify-md-content-start flex-md-column align-items-center bg-dark bg-opacity-60">

              ${
                v.id === teamDetails.data.userId
                  ? `<i class="fa-solid fa-crown d-none d-md-block text-white fs-3 mt-lg-10"></i>`
                  : `<i class="fa-solid fa-crown d-none d-md-block text-dark fs-3 mt-lg-10 opcitit-0"></i>`
              }
     
          <div class="d-flex flex-column align-items-center">
            <img class="playerIcon mt-lg-6 mb-3 mb-md-0" src="../assets/images/avatar/${
              v.avatar
            }.png" alt="member" />
            <h4 class="fs-5 fs-md-4 mt-lg-6">${v.username}</h4>
          </div>
          <div class="d-flex d-md-block flex-column justify-content-between align-items-center ms-15 ms-md-0">
            <div class="parallelogramRank mt-lg-6 mb-4 mb-md-0">
              <div class="parallelogramContent teamCardRankBg"
                style="background-image: url(../assets/images/ranking/${
                  v.userRank
                }.png)"></div>
            </div>
            <div class="d-flex flex-column-reverse flex-md-column align-items-center">
              <span class="badge bg-white text-dark mt-lg-6">${
                v.likePosition
              }</span>
              <span class="text-secondary mt-lg-6 mb-5 mb-md-0">
                ${v.thumb}
                <i class="fa-regular fa-thumbs-up ms-1"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="d-none d-md-block down-triangle">
          <div class="left-triangle"></div>
          <div class="right-triangle"></div>
        </div>
</li>
 `;
      })
      .join("");

    document.querySelector(
      "#root"
    ).innerHTML = `<div class="d-block d-md-flex justify-content-end align-items-center bg-dark px-3 px-lg-26 pt-lg-18">
      <div class="titleParallelogram position-relative mx-auto mx-md-0 my-lg-7">
        <h2 class="position-absolute top-20 start-50 fs-11 fs-md-2 fw-black" style="width: 400px; height: 58px">
          ${teamDetails.data.teamName}
        </h2>
      </div>
      <h3 class="titleCenter fs-4 fs-md-3">遊戲時間：${teamDetails.data.playTime}</h3>
      </div>
      <ul
      class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 gap-md-0 px-3 px-lg-26">
      ${memberComponent}
      </ul>
      <div class="container mb-20 mb-md-25 mt-lg-21">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-7">
          <div class="messageCard border border-2 rounded-2 border-white mt-6 mt-md-0 mx-auto mx-md-0">
            <div class="messageHead border-bottom p-1">
              <h4 class="text-center fs-5 fs-lg-4">公告</h4>
            </div>
            <div class="messageBody">
              <ol class="d-flex flex-column p-5 p-md-9 gap-2 gap-md-3">
              ${noticComponent}
              </ol>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-end col-lg-3">
          <button type="button" class="joinTeamBtn blueShadow mt-10 mt-md-0 mx-auto mx-md-0">
            <p class="fw-bold fs-3">
              加入隊伍<i class="fa-solid fa-arrow-right ms-5"></i>
            </p>
          </button>
        </div>
      </div>
      </div>;`;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
fetchDataAll(id);
