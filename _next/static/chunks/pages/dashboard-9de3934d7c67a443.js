(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[724],{3381:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var a=t(7876),i=t(5658),l=t(4193),r=t(5304),n=t(4232);let d=n.forwardRef(function(e,s){let{title:t,titleId:a,...i}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":a},i),t?n.createElement("title",{id:a},t):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"}))}),c=n.forwardRef(function(e,s){let{title:t,titleId:a,...i}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":a},i),t?n.createElement("title",{id:a},t):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"}))});function o(){let[e,s]=(0,n.useState)({totalUsers:0,inactiveUsers:[],loginsByDate:{},activeToday:0,activeThisMonth:0});return(0,n.useEffect)(()=>{let{users:e,loginsByDate:t,activeToday:a,activeThisMonth:i}=(0,r.A)(),l=new Date;console.log(l),l.setDate(l.getDate()-7);let n=e.filter(e=>new Date(e.lastLogin)<l);s({totalUsers:e.length,inactiveUsers:n,loginsByDate:t,activeToday:a,activeThisMonth:i})},[]),(0,a.jsx)(i.O,{children:(0,a.jsx)(l.A,{children:(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",children:[(0,a.jsx)("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:(0,a.jsx)("div",{className:"p-5",children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"flex-shrink-0",children:(0,a.jsx)(d,{className:"h-6 w-6 text-gray-400","aria-hidden":"true"})}),(0,a.jsx)("div",{className:"ml-5 w-0 flex-1",children:(0,a.jsxs)("dl",{children:[(0,a.jsx)("dt",{className:"text-sm font-medium text-gray-500 truncate",children:"Total Users"}),(0,a.jsx)("dd",{className:"text-3xl font-semibold text-gray-900",children:e.totalUsers})]})})]})})}),(0,a.jsx)("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:(0,a.jsx)("div",{className:"p-5",children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"flex-shrink-0",children:(0,a.jsx)(d,{className:"h-6 w-6 text-green-400","aria-hidden":"true"})}),(0,a.jsx)("div",{className:"ml-5 w-0 flex-1",children:(0,a.jsxs)("dl",{children:[(0,a.jsx)("dt",{className:"text-sm font-medium text-gray-500 truncate",children:"Active Today"}),(0,a.jsx)("dd",{className:"text-3xl font-semibold text-gray-900",children:e.activeToday})]})})]})})}),(0,a.jsx)("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:(0,a.jsx)("div",{className:"p-5",children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"flex-shrink-0",children:(0,a.jsx)(d,{className:"h-6 w-6 text-blue-400","aria-hidden":"true"})}),(0,a.jsx)("div",{className:"ml-5 w-0 flex-1",children:(0,a.jsxs)("dl",{children:[(0,a.jsx)("dt",{className:"text-sm font-medium text-gray-500 truncate",children:"Active This Month"}),(0,a.jsx)("dd",{className:"text-3xl font-semibold text-gray-900",children:e.activeThisMonth})]})})]})})})]}),(0,a.jsx)("div",{className:"bg-white shadow rounded-lg",children:(0,a.jsxs)("div",{className:"px-4 py-5 sm:p-6",children:[(0,a.jsxs)("h3",{className:"text-lg leading-6 font-medium text-gray-900 flex items-center",children:[(0,a.jsx)(c,{className:"h-5 w-5 text-amber-400 mr-2"}),"Inactive Users (7+ days)"]}),(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsx)("div",{className:"flow-root",children:(0,a.jsx)("ul",{className:"-my-5 divide-y divide-gray-200",children:e.inactiveUsers.map(e=>(0,a.jsx)("li",{className:"py-4",children:(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)("div",{className:"flex-shrink-0",children:(0,a.jsx)("span",{className:"inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-100",children:e.name.charAt(0)})}),(0,a.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,a.jsx)("p",{className:"text-sm font-medium text-gray-900 truncate",children:e.name}),(0,a.jsx)("p",{className:"text-sm text-gray-500 truncate",children:e.email})]}),(0,a.jsx)("div",{children:(0,a.jsxs)("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800",children:["Last login:"," ",new Date(e.lastLogin).toLocaleDateString()]})})]})},e.id))})})})]})})]})})})}},4193:(e,s,t)=>{"use strict";t.d(s,{A:()=>d});var a=t(7876),i=t(3547),l=t(9099),r=t(8230),n=t.n(r);function d(e){let{children:s}=e,{signOut:t,user:r}=(0,i.A)(),d=(0,l.useRouter)(),c=async()=>{await t(),d.push("/login")};return(0,a.jsxs)("div",{className:"min-h-screen bg-gray-50",children:[(0,a.jsx)("nav",{className:"bg-white border-b border-gray-200",children:(0,a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"flex justify-between h-16",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("div",{className:"flex-shrink-0 flex items-center",children:(0,a.jsx)("h1",{className:"text-xl font-bold text-indigo-600",children:"Analytics"})}),(0,a.jsxs)("div",{className:"hidden sm:ml-6 sm:flex sm:space-x-8",children:[(0,a.jsx)(n(),{href:"/dashboard",className:"".concat("/dashboard"===d.pathname?"border-indigo-500 text-gray-900":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"," inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"),children:"User Analytics"}),(0,a.jsx)(n(),{href:"/dashboard2",className:"".concat("/dashboard2"===d.pathname?"border-indigo-500 text-gray-900":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"," inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"),children:"Activity Log"})]})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("span",{className:"px-3 py-2 text-sm text-gray-700",children:null==r?void 0:r.email}),(0,a.jsx)("button",{onClick:c,className:"ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Sign out"})]})]})})}),(0,a.jsx)("main",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",children:(0,a.jsx)("div",{className:"px-4 py-6 sm:px-0",children:s})})]})}},5304:(e,s,t)=>{"use strict";t.d(s,{A:()=>a});let a=()=>{let e=[{id:1,name:"John Doe",email:"john@example.com",lastLogin:"2025-03-01",device:"Chrome Browser"},{id:2,name:"Jane Smith",email:"jane@example.com",lastLogin:"2025-02-20",device:"iOS App"},{id:3,name:"Alice Johnson",email:"alice@example.com",lastLogin:"2025-03-01",device:"Android App"},{id:4,name:"Bob Wilson",email:"bob@example.com",lastLogin:"2025-02-15",device:"Safari Browser"},{id:5,name:"Carol Brown",email:"carol@example.com",lastLogin:"2025-02-25",device:"Safari Browser"}],s=new Date,t=new Date(s.getFullYear(),s.getMonth(),1),a=e.filter(e=>new Date(e.lastLogin).toDateString()===s.toDateString()).length,i=e.filter(e=>new Date(e.lastLogin)>=t).length;return{users:e,loginsByDate:{"2025-03-01":25,"2025-02-29":30,"2025-02-28":28,"2025-02-27":35,"2025-02-26":22,"2025-02-25":15,"2025-02-24":20},activeToday:a,activeThisMonth:i}}},5372:(e,s,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t(3381)}])},5658:(e,s,t)=>{"use strict";t.d(s,{O:()=>n});var a=t(7876),i=t(3547),l=t(9099),r=t(4232);function n(e){let{children:s}=e,{user:t,loading:n}=(0,i.A)(),d=(0,l.useRouter)();return((0,r.useEffect)(()=>{n||t||d.push("/login")},[t,n,d]),n||!t)?(0,a.jsx)("div",{children:"Loading..."}):(0,a.jsx)(a.Fragment,{children:s})}}},e=>{var s=s=>e(e.s=s);e.O(0,[8,636,593,792],()=>s(5372)),_N_E=e.O()}]);