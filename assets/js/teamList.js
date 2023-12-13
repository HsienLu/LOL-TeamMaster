import { api_path, userIsLogin, localhost } from "./config";
const fetchDataAll = async () => {
  try {
    const teamListBox = document.querySelector("#teamListBox");
    let teamUser = [];
    let teamListBoxText = "";
    const resTeams = await axios.get(`${api_path}/teams?_expand=user`);
    const teamDetail = resTeams.data;

    for (const v of teamDetail) {
      let teamMemeberName = [];
      let teamMemeberAvatar = [];
      let teamMemeberRank = [];
      let teamMemeLikeHero = [];
      let countPeople = v.teamMerberId.filter((v) => v > 0);
      const resTeamsMember = await axios.get(`${api_path}/teamsMember/${v.id}`);

      resTeamsMember.data.forEach((v) => {
        v === null
          ? teamMemeberAvatar.push(0)
          : teamMemeberAvatar.push(v.avatar);
        v === null ? teamMemeberName.push(0) : teamMemeberName.push(v.username);
        v === null ? teamMemeberRank.push(0) : teamMemeberRank.push(v.userRank);
        v === null
          ? teamMemeLikeHero.push(0)
          : teamMemeLikeHero.push(v.likeHero);
      });
      teamListBoxText += `        
      <div class="teamListCard blueShadow mx-4 mx-md-3 my-8" style="width:30%">
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
                <span class="text-white fs-5">${countPeople.length}</span>
                /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
              </span>
            </div>
          </div>
          <button type="button" class="teamCardBtn blueShadow w-100" onclick="location.href='${localhost}/LOL-TeamMaster/pages/teamDetails.html?id=${
        v.id
      }'">
            <p class="fs-7 w-100">立即加入</p>
          </button>
        </div>
        <div class="card-body">
          <ul>
            <li class="mb-2">
              <div class="d-flex justify-content-between mb-1">
                ${
                  teamMemeberName[0] === 0
                    ? "<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>"
                    : `<p class="text-secondary">${teamMemeberName[0]}</p>`
                }
                <span class="text-secondary fs-8">TOP</span>
              </div>
              <div class="d-flex justify-content-between">
                <div class="parallelogramHero">
                  <div class="parallelogramContent teamCardHeroBg" style="
                  background-position:0px -100%;
                  background-size:cover;
                      background-image: url(./images/${
                        teamMemeLikeHero[0] === 0
                          ? "img-team-player@2x.png"
                          : `champion/${teamMemeLikeHero[0]}.jpg`
                      });
                    "></div>
                </div>
                <div class="parallelogramRank">
                  <div class="parallelogramContent teamCardRankBg" style="
                  background-position:-3px -14px;
                      background-image: url(./images/${
                        teamMemeberRank[0] === 0
                          ? "img-team-badge.png"
                          : `ranking/${teamMemeberRank[0]}.png`
                      });
                    "></div>
                </div>
              </div>
            </li>
            <li class="mb-2">
            <div class="d-flex justify-content-between mb-1">
              ${
                teamMemeberName[1] === 0
                  ? "<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>"
                  : `<p class="text-secondary">${teamMemeberName[1]}</p>`
              }
              <span class="text-secondary fs-8">JG</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="parallelogramHero">
                <div class="parallelogramContent teamCardHeroBg" style="
                background-position:0px -100%;
                background-size:cover;
                    background-image: url(./images/${
                      teamMemeLikeHero[1] === 0
                        ? "img-team-player@2x.png"
                        : `champion/${teamMemeLikeHero[1]}.jpg`
                    });
                  "></div>
              </div>
              <div class="parallelogramRank">
                <div class="parallelogramContent teamCardRankBg" style="
                background-position:-3px -14px;
                    background-image: url(./images/${
                      teamMemeberRank[1] === 0
                        ? "img-team-badge.png"
                        : `ranking/${teamMemeberRank[1]}.png`
                    });
                  "></div>
              </div>
            </div>
          </li>
          <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
            ${
              teamMemeberName[2] === 0
                ? "<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>"
                : `<p class="text-secondary">${teamMemeberName[2]}</p>`
            }
            <span class="text-secondary fs-8">MID</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero">
              <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:cover;
                  background-image: url(./images/${
                    teamMemeLikeHero[2] === 0
                      ? "img-team-player@2x.png"
                      : `champion/${teamMemeLikeHero[2]}.jpg`
                  });
                "></div>
            </div>
            <div class="parallelogramRank">
              <div class="parallelogramContent teamCardRankBg" style="
              background-position:-3px -14px;
                  background-image: url(./images/${
                    teamMemeberRank[2] === 0
                      ? "img-team-badge.png"
                      : `ranking/${teamMemeberRank[2]}.png`
                  });
                "></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          ${
            teamMemeberName[3] === 0
              ? "<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>"
              : `<p class="text-secondary">${teamMemeberName[3]}</p>`
          }
          <span class="text-secondary fs-8">AD</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
                background-image: url(./images/${
                  teamMemeLikeHero[3] === 0
                    ? "img-team-player@2x.png"
                    : `champion/${teamMemeLikeHero[3]}.jpg`
                });
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
            background-position:-3px -14px;
                background-image: url(./images/${
                  teamMemeberRank[3] === 0
                    ? "img-team-badge.png"
                    : `ranking/${teamMemeberRank[3]}.png`
                });
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
      <div class="d-flex justify-content-between mb-1">
        ${
          teamMemeberName[4] === 0
            ? "<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>"
            : `<p class="text-secondary">${teamMemeberName[4]}</p>`
        }
        <span class="text-secondary fs-8">SUP</span>
      </div>
      <div class="d-flex justify-content-between">
        <div class="parallelogramHero">
          <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
            
              background-image: url(./images/${
                teamMemeLikeHero[4] === 0
                  ? "img-team-player@2x.png"
                  : `champion/${teamMemeLikeHero[4]}.jpg`
              });
            "></div>
        </div>
        <div class="parallelogramRank">
          <div class="parallelogramContent teamCardRankBg" style="
          background-position:-3px -14px;

              background-image: url(./images/${
                teamMemeberRank[4] === 0
                  ? "img-team-badge.png"
                  : `ranking/${teamMemeberRank[4]}.png`
              });
            "></div>
        </div>
      </div>
    </li>
          </ul>
        </div>
      </div>`;
    }

    teamListBox.innerHTML = teamListBoxText;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const fetchDataPlayTimeAsc = async () => {
  try {
    const teamListBox = document.querySelector("#teamListBox");
    let teamUser = [];
    let teamListBoxText = "";
    const resTeams = await axios.get(
      `${api_path}/teams?_expand=user&_sort=playTime&_order=asc`
    );
    const teamDetail = resTeams.data;

    for (const v of teamDetail) {
      let teamMemeberName = [];
      let teamMemeberAvatar = [];
      let teamMemeberRank = [];
      let teamMemeLikeHero = [];
      let countPeople = v.teamMerberId.filter((v) => v > 0);
      const resTeamsMember = await axios.get(`${api_path}/teamsMember/${v.id}`);
      resTeamsMember.data.forEach((v) => {
        v === null
          ? teamMemeberAvatar.push(0)
          : teamMemeberAvatar.push(v.avatar);
        v === null ? teamMemeberName.push(0) : teamMemeberName.push(v.username);
        v === null ? teamMemeberRank.push(0) : teamMemeberRank.push(v.userRank);
        v === null
          ? teamMemeLikeHero.push(0)
          : teamMemeLikeHero.push(v.likeHero);
      });
      teamListBoxText += `        
      <div class="teamListCard blueShadow mx-4 mx-md-3 my-8" style="width:30%">
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
                <span class="text-white fs-5">${countPeople.length}</span>
                /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
              </span>
            </div>
          </div>
          <button type="button" class="teamCardBtn blueShadow w-100" onclick="location.href='${localhost}/LOL-TeamMaster/pages/teamDetails.html?id=${
        v.id
      }'">
                <p class="fs-7 w-100">立即加入</p>
              </button>
        </div>
        <div class="card-body">
          <ul>
            <li class="mb-2">
              <div class="d-flex justify-content-between mb-1">
                ${
                  teamMemeberName[0] === 0
                    ? "<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>"
                    : `<p class="text-secondary">${teamMemeberName[0]}</p>`
                }
                <span class="text-secondary fs-8">TOP</span>
              </div>
              <div class="d-flex justify-content-between">
                <div class="parallelogramHero">
                  <div class="parallelogramContent teamCardHeroBg" style="
                  background-position:0px -100%;
                  background-size:cover;
                      background-image: url(./images/${
                        teamMemeLikeHero[0] === 0
                          ? "img-team-player@2x.png"
                          : `champion/${teamMemeLikeHero[0]}.jpg`
                      });
                    "></div>
                </div>
                <div class="parallelogramRank">
                  <div class="parallelogramContent teamCardRankBg" style="
                  background-position:-3px -14px;
                      background-image: url(./images/${
                        teamMemeberRank[0] === 0
                          ? "img-team-badge.png"
                          : `ranking/${teamMemeberRank[0]}.png`
                      });
                    "></div>
                </div>
              </div>
            </li>
            <li class="mb-2">
            <div class="d-flex justify-content-between mb-1">
              ${
                teamMemeberName[1] === 0
                  ? "<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>"
                  : `<p class="text-secondary">${teamMemeberName[1]}</p>`
              }
              <span class="text-secondary fs-8">JG</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="parallelogramHero">
                <div class="parallelogramContent teamCardHeroBg" style="
                background-position:0px -100%;
                background-size:cover;
                    background-image: url(./images/${
                      teamMemeLikeHero[1] === 0
                        ? "img-team-player@2x.png"
                        : `champion/${teamMemeLikeHero[1]}.jpg`
                    });
                  "></div>
              </div>
              <div class="parallelogramRank">
                <div class="parallelogramContent teamCardRankBg" style="
                background-position:-3px -14px;
                    background-image: url(./images/${
                      teamMemeberRank[1] === 0
                        ? "img-team-badge.png"
                        : `ranking/${teamMemeberRank[1]}.png`
                    });
                  "></div>
              </div>
            </div>
          </li>
          <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
            ${
              teamMemeberName[2] === 0
                ? "<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>"
                : `<p class="text-secondary">${teamMemeberName[2]}</p>`
            }
            <span class="text-secondary fs-8">MID</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero">
              <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:cover;
                  background-image: url(./images/${
                    teamMemeLikeHero[2] === 0
                      ? "img-team-player@2x.png"
                      : `champion/${teamMemeLikeHero[2]}.jpg`
                  });
                "></div>
            </div>
            <div class="parallelogramRank">
              <div class="parallelogramContent teamCardRankBg" style="
              background-position:-3px -14px;
                  background-image: url(./images/${
                    teamMemeberRank[2] === 0
                      ? "img-team-badge.png"
                      : `ranking/${teamMemeberRank[2]}.png`
                  });
                "></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          ${
            teamMemeberName[3] === 0
              ? "<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>"
              : `<p class="text-secondary">${teamMemeberName[3]}</p>`
          }
          <span class="text-secondary fs-8">AD</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
                background-image: url(./images/${
                  teamMemeLikeHero[3] === 0
                    ? "img-team-player@2x.png"
                    : `champion/${teamMemeLikeHero[3]}.jpg`
                });
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
            background-position:-3px -14px;
                background-image: url(./images/${
                  teamMemeberRank[3] === 0
                    ? "img-team-badge.png"
                    : `ranking/${teamMemeberRank[3]}.png`
                });
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
      <div class="d-flex justify-content-between mb-1">
        ${
          teamMemeberName[4] === 0
            ? "<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>"
            : `<p class="text-secondary">${teamMemeberName[4]}</p>`
        }
        <span class="text-secondary fs-8">SUP</span>
      </div>
      <div class="d-flex justify-content-between">
        <div class="parallelogramHero">
          <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
            
              background-image: url(./images/${
                teamMemeLikeHero[4] === 0
                  ? "img-team-player@2x.png"
                  : `champion/${teamMemeLikeHero[4]}.jpg`
              });
            "></div>
        </div>
        <div class="parallelogramRank">
          <div class="parallelogramContent teamCardRankBg" style="
          background-position:-3px -14px;

              background-image: url(./images/${
                teamMemeberRank[4] === 0
                  ? "img-team-badge.png"
                  : `ranking/${teamMemeberRank[4]}.png`
              });
            "></div>
        </div>
      </div>
    </li>
          </ul>
        </div>
      </div>`;
    }

    teamListBox.innerHTML = teamListBoxText;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const fetchDataPlayTimeDesc = async () => {
  try {
    const teamListBox = document.querySelector("#teamListBox");
    let teamUser = [];
    let teamListBoxText = "";
    const resTeams = await axios.get(
      `${api_path}/teams?_expand=user&_sort=playTime&_order=desc`
    );
    const teamDetail = resTeams.data;

    for (const v of teamDetail) {
      let teamMemeberName = [];
      let teamMemeberAvatar = [];
      let teamMemeberRank = [];
      let teamMemeLikeHero = [];
      let countPeople = v.teamMerberId.filter((v) => v > 0);
      const resTeamsMember = await axios.get(`${api_path}/teamsMember/${v.id}`);
      resTeamsMember.data.forEach((v) => {
        v === null
          ? teamMemeberAvatar.push(0)
          : teamMemeberAvatar.push(v.avatar);
        v === null ? teamMemeberName.push(0) : teamMemeberName.push(v.username);
        v === null ? teamMemeberRank.push(0) : teamMemeberRank.push(v.userRank);
        v === null
          ? teamMemeLikeHero.push(0)
          : teamMemeLikeHero.push(v.likeHero);
      });
      teamListBoxText += `        
      <div class="teamListCard blueShadow mx-4 mx-md-3 my-8" style="width:30%">
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
                <span class="text-white fs-5">${countPeople.length}</span>
                /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
              </span>
            </div>
          </div>
          <button type="button" class="teamCardBtn blueShadow w-100" onclick="location.href='${localhost}/LOL-TeamMaster/pages/teamDetails.html?id=${
        v.id
      }'">
                <p class="fs-7 w-100">立即加入</p>
              </button>
        </div>
        <div class="card-body">
          <ul>
            <li class="mb-2">
              <div class="d-flex justify-content-between mb-1">
                ${
                  teamMemeberName[0] === 0
                    ? "<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>"
                    : `<p class="text-secondary">${teamMemeberName[0]}</p>`
                }
                <span class="text-secondary fs-8">TOP</span>
              </div>
              <div class="d-flex justify-content-between">
                <div class="parallelogramHero">
                  <div class="parallelogramContent teamCardHeroBg" style="
                  background-position:0px -100%;
                  background-size:cover;
                      background-image: url(./images/${
                        teamMemeLikeHero[0] === 0
                          ? "img-team-player@2x.png"
                          : `champion/${teamMemeLikeHero[0]}.jpg`
                      });
                    "></div>
                </div>
                <div class="parallelogramRank">
                  <div class="parallelogramContent teamCardRankBg" style="
                  background-position:-3px -14px;
                      background-image: url(./images/${
                        teamMemeberRank[0] === 0
                          ? "img-team-badge.png"
                          : `ranking/${teamMemeberRank[0]}.png`
                      });
                    "></div>
                </div>
              </div>
            </li>
            <li class="mb-2">
            <div class="d-flex justify-content-between mb-1">
              ${
                teamMemeberName[1] === 0
                  ? "<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>"
                  : `<p class="text-secondary">${teamMemeberName[1]}</p>`
              }
              <span class="text-secondary fs-8">JG</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="parallelogramHero">
                <div class="parallelogramContent teamCardHeroBg" style="
                background-position:0px -100%;
                background-size:cover;
                    background-image: url(./images/${
                      teamMemeLikeHero[1] === 0
                        ? "img-team-player@2x.png"
                        : `champion/${teamMemeLikeHero[1]}.jpg`
                    });
                  "></div>
              </div>
              <div class="parallelogramRank">
                <div class="parallelogramContent teamCardRankBg" style="
                background-position:-3px -14px;
                    background-image: url(./images/${
                      teamMemeberRank[1] === 0
                        ? "img-team-badge.png"
                        : `ranking/${teamMemeberRank[1]}.png`
                    });
                  "></div>
              </div>
            </div>
          </li>
          <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
            ${
              teamMemeberName[2] === 0
                ? "<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>"
                : `<p class="text-secondary">${teamMemeberName[2]}</p>`
            }
            <span class="text-secondary fs-8">MID</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero">
              <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:cover;
                  background-image: url(./images/${
                    teamMemeLikeHero[2] === 0
                      ? "img-team-player@2x.png"
                      : `champion/${teamMemeLikeHero[2]}.jpg`
                  });
                "></div>
            </div>
            <div class="parallelogramRank">
              <div class="parallelogramContent teamCardRankBg" style="
              background-position:-3px -14px;
                  background-image: url(./images/${
                    teamMemeberRank[2] === 0
                      ? "img-team-badge.png"
                      : `ranking/${teamMemeberRank[2]}.png`
                  });
                "></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          ${
            teamMemeberName[3] === 0
              ? "<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>"
              : `<p class="text-secondary">${teamMemeberName[3]}</p>`
          }
          <span class="text-secondary fs-8">AD</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
                background-image: url(./images/${
                  teamMemeLikeHero[3] === 0
                    ? "img-team-player@2x.png"
                    : `champion/${teamMemeLikeHero[3]}.jpg`
                });
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
            background-position:-3px -14px;
                background-image: url(./images/${
                  teamMemeberRank[3] === 0
                    ? "img-team-badge.png"
                    : `ranking/${teamMemeberRank[3]}.png`
                });
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
      <div class="d-flex justify-content-between mb-1">
        ${
          teamMemeberName[4] === 0
            ? "<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>"
            : `<p class="text-secondary">${teamMemeberName[4]}</p>`
        }
        <span class="text-secondary fs-8">SUP</span>
      </div>
      <div class="d-flex justify-content-between">
        <div class="parallelogramHero">
          <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
            
              background-image: url(./images/${
                teamMemeLikeHero[4] === 0
                  ? "img-team-player@2x.png"
                  : `champion/${teamMemeLikeHero[4]}.jpg`
              });
            "></div>
        </div>
        <div class="parallelogramRank">
          <div class="parallelogramContent teamCardRankBg" style="
          background-position:-3px -14px;

              background-image: url(./images/${
                teamMemeberRank[4] === 0
                  ? "img-team-badge.png"
                  : `ranking/${teamMemeberRank[4]}.png`
              });
            "></div>
        </div>
      </div>
    </li>
          </ul>
        </div>
      </div>`;
    }

    teamListBox.innerHTML = teamListBoxText;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const fetchDataRankLimit = async (rank) => {
  try {
    const teamListBox = document.querySelector("#teamListBox");
    let teamUser = [];
    let teamListBoxText = "";
    const resTeams = await axios.get(
      `${api_path}/teams?rankLimt=${rank}&_expand=user`
    );
    const teamDetail = resTeams.data;

    for (const v of teamDetail) {
      let teamMemeberName = [];
      let teamMemeberAvatar = [];
      let teamMemeberRank = [];
      let teamMemeLikeHero = [];
      let countPeople = v.teamMerberId.filter((v) => v > 0);
      const resTeamsMember = await axios.get(`${api_path}/teamsMember/${v.id}`);
      resTeamsMember.data.forEach((v) => {
        v === null
          ? teamMemeberAvatar.push(0)
          : teamMemeberAvatar.push(v.avatar);
        v === null ? teamMemeberName.push(0) : teamMemeberName.push(v.username);
        v === null ? teamMemeberRank.push(0) : teamMemeberRank.push(v.userRank);
        v === null
          ? teamMemeLikeHero.push(0)
          : teamMemeLikeHero.push(v.likeHero);
      });
      teamListBoxText += `        
      <div class="teamListCard blueShadow mx-4 mx-md-3 my-8" style="width:30%">
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
                <span class="text-white fs-5">${countPeople.length}</span>
                /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
              </span>
            </div>
          </div>
          <button type="button" class="teamCardBtn blueShadow w-100" onclick="location.href='${localhost}/LOL-TeamMaster/pages/teamDetails.html?id=${
        v.id
      }'">
                <p class="fs-7 w-100">立即加入</p>
              </button>
        </div>
        <div class="card-body">
          <ul>
            <li class="mb-2">
              <div class="d-flex justify-content-between mb-1">
                ${
                  teamMemeberName[0] === 0
                    ? "<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>"
                    : `<p class="text-secondary">${teamMemeberName[0]}</p>`
                }
                <span class="text-secondary fs-8">TOP</span>
              </div>
              <div class="d-flex justify-content-between">
                <div class="parallelogramHero">
                  <div class="parallelogramContent teamCardHeroBg" style="
                  background-position:0px -100%;
                  background-size:cover;
                      background-image: url(./images/${
                        teamMemeLikeHero[0] === 0
                          ? "img-team-player@2x.png"
                          : `champion/${teamMemeLikeHero[0]}.jpg`
                      });
                    "></div>
                </div>
                <div class="parallelogramRank">
                  <div class="parallelogramContent teamCardRankBg" style="
                  background-position:-3px -14px;
                      background-image: url(./images/${
                        teamMemeberRank[0] === 0
                          ? "img-team-badge.png"
                          : `ranking/${teamMemeberRank[0]}.png`
                      });
                    "></div>
                </div>
              </div>
            </li>
            <li class="mb-2">
            <div class="d-flex justify-content-between mb-1">
              ${
                teamMemeberName[1] === 0
                  ? "<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>"
                  : `<p class="text-secondary">${teamMemeberName[1]}</p>`
              }
              <span class="text-secondary fs-8">JG</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="parallelogramHero">
                <div class="parallelogramContent teamCardHeroBg" style="
                background-position:0px -100%;
                background-size:cover;
                    background-image: url(./images/${
                      teamMemeLikeHero[1] === 0
                        ? "img-team-player@2x.png"
                        : `champion/${teamMemeLikeHero[1]}.jpg`
                    });
                  "></div>
              </div>
              <div class="parallelogramRank">
                <div class="parallelogramContent teamCardRankBg" style="
                background-position:-3px -14px;
                    background-image: url(./images/${
                      teamMemeberRank[1] === 0
                        ? "img-team-badge.png"
                        : `ranking/${teamMemeberRank[1]}.png`
                    });
                  "></div>
              </div>
            </div>
          </li>
          <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
            ${
              teamMemeberName[2] === 0
                ? "<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>"
                : `<p class="text-secondary">${teamMemeberName[2]}</p>`
            }
            <span class="text-secondary fs-8">MID</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero">
              <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:cover;
                  background-image: url(./images/${
                    teamMemeLikeHero[2] === 0
                      ? "img-team-player@2x.png"
                      : `champion/${teamMemeLikeHero[2]}.jpg`
                  });
                "></div>
            </div>
            <div class="parallelogramRank">
              <div class="parallelogramContent teamCardRankBg" style="
              background-position:-3px -14px;
                  background-image: url(./images/${
                    teamMemeberRank[2] === 0
                      ? "img-team-badge.png"
                      : `ranking/${teamMemeberRank[2]}.png`
                  });
                "></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          ${
            teamMemeberName[3] === 0
              ? "<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>"
              : `<p class="text-secondary">${teamMemeberName[3]}</p>`
          }
          <span class="text-secondary fs-8">AD</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
                background-image: url(./images/${
                  teamMemeLikeHero[3] === 0
                    ? "img-team-player@2x.png"
                    : `champion/${teamMemeLikeHero[3]}.jpg`
                });
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
            background-position:-3px -14px;
                background-image: url(./images/${
                  teamMemeberRank[3] === 0
                    ? "img-team-badge.png"
                    : `ranking/${teamMemeberRank[3]}.png`
                });
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
      <div class="d-flex justify-content-between mb-1">
        ${
          teamMemeberName[4] === 0
            ? "<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>"
            : `<p class="text-secondary">${teamMemeberName[4]}</p>`
        }
        <span class="text-secondary fs-8">SUP</span>
      </div>
      <div class="d-flex justify-content-between">
        <div class="parallelogramHero">
          <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
            
              background-image: url(./images/${
                teamMemeLikeHero[4] === 0
                  ? "img-team-player@2x.png"
                  : `champion/${teamMemeLikeHero[4]}.jpg`
              });
            "></div>
        </div>
        <div class="parallelogramRank">
          <div class="parallelogramContent teamCardRankBg" style="
          background-position:-3px -14px;

              background-image: url(./images/${
                teamMemeberRank[4] === 0
                  ? "img-team-badge.png"
                  : `ranking/${teamMemeberRank[4]}.png`
              });
            "></div>
        </div>
      </div>
    </li>
          </ul>
        </div>
      </div>`;
    }

    teamListBox.innerHTML = teamListBoxText;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const fetchDataPlayTimeLimit = async (time) => {
  try {
    const teamListBox = document.querySelector("#teamListBox");
    let teamUser = [];
    let teamListBoxText = "";
    const resTeams = await axios.get(
      `${api_path}/teams?playTime_lte=${time}&_expand=user`
    );
    const teamDetail = resTeams.data;

    for (const v of teamDetail) {
      let teamMemeberName = [];
      let teamMemeberAvatar = [];
      let teamMemeberRank = [];
      let teamMemeLikeHero = [];
      let countPeople = v.teamMerberId.filter((v) => v > 0);
      const resTeamsMember = await axios.get(`${api_path}/teamsMember/${v.id}`);
      resTeamsMember.data.forEach((v) => {
        v === null
          ? teamMemeberAvatar.push(0)
          : teamMemeberAvatar.push(v.avatar);
        v === null ? teamMemeberName.push(0) : teamMemeberName.push(v.username);
        v === null ? teamMemeberRank.push(0) : teamMemeberRank.push(v.userRank);
        v === null
          ? teamMemeLikeHero.push(0)
          : teamMemeLikeHero.push(v.likeHero);
      });
      teamListBoxText += `        
      <div class="teamListCard blueShadow mx-4 mx-md-3 my-8" style="width:30%">
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
                <span class="text-white fs-5">${countPeople.length}</span>
                /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
              </span>
            </div>
          </div>
          <button type="button" class="teamCardBtn blueShadow w-100" onclick="location.href='${localhost}/LOL-TeamMaster/pages/teamDetails.html?id=${
        v.id
      }'">
                <p class="fs-7 w-100">立即加入</p>
              </button>
        </div>
        <div class="card-body">
          <ul>
            <li class="mb-2">
              <div class="d-flex justify-content-between mb-1">
                ${
                  teamMemeberName[0] === 0
                    ? "<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>"
                    : `<p class="text-secondary">${teamMemeberName[0]}</p>`
                }
                <span class="text-secondary fs-8">TOP</span>
              </div>
              <div class="d-flex justify-content-between">
                <div class="parallelogramHero">
                  <div class="parallelogramContent teamCardHeroBg" style="
                  background-position:0px -100%;
                  background-size:cover;
                      background-image: url(./images/${
                        teamMemeLikeHero[0] === 0
                          ? "img-team-player@2x.png"
                          : `champion/${teamMemeLikeHero[0]}.jpg`
                      });
                    "></div>
                </div>
                <div class="parallelogramRank">
                  <div class="parallelogramContent teamCardRankBg" style="
                  background-position:-3px -14px;
                      background-image: url(./images/${
                        teamMemeberRank[0] === 0
                          ? "img-team-badge.png"
                          : `ranking/${teamMemeberRank[0]}.png`
                      });
                    "></div>
                </div>
              </div>
            </li>
            <li class="mb-2">
            <div class="d-flex justify-content-between mb-1">
              ${
                teamMemeberName[1] === 0
                  ? "<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>"
                  : `<p class="text-secondary">${teamMemeberName[1]}</p>`
              }
              <span class="text-secondary fs-8">JG</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="parallelogramHero">
                <div class="parallelogramContent teamCardHeroBg" style="
                background-position:0px -100%;
                background-size:cover;
                    background-image: url(./images/${
                      teamMemeLikeHero[1] === 0
                        ? "img-team-player@2x.png"
                        : `champion/${teamMemeLikeHero[1]}.jpg`
                    });
                  "></div>
              </div>
              <div class="parallelogramRank">
                <div class="parallelogramContent teamCardRankBg" style="
                background-position:-3px -14px;
                    background-image: url(./images/${
                      teamMemeberRank[1] === 0
                        ? "img-team-badge.png"
                        : `ranking/${teamMemeberRank[1]}.png`
                    });
                  "></div>
              </div>
            </div>
          </li>
          <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
            ${
              teamMemeberName[2] === 0
                ? "<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>"
                : `<p class="text-secondary">${teamMemeberName[2]}</p>`
            }
            <span class="text-secondary fs-8">MID</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero">
              <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:cover;
                  background-image: url(./images/${
                    teamMemeLikeHero[2] === 0
                      ? "img-team-player@2x.png"
                      : `champion/${teamMemeLikeHero[2]}.jpg`
                  });
                "></div>
            </div>
            <div class="parallelogramRank">
              <div class="parallelogramContent teamCardRankBg" style="
              background-position:-3px -14px;
                  background-image: url(./images/${
                    teamMemeberRank[2] === 0
                      ? "img-team-badge.png"
                      : `ranking/${teamMemeberRank[2]}.png`
                  });
                "></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          ${
            teamMemeberName[3] === 0
              ? "<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>"
              : `<p class="text-secondary">${teamMemeberName[3]}</p>`
          }
          <span class="text-secondary fs-8">AD</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
                background-image: url(./images/${
                  teamMemeLikeHero[3] === 0
                    ? "img-team-player@2x.png"
                    : `champion/${teamMemeLikeHero[3]}.jpg`
                });
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
            background-position:-3px -14px;
                background-image: url(./images/${
                  teamMemeberRank[3] === 0
                    ? "img-team-badge.png"
                    : `ranking/${teamMemeberRank[3]}.png`
                });
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
      <div class="d-flex justify-content-between mb-1">
        ${
          teamMemeberName[4] === 0
            ? "<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>"
            : `<p class="text-secondary">${teamMemeberName[4]}</p>`
        }
        <span class="text-secondary fs-8">SUP</span>
      </div>
      <div class="d-flex justify-content-between">
        <div class="parallelogramHero">
          <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
            
              background-image: url(./images/${
                teamMemeLikeHero[4] === 0
                  ? "img-team-player@2x.png"
                  : `champion/${teamMemeLikeHero[4]}.jpg`
              });
            "></div>
        </div>
        <div class="parallelogramRank">
          <div class="parallelogramContent teamCardRankBg" style="
          background-position:-3px -14px;

              background-image: url(./images/${
                teamMemeberRank[4] === 0
                  ? "img-team-badge.png"
                  : `ranking/${teamMemeberRank[4]}.png`
              });
            "></div>
        </div>
      </div>
    </li>
          </ul>
        </div>
      </div>`;
    }

    teamListBox.innerHTML = teamListBoxText;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const fetchDataQuery = async (query) => {
  try {
    const teamListBox = document.querySelector("#teamListBox");
    let teamUser = [];
    let teamListBoxText = "";
    const resTeams = await axios.get(
      `${api_path}/teams?q=${query}&_expand=user`
    );
    const teamDetail = resTeams.data;

    for (const v of teamDetail) {
      let teamMemeberName = [];
      let teamMemeberAvatar = [];
      let teamMemeberRank = [];
      let teamMemeLikeHero = [];
      let countPeople = v.teamMerberId.filter((v) => v > 0);
      const resTeamsMember = await axios.get(`${api_path}/teamsMember/${v.id}`);
      resTeamsMember.data.forEach((v) => {
        v === null
          ? teamMemeberAvatar.push(0)
          : teamMemeberAvatar.push(v.avatar);
        v === null ? teamMemeberName.push(0) : teamMemeberName.push(v.username);
        v === null ? teamMemeberRank.push(0) : teamMemeberRank.push(v.userRank);
        v === null
          ? teamMemeLikeHero.push(0)
          : teamMemeLikeHero.push(v.likeHero);
      });
      teamListBoxText += `        
      <div class="teamListCard blueShadow mx-4 mx-md-3 my-8" style="width:30%">
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
                <span class="text-white fs-5">${countPeople.length}</span>
                /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
              </span>
            </div>
          </div>
          <button type="button" class="teamCardBtn blueShadow w-100" onclick="location.href='${localhost}/LOL-TeamMaster/pages/teamDetails.html?id=${
        v.id
      }'">
                <p class="fs-7 w-100">立即加入</p>
              </button>
        </div>
        <div class="card-body">
          <ul>
            <li class="mb-2">
              <div class="d-flex justify-content-between mb-1">
                ${
                  teamMemeberName[0] === 0
                    ? "<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>"
                    : `<p class="text-secondary">${teamMemeberName[0]}</p>`
                }
                <span class="text-secondary fs-8">TOP</span>
              </div>
              <div class="d-flex justify-content-between">
                <div class="parallelogramHero">
                  <div class="parallelogramContent teamCardHeroBg" style="
                  background-position:0px -100%;
                  background-size:cover;
                      background-image: url(./images/${
                        teamMemeLikeHero[0] === 0
                          ? "img-team-player@2x.png"
                          : `champion/${teamMemeLikeHero[0]}.jpg`
                      });
                    "></div>
                </div>
                <div class="parallelogramRank">
                  <div class="parallelogramContent teamCardRankBg" style="
                  background-position:-3px -14px;
                      background-image: url(./images/${
                        teamMemeberRank[0] === 0
                          ? "img-team-badge.png"
                          : `ranking/${teamMemeberRank[0]}.png`
                      });
                    "></div>
                </div>
              </div>
            </li>
            <li class="mb-2">
            <div class="d-flex justify-content-between mb-1">
              ${
                teamMemeberName[1] === 0
                  ? "<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>"
                  : `<p class="text-secondary">${teamMemeberName[1]}</p>`
              }
              <span class="text-secondary fs-8">JG</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="parallelogramHero">
                <div class="parallelogramContent teamCardHeroBg" style="
                background-position:0px -100%;
                background-size:cover;
                    background-image: url(./images/${
                      teamMemeLikeHero[1] === 0
                        ? "img-team-player@2x.png"
                        : `champion/${teamMemeLikeHero[1]}.jpg`
                    });
                  "></div>
              </div>
              <div class="parallelogramRank">
                <div class="parallelogramContent teamCardRankBg" style="
                background-position:-3px -14px;
                    background-image: url(./images/${
                      teamMemeberRank[1] === 0
                        ? "img-team-badge.png"
                        : `ranking/${teamMemeberRank[1]}.png`
                    });
                  "></div>
              </div>
            </div>
          </li>
          <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
            ${
              teamMemeberName[2] === 0
                ? "<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>"
                : `<p class="text-secondary">${teamMemeberName[2]}</p>`
            }
            <span class="text-secondary fs-8">MID</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero">
              <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:cover;
                  background-image: url(./images/${
                    teamMemeLikeHero[2] === 0
                      ? "img-team-player@2x.png"
                      : `champion/${teamMemeLikeHero[2]}.jpg`
                  });
                "></div>
            </div>
            <div class="parallelogramRank">
              <div class="parallelogramContent teamCardRankBg" style="
              background-position:-3px -14px;
                  background-image: url(./images/${
                    teamMemeberRank[2] === 0
                      ? "img-team-badge.png"
                      : `ranking/${teamMemeberRank[2]}.png`
                  });
                "></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          ${
            teamMemeberName[3] === 0
              ? "<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>"
              : `<p class="text-secondary">${teamMemeberName[3]}</p>`
          }
          <span class="text-secondary fs-8">AD</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
                background-image: url(./images/${
                  teamMemeLikeHero[3] === 0
                    ? "img-team-player@2x.png"
                    : `champion/${teamMemeLikeHero[3]}.jpg`
                });
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
            background-position:-3px -14px;
                background-image: url(./images/${
                  teamMemeberRank[3] === 0
                    ? "img-team-badge.png"
                    : `ranking/${teamMemeberRank[3]}.png`
                });
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
      <div class="d-flex justify-content-between mb-1">
        ${
          teamMemeberName[4] === 0
            ? "<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>"
            : `<p class="text-secondary">${teamMemeberName[4]}</p>`
        }
        <span class="text-secondary fs-8">SUP</span>
      </div>
      <div class="d-flex justify-content-between">
        <div class="parallelogramHero">
          <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
            
              background-image: url(./images/${
                teamMemeLikeHero[4] === 0
                  ? "img-team-player@2x.png"
                  : `champion/${teamMemeLikeHero[4]}.jpg`
              });
            "></div>
        </div>
        <div class="parallelogramRank">
          <div class="parallelogramContent teamCardRankBg" style="
          background-position:-3px -14px;

              background-image: url(./images/${
                teamMemeberRank[4] === 0
                  ? "img-team-badge.png"
                  : `ranking/${teamMemeberRank[4]}.png`
              });
            "></div>
        </div>
      </div>
    </li>
          </ul>
        </div>
      </div>`;
    }

    teamListBox.innerHTML = teamListBoxText;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const fetchDataThumbSort = async (sort) => {
  try {
    const teamListBox = document.querySelector("#teamListBox");
    let teamUser = [];
    let teamListBoxText = "";
    const resTeams = await axios.get(`${api_path}/teamsThumb?_sort=${sort}`);
    const teamDetail = resTeams.data;

    for (const v of teamDetail) {
      let teamMemeberName = [];
      let teamMemeberAvatar = [];
      let teamMemeberRank = [];
      let teamMemeLikeHero = [];
      let countPeople = v.teamMerberId.filter((v) => v > 0);
      const resTeamsMember = await axios.get(`${api_path}/teamsMember/${v.id}`);
      resTeamsMember.data.forEach((v) => {
        v === null
          ? teamMemeberAvatar.push(0)
          : teamMemeberAvatar.push(v.avatar);
        v === null ? teamMemeberName.push(0) : teamMemeberName.push(v.username);
        v === null ? teamMemeberRank.push(0) : teamMemeberRank.push(v.userRank);
        v === null
          ? teamMemeLikeHero.push(0)
          : teamMemeLikeHero.push(v.likeHero);
      });
      teamListBoxText += `        
      <div class="teamListCard blueShadow mx-4 mx-md-3 my-8" style="width:30%">
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
                ${v.thumb}
                <i class="fa-regular fa-thumbs-up fs-7 ms-1"></i>
              </span>
              <span class="d-block text-secondary fs-6">
                <span class="text-white fs-5">${countPeople.length}</span>
                /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
              </span>
            </div>
          </div>
          <button type="button" class="teamCardBtn blueShadow w-100" onclick="location.href='${localhost}/LOL-TeamMaster/pages/teamDetails.html?id=${
        v.id
      }'">
                <p class="fs-7 w-100">立即加入</p>
              </button>
        </div>
        <div class="card-body">
          <ul>
            <li class="mb-2">
              <div class="d-flex justify-content-between mb-1">
                ${
                  teamMemeberName[0] === 0
                    ? "<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>"
                    : `<p class="text-secondary">${teamMemeberName[0]}</p>`
                }
                <span class="text-secondary fs-8">TOP</span>
              </div>
              <div class="d-flex justify-content-between">
                <div class="parallelogramHero">
                  <div class="parallelogramContent teamCardHeroBg" style="
                  background-position:0px -100%;
                  background-size:cover;
                      background-image: url(./images/${
                        teamMemeLikeHero[0] === 0
                          ? "img-team-player@2x.png"
                          : `champion/${teamMemeLikeHero[0]}.jpg`
                      });
                    "></div>
                </div>
                <div class="parallelogramRank">
                  <div class="parallelogramContent teamCardRankBg" style="
                  background-position:-3px -14px;
                      background-image: url(./images/${
                        teamMemeberRank[0] === 0
                          ? "img-team-badge.png"
                          : `ranking/${teamMemeberRank[0]}.png`
                      });
                    "></div>
                </div>
              </div>
            </li>
            <li class="mb-2">
            <div class="d-flex justify-content-between mb-1">
              ${
                teamMemeberName[1] === 0
                  ? "<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>"
                  : `<p class="text-secondary">${teamMemeberName[1]}</p>`
              }
              <span class="text-secondary fs-8">JG</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="parallelogramHero">
                <div class="parallelogramContent teamCardHeroBg" style="
                background-position:0px -100%;
                background-size:cover;
                    background-image: url(./images/${
                      teamMemeLikeHero[1] === 0
                        ? "img-team-player@2x.png"
                        : `champion/${teamMemeLikeHero[1]}.jpg`
                    });
                  "></div>
              </div>
              <div class="parallelogramRank">
                <div class="parallelogramContent teamCardRankBg" style="
                background-position:-3px -14px;
                    background-image: url(./images/${
                      teamMemeberRank[1] === 0
                        ? "img-team-badge.png"
                        : `ranking/${teamMemeberRank[1]}.png`
                    });
                  "></div>
              </div>
            </div>
          </li>
          <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
            ${
              teamMemeberName[2] === 0
                ? "<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>"
                : `<p class="text-secondary">${teamMemeberName[2]}</p>`
            }
            <span class="text-secondary fs-8">MID</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero">
              <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:cover;
                  background-image: url(./images/${
                    teamMemeLikeHero[2] === 0
                      ? "img-team-player@2x.png"
                      : `champion/${teamMemeLikeHero[2]}.jpg`
                  });
                "></div>
            </div>
            <div class="parallelogramRank">
              <div class="parallelogramContent teamCardRankBg" style="
              background-position:-3px -14px;
                  background-image: url(./images/${
                    teamMemeberRank[2] === 0
                      ? "img-team-badge.png"
                      : `ranking/${teamMemeberRank[2]}.png`
                  });
                "></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          ${
            teamMemeberName[3] === 0
              ? "<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>"
              : `<p class="text-secondary">${teamMemeberName[3]}</p>`
          }
          <span class="text-secondary fs-8">AD</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
                background-image: url(./images/${
                  teamMemeLikeHero[3] === 0
                    ? "img-team-player@2x.png"
                    : `champion/${teamMemeLikeHero[3]}.jpg`
                });
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
            background-position:-3px -14px;
                background-image: url(./images/${
                  teamMemeberRank[3] === 0
                    ? "img-team-badge.png"
                    : `ranking/${teamMemeberRank[3]}.png`
                });
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
      <div class="d-flex justify-content-between mb-1">
        ${
          teamMemeberName[4] === 0
            ? "<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>"
            : `<p class="text-secondary">${teamMemeberName[4]}</p>`
        }
        <span class="text-secondary fs-8">SUP</span>
      </div>
      <div class="d-flex justify-content-between">
        <div class="parallelogramHero">
          <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
            
              background-image: url(./images/${
                teamMemeLikeHero[4] === 0
                  ? "img-team-player@2x.png"
                  : `champion/${teamMemeLikeHero[4]}.jpg`
              });
            "></div>
        </div>
        <div class="parallelogramRank">
          <div class="parallelogramContent teamCardRankBg" style="
          background-position:-3px -14px;

              background-image: url(./images/${
                teamMemeberRank[4] === 0
                  ? "img-team-badge.png"
                  : `ranking/${teamMemeberRank[4]}.png`
              });
            "></div>
        </div>
      </div>
    </li>
          </ul>
        </div>
      </div>`;
    }

    teamListBox.innerHTML = teamListBoxText;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
fetchDataAll();
document.querySelector("#thumbDesc").addEventListener("click", () => {
  fetchDataThumbSort("desc");
});
document.querySelector("#thumbAsc").addEventListener("click", () => {
  fetchDataThumbSort("asc");
});
document.querySelector("#dateLte").addEventListener("change", () => {
  const date = document.querySelector("#dateLte").value;
  fetchDataPlayTimeLimit(`${date}`);
  console.log(date);
});
document.querySelectorAll("#rankSelect li").forEach((v) => {
  v.addEventListener("click", (e) => {
    // console.log(e.target.dataset.rank);
    fetchDataRankLimit(e.target.dataset.rank);
  });
});
document.querySelector("#teamQuery").addEventListener("change", (e) => {
  fetchDataQuery(`${e.target.value}`);
});
