function locomotiveScroll(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();    
}
function loadingAnimation(){
    var tl = gsap.timeline();

    tl.from(".line h1 , .line h2",{
        y:150,
        stagger:0.25,
        duration:0.6,
        delay:0.5
    });

    tl.from("#loader >h6",{
        opacity:0,
        y:10,
    });

    tl.from("#line1-part1,line h2",{
        opacity:0,
        onStart:function(){
            var h5timer = document.querySelector("#line1-part1 h5")
            var count=0;
            var interval = setInterval(()=>{
                if(count>=100){
                    h5timer.textContent=count;
                    count ++;
                    clearInterval(interval); 
                }
                else{
                    h5timer.textContent=count;
                    count ++;
                }
            },33);
        },
    });
    
    tl.to("#loader",{
        opacity:0,
        duration:0.4,
        delay:3.5,
    });
    
    tl.from("#page1",{
        opacity:0,
        y:1200,
        delay:0.2,
        duration:0.5,
        ease:Power4,
    });
    
    tl.to("#loader",{
        display:"none"
    });

    tl.from("nav",{
        opacity:0
    });

    tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
        y:150,
        stagger:0.2,
    });
}
function cursorAnimation(){
    document.addEventListener("mousemove",(dets)=>{
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y,
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4", {});
}
locomotiveScroll();
loadingAnimation();
cursorAnimation();
