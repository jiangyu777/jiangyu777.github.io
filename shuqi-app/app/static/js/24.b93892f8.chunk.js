(window["webpackJsonpshuqi-app"]=window["webpackJsonpshuqi-app"]||[]).push([[24],{300:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t),function(e,r){n.d(t,"default",(function(){return h}));var o=n(84),a=n(7),i=n(8),c=n(10),l=n(9),s=n(11),u=(n(300),n(73)),f=n(81),p=n(97),h=(n(66),function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(c.a)(this,Object(l.a)(t).call(this))).state={main:[]},e}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/react/getBooks",{params:{skip:210,limit:12}}).then((function(t){e.setState({main:t.data.result}),console.log("")}))}},{key:"render",value:function(){return Object(o.a)(this.state),r.createElement("div",null,r.createElement(u.a,{title:"\u5176\u4ed6",show:!0}),this.state.main.map((function(e,t){return r.createElement("div",{key:t,className:"books"},r.createElement(p.a,{to:"/book/"+e._id},r.createElement("div",{className:"book_img",style:{width:"1.68rem",height:"2.24rem"}},r.createElement("img",{style:{width:"1.68rem",height:"2.24rem"},src:e.cover,alt:""})),r.createElement("div",{style:{width:"4.86rem",height:"2.25rem"},className:"book_txt"},r.createElement("p",{style:{fontSize:"0.32rem",color:"#333",height:"0.4rem",lineHeight:"0.4rem"}}," ",e.title),r.createElement("p",{style:{fontSize:"0.25rem",color:"#999",height:"0.4rem",lineHeight:"0.4rem"}},e.author),r.createElement("p",{style:{width:"4.86rem",height:"0.72rem",fontSize:"0.25rem",color:"#999",overflow:"hidden",lineHeight:"0.38rem"}},e.desc),r.createElement("p",{style:{height:"0.6rem",lineHeight:"0.6rem",color:"#666"}},r.createElement("span",null,1==e.status?"\u5b8c\u7ed3":"\u8fde\u8f7d"," ,"),r.createElement("span",null,e.tags)))))})))}}]),t}(e))}.call(this,n(3).Component,n(3))},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=new(n(6).a)},73:function(e,t,n){"use strict";(function(e,r){n.d(t,"a",(function(){return d}));n(76);var o=n(77),a=n.n(o),i=(n(82),n(83)),c=n.n(i),l=n(7),s=n(8),u=n(10),f=n(9),p=n(11),h=(n(74),n(66)),d=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).goback=function(e){e&&h.a.go(-1)},n.gotoSearch=function(){h.a.push("/home")},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.show;return r.createElement(a.a,{className:"head",mode:"dark",icon:t&&r.createElement(c.a,{style:{color:"#00c98d"},type:"left"}),onLeftClick:function(){return e.goback(t)},rightContent:[r.createElement("img",{src:n(75),onClick:this.gotoSearch,style:{width1:"0.4rem",height:"0.4rem"}})]},this.props.title)}}]),t}(e)}).call(this,n(3).Component,n(3))},74:function(e,t,n){},75:function(e,t,n){e.exports=n.p+"static/media/home.48a04f55.png"},76:function(e,t,n){"use strict";n(78),n(79)},77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(71)),o=u(n(67)),a=u(n(68)),i=u(n(69)),c=u(n(70)),l=u(n(72)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(3));function u(e){return e&&e.__esModule?e:{default:e}}var f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},p=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,o=e.children,a=e.mode,i=e.icon,c=e.onLeftClick,u=e.leftContent,p=e.rightContent,h=f(e,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return s.createElement("div",(0,r.default)({},h,{className:(0,l.default)(n,t,t+"-"+a)}),s.createElement("div",{className:t+"-left",role:"button",onClick:c},i?s.createElement("span",{className:t+"-left-icon","aria-hidden":"true"},i):null,u),s.createElement("div",{className:t+"-title"},o),s.createElement("div",{className:t+"-right"},p))}}]),t}(s.Component);t.default=p,p.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}},e.exports=t.default},79:function(e,t,n){},81:function(e,t,n){"use strict";n(91),n(92);var r=n(93),o=n.n(r),a=(n(94),n(95)),i=n.n(a),c=n(80),l=n.n(c),s=n(66);l.a.defaults.baseURL="https://jiangyu777.com:1906/";l.a.defaults.headers.common.token="",l.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var u=i.a.alert;function f(e){o.a.hide(),o.a.fail(e,1)}l.a.interceptors.request.use((function(e){var t;return t="\u8bf7\u6c42\u4e2d",o.a.hide(),o.a.loading(t,1,(function(){console.log("Load complete !!!")})),e.headers.token=sessionStorage.token,console.log(e),e}),(function(e){return f("\u8bf7\u6c42\u5931\u8d25"),Promise.reject(e)})),l.a.interceptors.response.use((function(e){var t;return console.log(e),t=e.data.msg,o.a.hide(),o.a.info(t,1),500==e.data.code&&function(){var e=u("\u767b\u5f55\u63d0\u793a","\u4f60\u786e\u5b9a\u662f\u5426\u524d\u5f80\u767b\u9646",[{text:"\u6211\u5c31\u770b\u770b",onPress:function(){return console.log("\u6e38\u5ba2\u8bbf\u95ee")},style:"default"},{text:"\u9a6c\u4e0a\u767b\u5f55",onPress:function(){return s.a.push("/login")}}]);setTimeout((function(){console.log("auto close"),e.close()}),5e5)}(),e}),(function(e){return f("\u54cd\u5e94\u5931\u8d25"),Promise.reject(e)})),n.d(t,"a",(function(){return l.a}))},84:function(e,t,n){"use strict";function r(e){if(null==e)throw new TypeError("Cannot destructure undefined")}n.d(t,"a",(function(){return r}))},97:function(e,t,n){"use strict";var r=n(3),o=n.n(r),a=n(0),i=n.n(a),c=n(5),l=n.n(c),s=n(6),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},h=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=f(this,e.call.apply(e,[this].concat(a))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!p(e)){e.preventDefault();var t=r.context.router.history,n=r.props,o=n.replace,a=n.to;o?t.replace(a):t.push(a)}},f(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==t,'You must specify the "to" property');var a=this.context.router.history,i="string"===typeof t?Object(s.b)(t,null,null,a.location):t,c=a.createHref(i);return o.a.createElement("a",u({},r,{onClick:this.handleClick,href:c,ref:n}))},t}(o.a.Component);h.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},h.defaultProps={replace:!1},h.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=h}}]);
//# sourceMappingURL=24.b93892f8.chunk.js.map