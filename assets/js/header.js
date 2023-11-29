import Swal from "sweetalert2";

import { userIsLogin, memberAvatar } from "./config";
const innerHeader = document.querySelector("header nav");

if (userIsLogin) {
  innerHeader.innerHTML = `<ul class="d-flex align-items-center justify-content-lg-between gap-10">
  <li>
    <a href="teamList.html" class="text-secondary2-4"
      ><i class="fa-solid fa-list me-2"></i>隊伍列表</a
    >
  </li>
  <li>
    <a href="playerList.html"
      ><i class="fa-solid fa-hat-wizard me-2"></i>玩家列表</a
    >
  </li>
  <li>
    <a href="buildTeam.html"
      ><i class="fa-solid fa-flag me-2"></i>建立隊伍</a
    >
  </li>
  <li>
    <a href="myTeamList.html"
      ><i class="fa-solid fa-users me-2"></i>我的隊伍</a
    >
  </li>
  <li>
    <a href="#"><i class="fa-solid fa-bell"></i></a>
  </li>
  <!-- member -->
  <li class="d-flex align-items-center justify-content-lg-between">
    <a href="memberCentre.html" class="member"
      ><img
        class="headerAvatar border border-1 border-white border-radius me-2"
        src="/assets/images/${memberAvatar}"
        alt="Avatar.png"
    /></a>
    <!-- member dropdown -->
    <div class="dropdown-center">
      <a
        class="btn border-0"
        href="#"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        ><i
          class="fa-solid fa-angle-down fa-lg text-secondary arrowBtn"
        ></i
      ></a>

      <ul
        class="dropdown-menu border border-4 border-end-0 border-bottom-0 border-start-0 blueShadow mt-4"
      >
        <li>
          <a class="dropdown-item" href="memberCentre.html"
            ><i class="fa-solid fa-user me-2"></i>我的資料</a
          >
        </li>
        <li>
          <a class="dropdown-item" href="#"
            ><i class="fa-solid fa-thumbs-up me-2"></i>評價資訊</a
          >
        </li>
        <li>
          <a class="dropdown-item" href="#"
            ><i class="fa-solid fa-handshake me-2"></i>好友名單</a
          >
        </li>
        <li>
          <a class="dropdown-item" href="#"
            ><i class="fa-solid fa-ban align-middle me-2"></i>黑名單</a
          >
        </li>
        <li>
          <a class="dropdown-item" href="historicalTeamRecords.html"
            ><i class="fa-solid fa-people-group me-2"></i
            >歷史組隊紀錄</a
          >
        </li>
        <li>
          <a class="jsLogout dropdown-item" href="#"
            ><i class="fa-solid fa-arrow-right-from-bracket me-2"></i
            >登出</a
          >
        </li>
      </ul>
    </div>
  </li>
  <li></li>
</ul>`;
} else {
  innerHeader.innerHTML = `<ul class="d-flex align-items-center justify-content-lg-between gap-10">
          <li>
            <a href="teamList.html" class="text-secondary2-4"
              ><i class="fa-solid fa-list me-2"></i>隊伍列表</a
            >
          </li>
          <!-- 登入 -->
          <li class="btnLogin">
            <a href="#loginModal" class="login" data-bs-toggle="modal"
              >登入 | 註冊</a
            >
          </li>
        </ul>`;
}

if (userIsLogin) {
  const jsLogout = document.querySelector(".jsLogout");

  jsLogout.addEventListener("click", (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "登出成功",
      showConfirmButton: false,
      timer: 2000,
      background: "#060818",
      color: "#D6EEFF",
    });
    localStorage.removeItem("user");
    setTimeout(() => {
      location.href = "index.html";
    }, 2000);
  });
}
