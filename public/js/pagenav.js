const navigationIndicator = document.querySelector('.navigationContainer');
const contactedItem = document.querySelector('.top i');
const imgRotate = document.querySelectorAll('.imgs_container img');

const skillsSection = document.querySelector('.recent_works');
const homeSection = document.querySelector('.the_beginning');
const aboutSection = document.querySelector('.about_me');

const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;

let mainDirection = null;
let selectedDirection = null;

// do not change, good for now
const imageRotationFunc = () =>{
    switch (mainDirection){
        case 'left':
            imgRotate.forEach(img=>{
                img.style='transform: rotateX(0deg) rotateY(-30deg) translateZ(200px);'
            })
        break;
        case 'right':
            imgRotate.forEach(img=>{
                img.style='transform: rotateX(0deg) rotateY(30deg) translateZ(200px);'
            })   
        break;
        case 'center':
            imgRotate.forEach(img=>{
                img.style='transform: rotateX(0deg) rotateY(0deg) translateZ(200px);'
            }) 
        break;
        case 'down':
            imgRotate.forEach(img=>{
                img.style='transform: rotateX(-30deg) rotateY(0deg) translateZ(200px);'
            }) 
        break;
        case 'up':
            imgRotate.forEach(img=>{
                img.style='transform: rotateX(30deg) rotateY(0deg) translateZ(200px);'
            }) 
        break;
        }
}

// do not change, good for now
const displayDirection = (xAxis ,yAxis,pWidth) =>{
    if(xAxis < pWidth/3.5 && yAxis < pageHeight/1.25 && yAxis > pageHeight/4.5){
        document.querySelector('.fa-chevron-right').style='display :none;';
        document.querySelector('.fa-chevron-left').style='display :block;';
        document.querySelector('.fa-chevron-down').style='display :none;';
        document.querySelector('.fa-chevron-up').style='display :none;';

        mainDirection = 'left';
        imageRotationFunc();

    } else if(xAxis > pWidth/1.5  && yAxis < pageHeight/1.25 && yAxis > pageHeight/4.5) {
        document.querySelector('.fa-chevron-left').style='display :none;';
        document.querySelector('.fa-chevron-right').style='display :block;';    
        document.querySelector('.fa-chevron-down').style='display :none;';
        document.querySelector('.fa-chevron-up').style='display :none;';

        mainDirection = 'right';
        imageRotationFunc();

    } else if(xAxis > pWidth/3.5 && xAxis < pWidth/1.5  && yAxis < pageHeight/1.25 && yAxis > pageHeight/4.5){
        document.querySelector('.fa-chevron-left').style='display :block;';
        document.querySelector('.fa-chevron-right').style='display :block;';  
        document.querySelector('.fa-chevron-down').style='display :none;';
        document.querySelector('.fa-chevron-up').style='display :none;';
        mainDirection = 'center';
        imageRotationFunc();
    } else if(yAxis > pageHeight/1.25 && yAxis > pageHeight/4.5){
        document.querySelector('.fa-chevron-down').style='display :block;';
        document.querySelector('.fa-chevron-left').style='display :none;';
        document.querySelector('.fa-chevron-right').style='display :none;';  
        document.querySelector('.fa-chevron-up').style='display :none;';

        mainDirection = 'down';
        imageRotationFunc();
    } else if(yAxis < pageHeight/1.25 && yAxis < pageHeight/4.5){
        document.querySelector('.fa-chevron-down').style='display :none;';
        document.querySelector('.fa-chevron-left').style='display :none;';
        document.querySelector('.fa-chevron-right').style='display :none;';  
        document.querySelector('.fa-chevron-up').style='display :block;';

        mainDirection = 'up';
        imageRotationFunc();
    }
}

// do not change, good for now
const resetImageTrans = () => {
    imgRotate.forEach(img=>{
        img.style='transform: rotateX(0deg) rotateY(0deg) translateZ(0px);margin-top:initial;'
    }) 
}

// do not change, good for now
document.addEventListener('mousemove',(e)=>{
    console.log(mainDirection)
    displayDirection(e.pageX,e.pageY,pageWidth);
    navigationIndicator.style=`top:${e.pageY}px;left:${e.pageX}px;`;
})

// do not change, good for now
document.addEventListener('mouseleave',(e)=>{
    resetImageTrans();
})

document.addEventListener('click',()=>{
    selectedDirection = mainDirection;
    switch (mainDirection){
        case 'left':
            imgRotate.forEach(img=>{
                img.style='transform: rotateX(0deg) rotateY(-30deg) translateZ(300px);'
            })
            skillsSection.style='transform: rotateX(0deg);';
            homeSection.style='transform: rotateY(-90deg) translate(100%) translateZ(100px);'
        break;
        case 'right':
            imgRotate.forEach(img=>{
                img.style='transform: rotateX(0deg) rotateY(30deg) translateZ(300px);'
            })  
            skillsSection.style='transform: intital'
            homeSection.style='intial'

        break;
        case 'down':
            imgRotate.forEach(img=>{
                img.style='transform: rotateX(-30deg) rotateY(0deg) translateZ(300px);'
            })  
            aboutSection.style='transform: rotateX(0deg);';
            homeSection.style='transform: rotateX(-90deg) translate(0%,-210%) translateZ(0px);'

        break;
        case 'up':
            imgRotate.forEach(img=>{
                img.style='transform: rotateX(30deg) rotateY(0deg) translateZ(300px);'
            })  
            aboutSection.style='transform: intital'
            homeSection.style='intial'
        break;
        }

})
