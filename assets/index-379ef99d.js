import{b as d,a as o,l as v}from"./main-0ee1305c.js";import"./header-e201199f.js";let g=[];const u=document.querySelector(".popularTeamsCard"),x=document.querySelector(".popularPlayersCard");function y(){f(),m("#popularTeamsSwiper",3,1),k()}const f=async()=>{try{let i=[];const a=(await d.get(`${o}/teamsThumb?_sort=desc`)).data;let c="";for(const n of a){let e=[],p=[],s=[],t=[],b=n.teamMerberId.filter(l=>l>0);(await d.get(`${o}/teamsMember/${n.id}`)).data.forEach(l=>{l===null?p.push(0):p.push(l.avatar),l===null?e.push(0):e.push(l.username),l===null?s.push(0):s.push(l.userRank),l===null?t.push(0):t.push(l.likeHero)}),c+=`        
        <div class="swiper-slide teamListCard blueShadow">
          <div class="card-header mb-4 mb-md-6">
            <div class="d-block d-md-flex justify-content-between mb-4 mb-md-6">
              <div class="mb-2 mb-md-0">
                <h3 class="card-title mb-2">${n.teamName}</h3>
                <p class="card-subtitle text-secondary">
                  遊戲時間：${n.playTime}
                </p>
              </div>
              <div class="d-flex d-md-block justify-content-between align-items-center">
                <span class="d-block text-secondary fs-8 mb-0 mb-md-2">
                  ${n.thumb}
                  <i class="fa-regular fa-thumbs-up fs-7 ms-1"></i>
                </span>
                <span class="d-block text-secondary fs-6">
                  <span class="text-white fs-5">${b.length}</span>
                  /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
                </span>
              </div>
            </div>
            <button type="button" class="teamCardBtn blueShadow w-100" onclick="location.href='${v}/LOL-TeamMaster/pages/teamDetails.html?id=${n.id}'">
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
                        background-image: url(../assets/images/${t[0]===0?"img-team-player@2x.png":`champion/${t[0]}.jpg`});
                      "></div>
                  </div>
                  <div class="parallelogramRank">
                    <div class="parallelogramContent teamCardRankBg" style="
                    background-position:-3px -14px;
                        background-image: url(../assets/images/${s[0]===0?"img-team-badge.png":`ranking/${s[0]}.png`});
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
                      background-image: url(../assets/images/${t[1]===0?"img-team-player@2x.png":`champion/${t[1]}.jpg`});
                    "></div>
                </div>
                <div class="parallelogramRank">
                  <div class="parallelogramContent teamCardRankBg" style="
                  background-position:-3px -14px;
                      background-image: url(../assets/images/${s[1]===0?"img-team-badge.png":`ranking/${s[1]}.png`});
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
                    background-image: url(../assets/images/${t[2]===0?"img-team-player@2x.png":`champion/${t[2]}.jpg`});
                  "></div>
              </div>
              <div class="parallelogramRank">
                <div class="parallelogramContent teamCardRankBg" style="
                background-position:-3px -14px;
                    background-image: url(../assets/images/${s[2]===0?"img-team-badge.png":`ranking/${s[2]}.png`});
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
                  background-image: url(../assets/images/${t[3]===0?"img-team-player@2x.png":`champion/${t[3]}.jpg`});
                "></div>
            </div>
            <div class="parallelogramRank">
              <div class="parallelogramContent teamCardRankBg" style="
              background-position:-3px -14px;
                  background-image: url(../assets/images/${s[3]===0?"img-team-badge.png":`ranking/${s[3]}.png`});
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
              
                background-image: url(../assets/images/${t[4]===0?"img-team-player@2x.png":`champion/${t[4]}.jpg`});
              "></div>
          </div>
          <div class="parallelogramRank">
            <div class="parallelogramContent teamCardRankBg" style="
            background-position:-3px -14px;
  
                background-image: url(../assets/images/${s[4]===0?"img-team-badge.png":`ranking/${s[4]}.png`});
              "></div>
          </div>
        </div>
      </li>
            </ul>
          </div>
        </div>`}u.innerHTML=c}catch(i){console.error("Error fetching data:",i)}};function k(){d.get(`${o}/users?_embed=friendLists&_sort=thumb&_order=desc`).then(i=>{g=i.data,C(g),m("#popularPlayersSwiper",4,2)}).catch(i=>{console.log(i)})}function C(i){let r="";i.forEach(a=>{r+=`<div class="swiper-slide friendListCard border border-2 border-radius border-primary bg-dark blueShadow">
    <div class="meber-card-top">
      <div class="member-avatar position-relative">
        <div class="avatar">
          <img
            src="../assets/images/avatar/${a.avatar}.png"
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
                background-image: url(../assets/images/ranking/${a.userRank}.png);
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

    <h4 class="mt-12 text-center mb-4">${a.username}</h4>
    <div
      class="tag-group d-flex justify-content-center g-8 w-100 flex-wrap"
    >
    ${a.likePosition==="TOP"?'<div class="bage bage-text" data-likePosition="Top">TOP</div>':'<div class="bage bage-text bageGroup" data-likePosition="Top">TOP</div>'}
    ${a.likePosition==="JG"?'<div class="bage bage-text">JG</div>':'<div class="bage bage-text bageGroup">JG</div>'}
    ${a.likePosition==="MID"?'<div class="bage bage-text">MID</div>':'<div class="bage bage-text bageGroup">MID</div>'}
    ${a.likePosition==="AD"?'<div class="bage bage-text">AD</div>':'<div class="bage bage-text bageGroup">AD</div>'}
    ${a.likePosition==="SUP"?'<div class="bage bage-text">SUP</div>':'<div class="bage bage-text bageGroup">SUP</div>'}
    </div>
    <div class="thumb my-6">
      <p class="thum-text text-center">
      ${a.thumb} <span><i class="fa-regular fa-thumbs-up"></i></span>
      </p>
    </div>
    <div
      class="button-all d-flex justify-content-center gap-4 mb-8"
      style="height: 48px"
    >
    <button class="jsAddFriendBtn btn border border-primary text-primary" style="width: 70%" data-friendInvite="${a.id}">
    加為好友
    <span data-friendInvite="${a.id}">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        data-friendInvite="${a.id}"
      >
        <path
          d="M13 11C13.5933 11 14.1734 10.8241 14.6667 10.4944C15.1601 10.1648 15.5446 9.69623 15.7716 9.14805C15.9987 8.59987 16.0581 7.99667 15.9424 7.41473C15.8266 6.83279 15.5409 6.29824 15.1213 5.87868C14.7018 5.45912 14.1672 5.1734 13.5853 5.05765C13.0033 4.94189 12.4001 5.0013 11.8519 5.22836C11.3038 5.45543 10.8352 5.83994 10.5056 6.33329C10.1759 6.82664 10 7.40666 10 8C10 8.79565 10.3161 9.55871 10.8787 10.1213C11.4413 10.6839 12.2044 11 13 11ZM13 7C13.1978 7 13.3911 7.05865 13.5556 7.16853C13.72 7.27841 13.8482 7.43459 13.9239 7.61732C13.9996 7.80004 14.0194 8.00111 13.9808 8.19509C13.9422 8.38907 13.847 8.56726 13.7071 8.70711C13.5673 8.84696 13.3891 8.9422 13.1951 8.98079C13.0011 9.01937 12.8 8.99957 12.6173 8.92388C12.4346 8.84819 12.2784 8.72002 12.1685 8.55557C12.0586 8.39112 12 8.19778 12 8C12 7.73478 12.1054 7.48043 12.2929 7.29289C12.4804 7.10536 12.7348 7 13 7ZM17.11 10.86C17.6951 10.021 18.0087 9.02282 18.0087 8C18.0087 6.97718 17.6951 5.97897 17.11 5.14C17.3976 5.04741 17.6979 5.00018 18 5C18.7956 5 19.5587 5.31607 20.1213 5.87868C20.6839 6.44129 21 7.20435 21 8C21 8.79565 20.6839 9.55871 20.1213 10.1213C19.5587 10.6839 18.7956 11 18 11C17.6979 10.9998 17.3976 10.9526 17.11 10.86ZM13 13C7 13 7 17 7 17V19H19V17C19 17 19 13 13 13ZM9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17C20.9766 16.2566 20.8054 15.5254 20.4964 14.8489C20.1873 14.1724 19.7466 13.5643 19.2 13.06C24 13.55 24 17 24 17ZM8 12H5V15H3V12H0V10H3V7H5V10H8V12Z"
          fill="#D6EEFF"
          data-friendInvite="${a.id}"
        />
      </svg>
    </span>
  </button>
    </div>
  </div>
</div>
        `}),x.innerHTML=r}function m(i,r,a){new Swiper(i,{slidesPerView:r,spaceBetween:24,loop:!0,grabCursor:"true",pagination:{el:`#swiper-pagination${a}`,clickable:!0},navigation:{nextEl:`#swiper-button-next${a}`,prevEl:`#swiper-button-prev${a}`},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:r}}})}y();
