const ver_video = document.querySelector(".ico_play")
const abrir_video = document.querySelector(".capitulo1") 
const cerrar_video = document.querySelector(".cerrar")

const iframe = document.querySelector("#myVideo1")

    ver_video.addEventListener("click" ,()=>{
        abrir_video.classList.toggle("mostrar")
    })


    cerrar_video.addEventListener("click",()=>{
        abrir_video.classList.remove("mostrar")
        
        const ifr = iframe.src;
        iframe.src = ifr;
    })