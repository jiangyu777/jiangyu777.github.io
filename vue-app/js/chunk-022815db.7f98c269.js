(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-022815db"],{"1a20":function(o,t,e){},"2d3b":function(o,t,e){"use strict";e.r(t);var n=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",[e("van-search",{attrs:{placeholder:"永生花","show-action":""},on:{search:o.onSearch,cancel:o.onCancel},model:{value:o.keyword,callback:function(t){o.keyword=t},expression:"keyword"}}),o._m(0),e("div",[e("List",{attrs:{goods:o.goods},on:{changeallgoods:o.getGoods}})],1)],1)},a=[function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"search_two_hot"},[e("h4",[o._v("热门搜索")]),e("p",[e("a",{attrs:{href:""}},[o._v("2月14情人节鲜花")]),e("a",{attrs:{href:""}},[o._v("爱情鲜花")])])])}],s={data:function(){return{keyword:"",goods:[]}},methods:{getGoods:function(){this.goods.reverse()},onSearch:function(){var o=this;this.$axios.get("/vue/getGoods",{params:{keyword:this.keyword}}).then(function(t){o.goods=t.data.result})},onCancel:function(){this.$router.go(-1)}}},r=s,c=(e("7b2b"),e("2877")),i=Object(c["a"])(r,n,a,!1,null,"5a97caad",null);t["default"]=i.exports},"7b2b":function(o,t,e){"use strict";var n=e("1a20"),a=e.n(n);a.a}}]);
//# sourceMappingURL=chunk-022815db.7f98c269.js.map