import{a as m,l as b}from"./main-bdd2aebe.js";import"./header-a7c960aa.js";const x=async()=>{try{const n=document.querySelector("#teamListBox");let r=[],g="";const u=(await axios.get(`${m}/teams?_expand=user`)).data;for(const d of u){let l=[],e=[],i=[],a=[],s=d.teamMerberId.filter(o=>o>0);(await axios.get(`${m}/teamsMember/${d.id}`)).data.forEach(o=>{o===null?e.push(0):e.push(o.avatar),o===null?l.push(0):l.push(o.username),o===null?i.push(0):i.push(o.userRank),o===null?a.push(0):a.push(o.likeHero)}),g+=`        
      <div class="teamListCard blueShadow mx-4 mx-md-3 my-8" style="width:30%">
        <div class="card-header mb-4 mb-md-6">
          <div class="d-block d-md-flex justify-content-between mb-4 mb-md-6">
            <div class="mb-2 mb-md-0">
              <h3 class="card-title mb-2">${d.teamName}</h3>
              <p class="card-subtitle text-secondary">
                遊戲時間：${d.playTime}
              </p>
            </div>
            <div class="d-flex d-md-block justify-content-between align-items-center">
              <span class="d-block text-secondary fs-8 mb-0 mb-md-2">
                ${d.user.thumb}
                <i class="fa-regular fa-thumbs-up fs-7 ms-1"></i>
              </span>
              <span class="d-block text-secondary fs-6">
                <span class="text-white fs-5">${s.length}</span>
                /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
              </span>
            </div>
          </div>
          <button type="button" class="teamCardBtn blueShadow w-100" onclick="location.href='${b}/LOL-TeamMaster/teamDetails.html?id=${d.id}'">
            <p class="fs-7 w-100">立即加入</p>
          </button>
        </div>
        <div class="card-body">
          <ul>
            <li class="mb-2">
              <div class="d-flex justify-content-between mb-1">
                ${l[0]===0?"<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>":`<p class="text-secondary">${l[0]}</p>`}
                <span class="text-secondary fs-8">TOP</span>
              </div>
              <div class="d-flex justify-content-between">
                <div class="parallelogramHero">
                  <div class="parallelogramContent teamCardHeroBg" style="
                  background-position:0px -100%;
                  background-size:cover;
                      background-image: url(./images/${a[0]===0?"img-team-player@2x.png":`champion/${a[0]}.jpg`});
                    "></div>
                </div>
                <div class="parallelogramRank">
                  <div class="parallelogramContent teamCardRankBg" style="
                  background-position:-3px -14px;
                      background-image: url(./images/${i[0]===0?"img-team-badge.png":`ranking/${i[0]}.png`});
                    "></div>
                </div>
              </div>
            </li>
            <li class="mb-2">
            <div class="d-flex justify-content-between mb-1">
              ${l[1]===0?"<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>":`<p class="text-secondary">${l[1]}</p>`}
              <span class="text-secondary fs-8">JG</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="parallelogramHero">
                <div class="parallelogramContent teamCardHeroBg" style="
                background-position:0px -100%;
                background-size:cover;
                    background-image: url(./images/${a[1]===0?"img-team-player@2x.png":`champion/${a[1]}.jpg`});
                  "></div>
              </div>
              <div class="parallelogramRank">
                <div class="parallelogramContent teamCardRankBg" style="
                background-position:-3px -14px;
                    background-image: url(./images/${i[1]===0?"img-team-badge.png":`ranking/${i[1]}.png`});
                  "></div>
              </div>
            </div>
          </li>
          <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
            ${l[2]===0?"<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>":`<p class="text-secondary">${l[2]}</p>`}
            <span class="text-secondary fs-8">MID</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero">
              <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:cover;
                  background-image: url(./images/${a[2]===0?"img-team-player@2x.png":`champion/${a[2]}.jpg`});
                "></div>
            </div>
            <div class="parallelogramRank">
              <div class="parallelogramContent teamCardRankBg" style="
              background-position:-3px -14px;
                  background-image: url(./images/${i[2]===0?"img-team-badge.png":`ranking/${i[2]}.png`});
                "></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          ${l[3]===0?"<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>":`<p class="text-secondary">${l[3]}</p>`}
          <span class="text-secondary fs-8">AD</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
                background-image: url(./images/${a[3]===0?"img-team-player@2x.png":`champion/${a[3]}.jpg`});
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
            background-position:-3px -14px;
                background-image: url(./images/${i[3]===0?"img-team-badge.png":`ranking/${i[3]}.png`});
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
      <div class="d-flex justify-content-between mb-1">
        ${l[4]===0?"<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>":`<p class="text-secondary">${l[4]}</p>`}
        <span class="text-secondary fs-8">SUP</span>
      </div>
      <div class="d-flex justify-content-between">
        <div class="parallelogramHero">
          <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
            
              background-image: url(./images/${a[4]===0?"img-team-player@2x.png":`champion/${a[4]}.jpg`});
            "></div>
        </div>
        <div class="parallelogramRank">
          <div class="parallelogramContent teamCardRankBg" style="
          background-position:-3px -14px;

              background-image: url(./images/${i[4]===0?"img-team-badge.png":`ranking/${i[4]}.png`});
            "></div>
        </div>
      </div>
    </li>
          </ul>
        </div>
      </div>`}n.innerHTML=g}catch(n){console.error("Error fetching data:",n)}},y=async n=>{try{const r=document.querySelector("#teamListBox");let g=[],c="";const d=(await axios.get(`${m}/teams?rankLimt=${n}&_expand=user`)).data;for(const l of d){let e=[],i=[],a=[],s=[],p=l.teamMerberId.filter(t=>t>0);(await axios.get(`${m}/teamsMember/${l.id}`)).data.forEach(t=>{t===null?i.push(0):i.push(t.avatar),t===null?e.push(0):e.push(t.username),t===null?a.push(0):a.push(t.userRank),t===null?s.push(0):s.push(t.likeHero)}),c+=`        
      <div class="teamListCard blueShadow mx-4 mx-md-3 my-8" style="width:30%">
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
                <span class="text-white fs-5">${p.length}</span>
                /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
              </span>
            </div>
          </div>
          <button type="button" class="teamCardBtn blueShadow w-100" onclick="location.href='${b}/LOL-TeamMaster/teamDetails.html?id=${l.id}'">
                <p class="fs-7 w-100">立即加入</p>
              </button>
        </div>
        <div class="card-body">
          <ul>
            <li class="mb-2">
              <div class="d-flex justify-content-between mb-1">
                ${e[0]===0?"<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>":`<p class="text-secondary">${e[0]}</p>`}
                <span class="text-secondary fs-8">TOP</span>
              </div>
              <div class="d-flex justify-content-between">
                <div class="parallelogramHero">
                  <div class="parallelogramContent teamCardHeroBg" style="
                  background-position:0px -100%;
                  background-size:cover;
                      background-image: url(./images/${s[0]===0?"img-team-player@2x.png":`champion/${s[0]}.jpg`});
                    "></div>
                </div>
                <div class="parallelogramRank">
                  <div class="parallelogramContent teamCardRankBg" style="
                  background-position:-3px -14px;
                      background-image: url(./images/${a[0]===0?"img-team-badge.png":`ranking/${a[0]}.png`});
                    "></div>
                </div>
              </div>
            </li>
            <li class="mb-2">
            <div class="d-flex justify-content-between mb-1">
              ${e[1]===0?"<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>":`<p class="text-secondary">${e[1]}</p>`}
              <span class="text-secondary fs-8">JG</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="parallelogramHero">
                <div class="parallelogramContent teamCardHeroBg" style="
                background-position:0px -100%;
                background-size:cover;
                    background-image: url(./images/${s[1]===0?"img-team-player@2x.png":`champion/${s[1]}.jpg`});
                  "></div>
              </div>
              <div class="parallelogramRank">
                <div class="parallelogramContent teamCardRankBg" style="
                background-position:-3px -14px;
                    background-image: url(./images/${a[1]===0?"img-team-badge.png":`ranking/${a[1]}.png`});
                  "></div>
              </div>
            </div>
          </li>
          <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
            ${e[2]===0?"<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>":`<p class="text-secondary">${e[2]}</p>`}
            <span class="text-secondary fs-8">MID</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero">
              <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:cover;
                  background-image: url(./images/${s[2]===0?"img-team-player@2x.png":`champion/${s[2]}.jpg`});
                "></div>
            </div>
            <div class="parallelogramRank">
              <div class="parallelogramContent teamCardRankBg" style="
              background-position:-3px -14px;
                  background-image: url(./images/${a[2]===0?"img-team-badge.png":`ranking/${a[2]}.png`});
                "></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          ${e[3]===0?"<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>":`<p class="text-secondary">${e[3]}</p>`}
          <span class="text-secondary fs-8">AD</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
                background-image: url(./images/${s[3]===0?"img-team-player@2x.png":`champion/${s[3]}.jpg`});
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
            background-position:-3px -14px;
                background-image: url(./images/${a[3]===0?"img-team-badge.png":`ranking/${a[3]}.png`});
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
      <div class="d-flex justify-content-between mb-1">
        ${e[4]===0?"<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>":`<p class="text-secondary">${e[4]}</p>`}
        <span class="text-secondary fs-8">SUP</span>
      </div>
      <div class="d-flex justify-content-between">
        <div class="parallelogramHero">
          <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
            
              background-image: url(./images/${s[4]===0?"img-team-player@2x.png":`champion/${s[4]}.jpg`});
            "></div>
        </div>
        <div class="parallelogramRank">
          <div class="parallelogramContent teamCardRankBg" style="
          background-position:-3px -14px;

              background-image: url(./images/${a[4]===0?"img-team-badge.png":`ranking/${a[4]}.png`});
            "></div>
        </div>
      </div>
    </li>
          </ul>
        </div>
      </div>`}r.innerHTML=c}catch(r){console.error("Error fetching data:",r)}},k=async n=>{try{const r=document.querySelector("#teamListBox");let g=[],c="";const d=(await axios.get(`${m}/teams?playTime_lte=${n}&_expand=user`)).data;for(const l of d){let e=[],i=[],a=[],s=[],p=l.teamMerberId.filter(t=>t>0);(await axios.get(`${m}/teamsMember/${l.id}`)).data.forEach(t=>{t===null?i.push(0):i.push(t.avatar),t===null?e.push(0):e.push(t.username),t===null?a.push(0):a.push(t.userRank),t===null?s.push(0):s.push(t.likeHero)}),c+=`        
      <div class="teamListCard blueShadow mx-4 mx-md-3 my-8" style="width:30%">
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
                <span class="text-white fs-5">${p.length}</span>
                /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
              </span>
            </div>
          </div>
          <button type="button" class="teamCardBtn blueShadow w-100" onclick="location.href='${b}/LOL-TeamMaster/teamDetails.html?id=${l.id}'">
                <p class="fs-7 w-100">立即加入</p>
              </button>
        </div>
        <div class="card-body">
          <ul>
            <li class="mb-2">
              <div class="d-flex justify-content-between mb-1">
                ${e[0]===0?"<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>":`<p class="text-secondary">${e[0]}</p>`}
                <span class="text-secondary fs-8">TOP</span>
              </div>
              <div class="d-flex justify-content-between">
                <div class="parallelogramHero">
                  <div class="parallelogramContent teamCardHeroBg" style="
                  background-position:0px -100%;
                  background-size:cover;
                      background-image: url(./images/${s[0]===0?"img-team-player@2x.png":`champion/${s[0]}.jpg`});
                    "></div>
                </div>
                <div class="parallelogramRank">
                  <div class="parallelogramContent teamCardRankBg" style="
                  background-position:-3px -14px;
                      background-image: url(./images/${a[0]===0?"img-team-badge.png":`ranking/${a[0]}.png`});
                    "></div>
                </div>
              </div>
            </li>
            <li class="mb-2">
            <div class="d-flex justify-content-between mb-1">
              ${e[1]===0?"<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>":`<p class="text-secondary">${e[1]}</p>`}
              <span class="text-secondary fs-8">JG</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="parallelogramHero">
                <div class="parallelogramContent teamCardHeroBg" style="
                background-position:0px -100%;
                background-size:cover;
                    background-image: url(./images/${s[1]===0?"img-team-player@2x.png":`champion/${s[1]}.jpg`});
                  "></div>
              </div>
              <div class="parallelogramRank">
                <div class="parallelogramContent teamCardRankBg" style="
                background-position:-3px -14px;
                    background-image: url(./images/${a[1]===0?"img-team-badge.png":`ranking/${a[1]}.png`});
                  "></div>
              </div>
            </div>
          </li>
          <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
            ${e[2]===0?"<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>":`<p class="text-secondary">${e[2]}</p>`}
            <span class="text-secondary fs-8">MID</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero">
              <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:cover;
                  background-image: url(./images/${s[2]===0?"img-team-player@2x.png":`champion/${s[2]}.jpg`});
                "></div>
            </div>
            <div class="parallelogramRank">
              <div class="parallelogramContent teamCardRankBg" style="
              background-position:-3px -14px;
                  background-image: url(./images/${a[2]===0?"img-team-badge.png":`ranking/${a[2]}.png`});
                "></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          ${e[3]===0?"<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>":`<p class="text-secondary">${e[3]}</p>`}
          <span class="text-secondary fs-8">AD</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
                background-image: url(./images/${s[3]===0?"img-team-player@2x.png":`champion/${s[3]}.jpg`});
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
            background-position:-3px -14px;
                background-image: url(./images/${a[3]===0?"img-team-badge.png":`ranking/${a[3]}.png`});
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
      <div class="d-flex justify-content-between mb-1">
        ${e[4]===0?"<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>":`<p class="text-secondary">${e[4]}</p>`}
        <span class="text-secondary fs-8">SUP</span>
      </div>
      <div class="d-flex justify-content-between">
        <div class="parallelogramHero">
          <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
            
              background-image: url(./images/${s[4]===0?"img-team-player@2x.png":`champion/${s[4]}.jpg`});
            "></div>
        </div>
        <div class="parallelogramRank">
          <div class="parallelogramContent teamCardRankBg" style="
          background-position:-3px -14px;

              background-image: url(./images/${a[4]===0?"img-team-badge.png":`ranking/${a[4]}.png`});
            "></div>
        </div>
      </div>
    </li>
          </ul>
        </div>
      </div>`}r.innerHTML=c}catch(r){console.error("Error fetching data:",r)}},f=async n=>{try{const r=document.querySelector("#teamListBox");let g=[],c="";const d=(await axios.get(`${m}/teams?q=${n}&_expand=user`)).data;for(const l of d){let e=[],i=[],a=[],s=[],p=l.teamMerberId.filter(t=>t>0);(await axios.get(`${m}/teamsMember/${l.id}`)).data.forEach(t=>{t===null?i.push(0):i.push(t.avatar),t===null?e.push(0):e.push(t.username),t===null?a.push(0):a.push(t.userRank),t===null?s.push(0):s.push(t.likeHero)}),c+=`        
      <div class="teamListCard blueShadow mx-4 mx-md-3 my-8" style="width:30%">
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
                <span class="text-white fs-5">${p.length}</span>
                /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
              </span>
            </div>
          </div>
          <button type="button" class="teamCardBtn blueShadow w-100" onclick="location.href='${b}/LOL-TeamMaster/teamDetails.html?id=${l.id}'">
                <p class="fs-7 w-100">立即加入</p>
              </button>
        </div>
        <div class="card-body">
          <ul>
            <li class="mb-2">
              <div class="d-flex justify-content-between mb-1">
                ${e[0]===0?"<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>":`<p class="text-secondary">${e[0]}</p>`}
                <span class="text-secondary fs-8">TOP</span>
              </div>
              <div class="d-flex justify-content-between">
                <div class="parallelogramHero">
                  <div class="parallelogramContent teamCardHeroBg" style="
                  background-position:0px -100%;
                  background-size:cover;
                      background-image: url(./images/${s[0]===0?"img-team-player@2x.png":`champion/${s[0]}.jpg`});
                    "></div>
                </div>
                <div class="parallelogramRank">
                  <div class="parallelogramContent teamCardRankBg" style="
                  background-position:-3px -14px;
                      background-image: url(./images/${a[0]===0?"img-team-badge.png":`ranking/${a[0]}.png`});
                    "></div>
                </div>
              </div>
            </li>
            <li class="mb-2">
            <div class="d-flex justify-content-between mb-1">
              ${e[1]===0?"<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>":`<p class="text-secondary">${e[1]}</p>`}
              <span class="text-secondary fs-8">JG</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="parallelogramHero">
                <div class="parallelogramContent teamCardHeroBg" style="
                background-position:0px -100%;
                background-size:cover;
                    background-image: url(./images/${s[1]===0?"img-team-player@2x.png":`champion/${s[1]}.jpg`});
                  "></div>
              </div>
              <div class="parallelogramRank">
                <div class="parallelogramContent teamCardRankBg" style="
                background-position:-3px -14px;
                    background-image: url(./images/${a[1]===0?"img-team-badge.png":`ranking/${a[1]}.png`});
                  "></div>
              </div>
            </div>
          </li>
          <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
            ${e[2]===0?"<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>":`<p class="text-secondary">${e[2]}</p>`}
            <span class="text-secondary fs-8">MID</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero">
              <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:cover;
                  background-image: url(./images/${s[2]===0?"img-team-player@2x.png":`champion/${s[2]}.jpg`});
                "></div>
            </div>
            <div class="parallelogramRank">
              <div class="parallelogramContent teamCardRankBg" style="
              background-position:-3px -14px;
                  background-image: url(./images/${a[2]===0?"img-team-badge.png":`ranking/${a[2]}.png`});
                "></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          ${e[3]===0?"<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>":`<p class="text-secondary">${e[3]}</p>`}
          <span class="text-secondary fs-8">AD</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
                background-image: url(./images/${s[3]===0?"img-team-player@2x.png":`champion/${s[3]}.jpg`});
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
            background-position:-3px -14px;
                background-image: url(./images/${a[3]===0?"img-team-badge.png":`ranking/${a[3]}.png`});
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
      <div class="d-flex justify-content-between mb-1">
        ${e[4]===0?"<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>":`<p class="text-secondary">${e[4]}</p>`}
        <span class="text-secondary fs-8">SUP</span>
      </div>
      <div class="d-flex justify-content-between">
        <div class="parallelogramHero">
          <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
            
              background-image: url(./images/${s[4]===0?"img-team-player@2x.png":`champion/${s[4]}.jpg`});
            "></div>
        </div>
        <div class="parallelogramRank">
          <div class="parallelogramContent teamCardRankBg" style="
          background-position:-3px -14px;

              background-image: url(./images/${a[4]===0?"img-team-badge.png":`ranking/${a[4]}.png`});
            "></div>
        </div>
      </div>
    </li>
          </ul>
        </div>
      </div>`}r.innerHTML=c}catch(r){console.error("Error fetching data:",r)}},v=async n=>{try{const r=document.querySelector("#teamListBox");let g=[],c="";const d=(await axios.get(`${m}/teamsThumb?_sort=${n}`)).data;for(const l of d){let e=[],i=[],a=[],s=[],p=l.teamMerberId.filter(t=>t>0);(await axios.get(`${m}/teamsMember/${l.id}`)).data.forEach(t=>{t===null?i.push(0):i.push(t.avatar),t===null?e.push(0):e.push(t.username),t===null?a.push(0):a.push(t.userRank),t===null?s.push(0):s.push(t.likeHero)}),c+=`        
      <div class="teamListCard blueShadow mx-4 mx-md-3 my-8" style="width:30%">
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
                ${l.thumb}
                <i class="fa-regular fa-thumbs-up fs-7 ms-1"></i>
              </span>
              <span class="d-block text-secondary fs-6">
                <span class="text-white fs-5">${p.length}</span>
                /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
              </span>
            </div>
          </div>
          <button type="button" class="teamCardBtn blueShadow w-100" onclick="location.href='${b}/LOL-TeamMaster/teamDetails.html?id=${l.id}'">
                <p class="fs-7 w-100">立即加入</p>
              </button>
        </div>
        <div class="card-body">
          <ul>
            <li class="mb-2">
              <div class="d-flex justify-content-between mb-1">
                ${e[0]===0?"<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>":`<p class="text-secondary">${e[0]}</p>`}
                <span class="text-secondary fs-8">TOP</span>
              </div>
              <div class="d-flex justify-content-between">
                <div class="parallelogramHero">
                  <div class="parallelogramContent teamCardHeroBg" style="
                  background-position:0px -100%;
                  background-size:cover;
                      background-image: url(./images/${s[0]===0?"img-team-player@2x.png":`champion/${s[0]}.jpg`});
                    "></div>
                </div>
                <div class="parallelogramRank">
                  <div class="parallelogramContent teamCardRankBg" style="
                  background-position:-3px -14px;
                      background-image: url(./images/${a[0]===0?"img-team-badge.png":`ranking/${a[0]}.png`});
                    "></div>
                </div>
              </div>
            </li>
            <li class="mb-2">
            <div class="d-flex justify-content-between mb-1">
              ${e[1]===0?"<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>":`<p class="text-secondary">${e[1]}</p>`}
              <span class="text-secondary fs-8">JG</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="parallelogramHero">
                <div class="parallelogramContent teamCardHeroBg" style="
                background-position:0px -100%;
                background-size:cover;
                    background-image: url(./images/${s[1]===0?"img-team-player@2x.png":`champion/${s[1]}.jpg`});
                  "></div>
              </div>
              <div class="parallelogramRank">
                <div class="parallelogramContent teamCardRankBg" style="
                background-position:-3px -14px;
                    background-image: url(./images/${a[1]===0?"img-team-badge.png":`ranking/${a[1]}.png`});
                  "></div>
              </div>
            </div>
          </li>
          <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
            ${e[2]===0?"<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>":`<p class="text-secondary">${e[2]}</p>`}
            <span class="text-secondary fs-8">MID</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero">
              <div class="parallelogramContent teamCardHeroBg" style="
              background-position:0px -100%;
              background-size:cover;
                  background-image: url(./images/${s[2]===0?"img-team-player@2x.png":`champion/${s[2]}.jpg`});
                "></div>
            </div>
            <div class="parallelogramRank">
              <div class="parallelogramContent teamCardRankBg" style="
              background-position:-3px -14px;
                  background-image: url(./images/${a[2]===0?"img-team-badge.png":`ranking/${a[2]}.png`});
                "></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
        <div class="d-flex justify-content-between mb-1">
          ${e[3]===0?"<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>":`<p class="text-secondary">${e[3]}</p>`}
          <span class="text-secondary fs-8">AD</span>
        </div>
        <div class="d-flex justify-content-between">
          <div class="parallelogramHero">
            <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
                background-image: url(./images/${s[3]===0?"img-team-player@2x.png":`champion/${s[3]}.jpg`});
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
            background-position:-3px -14px;
                background-image: url(./images/${a[3]===0?"img-team-badge.png":`ranking/${a[3]}.png`});
              "></div>
          </div>
        </div>
      </li>
      <li class="mb-2">
      <div class="d-flex justify-content-between mb-1">
        ${e[4]===0?"<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>":`<p class="text-secondary">${e[4]}</p>`}
        <span class="text-secondary fs-8">SUP</span>
      </div>
      <div class="d-flex justify-content-between">
        <div class="parallelogramHero">
          <div class="parallelogramContent teamCardHeroBg" style="
            background-position:0px -100%;
            background-size:266px auto;
            
              background-image: url(./images/${s[4]===0?"img-team-player@2x.png":`champion/${s[4]}.jpg`});
            "></div>
        </div>
        <div class="parallelogramRank">
          <div class="parallelogramContent teamCardRankBg" style="
          background-position:-3px -14px;

              background-image: url(./images/${a[4]===0?"img-team-badge.png":`ranking/${a[4]}.png`});
            "></div>
        </div>
      </div>
    </li>
          </ul>
        </div>
      </div>`}r.innerHTML=c}catch(r){console.error("Error fetching data:",r)}};x();document.querySelector("#thumbDesc").addEventListener("click",()=>{v("desc")});document.querySelector("#thumbAsc").addEventListener("click",()=>{v("asc")});document.querySelector("#dateLte").addEventListener("change",()=>{const n=document.querySelector("#dateLte").value;k(`${n}`),console.log(n)});document.querySelectorAll("#rankSelect li").forEach(n=>{n.addEventListener("click",r=>{y(r.target.dataset.rank)})});document.querySelector("#teamQuery").addEventListener("change",n=>{f(`${n.target.value}`)});
