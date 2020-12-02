const d=document;
let x=0;
let y=0;

export function moveBall(e,ball,stage){
 const $ball=d.querySelector(ball);
 const $stage=d.querySelector(stage);
 let limitsBall=$ball.getBoundingClientRect();
 let limitsStage=$stage.getBoundingClientRect();
 console.log(limitsBall,limitsStage); 
  switch(e.keyCode){
      //izq
      case 37:
        
        if(limitsBall.left-10>limitsStage.left){
          e.preventDefault();
          x--;
        } 
      break;

      //arr
      case 38:
        e.preventDefault();
        if(limitsBall.top -10>limitsStage.top){
            e.preventDefault();
            y--;
        } 
      break;

      //der
      case 39:
        if(limitsBall.right<limitsStage.right -10){
            e.preventDefault();
            x++;
        }    
      break;

      //abajo
      case 40:
        if(limitsBall.bottom<limitsStage.bottom-10){
            e.preventDefault();
            y++;
        }
      break;
  }
  console.log(" X:"+x+" Y:"+y);
  $ball.style.transform=`translate(${x*10}px,${y*10}px)`;
}

export function shortcuts(e){
    /*
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(`ctrl:${e.ctrlKey}`);
    console.log(`alt:${e.altKey}`);
    console.log(`shift:${e.shiftKey}`);
    console.log(e);
    /*para validar si se usa un atajo de tecleado*/
    if(e.key==="a"&&e.altKey){
      alert("Haz lanzado una alerta con el tecleado");
    }
    if(e.key==="c"&&e.altKey){
      confirm("Haz lanzado una confirm con el tecleado");
    }
    if(e.key==="p"&&e.altKey){
      prompt("Haz lanzado una prompt con el tecleado");
    }
}