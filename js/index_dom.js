import scrollTopButtom from "./bottom_Scroll.js";
import countdown from "./cuenta_regresiva.js";
import userDeviceinfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import responsiveMedia from "./objeto_reponsive.js";
import responsiveTester from "./prueba_responsive.js";
import {digitalClock,alarm} from "./reloj.js";
import {moveBall,shortcuts} from "./tecleado.js";
import darkTheme from "./tema_oscuro.js";

const d=document;
/*DOMContentLoaded es la primera carga del documento
mas rapido que load */
d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-alarma","#desactivar-reloj");
    alarm("../assets/alarma.mp3","#iniciar-alarma","#desactivar-alarma");
    countdown("countdown",
            "2021/09/24 1:00:00",
            "Feliz cumpleaños Harley 😃");
    scrollTopButtom(".scroll-top-btn"); 
    responsiveMedia("youtube",
                   "(min-width:1024px)",
                   `<a height="315" href="https://www.youtube.com/embed/2SetvwBV-SU" target="_blank"
                   rel="noopener">Ver Video</a>`,
                   `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia("gmaps",
                   "(min-width:1024px)",
                   `<a height="315" href="https://goo.gl/maps/eVnJb3oJAU1TGgy29" target="_blank"
                   rel="noopener">Ver Mapa</a>`,
                   `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.165766781433!2d-72.2007777495314!3d7.7939184948341405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666c579d18fb45%3A0x2bb6762c201eab42!2sUniversidad%20Nacional%20Experimental%20del%20T%C3%A1chira!5e0!3m2!1ses!2sve!4v1606847792173!5m2!1ses!2sve" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);
     responsiveTester("responsive-tester"); 
     userDeviceinfo("user-device");
     webCam("webcam");
     getGeolocation("geolocation");                                      
});

d.addEventListener("keydown",(e)=>{
shortcuts(e);
/*    mando el evento,la clase de la etiqueta,clase del contenedor*/
moveBall(e,".ball",".stage");
});

darkTheme(".dark-theme-btn","data-dark");
networkStatus();
