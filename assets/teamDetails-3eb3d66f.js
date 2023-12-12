import{a as i,u as b,S as d}from"./main-81d082ef.js";import"./header-56cae863.js";let o=location.search.toString().split("=")[1];const f={TOP:0,JG:1,MID:2,AD:3,SUP:4},u=async s=>{try{const t=await axios.get(`${i}/teams/${s}?_expand=user`),l=await axios.get(`${i}/teamsMember/${s}`);console.log(t.data),console.log(l.data),console.log(t.data.teamNotice);let m=t.data.teamNotice.map(e=>`<li class="fs-5 fs-lg-4">${e}</li>`).join(""),a=l.data.map(e=>e===null?e=0:e=e);console.log(a);let c=a.map(e=>`
    <li>
        <div
          class="flag greenShadow d-flex justify-md-content-start flex-md-column align-items-center bg-dark bg-opacity-60">

              ${e.id===t.data.userId?'<i class="fa-solid fa-crown d-none d-md-block text-white fs-3 mt-lg-10"></i>':'<i class="fa-solid fa-crown d-none d-md-block text-dark fs-3 mt-lg-10 opcitit-0"></i>'}
     
          <div class="d-flex flex-column align-items-center">
            <img class="playerIcon mt-lg-6 mb-3 mb-md-0" src="../assets/images/avatar/${e===0?"undefined":e.avatar}.png" alt="member" />
            <h4 class="fs-5 fs-md-4 mt-lg-6">${e===0?"等待加入":e.username}</h4>
          </div>


          <div class="d-flex d-md-block flex-column justify-content-between align-items-center ms-15 ms-md-0">
            <div class="parallelogramRank mt-lg-6 mb-4 mb-md-0">
              <div class="parallelogramContent teamCardRankBg"
                style="background-image: url(../assets/images/ranking/${e===0?"":e.userRank}.png)"></div>
            </div>
            <div class="d-flex flex-column-reverse flex-md-column align-items-center">
              <span class="badge bg-white text-dark mt-lg-6">${e===0?"尚未加入":e.likePosition}</span>
              <span class="text-secondary mt-lg-6 mb-5 mb-md-0">
                ${e===0?"":e.thumb}
                <i class="fa-regular fa-thumbs-up ms-1"></i>
              </span>
            </div>
          </div>
        </div>
        
        <div class="d-none d-md-block down-triangle">
          <div class="left-triangle"></div>
          <div class="right-triangle"></div>
        </div>
</li>
 `).join("");document.querySelector("#root").innerHTML=`<div class="d-block d-md-flex justify-content-end align-items-center bg-dark px-3 px-lg-26 pt-lg-18">
      <div class="titleParallelogram position-relative mx-auto mx-md-0 my-lg-7">
        <h2 class="position-absolute top-20 start-50 fs-11 fs-md-2 fw-black" style="width: 400px; height: 58px">
          ${t.data.teamName}
        </h2>
      </div>
      <h3 class="titleCenter fs-4 fs-md-3">遊戲時間：${t.data.playTime}</h3>
      </div>
      <ul
      class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 gap-md-0 px-3 px-lg-26">
      ${c}
      </ul>
      <div class="container mb-20 mb-md-25 mt-lg-21">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-7">
          <div class="messageCard border border-2 rounded-2 border-white mt-6 mt-md-0 mx-auto mx-md-0">
            <div class="messageHead border-bottom p-1">
              <h4 class="text-center fs-5 fs-lg-4">公告</h4>
            </div>
            <div class="messageBody">
              <ol class="d-flex flex-column p-5 p-md-9 gap-2 gap-md-3">
              ${m}
              </ol>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-end col-lg-3">
          <button type="button" class="joinTeamBtn blueShadow mt-10 mt-md-0 mx-auto mx-md-0" id="addTeamButtom">
            <p class="fw-bold fs-3">
              加入隊伍<i class="fa-solid fa-arrow-right ms-5"></i>
            </p>
          </button>
        </div>
      </div>
      </div>;`,document.querySelector("#addTeamButtom").addEventListener("click",()=>{h()})}catch(t){console.error("Error fetching data:",t)}};u(o);async function h(){let s;b?s=localStorage.getItem("userId"):d.fire({title:"無法加入隊伍",text:"請先進行登入",icon:"warning"});let t={};async function l(p){try{const g=await axios.patch(`http://localhost:3000/teams/${o}`,p);d.fire({title:"確認加入",icon:"success"}).then(x=>{u(o),console.log(x)})}catch(g){console.log(g)}}let a=(await axios.get(`${i}/teams/${o}?_expand=user`)).data.teamMerberId,e=(await axios.get(`${i}/users/${s}`)).data.likePosition;console.log(e),console.log(f);let n=f[e],r=a[n];console.log(n),console.log(r),r===0?(a[n]=parseInt(s),console.log(a),t={teamMerberId:a},console.log(t),l(t)):d.fire({title:"無法加入隊伍",text:"此位置已被選擇，請選擇其他位置",icon:"warning"})}
