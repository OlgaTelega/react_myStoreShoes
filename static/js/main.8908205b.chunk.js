(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{16:function(e,t,r){e.exports={overlay:"Drawer_overlay__1ipwf",overlayVisible:"Drawer_overlayVisible__3T7SR",drawer:"Drawer_drawer__3hX0_",items:"Drawer_items__3Glit"}},17:function(e,t,r){e.exports={card:"Card_card__2ZdOW",plus:"Card_plus__2VeTs",favorite:"Card_favorite__3Hh2L"}},39:function(e,t,r){},70:function(e,t,r){"use strict";r.r(t);var c=r(0),a=r.n(c),n=r(12),s=r(31),i=r.n(s),o=(r(39),r(9)),l=r(10),d=r(7),j=r.n(d),u=r(11),b=r(3),x=r(2),h=r(4),m=r.n(h),f=a.a.createContext({}),p=function(){var e=a.a.useContext(f),t=e.cartItems,r=e.setCartItems,c=t.reduce((function(e,t){return t.price+e}),0);return{cartItems:t,setCartItems:r,totalPrice:c}},O=r(1);var v=function(e){var t=p().totalPrice;return Object(O.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(O.jsx)(n.b,{to:"/",children:Object(O.jsxs)("div",{className:"d-flex align-center",children:[Object(O.jsx)("img",{width:40,height:40,src:"/img/logo.png",alt:"photo"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(O.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(O.jsxs)("ul",{className:"d-flex",children:[Object(O.jsxs)("li",{onClick:e.onClickCart,className:"mr-30 cu-p",children:[Object(O.jsx)("img",{width:18,height:18,src:"/img/cart.svg",alt:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(O.jsxs)("span",{children:[t," \u0440\u0443\u0431."]})]}),Object(O.jsx)("li",{className:"mr-20 cu-p",children:Object(O.jsx)(n.b,{to:"/favorites",children:Object(O.jsx)("img",{width:18,height:18,src:"/img/heart.svg",alt:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})})}),Object(O.jsx)("li",{children:Object(O.jsx)(n.b,{to:"/orders",children:Object(O.jsx)("img",{width:18,height:18,src:"/img/user.svg",alt:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"})})})]})]})},g=function(e){var t=e.image,r=e.title,c=e.description,n=a.a.useContext(f).setCartOpened;return Object(O.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(O.jsx)("img",{className:"mb-20",width:"120px",src:t,alt:"cart"}),Object(O.jsx)("h2",{children:r}),Object(O.jsx)("p",{className:"opacity-6",children:c}),Object(O.jsxs)("button",{onClick:function(){return n(!1)},className:"green-button",children:[Object(O.jsx)("img",{src:"/img/arrow2.svg",alt:"arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},N=r(16),w=r.n(N),k=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var C=function(e){var t=e.onClose,r=e.onRemove,c=e.items,n=void 0===c?[]:c,s=e.opened,i=p(),o=i.cartItems,l=i.setCartItems,d=i.totalPrice,x=a.a.useState(null),h=Object(b.a)(x,2),f=h[0],v=h[1],N=a.a.useState(!1),C=Object(b.a)(N,2),y=C[0],_=C[1],I=a.a.useState(!1),S=Object(b.a)(I,2),A=S[0],T=S[1],F=function(){var e=Object(u.a)(j.a.mark((function e(){var t,r,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),e.next=4,m.a.post("https://6140d864357db50017b3d923.mockapi.io/orders",{items:o});case 4:t=e.sent,r=t.data,v(r.id),_(!0),l([]),c=0;case 10:if(!(c<o.length)){e.next=19;break}return a=o[c],e.next=14,m.a.delete("https://6140d864357db50017b3d923.mockapi.io/cart"+a.id);case 14:return e.next=16,k(1e3);case 16:c++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.log("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437");case 24:T(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"".concat(w.a.overlay," ").concat(s?w.a.overlayVisible:""),children:Object(O.jsxs)("div",{className:w.a.drawer,children:[Object(O.jsxs)("h2",{className:"d-flex justify-between mb-20",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(O.jsx)("img",{onClick:t,className:"remove-btn cu-p",src:"/img/btn-remove.svg",alt:"Close"})]}),n.length>0?Object(O.jsxs)("div",{className:"d-flex flex-column flex",children:[Object(O.jsx)("div",{className:"items flex",children:n.map((function(e){return Object(O.jsxs)("div",{className:"cart-item d-flex align-center mb-20",children:[Object(O.jsx)("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")")},className:"cart-item-img"}),Object(O.jsxs)("div",{className:"mr-20 flex",children:[Object(O.jsx)("p",{className:"mb-5",children:e.title}),Object(O.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(O.jsx)("img",{onClick:function(){return r(e.id)},className:"remove-btn",src:"/img/btn-remove.svg",alt:"Remove"})]},e.id)}))}),Object(O.jsxs)("div",{className:"cart-total-block",children:[Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(O.jsx)("div",{}),Object(O.jsxs)("b",{children:[d," \u0440\u0443\u0431."]})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(O.jsx)("div",{}),Object(O.jsxs)("b",{children:[.05*d," \u0440\u0443\u0431."]})]})]}),Object(O.jsxs)("button",{disabled:A,onClick:F,className:"green-button",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(O.jsx)("img",{src:"/img/arrow.svg",alt:"Arrow"})]})]})]}):Object(O.jsx)(g,{title:y?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:y?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(f," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.",image:y?"/img/complete-order.jpg":"/img/empty-cart.jpg"})]})})},y=r(34),_=r(17),I=r.n(_);var S=function(e){var t=e.id,r=e.title,c=e.imageUrl,n=e.price,s=e.onFavorite,i=e.onPlus,o=e.favorited,l=void 0!==o&&o,d=e.loading,j=void 0!==d&&d,u=a.a.useContext(f).isItemAdded,x=a.a.useState(l),h=Object(b.a)(x,2),m=h[0],p=h[1],v={id:t,parentId:t,title:r,imageUrl:c,price:n};return Object(O.jsx)("div",{className:I.a.card,children:j?Object(O.jsxs)(y.a,{speed:4,width:160,height:210,viewBox:"0 0 150 210",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(O.jsx)("rect",{x:"55",y:"-133",rx:"3",ry:"3",width:"88",height:"6"}),Object(O.jsx)("rect",{x:"101",y:"-59",rx:"3",ry:"3",width:"52",height:"9"}),Object(O.jsx)("rect",{x:"0",y:"0",rx:"11",ry:"11",width:"150",height:"100"}),Object(O.jsx)("rect",{x:"0",y:"117",rx:"5",ry:"5",width:"150",height:"15"}),Object(O.jsx)("rect",{x:"0",y:"140",rx:"5",ry:"5",width:"100",height:"15"}),Object(O.jsx)("rect",{x:"0",y:"178",rx:"5",ry:"5",width:"80",height:"25"}),Object(O.jsx)("rect",{x:"118",y:"173",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(O.jsxs)(O.Fragment,{children:[s&&Object(O.jsx)("div",{className:I.a.favorite,onClick:function(){s(v),p(!m)},children:Object(O.jsx)("img",{src:m?"/img/heart-liked.svg":"/img/heart-unliked.svg",alt:"Unliked"})}),Object(O.jsx)("img",{width:133,height:112,src:c,alt:"Sneakers"}),Object(O.jsx)("h5",{children:r}),Object(O.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(O.jsxs)("div",{className:"d-flex flex-column",children:[Object(O.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(O.jsxs)("b",{children:[n," \u0440\u0443\u0431."]})]}),i&&Object(O.jsx)("img",{className:I.a.plus,onClick:function(){i(v)},src:u(t)?"/img/btn-chacked.svg":"/img/btn-plus.svg",alt:"Plus"})]})]})})};var A=function(e){var t=e.items,r=e.searchValue,c=e.setSearchValue,a=e.onChangeSearchInput,n=e.onAddToFavorite,s=e.onAddToCart,i=e.isLoading;return Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(O.jsx)("h1",{children:r?"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: '".concat(r,"'"):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(O.jsxs)("div",{className:"search-block d-flex",children:[Object(O.jsx)("img",{src:"/img/search.svg",alt:"Search"}),r&&Object(O.jsx)("img",{onClick:function(){return c("")},className:"clear cu-p",src:"/img/btn-remove.svg",alt:"Clear"}),Object(O.jsx)("input",{onChange:a,value:r,placeholder:"\u041f\u043e\u0438\u0441\u043a..."})]})]}),Object(O.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=t&&t.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())}));return(i?Object(l.a)(Array(8)):e).map((function(e,t){return Object(O.jsx)(S,Object(o.a)(Object(o.a)({},e),{},{onFavorite:function(e){return n(e)},onPlus:function(e){return s(e)},loading:i},e),t)}))}()})]})};var T=function(){var e=a.a.useContext(f),t=e.favorites,r=e.onAddToFavorite;return Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(O.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(O.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e,t){return Object(O.jsx)(S,Object(o.a)({favorited:!0,onFavorite:r},e),t)}))})]})};var F=function(){var e=a.a.useContext(f),t=(e.onAddToFavorite,e.onAddToCart,a.a.useState([])),r=Object(b.a)(t,2),c=r[0],n=r[1],s=a.a.useState(!0),i=Object(b.a)(s,2),d=i[0],x=i[1];return a.a.useEffect((function(){Object(u.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://6140d864357db50017b3d923.mockapi.io/orders");case 3:t=e.sent,r=t.data,n(r.reduce((function(e,t){return[].concat(Object(l.a)(e),Object(l.a)(t.items))}),[])),x(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0437\u0430\u043a\u0430\u0437\u043e\u0432");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(O.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(O.jsx)("div",{className:"d-flex flex-wrap",children:(d?Object(l.a)(Array(8)):c).map((function(e,t){return Object(O.jsx)(S,Object(o.a)({loading:d},e),t)}))})]})};var P=function(){var e=a.a.useState([]),t=Object(b.a)(e,2),r=t[0],c=t[1],n=a.a.useState([]),s=Object(b.a)(n,2),i=s[0],d=s[1],h=a.a.useState([]),p=Object(b.a)(h,2),g=p[0],N=p[1],w=a.a.useState(""),k=Object(b.a)(w,2),y=k[0],_=k[1],I=a.a.useState(!1),S=Object(b.a)(I,2),P=S[0],V=S[1],L=a.a.useState(!0),R=Object(b.a)(L,2),D=R[0],E=R[1];a.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,r,a,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([m.a.get("https://6140d864357db50017b3d923.mockapi.io/cart"),m.a.get("https://6140d864357db50017b3d923.mockapi.io/favorites"),m.a.get("https://6140d864357db50017b3d923.mockapi.io/items")]);case 3:t=e.sent,r=Object(b.a)(t,3),a=r[0],n=r[1],s=r[2],E(!1),d(a.data),N(n.data),c(s.data),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var U=function(){var e=Object(u.a)(j.a.mark((function e(t){var r,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(r=i.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return d((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,m.a.delete("https://6140d864357db50017b3d923.mockapi.io/cart/".concat(r.id));case 6:e.next=14;break;case 8:return d((function(e){return[].concat(Object(l.a)(e),[t])})),e.next=11,m.a.post("https://6140d864357db50017b3d923.mockapi.io/cart",t);case 11:c=e.sent,a=c.data,d((function(e){return e.map((function(e){return e.parentId===a.parentId?Object(o.a)(Object(o.a)({},e),{},{id:a.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(j.a.mark((function e(t){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!g.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}m.a.delete("https://6140d864357db50017b3d923.mockapi.io/favorites/".concat(t.id)),N((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=11;break;case 6:return e.next=8,m.a.post("https://6140d864357db50017b3d923.mockapi.io/favorites",t);case 8:r=e.sent,c=r.data,N((function(e){return[].concat(Object(l.a)(e),[c])}));case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(f.Provider,{value:{items:r,cartItems:i,favorites:g,isItemAdded:function(e){i.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToFavorite:B,onAddToCart:U,setCartOpened:V,setCartItems:d},children:Object(O.jsxs)("div",{className:"wrapper clear",children:[Object(O.jsx)(C,{items:i,onClose:function(){return V(!1)},onRemove:function(e){try{m.a.delete("https://6140d864357db50017b3d923.mockapi.io/cart/".concat(e)),d((function(t){return t.filter((function(t){return Number(t.id)!==Number(e)}))}))}catch(t){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b"),console.error(t)}},opened:P}),Object(O.jsx)(v,{onClickCart:function(){return V(!0)}}),Object(O.jsx)(x.a,{path:"/",exact:!0,children:Object(O.jsx)(A,{items:r,cartItems:i,searchValue:y,setSearchValue:_,onChangeSearchInput:function(e){_(e.target.value)},onAddToFavorite:B,onAddToCart:U,isLoading:D})}),Object(O.jsx)(x.a,{path:"/favorites",exact:!0,children:Object(O.jsx)(T,{})}),Object(O.jsx)(x.a,{path:"/orders",exact:!0,children:Object(O.jsx)(F,{})})]})})};r(69);i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(n.a,{children:Object(O.jsx)(P,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.8908205b.chunk.js.map