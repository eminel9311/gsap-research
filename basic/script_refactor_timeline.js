const tl = gsap.timeline({
  defaults: {
    duration: 1
  }
})
tl
  .from(".header", { y: "-100%", ease: "bounce" })
  .from(".link", {opacity: 0, stagger: .5 })
  .from(".right", {x: "-100vw", ease: "power2.in"}, 1)
  .from(".left", {x: "-100%"}, '<.5')
  .to(".footer", {y: 0, ease: "elastic"})
  .fromTo(".button", {opacity: 0, scale: 0, rotation: 720}, {opacity: 1, scale: 2, rotation: 0})

const button = document.querySelector(".button")

button.addEventListener("click", () => {
  tl.timeScale(2) // tăng tốc độ animation lên gấp đôi
  tl.reverse()
})


