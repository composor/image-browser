!function(){"use strict";function e(e,t){for(var n=[],o=[],r=arguments.length,i=Array(r>2?r-2:0),s=2;s<r;s++)i[s-2]=arguments[s];for(var u=i.length;u-- >0;)n.push(i[u]);for(;n.length;){var a=n.pop();if(a&&a.pop)for(u=a.length;u--;)n.push(a[u]);else null!=a&&!0!==a&&!1!==a&&o.push(a)}return"function"==typeof e?e(t||{},i):{type:e,props:t||{},children:o}}var t=function(e){return e&&e.props&&e.props.key};function n(e,t){var n={};for(var o in e)n[o]=e[o];for(var r in t)n[r]=t[r];return n}function o(e,t,o,r,i){if("key"===t);else if("style"===t&&"string"!=typeof o)for(var s in n(r,o))e[t][s]=null==o||null==o[s]?"":o[s];else"dangerouslySetInnerHTML"===t&&(e.innerHTML=o),"function"==typeof o||t in e&&"list"!==t&&!i?e[t]=null==o?"":o:null!=o&&!1!==o&&("xlink-href"===t?(e.setAttributeNS("http://www.w3.org/1999/xlink","href",o),e.setAttribute("href",o)):e.setAttribute(t,o)),null!=o&&!1!==o||e.removeAttribute(t)}var r=function(e,t){return e.removeChild(t)};function i(e,s,u,a,l,c){if(a===u);else if(null==u||u.type!==a.type){var p=function e(t,n){var r="string"==typeof t||"number"==typeof t?document.createTextNode(t):(n=n||"svg"===t.type)?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),i=t.props;if(i){for(var s=0;s<t.children.length;s++)r.appendChild(e(t.children[s],n));for(var u in i)o(r,u,i[u],null,n)}return r}(a,c);e&&(e.insertBefore(p,s),null!=u&&r(e,s,u)),s=p}else if(null==u.type)s.nodeValue=a;else{!function(e,t,r,i){for(var s in n(t,r))r[s]!==("value"===s||"checked"===s?e[s]:t[s])&&o(e,s,r[s],t[s],i)}(s,u.props,a.props,c=c||"svg"===a.type);for(var h={},d={},f=[],y=u.children,m=a.children,v=0;v<y.length;v++){f[v]=s.childNodes[v];var g=t(y[v]);null!=g&&(h[g]=[f[v],y[v]])}for(var b=0,w=0;w<m.length;){var k=t(y[b]),S=t(m[w]=m[w]);if(d[k])b++;else if(null==S||l)null==k&&(i(s,f[b],y[b],m[w],l,c),w++),b++;else{var M=h[S]||[];k===S?(i(s,M[0],M[1],m[w],l,c),b++):M[0]?i(s,s.insertBefore(M[0],f[b]),M[1],m[w],l,c):i(s,f[b],null,m[w],l,c),d[S]=m[w],w++}}for(;b<y.length;)null==t(y[b])&&r(s,f[b],y[b]),b++;for(var C in h)d[C]||r(s,h[C][0],h[C][1])}return s}function s(e,t){return(t=i(t&&t.parentNode,t,t&&null==t.node?function e(t){if(t&&t.nodeName)return{type:t.nodeName.toLowerCase(),props:{},children:Array.prototype.map.call(t.children,function(t){return 3===t.nodeType?t.nodeValue:e(t)})}}(t):t&&t.node,e,t&&null==t.node)).node=e,t}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=(function(){function e(e){this.value=e}function t(t){var n,o;function r(n,o){try{var s=t[n](o),u=s.value;u instanceof e?Promise.resolve(u.value).then(function(e){r("next",e)},function(e){r("throw",e)}):i(s.done?"return":"normal",s.value)}catch(e){i("throw",e)}}function i(e,t){switch(e){case"return":n.resolve({value:t,done:!0});break;case"throw":n.reject(t);break;default:n.resolve({value:t,done:!1})}(n=n.next)?r(n.key,n.arg):o=null}this._invoke=function(e,t){return new Promise(function(i,s){var u={key:e,arg:t,resolve:i,reject:s,next:null};o?o=o.next=u:(n=o=u,r(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},p=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return setTimeout(e,16)},h=(new Date).getTime(),d=function(){function e(t){a(this,e),t||(t={}),this.selector=t.container||"body",t.render&&(this.render=t.render),t.state&&(this.state=t.state),this.oldNode=null,this.selector&&(this.container=document.querySelector(this.selector)),this.componentShouldUpdate=!0,this.mounted=!1,this.element,t.componentWillMount&&(this.componentWillMount=t.componentWillMount),t.componentDidMount&&(this.componentDidMount=t.componentDidMount),t.componentWillUpdate&&(this.componentWillUpdate=t.componentWillUpdate),t.componentDidUpdate&&(this.componentDidUpdate=t.componentDidUpdate),t.componentWillUnmount&&(this.componentWillUnmount=t.componentWillUnmount)}return l(e,[{key:"setState",value:function(e,t){if("function"==typeof e){var o=e.call(this,this.state);"function"!=typeof o&&o&&this.setState(o)}else if(Array.isArray(this.state)){var r=this.state;t||0===t?"object"===u(r[t])?this.state=n(r[t],e):(r[t]=e,this.state=r):this.state=r}else if("object"===u(this.state)){var i=this.state;this.state=n(i,e)}else this.state=e}},{key:"update",value:function(e){if(this.render&&(this.componentShouldUpdate||!this.mounted)){var t=this.state;!0!==e&&e&&(t=e),this.container&&"string"==typeof this.container&&(this.selector=this.container,this.container=document.querySelector(this.container));var n=this.oldNode,o=this.render,r=this.render(t),i=void 0;if(r&&r.props&&r.props.id&&this.container&&(i=this.container&&this.container.querySelector("#"+r.props.id)),i&&!this.mounted&&i.parentNode.removeChild(i),this.oldNode=this.render(t),this.element=s(this.oldNode,this.element),!this.mounted)return this.componentWillMount&&this.componentWillMount(this),this.container.appendChild(this.element),this.mounted=!0,void(this.componentDidMount&&this.componentDidMount(this));this.mounted&&this.oldNode&&u(n,t)&&this.componentWillUpdate&&this.componentWillUpdate(this),this.componentDidUpdate&&u(n,t)&&this.componentDidUpdate(this)}function u(e,t){return!this||JSON.stringify(e)!==JSON.stringify(o(t))}}},{key:"unmount",value:function(){var e=this;if(this.element){for(var t in this.componentWillUnmount&&this.componentWillUnmount(this),["change","click","dblclick","input","keydown","keypress","keyup","mousedown","mouseleave","mouseout","mouseover","mouseup","select","submit","touchcancel","touchend","touchmove","touchstart"].map(function(t){e.element.removeEventListener(t,e)}),this.container.removeChild(this.element),this.container=void 0,this)delete this[t];delete this.state,this.update=void 0,this.unmount=void 0}}},{key:"state",get:function(){return this[h]},set:function(e){var t=this;this[h]=e,p(function(){return t.update()})}}]),e}(),f=new d({container:"header",render:function(t){return e("nav",null,e("h1",null,"Composi Image Browser"))}}),y=function(t){function n(){return a(this,n),c(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,d),l(n,[{key:"render",value:function(t){var n=this;return e("div",{id:"app"},e("ul",{class:"list"},t.map(function(t){return e("li",{key:t.id},e("h2",null,t.name),e("div",{onclick:function(e){return n.showImage(e)},"data-url":t.url,class:"image-container",style:{backgroundImage:"url("+t.url+")"}}),e("div",{class:"description"},t.description))})),e("p",{class:"add-more"},e("button",{onclick:function(){return n.add10More()}},"Show 10 More")))}},{key:"add10More",value:function(){var e=m(10),t=this.state.concat(e);console.log(t),this.state=t}},{key:"showImage",value:function(e){var t=this;this.popup.style.display="flex",this.popupImage.style.backgroundImage="url("+e.target.dataset.url+")",setTimeout(function(){t.popupImage.classList.add("opened")},200)}},{key:"closePopup",value:function(e){var t=this;this.popupImage.classList.remove("opened"),setTimeout(function(){t.popup.style.display="none"},500)}},{key:"handleEvent",value:function(){this.closePopup()}},{key:"componentDidMount",value:function(){!function(e,t){if((t="string"==typeof t&&document.querySelector(t))||(t=document.body),Array.isArray(e))throw new function(){this.message="Cannot insert Fragment directly into DOM.",this.toString=function(){return this.message}};var n=s(e);t.appendChild(n)}(e(function(){return e("div",{id:"mask"},e("div",{id:"popup-image"}))},null),"body"),this.popup=document.querySelector("#mask"),this.popup.addEventListener("click",this),this.popupImage=document.querySelector("#popup-image")}}]),n}();function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;function t(e){return Math.round(1e3*Math.random())%e}function n(){return Math.floor(1e7*Math.random()+1e4*Math.random())}for(var o=["Misty","Scrappy","Sandy","Mr Tabor","Ransel","Tabby","Meow Meow","Kit Cat","Mouser","Hyacinth","Sleepy","Rowdy","Pouncer","Petunia","Racer","Tiger","Toby","Midnight","Princess","Shadow","Jasper","Sneakers","Charley","Max","Rocky","CoCo","Purrfect","Oscar","Poof","Pepper","Archie","Mittens","Tux","Patches","Augusta","Calico","Lucky","Garfield","Simon","Babsy","Felix","Sassy","Silvester","Precious","Aster","Snickers","Wiskers","Jester","Buttler","Socks","Fluffy","Chester","Rusty","Dusty","Felix","Catkin","Cuddles","Buster","Boots","Flox","Magic","Willow","Butters","Juniper","Lacy","Higgins","Cosmo","Dexter","Cuddles","Bobtail","Gypsy","Fuzzy","Dufus","Buster","Leela","Manx","Jax","Grumpy","Ferris","Chance","Snoopy","Pixie","Bushy","Penny","Snowball","Muffin","Buffy","Hobbit","Chase","Emmett","Ribbon","Scamper","Wiggles","Flash","Doby","Posey","Merlin","Sparky","Lucy","Sleepy","Wally","Furball","Marmalade","Bert","Piper","Pookie","Puff","Cyrus","Hyde"],r=["Big","Small","Tiny","Cute","Skinny","Fat","Chubby","Scrawny","Scrappy","Mangy","Quiet","Angry","Excited","Jumpy","Peaceful","Anxious","Annoyed","Sleepy","Tired","Hungry","Worried","Young","Old","Sick","Clean","Dirty","Shabby","Dusty","Smelly","Dingy","Matted","Anxious","Calm","Scared","Frightened","Brave","Courageous","Timid","Lonely","Snugly","Aloof","Concerned","Smart"],i=["white","black","spotted","tabby","brown","striped","beige","gray","calico","tan","orange","yellow","tawny","gold","bronze","reddish","copper","silver","platinum","rusty","crimson","amber","goldenrod","apricot","brass","brandy","buff","sienna","sandy","coffee","chocolate","taupe","chestnut","hickory","marigold","moss","mustard","ochre","peach","pumpkin","rum","russet","tangerine","sunset"],s=[],u=0;u<e;u++)s.push({id:n(),name:""+o[t(o.length)],description:r[t(r.length)]+" "+i[t(i.length)]+" cat.",url:"https://loremflickr.com/320/240/cat?lock="+n()});return s}f.update();new y({container:"section",state:m(10)})}();
//# sourceMappingURL=app.js.map
