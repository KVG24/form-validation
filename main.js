(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([n.id,'html {\n    width: 100%;\n    height: 100vh;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.content {\n    width: 100%;\n    height: 100%;\n    background-color: rgb(47, 61, 80);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.form-wrapper {\n    width: 400px;\n    height: 700px;\n    background-color: rgb(164, 179, 192);\n    border-radius: 20px;\n    box-shadow: 0 0 100px 0 black;\n}\n\n.form {\n    height: 95%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    padding: 20px 0 20px 0;\n}\n\n.email,\n.country,\n.zip,\n.password,\n.pass-confirmation {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 5px;\n    width: 90%;\n}\n\n.buttons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    width: 100%;\n}\n\nbutton {\n    width: 100px;\n    height: 30px;\n    border-radius: 5px;\n    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",\n        "Lucida Sans", Arial, sans-serif;\n    font-size: 1rem;\n    font-weight: 900;\n}\n\nbutton:hover {\n    cursor: pointer;\n    background-color: rgb(129, 147, 196);\n}\n\n.error {\n    width: 100%;\n    height: 30px;\n    text-align: center;\n    color: red;\n    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",\n        "Lucida Sans", Arial, sans-serif;\n    font-weight: 900;\n    font-size: 1.2rem;\n}\n\nlabel {\n    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",\n        "Lucida Sans", Arial, sans-serif;\n    font-weight: 900;\n    font-size: 1.5rem;\n    text-align: center;\n}\n\n#pass-hint {\n    font-size: 0.8rem;\n    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",\n        "Lucida Sans", Arial, sans-serif;\n    text-align: center;\n}\n\ninput {\n    height: 30px;\n    font-size: 1.5em;\n    border-radius: 5px;\n}\n\nselect {\n    height: 30px;\n    border-radius: 5px;\n    font-size: 1em;\n}\n\n.valid {\n    background-color: rgb(166, 253, 166);\n    border-color: rgb(0, 255, 0);\n}\n\n.invalid {\n    background-color: rgb(255, 172, 172);\n    border-color: rgb(255, 0, 0);\n}\n',""]);const s=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},o=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=a(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}o.push(u)}return o}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var s=t(i[o]);e[s].references--}for(var c=r(n,a),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),i=t(569),o=t.n(i),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=o().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=document.querySelector(".form"),h=document.getElementById("email"),g=document.getElementById("country"),y=document.getElementById("zip"),x=document.getElementById("password"),b=document.getElementById("pass-confirmation"),w=document.querySelector(".error"),L=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;h.addEventListener("input",(()=>{L.test(h.value)?(h.className="valid",w.textContent=""):h.className="invalid"}));let A="Ukraine";const S={"United States":/^\d{5}(?:-\d{4})?$/,Australia:/^\d{4}$/,Canada:/^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,Japan:/^\d{3}-\d{4}$/,Ukraine:/^\d{5}$/,"United Kingdom":/^(?:[A-Z]{1,2}\d[A-Z\d]?|\d[A-Z]{2}) \d[A-Z]{2}$/};function C(){S[A].test(y.value)?(y.className="valid",w.textContent=""):(y.className="invalid",w.textContent="Invalid zip")}g.addEventListener("change",(()=>{A=g.value,C()})),y.addEventListener("input",(()=>{C()}));const E=/^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*\d))(?=(.*[\W_]))[A-Za-z\d\W_]{5,}$/;x.addEventListener("input",(()=>{E.test(x.value)?(x.className="valid",w.textContent=""):(x.className="invalid",w.textContent="Invalid password")})),b.addEventListener("input",(()=>{x.value===b.value?(b.className="valid",w.textContent=""):(b.className="invalid",w.textContent="Passwords don't match")})),v.addEventListener("submit",(n=>{n.preventDefault(),h.classList.contains("valid")&&y.classList.contains("valid")&&x.classList.contains("valid")&&b.classList.contains("valid")?(w.textContent="Everything is fine 👌, form submitted",w.style.color="green"):(w.textContent="Please fill in all fields",w.style.color="red")}))})()})();