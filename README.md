# Elmall · Bàn làm việc kinh doanh

Trang làm việc cho đội sale Elmall:
- Báo giá theo mẫu Elmall, xuất PDF, tự gắn ảnh từ catalog hãng
- Kệ sản phẩm lấy từ báo giá nhà cung cấp
- Theo dõi đơn hàng 6 bước
- Chăm sóc khách hàng, dự án với đồng nghiệp, đào tạo nhân viên, nhắc việc

Trang web chạy bằng **GitHub Pages** (tự cập nhật mỗi lần push lên `main`). Đăng nhập Google và dữ liệu dùng **Firebase**, phân quyền quản lý / nhân viên.
Link: https://kd10-jpg.github.io/elmall-workspace/
Cài đặt lần đầu: xem [HUONG-DAN-CAI-DAT.md](HUONG-DAN-CAI-DAT.md).

## Cấu trúc
- `public/` – trang web (GitHub Pages)
  - `index.html` – giao diện và logic
  - `config.js` – cấu hình dự án Firebase và email quản lý
  - `assets/`, `catalog/` – logo, dải logo hãng, ảnh sản phẩm tách từ catalog
  - `vendor/` – thư viện chạy kèm (Firebase, SheetJS, html2canvas, jsPDF)
- `firestore.rules` – luật bảo mật Firestore (dán vào Firebase Console → Firestore → Rules)

Repo công khai chỉ chứa code. Giá nhập, % lãi, dữ liệu khách hàng nằm trong Firebase (có luật bảo mật) – **không bao giờ** commit file bảng giá NCC hay gói dữ liệu `.json` vào repo.
