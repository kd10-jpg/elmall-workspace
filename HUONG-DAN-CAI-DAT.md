# Hướng dẫn đưa trang Elmall lên mạng (làm 1 lần)

- **GitHub Pages** chạy trang web. Link: `https://kd10-jpg.github.io/elmall-workspace/`
- **Firebase** lo phần đăng nhập Google và lưu dữ liệu: khách hàng, đơn hàng, kệ sản phẩm, giá nhập.

Repo để **Public** cũng không sao: trong repo chỉ có code, không có giá nhập hay dữ liệu khách.

## Phần 1 – GitHub (2 phút)
1. Mở repo `kd10-jpg/elmall-workspace`, vào **Settings → General**, kéo xuống cuối trang.
   Bấm **Change visibility → Change to public** và xác nhận.
2. Vào **Settings → Pages**. Ở mục **Build and deployment → Source**, chọn **GitHub Actions**.
3. Mở tab **Actions**. Nếu có lượt chạy "Đưa trang lên GitHub Pages" báo lỗi, bấm vào lượt đó rồi bấm **Re-run all jobs**.

## Phần 2 – Firebase (10 phút)
1. Mở https://console.firebase.google.com, đăng nhập bằng **tài khoản Google của quản lý**.
   Bấm **Create a project**, đặt tên `elmall-workspace`, tắt Google Analytics, rồi bấm **Create**.
2. **Build → Authentication → Get started → Sign-in method → Google → Enable**. Chọn email hỗ trợ rồi bấm **Save**.
3. Cũng trong **Authentication**, mở tab **Settings → Authorized domains → Add domain**, nhập `kd10-jpg.github.io` rồi bấm **Add**.
4. **Build → Firestore Database → Create database**.
   Location chọn **asia-southeast1 (Singapore)**, chọn **Start in production mode**, rồi bấm **Create**.
5. Lấy cấu hình web: **⚙ Project settings → General → Your apps → biểu tượng </> (Web)**.
   Đặt tên `elmall`, bấm **Register app**, rồi copy đoạn `const firebaseConfig = {...}` **gửi cho Claude** kèm **email Google của quản lý**.
6. Sau khi Claude gửi lại đoạn luật bảo mật: vào **Firestore Database → tab Rules**, xoá hết nội dung cũ, dán đoạn mới vào, rồi bấm **Publish**.

## Phần 3 – Dùng lần đầu
1. Mở `https://kd10-jpg.github.io/elmall-workspace/`, đăng nhập Google bằng email quản lý.
2. Vào **Cài đặt → Hồ sơ của tôi**, ghi tên hiển thị (ví dụ "Mr. Tuệ") và số mobile, rồi bấm **Lưu**.
3. Vào **Nhập báo giá NCC**, chọn file `elmall-goi-du-lieu-ke-san-pham.json` (Claude gửi riêng). File này nạp đủ 2.164 sản phẩm và % lãi theo hãng.
   ⚠️ File có giá nhập. Anh tự giữ, **không đưa lên GitHub**, không gửi cho nhân viên.
4. Vào **Nhân viên → + Thêm nhân viên**, nhập email Google của từng người. Họ mở cùng link và đăng nhập Google là dùng được.

## Phân quyền
| | Quản lý | Nhân viên |
|---|---|---|
| Giá nhập, % lãi, nhà cung cấp, lãi dự kiến | ✅ | ❌ chỉ thấy giá bán |
| Khách hàng, báo giá, đơn hàng | Tất cả (nút "Cả nhóm") | Chỉ của mình |
| Nhập bảng giá NCC, sửa kệ, cài đặt % lãi | ✅ | ❌ |
| Lịch đào tạo | Tạo, gửi cho nhân viên | Xem lịch được gửi |
| Quản lý nhân viên | ✅ | ❌ |

## Cập nhật bảng giá hằng tuần
Vào **Nhập báo giá NCC** rồi thả file Excel vào:
- Bảng giá **Rạng Đông, MPE, Panasonic**: trang tự đọc. Rạng Đông tự quy từ giá đã gồm VAT về giá chưa VAT.
- Muốn thay cả bảng giá của một nhà cung cấp: tick **"Thay toàn bộ hàng cũ của nhà cung cấp này"**. Lịch sử giá và chú thích riêng vẫn được giữ.
- File PDF hoặc bảng khó đọc: gửi Claude để chuẩn bị **gói dữ liệu .json**, rồi nạp ở cùng chỗ.

## Cập nhật trang
Mỗi lần code trên GitHub thay đổi, GitHub Pages tự cập nhật trang sau khoảng 1–2 phút. Dữ liệu trong Firebase giữ nguyên.
