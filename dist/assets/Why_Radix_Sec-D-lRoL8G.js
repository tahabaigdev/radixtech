import{r as i,j as e,w as b,o as u,n as j}from"./index-D2Tr0q-m.js";import{C as f}from"./Common_Heading-D-Of1xf9.js";import{X as g,P as y}from"./x-B1bh6hUk.js";const c=({title:s,content:o,list:r,defaultActive:t=!1})=>{const[n,d]=i.useState(t),[m,a]=i.useState("0px"),l=i.useRef(null),p=()=>{d(!n)};return i.useEffect(()=>{n&&l.current?a(`${l.current.scrollHeight}px`):a("0px")},[n]),i.useEffect(()=>{t&&l.current&&a(`${l.current.scrollHeight}px`)},[t]),e.jsxs("div",{className:"border-b border-solid border-[#C9C9C9] pb-[3.2rem] pt-[2.8rem]",children:[e.jsxs("div",{className:"group flex w-[100%] cursor-pointer select-none items-center justify-between",onClick:p,children:[e.jsx("h5",{className:"text-[1.8rem] font-semibold leading-[2.4rem] text-blackColor group-hover:text-primaryColor",children:s}),n?e.jsx(g,{className:"text-primaryColor group-hover:text-blackColor",strokeWidth:1}):e.jsx(y,{className:"text-primaryColor group-hover:text-blackColor",strokeWidth:1})]}),e.jsxs("div",{ref:l,className:"transition-max-height overflow-hidden duration-300 ease-in-out",style:{maxHeight:m},children:[e.jsx("p",{className:"mt-[2.4rem] text-[1.6rem] leading-[2.4rem] tracking-[-0.0192px] text-blackColor",children:o}),r&&e.jsx("ul",{className:"mt-[1.5rem] flex flex-col gap-[2rem]",children:r.map((x,h)=>e.jsxs("li",{children:[e.jsx("h5",{className:"mb-[3px] text-[1.6rem] font-semibold leading-[2.2rem] text-blackColor",children:x.title}),e.jsx("p",{className:"text-[1.4rem] leading-[2.2rem] tracking-[-0.0192px] text-blackColor",children:x.description})]},h))})]})]})},N=()=>{const[s,o]=i.useState("Why RadixTech");return e.jsx("section",{id:"why",children:e.jsxs("div",{className:"container py-[6rem]",children:[e.jsx("div",{className:"flex justify-center text-center xl:justify-start xl:text-left",children:e.jsx("div",{children:e.jsx(f,{title:"Why Organizations Choose RadixTech",subTitle:"Why RadixTech",titleColor:"#000000",subTitleColor:"#4F4F4F"})})}),e.jsxs("div",{className:"mx-auto mt-[4rem] max-w-[84rem]",children:[e.jsxs("ul",{className:"flex items-center justify-center gap-[2rem] border-b border-solid border-[#C9C9C9]",children:[e.jsx("li",{children:e.jsx("button",{className:`inline-flex px-[2.4rem] py-[1.6rem] text-[1.6rem] font-bold leading-[2.4rem] tracking-[-0.08px] ${s==="Why RadixTech"?"border-b-[4px] border-primaryColor":"border-b-[4px] border-[transparent]"}`,onClick:()=>o("Why RadixTech"),children:"Why RadixTech"})}),e.jsx("li",{children:e.jsx("button",{className:`inline-flex px-[2.4rem] py-[1.6rem] text-[1.6rem] font-bold leading-[2.4rem] tracking-[-0.08px] ${s==="Our Partners"?"border-b-[4px] border-primaryColor":"border-b-[4px] border-[transparent]"}`,onClick:()=>o("Our Partners"),children:"Our Partners"})}),e.jsx("li",{children:e.jsx("button",{className:`inline-flex px-[2.4rem] py-[1.6rem] text-[1.6rem] font-bold leading-[2.4rem] tracking-[-0.08px] ${s==="Technology Expertise"?"border-b-[4px] border-primaryColor":"border-b-[4px] border-[transparent]"}`,onClick:()=>o("Technology Expertise"),children:"Technology Expertise"})})]}),s==="Why RadixTech"&&e.jsx("div",{children:b.map((r,t)=>e.jsx(c,{title:r.title,content:r.description,list:r.list,defaultActive:t===0},t))}),s==="Our Partners"&&e.jsx("div",{children:u.map((r,t)=>e.jsx(c,{title:r.title,content:r.description,list:r.list},t))}),s==="Technology Expertise"&&e.jsx("div",{children:j.map((r,t)=>e.jsx(c,{title:r.title,content:r.description,list:r.list},t))})]})]})})};export{N as default};
