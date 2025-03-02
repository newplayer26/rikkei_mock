(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[827],{2438:(e,s,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/new",function(){return r(2526)}])},2526:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>l});var t=r(7876),n=r(4232),a=r(9099),i=r(5658),d=r(4193);function l(){let e=(0,a.useRouter)(),[s,r]=(0,n.useState)({email:"",name:""}),l=e=>{let{name:s,value:t}=e.target;r(e=>({...e,[s]:t}))};return(0,t.jsx)(i.O,{children:(0,t.jsx)(d.A,{children:(0,t.jsx)("div",{className:"px-4 py-6",children:(0,t.jsxs)("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[(0,t.jsx)("div",{className:"md:col-span-1",children:(0,t.jsxs)("div",{className:"px-4 sm:px-0",children:[(0,t.jsx)("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Add New User"}),(0,t.jsx)("p",{className:"mt-1 text-sm text-gray-600",children:"Create a new user account by filling out the form."})]})}),(0,t.jsx)("div",{className:"mt-5 md:col-span-2 md:mt-0",children:(0,t.jsx)("form",{onSubmit:r=>{r.preventDefault();let t=[...JSON.parse(localStorage.getItem("users")||"[]"),{id:Date.now(),...s,lastLogin:new Date().toISOString(),device:"Chrome Browser",active:!0}];localStorage.setItem("users",JSON.stringify(t)),window.dispatchEvent(new Event("storage")),e.push("/dashboard2")},children:(0,t.jsxs)("div",{className:"shadow sm:overflow-hidden sm:rounded-md",children:[(0,t.jsxs)("div",{className:"space-y-6 bg-white px-4 py-5 sm:p-6",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name"}),(0,t.jsx)("input",{type:"text",name:"name",id:"name",required:!0,value:s.name,onChange:l,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",placeholder:"John Doe"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),(0,t.jsx)("input",{type:"email",name:"email",id:"email",required:!0,value:s.email,onChange:l,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",placeholder:"john@example.com"})]})]}),(0,t.jsxs)("div",{className:"bg-gray-50 px-4 py-3 text-right sm:px-6",children:[(0,t.jsx)("button",{type:"button",onClick:()=>e.push("/dashboard2"),className:"inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-3",children:"Cancel"}),(0,t.jsx)("button",{type:"submit",className:"inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Save"})]})]})})})]})})})})}},4193:(e,s,r)=>{"use strict";r.d(s,{A:()=>l});var t=r(7876),n=r(3547),a=r(9099),i=r(8230),d=r.n(i);function l(e){let{children:s}=e,{signOut:r,user:i}=(0,n.A)(),l=(0,a.useRouter)(),o=async()=>{await r(),l.push("/login")};return(0,t.jsxs)("div",{className:"min-h-screen bg-gray-50",children:[(0,t.jsx)("nav",{className:"bg-white border-b border-gray-200",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,t.jsxs)("div",{className:"flex justify-between h-16",children:[(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("div",{className:"flex-shrink-0 flex items-center",children:(0,t.jsx)("h1",{className:"text-xl font-bold text-indigo-600",children:"Analytics"})}),(0,t.jsxs)("div",{className:"hidden sm:ml-6 sm:flex sm:space-x-8",children:[(0,t.jsx)(d(),{href:"/dashboard",className:"".concat("/dashboard"===l.pathname?"border-indigo-500 text-gray-900":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"," inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"),children:"User Analytics"}),(0,t.jsx)(d(),{href:"/dashboard2",className:"".concat("/dashboard2"===l.pathname?"border-indigo-500 text-gray-900":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"," inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"),children:"Activity Log"})]})]}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("span",{className:"px-3 py-2 text-sm text-gray-700",children:null==i?void 0:i.email}),(0,t.jsx)("button",{onClick:o,className:"ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Sign out"})]})]})})}),(0,t.jsx)("main",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",children:(0,t.jsx)("div",{className:"px-4 py-6 sm:px-0",children:s})})]})}},5658:(e,s,r)=>{"use strict";r.d(s,{O:()=>d});var t=r(7876),n=r(3547),a=r(9099),i=r(4232);function d(e){let{children:s}=e,{user:r,loading:d}=(0,n.A)(),l=(0,a.useRouter)();return((0,i.useEffect)(()=>{d||r||l.push("/login")},[r,d,l]),d||!r)?(0,t.jsx)("div",{children:"Loading..."}):(0,t.jsx)(t.Fragment,{children:s})}}},e=>{var s=s=>e(e.s=s);e.O(0,[8,636,593,792],()=>s(2438)),_N_E=e.O()}]);