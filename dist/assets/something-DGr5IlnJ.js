import{r as h,j as e}from"./index-D_mlBAek.js";const p=({images:t})=>{const[s,r]=h.useState(2),n=l=>{l==="left"?r(x=>x===0?t.length-1:x-1):l==="right"&&r(x=>x===t.length-1?0:x+1)},a=l=>l===0?t.length-1:l-1,o=l=>l===t.length-1?0:l+1;return e.jsxs("div",{className:"relative mt-6 flex h-full items-center justify-center",children:[e.jsx("button",{onClick:()=>n("left"),className:"absolute left-[-30%] z-20 h-[30px] w-[10%] rounded-lg bg-[#72B3A5] p-1 text-white focus:outline-none sm:h-[35px] sm:w-[15%] md:left-[-25%] md:h-[30px] md:w-[30px] lg:left-[-25%] lg:h-[40px] lg:w-[10%] xl:h-[50px] xl:w-[15%]",children:"←"}),e.jsxs("div",{className:"relative mx-2 flex items-center justify-center sm:mx-4",children:[e.jsx("img",{src:t[a(s)].url,alt:t[a(s)].alt,className:"absolute left-[-20px] z-0 h-[60px] w-[60px] -translate-x-4 transform rounded-lg opacity-75 transition-transform duration-500 ease-in-out sm:left-[-30px] sm:h-[80px] sm:w-[80px] sm:-translate-x-6 lg:left-[-60px] lg:h-[210px] lg:w-[210px] lg:-translate-x-8"}),e.jsxs("div",{className:"relative z-10 mx-2 h-[100px] w-[100px] overflow-hidden rounded-lg sm:mx-4 sm:h-[140px] sm:w-[140px] lg:h-[300px] lg:w-[300px]",children:[console.log(t[s].url),e.jsx("img",{src:t[s].url,alt:t[s].alt,className:"h-full w-full rounded-lg bg-inherit overflow-hidden"})]}),e.jsx("img",{src:t[o(s)].url,alt:t[o(s)].alt,className:"absolute right-[-20px] z-0 h-[60px] w-[60px] translate-x-4 transform rounded-lg opacity-75 transition-transform duration-500 ease-in-out sm:right-[-30px] sm:h-[80px] sm:w-[80px] sm:translate-x-6 lg:right-[-60px] lg:h-[210px] lg:w-[210px] lg:translate-x-8"})]}),e.jsx("button",{onClick:()=>n("right"),className:"absolute right-[-30%] z-20 items-center  flex h-[20px] w-[20px] justify-center rounded-lg bg-[#72B3A5] p-1 align-middle text-[1vh] text-white focus:outline-none sm:h-[35px] sm:w-[10%] md:right-[-25%] md:h-[30px] md:w-[30px] md:text-[2vh] lg:right-[-25%] lg:h-[40px] lg:w-[10%] lg:text-[2vh] xl:h-[50px] xl:w-[15%] xl:text-[2vh]",children:"→"})]})};export{p as default};