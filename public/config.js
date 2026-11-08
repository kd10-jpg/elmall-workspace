// ===== Cấu hình dự án Firebase của Elmall =====
// Lấy ở Firebase Console → ⚙ Project settings → Your apps → (Web app) → SDK setup and configuration → Config
const FIREBASE_CONFIG = {
  apiKey: "ĐIỀN_API_KEY",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
// Email Google của quản lý (luôn có toàn quyền). Phải trùng với email trong firestore.rules
const ADMIN_EMAILS = ["ĐIỀN_EMAIL_QUAN_LY@gmail.com"];
