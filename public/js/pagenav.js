const navigationIndicator = document.querySelector('.navigationContainer');
const pageWidth = window.innerWidth;
let mainDirection = null;
const contactedItem = document.querySelector('.top i');

const imgRotate = document.querySelectorAll('.imgs_container img');

const imageRotationFunc = () =>{
    switch (mainDirection){
        case 'left':
            imgRotate.forEach(img=>{
                img.style='transform: rotateX(0deg) rotateY(-30deg) translateZ(200px);'
            })
        break;
        default:
            imgRotate.forEach(img=>{
                img.style='transform: rotateX(0deg) rotateY(30deg) translateZ(200px);'
            })    
        }
}

const displayDirection = (xAxis,pWidth) =>{
    if(xAxis < pWidth/2){
        document.querySelector('.fa-chevron-right').style='display :none;';
        document.querySelector('.fa-chevron-left').style='display :block;';
        mainDirection = 'left';
        imageRotationFunc();

    } else {
        document.querySelector('.fa-chevron-left').style='display :none;';
        document.querySelector('.fa-chevron-right').style='display :block;';    
        mainDirection = 'right';
        imageRotationFunc();

    }
}

const contactItem = (div) => {
    div.style='color:#3700FF;'
}

document.addEventListener('mousemove',(e)=>{
    displayDirection(e.pageX,pageWidth);
    navigationIndicator.style=`top:${e.pageY}px;left:${e.pageX}px;`;
})

document.addEventListener('mouseleave',(e)=>{
    imgRotate.forEach(img=>{
        img.style='transform: rotateX(0deg) rotateY(0deg) translateZ(0px);margin-top:initial;'
    }) 
})

document.addEventListener('mousedown',()=>{
    switch (mainDirection){
        case 'left':
            imgRotate.forEach(img=>{
                img.style='transform: rotateX(0deg) rotateY(-30deg) translateZ(300px);'
            })
        break;
        default:
            imgRotate.forEach(img=>{
                img.style='transform: rotateX(0deg) rotateY(30deg) translateZ(300px);'
            })    
        }

})
document.addEventListener('mouseup',()=>{
    switch (mainDirection){
        case 'left':
            imgRotate.forEach(img=>{
                img.style='transform: rotateX(0deg) rotateY(-30deg) translateZ(200px);'
            })
        break;
        default:
            imgRotate.forEach(img=>{
                img.style='transform: rotateX(0deg) rotateY(30deg) translateZ(200px);'
            })    
        }

})