const d=document;
const n=navigator;

export default function getGeolocation(id){
  const $id=d.getElementById(id);
  /*obj que tiene las opciones */
  const options={
      enableHighAccuracy:true,/*hace la mejor lectura posible*/
      timeout:5000,/*tiempo a durar*/
      maximumAge:0,/*para que no tome como referencia lecturas anterioes*/ 
  };
  /*funcion si todo va bien*/
  const success=(position,id)=>{
    const id=d.getElementById(id);   
     id.innerHTML=`
     <p>Tu posicion actual es:</p>
     <ul>
        <li>Latitud:<b>${position.coords.latitude}</b></li>
        <li>Longitud:<b>${position.coords.longitude}</b></li>
        <li>Precision:<b>${position.coords.accuracy}</b>metros</li>
     </ul>
     `;
     
  };
  /*funcion para gestionar el error */
  const error=(err)=>{
      $id.innerHTML=`<p><mark>Error:${err.code}:${err.message}</mark></p>`;
      console.log(`Error:${err.code}:${err.message}`);
  };
  /*se manda las dos funciones a la promesa */
  n.geolocation.getCurrentPosition(success,error,options);
}