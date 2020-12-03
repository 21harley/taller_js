const d=document;

export default function slider(){
  const $nextBtn=d.querySelector(".slider-btns .next");
  const $preBtn=d.querySelector(".slider-btns .prev");
  const $slider=d.querySelectorAll(".slider-slide");
  
  let i=0;/*contador slider*/ 
  let semovio=0;
  setInterval(() => {
    if(semovio>0){
        semovio--;
    }else{
        $slider[i].classList.remove("active");
        i--;
        if(i<0){
         i=$slider.length-1;
        } 
        $slider[i].classList.add("active");
    }
  }, 2500);
  d.addEventListener("click",e=>{
    if(e.target===$preBtn){
       e.preventDefault();
       $slider[i].classList.remove("active");
       i--;
       if(i<0){
        i=$slider.length-1;
       } 
       $slider[i].classList.add("active");
       semovio=12;
    }
    if(e.target===$nextBtn){
        e.preventDefault();
        $slider[i].classList.remove("active");
        i++;
        if(i>$slider.length-1){
         i=0;
        } 
        $slider[i].classList.add("active");
     }
       semovio=12;
  });

}