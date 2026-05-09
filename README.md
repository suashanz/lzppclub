# LZPPClub – Hội Người Lười 🎵

> "No laziest, only lazier"  
> Team Cover TikTok | [@lzppclub.cover](https://www.tiktok.com/@lzppclub.cover)  
> Founded: 24/08/2024

---

## Cấu trúc thư mục

```
lzppclub/
│
├── index.html          ← Trang chính
├── style.css           ← Toàn bộ CSS + animation
├── script.js           ← Dữ liệu thành viên + logic JS
├── README.md           ← File này
│
└── assets/
    ├── images/
    │   ├── member1.jpg   ← Ảnh idol thành viên 1
    │   ├── member2.jpg   ← Ảnh idol thành viên 2
    │   └── ...
    └── audio/
        ├── member1.mp3   ← Đoạn nhạc 10-20s thành viên 1
        ├── member2.mp3   ← Đoạn nhạc 10-20s thành viên 2
        └── ...
```

---

## Hướng dẫn chỉnh sửa

### 1. Thêm / Sửa / Xóa thành viên

Mở `script.js` → tìm mảng `const members = [...]`  
Mỗi thành viên là 1 object:

```js
{
  name:      "Tên Thành Viên",
  birthday:  "DD/MM/YYYY",
  color:     "#ffaa5c",        // màu chủ đạo (hex)
  tiktokUrl: "https://www.tiktok.com/@username",
  audioUrl:  "assets/audio/memberX.mp3",
  imageUrl:  "assets/images/memberX.jpg",
}
```

### 2. Thiết lập Formspree (nhận comment qua Gmail)

1. Vào [https://formspree.io](https://formspree.io) → Đăng ký / Đăng nhập
2. Tạo form mới → nhập email nhận (Gmail của bạn)
3. Copy ID dạng `xbljabcd`
4. Mở `index.html` → tìm dòng:
   ```html
   action="https://formspree.io/f/FORMSPREE_ID"
   ```
5. Thay `FORMSPREE_ID` bằng ID thực của bạn

---

## Upload lên GitHub Pages

### Lần đầu tiên

```bash
# 1. Tạo repo mới trên GitHub (tên gì cũng được, vd: lzppclub-web)

# 2. Clone về máy hoặc upload thủ công
git init
git add .
git commit -m "feat: khởi tạo website LZPPClub"
git branch -M main
git remote add origin https://github.com/TÊN_BẠN/TÊN_REPO.git
git push -u origin main

# 3. Vào GitHub repo → Settings → Pages
#    Source: Deploy from a branch → Branch: main → / (root) → Save
```

### Cập nhật sau này

```bash
git add .
git commit -m "update: thêm thành viên mới"
git push
```

Sau vài phút, website sẽ live tại:  
`https://TÊN_BẠN.github.io/TÊN_REPO/`

---

## Mẹo về ảnh & audio

| Loại | Gợi ý |
|------|--------|
| Ảnh  | Ảnh ngang (landscape), tỉ lệ 16:9 hoặc 3:2, ≤ 500KB |
| Nhạc | MP3, khoảng 10–20 giây, ≤ 1MB |

Nếu repo quá nặng, hãy host ảnh/nhạc trên:
- **Cloudinary** (free, có CDN) – khuyến nghị
- **Google Drive** (cần lấy link direct download)
- **GitHub Releases** (đính kèm file vào Release)
