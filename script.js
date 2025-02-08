function locomotiveScroll() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

function loadingAnimation() {
  var tl = gsap.timeline();

  tl.from(".line h1 , .line h2", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from("#loader >h6", {
    opacity: 0,
    y: 10,
  });

  tl.from("#line1-part1,line h2", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var count = 0;
      var interval = setInterval(() => {
        if (count >= 100) {
          h5timer.textContent = count;
          count++;
          clearInterval(interval);
        } else {
          h5timer.textContent = count;
          count++;
        }
      }, 33);
    },
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 3.5,
  });

  tl.from("#page1", {
    opacity: 0,
    y: 1200,
    delay: 0.2,
    duration: 0.5,
    ease: Power4,
  });

  tl.to("#loader", {
    display: "none",
  });

  tl.from("nav", {
    opacity: 0,
  });

  tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero3 span ,#hero4 h1", {
    y: 150,
    stagger: 0.2,
  });
}

function cursorAnimation() {
  Shery.mouseFollower(".mousefollower", {
    type: 1,
    duration: 0.5,
    easing: "cubic-bezier(0.23, 1, 0.320, 1)",
  });

  Shery.makeMagnet("#nav-part2 h4");
}

function sheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 6,
    gooey: true,
    config: {
      noiseDetail: { value: 6.11, range: [0, 100] },
      distortionAmount: { value: 2.9, range: [0, 10] },
      scale: { value: 59.54, range: [0, 100] },
      speed: { value: 0.58, range: [0, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.8333333134651184 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.27, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.84, range: [0, 10] },
      metaball: { value: 0.44, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.38, range: [0, 2] },
      noise_scale: { value: 8.4, range: [0, 100] },
    },
  });
}

function page2Animation() {
  var videoC = document.querySelector("#video-container");
  var videoImage = document.querySelector("#video-container img");
  var videoVideo = document.querySelector("#video-container video");

  videoC.addEventListener("mouseenter", function () {
    gsap.to(".mousefollower", {
      opacity: 0,
    });
  });

  videoC.addEventListener("mouseleave", function () {
    gsap.to(".mousefollower", {
      opacity: 1,
    });

    gsap.to("#video-cursor", {
      left: "70%",
      top: "-15%",
    });
  });

  var flag = 0;

  videoC.addEventListener("click", function () {
    if (flag == 0) {
      gsap.to(videoVideo, {
        opacity: 1,
      });

      gsap.to(videoImage, {
        opacity: 0,
      });

      gsap.to("#video-cursor", {
        scale: 0.8,
      });

      document.querySelector("#video-cursor").innerHTML =
        '<i class="ri-pause-line"></i>';
      videoVideo.play();
      flag = 1;
    } else {
      gsap.to(videoVideo, {
        opacity: 0,
      });

      gsap.to(videoImage, {
        opacity: 1,
      });

      gsap.to("#video-cursor", {
        scale: 1,
      });

      document.querySelector("#video-cursor").innerHTML =
        '<i class="ri-play-fill"></i>';
      videoVideo.pause();
      flag = 0;
    }
  });

  videoC.addEventListener("mousemove", function (dets) {
    gsap.to("#video-cursor", {
      left: dets.x - 555,
      top: dets.y - 300,
    });
  });
}


document.addEventListener("mousemove", function(dets) {
  gsap.to("#flag", {
    left: dets.x ,
    top: dets.y,
    transform: "translate(-50%, -50%)",
  });
});

document.querySelector("#hero3").addEventListener("mouseenter", function() {
  gsap.to("#flag", {
    opacity: 1,
  });
});

document.querySelector("#hero3").addEventListener("mouseleave", function() {
  gsap.to("#flag", {
    opacity: 0,
  });
});

locomotiveScroll();
loadingAnimation();
cursorAnimation();
sheryAnimation();
page2Animation();


