(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(3),c=n.n(s),i=n(4),o=n(5),a=n(2),u="INCREMENT",l="DECREMENT",d="RESET",b="START_STOP",j="DECREMENT_SECONDS",x="INTERVAL_ID",f="INTERVAL_RESET",h={session:1500,userSetSession:1500,break:300,userSetBreak:300,start:!1,intervalId:null,currentSession:"session"};n(21);var O=n(1),p=function(){return Object(O.jsxs)("svg",{fill:"currentColor",height:"32px",version:"1.1",viewBox:"0 0 32 32",width:"32px",children:[Object(O.jsx)("g",{id:"Layer_1"}),Object(O.jsx)("g",{id:"play_x5F_alt",children:Object(O.jsx)("path",{d:"M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M10,24V8l16.008,8L10,24z   "})})]})},m=function(){return Object(O.jsxs)("svg",{height:"32px",viewBox:"0 0 23 23",width:"32px",xmlns:"http://www.w3.org/2000/svg",children:[Object(O.jsx)("circle",{cx:"12",cy:"12",fill:"none",r:"10",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),Object(O.jsx)("rect",{fill:"none",height:"6",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",width:"6",x:"9",y:"9"})]})},v=function(){return Object(O.jsx)("svg",{x:"0px",y:"0px",height:"22px",width:"8px",viewBox:"0 0 459.313 459.314",stroke:"currentColor",fill:"currentColor",children:Object(O.jsx)("g",{children:Object(O.jsx)("path",{d:"M459.313,229.648c0,22.201-17.992,40.199-40.205,40.199H40.181c-11.094,0-21.14-4.498-28.416-11.774 C4.495,250.808,0,240.76,0,229.66c-0.006-22.204,17.992-40.199,40.202-40.193h378.936 C441.333,189.472,459.308,207.456,459.313,229.648z"})})})},k=function(){return Object(O.jsx)("svg",{x:"0px",y:"0px",viewBox:"0 0 60.364 60.364",height:"22px",width:"8px",stroke:"currentColor",fill:"currentColor",children:Object(O.jsx)("g",{children:Object(O.jsx)("path",{d:"M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269 L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91 c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z"})})})};function y(e){var t=e.name,n=e.seconds,r=e.handleIncrement,s=e.handleDecrement;return Object(O.jsxs)("div",{className:"flex flex-col items-center mb-4 lg:my-4",children:[Object(O.jsx)("div",{children:t}),Object(O.jsxs)("div",{className:"px-4 flex items-center justify-center",children:[Object(O.jsx)("button",{disabled:n<=60,className:"bg-primary px-4 py-2 rounded-full focus:outline-none active:bg-pink-200",onClick:s,children:Object(O.jsx)(v,{})}),Object(O.jsx)("input",{className:"w-10 text-black m-2 rounded px-2 outline-none",value:Math.floor(n/60),type:"text",readOnly:!0}),Object(O.jsx)("button",{className:"bg-primary px-4 py-2 rounded-full focus:outline-none active:bg-pink-200",onClick:r,children:Object(O.jsx)(k,{})})]})]})}function g(e){var t=e.state,n=Math.floor(t.session/60),r=Math.ceil(t.session%60);return"break"===t.currentSession&&(n=Math.floor(t.break/60),r=Math.ceil(t.break%60)),Object(O.jsxs)("div",{className:"text-6xl rounded-full border-2 border-solid px-8 py-6",children:[n<10?"0".concat(n):n," :"," ",r<10?"0".concat(r):r]})}var S=n.p+"static/media/beep.250aa10d.mp3";var C=Object(o.b)((function(e){return{state:e}}),(function(e){return{increment:function(t){return e(function(e){return{type:u,timerType:e}}(t))},decrement:function(t){return e(function(e){return{type:l,timerType:e}}(t))},start:function(t){return e(function(e){return{type:b,start:e}}(t))},decrement_seconds:function(t){return e(function(e){return{type:j,timerType:e}}(t))},interval_id:function(t){return e(function(e){return{type:x,id:e}}(t))},reset:function(){return e({type:d})},interval_reset:function(t){return e(function(e){return{type:f,timerType:e}}(t))}}}))((function(e){var t=e.state,n=e.increment,s=e.decrement,c=e.start,i=e.decrement_seconds,o=e.interval_id,a=e.reset,u=e.interval_reset;Object(r.useEffect)((function(){j()}));var l=function(e){n(e)},d=function(e){s(e)},b=function(e){var t=setInterval((function(){i(e)}),1e3);o(t)},j=function(){var e=new Audio(S);0!==t.session&&0!==t.break||(clearInterval(t.intervalId),0===t.session&&(u("session"),b("break")),0===t.break&&(u("break"),b("session")),e.play())};return Object(O.jsx)("div",{className:"font-sans text-white",children:Object(O.jsxs)("div",{className:"flex justify-center flex-col items-center min-h-screen",style:{background:"linear-gradient(#325d70, #e66465)"},children:[Object(O.jsx)("h1",{className:"text-4xl font-bold",children:"POMODORO"}),Object(O.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[Object(O.jsx)(y,{name:"Session Length",handleDecrement:function(){return d("session")},handleIncrement:function(){return l("session")},seconds:t.userSetSession}),Object(O.jsx)(y,{name:"Break Length",handleDecrement:function(){return d("break")},handleIncrement:function(){return l("break")},seconds:t.userSetBreak})]}),Object(O.jsx)(g,{state:t}),Object(O.jsxs)("div",{className:"my-8 flex items-center",children:[Object(O.jsx)("button",{onClick:function(){return t.start?clearInterval(t.intervalId):"session"===t.currentSession?b("session"):b("break"),void c(!t.start)},className:"focus:outline-none mr-8",children:t.start?Object(O.jsx)(m,{}):Object(O.jsx)(p,{})}),Object(O.jsx)("button",{onClick:function(){return clearInterval(t.intervalId),void a()},className:"focus:outline-none px-4 py-1 border rounded",children:"Reset"})]})]})})})),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),c(e),i(e)}))},N=Object(i.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case u:return"session"===t.timerType?Object(a.a)(Object(a.a)({},e),{},{session:e.session+60,userSetSession:e.userSetSession+60}):Object(a.a)(Object(a.a)({},e),{},{break:e.break+60,userSetBreak:e.userSetBreak+60});case l:return"session"===t.timerType?Object(a.a)(Object(a.a)({},e),{},{session:e.session-60,userSetSession:e.session-60}):Object(a.a)(Object(a.a)({},e),{},{break:e.break-60,userSetBreak:e.break-60});case b:return Object(a.a)(Object(a.a)({},e),{},{start:t.start});case j:return"session"===t.timerType?Object(a.a)(Object(a.a)({},e),{},{session:e.session-1}):Object(a.a)(Object(a.a)({},e),{},{break:e.break-1});case x:return Object(a.a)(Object(a.a)({},e),{},{intervalId:t.id});case d:return Object(a.a)({},h);case f:return"session"===t.timerType?Object(a.a)(Object(a.a)({},e),{},{session:e.userSetSession,currentSession:"break"}):Object(a.a)(Object(a.a)({},e),{},{break:e.userSetBreak,currentSession:"session"});default:return e}}));c.a.render(Object(O.jsx)(o.a,{store:N,children:Object(O.jsx)(C,{})}),document.getElementById("root")),w()}},[[23,1,2]]]);
//# sourceMappingURL=main.c372e8e3.chunk.js.map