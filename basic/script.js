// Animatin bắt đầu từ giá trị phía trên(giá trị này được chỉ định là -100%) và di chuyển xuống dưới (0), tức là từ trạng thái được chỉ định đến trạng thái hiện tại.
gsap.from(".header", {
  duration: 1, // thời gian chuyển động 1 giây
  y: "-100%", // di chuyển lên trên 100% chiều cao của phần tử
  ease: "bounce", // hiệu ứng nảy
})

gsap.from(".link", {
  duration: 1, // thời gian chuyển động 1 giây
  opacity: 0, // độ mờ ban đầu
  delay: 1, // độ trễ 1 giây trước khi bắt đầu, bởi vì nếu không có độ trễ thì nó sẽ không thấy hiệu ứng, do nó xảy ra cùng lúc với hiệu ứng trên
  stagger: 0.5, // nếu có nhiều .link, hiệu ứng của mỗi phần tử sẽ bắt đầu cách nhau 0.5 giây — tạo cảm giác "xuất hiện dần dần" theo thứ tự.
})

gsap.from(".right", {
  duration: 2, // thời gian chuyển động 2 giây
  x: "-100vh", // bắt đầu từ bên trái và sẽ di chuyển sang phải
  delay: 1, // độ trễ 1 giây trước khi bắt đầu
  ease: "power2.inOut", // hiệu ứng chuyển động
})

gsap.from(".left", {
  duration: 1,
  delay: 1.5,
  x: "-100%"
})

// Animation bắt đầu từ giá trị hiện tại(theo css là phía dưới (100%)) và di chuyển về vị trí (0), tức là từ trạng thái hiện tại đến trạng thái được chỉ định.
gsap.to(".footer", {
  duration: 1,
  y: 0,
  ease: "elastic",
  delay: 2.5
})

gsap.fromTo(".button", {
  opacity: 0,
  scale: 0,
  rotation: 720, // xoay 720 độ
},
{
  duration: 1,
  delay: 3.5,
  opacity: 1,
  scale: 3,
  rotation: 0,
})