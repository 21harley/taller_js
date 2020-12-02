const d=document;
const n=navigator;

export default function webCam(id){
  const $video=d.getElementById(id);
 
  if(n.mediaDevices){
    n.mediaDevices
    .getUserMedia({video:true,audio:false})
    .then((stream)=>{
        console.log(stream);
        $video.srcObject=stream;
        $video.play();
    })
    .catch((err)=>{
        $video.insertAdjacentHTML(
            "beforebegin",
            `<p>Sucedio El siguiente Error: <mark>${err}</mark></p>`
        );
    });
  }
  
}