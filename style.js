gsap.from("#nav,#page1",{
    opacity:0,
    scale:4,
    duration:3,
    delay:1
})

gsap.from("#page2-contaner",{
    scale:0,
    opacity:0,
    debugger:1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        end:"top 200",
        scrub:true
    }
})


gsap.from("#page2-nav",{
    opacity:0,
    x:400,
    duration:0.075,
    delay:1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        end:"top 125",
        scrub:true
    }
})

gsap.from("#page2-div-left",{
    opacity:0,
    x:-250,
    delay:1,
    duration:0.05,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        end:"top 100",
        scrub:3
    }
})

gsap.from("#img-video img,#img-video video",{
    scale:0,
    opacity:0,
    duration:0.05,
    delay:1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        end:"top 150",
        scrub:3
    }
})


gsap.from("#page3-contaner",{
    x:-400,
    duration:2,
    delay:1,
    opacity:0,
    backgroundColor:"#fff",
    scrollTrigger:{
        trigger:"#page3-contaner",
        scroller:"body",
        
    }
})

gsap.from("#head",{
    x:-200,
    duration:1,
    scrollTrigger:{
        trigger:"#head",
        scroller:"body",
        scrub:3
    }
})

gsap.from("#page3-div-left",{
    x:-400,
    duration:3,
    delay:1.5,
    scrollTrigger:{
        trigger:"#page3-div",
        scroller:"body",
        end:"top 500",
        scrub:3
    }
})


gsap.from("#page3-div-right",{
    y:-400,
    opacity:0,
    duration:3,
    delay:1.5,
    scrollTrigger:{
        trigger:"#page3-div",
        scroller:"body",
        end:"top 500",
        scrub:3
    }
})