if (!userIsLogin) location.href = "index.html";
import axios from "axios";
import { api_path, userIsLogin, memberId } from "./config";

let data;
let commentData = [];
let friendListData = [];
let blackListData = [];
let historicalTeamListData = [];
let positionSelected;
const commentList = document.querySelector('.evaluateCard');
const friendList = document.querySelector('.friendCard');
const blackList = document.querySelector('.blackCard');
const historicalTeamList = document.querySelector('.historicalCard');

function init(){
  getCommentList();
  renderCommentList();
  getFriendList();
  renderFriendList();
}
init();

function getCommentList(){
  axios.get(`${api_path}/comments?_expand=user`)
  .then((res) => {
    data = res.data;
    for(let i = 0; i < data.length; i++) {
      commentData.push(data[i].user);
    }
    // positionSelected = document.querySelector(
    //   `[data-position='${commentData.likePosition}']`
    // );   
    renderCommentList();
  })
}

function renderCommentList(){
  let str = "";
  commentData.forEach((item) => {
    str += `
    <div class="swiper-slide memberEvaluateCard border border-2 border-radius border-primary w-20 bg-dark blueShadow">
      <div class="meber-card-top">
        <div class="member-avatar position-relative">
          <img
            src="../assets/images/avatar/${item.avatar}.png"
            alt=""
            class="member-avatar-style"
            style="width: 306px; height: 306px"/>
          <div class="member-avatar-style position-absolute bottom-0"></div>

          <div
            class="metal position-absolute"
            style="width: 82px; height: 60px">
            <div class="parallelogram-1">
              <div
                class="parallelogram-content-avatar"
                style="
                  background-image: url(../assets/images/ranking/${item.userRank}.png);
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
        <div class="bage bage-text bageGroup" data-likePosition="Top">TOP</div>
        <div class="bage bage-text bageGroup" data-likePosition="Jungle">JG</div>
        <div class="bage bage-text bageGroup" data-likePosition="Mid">MID</div>
        <div class="bage bage-text bageGroup" data-likePosition="Bot">ADC</div>
        <div class="bage bage-text bageGroup" data-likePosition="Support">SUP</div>
      </div>      
      <div class="thumb my-6">
        <p class="thum-text text-center">
          ${item.thumb} <span><i class="fa-regular fa-thumbs-up"></i></span>
        </p>
      </div>
    </div>
    `
    // positionSelected = positionSelect.getAttribute("data-likePosition");
    // if (positionSelected === ${item.likePosition}){
    //   positionSelected.remove("bageGroup");
    // }
  })
  commentList.innerHTML = str;
}

function getFriendList(){
  axios.get(`${api_path}/friendLists?_expand=user`, {
    headers: {
      Authorization: `Bearer ${userIsLogin}`,
    },
  })
  .then((res) => {
    data = res.data;
    for(let i = 0; i < data.length; i++) {
      friendListData.push(data[i].user);
    }
    renderFriendList();
  })
}

function renderFriendList(){
  let str = "";
  friendListData.forEach((item) => {
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
                  background-image: url(../assets/images/ranking/${item.userRank}.png);
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
        <div class="bage bage-text">TOP</div>
        <div class="bage bage-text">JG</div>
        <div class="bage bage-text">MID</div>
        <div class="bage bage-text">ADC</div>
        <div class="bage bage-text">SUP</div>
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
        <button class="btn border border-primary text-primary w-46">
          列為黑名單
          <span>
            <i class="fa-solid fa-ban ms-1"></i>
          </span>
        </button>
        <button class="btn border border-primary text-primary w-40">
          移除好友
          <span>
            <i class="fa-solid fa-user-minus ms-1"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
    `
  })
  friendList.innerHTML = str;
}


//Swiper
const evaluateSwiper = new Swiper("#evaluateSwiper", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    grabCursor: "true",
    pagination: {
      el: "#swiper-pagination3",
      clickable: true,
    },
    navigation: {
      nextEl: "#swiper-button-next3",
      prevEl: "#swiper-button-prev3",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
  const friendListSwiper = new Swiper("#friendListSwiper", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    grabCursor: "true",
    pagination: {
      el: "#swiper-pagination4",
      clickable: true,
    },
    navigation: {
      nextEl: "#swiper-button-next4",
      prevEl: "#swiper-button-prev4",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  const blackListSwiper = new Swiper("#blackListSwiper", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    grabCursor: "true",
    pagination: {
      el: "#swiper-pagination5",
      clickable: true,
    },
    navigation: {
      nextEl: "#swiper-button-next5",
      prevEl: "#swiper-button-prev5",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
  const historicalTeamRecordsSwiper = new Swiper(
    "#historicalTeamRecordsSwiper",
    {
      slidesPerView: 3,
      spaceBetween: 24,
      loop: true,
      grabCursor: "true",
      pagination: {
        el: "#swiper-pagination6",
        clickable: true,
      },
      navigation: {
        nextEl: "#swiper-button-next6",
        prevEl: "#swiper-button-prev6",
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    }
  );