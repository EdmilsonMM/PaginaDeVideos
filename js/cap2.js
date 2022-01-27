const ver_video2 = document.querySelector(".ico_play2")
const capitulo2 = document.querySelector(".capitulo2")
const cerrar_video2 = document.querySelector(".cerrar2")

const iframe2 = document.querySelector("#myVideo2")


    ver_video2.addEventListener("click" ,()=>{
        capitulo2.classList.toggle("mostrar2")
    })
    
    cerrar_video2.addEventListener("click",()=>{
        capitulo2.classList.remove("mostrar2")

        const ifr = iframe2.src;
        iframe2.src = ifr;

    })