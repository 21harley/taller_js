const d=document;

export default function draw(btn,selector){
  const getWinner=(selector)=>{
     const $players=d.querySelectorAll(selector);
     let random=Math.floor(Math.random()*$players.length);
     const winner=$players[random];
     console.log($players,random,winner);
     return `El ganador es:${winner.textContent}`;
  }

  d.addEventListener("click",e=>{
   if(e.target.matches(btn)){
       let result=getWinner(selector);
       alert(result);
       console.log(result);
   }
  });
  /*con esta funcion se puede hacer un sorteo a una pagina 
  haciendo un analisis o  Scraping de la equiquetas.Se debe guardar 
  la funcion en consola del navegador y despues de hacer la llamada
  mandando el selector que tiene el comentario
  ejemplo youtube
  //la primera es una etiqueta especial de youtube el 2 es un contenedor y el 3 es el nombre
  getWinnerComment("ytd-comment-thread-renderer #author-text span");*/
  const getWineerComment=(selector)=>{
      const $player=document.querySelectorAll(selector);
      const random=Math.floor(Math.random()*$player.length);
      const winner=$player[random];

      return `El ganador es:${winner.textContent}`;
  };
}