import{u,b as l,a as i}from"./main-0ee1305c.js";import"./header-e201199f.js";let p;u?p=localStorage.getItem("userId"):Swal.fire({title:"無法加入隊伍",text:"請先進行登入",icon:"warning",background:"#060818",color:"#D6EEFF"});let g=parseInt(p);const v=async()=>{const o=document.querySelector("#joinMyTeamList"),c=await l.get(`${i}/teams?_expand=user`);let n=await l.get(`${i}/users`);n=n.data;const r=c.data;let t=[],a=[];r.forEach(e=>{e.teamMerberId.find(s=>s===g)&&r.forEach(s=>{if(e.id===s.id){let m=s.teamMerberId.filter(b=>b>0).length;t.push({...s,teamMemeberNumber:m})}})}),t.forEach(async e=>{console.log(e),await(async s=>{a=(await l.get(`${i}/teamsMember/${s}`)).data})(e.id),o.innerHTML=`            <div class="swiper-slide  bg-dark ">

    <div class="  bg-dark " style="height: fit-content">
      <div class="teamCard1  bg-dark ">
        <div class="card-header mb-4 mb-md-6">
          <div class="d-block d-md-flex justify-content-between mb-4 mb-md-6">
            <div class="mb-2 mb-md-0">
              <h3 class="card-title mb-2">${e.teamName}</h3>
              <p class="card-subtitle text-secondary">
                遊戲時間：${e.playTime}
              </p>
            </div>
            <div class="d-flex d-md-block justify-content-between align-items-center">
              <span class="d-block text-secondary fs-8 mb-0 mb-md-2">
                ${e.user.thumb}
                <i class="fa-regular fa-thumbs-up fs-7 ms-1"></i>
              </span>
              <span class="d-block text-secondary fs-6">
                <span class="text-white fs-5">${e.teamMemeberNumber}</span>
                /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
              </span>
            </div>
          </div>

        </div>
        <div class="card-body">
          <ul>
          <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
            ${a[0]===0?"<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>":`<p class="text-secondary">${a[0].username}</p>`}
            <span class="text-secondary fs-8">TOP</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero">
              <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:cover;
                  background-image: url(./images/${a[0]===0?"img-team-player@2x.png":`champion/${a[0].likeHero}.jpg`});
                "></div>
            </div>
            <div class="parallelogramRank">
              <div class="parallelogramContent teamCardRankBg" style="
              background-position:-3px -14px;
                  background-image: url(./images/${a[0]===0?"img-team-badge.png":`ranking/${a[0].userRank}.png`});
                "></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          ${a[1]===0?"<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>":`<p class="text-secondary">${a[1].username}</p>`}
          <span class="text-secondary fs-8">JG</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:cover;
                background-image: url(./images/${a[1]===0?"img-team-player@2x.png":`champion/${a[1].likeHero}.jpg`});
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
            background-position:-3px -14px;
                background-image: url(./images/${a[1]===0?"img-team-badge.png":`ranking/${a[1].userRank}.png`});
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
      <div class="d-flex justify-content-between mb-1">
        ${a[2]===0?"<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>":`<p class="text-secondary">${a[2].username}</p>`}
        <span class="text-secondary fs-8">MID</span>
      </div>
      <div class="d-flex justify-content-between">
        <div class="parallelogramHero">
          <div class="parallelogramContent teamCardHeroBg" style="
          background-position:0px -100%;
          background-size:cover;
              background-image: url(./images/${a[2]===0?"img-team-player@2x.png":`champion/${a[2].likeHero}.jpg`});
            "></div>
        </div>
        <div class="parallelogramRank">
          <div class="parallelogramContent teamCardRankBg" style="
          background-position:-3px -14px;
              background-image: url(./images/${a[2]===0?"img-team-badge.png":`ranking/${a[2].userRank}.png`});
            "></div>
        </div>
      </div>
    </li>
    <li class="mb-2">
    <div class="d-flex justify-content-between mb-1">
      ${a[3]===0?"<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>":`<p class="text-secondary">${a[3].username}</p>`}
      <span class="text-secondary fs-8">AD</span>
    </div>
    <div class="d-flex justify-content-between">
      <div class="parallelogramHero">
        <div class="parallelogramContent teamCardHeroBg" style="
        background-position:0px -100%;
        background-size:266px auto;
            background-image: url(./images/${a[3]===0?"img-team-player@2x.png":`champion/${a[3].likeHero}.jpg`});
          "></div>
      </div>
      <div class="parallelogramRank">
        <div class="parallelogramContent teamCardRankBg" style="
        background-position:-3px -14px;
            background-image: url(./images/${a[3]===0?"img-team-badge.png":`ranking/${a[3].userRank}.png`});
          "></div>
      </div>
    </div>
  </li>
  <li class="mb-2">
  <div class="d-flex justify-content-between mb-1">
    ${a[4]===0?"<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>":`<p class="text-secondary">${a[4].username}</p>`}
    <span class="text-secondary fs-8">SUP</span>
  </div>
  <div class="d-flex justify-content-between">
    <div class="parallelogramHero">
      <div class="parallelogramContent teamCardHeroBg" style="
        background-position:0px -100%;
        background-size:266px auto;
        
          background-image: url(./images/${a[4]===0?"img-team-player@2x.png":`champion/${a[4].likeHero}.jpg`});
        "></div>
    </div>
    <div class="parallelogramRank">
      <div class="parallelogramContent teamCardRankBg" style="
      background-position:-3px -14px;

          background-image: url(./images/${a[4]===0?"img-team-badge.png":`ranking/${a[4].userRank}.png`});
        "></div>
    </div>
  </div>
</li>
          </ul>
        </div>
      </div>
    </div>
  </div>`})},x=async()=>{const o=document.querySelector("#buildMyTeamList"),c=await l.get(`${i}/teams?_expand=user`);let n=await l.get(`${i}/users`);n=n.data;const r=c.data;let t=[],a=[];r.forEach(e=>{if(e.userId===g){let d=e.teamMerberId.filter(s=>s>0).length;t.push({...e,teamMemeberNumber:d})}}),console.log(t),t.forEach(async e=>{await(async s=>{a=(await l.get(`${i}/teamsMember/${s}`)).data})(e.id),o.innerHTML=`            <div class="swiper-slide  bg-dark ">

      <div class="  bg-dark " style="height: fit-content">
        <div class="teamCard1  bg-dark ">
          <div class="card-header mb-4 mb-md-6">
            <div class="d-block d-md-flex justify-content-between mb-4 mb-md-6">
              <div class="mb-2 mb-md-0">
                <h3 class="card-title mb-2">${e.teamName}</h3>
                <p class="card-subtitle text-secondary">
                  遊戲時間：${e.playTime}
                </p>
              </div>
              <div class="d-flex d-md-block justify-content-between align-items-center">
                <span class="d-block text-secondary fs-8 mb-0 mb-md-2">
                  ${e.user.thumb}
                  <i class="fa-regular fa-thumbs-up fs-7 ms-1"></i>
                </span>
                <span class="d-block text-secondary fs-6">
                  <span class="text-white fs-5">${e.teamMemeberNumber}</span>
                  /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
                </span>
              </div>
            </div>

          </div>
          <div class="card-body">
            <ul>
            <li class="mb-2">
            <div class="d-flex justify-content-between mb-1">
              ${a[0]===0?"<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>":`<p class="text-secondary">${a[0].username}</p>`}
              <span class="text-secondary fs-8">TOP</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="parallelogramHero">
                <div class="parallelogramContent teamCardHeroBg" style="
                background-position:0px -100%;
                background-size:cover;
                    background-image: url(./images/${a[0]===0?"img-team-player@2x.png":`champion/${a[0].likeHero}.jpg`});
                  "></div>
              </div>
              <div class="parallelogramRank">
                <div class="parallelogramContent teamCardRankBg" style="
                background-position:-3px -14px;
                    background-image: url(./images/${a[0]===0?"img-team-badge.png":`ranking/${a[0].userRank}.png`});
                  "></div>
              </div>
            </div>
          </li>
          <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
            ${a[1]===0?"<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>":`<p class="text-secondary">${a[1].username}</p>`}
            <span class="text-secondary fs-8">JG</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero">
              <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:cover;
                  background-image: url(./images/${a[1]===0?"img-team-player@2x.png":`champion/${a[1].likeHero}.jpg`});
                "></div>
            </div>
            <div class="parallelogramRank">
              <div class="parallelogramContent teamCardRankBg" style="
              background-position:-3px -14px;
                  background-image: url(./images/${a[1]===0?"img-team-badge.png":`ranking/${a[1].userRank}.png`});
                "></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          ${a[2]===0?"<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>":`<p class="text-secondary">${a[2].username}</p>`}
          <span class="text-secondary fs-8">MID</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:cover;
                background-image: url(./images/${a[2]===0?"img-team-player@2x.png":`champion/${a[2].likeHero}.jpg`});
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
            background-position:-3px -14px;
                background-image: url(./images/${a[2]===0?"img-team-badge.png":`ranking/${a[2].userRank}.png`});
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
      <div class="d-flex justify-content-between mb-1">
        ${a[3]===0?"<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>":`<p class="text-secondary">${a[3].username}</p>`}
        <span class="text-secondary fs-8">AD</span>
      </div>
      <div class="d-flex justify-content-between">
        <div class="parallelogramHero">
          <div class="parallelogramContent teamCardHeroBg" style="
          background-position:0px -100%;
          background-size:266px auto;
              background-image: url(./images/${a[3]===0?"img-team-player@2x.png":`champion/${a[3].likeHero}.jpg`});
            "></div>
        </div>
        <div class="parallelogramRank">
          <div class="parallelogramContent teamCardRankBg" style="
          background-position:-3px -14px;
              background-image: url(./images/${a[3]===0?"img-team-badge.png":`ranking/${a[3].userRank}.png`});
            "></div>
        </div>
      </div>
    </li>
    <li class="mb-2">
    <div class="d-flex justify-content-between mb-1">
      ${a[4]===0?"<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>":`<p class="text-secondary">${a[4].username}</p>`}
      <span class="text-secondary fs-8">SUP</span>
    </div>
    <div class="d-flex justify-content-between">
      <div class="parallelogramHero">
        <div class="parallelogramContent teamCardHeroBg" style="
          background-position:0px -100%;
          background-size:266px auto;

            background-image: url(./images/${a[4]===0?"img-team-player@2x.png":`champion/${a[4].likeHero}.jpg`});
          "></div>
      </div>
      <div class="parallelogramRank">
        <div class="parallelogramContent teamCardRankBg" style="
        background-position:-3px -14px;

            background-image: url(./images/${a[4]===0?"img-team-badge.png":`ranking/${a[4].userRank}.png`});
          "></div>
      </div>
    </div>
  </li>
            </ul>
          </div>
        </div>
      </div>
    </div>`})};v();x();
