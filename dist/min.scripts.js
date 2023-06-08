let pokemonRepository=function(){let e=[];function t(t){e.push(t)}function n(){return e}function i(e){pokemonRepository.loadDetails(e).then(function(){a(e)})}function a(e){let t=$(".modal-body"),n=$(".modal-title"),i=document.querySelector("#modal-container");n.empty(),t.empty();let a=$("<h1>"+e.name+"</h1>"),l=$('<img class="modal-img" style="width:50%">');l.attr("src",e.frontSprite);let r=$('<img class="modal-img" style="width:50%">');r.attr("src",e.backSprite);let s=$("<p>Height: "+e.height+"</p>"),c=$("<p>Types: "+e.types+"</p>");n.append(a),t.append(l),t.append(r),t.append(s),t.append(c),i.innerHTML="";let d=document.createElement("div");d.classList.add("modal");let p=document.createElement("button");p.classList.add("modal-close"),p.innerText="Close",p.addEventListener("click",o);let m=document.createElement("h1");m.innerText=e.name;let u=document.createElement("img");u.src=e.frontSprite,u.src=e.backSprite,d.appendChild(p),d.appendChild(m),d.appendChild(u),i.appendChild(d),i.classList.add("is-visible"),i.addEventListener("click",e=>{e.target===i&&o()})}function o(){document.querySelector("#modal-container").classList.remove("is-visible")}return document.querySelector("#show-modal").addEventListener("click",()=>{a()}),window.addEventListener("keydown",e=>{let t=document.querySelector("#modal-container");"Escape"===e.key&&t.classList.contains("is-visible")&&o()}),{add:t,getAll:n,addListItem:function e(t){let n=document.querySelector(".pokemon-list"),a=document.createElement("li"),o=document.createElement("button");o.innerText=t.name,a.classList.add("list-group-item"),o.classList.add("pokeClass","btn"),o.setAttribute("data-toggle","modal"),o.setAttribute("data-target","#exampleModal"),n.appendChild(a),a.appendChild(o),o.addEventListener("click",()=>i(t))},showDetails:i,LoadList:function e(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){t({name:e.name,detailsUrl:e.url})})}).catch(function(e){console.error(e)})},loadDetails:function e(t){return fetch(t.detailsUrl).then(function(e){return e.json()}).then(function(e){let n="";t.frontSprite=e.sprites.front_default,t.height=e.height,e.types.forEach(function(e){n+=`${e.type.name} `}),t.types=n,t.backSprite=e.sprites.back_default}).catch(function(e){console.error(e)})}}}();pokemonRepository.LoadList().then(function(){pokemonRepository.getAll().forEach(function(e){pokemonRepository.addListItem(e)})});