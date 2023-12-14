import{u as g,S as u,b as l,a as o,m as s}from"./main-bdd2aebe.js";import"./header-a7c960aa.js";g||u.fire({title:"請先登入會員",icon:"warning",background:"#060818",color:"#D6EEFF"}).then(()=>{location.href="index.html"});let c=[],d=[],b=0,f=$("#pagination");const v=document.querySelector("#playerThumbDesc"),C=document.querySelector("#playerThumbAsc"),m=document.querySelector(".jsPlayerWrap"),y=document.querySelector("#playerRankSelect"),w=document.querySelector(".jsPlayerSearch"),k=document.querySelector(".jsPlayerSearchBtn");function x(a){let t="";a.forEach(e=>{t+=`<div class="playerListCard col-lg-4 col-md-6 col-12 mt-18">
        <div
          class="memberCard border border-primary w-100 h-100 greenShadow bg-dark"
          style="border-radius: 2px"
        >
          <div class="meber-card-top">
            <div class="member-avatar position-relative w-100">
              <div class="avatar w-100">
                <img
                  src="./images/avatar/${e.avatar}.png"
                  alt=""
                  class="member-avatar-style"
                  style="height: 300px; object-fit: cover"
                />
              </div>
      
              <div class="member-avatar-style position-absolute bottom-0"></div>
      
              <div class="metal position-absolute" style="width: 85px; height: 65px">
                <div class="parallelogram">
                  <div
                    class="parallelogram-content-avatar"
                    style="
                      background-image: url(./images/ranking/${e.userRank}.png);
                      background-size: cover;
                      background-position: center;
                      width: 85px;
                      height: 60px;
                    "
                  ></div>
                </div>
              </div>
            </div>
          </div>
      
          <h4 class="mt-12 text-center mb-4">${e.username}</h4>
          <div class="tag-group d-flex justify-content-center g-8 w-100 flex-wrap">
            <div class="tag bage bage-text">${e.likePosition}</div>
           
          </div>
          <div class="thumb my-6">
            <p class="thum-text text-center">
            ${e.thumb}
            <span><i class="fa-regular fa-thumbs-up"></i></span>
            </p>
          </div>
          <div class="button-all d-flex justify-content-center gap-4 mb-8">
            <button class="jsAddFriendBtn btn border border-primary text-primary w-40" data-friendInvite="${e.id}">
              加為好友
              <span class="ms-1" data-friendInvite="${e.id}">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  data-friendInvite="${e.id}"
                >
                  <path
                    d="M13 11C13.5933 11 14.1734 10.8241 14.6667 10.4944C15.1601 10.1648 15.5446 9.69623 15.7716 9.14805C15.9987 8.59987 16.0581 7.99667 15.9424 7.41473C15.8266 6.83279 15.5409 6.29824 15.1213 5.87868C14.7018 5.45912 14.1672 5.1734 13.5853 5.05765C13.0033 4.94189 12.4001 5.0013 11.8519 5.22836C11.3038 5.45543 10.8352 5.83994 10.5056 6.33329C10.1759 6.82664 10 7.40666 10 8C10 8.79565 10.3161 9.55871 10.8787 10.1213C11.4413 10.6839 12.2044 11 13 11ZM13 7C13.1978 7 13.3911 7.05865 13.5556 7.16853C13.72 7.27841 13.8482 7.43459 13.9239 7.61732C13.9996 7.80004 14.0194 8.00111 13.9808 8.19509C13.9422 8.38907 13.847 8.56726 13.7071 8.70711C13.5673 8.84696 13.3891 8.9422 13.1951 8.98079C13.0011 9.01937 12.8 8.99957 12.6173 8.92388C12.4346 8.84819 12.2784 8.72002 12.1685 8.55557C12.0586 8.39112 12 8.19778 12 8C12 7.73478 12.1054 7.48043 12.2929 7.29289C12.4804 7.10536 12.7348 7 13 7ZM17.11 10.86C17.6951 10.021 18.0087 9.02282 18.0087 8C18.0087 6.97718 17.6951 5.97897 17.11 5.14C17.3976 5.04741 17.6979 5.00018 18 5C18.7956 5 19.5587 5.31607 20.1213 5.87868C20.6839 6.44129 21 7.20435 21 8C21 8.79565 20.6839 9.55871 20.1213 10.1213C19.5587 10.6839 18.7956 11 18 11C17.6979 10.9998 17.3976 10.9526 17.11 10.86ZM13 13C7 13 7 17 7 17V19H19V17C19 17 19 13 13 13ZM9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17C20.9766 16.2566 20.8054 15.5254 20.4964 14.8489C20.1873 14.1724 19.7466 13.5643 19.2 13.06C24 13.55 24 17 24 17ZM8 12H5V15H3V12H0V10H3V7H5V10H8V12Z"
                    fill="#D6EEFF"
                    data-friendInvite="${e.id}"
                  />
                </svg>
              </span>
            </button>
            <button class="jsCancelCommentBtn btn border border-primary text-primary w-40" data-thumbId="${e.id}">
              按讚玩家
              <span data-thumbId="${e.id}">
                <i class="fa-regular fa-thumbs-up ms-1" data-thumbId="${e.id}"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      `}),m.innerHTML=t}function h(a,t){t.pagination({dataSource:a,totalNumber:a.length,pageSize:9,prevText:"&#9668",nextText:"&#9658",callback:(e,r)=>{x(e)}})}function p(){l.get(`${o}/users?_embed=friendLists&_embed=banLists`).then(a=>{let t,e,r;t=a.data.find(i=>i.id===s),e=t.friendLists,e.forEach(i=>{c.push(i.friendId)}),r=t.banLists,r.forEach(i=>{c.push(i.friendId)}),d=a.data.filter(i=>!c.includes(i.id)).filter(i=>i.id!==s),h(d,f)}).catch(a=>{console.log(a)})}C.addEventListener("click",a=>{a.preventDefault(),m.innerHTML="",l.get(`${o}/users?_embed=friendLists&_sort=thumb&_order=asc`).then(t=>{d=t.data.filter(r=>!c.includes(r.id)).filter(r=>r.id!==s),h(d,f)}).catch(t=>{console.log(t)})});v.addEventListener("click",a=>{a.preventDefault(),m.innerHTML="",l.get(`${o}/users?_embed=friendLists&_sort=thumb&_order=desc`).then(t=>{d=t.data.filter(r=>!c.includes(r.id)).filter(r=>r.id!==s),h(d,f)}).catch(t=>{console.log(t)})});y.addEventListener("click",a=>{if(a.preventDefault(),a.target.getAttribute("class")!=="dropdown-item")return;let e=a.target.getAttribute("data-rank");m.innerHTML="",l.get(`${o}/users?_embed=friendLists&userRank=${e}`).then(r=>{d=r.data.filter(i=>!c.includes(i.id)).filter(i=>i.id!==s),h(d,f)}).catch(r=>{console.log(r)})});k.addEventListener("click",a=>{a.preventDefault();let t;if(t=w.value,t===""){p();return}l.get(`${o}/users?username=${t}`).then(e=>{d=e.data.filter(n=>!c.includes(n.id)).filter(n=>n.id!==s),h(d,f)}).catch(e=>{console.log(e)})});m.addEventListener("click",a=>{b=0;let t=Number(a.target.getAttribute("data-friendinvite")),e=Number(a.target.getAttribute("data-thumbId"));t&&(l.get(`${o}/friendLists`).then(r=>{if(r.data.forEach(n=>{n.userId===s&&n.friendId===t&&(b=1)}),b){u.fire({icon:"error",title:"已經是好友",showConfirmButton:!1,timer:2e3,background:"#060818",color:"#D6EEFF"});return}}),u.fire({title:"確定要加入好友?",icon:"question",background:"#060818",color:"#D6EEFF",showCancelButton:!0,customClass:{confirmButton:"bg-white text-dark me-4",cancelButton:"border border-2 border-white bg-transparent"},confirmButtonText:"確定",cancelButtonText:"取消"}).then(r=>{r.isConfirmed&&l.post(`${o}/friendLists`,{userId:s,friendId:t,status:1}).then(n=>{u.fire({icon:"success",title:"已加入好友",showConfirmButton:!1,timer:2e3,background:"#060818",color:"#D6EEFF"}),p()}).catch(n=>{console.log(n)})})),e&&l.get(`${o}/comments?userId=${s}&commentedId=${e}`,{headers:{Authorization:`Bearer ${g}`}}).then(r=>{if(r.data.length!==0){u.fire({icon:"error",title:"已經點讚過此玩家",showConfirmButton:!1,timer:2e3,background:"#060818",color:"#D6EEFF"});return}else l.post(`${o}/600/comments`,{userId:s,commentedId:e},{headers:{Authorization:`Bearer ${g}`}}),u.fire({icon:"success",title:"點讚成功",showConfirmButton:!1,timer:1500,background:"#060818",color:"#D6EEFF"})}).catch(r=>{console.log(r)})});p();
