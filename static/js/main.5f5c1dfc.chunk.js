(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){"use strict";i.r(t);var a=i(3),s=i.n(a),l=(i(10),i(11),i(1)),c=(i(12),i(13),i(0));const n=e=>{let{movie:t}=e;return Object(c.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(c.jsx)("div",{className:"card-image",children:Object(c.jsx)("figure",{className:"image is-4by3",children:Object(c.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(c.jsxs)("div",{className:"card-content",children:[Object(c.jsxs)("div",{className:"media",children:[Object(c.jsx)("div",{className:"media-left",children:Object(c.jsx)("figure",{className:"image is-48x48",children:Object(c.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(c.jsx)("div",{className:"media-content",children:Object(c.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(c.jsxs)("div",{className:"content",children:[t.description,Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},r=e=>{let{movies:t}=e;return Object(c.jsx)("div",{className:"movies",children:t.map((e=>Object(c.jsx)(n,{movie:e},e.imdbId)))})};var d=i(4),m=i.n(d);const o=e=>{let{name:t,value:i,label:a=t,placeholder:s="Enter ".concat(a),required:n=!1,onChange:r=(()=>{})}=e;const[d]=Object(l.useState)((()=>"".concat(t,"-").concat(Math.random().toFixed(16).slice(2)))),[o,b]=Object(l.useState)(!1),j=o&&n&&!i;return Object(c.jsxs)("div",{className:"field",children:[Object(c.jsx)("label",{className:"label",htmlFor:d,children:a}),Object(c.jsx)("div",{className:"control",children:Object(c.jsx)("input",{type:"text",id:d,"data-cy":"movie-".concat(t),className:m()("input",{"is-danger":j}),placeholder:s,value:i,onChange:e=>r(e.target.value),onBlur:()=>b(!0)})}),j&&Object(c.jsx)("p",{className:"help is-danger",children:"".concat(a," is required")})]})},b=e=>{let{onAdd:t}=e;const[i,a]=Object(l.useState)({count:0,title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),{count:s,title:n,description:r,imgUrl:d,imdbUrl:m,imdbId:b}=i,j=!n.trim()||!d.trim()||!m.trim()||!b.trim();return Object(c.jsxs)("form",{className:"NewMovie",onSubmit:e=>{e.preventDefault(),t({title:n,description:r,imgUrl:d,imdbUrl:m,imdbId:b}),a((e=>({...e,count:e.count+1,title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})))},children:[Object(c.jsx)("h2",{className:"title",children:"Add a movie"}),Object(c.jsx)(o,{name:"title",label:"Title",value:n,onChange:e=>a({...i,title:e}),required:!0}),Object(c.jsx)(o,{name:"description",label:"Description",value:r,onChange:e=>a({...i,description:e})}),Object(c.jsx)(o,{name:"imgUrl",label:"Image URL",value:d,onChange:e=>a({...i,imgUrl:e}),required:!0}),Object(c.jsx)(o,{name:"imdbUrl",label:"Imdb URL",value:m,onChange:e=>a({...i,imdbUrl:e}),required:!0}),Object(c.jsx)(o,{name:"imdbId",label:"Imdb ID",value:b,onChange:e=>a({...i,imdbId:e}),required:!0}),Object(c.jsx)("div",{className:"field is-grouped",children:Object(c.jsx)("div",{className:"control",children:Object(c.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:j,children:"Add"})})})]},s)};var j=i(5);const h=()=>{const[e,t]=Object(l.useState)(j);return Object(c.jsxs)("div",{className:"page",children:[Object(c.jsx)("div",{className:"page-content",children:Object(c.jsx)(r,{movies:e})}),Object(c.jsx)("div",{className:"sidebar",children:Object(c.jsx)(b,{onAdd:e=>{t((t=>[...t,e]))}})})]})};s.a.render(Object(c.jsx)(h,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.5f5c1dfc.chunk.js.map