parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sK":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=function o(){var r=this;t(this,o),e(this,"showAlert",function(t){r.alert.innerText="Copied ".concat(t," to clipboard! :)"),r.alert.classList.add("showAlert")}),e(this,"clearAlert",function(){r.alert.classList.remove("showAlert")}),e(this,"addColors",function(t){var e="",o="";t.forEach(function(t,r){e+='\n            <div class="colorWrapper">\n                <div class="color" style="background: '.concat(t,';" data-clipboard-text="').concat(t,'"></div>\n                <p class="number">').concat(r+1,"</p>\n            </div>\n            "),o+='<p class="colorListText">'.concat(r+1,") ").concat(t,"</p>")}),r.outEl.innerHTML=e,r.outList.innerHTML=o}),this.outEl=document.querySelector(".card"),this.outList=document.querySelector(".colorList"),this.alert=document.querySelector(".alert")},r=new o,n=r;exports.default=n;
},{}],"QdeU":[function(require,module,exports) {
"use strict";var e=t(require("./UI"));function t(e){return e&&e.__esModule?e:{default:e}}var a,r=document.querySelector("#color1"),l=document.querySelector("#clr-1"),u=document.querySelector("#color2"),c=document.querySelector("#clr-2"),n=document.querySelector("#num"),o=new ClipboardJS(".color");o.on("success",function(t){clearTimeout(a),e.default.showAlert(t.text),a=setTimeout(function(){e.default.clearAlert()},2e3)});var f=["#4400ff","#400fff","#3c1dff","#382bff","#3339ff","#2f47ff","#2b55ff","#2763ff","#2271ff","#1e7fff","#1a8dff","#169bff","#11a9ff","#0db7ff","#09c5ff","#05d3ff","#00e1ff"];e.default.addColors(f),l.addEventListener("change",function(t){r.value=t.target.value,document.querySelector("#clrw1").style.background=t.target.value,e.default.addColors(s(parseInt(n.value)))}),c.addEventListener("change",function(t){u.value=t.target.value,document.querySelector("#clrw2").style.background=t.target.value,e.default.addColors(s(parseInt(n.value)))}),r.addEventListener("keyup",function(t){l.value=t.target.value,document.querySelector("#clrw1").style.background=t.target.value,e.default.addColors(s(parseInt(n.value)))}),u.addEventListener("keyup",function(t){c.value=t.target.value,document.querySelector("#clrw2").style.background=t.target.value,e.default.addColors(s(parseInt(n.value)))}),n.addEventListener("keyup",function(t){e.default.addColors(s(parseInt(t.target.value)))}),n.addEventListener("change",function(t){e.default.addColors(s(parseInt(t.target.value)))});var d=function(e){return 1==e.length?"0".concat(e):e},s=function(e){for(var t,a,r,u=parseInt(l.value.slice(1,3),16),n=parseInt(l.value.slice(3,5),16),o=parseInt(l.value.slice(5,7),16),f=parseInt(c.value.slice(1,3),16),s=parseInt(c.value.slice(3,5),16),i=parseInt(c.value.slice(5,7),16),v=Math.abs((f-u)/(e+1)),g=Math.abs((s-n)/(e+1)),p=Math.abs((i-o)/(e+1)),y=["#".concat(l.value.slice(1,3)).concat(l.value.slice(3,5)).concat(l.value.slice(5,7))],h=1;h<=e+1;h++){u<f?(u+=v,(t=Math.ceil(u))>255&&(t=255)):(u-=v,(t=Math.ceil(u))>255&&(t=255)),n<s?(n+=g,(a=Math.ceil(n))>255&&(a=255)):(n-=g,(a=Math.ceil(n))>255&&(a=255)),o<i?(o+=p,(r=Math.ceil(o))>255&&(r=255)):(o-=p,(r=Math.ceil(o))>255&&(r=255));var I="#".concat(d(t.toString(16))).concat(d(a.toString(16))).concat(d(r.toString(16)));y.push(I)}return y};
},{"./UI":"d6sK"}]},{},["QdeU"], null)
//# sourceMappingURL=/app.f3a286db.js.map