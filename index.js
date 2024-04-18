function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".god-father"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".god-father" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".god-father", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".god-father").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init();
let tl = gsap.timeline();
gsap.from(".logo-1" ,{
    y : -60,
    opacity : 0,
    // scale : 0,
    duration : 1
})

tl.from(".logo-2" , {
    y : 60,
    opacity : 0,
    duration : 1
})
tl.from(".nav-items li" , {
    y : -80,
    duration : 1,
    stagger : .2
})
// tl.from(".heart" ,{
//     scale : 0,
//     opacity : 0,
//     duration : .5
// })
tl.from(".everyone",{
    y:20,
    duration : .5,
    opacity : 0

})

gsap.from(".one" , {
    delay : 2,
    x : -20,
    duration : 1,
    opacity : 0
})
tl.from(".text" , {
    // scale : 0,
    opacity : 0,
    duration : .5,
    y : 10
})
tl.from(".sub-b" , {
    opacity : 0,
    duration : 1,
    scale : 0.7
})
tl.from(".learn" , {
    y : 120,
    duration : .5,
    opacity :0
})
tl.from(".contact" , {
    x : 120,
    duration : .5,
    opacity :0
})
gsap.from(".data-box .box-1 p" , {
    y : 70,
    duration : 1,
    opacity : 0,
    stagger : .5,
    scrollTrigger : {
        trigger : ".data-box .box-1 p",
        scroller : ".god-father",
        // markers : true,
        start : "top 85%",
        end : "top 60%",
        scrub : 3
    }
})
gsap.from(".about-icons i" , {
    y : 30,
    duration : .3,
    stagger : .5,
    opacity : 0,
    scrollTrigger : {
        trigger : ".about-icons i",
        scroller : ".god-father",
        // markers : true,
        start : "top 95%",
        end : "top 90%",
        scrub : 3
    }
})
gsap.from(".text-data" , {
    
    duration : 1,
    opacity : 0,
    // scale:.5,
    x : 80,
    stagger : .8,
    scrollTrigger : {
        trigger : ".text-data",
        scroller : ".god-father",
        // markers : true,
        start : "top 80%",
        end : "top 60%",
        scrub : 5
    }
})
gsap.from(".second-text p" , {
    y : 80,
    stagger : .5,
    opacity : 0,
    
    scrollTrigger : {
        trigger : ".second-text p",
        scroller : ".god-father",
        // markers : true,
        start : "top 80%",
        end : "top 42%",
        scrub : 5
    }
    
})
