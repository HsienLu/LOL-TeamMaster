import { api_path, userIsLogin, localhost } from "./config";
import axios from "axios";

let loginUserId;
if (!userIsLogin) {
  Swal.fire({
    title: "無法加入隊伍",
    text: "請先進行登入",
    icon: "warning",
    background: "#060818",
    color: "#D6EEFF",
  });
} else {
  loginUserId = localStorage.getItem("userId");
}

let id = parseInt(loginUserId);
const fetchJoinDataAll = async () => {
  const joinMyTeamList = document.querySelector("#joinMyTeamList");
  const resTeams = await axios.get(`${api_path}/teams?_expand=user`);
  let users = await axios.get(`${api_path}/users`);
  users = users.data;
  const teamDetail = resTeams.data;
  let count = 0;
  let dataArr = [];
  let teamsMemberData = [];
  let text = ``;
  //找出已加入隊伍的資料
  teamDetail.forEach((v) => {
    let hash = v.teamMerberId.find((v) => v === id);
    let teamMemeberNumber = v.teamMerberId.filter((v) => v > 0);
    teamMemeberNumber = teamMemeberNumber.length;
    if (hash) {
      dataArr.push({ ...v, teamMemeberNumber: teamMemeberNumber });
    }
  });

  async function fetchData() {
    for (const v of dataArr) {
      let memberDataArr = await axios.get(`${api_path}/teamsMember/${v.id}`);
      let teamsMemberData = await memberDataArr.data;
      text += ` <div class="swiper-slide  bg-dark ">
  
      <div class="  bg-dark " style="height: fit-content;">
        <div class="teamCard1  bg-dark ">
          <div class="card-header mb-4 mb-md-6">
            <div class="d-block d-md-flex justify-content-between mb-4 mb-md-6">
              <div class="mb-2 mb-md-0">
                <h3 class="card-title mb-2">${v.teamName}</h3>
                <p class="card-subtitle text-secondary">
                  遊戲時間：${v.playTime}
                </p>
              </div>
              <div class="d-flex d-md-block justify-content-between align-items-center">
                <span class="d-block text-secondary fs-8 mb-0 mb-md-2">
                  ${v.user.thumb}
                  <i class="fa-regular fa-thumbs-up fs-7 ms-1"></i>
                </span>
                <span class="d-block text-secondary fs-6">
                  <span class="text-white fs-5">${v.teamMemeberNumber}</span>
                  /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
                </span>
              </div>
            </div>
  
          </div>
          <div class="card-body">
            <ul>
            <li class="mb-2">
            <div class="d-flex justify-content-between mb-1">
              ${
                teamsMemberData[0] === null
                  ? "<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>"
                  : `<p class="text-secondary">${teamsMemberData[0].username}</p>`
              }
              <span class="text-secondary fs-8">TOP</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="parallelogramHero">
                <div class="parallelogramContent teamCardHeroBg" style="
                background-position:0px -100%;
                background-size:cover;
                    background-image: url(./images/${
                      teamsMemberData[0] === null
                        ? "img-team-player@2x.png"
                        : `champion/${teamsMemberData[0].likeHero}.jpg`
                    });
                  "></div>
              </div>
              <div class="parallelogramRank">
                <div class="parallelogramContent teamCardRankBg" style="
                background-position:-3px -14px;
                    background-image: url(./images/${
                      teamsMemberData[0] === null
                        ? "img-team-badge.png"
                        : `ranking/${teamsMemberData[0].userRank}.png`
                    });
                  "></div>
              </div>
            </div>
          </li>
          <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
            ${
              teamsMemberData[1] === null
                ? "<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>"
                : `<p class="text-secondary">${teamsMemberData[1].username}</p>`
            }
            <span class="text-secondary fs-8">JG</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero">
              <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:cover;
                  background-image: url(./images/${
                    teamsMemberData[1] === null
                      ? "img-team-player@2x.png"
                      : `champion/${teamsMemberData[1].likeHero}.jpg`
                  });
                "></div>
            </div>
            <div class="parallelogramRank">
              <div class="parallelogramContent teamCardRankBg" style="
              background-position:-3px -14px;
                  background-image: url(./images/${
                    teamsMemberData[1] === null
                      ? "img-team-badge.png"
                      : `ranking/${teamsMemberData[1].userRank}.png`
                  });
                "></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          ${
            teamsMemberData[2] === null
              ? "<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>"
              : `<p class="text-secondary">${teamsMemberData[2].username}</p>`
          }
          <span class="text-secondary fs-8">MID</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:cover;
                background-image: url(./images/${
                  teamsMemberData[2] === null
                    ? "img-team-player@2x.png"
                    : `champion/${teamsMemberData[2].likeHero}.jpg`
                });
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
            background-position:-3px -14px;
                background-image: url(./images/${
                  teamsMemberData[2] === null
                    ? "img-team-badge.png"
                    : `ranking/${teamsMemberData[2].userRank}.png`
                });
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
      <div class="d-flex justify-content-between mb-1">
        ${
          teamsMemberData[3] === null
            ? "<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>"
            : `<p class="text-secondary">${teamsMemberData[3].username}</p>`
        }
        <span class="text-secondary fs-8">AD</span>
      </div>
      <div class="d-flex justify-content-between">
        <div class="parallelogramHero">
          <div class="parallelogramContent teamCardHeroBg" style="
          background-position:0px -100%;
          background-size:266px auto;
              background-image: url(./images/${
                teamsMemberData[3] === null
                  ? "img-team-player@2x.png"
                  : `champion/${teamsMemberData[3].likeHero}.jpg`
              });
            "></div>
        </div>
        <div class="parallelogramRank">
          <div class="parallelogramContent teamCardRankBg" style="
          background-position:-3px -14px;
              background-image: url(./images/${
                teamsMemberData[3] === null
                  ? "img-team-badge.png"
                  : `ranking/${teamsMemberData[3].userRank}.png`
              });
            "></div>
        </div>
      </div>
    </li>
    <li class="mb-2">
    <div class="d-flex justify-content-between mb-1">
      ${
        teamsMemberData[4] === null
          ? "<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>"
          : `<p class="text-secondary">${teamsMemberData[4].username}</p>`
      }
      <span class="text-secondary fs-8">SUP</span>
    </div>
    <div class="d-flex justify-content-between">
      <div class="parallelogramHero">
        <div class="parallelogramContent teamCardHeroBg" style="
          background-position:0px -100%;
          background-size:266px auto;
          
            background-image: url(./images/${
              teamsMemberData[4] === null
                ? "img-team-player@2x.png"
                : `champion/${teamsMemberData[4].likeHero}.jpg`
            });
          "></div>
      </div>
      <div class="parallelogramRank">
        <div class="parallelogramContent teamCardRankBg" style="
        background-position:-3px -14px;
  
            background-image: url(./images/${
              teamsMemberData[4] === null
                ? "img-team-badge.png"
                : `ranking/${teamsMemberData[4].userRank}.png`
            });
          "></div>
      </div>
    </div>
  </li>
            </ul>
          </div>
        </div>
      </div>
    </div>`;
    }

    joinMyTeamList.innerHTML = text;
  }

  fetchData();
};
const fetchBuildDataAll = async () => {
  const joinMyTeamList = document.querySelector("#buildMyTeamList");
  const resTeams = await axios.get(`${api_path}/teams?_expand=user`);
  let users = await axios.get(`${api_path}/users`);
  users = users.data;
  const teamDetail = resTeams.data;

  let count = 0;
  let dataArr = [];
  let teamsMemberData = [];
  //找出已建立隊伍的資料
  teamDetail.forEach((v) => {
    if (v.userId === id) {
      //找出已加入隊伍ID
      count += 1;
      //整理隊伍基本資訊
      let teamMemeberNumber = v.teamMerberId.filter((v) => v > 0).length; //計算隊伍成員
      dataArr.push({ ...v, teamMemeberNumber });
    }
  });
  console.log(dataArr);
  dataArr.forEach(async (v) => {
    const memberData = async (id) => {
      const memberDataArr = await axios.get(`${api_path}/teamsMember/${id}`);
      teamsMemberData = memberDataArr.data;
    };
    await memberData(v.id);

    joinMyTeamList.innerHTML = `            <div class="swiper-slide  bg-dark ">

      <div class="  bg-dark " style="height: fit-content">
        <div class="teamCard1  bg-dark ">
          <div class="card-header mb-4 mb-md-6">
            <div class="d-block d-md-flex justify-content-between mb-4 mb-md-6">
              <div class="mb-2 mb-md-0">
                <h3 class="card-title mb-2">${v.teamName}</h3>
                <p class="card-subtitle text-secondary">
                  遊戲時間：${v.playTime}
                </p>
              </div>
              <div class="d-flex d-md-block justify-content-between align-items-center">
                <span class="d-block text-secondary fs-8 mb-0 mb-md-2">
                  ${v.user.thumb}
                  <i class="fa-regular fa-thumbs-up fs-7 ms-1"></i>
                </span>
                <span class="d-block text-secondary fs-6">
                  <span class="text-white fs-5">${v.teamMemeberNumber}</span>
                  /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
                </span>
              </div>
            </div>

          </div>
          <div class="card-body">
            <ul>
            <li class="mb-2">
            <div class="d-flex justify-content-between mb-1">
              ${
                teamsMemberData[0] === null
                  ? "<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>"
                  : `<p class="text-secondary">${teamsMemberData[0].username}</p>`
              }
              <span class="text-secondary fs-8">TOP</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="parallelogramHero">
                <div class="parallelogramContent teamCardHeroBg" style="
                background-position:0px -100%;
                background-size:cover;
                    background-image: url(./images/${
                      teamsMemberData[0] === null
                        ? "img-team-player@2x.png"
                        : `champion/${teamsMemberData[0].likeHero}.jpg`
                    });
                  "></div>
              </div>
              <div class="parallelogramRank">
                <div class="parallelogramContent teamCardRankBg" style="
                background-position:-3px -14px;
                    background-image: url(./images/${
                      teamsMemberData[0] === null
                        ? "img-team-badge.png"
                        : `ranking/${teamsMemberData[0].userRank}.png`
                    });
                  "></div>
              </div>
            </div>
          </li>
          <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
            ${
              teamsMemberData[1] === null
                ? "<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>"
                : `<p class="text-secondary">${teamsMemberData[1].username}</p>`
            }
            <span class="text-secondary fs-8">JG</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero">
              <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:cover;
                  background-image: url(./images/${
                    teamsMemberData[1] === null
                      ? "img-team-player@2x.png"
                      : `champion/${teamsMemberData[1].likeHero}.jpg`
                  });
                "></div>
            </div>
            <div class="parallelogramRank">
              <div class="parallelogramContent teamCardRankBg" style="
              background-position:-3px -14px;
                  background-image: url(./images/${
                    teamsMemberData[1] === null
                      ? "img-team-badge.png"
                      : `ranking/${teamsMemberData[1].userRank}.png`
                  });
                "></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          ${
            teamsMemberData[2] === null
              ? "<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>"
              : `<p class="text-secondary">${teamsMemberData[2].username}</p>`
          }
          <span class="text-secondary fs-8">MID</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:cover;
                background-image: url(./images/${
                  teamsMemberData[2] === null
                    ? "img-team-player@2x.png"
                    : `champion/${teamsMemberData[2].likeHero}.jpg`
                });
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
            background-position:-3px -14px;
                background-image: url(./images/${
                  teamsMemberData[2] === null
                    ? "img-team-badge.png"
                    : `ranking/${teamsMemberData[2].userRank}.png`
                });
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
      <div class="d-flex justify-content-between mb-1">
        ${
          teamsMemberData[3] === null
            ? "<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>"
            : `<p class="text-secondary">${teamsMemberData[3].username}</p>`
        }
        <span class="text-secondary fs-8">AD</span>
      </div>
      <div class="d-flex justify-content-between">
        <div class="parallelogramHero">
          <div class="parallelogramContent teamCardHeroBg" style="
          background-position:0px -100%;
          background-size:266px auto;
              background-image: url(./images/${
                teamsMemberData[3] === null
                  ? "img-team-player@2x.png"
                  : `champion/${teamsMemberData[3].likeHero}.jpg`
              });
            "></div>
        </div>
        <div class="parallelogramRank">
          <div class="parallelogramContent teamCardRankBg" style="
          background-position:-3px -14px;
              background-image: url(./images/${
                teamsMemberData[3] === null
                  ? "img-team-badge.png"
                  : `ranking/${teamsMemberData[3].userRank}.png`
              });
            "></div>
        </div>
      </div>
    </li>
    <li class="mb-2">
    <div class="d-flex justify-content-between mb-1">
      ${
        teamsMemberData[4] === null
          ? "<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>"
          : `<p class="text-secondary">${teamsMemberData[4].username}</p>`
      }
      <span class="text-secondary fs-8">SUP</span>
    </div>
    <div class="d-flex justify-content-between">
      <div class="parallelogramHero">
        <div class="parallelogramContent teamCardHeroBg" style="
          background-position:0px -100%;
          background-size:266px auto;

            background-image: url(./images/${
              teamsMemberData[4] === null
                ? "img-team-player@2x.png"
                : `champion/${teamsMemberData[4].likeHero}.jpg`
            });
          "></div>
      </div>
      <div class="parallelogramRank">
        <div class="parallelogramContent teamCardRankBg" style="
        background-position:-3px -14px;

            background-image: url(./images/${
              teamsMemberData[4] === null
                ? "img-team-badge.png"
                : `ranking/${teamsMemberData[4].userRank}.png`
            });
          "></div>
      </div>
    </div>
  </li>
            </ul>
          </div>
        </div>
      </div>
    </div>`;
  });
};
fetchJoinDataAll();
fetchBuildDataAll();
