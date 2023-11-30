const teamListBox = document.querySelector("#teamListBox");
let teamUser = [];
let teamListBoxText = "";
axios.get("http://localhost:3000/teams").then((res) => {
  console.log("AAAAAA");
  teamDetail = res.data;
  teamDetail.forEach((v) => {
    console.log(v.id);
    console.log(v.rankLimt);
    console.log(v.teamName);
    console.log(v.playTime);
    let countPeople = v.teamMerberId.filter((v) => v > 0);
    console.log(countPeople.length);
    axios.get(`http://localhost:3000/teamsMember/${v.id}`).then((res) => {
      let teamMemeberName = [];
      let teamMemeberAvatar = [];
      let teamMemeberRank = [];
      console.log("BBBBB");
      console.log(res.data);
      res.data.map((v) => {
        v === null
          ? teamMemeberAvatar.push(0)
          : teamMemeberAvatar.push(v.avatar);
        v === null ? teamMemeberName.push(0) : teamMemeberName.push(v.username);
        v === null ? teamMemeberRank.push(0) : teamMemeberRank.push(v.userRank);
      });
      console.log(teamMemeberAvatar);
      console.log(teamMemeberName);
      console.log(teamMemeberRank);
    });

    return (teamListBoxText += `        
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
          <p class="text-secondary text-opacity-50">等待上路玩家加入</p>
          <span class="text-secondary fs-8">TOP</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
                background-image: url(../assets/images/img-team-player@2x.png);
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
                background-image: url(../assets/images/img-team-badge@2x.png);
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          <p class="text-secondary">魔法使者小明</p>
          <span class="text-secondary fs-8">JG</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
                background-image: url(../assets/images/img-team-player-03.png);
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
                background-image: url(../assets/images/image19.png);
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          <p class="text-secondary">無言獨上西樓</p>
          <span class="text-secondary fs-8">MID</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
                background-image: url(../assets/images/img-team-player-04.png);
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
                background-image: url(../assets/images/image19.png);
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          <p class="text-secondary">魔法狐狸</p>
          <span class="text-secondary fs-8">AD</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
                background-image: url(../assets/images/img-team-player-05.png);
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
                background-image: url(../assets/images/image19.png);
              "></div>
          </div>
        </div>
      </li>
      <li>
        <div class="d-flex justify-content-between mb-1">
          <p class="text-secondary">51先</p>
          <span class="text-secondary fs-8">SUP</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
                background-image: url(../assets/images/img-team-player-06.png);
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
                background-image: url(../assets/images/image19.png);
              "></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>`);
  });

  teamListBox.innerHTML = teamListBoxText;
});
