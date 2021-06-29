const projectLinks = document.querySelectorAll('.middle a');
let selectedLink = '';

const linkrotate = () =>{
    if(selectedLink.classList.contains('gameprev')){
        document.querySelector('.varepprev').style= 'transform: translate(90%,50%) rotateY(-40deg) rotateX(30deg);'
    }
    if(selectedLink.classList.contains('intsite')){
        document.querySelector('.varepprev').style= 'transform: translate(90%,50%) rotateY(-40deg) rotateX(10deg);'
    }
    if(selectedLink.classList.contains('intsite')){
        document.querySelector('.varepprev').style= 'transform: translate(90%,50%) rotateY(-40deg) rotateX(30deg);'
    }
    if(selectedLink.classList.contains('intsite')){
        document.querySelector('.varepprev').style= 'transform: translate(90%,50%) rotateY(-40deg) rotateX(30deg);'
    }
}


projectLinks.forEach(link=>{
    link.addEventListener('mouseover',(e)=>{
        selectedLink = link;
        linkrotate();
    })
})

projectLinks.forEach(link=>{
    link.addEventListener('mouseleave',()=>{
        document.querySelector('.varepprev').style= 'transform: translate(90%,50%) rotateY(0deg) rotateX(0deg);'

    })
})