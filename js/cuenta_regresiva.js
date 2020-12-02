const d=document;

export default function countdown(id,limitDate,finalMessage){
    const $countdown=d.getElementById(id);
    const countdownDate=new Date(limitDate).getTime();
    let countdownTiempo=setInterval(()=>{
     let now=new Date().getTime();
     let limitTime=countdownDate-now;
     let days=Math.floor(limitTime/86400000);
     let hours=("0"+Math.floor(limitTime%(86400000)/3600000)).slice(-2);
     let minutes=("0"+Math.floor(limitTime%(3600000)/60000)).slice(-2);
     let seconds=("0"+Math.floor(limitTime%(60000)/1000)).slice(-2);
     $countdown.innerHTML=`<h3>
     Faltan:${days} Dias ${hours} horas ${minutes} minutos
     ${seconds} segundos </h3>`;
     if(limitTime<0){
         clearInterval(countdownTiempo);
         $countdown.innerHTML=`<h3>${finalMessage}</h3>`;
     }
    },1000);
}