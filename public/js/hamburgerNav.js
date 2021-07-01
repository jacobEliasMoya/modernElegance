const contactedItem = document.querySelectorAll('.top i');
const revertNav = document.querySelector('.goback');
const navOptions = document.querySelectorAll('.navoption');

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

const goToSelection = (evnt) => {
    if(evnt.target.classList.contains('gohome')){
        switch(selectedDirection){
            case 'centerback':
            homeSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(0vh)';
            navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
            setTimeout(()=>{
                selectedDirection='center'
            },1500)
            break;
            case 'leftback':
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
                homeSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(0vh)';
                workSection.style = 'initial';
            setTimeout(()=>{
                selectedDirection='center'
            },1500)
            break;
            case 'rightback':
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
                homeSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(0vh)';
                contactSection.style = 'initial';
            setTimeout(()=>{
                selectedDirection='center'
            },1500)
            break;
            case 'upback':
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
                homeSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(0vh)';
                skillsSection.style = 'initial';
            setTimeout(()=>{
                selectedDirection='center'
            },1500)
            break;
            case 'downback':
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
                homeSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(0vh)';
                aboutSection.style = 'initial';
            setTimeout(()=>{
                selectedDirection='center'
            },1500)
            break;
            
        }
    }
    if(evnt.target.classList.contains('gowork')){
        switch(selectedDirection){
            case 'centerback':
                workSection.style='transform: rotateX(0deg);';
                homeSection.style='transform: rotateY(-90deg) translate(100%) translateZ(100px);'
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
            setTimeout(()=>{
                selectedDirection='left'
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
                homeSection.style='transform: rotateY(-90deg) translate(100%) translateZ(100px);'
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
                workSection.style='transform: rotateX(0deg);';
                contactSection.style = 'initial';
            setTimeout(()=>{
                selectedDirection='left'
            },1500)
            break;
            case 'upback':
                homeSection.style='transform: rotateY(-90deg) translate(100%) translateZ(100px);'
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
                workSection.style='transform: rotateX(0deg);';
                skillsSection.style = 'initial';
            setTimeout(()=>{
                selectedDirection='left'
            },1500)
            break;
            case 'downback':
                homeSection.style='transform: rotateY(-90deg) translate(100%) translateZ(100px);'
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
                workSection.style='transform: rotateX(0deg);';
                aboutSection.style = 'initial';
            setTimeout(()=>{
                selectedDirection='left'
            },1500)
            break;
            
        }
    }
    if(evnt.target.classList.contains('gocontact')){
        switch(selectedDirection){
            case 'centerback':
                contactSection.style='transform: rotateX(0deg);';
                homeSection.style='transform: rotateY(90deg) translate(-100%) translateZ(100px);'
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
            setTimeout(()=>{
                selectedDirection='right'
            },1500)
            break;
            case 'leftback':
                contactSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(0vh)';
                workSection.style='transform: intial;';
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
                homeSection.style='transform: rotateY(90deg) translate(-100%) translateZ(100px);'
                setTimeout(()=>{
                selectedDirection='right'
            },1500)
            break;
            case 'rightback':
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
                contactSection.style='transform: rotateX(0deg);';
            setTimeout(()=>{
                selectedDirection='right'
            },1500)
            break;
            case 'upback':
                homeSection.style='transform: rotateY(90deg) translate(-100%) translateZ(100px);'
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
                contactSection.style='transform: rotateX(0deg);';
                skillsSection.style = 'initial';
            setTimeout(()=>{
                selectedDirection='right'
            },1500)
            break;
            case 'downback':
                homeSection.style='transform: rotateY(90deg) translate(-100%) translateZ(100px);'
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
                contactSection.style='transform: rotateX(0deg);';
                aboutSection.style = 'initial';
            setTimeout(()=>{
                selectedDirection='right'
            },1500)
            break;
            
        }
    }
    if(evnt.target.classList.contains('goskills')){
        switch(selectedDirection){
            case 'centerback':
                skillsSection.style='transform: rotateX(0deg);';
                homeSection.style='transform: rotateX(90deg) translate(0%,210%) translateZ(0px);'
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
            setTimeout(()=>{
                selectedDirection='up'
            },1500)
            break;
            case 'leftback':
                skillsSection.style='transform: rotateX(0deg);';
                workSection.style='transform: intial;';
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
                homeSection.style='transform: rotateX(90deg) translate(0%,210%) translateZ(0px);'
                setTimeout(()=>{
                selectedDirection='up'
            },1500)
            break;
            case 'rightback':
                skillsSection.style='transform: rotateX(0deg);';
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
                contactSection.style='transform: intial;';
                homeSection.style='transform: rotateX(90deg) translate(0%,210%) translateZ(0px);'
                setTimeout(()=>{
                selectedDirection='up'
            },1500)
            break;
            case 'upback':
                homeSection.style='transform: rotateX(90deg) translate(0%,210%) translateZ(0px);'
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
                skillsSection.style = 'transform: rotateX(0deg)';
            setTimeout(()=>{
                selectedDirection='up'
            },1500)
            break;
            case 'downback':
                skillsSection.style='transform: rotateX(0deg);';
                homeSection.style='transform: rotateX(90deg) translate(0%,210%) translateZ(0px);'
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
                aboutSection.style = 'initial';
            setTimeout(()=>{
                selectedDirection='up'
            },1500)
            break;
            
        }
    }
    if(evnt.target.classList.contains('goabout')){
        switch(selectedDirection){
            case 'centerback':
                aboutSection.style='transform: rotateX(0deg);';
                homeSection.style='transform: rotateX(-90deg) translate(0%,-210%) translateZ(0px);'
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
            setTimeout(()=>{
                selectedDirection='down'
            },1500)
            break;
            case 'leftback':
                aboutSection.style='transform: rotateX(0deg);';
                workSection.style='transform: intial;';
                homeSection.style='transform: rotateX(-90deg) translate(0%,-210%) translateZ(0px);'
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
                setTimeout(()=>{
                selectedDirection='down'
            },1500)
            break;
            case 'rightback':
                aboutSection.style='transform: rotateX(0deg);';
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
                contactSection.style='transform: intial;';
                homeSection.style='transform: rotateX(-90deg) translate(0%,-210%) translateZ(0px);'
                setTimeout(()=>{
                selectedDirection='down'
            },1500)
            break;
            case 'upback':
                homeSection.style='transform: rotateX(-90deg) translate(0%,-210%) translateZ(0px);'
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
                aboutSection.style='transform: rotateX(0deg);';
                skillsSection.style='transform: rotateX(-90deg) translate(0%,-150%) translateZ(200px);';

            setTimeout(()=>{
                selectedDirection='down'
            },1500)
            break;
            case 'downback':
                navSection.style.transform= 'rotateX(0deg) rotateY(0deg) translateZ(100vh)';
                aboutSection.style = 'transform: rotateX(0deg)';
            setTimeout(()=>{
                selectedDirection='down'
            },1500)
            break;
            
        }
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

navOptions.forEach(option=>{
    option.addEventListener('click',(e)=>{
        goToSelection(e);
    })
})