const d=document;
const ls=localStorage;
export default function darkTheme(btn,classDark){
 const $themeBtn=d.querySelector(btn);
                                     /*para llamar data Atributes html*/
 /*ojo retornar un array de html*/const $selectors=d.querySelectorAll("["+classDark+"]");
 
 let moon="🌙";
 let sun="☀️";
 
 const lightMode=()=>{
  $selectors.forEach(el=>el.classList.remove("dark-mode"));
  $themeBtn.textContent=moon;
  ls.setItem("theme","light"); 
 }

 const darkMode=()=>{
  $selectors.forEach(el=>el.classList.add("dark-mode"));
  $themeBtn.textContent=sun;
  ls.setItem("theme","dark"); 
 }

 d.addEventListener("click",e=>{
   if(e.target.matches(btn)){
       if($themeBtn.textContent===moon){
        darkMode();
       }else{
        lightMode();
       }
   }
 });
 d.addEventListener("DOMContentLoaded",(e)=>{
   if(ls.getItem("theme")===null) ls.setItem("theme","light");
   if(ls.getItem("theme")==="light") lightMode();
   if(ls.getItem("theme")==="dark") darkMode(); 
 });
}