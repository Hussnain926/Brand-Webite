gsap.from("nav a ,h4",{
    y:-50,
    duration:1,
    opacity:1, stagger:1,
    delay:0.5
    
    });
    
    
    gsap.from(".hero .in",{
        x:-180,
        opacity:1,
        stagger:1,
    
        scrollTrigger:{
    trigger:".hero .in",
    scroller:"body",
    start:"top -85%",
    end:"top -200%",
    // markers:true,
    scrub:1
        }
        
        });
    
        gsap.from(".hero p",{
            x:200,
            opacity:1,
            stagger:1,
        
            scrollTrigger:{
        trigger:".hero p",
        scroller:"body",
        start:"top -80%",
        end:"top -140%",
        markers:true,
        scrub:5,
            }
            
            });


            gsap.to(".right",{
              x:190,
          
              scrollTrigger:{
          trigger:".right",
          scroller:"body",
          start:"top -90%",
          end:"top -100%",
        //   markers:true,
          scrub:2,
              }
              
              });
              gsap.from(".left",{
                x:200,
            
                scrollTrigger:{
            trigger:".right",
            scroller:"body",
            start:"top 30%",
            end:"top 10%",
            // markers:true,
            scrub:2
                }
                
                });
gsap.to(".page2",{
  backgroundColor:"#ffffff",
  scrollTrigger:{
    trigger:".page2",
    scroller:"body",
    start:"top 10%",
    end:"top 60%",
    // markers:true,
    scrub:2
        }
});
gsap.from(".page2 .uper",{
    x:-100,
    opacity:1,
    stagger:1,

    scrollTrigger:{
trigger:".page2",
scroller:"body",
start:"top 40%",
end:"top 10%",
// markers:true,
scrub:2
    }

});

gsap.to(".page3 h6",{
    transform:"translateX(-90%)",
    fontWeight:100,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -200%",
       
        scrub:3,
        pin:true,
    }
});

gsap.to(".page3",{
    backgroundColor:"#0000000",
    scrollTrigger:{
      trigger:".page3",
      scroller:"body",
      start:"top 10%",
      end:"top 60%",
    //   markers:true,
      scrub:2
          }
  });

var tl = gsap.timeline({
    
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        start:"top -60%",
        end:"top 0%",
        scrub:2,
        // pin:true,

    }
});

gsap.to(".page2 video",{
    width:"50%",
    
    scrollTrigger:{
        trigger:".page2 video",
        scroller:"body",
        // markers:true,
        start:"top 130%",
        end:"top -100%",
        scrub:3,
    
    }});


gsap.to(".page5",{
    fontWeight:100,
    backgroundColor:"#000000",
    top:"0%",
    scrollTrigger:{
        trigger:".page5",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top -350%",
       pin:true,
        scrub:3,

    }
});








gsap.to(".page5 video",{
width:"120%",
delay:1,
bottom:"60%",
scrollTrigger:{
    trigger:".page5 video",
    scroller:"body",
    // markers:true,
    start:"top -80%",
    end:"top -150%",
    scrub:1,

}});


gsap.to(".page6",{
    backgroundColor:"white",
    scrollTrigger:{
        trigger:".page6",
        scroller:"body",
        // markers:true,
        start:"top 110%",
        end:"top 100%",
        scrub:2,
    }
});

gsap.to(".page1",{
    backgroundColor:"white",
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 100%",
        scrub:2,
    }
});




gsap.to(".page7",{
    // fontWeight:100,
    backgroundColor:"#000000",
    top:"0%",
    scrollTrigger:{
        trigger:".page7",
        scroller:"body",
        // markers:true,
        start:"top 130%",
        end:"top 90%",
    //    pin:true,
        scrub:3,

    }
});

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
main.addEventListener("mousemove",function(dets){
crsr.style.left = dets.x+ 2 +"px"
crsr.style.top = dets.y+ 10 +"px"
});
document.querySelector(".overlay").addEventListener("mousemove",function(dets){
document.querySelector("#elem1 img").style.scale = 1
document.querySelector("#elem1 img").style.opacity=1
document.querySelector("#elem1 img").style.left = (dets.x-260)+"px"
document.querySelector("#elem1 img").style.top = (dets.y-300)+"px"
})

document.querySelector("#overlay2").addEventListener("mousemove",function(dets){
    document.querySelector("#elem2 img").style.scale = 1
    document.querySelector("#elem2 img").style.opacity=1
    document.querySelector("#elem2 img").style.left = (dets.x-660)+"px"
    document.querySelector("#elem2 img").style.top = (dets.y-250)+"px"
    })
    document.querySelector("#overlay3").addEventListener("mousemove",function(dets){
        document.querySelector("#elem3 img").style.scale = 1
        document.querySelector("#elem3 img").style.opacity=1
        document.querySelector("#elem3 img").style.left = (dets.x-1100)+"px"
        document.querySelector("#elem3 img").style.top = (dets.y-300)+"px"
        })

// var crsr2 = document.querySelector(".cursor2")
// var main = document.querySelector(".main")
// main.addEventListener("mousemove",function(dets){
// crsr2.style.left = dets.x-50+"px"
// crsr2.style.top = dets.y-50+"px"
// });
        