var tl=gsap.timeline();
tl
  .from("#textdiv h1",{
      onStart:function(){
          $('#textdiv h1').textillate({ in: { effect: 'fadeInLeft' } });
      }
  })
  .from("#part2",{
    x:-1700,
    duration:1,
  })
  .from("#smallimgdiv",{
    x:-1700,
    duration:1
  })
  .from("#nav",{
    opacity:0,
    duration:3
    })
    .from("#verticaltext",{
        opacity:0,
        duration:3,
        delay:-2
      })
      
  