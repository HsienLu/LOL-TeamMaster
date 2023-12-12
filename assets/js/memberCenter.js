if (!userIsLogin) location.href = "index.html";
import axios from "axios";
import Swal from "sweetalert2";
import { api_path, userIsLogin, memberId } from "./config";

let commentsId = [];
let commentData = [];
let friendsId = [];
let friendData = [];
let bansId = [];
let banData = [];
let historicalTeamData = [];
const commentList = document.querySelector(".evaluateCard");
const friendList = document.querySelector(".friendCard");
const banList = document.querySelector(".blackCard");
const historicalTeamList = document.querySelector(".historicalCard");

function init() {
  getCommentList();
  getFriendList();
  getBanList();
  getHistoricalTeamList();
}

async function getCommentList() {
  try {
    const resComments = await axios.get(
      `${api_path}/600/comments?userId=${memberId}`,
      {
        headers: {
          Authorization: `Bearer ${userIsLogin}`,
        },
      }
    );
    resComments.data.forEach((item) => {
      commentsId.push(item.commentedId);
    });

    const resUsers = await axios.get(`${api_path}/users`);

    commentData = resUsers.data.filter((user) => {
      return commentsId.includes(user.id);
    });
    renderCommentList();
    setSwiper("#evaluateSwiper", 4, 3);
  } catch (error) {
    console.log(error);
  }
}

function renderCommentList() {
  let str = "";
  commentData.forEach((item) => {
    str += `
    <div class="swiper-slide memberEvaluateCard border border-2 border-radius border-primary w-20 bg-dark blueShadow">
      <div class="meber-card-top">
        <div class="member-avatar position-relative">
          <img
            src="../assets/images/avatar/${item.avatar}.png"
            alt=""
            class="member-avatar-style w-100"
            style="height: 306px;"/>
          <div class="member-avatar-style position-absolute bottom-0"></div>

          <div
            class="metal position-absolute"
            style="width: 82px; height: 60px">
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
                  height: 60px;">
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 class="mt-12 text-center mb-4">${item.username}</h4>
      <div class="tag-group d-flex justify-content-center g-8 w-100 flex-wrap">
      ${
        item.likePosition === "TOP"
          ? `<div class="bage bage-text">TOP</div>`
          : `<div class="bage bage-text bageGroup">TOP</div>`
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
      <div class="commentThumb my-6">
        <button class="jsCancelCommentBtn btn btnShadow d-block border border-primary text-primary w-50 mx-auto" data-id="${
          item.id
        }">
          取消按讚
          <span data-id="${item.id}">
            <i class="fa-regular fa-thumbs-up ms-1" data-id="${item.id}"></i>
          </span>
        </button>
      </div>
    </div>
    `;
    // positionSelected = positionSelect.getAttribute("data-likePosition");
    // if (positionSelected === ${item.likePosition}){
    //   positionSelected.remove("bageGroup");
    // }
  });
  commentList.innerHTML = str;
}

commentList.addEventListener("click", async (e) => {
  try {
    const selectConfirm = e.target.getAttribute("class");

    if (
      selectConfirm !==
      "jsCancelCommentBtn btn btnShadow d-block border border-primary text-primary w-50 mx-auto"
    )
      return;

    const selectCancelId = e.target.getAttribute("data-id");

    const resComment = await axios.get(
      `${api_path}/600/comments?userId=${memberId}&commentedId=${selectCancelId}`,
      {
        headers: {
          Authorization: `Bearer ${userIsLogin}`,
        },
      }
    );

    await axios.delete(`${api_path}/600/comments/${resComment.data[0].id}`, {
      headers: {
        Authorization: `Bearer ${userIsLogin}`,
      },
    });

    Swal.fire({
      icon: "success",
      title: "取消成功",
      showConfirmButton: false,
      timer: 1500,
      background: "#060818",
      color: "#D6EEFF",
    });
    renderCommentList();
    // setTimeout(() => {
    //   location.reload();
    // }, 2000);
  } catch (error) {
    console.log(error);
  }
});

async function getFriendList() {
  try {
    const resFriends = await axios.get(
      `${api_path}/600/friendLists?userId=${memberId}`,
      {
        headers: {
          Authorization: `Bearer ${userIsLogin}`,
        },
      }
    );

    resFriends.data.forEach((item) => {
      friendsId.push(item.friendId);
    });

    const resUsers = await axios.get(`${api_path}/users`);

    friendData = resUsers.data.filter((user) => {
      return friendsId.includes(user.id);
    });
    renderFriendList();
    setSwiper("#friendListSwiper", 3, 4);
  } catch (error) {
    console.log(error);
  }
}

function renderFriendList() {
  let str = "";
  friendData.forEach((item) => {
    str += `
    <div class="swiper-slide friendListCard border border-2 border-radius border-primary bg-dark blueShadow">
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
        <button class="btn btnShadow border border-primary text-primary w-40" data-banId=${
          item.id
        }>
          列為黑名單
          <span>
            <i class="fa-solid fa-ban ms-1"></i>
          </span>
        </button>
        <button class="btn btnShadow border border-primary text-primary w-40" data-removeId=${
          item.id
        }>
          移除好友
          <span>
            <i class="fa-solid fa-user-minus ms-1"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
    `;
  });
  friendList.innerHTML = str;
}

friendList.addEventListener("click", async (e) => {
  try {
    const selectFriendBtn = e.target.getAttribute("class");

    if (
      selectFriendBtn !==
      "btn btnShadow border border-primary text-primary w-40"
    )
      return;

    const selectBanId = e.target.getAttribute("data-banId");
    const selectRemoveIdId = e.target.getAttribute("data-removeId");

    if (selectBanId) {
      const resFriends = await axios.get(
        `${api_path}/600/friendLists?userId=${memberId}&friendId=${selectBanId}`,
        {
          headers: {
            Authorization: `Bearer ${userIsLogin}`,
          },
        }
      );

      await axios.delete(
        `${api_path}/600/friendLists/${resFriends.data[0].id}`,
        {
          headers: {
            Authorization: `Bearer ${userIsLogin}`,
          },
        }
      );

      await axios.post(
        `${api_path}/600/banLists`,
        {
          userId: memberId,
          friendId: Number(selectBanId),
        },
        { headers: { Authorization: `Bearer ${userIsLogin}` } }
      );

      Swal.fire({
        icon: "success",
        title: "加入黑名單成功",
        showConfirmButton: false,
        timer: 1500,
        background: "#060818",
        color: "#D6EEFF",
      });

      renderFriendList();
      renderBanList();
      setSwiper("#friendListSwiper", 3, 4);
      setSwiper("#blackListSwiper", 4, 5);
    }

    if (selectRemoveIdId) {
      const resFriends = await axios.get(
        `${api_path}/600/friendLists?userId=${memberId}&friendId=${selectRemoveIdId}`,
        {
          headers: {
            Authorization: `Bearer ${userIsLogin}`,
          },
        }
      );

      await axios.delete(
        `${api_path}/600/friendLists/${resFriends.data[0].id}`,
        {
          headers: {
            Authorization: `Bearer ${userIsLogin}`,
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "移除好友成功",
        showConfirmButton: false,
        timer: 1500,
        background: "#060818",
        color: "#D6EEFF",
      });

      renderFriendList();
      setSwiper("#friendListSwiper", 3, 4);
    }
  } catch (error) {
    console.log(error);
  }
});

async function getBanList() {
  try {
    const resBans = await axios.get(
      `${api_path}/600/banLists?userId=${memberId}`,
      {
        headers: {
          Authorization: `Bearer ${userIsLogin}`,
        },
      }
    );

    resBans.data.forEach((item) => {
      bansId.push(item.friendId);
    });

    const resUsers = await axios.get(`${api_path}/users`);

    banData = resUsers.data.filter((user) => {
      return bansId.includes(user.id);
    });
    renderBanList();
    const blackListSwiper = setSwiper("#blackListSwiper", 4, 5);
  } catch (error) {
    console.log(error);
  }
}

function renderBanList() {
  let str = "";
  banData.forEach((item) => {
    str += `
    <div class="swiper-slide blackListCard border border-2 border-radius border-primary bg-dark blueShadow">
      <div class="meber-card-top">
        <div class="member-avatar position-relative w-100">
          <div class="avatar w-100">
            <img
              src="../assets/images/avatar/${item.avatar}.png"
              alt=""
              class="member-avatar-style"
              style="height: 300px; object-fit: cover"
            />
          </div>

          <div class="member-avatar-style position-absolute bottom-0"></div>

          <div class="metal position-absolute" style="width: 85px; height: 65px">
            <div class="parallelogram-1">
              <div class="parallelogram-content-avatar"
                style="
                  background-image: url(../assets/images/ranking/${
                    item.userRank
                  }.png);
                  background-size: cover;
                  background-position: center;
                  width: 85px;
                  height: 60px;
                "></div>
            </div>
          </div>
        </div>
      </div>

      <h5 class="mt-12 text-center mb-4">${item.username}</h5>
      <div class="tag-group d-flex justify-content-center g-8 w-100 flex-wrap">
      ${
        item.likePosition === "TOP"
          ? `<div class="bage bage-text">TOP</div>`
          : `<div class="bage bage-text bageGroup">TOP</div>`
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
        <button class="btn btnShadow border border-primary text-primary w-80" data-removeBanId=${
          item.id
        }>
          剔除
          <span>
            <i class="fa-solid fa-user-slash ms-1"></i>
          </span>
        </button>
      </div>
    </div>
    `;
  });
  banList.innerHTML = str;
}

banList.addEventListener("click", async (e) => {
  const selectBanBtn = e.target.getAttribute("class");

  if (selectBanBtn !== "btn btnShadow border border-primary text-primary w-80")
    return;

  const selectRemoveBanId = e.target.getAttribute("data-removeBanId");

  const resBans = await axios.get(
    `${api_path}/600/banLists?userId=${memberId}&friendId=${selectRemoveBanId}`,
    {
      headers: {
        Authorization: `Bearer ${userIsLogin}`,
      },
    }
  );

  await axios.delete(`${api_path}/600/banLists/${resBans.data[0].id}`, {
    headers: {
      Authorization: `Bearer ${userIsLogin}`,
    },
  });

  Swal.fire({
    icon: "success",
    title: "剔除成功",
    showConfirmButton: false,
    timer: 1500,
    background: "#060818",
    color: "#D6EEFF",
  });

  renderBanList();
  setSwiper("#blackListSwiper", 4, 5);
});

function getHistoricalTeamList() {
  axios
    .get(`${api_path}/teamsHistorical/${memberId}`)
    .then((res) => {
      historicalTeamData = res.data;
      renderHistoricalTeamList();
      setSwiper("#historicalTeamRecordsSwiper", 3, 6);
    })
    .catch((error) => {
      console.log(error);
    });
}

function renderHistoricalTeamList() {
  let str = "";
  historicalTeamData.forEach((item) => {
    str += `<div
    class="swiper-slide historicalTeamRecordsCard border border-2 border-radius border-primary bg-dark blueShadow"
  >
    <div class="card-header mb-4 mb-md-6">
      <div
        class="d-block d-md-flex justify-content-between mb-4 mb-md-6"
      >
        <div class="mb-2 mb-md-0">
          <h3 class="card-title mb-2 fs-3 fw-medium">
          ${item.teamName}
          </h3>
          <p class="card-subtitle text-secondary">
            遊戲時間：${item.playTime}
          </p>
        </div>
        <div
          class="d-flex d-md-block justify-content-between align-items-center"
        >
          <span class="d-block text-secondary fs-8 mb-0 mb-md-2">
          ${item.thumb}
            <i class="fa-regular fa-thumbs-up fs-7 ms-1"></i>
          </span>
          <span class="d-block text-secondary fs-6">
            <span class="text-white fs-5">${item.countMembers}</span>
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
            item.membersDetail[0] === "waiting"
              ? "<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>"
              : `<p class="text-secondary">${item.membersDetail[0].username}</p>`
          }
            <span class="text-secondary fs-8">TOP</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero-1">
              <div
                class="parallelogramContent-1 teamCardHeroBg-1"
                style="
                  background-image: url(/assets/images/${
                    item.membersDetail[0] === "waiting"
                      ? "img-team-player@2x.png"
                      : `champion/${item.membersDetail[0].likeHero}.jpg`
                  });
                "
              ></div>
            </div>
            <div class="parallelogramRank-1">
              <div
                class="parallelogramContent-1 teamCardRankBg-1"
                style="
                  background-image: url(/assets/images/${
                    item.membersDetail[0] === "waiting"
                      ? "img-team-badge.png"
                      : `ranking/${item.membersDetail[0].userRank}.png`
                  });
                "
              ></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
          ${
            item.membersDetail[1] === "waiting"
              ? "<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>"
              : `<p class="text-secondary">${item.membersDetail[1].username}</p>`
          }
            <span class="text-secondary fs-8">JG</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero-1">
              <div
                class="parallelogramContent-1 teamCardHeroBg-1"
                style="
                  background-image: url(../assets/images/${
                    item.membersDetail[1] === "waiting"
                      ? "img-team-player@2x.png"
                      : `champion/${item.membersDetail[1].likeHero}.jpg`
                  });
                "
              ></div>
            </div>
            <div class="parallelogramRank-1">
              <div
                class="parallelogramContent-1 teamCardRankBg-1"
                style="
                  background-image: url(../assets/images/${
                    item.membersDetail[1] === "waiting"
                      ? "img-team-badge.png"
                      : `ranking/${item.membersDetail[1].userRank}.png`
                  });
                "
              ></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
          ${
            item.membersDetail[2] === "waiting"
              ? "<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>"
              : `<p class="text-secondary">${item.membersDetail[2].username}</p>`
          }
            <span class="text-secondary fs-8">MID</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero-1">
              <div
                class="parallelogramContent-1 teamCardHeroBg-1"
                style="
                  background-image: url(../assets/images/${
                    item.membersDetail[2] === "waiting"
                      ? "img-team-player@2x.png"
                      : `champion/${item.membersDetail[2].likeHero}.jpg`
                  });
                "
              ></div>
            </div>
            <div class="parallelogramRank-1">
              <div
                class="parallelogramContent-1 teamCardRankBg-1"
                style="
                  background-image: url(../assets/images/${
                    item.membersDetail[2] === "waiting"
                      ? "img-team-badge.png"
                      : `ranking/${item.membersDetail[2].userRank}.png`
                  });
                "
              ></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
          ${
            item.membersDetail[3] === "waiting"
              ? "<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>"
              : `<p class="text-secondary">${item.membersDetail[3].username}</p>`
          }
            <span class="text-secondary fs-8">AD</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero-1">
              <div
                class="parallelogramContent-1 teamCardHeroBg-1"
                style="
                  background-image: url(../assets/images/${
                    item.membersDetail[3] === "waiting"
                      ? "img-team-player@2x.png"
                      : `champion/${item.membersDetail[3].likeHero}.jpg`
                  });
                "
              ></div>
            </div>
            <div class="parallelogramRank-1">
              <div
                class="parallelogramContent-1 teamCardRankBg-1"
                style="
                  background-image: url(../assets/images/${
                    item.membersDetail[3] === "waiting"
                      ? "img-team-badge.png"
                      : `ranking/${item.membersDetail[3].userRank}.png`
                  });
                "
              ></div>
            </div>
          </div>
        </li>
        <li>
          <div class="d-flex justify-content-between mb-1">
          ${
            item.membersDetail[4] === "waiting"
              ? "<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>"
              : `<p class="text-secondary">${item.membersDetail[4].username}</p>`
          }
            <span class="text-secondary fs-8">SUP</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero-1">
              <div
                class="parallelogramContent-1 teamCardHeroBg-1"
                style="
                  background-image: url(../assets/images/${
                    item.membersDetail[4] === "waiting"
                      ? "img-team-player@2x.png"
                      : `champion/${item.membersDetail[4].likeHero}.jpg`
                  });
                "
              ></div>
            </div>
            <div class="parallelogramRank-1">
              <div
                class="parallelogramContent-1 teamCardRankBg-1"
                style="
                  background-image: url(../assets/images/${
                    item.membersDetail[4] === "waiting"
                      ? "img-team-badge.png"
                      : `ranking/${item.membersDetail[4].userRank}.png`
                  });
                "
              ></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>`;
  });
  historicalTeamList.innerHTML = str;
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
