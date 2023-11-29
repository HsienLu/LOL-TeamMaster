import axios from "axios";
// import Swal from "sweetalert2";
import { api_path, userIsLogin } from "./config";

const memberId = localStorage.getItem("userId");

axios
  .get(`${api_path}/600/users/${memberId}`, {
    headers: {
      Authorization: `Bearer ${userIsLogin}`,
    },
  })
  .then((res) => {
    // console.log(res.data);
    const myInfo = document.querySelector("#myInfo");

    myInfo.innerHTML = `<div class="px-21 pt-14 pb-25">
<div class="d-flex justify-content-between mb-lg-8">
  <h5>我的資料</h5>
  <div>
    <a href="editMemberProfile.html"
      >編輯<i class="fa-solid fa-pencil fs-7 ms-2"></i
    ></a>
  </div>
</div>
<form action="" class="row justify-content-between">
  <div class="col-3">
    <label for="memberAccount" class="form-label">帳號</label>
    <input
      type="email"
      class="form-control mb-lg-7 box-shadow bg-secondary2 bg-opacity-30 border-0"
      id="memberAccount"
      value="${res.data.email}"
      aria-describedby="memberAccount"
      readonly
    />
    <label for="memberName" class="form-label">使用者名稱</label>
    <input
      type="text"
      class="form-control mb-lg-7 box-shadow bg-secondary2 bg-opacity-30 border-0"
      id="memberName"
      value="${res.data.username}"
      aria-describedby="memberName"
      readonly
    />
    <label for="memberPassword" class="form-label">密碼</label>
    <input
      type="password"
      class="form-control mb-lg-7 box-shadow bg-secondary2 bg-opacity-30 border-0"
      id="memberPassword"
      value="**********"
      aria-describedby="memberPassword"
      readonly
    />
  </div>
  <div class="col-4">
    <div class="d-flex justify-content-between">
      <label for="memberAvatar" class="form-label">大頭貼</label>
      <span class="text-primary">
      ${res.data.thumb}
        <i class="fa-regular fa-thumbs-up ms-1 text-primary"></i>
      </span>
    </div>
    <img
      src="../assets/images/${res.data.avatar}"
      alt="member-avatar"
    />
  </div>
  <div class="col-3">
    <div class="mb-lg-7">
      <p class="mb-2">牌位</p>
      <span class="badge bg-white text-dark fs-6">${res.data.userRank}</span>
    </div>
    <div class="mb-lg-7">
      <p class="mb-2">擅長位置</p>
      <span class="badge bg-white text-dark fs-6">${res.data.likePosition}</span>
    </div>
    <div>
      <p class="mb-2">擅長英雄</p>
      <div class="parallelogramHero-1 w-100">
        <div
          class="parallelogramContent-1 teamCardHeroBg-1"
          style="
            background-image: url(../assets/images/img-team-player-05.png);
          "
        ></div>
      </div>
    </div>
  </div>
</form>
</div>`;
  })
  .then((error) => {
    console.log(error);
  });
