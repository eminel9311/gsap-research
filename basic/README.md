## 🔁 So sánh `gsap.from()` vs `gsap.to()`

| Thuộc tính     | `gsap.from()`                                                                 | `gsap.to()`                                                                  |
|----------------|-------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| **Ý nghĩa**     | Animation bắt đầu từ trạng thái được chỉ định → đến trạng thái hiện tại     | Animation bắt đầu từ trạng thái hiện tại → đến trạng thái được chỉ định     |
| **Dùng khi**    | Muốn phần tử “xuất hiện” từ trạng thái ẩn, lệch vị trí, mờ dần, v.v.        | Muốn phần tử “di chuyển” hoặc thay đổi từ vị trí hiện tại                    |
| **Ví dụ**       | `gsap.from(".box", { y: 100, opacity: 0 })`<br>→ Xuất hiện từ dưới lên, từ mờ đến rõ | `gsap.to(".box", { y: 100, opacity: 0 })`<br>→ Trượt xuống dưới và mờ dần    |


## 🎯 `ease` trong GSAP là gì?

Trong GSAP (GreenSock Animation Platform), thuộc tính "eases" hay "easing functions" đóng vai trò quan trọng trong việc tạo ra các animation chuyên nghiệp và tự nhiên. Các hàm này xác định tốc độ thay đổi của một animation theo thời gian, giúp điều chỉnh cách animation diễn ra - từ chậm đến nhanh, từ êm dịu đến dội mạnh, hoặc bất kỳ kiểu chuyển động nào khác.

---

### 💡 Một số giá trị `ease` phổ biến:

| Giá trị `ease`     | Ý nghĩa |
|--------------------|--------|
| `power1.in`        | Chậm → Nhanh (bắt đầu chậm, tăng tốc dần) |
| `power1.out`       | Nhanh → Chậm (bắt đầu nhanh, chậm lại dần) |
| `power1.inOut`     | Chậm → Nhanh → Chậm (chuyển động mượt cả hai đầu) |
| `none`             | Tốc độ đều đều (linear) |
| `bounce.out`       | Kết thúc với hiệu ứng nảy như quả bóng |
| `elastic.out`      | Bật ra và giật nhẹ như lò xo |

---

### Đặc biệt
- **Back**: Animation đi quá mục tiêu rồi quay lại, tạo cảm giác đàn hồi
- **Elastic**: Hiệu ứng dao động như dây cao su bị kéo
- **Bounce**: Hiệu ứng nảy lên như quả bóng chạm mặt đất
- **Rough**: Tạo hiệu ứng rung lắc, không mượt
- **SlowMo**: Cho phép điều chỉnh tốc độ giữa các phần của animation
- **Stepped**: Chia animation thành các bước rời rạc
- **Circ**: Dựa trên hàm lượng giác, cho chuyển động tròn
- **Expo**: Thay đổi cấp số nhân, rất mạnh ở cuối
- **Sine**: Dựa trên hàm sin, cho chuyển động mượt mà và nhẹ nhàng
### 📦 Ví dụ sử dụng:

```js
gsap.from(".box", {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: "power2.out"
});
