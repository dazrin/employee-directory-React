(this["webpackJsonpemployee-directory-react"]=this["webpackJsonpemployee-directory-react"]||[]).push([[0],{32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(20),s=n.n(a),r=(n(32),n(0)),l=function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"jumbotron header",children:[Object(r.jsx)("h1",{className:"title mb-8",children:"Employee Directory"}),Object(r.jsx)("h5",{children:"Select a category from the table to sort by that category, or search using the search bar"})]}),Object(r.jsx)("div",{className:"header-bottom"})]})},i=n(21),o=n(25),h=n(8),j=n(22),u=n(23),d=n(4),b=n(27),m=n(26),p=(n(34),function(e){return Object(r.jsxs)("div",{className:"search-bar",children:[Object(r.jsx)("strong",{className:"search-text",children:"Search Employee: "}),Object(r.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",id:"search",placeholder:"Search Employee Name"})]})}),O=(n(35),n(5)),x=n(7),g=function(e){return Object(r.jsx)("div",{className:"table-employee",children:Object(r.jsxs)("table",{className:"table table-hover",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"col"}),Object(r.jsxs)("th",{scope:"col",onClick:function(){return e.handleClick("name")},className:"pointer",children:["Name  ",Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)(O.a,{icon:x.a,className:"rotate-".concat(e.toggle.name)})})]}),Object(r.jsxs)("th",{scope:"col",onClick:function(){return e.handleClick("phone")},className:"pointer",children:["Phone  ",Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)(O.a,{icon:x.a,className:"rotate-".concat(e.toggle.phone)})})]}),Object(r.jsxs)("th",{scope:"col",onClick:function(){return e.handleClick("email")},className:"pointer",children:["Email  ",Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)(O.a,{icon:x.a,className:"rotate-".concat(e.toggle.email)})})]}),Object(r.jsxs)("th",{scope:"col",onClick:function(){return e.handleClick("dob")},className:"pointer",children:["DOB  ",Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)(O.a,{icon:x.a,className:"rotate-".concat(e.toggle.dob)})})]})]})}),Object(r.jsx)("tbody",{children:e.results.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("img",{src:e.picture,alt:e.name})}),Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:e.phone}),Object(r.jsx)("td",{children:e.email}),Object(r.jsx)("td",{children:e.dob})]},e.id)}))})]})})},f=n(24),C=n.n(f),v=function(){return C.a.get("https://randomuser.me/api/?results=50&inc=name,email,dob,picture,phone&nat=ca")},y=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).state={search:"",results:[],all:[],toggle:{name:!1,phone:!1,email:!1,dob:!1}},c.handleInputChange=c.handleInputChange.bind(Object(d.a)(c)),c.handleClick=c.handleClick.bind(Object(d.a)(c)),c}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.generateEmployees()}},{key:"generateEmployees",value:function(){var e=this;v().then((function(t){var n=t.data.results.map((function(e,t){return{name:e.name.first+" "+e.name.last,phone:e.phone,email:e.email,dob:e.dob.date.substring(0,10),picture:e.picture.thumbnail,id:t}}));e.setState({results:n,all:n})})).catch((function(e){return console.log(e)}))}},{key:"handleInputChange",value:function(e){var t=e.target.name,n=e.target.value;this.setState(Object(h.a)({results:this.state.all.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))},t,n))}},{key:"handleClick",value:function(e){var t=this,n=Object(o.a)(this.state.results),c=Object(i.a)({},this.state.toggle);c[e]=!c[e],n.sort((function(t,n){return c[e]?t[e]>n[e]?1:-1:t[e]<n[e]?1:-1}));var a=n.filter((function(e){return e.name.toLowerCase().includes(t.state.search.toLowerCase())}));this.setState({employees:n,toggle:c,results:a})}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(p,{search:this.state.search,handleInputChange:this.handleInputChange}),Object(r.jsx)(g,{results:this.state.results,handleClick:this.handleClick,toggle:this.state.toggle})]})}}]),n}(c.Component),N=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(l,{}),Object(r.jsx)(y,{})]})};n(57);s.a.render(Object(r.jsx)(N,{}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.400f3d97.chunk.js.map