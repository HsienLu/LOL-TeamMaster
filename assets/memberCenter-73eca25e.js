import{u as i,b as s,a as r,m as d,S as o}from"./main-0ee1305c.js";import"./header-e201199f.js";i||(location.href="index.html");const D=document.querySelector("#memberAccount"),C=document.querySelector("#memberName"),B=document.querySelector("#memberThumb"),S=document.querySelector("#memberAvatar"),P=document.querySelector("#memberRank"),I=document.querySelector("#memberPosition"),L=document.querySelector("#memberHero"),A={Iron:"鐵",Bronze:"銅",Silver:"銀",Gold:"金",Platinum:"白金",Emerald:"翡翠",Diamond:"鑽石",Master:"大師",Grandmaster:"宗師",Challenger:"菁英"};s.get(`${r}/600/users/${d}`,{headers:{Authorization:`Bearer ${i}`}}).then(a=>{D.value=a.data.email,C.value=a.data.username,B.textContent=a.data.thumb,S.src=`../assets/images/avatar/${a.data.avatar}.png`,P.textContent=A[a.data.userRank],I.textContent=a.data.likePosition,L.style=`background-image: url(../assets/images/champion/${a.data.likeHero}.jpg)`}).then(a=>{console.log(a)});i||(location.href="index.html");let g=[],p=[],u=[],h=[],v=[],f=[],x=[];const y=document.querySelector(".evaluateCard"),$=document.querySelector(".friendCard"),w=document.querySelector(".blackCard"),j=document.querySelector(".historicalCard");function G(){T(),H(),R(),E()}async function T(){try{(await s.get(`${r}/600/comments?userId=${d}`,{headers:{Authorization:`Bearer ${i}`}})).data.forEach(t=>{g.push(t.commentedId)}),p=(await s.get(`${r}/users`)).data.filter(t=>g.includes(t.id)),k(),l("#evaluateSwiper",4,3)}catch(a){console.log(a)}}function k(){let a="";p.forEach(e=>{a+=`
    <div class="swiper-slide memberEvaluateCard border border-2 border-radius border-primary w-20 bg-dark blueShadow">
      <div class="meber-card-top">
        <div class="member-avatar position-relative">
          <img
            src="../assets/images/avatar/${e.avatar}.png"
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
                  background-image: url(../assets/images/ranking/${e.userRank}.png);
                  background-size: cover;
                  background-position: center;
                  width: 82px;
                  height: 60px;">
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 class="mt-12 text-center mb-4">${e.username}</h4>
      <div class="tag-group d-flex justify-content-center g-8 w-100 flex-wrap">
      ${e.likePosition==="TOP"?'<div class="bage bage-text">TOP</div>':'<div class="bage bage-text bageGroup">TOP</div>'}
      ${e.likePosition==="JG"?'<div class="bage bage-text">JG</div>':'<div class="bage bage-text bageGroup">JG</div>'}
      ${e.likePosition==="MID"?'<div class="bage bage-text">MID</div>':'<div class="bage bage-text bageGroup">MID</div>'}
      ${e.likePosition==="AD"?'<div class="bage bage-text">AD</div>':'<div class="bage bage-text bageGroup">AD</div>'}
      ${e.likePosition==="SUP"?'<div class="bage bage-text">SUP</div>':'<div class="bage bage-text bageGroup">SUP</div>'}
      </div>
      <div class="commentThumb my-6">
        <button class="jsCancelCommentBtn btn btnShadow d-block border border-primary text-primary w-50 mx-auto" data-id="${e.id}">
          取消按讚
          <span data-id="${e.id}">
            <i class="fa-regular fa-thumbs-up ms-1" data-id="${e.id}"></i>
          </span>
        </button>
      </div>
    </div>
    `}),y.innerHTML=a}y.addEventListener("click",async a=>{try{if(a.target.getAttribute("class")!=="jsCancelCommentBtn btn btnShadow d-block border border-primary text-primary w-50 mx-auto")return;const t=a.target.getAttribute("data-id"),n=await s.get(`${r}/600/comments?userId=${d}&commentedId=${t}`,{headers:{Authorization:`Bearer ${i}`}});await s.delete(`${r}/600/comments/${n.data[0].id}`,{headers:{Authorization:`Bearer ${i}`}}),o.fire({icon:"success",title:"取消成功",showConfirmButton:!1,timer:1500,background:"#060818",color:"#D6EEFF"}),k()}catch(e){console.log(e)}});async function H(){try{(await s.get(`${r}/600/friendLists?userId=${d}`,{headers:{Authorization:`Bearer ${i}`}})).data.forEach(t=>{u.push(t.friendId)}),h=(await s.get(`${r}/users`)).data.filter(t=>u.includes(t.id)),m(),l("#friendListSwiper",3,4)}catch(a){console.log(a)}}function m(){let a="";h.forEach(e=>{a+=`
    <div class="swiper-slide friendListCard border border-2 border-radius border-primary bg-dark blueShadow">
      <div class="meber-card-top">
        <div class="member-avatar position-relative">
          <div class="avatar">
            <img
              src="../assets/images/avatar/${e.avatar}.png"
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
                  background-image: url(../assets/images/ranking/${e.userRank}.png);
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

      <h4 class="mt-12 text-center mb-4">${e.username}</h4>
      <div
        class="tag-group d-flex justify-content-center g-8 w-100 flex-wrap"
      >
      ${e.likePosition==="TOP"?'<div class="bage bage-text" data-likePosition="Top">TOP</div>':'<div class="bage bage-text bageGroup" data-likePosition="Top">TOP</div>'}
      ${e.likePosition==="JG"?'<div class="bage bage-text">JG</div>':'<div class="bage bage-text bageGroup">JG</div>'}
      ${e.likePosition==="MID"?'<div class="bage bage-text">MID</div>':'<div class="bage bage-text bageGroup">MID</div>'}
      ${e.likePosition==="AD"?'<div class="bage bage-text">AD</div>':'<div class="bage bage-text bageGroup">AD</div>'}
      ${e.likePosition==="SUP"?'<div class="bage bage-text">SUP</div>':'<div class="bage bage-text bageGroup">SUP</div>'}
      </div>
      <div class="thumb my-6">
        <p class="thum-text text-center">
        ${e.thumb} <span><i class="fa-regular fa-thumbs-up"></i></span>
        </p>
      </div>
      <div
        class="button-all d-flex justify-content-center gap-4 mb-8"
        style="height: 48px"
      >
        <button class="btn btnShadow border border-primary text-primary w-40" data-banId=${e.id}>
          列為黑名單
          <span>
            <i class="fa-solid fa-ban ms-1"></i>
          </span>
        </button>
        <button class="btn btnShadow border border-primary text-primary w-40" data-removeId=${e.id}>
          移除好友
          <span>
            <i class="fa-solid fa-user-minus ms-1"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
    `}),$.innerHTML=a}$.addEventListener("click",async a=>{try{if(a.target.getAttribute("class")!=="btn btnShadow border border-primary text-primary w-40")return;const t=a.target.getAttribute("data-banId"),n=a.target.getAttribute("data-removeId");if(t){const c=await s.get(`${r}/600/friendLists?userId=${d}&friendId=${t}`,{headers:{Authorization:`Bearer ${i}`}});await s.delete(`${r}/600/friendLists/${c.data[0].id}`,{headers:{Authorization:`Bearer ${i}`}}),await s.post(`${r}/600/banLists`,{userId:d,friendId:Number(t)},{headers:{Authorization:`Bearer ${i}`}}),o.fire({icon:"success",title:"加入黑名單成功",showConfirmButton:!1,timer:1500,background:"#060818",color:"#D6EEFF"}),m(),b(),l("#friendListSwiper",3,4),l("#blackListSwiper",4,5)}if(n){const c=await s.get(`${r}/600/friendLists?userId=${d}&friendId=${n}`,{headers:{Authorization:`Bearer ${i}`}});await s.delete(`${r}/600/friendLists/${c.data[0].id}`,{headers:{Authorization:`Bearer ${i}`}}),o.fire({icon:"success",title:"移除好友成功",showConfirmButton:!1,timer:1500,background:"#060818",color:"#D6EEFF"}),m(),l("#friendListSwiper",3,4)}}catch(e){console.log(e)}});async function R(){try{(await s.get(`${r}/600/banLists?userId=${d}`,{headers:{Authorization:`Bearer ${i}`}})).data.forEach(n=>{v.push(n.friendId)}),f=(await s.get(`${r}/users`)).data.filter(n=>v.includes(n.id)),b();const t=l("#blackListSwiper",4,5)}catch(a){console.log(a)}}function b(){let a="";f.forEach(e=>{a+=`
    <div class="swiper-slide blackListCard border border-2 border-radius border-primary bg-dark blueShadow">
      <div class="meber-card-top">
        <div class="member-avatar position-relative w-100">
          <div class="avatar w-100">
            <img
              src="../assets/images/avatar/${e.avatar}.png"
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
                  background-image: url(../assets/images/ranking/${e.userRank}.png);
                  background-size: cover;
                  background-position: center;
                  width: 85px;
                  height: 60px;
                "></div>
            </div>
          </div>
        </div>
      </div>

      <h5 class="mt-12 text-center mb-4">${e.username}</h5>
      <div class="tag-group d-flex justify-content-center g-8 w-100 flex-wrap">
      ${e.likePosition==="TOP"?'<div class="bage bage-text">TOP</div>':'<div class="bage bage-text bageGroup">TOP</div>'}
      ${e.likePosition==="JG"?'<div class="bage bage-text">JG</div>':'<div class="bage bage-text bageGroup">JG</div>'}
      ${e.likePosition==="MID"?'<div class="bage bage-text">MID</div>':'<div class="bage bage-text bageGroup">MID</div>'}
      ${e.likePosition==="AD"?'<div class="bage bage-text">AD</div>':'<div class="bage bage-text bageGroup">AD</div>'}
      ${e.likePosition==="SUP"?'<div class="bage bage-text">SUP</div>':'<div class="bage bage-text bageGroup">SUP</div>'}
      </div>
      <div class="thumb my-6">
        <p class="thum-text text-center">
        ${e.thumb} <span><i class="fa-regular fa-thumbs-up"></i></span>
        </p>
      </div>
      <div
        class="button-all d-flex justify-content-center gap-4 mb-8"
        style="height: 48px"
      >
        <button class="btn btnShadow border border-primary text-primary w-80" data-removeBanId=${e.id}>
          剔除
          <span>
            <i class="fa-solid fa-user-slash ms-1"></i>
          </span>
        </button>
      </div>
    </div>
    `}),w.innerHTML=a}w.addEventListener("click",async a=>{if(a.target.getAttribute("class")!=="btn btnShadow border border-primary text-primary w-80")return;const t=a.target.getAttribute("data-removeBanId"),n=await s.get(`${r}/600/banLists?userId=${d}&friendId=${t}`,{headers:{Authorization:`Bearer ${i}`}});await s.delete(`${r}/600/banLists/${n.data[0].id}`,{headers:{Authorization:`Bearer ${i}`}}),o.fire({icon:"success",title:"剔除成功",showConfirmButton:!1,timer:1500,background:"#060818",color:"#D6EEFF"}),b(),l("#blackListSwiper",4,5)});function E(){s.get(`${r}/teamsHistorical/${d}`).then(a=>{x=a.data,z(),l("#historicalTeamRecordsSwiper",3,6)}).catch(a=>{console.log(a)})}function z(){let a="";x.forEach(e=>{a+=`<div
    class="swiper-slide historicalTeamRecordsCard border border-2 border-radius border-primary bg-dark blueShadow"
  >
    <div class="card-header mb-4 mb-md-6">
      <div
        class="d-block d-md-flex justify-content-between mb-4 mb-md-6"
      >
        <div class="mb-2 mb-md-0">
          <h3 class="card-title mb-2 fs-3 fw-medium">
          ${e.teamName}
          </h3>
          <p class="card-subtitle text-secondary">
            遊戲時間：${e.playTime}
          </p>
        </div>
        <div
          class="d-flex d-md-block justify-content-between align-items-center"
        >
          <span class="d-block text-secondary fs-8 mb-0 mb-md-2">
          ${e.thumb}
            <i class="fa-regular fa-thumbs-up fs-7 ms-1"></i>
          </span>
          <span class="d-block text-secondary fs-6">
            <span class="text-white fs-5">${e.countMembers}</span>
            /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="card-body">
      <ul>
        <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
          ${e.membersDetail[0]==="waiting"?"<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>":`<p class="text-secondary">${e.membersDetail[0].username}</p>`}
            <span class="text-secondary fs-8">TOP</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero-1">
              <div
                class="parallelogramContent-1 teamCardHeroBg-1"
                style="
                  background-image: url(/assets/images/${e.membersDetail[0]==="waiting"?"img-team-player@2x.png":`champion/${e.membersDetail[0].likeHero}.jpg`});
                "
              ></div>
            </div>
            <div class="parallelogramRank-1">
              <div
                class="parallelogramContent-1 teamCardRankBg-1"
                style="
                  background-image: url(/assets/images/${e.membersDetail[0]==="waiting"?"img-team-badge.png":`ranking/${e.membersDetail[0].userRank}.png`});
                "
              ></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
          ${e.membersDetail[1]==="waiting"?"<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>":`<p class="text-secondary">${e.membersDetail[1].username}</p>`}
            <span class="text-secondary fs-8">JG</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero-1">
              <div
                class="parallelogramContent-1 teamCardHeroBg-1"
                style="
                  background-image: url(../assets/images/${e.membersDetail[1]==="waiting"?"img-team-player@2x.png":`champion/${e.membersDetail[1].likeHero}.jpg`});
                "
              ></div>
            </div>
            <div class="parallelogramRank-1">
              <div
                class="parallelogramContent-1 teamCardRankBg-1"
                style="
                  background-image: url(../assets/images/${e.membersDetail[1]==="waiting"?"img-team-badge.png":`ranking/${e.membersDetail[1].userRank}.png`});
                "
              ></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
          ${e.membersDetail[2]==="waiting"?"<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>":`<p class="text-secondary">${e.membersDetail[2].username}</p>`}
            <span class="text-secondary fs-8">MID</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero-1">
              <div
                class="parallelogramContent-1 teamCardHeroBg-1"
                style="
                  background-image: url(../assets/images/${e.membersDetail[2]==="waiting"?"img-team-player@2x.png":`champion/${e.membersDetail[2].likeHero}.jpg`});
                "
              ></div>
            </div>
            <div class="parallelogramRank-1">
              <div
                class="parallelogramContent-1 teamCardRankBg-1"
                style="
                  background-image: url(../assets/images/${e.membersDetail[2]==="waiting"?"img-team-badge.png":`ranking/${e.membersDetail[2].userRank}.png`});
                "
              ></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
          ${e.membersDetail[3]==="waiting"?"<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>":`<p class="text-secondary">${e.membersDetail[3].username}</p>`}
            <span class="text-secondary fs-8">AD</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero-1">
              <div
                class="parallelogramContent-1 teamCardHeroBg-1"
                style="
                  background-image: url(../assets/images/${e.membersDetail[3]==="waiting"?"img-team-player@2x.png":`champion/${e.membersDetail[3].likeHero}.jpg`});
                "
              ></div>
            </div>
            <div class="parallelogramRank-1">
              <div
                class="parallelogramContent-1 teamCardRankBg-1"
                style="
                  background-image: url(../assets/images/${e.membersDetail[3]==="waiting"?"img-team-badge.png":`ranking/${e.membersDetail[3].userRank}.png`});
                "
              ></div>
            </div>
          </div>
        </li>
        <li>
          <div class="d-flex justify-content-between mb-1">
          ${e.membersDetail[4]==="waiting"?"<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>":`<p class="text-secondary">${e.membersDetail[4].username}</p>`}
            <span class="text-secondary fs-8">SUP</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero-1">
              <div
                class="parallelogramContent-1 teamCardHeroBg-1"
                style="
                  background-image: url(../assets/images/${e.membersDetail[4]==="waiting"?"img-team-player@2x.png":`champion/${e.membersDetail[4].likeHero}.jpg`});
                "
              ></div>
            </div>
            <div class="parallelogramRank-1">
              <div
                class="parallelogramContent-1 teamCardRankBg-1"
                style="
                  background-image: url(../assets/images/${e.membersDetail[4]==="waiting"?"img-team-badge.png":`ranking/${e.membersDetail[4].userRank}.png`});
                "
              ></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>`}),j.innerHTML=a}function l(a,e,t){new Swiper(a,{slidesPerView:e,spaceBetween:24,loop:!0,grabCursor:"true",pagination:{el:`#swiper-pagination${t}`,clickable:!0},navigation:{nextEl:`#swiper-button-next${t}`,prevEl:`#swiper-button-prev${t}`},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:e}}})}G();
