const d=document;
const n=navigator;
const ua=n.userAgent;

export default function userDeviceinfo(id){
   const $id=d.getElementById(id);
   const isMobile={
        android:()=>ua.match(/Android/i),
        ios:()=>ua.match(/Iphone|Ipad|Ipod/i),
        windows:()=>ua.match(/Windows Phones/),
        any:function(){
            return this.android()||this.ios()||this.windows();
        },
   };
   const isDesktop={
       linux:()=>ua.match(/Linux/i),
       mac:()=>ua.match(/Mac OS/i),
       windows:()=>ua.match(/Windows NT/),
       any:function(){
           return this.linux()||this.mac()||this.windows();
       },
   };
   const isBrowser={
       chrome:()=>ua.match(/chrome/i),
       safari:()=>ua.match(/safari/i),
       firefox:()=>ua.match(/firefox/i),
       opera:()=>ua.match(/OPR/i),
       ie:()=>ua.match(/Msie|Iemobile/i),
       edge:()=>ua.match(/Edge/i),
       any:function(){
           return (
              this.ie()||
              this.edge()||
              this.opera()||
              this.chrome()||
              this.firefox()||
              this.safari()
           );
       },
   };
   /*
    console.log(ua);
    console.log(isMobile.android());
    console.log(isDesktop.any());
    */
   $id.innerHTML=`
    <ul>
     <li>User Agent:<b>${ua}</b></li>
     <li>Plataforma:<b>${
         isMobile.any() ? isMobile.any() : isDesktop.any() 
        }</b>
     </li>
     <li>
     Navegador:<b>${isBrowser.any()}</b>
     </li>
    </ul> 
   `;
   /*Contenido exclusivo*/

   if(isBrowser.opera()){
    $id.innerHTML+=`<img width="100" heigth="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Opera_2015_icon.svg/1200px-Opera_2015_icon.svg.png" alt="">`;
   }else if(isBrowser.firefox()){
       $id.innerHTML+=`<img width="100" heigth="100" src="https://www.mozilla.org/media/protocol/img/logos/firefox/logo-lg-high-res.7ba3ce88e665.png" alt="">`;
   }else if(isBrowser.chrome()){
    $id.innerHTML+=`<img width="200" heigth="200" src="https://logos-marcas.com/wp-content/uploads/2020/08/Google-Chrome-Logo.png" alt="">`;
   }
   /*
   if(isDesktop.windows()){
    //descarga de sistema operativo
   }
   */
   /*Redirecciones*/
   if(isMobile.android()){
      // window.location="url de la pagina especial";
   }
   
}