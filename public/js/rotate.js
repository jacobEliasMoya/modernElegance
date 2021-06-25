let imgs = document.querySelectorAll('.imgs_container img');
let imgsCont = document.querySelector('.imgs_container');
let imgsContBox = imgsCont.getBoundingClientRect();

const rotateWithMouse = (moveEvent) => {
    imgs.forEach(img=>{
        img.style = `transform: rotateX(${moveEvent.pageX}deg) rotateY(${moveEvent.pageY}deg) translateZ(0px)`;
        console.log(imgsContBox.bottom-moveEvent.pageX)
    })
}

const resetLogoRotate = () => {
    imgs.forEach(img=>{
        img.style = `transform: rotateX(0deg) rotateY(0deg) translateZ(0px)`;
    })
}

imgsCont.addEventListener('mousemove',(e)=>{
    rotateWithMouse(e);
})

imgsCont.addEventListener('mouseleave',(e)=>{
    resetLogoRotate();
})