(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var i=c(0),a=c(1),s=c.n(a),r=c(19),o=c.n(r),n=c(5),l=c(4),d=function(e,t,c){return function(i,a){i({type:"home/setIsLoading",isLoading:!0}),fetch(e).then(v).then((function(e){"searchMovies"===c&&(i(j([])),i(m(1)));var a=[],s=e.results.filter((function(e){return!t.includes(e.id)&&(a.push(e.id),e)}));i({type:"home/setMovies",movies:s}),i({type:"home/setTotalPages",totalPages:e.total_pages}),i({type:"home/setMovieIds",movieIds:a})})).catch((function(e){i({type:"home/setMovieError",movieError:e}),console.log(e)})).finally((function(e){i({type:"home/setMovieIsLoaded",movieIsLoaded:!0}),i({type:"home/setIsLoading",isLoading:!1})}))}},m=function(e){return function(t,c){t({type:"home/setPage",page:e})}},j=function(e){return function(t,c){t({type:"home/resetMovies",movies:e})}};function v(e){var t=e.headers.get("content-type");if(t.includes("application/json"))return function(e){return e.json().then((function(t){return e.ok?t:Promise.reject(Object.assign({},t,{status:e.status,statusText:e.statusText}))}))}(e);if(t.includes("text/html"))return function(e){return e.text().then((function(t){return e.ok?t:Promise.reject({status:e.status,statusText:e.statusText,err:t})}))}(e);throw new Error("Sorry, content-type ".concat(t," not supported"))}var u=function(e){return function(t){t({type:"path/setPath",path:e})}},b=c(12),h=c(9);var f=c(15),O=c.n(f);var g=function(e){var t=Object(a.useState)("http://image.tmdb.org/t/p/w342".concat(e.movie.poster_path)),c=Object(b.a)(t,1)[0],s=Object(a.useState)(e.movie.id),r=Object(b.a)(s,1)[0],o=Object(l.c)((function(e){return e.favoriteReducer})).favoriteMovies,n=Object(l.b)();return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"col mt-2",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)(h.b,{className:"home-movie-detail-link",to:"/details/".concat(r),children:e.movie.poster_path?Object(i.jsx)("img",{src:c,className:"card-img-top",alt:e.movie.original_title}):Object(i.jsx)("img",{src:"/images/no-image.svg",className:"card-img-top",alt:e.movie.original_title})}),o.some((function(t){return t.id===e.movie.id}))?Object(i.jsx)("div",{className:"wishlist-icon-container",children:Object(i.jsx)("img",{onClick:function(){n({type:"favorites/deleteFavoriteMovie",favoriteMovieId:e.movie.id}),O.a.fire({toast:!0,icon:"success",title:"Removed from your favorites",animation:!0,position:"top",showConfirmButton:!1,timer:3e3,timerProgressBar:!1,didOpen:function(e){e.addEventListener("mouseenter",O.a.stopTimer),e.addEventListener("mouseleave",O.a.resumeTimer)}})},src:"/images/star.svg",className:"wishlist-icon",alt:"red star"})}):Object(i.jsx)("div",{className:"wishlist-icon-container",children:Object(i.jsx)("img",{onClick:function(){o.some((function(t){return t.id===e.movie.id}))||(n({type:"favorites/addFavoriteMovie",favoriteMovie:{id:e.movie.id,poster_path:e.movie.poster_path,original_title:e.movie.original_title}}),O.a.fire({toast:!0,icon:"success",title:"Added to your favorites",animation:!0,position:"top",showConfirmButton:!1,timer:3e3,timerProgressBar:!1,didOpen:function(e){e.addEventListener("mouseenter",O.a.stopTimer),e.addEventListener("mouseleave",O.a.resumeTimer)}}))},src:"/images/empty-star.svg",className:"wishlist-icon",alt:"empty star"})}),Object(i.jsx)("div",{className:"card-body d-flex flex-column text-center home-movie-title-container",children:Object(i.jsx)("h5",{className:"card-title mb-0 home-movie-title",children:e.movie.original_title})})]})})})};var x=function(e){var t=e.className;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"".concat(t||"d-flex justify-content-center spinner"),children:Object(i.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(i.jsx)("span",{className:"sr-only",children:"Loading..."})})})})};var p=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"justify-center",children:Object(i.jsx)("div",{className:"col-sm col-md-4 ml-3 mr-2",children:Object(i.jsx)("div",{className:"card mt-4",children:Object(i.jsx)("div",{className:"card-body",children:Object(i.jsx)("h5",{className:"card-title text-center mb-0 text-primary",children:e.text})})})})})})};var y=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"justify-center",children:Object(i.jsx)("div",{className:"col-sm col-md-4 ml-3 mr-2",children:Object(i.jsx)("div",{className:"card mt-4",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsxs)("h3",{className:"card-title text-center text-primary",children:["ERROR ",e.error.status]}),Object(i.jsx)("h6",{className:"card-text",children:e.error.status_message}),e.error.err&&Object(i.jsx)("p",{className:"card-text",children:e.error.err})]})})})})})};var N=function(e,t){return""===t?"https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("90d4a0880579cc5fa24ef5de07760fd3","&page=").concat(e):"https://api.themoviedb.org/3/search/movie?api_key=".concat("90d4a0880579cc5fa24ef5de07760fd3","&language=en-US&query=").concat(t.toLowerCase(),"&page=").concat(e,"&include_adult=false")};var w=function(){var e=Object(n.g)().path,t=Object(l.b)(),c=Object(l.c)((function(e){return e.navbarReducer})).searchKey,s=Object(l.c)((function(e){return e.homeReducer})),r=s.movies,o=s.page,j=s.totalPages,v=s.isLoading,b=s.movieIds,h=s.scrollPosition,f=Object(l.c)((function(e){return e.homeReducer.movieError})),O=Object(a.useRef)(null),w=function e(){var c=O.current,i=c.scrollHeight-c.clientHeight;t(function(e){return function(t,c){t({type:"home/setScrollPosition",scrollPosition:e})}}(c.scrollTop)),c.scrollTop/i>.99&&(t(m(o+1)),c.removeEventListener("scroll",e))};return Object(a.useEffect)((function(){var e=O.current;return O.current.scrollTop=h,!v&&e&&(o<j?e.addEventListener("scroll",w):e.removeEventListener("scroll",w)),function(){e.removeEventListener("scroll",w)}}),[v]),Object(a.useEffect)((function(){t(d(N(o,c),b))}),[t,o]),Object(a.useEffect)((function(){t(u(e))}),[t,e]),Object(a.useEffect)((function(){document.body.style.overflow="hidden";var e=O.current;return e&&(e.style.overflowY="auto",e.style.height="90vh"),function(){document.body.style.overflow=""}}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{ref:O,className:"home-scroll-container",children:[v&&Object(i.jsx)(x,{}),f&&Object(i.jsx)(y,{error:f}),(null===r||void 0===r?void 0:r.length)||f||v?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"layout-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-4 ml-2 mr-2 pb-4",children:r.map((function(e){return Object(i.jsx)(g,{movie:e},e.id)}))}),v&&1!==o&&Object(i.jsx)(x,{className:"spinner-container-infinite-loading"})]}):Object(i.jsx)(p,{text:"No results"})]})})},S=function(e){return function(c){fetch(e).then(t).then((function(e){c({type:"movieDetail/setMovieDetail",movieDetail:e})})).catch((function(e){c({type:"movieDetail/setMovieDetailError",movieDetailError:e})})).finally((function(e){c({type:"movieDetail/setMovieDetailIsLoaded",movieDetailIsLoaded:!0})}))};function t(e){var t=e.headers.get("content-type");if(t.includes("application/json"))return function(e){return e.json().then((function(t){return e.ok?t:Promise.reject(Object.assign({},t,{status:e.status,statusText:e.statusText}))}))}(e);if(t.includes("text/html"))return function(e){return e.text().then((function(t){return e.ok?t:Promise.reject({status:e.status,statusText:e.statusText,err:t})}))}(e);throw new Error("Sorry, content-type ".concat(t," not supported"))}};var k=function(e){var t="http://image.tmdb.org/t/p/w342".concat(e.movie.poster_path);return Object.keys(e.movie).length&&e.movie.constructor===Object?Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"card mt-4 border-dark",children:Object(i.jsx)("div",{className:"card-body",children:e.movie.poster_path?Object(i.jsx)("img",{src:t,className:"card-img-top detail-movie-image",alt:e.movie.title}):Object(i.jsx)("img",{src:"/images/no-image.svg",className:"card-img-top",alt:e.movie.title})})})}):Object(i.jsx)(x,{})};var M=function(e){var t=[];t[1]="January",t[2]="February",t[3]="March",t[4]="April",t[5]="May",t[6]="June",t[7]="July",t[8]="August",t[9]="September",t[10]="October",t[11]="November",t[12]="December";var c=new Date(e),i=c.getFullYear(),a=("0"+(c.getMonth()+1)).slice(-2),s=("0"+c.getDate()).slice(-2),r=t[Number(a)];return"".concat(s," ").concat(r," ").concat(i)};var I=function(e){return"USD ".concat(e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))};var E=function(e){return Object.keys(e.movie).length&&e.movie.constructor===Object?Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"card border-dark",children:[Object(i.jsx)("div",{className:"card-header bg-dark text-light",children:e.movie.title}),Object(i.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(i.jsx)("li",{className:"list-group-item",children:M(e.movie.release_date)}),Object(i.jsx)("li",{className:"list-group-item",children:e.movie.genres.map((function(e){return e.name})).join(", ")}),Object(i.jsxs)("li",{className:"list-group-item",children:[e.movie.runtime," minutes"]}),Object(i.jsx)("li",{className:"list-group-item",children:e.movie.production_countries.map((function(e){return e.iso_3166_1})).join(", ")}),Object(i.jsx)("li",{className:"list-group-item",children:e.movie.spoken_languages.map((function(e){return e.english_name})).join(", ")}),e.movie.vote_count<=1&&Object(i.jsxs)("li",{className:"list-group-item",children:[e.movie.vote_average," from ",e.movie.vote_count," vote"]}),e.movie.vote_count>1&&Object(i.jsxs)("li",{className:"list-group-item",children:[e.movie.vote_average," from ",e.movie.vote_count," votes"]}),Object(i.jsxs)("li",{className:"list-group-item",children:[e.movie.budget?I(e.movie.budget):"-"," (budget)"]}),Object(i.jsxs)("li",{className:"list-group-item",children:[e.movie.revenue?I(e.movie.revenue):"-"," (revenue)"]})]})]})}):Object(i.jsx)(x,{})};var L=function(e){return Object.keys(e.movie).length&&e.movie.constructor===Object?Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"card border-dark bg-dark",children:Object(i.jsx)("div",{className:"card-body text-light",children:e.movie.overview})})}):Object(i.jsx)(x,{})};var D=function(){var e=Object(n.g)().path,t=Object(l.c)((function(e){return e.movieDetailReducer.movieDetail})),c=Object(l.b)(),s=Object(n.f)().MovieId,r=Object(a.useRef)(null),o="https://api.themoviedb.org/3/movie/".concat(s,"?api_key=90d4a0880579cc5fa24ef5de07760fd3&language=en-US");return Object(a.useEffect)((function(){c(S(o))}),[c,o]),Object(a.useEffect)((function(){c(u(e))}),[c,e]),Object(a.useEffect)((function(){document.body.style.overflow="hidden";var e=r.current;return e&&(e.style.overflowY="auto",e.style.height="90vh"),function(){document.body.style.overflow=""}}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{ref:r,className:"row justify-center d-flex align-items-center",children:[Object(i.jsx)("div",{className:"col-sm col-md col-lg-4",children:Object(i.jsx)(k,{movie:t})}),Object(i.jsx)("div",{className:"col-sm col-md col-lg-3",children:Object(i.jsx)(E,{movie:t})}),Object(i.jsx)("div",{className:"col-sm col-md-12 col-lg-7 mt-2",children:Object(i.jsx)(L,{movie:t})})]})})};var P=function(){var e=Object(n.g)().path,t=Object(l.c)((function(e){return e.favoriteReducer})),c=t.favoriteMovies,s=t.favScrollPosition,r=Object(l.c)((function(e){return e.navbarReducer})).favSearchKey,o=Object(a.useState)(c),d=Object(b.a)(o,2),m=d[0],j=d[1],v=Object(a.useRef)(null),h=Object(l.b)(),f=function(){var e=v.current;h(function(e){return function(t,c){t({type:"home/setFavScrollPosition",favScrollPosition:e})}}(e.scrollTop))};return Object(a.useEffect)((function(){var e=v.current;return v.current.scrollTop=s,e&&e.addEventListener("scroll",f),function(){e.removeEventListener("scroll",f)}}),[m]),Object(a.useEffect)((function(){h(u(e))}),[h,e]),Object(a.useEffect)((function(){j(c.filter((function(e){return e.original_title.trim().toLowerCase().includes(r.trim().toLowerCase())})))}),[h,r,c]),Object(a.useEffect)((function(){document.body.style.overflow="hidden";var e=v.current;return e&&(e.style.overflowY="auto",e.style.height="98vh"),function(){document.body.style.overflow=""}}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{ref:v,children:[Object(i.jsx)("h1",{className:"text-center mt-2",children:"Favorite Page"}),!c.length&&Object(i.jsx)(p,{text:"No favorites"}),0!==c.length&&!m.length&&Object(i.jsx)(p,{text:"No results"}),m&&Object(i.jsx)("div",{className:"layout-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-4 ml-2 mr-2",children:m.map((function(e){return Object(i.jsx)(g,{movie:e},e.id)}))})]})})},R=function(e){return function(t){t({type:"navbar/setFavSearchKey",favSearchKey:e})}},T=function(e){return function(t){t({type:"navbar/setIsShowInfo",isShowInfo:e})}};var F=function(e,t){var c=Object(a.useState)(e),i=Object(b.a)(c,2),s=i[0],r=i[1];return Object(a.useEffect)((function(){var c=setTimeout((function(){r(e)}),t);return function(){clearTimeout(c)}}),[t,e]),s};var _=function(){var e=Object(l.b)();function t(){e(T(!1))}return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"modal fade",id:"info-modal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true",children:Object(i.jsx)("div",{className:"modal-dialog",role:"document",children:Object(i.jsxs)("div",{className:"info-modal-content modal-content",children:[Object(i.jsxs)("div",{className:"info-modal-header modal-header",children:[Object(i.jsx)("h5",{className:"modal-title",style:{fontWeight:"bold"},id:"exampleModalLongTitle",children:"Welcome to Movie App!"}),Object(i.jsx)("button",{type:"button",onClick:t,className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(i.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(i.jsxs)("div",{className:"info-modal-text-container",children:[Object(i.jsx)("h1",{className:"text-center mb-3",children:"Tech Stack"}),Object(i.jsxs)("div",{className:"card-deck row",id:"tech-stack-deck",children:[Object(i.jsx)("div",{className:"col-4",children:Object(i.jsxs)("div",{className:"tech-icon-container",children:[Object(i.jsx)("img",{className:"info-card-img",src:"/images/HTML5.svg",alt:"HTML5"}),Object(i.jsx)("div",{className:"info-card-body",children:Object(i.jsx)("h5",{className:"info-card-title card-title text-center",children:"HTML5"})})]})}),Object(i.jsx)("div",{className:"col-4",children:Object(i.jsxs)("div",{className:"tech-icon-container",children:[Object(i.jsx)("img",{className:"info-card-img",src:"/images/CSS3.svg",alt:"CSS3"}),Object(i.jsx)("div",{className:"info-card-body card-body",children:Object(i.jsx)("h5",{className:"info-card-title card-title text-center",children:"CSS3"})})]})}),Object(i.jsx)("div",{className:"col-4",children:Object(i.jsxs)("div",{className:"tech-icon-container",children:[Object(i.jsx)("img",{className:"info-card-img",src:"/images/Bootstrap.svg",alt:"Bootstrap"}),Object(i.jsx)("div",{className:"info-card-body card-body",children:Object(i.jsx)("h5",{className:"info-card-title card-title text-center",children:"Bootstrap"})})]})}),Object(i.jsx)("div",{className:"col-4",children:Object(i.jsxs)("div",{className:"tech-icon-container",children:[Object(i.jsx)("img",{className:"info-card-img",src:"/images/React.svg",alt:"React"}),Object(i.jsx)("div",{className:"info-card-body card-body",children:Object(i.jsx)("h5",{className:"info-card-title card-title text-center",children:"React"})})]})}),Object(i.jsx)("div",{className:"col-4",children:Object(i.jsxs)("div",{className:"tech-icon-container",children:[Object(i.jsx)("img",{className:"info-card-img",src:"/images/Redux.svg",alt:"Redux"}),Object(i.jsx)("div",{className:"info-card-body card-body",children:Object(i.jsx)("h5",{className:"info-card-title card-title text-center",children:"Redux"})})]})}),Object(i.jsx)("div",{className:"col-4",children:Object(i.jsxs)("div",{className:"tech-icon-container",children:[Object(i.jsx)("img",{className:"info-card-img",src:"/images/JavaScript.svg",alt:"JavaScript"}),Object(i.jsx)("div",{className:"info-card-body card-body",children:Object(i.jsx)("h5",{className:"info-card-title card-title text-center",children:"JavaScript"})})]})})]}),Object(i.jsxs)("div",{className:"info-description description",children:[Object(i.jsx)("h2",{children:"Description"}),Object(i.jsx)("p",{children:"A web application for checking out trending movies using The Movie Database (TMDB) API."}),Object(i.jsx)("h2",{children:"Github"}),Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://github.com/rdport/movieapp-client.git",children:"movieapp-client"})})}),Object(i.jsx)("h2",{children:"Features"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Filter movies by title"}),Object(i.jsx)("li",{children:"Infinite scrolling"}),Object(i.jsx)("li",{children:"Click the images to show more details"}),Object(i.jsx)("li",{children:"Add movies to favorites by clicking the empty star icons"}),Object(i.jsx)("li",{children:"Remove movies from favorites by clicking the red star icons"}),Object(i.jsx)("li",{children:"Responsive design enables this website to adapt to the size of the screen"})]}),Object(i.jsx)("h2",{children:"P.S."}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"For the purpose of prototyping, authentication and database are not used. Instead, Redux Persist is used to save all favorite movies in the local storage."}),Object(i.jsx)("li",{children:'Please check out the "Fancytodo" project which has implemented more advanced authentication with secure access token, csrf token and refresh token.'}),Object(i.jsxs)("li",{children:[Object(i.jsx)("a",{href:"https://github.com/rdport/fancytodo-client",children:"fancytodo-client on github"}),", ",Object(i.jsx)("a",{href:"https://github.com/rdport/fancytodo-server",children:"fancytodo-server on github"}),", ",Object(i.jsx)("a",{href:"https://fancytodo-client.onrender.com",children:"Fancytodo website"})]}),Object(i.jsx)("li",{children:"This project uses free-tier hosting so this website might not always be accessible and a significant initial loading time is expected."})]})]})]}),Object(i.jsx)("div",{className:"modal-footer",children:Object(i.jsx)("button",{type:"button",onClick:t,className:"btn btn-secondary","data-dismiss":"modal",children:"Close"})})]})})})})},C=c(13),K=c.n(C);var B=function(){var e=Object(l.c)((function(e){return e.pathReducer.path})),t=Object(l.c)((function(e){return e.navbarReducer})).searchKey,c=Object(l.c)((function(e){return e.navbarReducer})).favSearchKey,s=Object(a.useState)(""),r=Object(b.a)(s,2),o=r[0],n=r[1],m=Object(l.c)((function(e){return e.navbarReducer.isShowInfo})),j=Object(l.b)(),v=F(o,500),u=Object(a.useRef)(!1);function f(){n(""),j(R(""))}return Object(a.useEffect)((function(){K()("#info-modal").modal("show")}),[]),Object(a.useEffect)((function(){"/"===e?n(t):"/favorites"===e&&n(c)}),[e]),Object(a.useEffect)((function(){u.current?"/"===e?(j(function(e){return function(t){t({type:"navbar/setSearchKey",searchKey:e})}}(v)),j(d(N(1,v),[],"searchMovies"))):"/favorites"===e&&j(R(v)):u.current=!0}),[j,v]),Object(a.useEffect)((function(){m?K()("#info-modal").modal("show"):(K()("#info-modal").modal("hide"),K()("body").removeClass("modal-open"),K()(".modal-backdrop").remove())}),[m]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(i.jsxs)(h.c,{className:"nav-link d-flex align-items-center",exact:!0,to:"/",onClick:f,children:[Object(i.jsx)("img",{src:"/images/logo.svg",width:"30",height:"30",className:"d-inline-block align-top",alt:"movie-app logo",loading:"lazy"}),Object(i.jsx)("div",{className:"brand-name",children:"MOVIE APP"})]}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:[Object(i.jsxs)("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",onClick:f,children:Object(i.jsxs)(h.c,{className:"nav-link d-flex align-items-center",activeClassName:"active",exact:!0,to:"/",children:[Object(i.jsx)("img",{src:"/images/home.svg",width:"30",height:"30",className:"d-inline-block align-top",alt:"home logo",loading:"lazy"}),"Home"]})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsxs)(h.c,{className:"nav-link d-flex align-items-center",activeClassName:"active",exact:!0,to:"/favorites",children:[Object(i.jsx)("img",{src:"/images/star.svg",width:"30",height:"30",className:"d-inline-block align-top",alt:"favorites logo",loading:"lazy"}),"Favorites"]})}),Object(i.jsx)("li",{className:"nav-item",onClick:function(){j(T(!0))},children:Object(i.jsxs)("div",{className:"nav-link d-flex align-items-center info-tab",children:[Object(i.jsx)("img",{src:"/images/info.svg",width:"30",height:"30",className:"d-inline-block align-top mr-1",alt:"info logo",loading:"lazy"}),"Info"]})})]}),("/favorites"===e||"/"===e)&&Object(i.jsx)("form",{className:"form-inline my-2 my-lg-0",onSubmit:function(e){e.preventDefault()},children:Object(i.jsx)("input",{className:"form-control mr-sm-2",name:"searchKey",value:o,onChange:function(e){n(e.target.value)},type:"search",placeholder:"Search by Title"})})]})]}),m&&Object(i.jsx)(_,{})]})};var A=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"main-page",children:[Object(i.jsx)(B,{}),Object(i.jsxs)(n.c,{children:[Object(i.jsx)(n.a,{path:"/favorites",children:Object(i.jsx)(P,{})}),Object(i.jsx)(n.a,{path:"/details/:MovieId",children:Object(i.jsx)(D,{})}),Object(i.jsx)(n.a,{path:"/",children:Object(i.jsx)(w,{})})]})]})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),i(e),a(e),s(e),r(e)}))},H=c(30),z=c(11),Y=c(31),U=c(14),W=c(2),q={movies:[],page:1,totalPages:null,isLoading:!1,movieIsLoaded:!1,movieError:null,movieIds:[],scrollPosition:null};var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"home/setMovies":return Object(W.a)(Object(W.a)({},e),{},{movies:[].concat(Object(U.a)(e.movies),Object(U.a)(t.movies))});case"home/setPage":return Object(W.a)(Object(W.a)({},e),{},{page:t.page});case"home/setTotalPages":return Object(W.a)(Object(W.a)({},e),{},{totalPages:t.totalPages});case"home/setIsLoading":return Object(W.a)(Object(W.a)({},e),{},{isLoading:t.isLoading});case"home/setMovieIsLoaded":return Object(W.a)(Object(W.a)({},e),{},{movieIsLoaded:t.movieIsLoaded});case"home/setMovieError":return Object(W.a)(Object(W.a)({},e),{},{movieError:t.movieError});case"home/resetMovies":return Object(W.a)(Object(W.a)({},e),{},{movies:t.movies});case"home/setMovieIds":return Object(W.a)(Object(W.a)({},e),{},{movieIds:[].concat(Object(U.a)(e.movieIds),Object(U.a)(t.movieIds))});case"home/resetMovieIds":return Object(W.a)(Object(W.a)({},e),{},{moviesIds:t.movieIds});case"home/setScrollPosition":return Object(W.a)(Object(W.a)({},e),{},{scrollPosition:t.scrollPosition});default:return e}},V={favoriteMovies:[],favScrollPosition:null};var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"favorites/addFavoriteMovie":return Object(W.a)(Object(W.a)({},e),{},{favoriteMovies:[t.favoriteMovie].concat(Object(U.a)(e.favoriteMovies))});case"favorites/deleteFavoriteMovie":return Object(W.a)(Object(W.a)({},e),{},{favoriteMovies:e.favoriteMovies.filter((function(e){return e.id!==t.favoriteMovieId}))});case"home/setFavScrollPosition":return Object(W.a)(Object(W.a)({},e),{},{favScrollPosition:t.favScrollPosition});default:return e}},X={path:""};var Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"path/setPath":return Object(W.a)(Object(W.a)({},e),{},{path:t.path});default:return e}},$={searchKey:"",favSearchKey:"",isShowInfo:!0};var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"navbar/setSearchKey":return Object(W.a)(Object(W.a)({},e),{},{searchKey:t.searchKey});case"navbar/setFavSearchKey":return Object(W.a)(Object(W.a)({},e),{},{favSearchKey:t.favSearchKey});case"navbar/setIsShowInfo":return Object(W.a)(Object(W.a)({},e),{},{isShowInfo:t.isShowInfo});default:return e}},te={movieDetail:{},movieDetailIsLoaded:!1,movieDetailError:null};var ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"movieDetail/setMovieDetail":return Object(W.a)(Object(W.a)({},e),{},{movieDetail:t.movieDetail});case"movieDetail/setMovieDetailIsLoaded":return Object(W.a)(Object(W.a)({},e),{},{movieDetailIsLoaded:t.movieDetailIsLoaded});case"movieDetail/setMovieDetailError":return Object(W.a)(Object(W.a)({},e),{},{moviesDetailError:t.movieDetailError});default:return e}},ie=c(28),ae=c(32),se=c.n(ae),re=Object(z.c)({homeReducer:G,favoriteReducer:Q,pathReducer:Z,navbarReducer:ee,movieDetailReducer:ce}),oe={key:"root",storage:se.a,whitelist:["homeReducer","favoriteReducer","pathReducer","navbarReducer","movieDetailReducer"],blacklist:[]},ne=Object(ie.a)(oe,re),le=Object(z.d)(ne,Object(z.a)(Y.a)),de=Object(ie.b)(le);c(45),c(47),c(48);o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(l.a,{store:le,children:Object(i.jsx)(H.a,{loading:null,persistor:de,children:Object(i.jsx)(h.a,{children:Object(i.jsx)(A,{})})})})}),document.getElementById("root")),J()}},[[49,1,2]]]);
//# sourceMappingURL=main.88df53e0.chunk.js.map