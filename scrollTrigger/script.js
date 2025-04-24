gsap.registerPlugin(ScrollTrigger);

const coolVideo = document.querySelector("video");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".video",
    start: "top top",
    end: "bottom+=200% bottom",
    scrub: 1,
    markers: true,
  },
});

coolVideo.onloadedmetadata = function () {
  console.log("Video loaded. Duration: ", coolVideo.duration);

  tl.to(coolVideo, { currentTime: coolVideo.duration });
};

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

if (isTouchDevice()) {
  coolVideo.play();
  coolVideo.pause();
}
