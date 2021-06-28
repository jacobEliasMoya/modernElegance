const navigationIndicator = document.querySelector('.navigationContainer');
const contactedItem = document.querySelectorAll('.top i');
const imgRotate = document.querySelectorAll('.imgs_container img');

const skillsSection = document.querySelector('.recent_works');
const homeSection = document.querySelector('.the_beginning');
const aboutSection = document.querySelector('.about_me');
const contactSection = document.querySelector('.contact_me');

const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;

let mainDirection = null;
let selectedDirection = 'center';


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
        mainDirection = 'up';
        if(selectedDirection==='center'){
            document.querySelector('.fa-chevron-left').style='display :block;';
            document.querySelector('.fa-chevron-right').style='display :block;';  
            document.querySelector('.fa-chevron-down').style='display :none;';
            document.querySelector('.fa-chevron-up').style='display :none;';
        } else {
            document.querySelector('.fa-chevron-down').style='display :none;';
            document.querySelector('.fa-chevron-left').style='display :none;';
            document.querySelector('.fa-chevron-right').style='display :none;';  
            document.querySelector('.fa-chevron-up').style='display :block;';
        }

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
    displayDirection(e.pageX,e.pageY,pageWidth);
    navigationIndicator.style=`top:${e.pageY}px;left:${e.pageX}px;`;
})

// do not change, good for now
document.addEventListener('mouseleave',(e)=>{
    resetImageTrans();
})

document.addEventListener('click',()=>{
    //if location is not centered
    //if selected location is left
    //do x,y,z
    switch (selectedDirection){
        case 'center':
            switch (mainDirection){
                case 'left':
                    selectedDirection = mainDirection;
                    imgRotate.forEach(img=>{
                        img.style='transform: rotateX(0deg) rotateY(-30deg) translateZ(300px);'
                    })
                    skillsSection.style='transform: rotateX(0deg);';
                    homeSection.style='transform: rotateY(-90deg) translate(100%) translateZ(100px);'
                break;
                case 'right':
                    selectedDirection = mainDirection;
                    imgRotate.forEach(img=>{
                        img.style='transform: rotateX(0deg) rotateY(30deg) translateZ(300px);'
                    })  
                    contactSection.style='transform: rotateX(0deg);';
                    homeSection.style='transform: rotateY(90deg) translate(-100%) translateZ(100px);'
        
                break;
                case 'down':
                    selectedDirection = mainDirection;
                    imgRotate.forEach(img=>{
                        img.style='transform: rotateX(-30deg) rotateY(0deg) translateZ(300px);'
                    })  
                    aboutSection.style='transform: rotateX(0deg);';
                    homeSection.style='transform: rotateX(-90deg) translate(0%,-210%) translateZ(0px);'
        
                break;
                default:
                    return;
            }

        break;
        case 'left':{
            switch (mainDirection){
                case 'right':
                    imgRotate.forEach(img=>{
                        img.style='transform: rotateX(0deg) rotateY(30deg) translateZ(300px);'
                    })  
                    skillsSection.style='transform: intial;';
                    homeSection.style='initial';
                    selectedDirection = 'center';

                break;
                default:
                    return;
            }

            break;
        }
        case 'right':{
            switch (mainDirection){
                case 'left':
                    imgRotate.forEach(img=>{
                        img.style='transform: rotateX(0deg) rotateY(30deg) translateZ(300px);'
                    })  
                    contactSection.style='transform: intial;';
                    homeSection.style='initial';
                    selectedDirection = 'center';
                break;
            }
            break;

        }
        case 'down':{
            switch (mainDirection){
                case 'up':
                    imgRotate.forEach(img=>{
                        img.style='transform: rotateX(0deg) rotateY(30deg) translateZ(300px);'
                    })  
                    aboutSection.style='transform: intial;';
                    homeSection.style='initial';
                    selectedDirection = 'center';

                break;
            }
            break;

        }
        default:
            return;
    }
})
