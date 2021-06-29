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
        case 'left':
            console.log(selectedDirection)
            break;
        case 'right':
            console.log(selectedDirection)
        break;
        case 'down':
            console.log(selectedDirection)
            break;
        case 'up':
            console.log(selectedDirection)
        break;
        default:
            return;
    }
}

const backTranslate = () =>{
    switch (selectedDirection){
        case 'center':
            homeSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(-100vh)';
            navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(0vh)';
            selectedDirection='centerback'

        break;
        case 'left':
            console.log(selectedDirection)
            break;
        case 'right':
            console.log(selectedDirection)
        break;
        case 'down':
            console.log(selectedDirection)
            break;
        case 'up':
            console.log(selectedDirection)
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