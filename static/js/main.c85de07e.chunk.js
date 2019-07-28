(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),u=n.n(a),i=(n(96),n(21)),l=n(14),c=n(4),s=n.n(c),f=n(77),d=n(78),m=[1,2,3,4,5,6,7,8,9],h=function(){function e(t){Object(f.a)(this,e),this.grid=void 0,this.grid=t||this.defaultGrid()}return Object(d.a)(e,[{key:"reset",value:function(){this.grid=this.defaultGrid()}},{key:"defaultGrid",value:function(){return Object(i.a)(Array(9)).map(function(e){return Object(i.a)(Array(9).fill(0))})}},{key:"get",value:function(e,t){return this.grid[t][e]}},{key:"set",value:function(e,t,n){if(n){if(!this.allowedNumbersInRow(t).includes(n))throw new Error("".concat(n," is not allowed in the row ").concat(t));if(!this.allowedNumbersInColumn(e).includes(n))throw new Error("".concat(n," is not allowed in the column ").concat(e));if(!this.allowedNumbersInBlock(e,t).includes(n))throw new Error("".concat(n," is not allowed in the block ").concat(t))}return this.grid[t][e]=n}},{key:"row",value:function(e){return this.grid[e]}},{key:"column",value:function(e){return this.grid.map(function(t){return t[e]})}},{key:"allowedNumbersInRow",value:function(e){var t=this.row(e);return m.filter(function(e){return!t.includes(e)})}},{key:"allowedNumbersInColumn",value:function(e){var t=this.column(e);return m.filter(function(e){return!t.includes(e)})}},{key:"allowedNumbersInBlock",value:function(e,t){for(var n=3*Math.floor(e/3),r=3*Math.floor(t/3),o=[],a=0;a<3;a++)for(var u=0;u<3;u++)o.push(this.get(n+a,r+u));return m.filter(function(e){return!o.includes(e)})}},{key:"allowedNumbers",value:function(e,t){var n=this.allowedNumbersInBlock(e,t);if(n.length>1){var r=this.allowedNumbersInRow(t),o=this.allowedNumbersInColumn(e);return n.filter(function(e){return r.includes(e)&&o.includes(e)})}return n}},{key:"emptyCells",value:function(){var e=[];return this.grid.forEach(function(t,n){t.forEach(function(t,r){!t&&e.push([r,n])})}),e}},{key:"anyEmptyCell",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n=[];return this.emptyCells().some(function(r){var o=Object(l.a)(r,2),a=o[0],u=o[1],i=e.allowedNumbers(a,u).length;return i<t&&(n=r,t=i),1===i}),n}},{key:"isSolved",value:function(){return this.grid.every(function(e,t){return e.every(function(e,t){return e})})}},{key:"solve",value:function(){return this.solveUltimately()}},{key:"solveUltimately",value:function(){if(this.isSolved())return!0;for(var e=this.anyEmptyCell(),t=Object(l.a)(e,2),n=t[0],r=t[1],o=this.allowedNumbers(n,r);o.length>0;){var a=o.shift();this.set(n,r,a);try{if(this.solveUltimately())return!0}catch(u){}this.set(n,r,0)}return!1}}]),e}(),v=(n(97),n(98),n(150)),b=n(149),w=n(151),k=n(34),y=new h([[4,0,0,0,0,0,8,0,5],[0,3,0,0,0,0,0,0,0],[0,0,0,7,0,0,0,0,0],[0,2,0,0,0,0,0,6,0],[0,0,0,0,8,0,4,0,0],[0,0,0,0,1,0,0,0,0],[0,0,0,6,0,3,0,7,0],[5,0,0,2,0,0,0,0,0],[1,0,4,0,0,0,0,0,0]]);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(function(){var e=Object(r.useRef)({}),t=Object(r.useState)(y.grid),n=Object(l.a)(t,2),a=n[0],u=n[1],c=Object(r.useState)([]),f=Object(l.a)(c,2),d=f[0],m=f[1],h=Object(r.useState)(!1),g=Object(l.a)(h,2),p=g[0],E=g[1],j=Object(r.useState)(!1),O=Object(l.a)(j,2),N=O[0],C=O[1],S=Object(r.useState)(),I=Object(l.a)(S,2),B=I[0],A=I[1];Object(r.useEffect)(function(){p&&setTimeout(G,300)},[p]),Object(r.useEffect)(function(){if(B&&e.current){var t=e.current[B];t&&t.focus()}},[B]),Object(r.useEffect)(function(){var e=function(e){e.target.closest(".sudoku-tips")||A(null)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}},[]);var G=function(){m(y.emptyCells()),console.time("Sudoku runs");var e=y.solve();console.timeEnd("Sudoku runs"),E(!1),e?u(Object(i.a)(y.grid)):b.a.error({title:"Sudoku",content:"Sorry, this sudoku has no solution!"})};return o.a.createElement("div",{className:"App"},o.a.createElement(w.a,null,o.a.createElement(w.a.Content,null,o.a.createElement("div",{className:"sudoku-container"},o.a.createElement("table",{className:"sudoku-table"},o.a.createElement("tbody",null,a.map(function(t,n){return o.a.createElement("tr",{key:n,className:s()({"block-boder":(n+1)%3===0})},t.map(function(t,r){return o.a.createElement("td",{key:r,className:s()({"block-boder":(r+1)%3===0,solved:d.some(function(e){return e.join()===[r,n].join()})}),onClick:function(){return A([r,n].join())}},N&&!t&&B!==[r,n].join()?o.a.createElement("div",{className:"sudoku-tips"},[1,2,3,4,5,6,7,8,9].map(function(e){return o.a.createElement("span",{key:e},y.allowedNumbers(r,n).includes(e)&&e)})):o.a.createElement("input",{type:"text",value:t||"",onChange:function(e){return function(e,t,n){var r=parseInt(n);if(n.length&&r>9)return v.a.info("Only 1-9 numbers are allowed to input here!"),!1;try{y.set(e,t,r||0)}catch(o){return v.a.warning("Conflict! You cannot set ".concat(r," here!")),!1}u(Object(i.a)(y.grid))}(r,n,e.target.value)},readOnly:p,ref:function(t){return e.current[[r,n].join()]=t}}))}))}))),o.a.createElement("div",{className:"sudoku-actions"},o.a.createElement(k.a.Group,null,o.a.createElement(k.a,{type:"primary",size:"large",onClick:function(){return E(!0)},loading:p},p?"Solving":"Solve Now!"),o.a.createElement(k.a,{size:"large",onClick:function(){return C(!N)}},N?"Hide Tips":"Show Tips"),o.a.createElement(k.a,{size:"large",onClick:function(){y.reset(),m([]),u(Object(i.a)(y.grid)),C(!1)},disabled:p},"Clear All")))))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},91:function(e,t,n){e.exports=n(147)},96:function(e,t,n){},97:function(e,t,n){}},[[91,1,2]]]);
//# sourceMappingURL=main.c85de07e.chunk.js.map