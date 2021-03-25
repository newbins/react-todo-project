(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{17:function(e,t,n){e.exports={item:"TodoItem_item__3MbaD",checkbox:"TodoItem_checkbox__2Jrs8",textInput:"TodoItem_textInput__t35cu"}},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(26),i=n.n(a),s=n(8),r=n(22),l=n(11),d=n(9),u=n(3),j=n(16),b=n(17),h=n.n(b),p=n(2),x=function(e){var t=Object(c.useState)(!1),n=Object(d.a)(t,2),o=n[0],a=n[1];Object(c.useEffect)((function(){console.log("Cleaning up...")}),[]);var i=e.todo,s=i.completed,r=i.id,l=i.title,u={},b={};return o?u.display="none":b.display="none",Object(p.jsxs)("li",{className:h.a.item,children:[Object(p.jsxs)("div",{onDoubleClick:function(){a(!0)},style:u,children:[Object(p.jsx)("input",{type:"checkbox",className:h.a.checkbox,checked:s,onChange:function(){return e.handleChangeProps(r)}}),Object(p.jsx)("button",{onClick:function(){return e.deleteTodoProps(r)},children:Object(p.jsx)(j.b,{style:{color:"orangered",fontSize:"16px"}})}),Object(p.jsx)("span",{style:s?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:l})]}),Object(p.jsx)("input",{type:"text",style:b,value:l,className:h.a.textInput,onChange:function(t){e.setUpdate(t.target.value,r)},onKeyDown:function(e){"Enter"===e.key&&a(!1)}})]})},O=function(e){return Object(p.jsx)("ul",{children:e.todos.map((function(t){return Object(p.jsx)(x,{todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps,setUpdate:e.setUpdate},t.id)}))})},m=function(){return Object(p.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(p.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},f=n(15),g=function(e){var t=Object(c.useState)({title:""}),n=Object(d.a)(t,2),o=n[0],a=n[1];return Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o.title.trim()?(e.addTodoProps(o.title),a({title:""})):alert("Please write item")},className:"form-container",children:[Object(p.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:o.title,name:"title",onChange:function(e){a(Object(l.a)(Object(l.a)({},o),{},Object(f.a)({},e.target.name,e.target.value)))}}),Object(p.jsx)("button",{className:"input-submit",children:Object(p.jsx)(j.a,{style:{color:"darkcyan",size:"20px",marginTop:"2px"}})})]})},v=function(){console.log(Object(u.f)());var e=Object(u.f)().slug,t=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic."}].find((function(t){return t.slug===e})),n=t.title,c=t.description;return Object(p.jsxs)("div",{className:"main__content",children:[Object(p.jsx)("h1",{children:n}),Object(p.jsx)("p",{children:c})]})},y=function(){var e=Object(u.g)(),t=e.url,n=e.path;return console.log(Object(u.g)()),Object(p.jsxs)("div",{className:"about__content",children:[Object(p.jsxs)("ul",{className:"about__list",children:[Object(p.jsx)("li",{children:Object(p.jsx)(s.b,{to:"".concat(t,"/about-app"),children:"About App"})}),Object(p.jsx)("li",{children:Object(p.jsx)(s.b,{to:"".concat(t,"/about-author"),children:"About Author"})})]}),Object(p.jsx)(u.a,{path:"".concat(n,"/:slug"),children:Object(p.jsx)(v,{})})]})},N=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h3",{children:"No match for this page"})})},w=n(28),k=n(29),S=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],o=t[1];return Object(p.jsxs)("nav",{className:"navBar",children:[Object(p.jsx)("button",{onClick:function(){o((function(e){return!e}))},children:n?Object(p.jsx)(w.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(p.jsx)(k.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(p.jsx)("ul",{className:"menuNav ".concat(n?" showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(s.c,{to:e.path,activeClassName:"active-link",onClick:function(){o(!1)},exact:!0,children:e.text})},e.id)}))})]})},T=n(30),_=function(){var e=Object(c.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(d.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("todos",e)}),[n]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(S,{}),Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{exact:!0,path:"/",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"inner",children:[Object(p.jsx)(m,{}),Object(p.jsx)(g,{addTodoProps:function(e){var t={id:Object(T.v4)(),title:e,completed:!1};o([].concat(Object(r.a)(n),[t]))}}),Object(p.jsx)(O,{todos:n,handleChangeProps:function(e){o((function(t){return t.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodoProps:function(e){o(Object(r.a)(n.filter((function(t){return t.id!==e}))))},setUpdate:function(e,t){o(n.map((function(n){return n.id===t&&(n.title=e),n})))}})]})})}),Object(p.jsx)(u.a,{path:"/about",children:Object(p.jsx)(y,{})}),Object(p.jsx)(u.a,{path:"*",children:Object(p.jsx)(N,{})})]})]})};n(43);i.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(s.a,{basename:"/newbins/react-todo-project",children:Object(p.jsx)(_,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.c92f8070.chunk.js.map