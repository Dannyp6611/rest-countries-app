(function(e){function t(t){for(var r,u,a=t[0],i=t[1],l=t[2],b=0,f=[];b<a.length;b++)u=a[b],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&f.push(c[u][0]),c[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1e1a":function(e,t,n){},"250b":function(e,t,n){"use strict";n("95cd")},"34c9":function(e,t,n){"use strict";n("6a01")},4563:function(e,t,n){"use strict";n("1e1a")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"content"};function o(e,t,n,o,u,a){var i=Object(r["z"])("MainNav"),l=Object(r["z"])("router-view");return Object(r["s"])(),Object(r["f"])("div",{class:Object(r["o"])(["app",o.mode])},[Object(r["i"])(i,{mode:o.mode,onToggle:o.toggle},null,8,["mode","onToggle"]),Object(r["g"])("div",c,[Object(r["i"])(l)])],2)}var u=n("a1e9"),a=function(e){return Object(r["v"])("data-v-188ceda5"),e=e(),Object(r["t"])(),e},i={class:"main-nav"},l=a((function(){return Object(r["g"])("h1",null,"Where in the world?",-1)})),s=a((function(){return Object(r["g"])("button",{class:"toggle"},null,-1)})),b=["checked"],f=a((function(){return Object(r["g"])("label",{class:"toggler",for:"toggleMode"},"Dark Mode",-1)}));function O(e,t,n,c,o,u){var a=Object(r["z"])("router-link");return Object(r["s"])(),Object(r["f"])("header",null,[Object(r["g"])("nav",i,[Object(r["i"])(a,{to:{name:"Home"}},{default:Object(r["G"])((function(){return[l]})),_:1}),s,Object(r["g"])("input",{type:"checkbox",checked:"dark"===n.mode&&"checked",onChange:t[0]||(t[0]=function(t){return e.$emit("toggle")}),id:"toggleMode"},null,40,b),Object(r["g"])("i",{class:Object(r["o"])(["far fa-moon moon-icon",{dark:"dark"===n.mode}])},null,2),f])])}var j={props:["mode"]},g=(n("951e"),n("6b0d")),p=n.n(g);const v=p()(j,[["render",O],["__scopeId","data-v-188ceda5"]]);var d=v,m={components:{MainNav:d},setup:function(){var e=Object(u["l"])("dark"),t=function(){"dark"===e.value?e.value="":e.value="dark"};return{mode:e,toggle:t}}};n("4563");const h=p()(m,[["render",o]]);var y=h,k=n("6c02"),w={key:0},x={key:1},C={key:2,class:"countries-container"};function R(e,t,n,c,o,u){var a=Object(r["z"])("FilterNav"),i=Object(r["z"])("Spinner"),l=Object(r["z"])("CountriesList");return Object(r["s"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(a,{onFilterCountries:c.filterCountries,onFilterRegion:c.filterRegion},null,8,["onFilterCountries","onFilterRegion"]),c.error?(Object(r["s"])(),Object(r["f"])("div",w,Object(r["B"])(c.error),1)):Object(r["e"])("",!0),c.isPending&&!c.error?(Object(r["s"])(),Object(r["f"])("div",x,[Object(r["i"])(i)])):Object(r["e"])("",!0),c.filteredCountries.length?(Object(r["s"])(),Object(r["f"])("div",C,[Object(r["i"])(l,{countries:c.filteredCountries},null,8,["countries"])])):Object(r["e"])("",!0)],64)}var B=n("1da1"),P=n("2909");n("96cf"),n("4de4"),n("b0c0");function S(e,t,n,c,o,u){var a=Object(r["z"])("SingleCountry");return Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(n.countries,(function(e){return Object(r["s"])(),Object(r["d"])(a,{country:e,key:e.name},null,8,["country"])})),128)}n("5377");var _={class:"card-img"},M=["src"],F={class:"card-body"},z=Object(r["g"])("strong",null,"Population:",-1),L=Object(r["g"])("strong",null,"Region:",-1),D={key:0},N=Object(r["g"])("strong",null,"Capital:",-1);function A(e,t,n,c,o,u){var a=Object(r["z"])("router-link");return Object(r["s"])(),Object(r["d"])(a,{to:{name:"CountryDetails",params:{name:n.country.name.common}},class:"card"},{default:Object(r["G"])((function(){return[Object(r["g"])("div",_,[Object(r["g"])("img",{src:n.country.flags.svg,alt:""},null,8,M)]),Object(r["g"])("div",F,[Object(r["g"])("h3",null,Object(r["B"])(n.country.name.official),1),Object(r["g"])("ul",null,[Object(r["g"])("li",null,[z,Object(r["h"])(" "+Object(r["B"])(c.formatPopulation(n.country.population)),1)]),Object(r["g"])("li",null,[L,Object(r["h"])(" "+Object(r["B"])(n.country.region),1)]),n.country.capital?(Object(r["s"])(),Object(r["f"])("li",D,[N,Object(r["h"])(" "+Object(r["B"])(n.country.capital[0]),1)])):Object(r["e"])("",!0)])])]})),_:1},8,["to"])}n("ac1f"),n("5319"),n("d3b7"),n("25f0");var H={props:["country"],setup:function(){var e=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};return{formatPopulation:e}}};n("cd28");const T=p()(H,[["render",A]]);var E=T,G={props:["countries"],components:{SingleCountry:E}};const I=p()(G,[["render",S]]);var J=I,K=(n("841c"),{class:"filter-nav"}),Q=Object(r["g"])("i",{class:"fas fa-search"},null,-1),U={key:0},V={key:1},W=Object(r["g"])("i",{class:"fas fa-chevron-down icon"},null,-1),$={class:"filter-menu"};function q(e,t,n,c,o,u){return Object(r["s"])(),Object(r["f"])("nav",K,[Object(r["g"])("form",{class:"search-form",onSubmit:t[2]||(t[2]=Object(r["I"])((function(){}),["prevent"]))},[Q,Object(r["H"])(Object(r["g"])("input",{type:"text",placeholder:"Search for a country...","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.search=e}),onKeyup:t[1]||(t[1]=function(e){return c.filterCountries("input")})},null,544),[[r["D"],c.search,void 0,{trim:!0}]])],32),Object(r["g"])("div",{onClick:t[8]||(t[8]=function(){return c.toggleFilterRegion&&c.toggleFilterRegion.apply(c,arguments)}),class:"filter-region","aria-label":"select-region"},[c.filteredRegion?(Object(r["s"])(),Object(r["f"])("span",V,Object(r["B"])(c.filteredRegion),1)):(Object(r["s"])(),Object(r["f"])("span",U,"Filter by Region")),W,Object(r["H"])(Object(r["g"])("ul",$,[Object(r["g"])("li",{onClick:t[3]||(t[3]=function(e){return c.filterRegion("africa")})},"Africa"),Object(r["g"])("li",{onClick:t[4]||(t[4]=function(e){return c.filterRegion("americas")})},"America"),Object(r["g"])("li",{onClick:t[5]||(t[5]=function(e){return c.filterRegion("asia")})},"Asia"),Object(r["g"])("li",{onClick:t[6]||(t[6]=function(e){return c.filterRegion("europe")})},"Europe"),Object(r["g"])("li",{onClick:t[7]||(t[7]=function(e){return c.filterRegion("oceania")})},"Oceania")],512),[[r["E"],c.filterMenu]])])])}var X={setup:function(e,t){var n=Object(u["l"])(""),r=Object(u["l"])(null),c=Object(u["l"])(!1),o=function(){c.value=!c.value},a=function(e,r){"input"===e&&t.emit("filter-countries",n.value.toLowerCase())},i=function(e){r.value=e,t.emit("filter-region",r.value)};return{search:n,filteredRegion:r,filterCountries:a,toggleFilterRegion:o,filterMenu:c,filterRegion:i}}};n("34c9");const Y=p()(X,[["render",q]]);var Z=Y,ee={class:"spin"};function te(e,t,n,c,o,u){return Object(r["s"])(),Object(r["f"])("div",ee)}var ne={};n("a6c1");const re=p()(ne,[["render",te]]);var ce=re,oe=function(){var e=Object(r["x"])(null),t=Object(r["x"])([]),n=Object(r["x"])(!1),c=function(){var r=Object(B["a"])(regeneratorRuntime.mark((function r(){var c,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.value=null,n.value=!0,r.prev=2,r.next=5,fetch("https://restcountries.com/v3.1/all");case 5:return c=r.sent,r.next=8,c.json();case 8:o=r.sent,t.value=o,n.value=!1,r.next=18;break;case 13:r.prev=13,r.t0=r["catch"](2),e.value=r.t0.message,console.log(r.t0.message),n.value=!1;case 18:case"end":return r.stop()}}),r,null,[[2,13]])})));return function(){return r.apply(this,arguments)}}();return{error:e,countries:t,loadCountries:c,isPending:n}},ue=oe,ae=function(){var e=Object(B["a"])(regeneratorRuntime.mark((function e(t){var n,c,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(r["x"])(null),c=Object(r["x"])(null),e.prev=2,e.next=5,fetch("https://restcountries.com/v3.1/region/".concat(t));case 5:return o=e.sent,e.next=8,o.json();case 8:u=e.sent,c.value=u,console.log(c.value),e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](2),console.log(e.t0.message),n.value=e.t0.message;case 17:return e.abrupt("return",{error:n,regionCountries:c});case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),ie=ae,le={name:"Home",components:{CountriesList:J,FilterNav:Z,Spinner:ce},setup:function(){var e=ue(),t=e.error,n=e.loadCountries,r=e.countries,c=e.isPending,o=Object(u["l"])([]);n().then((function(){o.value=Object(P["a"])(r.value)}));var a=Object(u["l"])(""),i=Object(u["l"])(""),l=function(e){a.value=e,r.value.length&&(o.value=r.value.filter((function(e){return-1!=e.name.official.toLowerCase().indexOf(a.value.toLowerCase())})))},s=function(){var e=Object(B["a"])(regeneratorRuntime.mark((function e(t){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i.value=t,!r.value.length){e.next=7;break}return e.next=4,ie(i.value);case 4:n=e.sent,c=n.regionCountries,o.value=c.value;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{error:t,isPending:c,filteredCountries:o,filterCountries:l,filterRegion:s}}};n("250b");const se=p()(le,[["render",R]]);var be=se,fe=function(e){return Object(r["v"])("data-v-ff4c019a"),e=e(),Object(r["t"])(),e},Oe=fe((function(){return Object(r["g"])("i",{class:"fas fa-long-arrow-alt-left left-arrow-icon"},null,-1)})),je=Object(r["h"])(" Back "),ge=[Oe,je],pe={key:0,class:"details-grid"},ve={class:"country-photo"},de=["src"],me={class:"col2"},he={class:"country-details"},ye=fe((function(){return Object(r["g"])("strong",null,"Native Name: ",-1)})),ke=fe((function(){return Object(r["g"])("strong",null,"Population: ",-1)})),we=fe((function(){return Object(r["g"])("strong",null,"Region: ",-1)})),xe=fe((function(){return Object(r["g"])("strong",null,"Sub Region: ",-1)})),Ce=fe((function(){return Object(r["g"])("strong",null,"Capital: ",-1)})),Re={key:0},Be=fe((function(){return Object(r["g"])("strong",null,"Top Level Domain:",-1)})),Pe=fe((function(){return Object(r["g"])("strong",null,"Currencies: ",-1)})),Se=fe((function(){return Object(r["g"])("strong",null,"Languages: ",-1)})),_e={key:0},Me=fe((function(){return Object(r["g"])("strong",null,"Border Countries: ",-1)}));function Fe(e,t,n,c,o,u){var a=Object(r["z"])("router-link");return Object(r["s"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",null,[Object(r["g"])("button",{onClick:t[0]||(t[0]=function(){return c.goBack&&c.goBack.apply(c,arguments)}),class:"btn"},ge)]),c.country?(Object(r["s"])(),Object(r["f"])("div",pe,[Object(r["g"])("div",ve,[Object(r["g"])("img",{src:c.country.flag,alt:""},null,8,de)]),Object(r["g"])("div",me,[Object(r["g"])("h2",null,Object(r["B"])(c.country.name),1),Object(r["g"])("div",he,[Object(r["g"])("ul",null,[Object(r["g"])("li",null,[ye,Object(r["h"])(Object(r["B"])(c.country.nativeName),1)]),Object(r["g"])("li",null,[ke,Object(r["h"])(Object(r["B"])(c.formatPopulation(c.country.population)),1)]),Object(r["g"])("li",null,[we,Object(r["h"])(Object(r["B"])(c.country.region),1)]),Object(r["g"])("li",null,[xe,Object(r["h"])(Object(r["B"])(c.country.subregion),1)]),Object(r["g"])("li",null,[Ce,Object(r["h"])(Object(r["B"])(c.country.capital),1)])]),Object(r["g"])("ul",null,[c.country.topLevelDomain.length?(Object(r["s"])(),Object(r["f"])("li",Re,[Be,Object(r["h"])(" "+Object(r["B"])(c.country.topLevelDomain[0]),1)])):Object(r["e"])("",!0),Object(r["g"])("li",null,[Pe,(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(c.currencies,(function(e){return Object(r["s"])(),Object(r["f"])("span",{key:e},Object(r["B"])(e),1)})),128))]),Object(r["g"])("li",null,[Se,(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(c.languages,(function(e){return Object(r["s"])(),Object(r["f"])("span",{key:e},Object(r["B"])(e),1)})),128))])])]),c.bordersArr.length?(Object(r["s"])(),Object(r["f"])("div",_e,[Me,(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(c.bordersArr,(function(e){return Object(r["s"])(),Object(r["d"])(a,{to:{name:"CountryDetails",params:{name:e}},class:"btn",key:e},{default:Object(r["G"])((function(){return[Object(r["h"])(Object(r["B"])(e),1)]})),_:2},1032,["to"])})),128))])):Object(r["e"])("",!0)])])):Object(r["e"])("",!0)],64)}n("159b"),n("d81d");var ze=n("5c40"),Le={props:["name"],components:{Spinner:ce},setup:function(e){var t=Object(u["l"])(null),n=Object(u["l"])(null),r=Object(u["l"])([]),c=Object(u["l"])(!1),o=Object(k["d"])(),a=Object(k["c"])(),i=function(){o.push("/")};console.log(a.params.name);var l=function(){var e=Object(B["a"])(regeneratorRuntime.mark((function e(o){var u,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.value=null,c.value=!0,e.prev=2,e.next=5,fetch("https://restcountries.com/v2/name/".concat(o));case 5:if(u=e.sent,u.ok){e.next=8;break}throw Error("could not get that country data");case 8:return e.next=10,u.json();case 10:a=e.sent,t.value=a[0],i=a[0].borders,i.length&&i.forEach(function(){var e=Object(B["a"])(regeneratorRuntime.mark((function e(t){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.com/v2/alpha/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,r.value.push(c.name);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),c.value=!1,e.next=22;break;case 17:e.prev=17,e.t0=e["catch"](2),n.value=e.t0.message,console.log(n.value),c.value=!1;case 22:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}();l(a.params.name),Object(ze["Q"])((function(){return a.params.name}),function(){var e=Object(B["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:l(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var s=Object(u["c"])((function(){if(t.value)return t.value.languages.map((function(e){return t.value.languages.indexOf(e)===t.value.languages.length-1?e.name:e.name+", "}))})),b=Object(u["c"])((function(){if(t.value)return t.value.currencies.map((function(e){return t.value.currencies.indexOf(e)===t.value.currencies.length-1?e.name:e.name+", "}))})),f=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};return{error:n,country:t,bordersArr:r,languages:s,currencies:b,goBack:i,formatPopulation:f}}};n("f3f8");const De=p()(Le,[["render",Fe],["__scopeId","data-v-ff4c019a"]]);var Ne=De,Ae=[{path:"/",name:"Home",component:be},{path:"/countries/:name",name:"CountryDetails",component:Ne,props:!0}],He=Object(k["a"])({history:Object(k["b"])("/"),routes:Ae}),Te=He;n("845f");Object(r["c"])(y).use(Te).mount("#app")},"6a01":function(e,t,n){},"845f":function(e,t,n){},"8a2f":function(e,t,n){},"90d9":function(e,t,n){},9166:function(e,t,n){},"951e":function(e,t,n){"use strict";n("90d9")},"95cd":function(e,t,n){},a178:function(e,t,n){},a6c1:function(e,t,n){"use strict";n("a178")},cd28:function(e,t,n){"use strict";n("9166")},f3f8:function(e,t,n){"use strict";n("8a2f")}});
//# sourceMappingURL=app.b5805d01.js.map