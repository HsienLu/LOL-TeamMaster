import { api_path, userIsLogin } from "./config";

const fetchData = async () => {
  try {
    const teamListBox = document.querySelector("#teamListBox");
    let teamUser = [];
    let teamListBoxText = "";
    const resTeams = await axios.get(`${api_path}/teams`);
    const teamDetail = resTeams.data;

    for (const v of teamDetail) {
      let teamMemeberName = [];
      let teamMemeberAvatar = [];
      let teamMemeberRank = [];
      let countPeople = v.teamMerberId.filter((v) => v > 0);
      const resTeamsMember = await axios.get(`${api_path}/teamsMember/${v.id}`);
      resTeamsMember.data.forEach((v) => {
        v === null
          ? teamMemeberAvatar.push(0)
          : teamMemeberAvatar.push(v.avatar);
        v === null ? teamMemeberName.push(0) : teamMemeberName.push(v.username);
        v === null ? teamMemeberRank.push(0) : teamMemeberRank.push(v.userRank);
      });
      teamListBoxText += `        
      <div class="teamCard blueShadow mx-4 mx-md-3 my-8" style="width:30%">
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
                3526
                <i class="fa-regular fa-thumbs-up fs-7 ms-1"></i>
              </span>
              <span class="d-block text-secondary fs-6">
                <span class="text-white fs-5">${countPeople.length}</span>
                /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
              </span>
            </div>
          </div>
          <button type="button" class="teamCardBtn blueShadow w-100">
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
                      background-image: url(../assets/images/${
                        teamMemeberAvatar[0] === 0
                          ? "img-team-player@2x.png"
                          : `avatar/${teamMemeberAvatar[0]}`
                      });
                    "></div>
                </div>
                <div class="parallelogramRank">
                  <div class="parallelogramContent teamCardRankBg" style="
                  background-position:-3px -14px;
                      background-image: url(../assets/images/${
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
              <span class="text-secondary fs-8">TOP</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="parallelogramHero">
                <div class="parallelogramContent teamCardHeroBg" style="
                background-position:0px -100%;
                background-size:cover;
                    background-image: url(../assets/images/${
                      teamMemeberAvatar[1] === 0
                        ? "img-team-player@2x.png"
                        : `avatar/${teamMemeberAvatar[1]}`
                    });
                  "></div>
              </div>
              <div class="parallelogramRank">
                <div class="parallelogramContent teamCardRankBg" style="
                background-position:-3px -14px;
                    background-image: url(../assets/images/${
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
            <span class="text-secondary fs-8">TOP</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero">
              <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:cover;
                  background-image: url(../assets/images/${
                    teamMemeberAvatar[2] === 0
                      ? "img-team-player@2x.png"
                      : `avatar/${teamMemeberAvatar[2]}`
                  });
                "></div>
            </div>
            <div class="parallelogramRank">
              <div class="parallelogramContent teamCardRankBg" style="
              background-position:-3px -14px;
                  background-image: url(../assets/images/${
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
          <span class="text-secondary fs-8">TOP</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
                background-image: url(../assets/images/${
                  teamMemeberAvatar[3] === 0
                    ? "img-team-player@2x.png"
                    : `avatar/${teamMemeberAvatar[3]}`
                });
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
            background-position:-3px -14px;
                background-image: url(../assets/images/${
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
        <span class="text-secondary fs-8">TOP</span>
      </div>
      <div class="d-flex justify-content-between">
        <div class="parallelogramHero">
          <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
            
              background-image: url(../assets/images/${
                teamMemeberAvatar[4] === 0
                  ? "img-team-player@2x.png"
                  : `avatar/${teamMemeberAvatar[4]}`
              });
            "></div>
        </div>
        <div class="parallelogramRank">
          <div class="parallelogramContent teamCardRankBg" style="
          background-position:-3px -14px;

              background-image: url(../assets/images/${
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

fetchData();
