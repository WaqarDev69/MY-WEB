const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim (){  
    var tl = gsap.timeline();

    tl.from("#navbar", {
        y: '10',
        opacity: 0,
        duration: 1.2,
        ease: Expo.easeInOut,
    })

    tl.to(".bounding-elem" , {
        y:0,
        ease:Expo.easeInOut,
        duration:1.5,
        stagger:0.2
    })

    tl.from("#hero-footer" ,{
        y:"-10",
        ease:Expo.easeInOut,
        duration:1.5,
        delay:-1,
        opacity:0

    })
}
function circleMouseFollower(){
    window.addEventListener('mousemove' , function(dets){
        document.querySelector("#mini-circle").style.transform =`translate(${dets.clientX}px , ${dets.clientY}px)`;
    })
}

circleMouseFollower();
firstPageAnim();