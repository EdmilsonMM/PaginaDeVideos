const ver_video3 = document.querySelector(".ico_play3")
const capitulo3= document.querySelector(".capitulo3")
const cerrar_video3 = document.querySelector(".cerrar3")

const iframe3 = document.querySelector("#myVideo3")

    ver_video3.addEventListener("click" ,()=>{
        capitulo3.classList.toggle("mostrar3")
    })
    
    cerrar_video3.addEventListener("click",()=>{
        capitulo3.classList.remove("mostrar3")

        const ifr = iframe3.src;
        iframe3.src = ifr;

    })