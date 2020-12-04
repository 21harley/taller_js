const d=document;
const w=window;

export default function smartVideo(){
  const $video=d.querySelectorAll("video[data-smart-video]");
  
  const cb=(entries)=>{
     entries.forEach(entry=> {
         if(entry.isIntersecting){
             entry.target.play();
         }else{
             entry.target.pause();
         }
         w.addEventListener("visibilitychange",e=>{
             if(d.visibilityState==="visible"){
                 entry.target.play()
             }else{
                 entry.target.pause();
             }
         })
     });
  }

  const observer=new IntersectionObserver(cb,{threshold:0.7});
  
  $video.forEach(el=>observer.observe(el));
}