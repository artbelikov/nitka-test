(function(e){function t(t){for(var s,o,c=t[0],i=t[1],u=t[2],d=0,f=[];d<c.length;d++)o=c[d],a[o]&&f.push(a[o][0]),a[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},a={app:0},r=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/nitka-test/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b78":function(e,t,n){"use strict";var s=n("9fb8"),a=n.n(s);a.a},"106f":function(e,t,n){},"30fd":function(e,t,n){"use strict";var s=n("e55c"),a=n.n(s);a.a},"36f3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),a=n("2f62"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid-container"},[e._m(0),n("div",{staticClass:"aside"},[n("AppCinemaRoomAside")],1),n("div",{staticClass:"room"},[n("AppCinemaRoom",{attrs:{roomId:"fg245y24g"}})],1)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("h1",[e._v("Avengers 4")])])}],c=(n("55dd"),n("ac6a"),n("456d"),n("6b54"),n("96cf"),n("3040")),i=n("c665"),u=n("aa9a"),l=function(){function e(){Object(i["a"])(this,e)}return Object(u["a"])(e,[{key:"getSeats",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:e.t0=t,e.next="CinemaPark-1"===e.t0?3:4;break;case 3:return e.abrupt("return",this.$_generate(10,16));case 4:return e.abrupt("return",this.$_generate(10,10));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"$_generate",value:function(e,t){var n=10,s={},a=0;while(a++<e){var r=0;while(r++<t){var o="".concat(a,":").concat(r);s[o]={id:Math.random().toString(36).slice(3),position:o,selected:!1,price:100}}}var c=Object.keys(s),i=c.sort(function(){return.5-Math.random()}),u=i.slice(0,n);return u.forEach(function(e){s[e].sold=!0}),{rowsNumber:e,seatsNumber:t,seats:s}}}]),e}(),d=l,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cinema-room"},[e.rowsNumber&&e.seatsNumber?n("div",e._l(e.rowsNumber,function(t){return n("div",{key:t,staticClass:"cinema-room-row"},e._l(e.seatsNumber,function(s){return n("AppSeat",{key:s,attrs:{seat:e.seats[t+":"+s]}})}))})):e._e()])},p=[],m=n("c93e"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cinema-room-seat",class:{sold:e.seat.sold,selected:e.seat.selected},on:{click:e.click}},[e._v("\n    "+e._s(e.seat.position)+"\n")])},v=[],h={name:"AppSeat",props:{seat:Object},methods:{click:function(){this.$store.commit(this.seat.selected?"deselectSeat":"selectSeat",this.seat)}}},S=h,_=(n("30fd"),n("2877")),g=Object(_["a"])(S,b,v,!1,null,"3fd21f27",null);g.options.__file="AppSeat.vue";var y=g.exports,j={name:"AppCinemaRoom",inject:["cinemaRoomApi"],props:{roomId:String},components:{AppSeat:y},computed:Object(m["a"])({},Object(a["c"])(["seats","rowsNumber","seatsNumber"])),methods:{loadSeats:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.cinemaRoomApi.getSeats(this.roomId);case 2:t=e.sent,this.$store.commit("setRoomConfig",t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},created:function(){this.loadSeats()}},w=j,C=(n("5ff4"),Object(_["a"])(w,f,p,!1,null,"5b08df35",null));C.options.__file="AppCinemaRoom.vue";var O=C.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isSelectedSeats?n("div",{staticClass:"cinema-room-aside"},[n("div",{staticClass:"selected-seats"},[n("div",{staticClass:"title"},[e._v("Selected seats:")]),e._l(e.readableSelectedSeats,function(t){return n("span",{staticClass:"selected-seat-text"},[e._v(e._s(t))])})],2),n("div",{staticClass:"cinema-room-aside-total-cost"},[e._v("\n        Total cost: "+e._s(e.totalCost)+"\n    ")]),n("div",{staticClass:"cinema-room-aside-buttons"},[n("button",{staticClass:"btn btn-ok",on:{click:e.buy}},[e._v("Buy")]),n("button",{staticClass:"btn btn-cancel",on:{click:e.cancel}},[e._v("Cancel")])])]):e._e()},A=[],R={name:"AppCinemaRoomAside",computed:Object(m["a"])({},Object(a["b"])(["readableSelectedSeats","isSelectedSeats","totalCost"])),methods:{buy:function(){this.$store.commit("buy")},cancel:function(){this.$store.commit("cancel")}}},x=R,N=(n("0b78"),Object(_["a"])(x,k,A,!1,null,"ecb03cb0",null));N.options.__file="AppCinemaRoomAside.vue";var $=N.exports,P={name:"app",components:{AppCinemaRoom:O,AppCinemaRoomAside:$},provide:{cinemaRoomApi:new d}},E=P,M=(n("5c0b"),Object(_["a"])(E,r,o,!1,null,null,null));M.options.__file="App.vue";var T=M.exports,I=(n("28a5"),n("8615"),new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUR",minimumFractionDigits:0})),B=function(){return new a["a"].Store({state:{rowsNumber:0,seatsNumber:0,seats:{},selectedSeats:{}},mutations:{setRoomConfig:function(e,t){var n=t.seatsNumber,s=t.rowsNumber,a=t.seats;e.seatsNumber=n,e.rowsNumber=s,e.seats=a},selectSeat:function(e,t){t.selected=!0,e.seats[t.position]=t,e.selectedSeats[t.id]=t,e.selectedSeats=Object(m["a"])({},e.selectedSeats)},deselectSeat:function(e,t){t.selected=!1,e.seats[t.position]=t,delete e.selectedSeats[t.id],e.selectedSeats=Object(m["a"])({},e.selectedSeats)},cancel:function(e){for(var t=Object.values(e.selectedSeats),n=0;n<t.length;n++){var s=t[n];e.seats[s.position].selected=!1}e.selectedSeats={}},buy:function(e){for(var t=Object.values(e.selectedSeats),n=0;n<t.length;n++){var s=t[n];e.seats[s.position].sold=!0,e.seats[s.position].selected=!1}e.selectedSeats={},setTimeout(function(){alert("Thank you for your order!")},10)}},getters:{readableSelectedSeats:function(e){return Object.values(e.selectedSeats).map(function(e){var t=e.position.split(":");return"row ".concat(t[0]," seat ").concat(t[1])})},isSelectedSeats:function(e){return Boolean(Object.keys(e.selectedSeats).length)},totalCost:function(e){var t=Object.values(e.selectedSeats).map(function(e){return e.price}).reduce(function(e,t){return e+t});return"".concat(I.format(t))}}})};s["a"].use(a["a"]),s["a"].config.productionTip=!1,new s["a"]({store:B(),render:function(e){return e(T)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var s=n("106f"),a=n.n(s);a.a},"5ff4":function(e,t,n){"use strict";var s=n("36f3"),a=n.n(s);a.a},"9fb8":function(e,t,n){},e55c:function(e,t,n){}});
//# sourceMappingURL=app.cd7c11d2.js.map