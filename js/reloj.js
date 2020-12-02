const d=document;
/*trae la id de div=hora del boton play y el boton stop*/
export function digitalClock(clock,btnPlay,btnStop){
   let clockTiempo;
    d.addEventListener("click",e=>{
    if(e.target.matches(btnPlay)){
     /*guardo el set interval en una variable */ 
    clockTiempo=setInterval(()=>{
       let clockHour=new Date().toLocaleTimeString();//genero la hora 
       d.querySelector(clock).innerHTML=`<h3>${clockHour}</h3>`; 
    },1000);
    /*Evita que se pueda precionar*/
    e.target.disabled=true;
    }
    if(e.target.matches(btnStop)){
        /* al hacer referecia a la variable se detiene*/
      clearInterval(clockTiempo);//detengo el reloj
      d.querySelector(clock).innerHTML=null;/*elimina la linea*/
      /*hace que se pueda volve a clicliar*/
      d.querySelector(btnPlay).disabled=false;
    }
  });
}
export function alarm(sound,btnPlay,btnStop){
 let alarmaTempo;
 /*es necesario crear un elemento tipo audio para 
  aceder a la api de don para sonido */
 const $alarm=d.createElement("audio");
 $alarm.src=sound;

 d.addEventListener("click",e=>{
   if(e.target.matches(btnPlay)){
     alarmaTempo=setTimeout(()=>{
       $alarm.play();
     },1000);
     e.target.disabled=true;
   }
   if(e.target.matches(btnStop)){
    clearInterval(alarmaTempo);
    $alarm.pause();
    $alarm.currentTime=0;
    d.querySelector(btnPlay).disabled=false;
   }
 });
}