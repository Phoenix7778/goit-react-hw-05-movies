"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[144],{9315:function(e,n,t){t.d(n,{Hg:function(){return c},Jh:function(){return d},TP:function(){return l},z1:function(){return u},zv:function(){return p}});var r=t(5861),a=t(7757),i=t.n(a),o=t(1243),s="00ba8a5ee4008ed802556206b4b247b2";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("trending/movie/day?api_key=".concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},5144:function(e,n,t){t.r(n),t.d(n,{MovieDetails:function(){return v}});var r,a,i=t(8683),o=t(9439),s=t(2791),c=t(7689),u=t(1087),l=t(8617),p=t(9315),d=t(168),h=t(6444),x=h.ZP.button(r||(r=(0,d.Z)(["\n  margin-top: 16px;\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: none;\n  margin-bottom: 10px;\n  font-weight: 500;\n  background-color: transparent;\n  &:hover {\n    background-color: yellow;\n    color: blue;\n  }\n"]))),f=(0,h.ZP)(u.rU)(a||(a=(0,d.Z)(["\n  display: flex;\n  font-size: 14px;\n  align-items: center;\n  column-gap: 10px;\n  &:hover {\n    background-color: yellow;\n    color: blue;\n  }\n"]))),g=t(184),v=function(){var e,n,t=(0,s.useState)({}),r=(0,o.Z)(t,2),a=r[0],d=r[1],h=(0,c.TH)(),v=(0,c.UO)().movieId;(0,s.useEffect)((function(){(0,p.TP)(v).then((function(e){return d(e)}))}),[v]);var m=a.original_title,y=a.overview,b=a.genres,w=a.poster_path,j=(10*a.vote_average).toFixed(2);return(0,g.jsxs)("div",{children:[(0,g.jsx)(x,{type:"button",children:(0,g.jsxs)(f,{to:null!==(e=null===(n=h.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",children:[(0,g.jsx)(l.siY,{size:16}),"Go back"]})}),(0,g.jsxs)("div",{style:{display:"flex",padding:"20px",borderBottom:"solid 1px grey"},children:[(0,g.jsx)("img",{src:w?"https://image.tmdb.org/t/p/w300".concat(w):"http://www.suryalaya.org/images/no_image.jpg",width:320,height:380,loading:"lazy",alt:"poster"}),(0,g.jsxs)("div",{style:{padding:"20px 40px"},children:[(0,g.jsx)("h2",{style:{margin:"0"},children:m}),(0,g.jsxs)("h3",{children:["User score: ",j,"%"]}),(0,g.jsx)("h3",{children:"Overview"}),(0,g.jsxs)("p",{children:[y," "]}),(0,g.jsx)("h3",{children:"Genres"}),(0,g.jsx)("ul",{style:{listStyle:"none",display:"flex",padding:"0",gap:"16px"},children:b&&b.length&&b.map((function(e){var n=e.id,t=e.name;return(0,g.jsx)("li",{children:t},n)}))})]})]}),(0,g.jsxs)("div",{style:{padding:"20px",borderBottom:"solid 1px grey",marginBottom:"30px"},children:[(0,g.jsx)("h4",{children:"Additional information"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)(u.rU,{to:"cast",state:(0,i.Z)({},h.state),children:"Cast"})}),(0,g.jsxs)("li",{children:[" ",(0,g.jsx)(u.rU,{to:"reviews",state:(0,i.Z)({},h.state),children:"Reviews"})]})]})]}),(0,g.jsx)(c.j3,{})]})}}}]);
//# sourceMappingURL=144.6ca57c3a.chunk.js.map