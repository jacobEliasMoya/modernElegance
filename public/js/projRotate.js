const projectLinks = document.querySelectorAll('.middle a');
let selectedLink = '';

const linkrotate = () =>{
    if(selectedLink.classList.contains('gameprev')){
        document.querySelector('.varepprev').style= 'transform: translate(90%,50%) rotateY(-40deg) rotateX(30deg);'
        document.querySelector('.paintedsite').style= 'transform: translate(-190%,50%) rotateY(40deg) rotateX(30deg);'
        document.querySelector('.intsite').style= 'transform:translate(-190%,-150%) rotateY(40deg) rotateX(-5deg);'
        document.querySelector('.reactsite').style= 'transform:translate(90%,-150%) rotateY(-40deg) rotateX(-5deg);'

    }
    if(selectedLink.classList.contains('intsite')){
        document.querySelector('.varepprev').style= 'transform: translate(90%,50%) rotateY(-70deg) rotateX(30deg);'
        document.querySelector('.paintedsite').style= 'transform: translate(-190%,50%) rotateY(20deg) rotateX(30deg);'
        document.querySelector('.reactsite').style= 'transform:translate(90%,-150%) rotateY(-70deg) rotateX(0deg);'
        document.querySelector('.gameprev').style= 'transform:translate(-50%,-150%) rotateY(-40deg) rotateX(-5deg);'

    }
    if(selectedLink.classList.contains('paintedsite')){
        document.querySelector('.varepprev').style= 'transform: translate(90%,50%) rotateY(-70deg) rotateX(0deg);'
        document.querySelector('.intsite').style= 'transform:translate(-190%,-150%) rotateX(-45deg);'
        document.querySelector('.reactsite').style= 'transform:translate(90%,-150%) rotateY(-70deg) rotateX(-30deg);'
        document.querySelector('.gameprev').style= 'transform:translate(-50%,-150%) rotateY(-50deg) rotateX(-50deg);'

    }
    if(selectedLink.classList.contains('reactsite')){
        document.querySelector('.varepprev').style= 'transform: translate(90%,50%) rotateY(-20deg) rotateX(30deg);'
        document.querySelector('.paintedsite').style= 'transform: translate(-190%,50%) rotateY(70deg) rotateX(30deg);'
        document.querySelector('.intsite').style= 'transform:translate(-190%,-150%) rotateY(70deg) rotateX(0deg);'
        document.querySelector('.gameprev').style= 'transform:translate(-50%,-150%) rotateY(40deg) rotateX(-5deg);'


    }    
    if(selectedLink.classList.contains('varepprev')){
        document.querySelector('.paintedsite').style= 'transform: translate(-190%,50%) rotateY(70deg) rotateX(0deg);'
        document.querySelector('.intsite').style= 'transform:translate(-190%,-150%) rotateY(70deg) rotateX(-30deg);'
        document.querySelector('.reactsite').style= 'transform:translate(90%,-150%) rotateX(-45deg);'
        document.querySelector('.gameprev').style= 'transform:translate(-50%,-150%) rotateY(50deg) rotateX(-50deg);'
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
        document.querySelector('.varepprev').style= 'transform: translate(90%,45%) rotateY(0deg) rotateX(0deg);'
        document.querySelector('.paintedsite').style= 'transform: translate(-190%,45%) rotateY(0deg) rotateX(0deg);'
        document.querySelector('.intsite').style= 'transform:translate(-190%,-150%) rotateY(0deg) rotateX(0deg);'
        document.querySelector('.reactsite').style= 'transform:translate(90%,-150%) rotateY(0deg) rotateX(0deg);'
        document.querySelector('.gameprev').style= 'transform:translate(-50%,-150%) rotateY(0deg) rotateX(0deg);'
    })
})