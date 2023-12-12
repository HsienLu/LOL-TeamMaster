import{u as b,b as i,a as r}from"./main-6231738c.js";import"./header-6a8ecdaf.js";let g;b?g=localStorage.getItem("userId"):Swal.fire({title:"無法加入隊伍",text:"請先進行登入",icon:"warning",background:"#060818",color:"#D6EEFF"});let u=parseInt(g);const v=async()=>{const o=document.querySelector("#joinMyTeamList"),c=await i.get(`${r}/teams?_expand=user`);let d=await i.get(`${r}/users`);d=d.data;const m=c.data;let t=[],e="";m.forEach(s=>{let n=s.teamMerberId.find(p=>p===u),a=s.teamMerberId.filter(p=>p>0);a=a.length,n&&t.push({...s,teamMemeberNumber:a})});async function l(){for(const s of t){let a=await(await i.get(`${r}/teamsMember/${s.id}`)).data;e+=` <div class="swiper-slide  bg-dark ">
  
      <div class="  bg-dark " style="height: fit-content;">
        <div class="teamCard1  bg-dark ">
          <div class="card-header mb-4 mb-md-6">
            <div class="d-block d-md-flex justify-content-between mb-4 mb-md-6">
              <div class="mb-2 mb-md-0">
                <h3 class="card-title mb-2">${s.teamName}</h3>
                <p class="card-subtitle text-secondary">
                  遊戲時間：${s.playTime}
                </p>
              </div>
              <div class="d-flex d-md-block justify-content-between align-items-center">
                <span class="d-block text-secondary fs-8 mb-0 mb-md-2">
                  ${s.user.thumb}
                  <i class="fa-regular fa-thumbs-up fs-7 ms-1"></i>
                </span>
                <span class="d-block text-secondary fs-6">
                  <span class="text-white fs-5">${s.teamMemeberNumber}</span>
                  /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
                </span>
              </div>
            </div>
  
          </div>
          <div class="card-body">
            <ul>
            <li class="mb-2">
            <div class="d-flex justify-content-between mb-1">
              ${a[0]===null?"<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>":`<p class="text-secondary">${a[0].username}</p>`}
              <span class="text-secondary fs-8">TOP</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="parallelogramHero">
                <div class="parallelogramContent teamCardHeroBg" style="
                background-position:0px -100%;
                background-size:cover;
                    background-image: url(./images/${a[0]===null?"img-team-player@2x.png":`champion/${a[0].likeHero}.jpg`});
                  "></div>
              </div>
              <div class="parallelogramRank">
                <div class="parallelogramContent teamCardRankBg" style="
                background-position:-3px -14px;
                    background-image: url(./images/${a[0]===null?"img-team-badge.png":`ranking/${a[0].userRank}.png`});
                  "></div>
              </div>
            </div>
          </li>
          <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
            ${a[1]===null?"<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>":`<p class="text-secondary">${a[1].username}</p>`}
            <span class="text-secondary fs-8">JG</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero">
              <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:cover;
                  background-image: url(./images/${a[1]===null?"img-team-player@2x.png":`champion/${a[1].likeHero}.jpg`});
                "></div>
            </div>
            <div class="parallelogramRank">
              <div class="parallelogramContent teamCardRankBg" style="
              background-position:-3px -14px;
                  background-image: url(./images/${a[1]===null?"img-team-badge.png":`ranking/${a[1].userRank}.png`});
                "></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          ${a[2]===null?"<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>":`<p class="text-secondary">${a[2].username}</p>`}
          <span class="text-secondary fs-8">MID</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:cover;
                background-image: url(./images/${a[2]===null?"img-team-player@2x.png":`champion/${a[2].likeHero}.jpg`});
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
            background-position:-3px -14px;
                background-image: url(./images/${a[2]===null?"img-team-badge.png":`ranking/${a[2].userRank}.png`});
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
      <div class="d-flex justify-content-between mb-1">
        ${a[3]===null?"<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>":`<p class="text-secondary">${a[3].username}</p>`}
        <span class="text-secondary fs-8">AD</span>
      </div>
      <div class="d-flex justify-content-between">
        <div class="parallelogramHero">
          <div class="parallelogramContent teamCardHeroBg" style="
          background-position:0px -100%;
          background-size:266px auto;
              background-image: url(./images/${a[3]===null?"img-team-player@2x.png":`champion/${a[3].likeHero}.jpg`});
            "></div>
        </div>
        <div class="parallelogramRank">
          <div class="parallelogramContent teamCardRankBg" style="
          background-position:-3px -14px;
              background-image: url(./images/${a[3]===null?"img-team-badge.png":`ranking/${a[3].userRank}.png`});
            "></div>
        </div>
      </div>
    </li>
    <li class="mb-2">
    <div class="d-flex justify-content-between mb-1">
      ${a[4]===null?"<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>":`<p class="text-secondary">${a[4].username}</p>`}
      <span class="text-secondary fs-8">SUP</span>
    </div>
    <div class="d-flex justify-content-between">
      <div class="parallelogramHero">
        <div class="parallelogramContent teamCardHeroBg" style="
          background-position:0px -100%;
          background-size:266px auto;
          
            background-image: url(./images/${a[4]===null?"img-team-player@2x.png":`champion/${a[4].likeHero}.jpg`});
          "></div>
      </div>
      <div class="parallelogramRank">
        <div class="parallelogramContent teamCardRankBg" style="
        background-position:-3px -14px;
  
            background-image: url(./images/${a[4]===null?"img-team-badge.png":`ranking/${a[4].userRank}.png`});
          "></div>
      </div>
    </div>
  </li>
            </ul>
          </div>
        </div>
      </div>
    </div>`}o.innerHTML=e}l()},x=async()=>{const o=document.querySelector("#buildMyTeamList"),c=await i.get(`${r}/teams?_expand=user`);let d=await i.get(`${r}/users`);d=d.data;const m=c.data;let t=[],e=[];m.forEach(l=>{if(l.userId===u){let s=l.teamMerberId.filter(n=>n>0).length;t.push({...l,teamMemeberNumber:s})}}),console.log(t),t.forEach(async l=>{await(async n=>{e=(await i.get(`${r}/teamsMember/${n}`)).data})(l.id),o.innerHTML=`            <div class="swiper-slide  bg-dark ">

      <div class="  bg-dark " style="height: fit-content">
        <div class="teamCard1  bg-dark ">
          <div class="card-header mb-4 mb-md-6">
            <div class="d-block d-md-flex justify-content-between mb-4 mb-md-6">
              <div class="mb-2 mb-md-0">
                <h3 class="card-title mb-2">${l.teamName}</h3>
                <p class="card-subtitle text-secondary">
                  遊戲時間：${l.playTime}
                </p>
              </div>
              <div class="d-flex d-md-block justify-content-between align-items-center">
                <span class="d-block text-secondary fs-8 mb-0 mb-md-2">
                  ${l.user.thumb}
                  <i class="fa-regular fa-thumbs-up fs-7 ms-1"></i>
                </span>
                <span class="d-block text-secondary fs-6">
                  <span class="text-white fs-5">${l.teamMemeberNumber}</span>
                  /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
                </span>
              </div>
            </div>

          </div>
          <div class="card-body">
            <ul>
            <li class="mb-2">
            <div class="d-flex justify-content-between mb-1">
              ${e[0]===null?"<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>":`<p class="text-secondary">${e[0].username}</p>`}
              <span class="text-secondary fs-8">TOP</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="parallelogramHero">
                <div class="parallelogramContent teamCardHeroBg" style="
                background-position:0px -100%;
                background-size:cover;
                    background-image: url(./images/${e[0]===null?"img-team-player@2x.png":`champion/${e[0].likeHero}.jpg`});
                  "></div>
              </div>
              <div class="parallelogramRank">
                <div class="parallelogramContent teamCardRankBg" style="
                background-position:-3px -14px;
                    background-image: url(./images/${e[0]===null?"img-team-badge.png":`ranking/${e[0].userRank}.png`});
                  "></div>
              </div>
            </div>
          </li>
          <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
            ${e[1]===null?"<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>":`<p class="text-secondary">${e[1].username}</p>`}
            <span class="text-secondary fs-8">JG</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero">
              <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:cover;
                  background-image: url(./images/${e[1]===null?"img-team-player@2x.png":`champion/${e[1].likeHero}.jpg`});
                "></div>
            </div>
            <div class="parallelogramRank">
              <div class="parallelogramContent teamCardRankBg" style="
              background-position:-3px -14px;
                  background-image: url(./images/${e[1]===null?"img-team-badge.png":`ranking/${e[1].userRank}.png`});
                "></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          ${e[2]===null?"<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>":`<p class="text-secondary">${e[2].username}</p>`}
          <span class="text-secondary fs-8">MID</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:cover;
                background-image: url(./images/${e[2]===null?"img-team-player@2x.png":`champion/${e[2].likeHero}.jpg`});
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
            background-position:-3px -14px;
                background-image: url(./images/${e[2]===null?"img-team-badge.png":`ranking/${e[2].userRank}.png`});
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
      <div class="d-flex justify-content-between mb-1">
        ${e[3]===null?"<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>":`<p class="text-secondary">${e[3].username}</p>`}
        <span class="text-secondary fs-8">AD</span>
      </div>
      <div class="d-flex justify-content-between">
        <div class="parallelogramHero">
          <div class="parallelogramContent teamCardHeroBg" style="
          background-position:0px -100%;
          background-size:266px auto;
              background-image: url(./images/${e[3]===null?"img-team-player@2x.png":`champion/${e[3].likeHero}.jpg`});
            "></div>
        </div>
        <div class="parallelogramRank">
          <div class="parallelogramContent teamCardRankBg" style="
          background-position:-3px -14px;
              background-image: url(./images/${e[3]===null?"img-team-badge.png":`ranking/${e[3].userRank}.png`});
            "></div>
        </div>
      </div>
    </li>
    <li class="mb-2">
    <div class="d-flex justify-content-between mb-1">
      ${e[4]===null?"<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>":`<p class="text-secondary">${e[4].username}</p>`}
      <span class="text-secondary fs-8">SUP</span>
    </div>
    <div class="d-flex justify-content-between">
      <div class="parallelogramHero">
        <div class="parallelogramContent teamCardHeroBg" style="
          background-position:0px -100%;
          background-size:266px auto;

            background-image: url(./images/${e[4]===null?"img-team-player@2x.png":`champion/${e[4].likeHero}.jpg`});
          "></div>
      </div>
      <div class="parallelogramRank">
        <div class="parallelogramContent teamCardRankBg" style="
        background-position:-3px -14px;

            background-image: url(./images/${e[4]===null?"img-team-badge.png":`ranking/${e[4].userRank}.png`});
          "></div>
      </div>
    </div>
  </li>
            </ul>
          </div>
        </div>
      </div>
    </div>`})};v();x();
