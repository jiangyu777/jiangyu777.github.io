(function(e){function t(t){for(var o,a,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)a=i[l],r[a]&&d.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},a={app:0},r={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0fad88a6":"eec5b5ed","chunk-2d0a4f06":"118da105","chunk-2d0b99b6":"251c287b","chunk-2d0bd977":"f184e4b0","chunk-2d2102cc":"7bd9eac0","chunk-586cd7b2":"72d18109","chunk-637e4590":"c12d5939","chunk-d7ee8eda":"7bbfae77"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0fad88a6":1,"chunk-586cd7b2":1,"chunk-637e4590":1,"chunk-d7ee8eda":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-0fad88a6":"ab8d8f3b","chunk-2d0a4f06":"31d6cfe0","chunk-2d0b99b6":"31d6cfe0","chunk-2d0bd977":"31d6cfe0","chunk-2d2102cc":"31d6cfe0","chunk-586cd7b2":"ca6214e6","chunk-637e4590":"61d4475d","chunk-d7ee8eda":"77b9986b"}[e]+".css",r=u.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===o||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){a[e]=0}));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise(function(t,n){o=r[e]=[t,n]});t.push(o[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e),s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");c.type=o,c.request=a,n[1](c)}r[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"2b06":function(e,t,n){},"41cb":function(e,t,n){"use strict";var o=n("2b0e"),a=n("8c4f"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"guide"}},[n("SwipeDemo",{attrs:{id:"swipeone",options:e.swiperOptions}},e._l(e.imgs,function(t,o){return n("SwipeItem",{key:o},[n("img",{staticClass:"g-img",attrs:{src:t,alt:""},on:{click:function(t){return e.gotoHome(o)}}})])}),1)],1)},c=[],i={mounted:function(){localStorage.pcount?(localStorage.pcount++,localStorage.pcount>3&&this.$router.push({name:"home"})):localStorage.pcount=1},methods:{gotoHome:function(e){e==this.imgs.length-1&&this.$router.push({name:"home"})}},data:function(){return{imgs:[n("4501"),n("692a"),n("5d9a"),n("92b4")],swiperOptions:{loop:!1,autoplay:{delay:1500}}}}},u=i,s=(n("4bf4"),n("2877")),l=Object(s["a"])(u,r,c,!1,null,"aa0dc54a",null),d=l.exports;o["a"].use(a["a"]);var f=[{path:"/",redirect:{name:"guide"}},{path:"/guide",name:"guide",component:d},{path:"/search",name:"search",component:function(){return n.e("chunk-2d0bd977").then(n.bind(null,"2d3b"))}},{path:"/good/detail/:goodId",name:"good",component:function(){return n.e("chunk-2d0b99b6").then(n.bind(null,"3454"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-586cd7b2").then(n.bind(null,"a55b"))}},{path:"/index",name:"index",component:function(){return n.e("chunk-0fad88a6").then(n.bind(null,"d504"))},children:[{path:"",redirect:{name:"home"}},{path:"home",name:"home",component:function(){return n.e("chunk-637e4590").then(n.bind(null,"bb51"))}},{path:"classify",name:"classify",component:function(){return n.e("chunk-2d0a4f06").then(n.bind(null,"0929"))}},{path:"cart",name:"cart",component:function(){return n.e("chunk-2d2102cc").then(n.bind(null,"b789"))}},{path:"mine",name:"mine",component:function(){return n.e("chunk-d7ee8eda").then(n.bind(null,"0a4e"))}},{path:"**",redirect:{name:"home"}}]},{path:"**",redirect:{name:"home"}}],h=new a["a"]({routes:f,mode:"hash",base:"/"});t["a"]=h},4501:function(e,t,n){e.exports=n.p+"img/img1.fe259af7.jpg"},"4bf4":function(e,t,n){"use strict";var o=n("b718"),a=n.n(o);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("7f7f"),n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:e.moveName,mode:"out-in"}},[n("router-view",{staticClass:"main"})],1)],1)},r=[],c=(n("28a5"),{data:function(){return{moveName:"slide-list"}},watch:{$route:function(e,t){var n=e.path.split("/").length,o=t.path.split("/").length;console.log("进入 "+n),console.log("离开 "+o),console.log(n>o?"列表进入详情":"详情返回列表"),this.moveName=n>o?"slide-detail":"slide-list"}}}),i=c,u=(n("5c0b"),n("2877")),s=Object(u["a"])(i,a,r,!1,null,null,null),l=s.exports,d=n("41cb"),f=n("c0d6"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(" 完整语法高亮")]),n("h2",[e._v(" CommonJS 模块 ")]),n("h2",[e._v(" 组件作用域的 CSS ")]),n("h2",[e._v(" "+e._s(e._f("lower")(e.word))+" ")]),e._l(e.arr,function(t,o){return n("p",{key:o},[e._v("\n        "+e._s(t)+"\n    ")])}),n("h2",{on:{click:e.changeCount}},[e._v(" count === "+e._s(e.count))]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.word,expression:"word"}],attrs:{type:"text"},domProps:{value:e.word},on:{input:function(t){t.target.composing||(e.word=t.target.value)}}})]),n("button",{on:{click:e.changeChild}},[e._v("change child by ref")]),n("hr"),n("Child",{ref:"one",attrs:{msg:"feel happy",word:e.word,num:e.count},on:{"change-parent":e.getWord}},[n("div",[n("h2",[e._v("这是 父组件动态分发给自己的内容片断 slot ")])]),n("div",{attrs:{slot:"menu"},slot:"menu"},[n("h2",[e._v("电脑 ")]),n("h2",[e._v("衣服 ")]),n("h2",[e._v("零食 ")])])])],2)},p=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("child - One 子组件")]),n("h2",[e._v(" props == "+e._s(e.msg)+" / "+e._s(e.word)+"  / "+e._s(e.num))]),n("h2",[e._v(" "+e._s(e.message))]),n("button",{on:{click:e.changeParent}},[e._v(" 自定义事件去实现 子修改 父组件 ")]),n("button",{on:{click:e.change}},[e._v(" $parent 去实现 子修改 父组件 ")]),n("div",{staticStyle:{border:"2px solid red"}},[e._t("default")],2),n("div",{staticStyle:{border:"2px solid blue"}},[e._t("menu")],2)])},g=[],b={props:["msg","word","num"],data:function(){return{message:"我很努力在三阶段,手机都不用了..."}},methods:{todoModal:function(){console.log("努力就一定会有收获...")},changeParent:function(){this.$emit("change-parent","word Will be change by 自定义事件...")},change:function(){this.$parent.changeCount(),this.$parent.word="1906 daydayup!"}}},v=b,y=Object(u["a"])(v,m,g,!1,null,null,null),w=y.exports,_={name:"hello",data:function(){return{arr:[],word:"word HARD For dream",count:1906}},computed:{},watch:{},methods:{changeCount:function(){this.count+=10},changeChild:function(){this.$refs.one.message="I will changed By refs...",this.$refs.one.todoModal()},getWord:function(e){this.word=e}},components:{Child:w},filters:{},mounted:function(){},created:function(){}},k=_,O=(n("f174"),Object(u["a"])(k,h,p,!1,null,"99e0261e",null)),j=O.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"swiper-container",attrs:{id:e.id}},[n("div",{staticClass:"swiper-wrapper"},[e._t("default")],2)])},x=[],C={name:"swipe",props:["id","options"],mounted:function(){new Swiper("#"+this.id,this.options)},updated:function(){new Swiper("#"+this.id,this.options)}},$=C,L=Object(u["a"])($,S,x,!1,null,null,null),P=L.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"swiper-slide"},[e._t("default")],2)},E=[],T={},I=Object(u["a"])(T,A,E,!1,null,null,null),N=I.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-nav-bar",{attrs:{title:e.title,"left-text":e.show?"返回":"","left-arrow":e.show},on:{"click-left":e.onClickLeft}},[n("div",{attrs:{slot:"right"},slot:"right"},[n("van-icon",{attrs:{name:"scan"},on:{click:e.startScan}}),e.searchShow?n("van-icon",{attrs:{name:"search"},on:{click:e.goSearch}}):e._e()],1)])},M=[],B={data:function(){return{searchShow:!0}},props:{title:{type:String,default:"xxxx"},show:{type:Boolean,default:!1}},methods:{startScan:function(){console.log("startScan")},goSearch:function(){this.$router.push({name:"search"})},onClickLeft:function(){this.$store.commit("changeActive",this.$store.state.oldActive),this.$router.go(-1)},onClickRight:function(){}},mounted:function(){"search"==this.$route.name&&(this.searchShow=!1)}},H=B,q=Object(u["a"])(H,D,M,!1,null,null,null),R=q.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"l-main"},[n("van-pull-refresh",{on:{refresh:e.onRefresh},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},e._l(e.goods,function(e,t){return n("Item",{key:t,attrs:{good:e}})}),1)],1)},W=[],F={props:["goodtype","goods","goodList"],data:function(){return{isLoading:!1}},methods:{onRefresh:function(){var e=this;console.log("开始 刷新..."+this.isLoading),setTimeout(function(){e.isLoading=!1,e.$toast("下拉刷新成功"),e.$emit("changeallgoods")},1e3)}},mounted:function(){console.log(this.goods)}},K=F,U=(n("f00f"),Object(u["a"])(K,J,W,!1,null,"18af06f0",null)),G=U.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.good.type?n("div",{staticClass:"l-item move-in"},[n("router-link",{attrs:{to:{name:"good",params:{goodId:e.good._id},query:{name:e.good.name}}}},[n("img",{staticClass:"l-img",attrs:{src:e.good.img,alt:""}}),n("h4",{staticClass:"l-h4"},[e._v(e._s(e.good.name)+" -- "+e._s(e.good.price)+" / type = "+e._s(e.good.type.text)+" ")])])],1):e._e()},Q=[],V={props:["good"]},X=V,Y=(n("9448"),Object(u["a"])(X,z,Q,!1,null,"51f7612d",null)),Z=Y.exports;o["a"].filter("lower",function(e){if(e)return e.toLowerCase()}),o["a"].component("Hello",j),o["a"].component("SwipeDemo",P),o["a"].component("SwipeItem",N),o["a"].component("Head",R),o["a"].component("List",G),o["a"].component("Item",Z),o["a"].directive("mymodel",{bind:function(e,t){console.log(t);var n=new Object;n["value"]=t.value,e.value=n.value,e.oninput=function(e){n.value=e.target.value},Object.defineProperty(n,"value",{get:function(){return"old"},set:function(t){console.log(t),e.value=t}})},updated:function(){}}),o["a"].mixin({created:function(){},data:function(){return{common:{}}},methods:{getCommon:function(e){var t=this;this.$axios.get("/vue/index").then(function(n){t.common=n.data+e,console.log(t.common)})}}});n("b20f");var ee=n("57b3"),te=n("5a4b"),ne=n("a27e");o["a"].use(ee["a"]),o["a"].use(te["a"]),o["a"].prototype.$axios=ne["a"],console.log("vue 项目启动的 main.js dpr=="+window.devicePixelRatio),o["a"].config.productionTip=!1,new o["a"]({router:d["a"],store:f["a"],render:function(e){return e(l)},watch:{$route:function(e,t){var n=t.name;console.log(n);var o=0;switch(n){case"home":o=0;break;case"classify":o=1;break;case"cart":o=2;break;case"mine":o=3;break;default:break}console.log(o),this.$store.commit("changeOldActive",o)}}}).$mount("#app")},"5bd2":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var o=n("840b"),a=n.n(o);a.a},"5d9a":function(e,t,n){e.exports=n.p+"img/img3.0b925144.jpg"},"692a":function(e,t,n){e.exports=n.p+"img/img2.8170ea46.jpg"},"6aba":function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"b",function(){return c});var o="firstTodo",a="countAdd",r="increment",c="decrement"},"840b":function(e,t,n){},"92b4":function(e,t,n){e.exports=n.p+"img/img4.fa80aec6.jpg"},9448:function(e,t,n){"use strict";var o=n("dd69"),a=n.n(o);a.a},a27e:function(e,t,n){"use strict";var o=n("2427"),a=n.n(o),r=n("628c"),c=n("41cb"),i="";function u(e){r["a"].clear(),Object(r["a"])({message:e,icon:"cross",duration:800})}a.a.defaults.headers.common["token"]=i,a.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",a.a.interceptors.request.use(function(e){return sessionStorage.userInfo&&(i=JSON.parse(sessionStorage.userInfo).token),e.headers["token"]=i,console.log(e),r["a"].loading({message:"加载中...",duration:1e4}),e},function(e){return u("请求-未知错误"),Promise.reject(e)}),a.a.interceptors.response.use(function(e){return console.log(e),setTimeout(function(){r["a"].clear(),r["a"].success({message:e.data.msg,duration:400}),"500"==e.data.code&&c["a"].push({name:"login",query:{active:1}})},800),e},function(e){return u("响应-未知错误"),Promise.reject(e)}),t["a"]=a.a},b20f:function(e,t,n){},b718:function(e,t,n){},c0d6:function(e,t,n){"use strict";n("8e6e"),n("ac6a"),n("456d");var o,a=n("bd86"),r=n("2b0e"),c=n("2f62"),i=n("a27e"),u=n("6aba");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){Object(a["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}r["a"].use(c["a"]);var d={state:{carNum:2,carList:[]},actions:{},mutations:{}},f={state:{banner:[]},actions:{getBannerAsync:function(e,t){var n=e.commit,o=t.url,a=t.params;i["a"].get(o,{params:a}).then(function(e){n("getBanner",e.data.result)})}},mutations:{getBanner:function(e,t){e.banner=t}}},h=new c["a"].Store({modules:{cars:d,data:f},state:{count:1906,city:"wuhan~",msg:"wuhan1906 daydayup",userInfo:{},goodList:[],typeList:[],searchList:[],keyword:"123",active:0,oldActive:0},actions:{increment:function(e){e.commit(u["d"])},decrement:function(e,t){var n=e.commit;n(u["b"],t)},changeMsgAsync:function(e,t){var n=e.commit,o=t.url,a=t.params;i["a"].get(o,{params:a}).then(function(e){n("changeMsg",e.data)})},getTypeListAsync:function(e,t){var n=e.commit,o=t.url,a=t.cb;i["a"].get(o).then(function(e){a(),n("getTypeList",e.data.result)})},getSearchListAsync:function(e,t){var n=e.commit,o=t.url,a=t.params;i["a"].get(o,{params:a}).then(function(e){n("getSearchList",e.data.result)})}},mutations:(o={},Object(a["a"])(o,u["c"],function(e){e.count++}),Object(a["a"])(o,u["a"],function(e,t){e.count+=t}),Object(a["a"])(o,"countDesc",function(e,t){e.count-=t}),Object(a["a"])(o,"changeCity",function(e,t){e.city=t}),Object(a["a"])(o,u["d"],function(e){e.count++}),Object(a["a"])(o,u["b"],function(e,t){e.count-=t}),Object(a["a"])(o,"changeMsg",function(e,t){e.msg=t}),Object(a["a"])(o,"changeUserInfo",function(e,t){e.userInfo=l({},e.userInfo,{},t)}),Object(a["a"])(o,"getGoodList",function(e,t){e.goodList=t}),Object(a["a"])(o,"getTypeList",function(e,t){e.typeList=t}),Object(a["a"])(o,"getSearchList",function(e,t){e.searchList=t}),Object(a["a"])(o,"getKeyword",function(e,t){e.keyword=t}),Object(a["a"])(o,"changeActive",function(e,t){e.active=t}),Object(a["a"])(o,"changeOldActive",function(e,t){e.oldActive=t}),o),getters:{newCount:function(e){return 10*e.count}}});t["a"]=h},dd69:function(e,t,n){},f00f:function(e,t,n){"use strict";var o=n("2b06"),a=n.n(o);a.a},f174:function(e,t,n){"use strict";var o=n("5bd2"),a=n.n(o);a.a}});
//# sourceMappingURL=app.76f70c01.js.map