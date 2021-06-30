console.log(selectedDirection);
const contactedItem = document.querySelectorAll('.top i');
const revertNav = document.querySelector('.goback');
// workSection 
// homeSection 
// aboutSection 
// contactSection
// skillsSection 

const untranslate = () => {
    switch (selectedDirection){
        case 'centerback':
            homeSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(0vh)';
            navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
            setTimeout(()=>{
                selectedDirection='center'
            },1500)
        break;
        case 'leftback':
            workSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(0vh)';
            navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
            setTimeout(()=>{
                selectedDirection='left'
            },1500)
        break;
        case 'rightback':
            contactSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(0vh)';
            navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
            setTimeout(()=>{
                selectedDirection='right'
            },1500)        
        break;
        case 'downback':
            aboutSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(0vh)';
            navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
            setTimeout(()=>{
                selectedDirection='down'
            },1500)            
        break;
        case 'upback':
            skillsSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(0vh)';
            navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
            setTimeout(()=>{
                selectedDirection='up'
            },1500)        
        break;
        default:
            return;
    }
}

const backTranslate = () =>{
    switch (selectedDirection){
        case 'center':
            homeSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(-60vh)';
            navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(0vh)';
            selectedDirection='centerback'

        break;
        case 'left':
            workSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(-60vh)';
            navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(0vh)';
            selectedDirection='leftback';
        break;
        case 'right':
            contactSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(-60vh)';
            navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(0vh)';
            selectedDirection='rightback'
        break;
        case 'down':
            aboutSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(-60vh)';
            navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(0vh)';
            selectedDirection='downback'
        break;
        case 'up':
            skillsSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(-60vh)';
            navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(0vh)';
            selectedDirection='upback';
        break;
        default:
            return;
    }
}

contactedItem.forEach(item=>{
    item.addEventListener('click',()=>{
        backTranslate();
    })
})

revertNav.addEventListener('click',()=>{
    untranslate();
})