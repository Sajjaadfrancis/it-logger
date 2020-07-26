(this["webpackJsonpit-logger"]=this["webpackJsonpit-logger"]||[]).push([[0],{21:function(e,t,a){e.exports=a(36)},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),l=a.n(r),s=a(2),o=a(3),u=a.n(o),i=a(6),m=function(){return{type:"SET_LOADING"}},d=Object(s.b)(null,{searchLogs:function(e){return function(){var t=Object(i.a)(u.a.mark((function t(a){var n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(),t.next=4,fetch("/logs?q=".concat(e));case 4:return n=t.sent,t.next=7,n.json();case 7:c=t.sent,a({type:"SEARCH_LOGS",payload:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"LOGS_ERROR",payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.searchLogs,a=Object(n.useRef)("");return c.a.createElement("nav",{style:{marginBottom:"30px"},className:"blue"},c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement("form",null,c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{id:"search",type:"search",placeholder:"Search Logs...",ref:a,onChange:function(e){t(a.current.value)}}),c.a.createElement("label",{className:"label-icon",htmlFor:"search"},c.a.createElement("i",{className:"material-icons"},"search")),c.a.createElement("i",{className:"material-icons"},"close")))))})),p=a(18),E=a.n(p),f=a(4),h=a.n(f),b=Object(s.b)(null,{deleteLog:function(e){return function(){var t=Object(i.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(),t.next=4,fetch("/logs/".concat(e),{method:"DELETE"});case 4:a({type:"DELETE_LOG",payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"LOGS_ERROR",payload:t.t0.response.statusText});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},setCurrent:function(e){return{type:"SET_CURRENT",payload:e}}})((function(e){var t=e.log,a=e.deleteLog,n=e.setCurrent;return c.a.createElement("li",{className:"collection-item"},c.a.createElement("div",null,c.a.createElement("a",{href:"#edit-log-modal",className:"modal-trigger ".concat(t.attention?"red-text":"blue-text"),onClick:function(){return n(t)}},t.message),c.a.createElement("br",null),c.a.createElement("span",{className:"grey-text"},c.a.createElement("span",{className:"black-text"},"ID #",t.id)," last updated by"," ",c.a.createElement("span",{className:"black-text"},t.tech)," on"," ",c.a.createElement(E.a,{format:"MMMM Do YYYY, h:mm:ss a"},t.date)),c.a.createElement("a",{href:"#!",onClick:function(){a(t.id),h.a.toast({html:"Log Deleted"})},className:"secondary-content"},c.a.createElement("i",{className:"material-icons grey-text"},"delete"))))})),g=function(){return c.a.createElement("div",{className:"progress blue-lighten-4"},c.a.createElement("div",{className:"indeterminate blue"}))},v=Object(s.b)((function(e){return{log:e.log}}),{getLogs:function(){return function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(),e.next=4,fetch("/logs");case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,t({type:"GET_LOGS",payload:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:"LOGS_ERROR",payload:e.t0.response.statusText});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.log,a=t.logs,r=t.loading,l=e.getLogs;return Object(n.useEffect)((function(){l()}),[]),r||null===a?c.a.createElement(g,null):c.a.createElement("div",null,c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",{className:"center"},"System Logs")),r||0!==a.length?a.map((function(e){return c.a.createElement(b,{log:e,key:e.id})})):c.a.createElement("p",{className:"center"},"No logs to show...")))})),O=function(){return c.a.createElement("div",{className:"fixed-action-btn"},c.a.createElement("a",{href:"#add-log-modal",className:"btn-floating btn-large blue darken-2 modal-trigger"},c.a.createElement("i",{className:"large material-icons"},"add")),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"#tech-list-modal",className:"btn-floating green modal-trigger"},c.a.createElement("i",{className:"material-icons"},"person"))),c.a.createElement("li",null,c.a.createElement("a",{href:"#add-tech-modal",className:"btn-floating red modal-trigger"},c.a.createElement("i",{className:"material-icons"},"person_add")))))},y=a(5),N=function(){return function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(),e.next=4,fetch("/techs");case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,t({type:"GET_TECHS",payload:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:"TECHS_ERROR",payload:e.t0.response.statusText});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},j=function(){return{type:"SET_LOADING"}},T=Object(s.b)((function(e){return{tech:e.tech}}),{getTechs:N})((function(e){var t=e.getTechs,a=e.tech,r=a.techs,l=a.loading;return Object(n.useEffect)((function(){t()}),[]),!l&&null!==r&&r.map((function(e){return c.a.createElement("option",{key:e.id,value:"".concat(e.firstName," ").concat(e.lastName)},e.firstName," ",e.lastName)}))})),x={width:"75%",height:"75%"},L=Object(s.b)(null,{addLog:function(e){return function(){var t=Object(i.a)(u.a.mark((function t(a){var n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(),t.next=4,fetch("/logs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:c=t.sent,a({type:"ADD_LOG",payload:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"LOGS_ERROR",payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addLog,a=Object(n.useState)(""),r=Object(y.a)(a,2),l=r[0],s=r[1],o=Object(n.useState)(!1),u=Object(y.a)(o,2),i=u[0],m=u[1],d=Object(n.useState)(""),p=Object(y.a)(d,2),E=p[0],f=p[1];return c.a.createElement("div",{id:"add-log-modal",className:"modal",style:x},c.a.createElement("div",{className:"modal-content"},c.a.createElement("h4",null,"Enter System Log"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",name:"message",value:l,onChange:function(e){return s(e.target.value)}}),c.a.createElement("label",{htmlFor:"message",className:"active"},"Log Message"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field"},c.a.createElement("select",{name:"tech",value:E,className:"browser-default",onChange:function(e){return f(e.target.value)}},c.a.createElement("option",{value:"",disabled:!0},"Select Technician"),c.a.createElement(T,null)))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field"},c.a.createElement("p",null,c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",className:"filled-in",checked:i,value:i,onChange:function(e){return m(!i)}}),c.a.createElement("span",null,"Needs Attention")))))),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("a",{href:"#!",onClick:function(){if(""===l||""===E)h.a.toast({html:"Please enter a message and tech"});else{var e={message:l,attention:i,tech:E,date:new Date};t(e),h.a.toast({html:"Log added by ".concat(E)}),s(""),f(""),m(!1)}},className:"modal-close waves-effect blue waves-light btn"},"Enter")))})),w={width:"75%",height:"75%"},S=Object(s.b)((function(e){return{current:e.log.current}}),{updateLog:function(e){return function(){var t=Object(i.a)(u.a.mark((function t(a){var n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(),t.next=4,fetch("/logs/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:c=t.sent,a({type:"UPDATE_LOG",payload:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"LOGS_ERROR",payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.current,a=e.updateLog,r=Object(n.useState)(""),l=Object(y.a)(r,2),s=l[0],o=l[1],u=Object(n.useState)(!1),i=Object(y.a)(u,2),m=i[0],d=i[1],p=Object(n.useState)(""),E=Object(y.a)(p,2),f=E[0],b=E[1];Object(n.useEffect)((function(){t&&(o(t.message),d(t.attention),b(t.tech))}),[t]);return c.a.createElement("div",{id:"edit-log-modal",className:"modal",style:w},c.a.createElement("div",{className:"modal-content"},c.a.createElement("h4",null,"Enter System Log"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",name:"message",value:s,onChange:function(e){return o(e.target.value)}}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field"},c.a.createElement("select",{name:"tech",value:f,className:"browser-default",onChange:function(e){return b(e.target.value)}},c.a.createElement("option",{value:"",disabled:!0},"Select Technician"),c.a.createElement(T,null)))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field"},c.a.createElement("p",null,c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",className:"filled-in",checked:m,value:m,onChange:function(e){return d(!m)}}),c.a.createElement("span",null,"Needs Attention")))))),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("a",{href:"#!",onClick:function(){if(""===s||""===f)h.a.toast({html:"Please enter a message and tech"});else{var e={id:t.id,message:s,attention:m,tech:f,date:new Date};a(e),h.a.toast({html:"Log updated by ".concat(f)}),o(""),b(""),d(!1)}},className:"modal-close waves-effect blue waves-light btn"},"Enter")))})),R=Object(s.b)(null,{addTech:function(e){return function(){var t=Object(i.a)(u.a.mark((function t(a){var n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,j(),t.next=4,fetch("/techs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:c=t.sent,a({type:"ADD_TECH",payload:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"TECHS_ERROR",payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addTech,a=Object(n.useState)(""),r=Object(y.a)(a,2),l=r[0],s=r[1],o=Object(n.useState)(""),u=Object(y.a)(o,2),i=u[0],m=u[1];return c.a.createElement("div",{id:"add-tech-modal",className:"modal"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("h4",null,"New Technician"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",name:"firstName",value:l,onChange:function(e){return s(e.target.value)}}),c.a.createElement("label",{htmlFor:"firstName",className:"active"},"First Name"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",name:"lastName",value:i,onChange:function(e){return m(e.target.value)}}),c.a.createElement("label",{htmlFor:"lastName",className:"active"},"Last Name")))),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("a",{href:"#!",onClick:function(){""===l||""===i?h.a.toast({html:"Please enter the first and last name"}):(t({firstName:l,lastName:i}),h.a.toast({html:"".concat(l," ").concat(i," was added as a tech")}),s(""),m(""))},className:"modal-close waves-effect blue waves-light btn"},"Enter")))})),C=Object(s.b)(null,{deleteTech:function(e){return function(){var t=Object(i.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,j(),t.next=4,fetch("/techs/".concat(e),{method:"DELETE"});case 4:a({type:"DELETE_TECH",payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"TECHS_ERROR",payload:t.t0.response.statusText});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.tech,a=t.id,n=t.firstName,r=t.lastName,l=e.deleteTech;return c.a.createElement("li",{className:"collection-item"},c.a.createElement("div",null,n," ",r,c.a.createElement("a",{href:"#!",className:"secondary-content",onClick:function(){l(a),h.a.toast({html:"Technician deleted"})}},c.a.createElement("i",{className:"material-icons grey-text"},"delete"))))})),k=Object(s.b)((function(e){return{tech:e.tech}}),{getTechs:N})((function(e){var t=e.getTechs,a=e.tech,r=a.techs,l=a.loading;return Object(n.useEffect)((function(){t()}),[]),c.a.createElement("div",{id:"tech-list-modal",className:"modal"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("h4",null,"Technician List"),c.a.createElement("ul",{className:"collection"},!l&&null!==r&&r.map((function(e){return c.a.createElement(C,{tech:e,key:e.id})})))))})),_=a(7),D=a(19),G=a(20),A=a(11),H=a(1),P={logs:null,current:null,loading:!1,error:null},I={techs:null,loading:!1,error:null},M=Object(_.combineReducers)({log:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LOGS":return Object(H.a)(Object(H.a)({},e),{},{logs:t.payload,loading:!1});case"ADD_LOG":return Object(H.a)(Object(H.a)({},e),{},{logs:[].concat(Object(A.a)(e.logs),[t.payload]),loading:!1});case"DELETE_LOG":return Object(H.a)(Object(H.a)({},e),{},{logs:e.logs.filter((function(e){return e.id!==t.payload})),loading:!1});case"UPDATE_LOG":return Object(H.a)(Object(H.a)({},e),{},{logs:e.logs.map((function(e){return e.id===t.payload.id?t.payload:e}))});case"SEARCH_LOGS":return Object(H.a)(Object(H.a)({},e),{},{logs:t.payload});case"SET_CURRENT":return Object(H.a)(Object(H.a)({},e),{},{current:t.payload});case"CLEAR_CURRENT":return Object(H.a)(Object(H.a)({},e),{},{current:null});case"SET_LOADING":return Object(H.a)(Object(H.a)({},e),{},{loading:!0});case"LOGS_ERROR":return console.error(t.payload),Object(H.a)(Object(H.a)({},e),{},{error:t.payload});default:return e}},tech:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TECHS":return Object(H.a)(Object(H.a)({},e),{},{techs:t.payload,laoding:!1});case"ADD_TECH":return Object(H.a)(Object(H.a)({},e),{},{techs:[].concat(Object(A.a)(e.techs),[t.payload]),loading:!1});case"DELETE_TECH":return Object(H.a)(Object(H.a)({},e),{},{techs:e.techs.filter((function(e){return e.id!==t.payload})),loading:!1});case"SET_LOADING":return Object(H.a)(Object(H.a)({},e),{},{loading:!0});case"TECHS_ERROR":return console.error(t.payload),Object(H.a)(Object(H.a)({},e),{},{error:t.payload,loading:!1});default:return e}}}),F=[G.a],U=Object(_.createStore)(M,{},Object(D.composeWithDevTools)(_.applyMiddleware.apply(void 0,F))),J=(a(34),a(35),function(){return Object(n.useEffect)((function(){h.a.AutoInit()})),c.a.createElement(s.a,{store:U},c.a.createElement(n.Fragment,null,c.a.createElement(d,null),c.a.createElement("div",{className:"container"},c.a.createElement(O,null),c.a.createElement(L,null),c.a.createElement(S,null),c.a.createElement(R,null),c.a.createElement(k,null),c.a.createElement(v,null))))});l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(J,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.b085cb1f.chunk.js.map