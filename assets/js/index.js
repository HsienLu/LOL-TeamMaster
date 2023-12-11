import axios from "axios";
import { api_path, userIsLogin, memberId, localhost } from "./config";

let playerData = [];

const popularTeamsList = document.querySelector(".popularTeamsCard");
const popularPlayersCard = document.querySelector(".popularPlayersCard");

function init() {
  fetchDataThumbSort();
  setSwiper("#popularTeamsSwiper", 3, 1);
  getPopularPlayers();
}

const fetchDataThumbSort = async () => {
  try {
    let teamUser = [];
    const resTeams = await axios.get(`${api_path}/teamsThumb?_sort=desc`);
    const teamDetail = resTeams.data;
    let str = "";
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

      str += `        
        <div class="swiper-slide teamListCard blueShadow my-10" >
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
                        background-image: url(../assets/images/${
                          teamMemeLikeHero[0] === 0
                            ? "img-team-player@2x.png"
                            : `champion/${teamMemeLikeHero[0]}.jpg`
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
                <span class="text-secondary fs-8">JG</span>
              </div>
              <div class="d-flex justify-content-between">
                <div class="parallelogramHero">
                  <div class="parallelogramContent teamCardHeroBg" style="
                  background-position:0px -100%;
                  background-size:cover;
                      background-image: url(../assets/images/${
                        teamMemeLikeHero[1] === 0
                          ? "img-team-player@2x.png"
                          : `champion/${teamMemeLikeHero[1]}.jpg`
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
              <span class="text-secondary fs-8">MID</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="parallelogramHero">
                <div class="parallelogramContent teamCardHeroBg" style="
                background-position:0px -100%;
                background-size:cover;
                    background-image: url(../assets/images/${
                      teamMemeLikeHero[2] === 0
                        ? "img-team-player@2x.png"
                        : `champion/${teamMemeLikeHero[2]}.jpg`
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
            <span class="text-secondary fs-8">AD</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero">
              <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:266px auto;
                  background-image: url(../assets/images/${
                    teamMemeLikeHero[3] === 0
                      ? "img-team-player@2x.png"
                      : `champion/${teamMemeLikeHero[3]}.jpg`
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
          <span class="text-secondary fs-8">SUP</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:266px auto;
              
                background-image: url(../assets/images/${
                  teamMemeLikeHero[4] === 0
                    ? "img-team-player@2x.png"
                    : `champion/${teamMemeLikeHero[4]}.jpg`
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

    popularTeamsList.innerHTML = str;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

function getPopularPlayers() {
  axios
    .get(`${api_path}/users?_embed=friendLists&_sort=thumb&_order=desc`)
    .then((res) => {
      playerData = res.data;
      renderPlayerListCard(playerData);
      setSwiper("#popularPlayersSwiper", 4, 2);
    })
    .catch((error) => {
      console.log(error);
    });
}

function renderPlayerListCard(playerData) {
  let str = "";
  playerData.forEach((item) => {
    str += `<div class="swiper-slide friendListCard border border-2 border-radius border-primary bg-dark blueShadow">
    <div class="meber-card-top">
      <div class="member-avatar position-relative">
        <div class="avatar">
          <img
            src="../assets/images/avatar/${item.avatar}.png"
            alt=""
            class="member-avatar-style"
            style="height: 300px; object-fit: cover"
          />
        </div>

        <div
          class="member-avatar-style position-absolute bottom-0"
        ></div>

        <div
          class="metal position-absolute"
          style="width: 82px; height: 60px"
        >
          <div class="parallelogram-1">
            <div
              class="parallelogram-content-avatar"
              style="
                background-image: url(../assets/images/ranking/${
                  item.userRank
                }.png);
                background-size: cover;
                background-position: center;
                width: 82px;
                height: 60px;
              "
            ></div>
          </div>
        </div>
      </div>
    </div>

    <h4 class="mt-12 text-center mb-4">${item.username}</h4>
    <div
      class="tag-group d-flex justify-content-center g-8 w-100 flex-wrap"
    >
    ${
      item.likePosition === "TOP"
        ? `<div class="bage bage-text" data-likePosition="Top">TOP</div>`
        : `<div class="bage bage-text bageGroup" data-likePosition="Top">TOP</div>`
    }
    ${
      item.likePosition === "JG"
        ? `<div class="bage bage-text">JG</div>`
        : `<div class="bage bage-text bageGroup">JG</div>`
    }
    ${
      item.likePosition === "MID"
        ? `<div class="bage bage-text">MID</div>`
        : `<div class="bage bage-text bageGroup">MID</div>`
    }
    ${
      item.likePosition === "AD"
        ? `<div class="bage bage-text">AD</div>`
        : `<div class="bage bage-text bageGroup">AD</div>`
    }
    ${
      item.likePosition === "SUP"
        ? `<div class="bage bage-text">SUP</div>`
        : `<div class="bage bage-text bageGroup">SUP</div>`
    }
    </div>
    <div class="thumb my-6">
      <p class="thum-text text-center">
      ${item.thumb} <span><i class="fa-regular fa-thumbs-up"></i></span>
      </p>
    </div>
    <div
      class="button-all d-flex justify-content-center gap-4 mb-8"
      style="height: 48px"
    >
      <button class="btn btnShadow border border-primary text-primary w-80" data-banId=${
        item.id
      }>
        發送隊伍邀請
        <span>
        <i class="fa-regular fa-paper-plane"></i>
        </span>
    </div>
  </div>
</div>
        `;
  });
  popularPlayersCard.innerHTML = str;
}

function setSwiper(id, slidesPerView, swiperNum) {
  new Swiper(id, {
    slidesPerView: slidesPerView,
    spaceBetween: 24,
    loop: true,
    grabCursor: "true",
    pagination: {
      el: `#swiper-pagination${swiperNum}`,
      clickable: true,
    },
    navigation: {
      nextEl: `#swiper-button-next${swiperNum}`,
      prevEl: `#swiper-button-prev${swiperNum}`,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: slidesPerView,
      },
    },
  });
}

init();
