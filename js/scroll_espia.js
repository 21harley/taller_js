const d=document;

export default function srcrollSpy(){
    const $setions=d.querySelectorAll("section[data-croll-spy]");
 /*las entries son las entradas que se ven 
 por pantalla
 */
 const cb=(entries)=>{
    //console.log("entries",entries);
    
    entries.forEach((entry)=>{
        //console.log("entry",entry);
        const id=entry.target.getAttribute("id");
        if(entry.isIntersecting){
            d.querySelector(`a[data-croll-spy][href="#${id}"]`).classList.add("active");
        }else{
            d.querySelector(`a[data-croll-spy][href="#${id}"]`).classList.remove("active");
        }
    });
 } 
 /* cb es un obj que relaciona lo que se ve, {opciones que trabajan con el obj al observer}*/  
 const observer=new IntersectionObserver(cb,{
     //rootMargin:"-150px",
     threshold:[0.5,0.75],
 });

 $setions.forEach(el=>observer.observe(el));
}