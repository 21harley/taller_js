const d=document;
const w=window;
/*
id=para revisar
mq=media queri que se va hacer el cambio
mobileContent=contenido del mobil
desktopContent=contenido para escritorio
*/
export default function responsiveMedia(id,mq,mobileContent,desktopContent){
  let breakpoint=w.matchMedia(mq);
  const resposive=(e)=>{
    if(e.matches){
      d.getElementById(id).innerHTML=desktopContent;
    }else{
      d.getElementById(id).innerHTML=mobileContent;
    }
    console.log(e.matches);
  }
  breakpoint.addListener(resposive);/*para trabajar con la pantalla de la pc y dectar que cambio su dimencion*/
  resposive(breakpoint);/*para que dectecte al cargar la pagina*/
}