# 🎬 Giới thiệu về GSAP (GreenSock Animation Platform)

**Trình bày:** Bùi Hồng Quân  
**Phòng:** CNĐP  

---

## 🧭 Mục lục
1. Giới thiệu tổng quan về GSAP
2. Cài đặt và thiết lập
3. Các phương thức animation cơ bản
4. Timeline và cách điều khiển chuỗi animations
5. Các plugin phổ biến (ScrollTrigger, MotionPath)
6. Techniques nâng cao (stagger, responsive)
7. Best practices & tối ưu hiệu năng
8. Ví dụ thực tế và tài liệu học tập

---

## 🟢 Giới thiệu tổng quan về GSAP

GSAP (GreenSock Animation Platform) là thư viện JavaScript mạnh mẽ dùng để tạo hiệu ứng hoạt hình mượt mà, linh hoạt trên web.  
Nó cho phép tạo chuyển động phức tạp, đồng bộ hóa dễ dàng và tối ưu hiệu suất vượt trội.

---

## 📦 Cài đặt và thiết lập

### Qua CDN:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
```

### Qua NPM:
```bash
npm install gsap
```

---

## 📥 Các phương thức animation cơ bản

- `gsap.to()`
- `gsap.from()`
- `gsap.fromTo()`

**Các thuộc tính thường dùng:**
- **Chuyển động:** `x`, `y`, `rotation`, `scale`, `skew`
- **Hiển thị:** `opacity`, `visibility`
- **Màu sắc:** `backgroundColor`, `color`, `fill`, `stroke`
- **Kích thước:** `width`, `height`
- **3D transforms:** `rotationX`, `rotationY`, `perspective`
- **SVG:** `strokeDasharray`, `strokeDashoffset`, `fillOpacity`

---

## ⏱ Timing & Ease Functions

- `duration`: thời gian animation
- `delay`: độ trễ
- `ease`: hàm easing tạo hiệu ứng chuyển động mượt

---

## 🎛 Kiểm soát Animation

**Callbacks hỗ trợ:**
- `onStart`: animation bắt đầu
- `onUpdate`: đang chạy
- `onComplete`: hoàn tất

---

## 🔄 Timeline và chuỗi animations

Timeline giúp:
- Gộp nhiều animation tuần tự hoặc song song
- Dễ kiểm soát: dừng, tua, lặp
- Quản lý hiệu ứng phức tạp

**Các thành phần:**
- Position Parameters
- Timeline Controls

---

## 🎯 Plugins phổ biến

- `ScrollTrigger`: trigger animation khi scroll đến vùng nhìn
- `MotionPath`: di chuyển theo quỹ đạo
- `Draggable`, `MorphSVG`, v.v.

---

## 🕒 Techniques nâng cao

- **Stagger:** hiệu ứng giật cấp cho nhiều phần tử
- **Responsive animations:** animation phù hợp với từng kích thước màn hình
- **Random values & functions**
- **Đồng bộ với Video/Audio**
- **Website reveal animation**

---

## ⚙️ Hiệu năng & Best Practices

- Ưu tiên `transform`, `opacity`
- Tránh animate `width`, `height`, `top`, `left`
- Dùng selector đơn giản: ID, class
- `will-change` có chọn lọc
- Tối ưu `stagger` khi dùng nhiều phần tử

---

## 📚 Tài liệu học GSAP

- [📘 Official Docs](https://greensock.com/docs)
- [🧾 GSAP 3 Cheat Sheet](https://greensock.com/cheatsheet)
- [💬 GSAP Forums](https://greensock.com/forums)
- [🧪 CodePen Examples](https://codepen.io/GreenSock)

---

**Chúc bạn học tốt và sáng tạo cùng GSAP!** 🚀
