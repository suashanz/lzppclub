/* ================================================================
   script.js – LZPPClub Website
   Chứa: dữ liệu thành viên, render card, audio player,
          wave visualizer, xử lý form comment
================================================================ */

/* ================================================================
   MẢNG DỮ LIỆU THÀNH VIÊN
   ─────────────────────────────────────────────────────────────────
   Mỗi object gồm các trường:
     ┌─────────────┬─────────────────────────────────────────────┐
     │  name       │  Tên hiển thị trên card                     │
     │  birthday   │  Ngày sinh (chuỗi tự do, vd: "24/08/2004") │
     │  color      │  Màu chủ đạo (hex), dùng cho glow & wave    │
     │  tiktokUrl  │  Link profile TikTok cá nhân                │
     │  audioUrl   │  URL file nhạc ngắn 10-20s (mp3/ogg/wav)    │
     │  imageUrl   │  URL ảnh idol (ảnh ngang 16:9 tốt nhất)     │
     └─────────────┴─────────────────────────────────────────────┘

   ⚠️  HƯỚNG DẪN THAY THÔNG TIN:
       • Để THÊM thành viên mới → copy một object và paste vào cuối
       • Để XÓA thành viên    → xóa object tương ứng
       • Để SỬA thông tin     → chỉnh giá trị của trường cần đổi

   💡  HOSTING AUDIO / ẢNH:
       • Nếu để file trong repo GitHub: dùng đường dẫn tương đối
         Ví dụ: imageUrl: "assets/images/member1.jpg"
                audioUrl: "assets/audio/member1.mp3"
       • Nếu host trên Cloudinary / Google Drive / GitHub CDN:
         Dán URL trực tiếp vào trường tương ứng
================================================================ */
const members = [
  {
    name: "Thành Viên 1",
    birthday: "01/01/2000",
    color: "#ff6bbd",          /* Màu hồng neon */
    /*
     * ╔══════════════════════════════════════╗
     * ║  ⚠️  THAY LINK TIKTOK TẠI ĐÂY  ⚠️  ║
     * ╚══════════════════════════════════════╝
     */
    tiktokUrl: "https://www.tiktok.com/@username1",
    /*
     * ╔══════════════════════════════════════╗
     * ║  ⚠️  THAY LINK NHẠC TẠI ĐÂY    ⚠️  ║
     * ╚══════════════════════════════════════╝
     */
    audioUrl: "assets/audio/member1.mp3",
    /*
     * ╔══════════════════════════════════════╗
     * ║  ⚠️  THAY LINK ẢNH TẠI ĐÂY     ⚠️  ║
     * ╚══════════════════════════════════════╝
     */
    imageUrl: "assets/images/member1.jpg",
  },
  {
    name: "Thành Viên 2",
    birthday: "02/02/2001",
    color: "#ffaa5c",          /* Màu cam ấm */
    tiktokUrl: "https://www.tiktok.com/@username2",   /* THAY LINK TIKTOK TẠI ĐÂY */
    audioUrl:  "assets/audio/member2.mp3",            /* THAY LINK NHẠC TẠI ĐÂY   */
    imageUrl:  "assets/images/member2.jpg",           /* THAY LINK ẢNH TẠI ĐÂY    */
  },
  {
    name: "Thành Viên 3",
    birthday: "03/03/2002",
    color: "#5cc8ff",          /* Màu xanh dương */
    tiktokUrl: "https://www.tiktok.com/@username3",   /* THAY LINK TIKTOK TẠI ĐÂY */
    audioUrl:  "assets/audio/member3.mp3",            /* THAY LINK NHẠC TẠI ĐÂY   */
    imageUrl:  "assets/images/member3.jpg",           /* THAY LINK ẢNH TẠI ĐÂY    */
  },
  {
    name: "Thành Viên 4",
    birthday: "04/04/2001",
    color: "#a9e34b",          /* Màu xanh lá lime */
    tiktokUrl: "https://www.tiktok.com/@username4",   /* THAY LINK TIKTOK TẠI ĐÂY */
    audioUrl:  "assets/audio/member4.mp3",            /* THAY LINK NHẠC TẠI ĐÂY   */
    imageUrl:  "assets/images/member4.jpg",           /* THAY LINK ẢNH TẠI ĐÂY    */
  },
  {
    name: "Thành Viên 5",
    birthday: "05/05/2000",
    color: "#da77f2",          /* Màu tím violet */
    tiktokUrl: "https://www.tiktok.com/@username5",   /* THAY LINK TIKTOK TẠI ĐÂY */
    audioUrl:  "assets/audio/member5.mp3",            /* THAY LINK NHẠC TẠI ĐÂY   */
    imageUrl:  "assets/images/member5.jpg",           /* THAY LINK ẢNH TẠI ĐÂY    */
  },
  {
    name: "Thành Viên 6",
    birthday: "06/06/2002",
    color: "#2ee8c0",          /* Màu xanh mint */
    tiktokUrl: "https://www.tiktok.com/@username6",   /* THAY LINK TIKTOK TẠI ĐÂY */
    audioUrl:  "assets/audio/member6.mp3",            /* THAY LINK NHẠC TẠI ĐÂY   */
    imageUrl:  "assets/images/member6.jpg",           /* THAY LINK ẢNH TẠI ĐÂY    */
  },
  {
    name: "Thành Viên 7",
    birthday: "07/07/2001",
    color: "#ff8787",          /* Màu đỏ san hô */
    tiktokUrl: "https://www.tiktok.com/@username7",   /* THAY LINK TIKTOK TẠI ĐÂY */
    audioUrl:  "assets/audio/member7.mp3",            /* THAY LINK NHẠC TẠI ĐÂY   */
    imageUrl:  "assets/images/member7.jpg",           /* THAY LINK ẢNH TẠI ĐÂY    */
  },
  {
    name: "Thành Viên 8",
    birthday: "08/08/2000",
    color: "#ffd43b",          /* Màu vàng mật ong */
    tiktokUrl: "https://www.tiktok.com/@username8",   /* THAY LINK TIKTOK TẠI ĐÂY */
    audioUrl:  "assets/audio/member8.mp3",            /* THAY LINK NHẠC TẠI ĐÂY   */
    imageUrl:  "assets/images/member8.jpg",           /* THAY LINK ẢNH TẠI ĐÂY    */
  },
  {
    name: "Thành Viên 9",
    birthday: "09/09/2003",
    color: "#74b0ff",          /* Màu xanh sky */
    tiktokUrl: "https://www.tiktok.com/@username9",   /* THAY LINK TIKTOK TẠI ĐÂY */
    audioUrl:  "assets/audio/member9.mp3",            /* THAY LINK NHẠC TẠI ĐÂY   */
    imageUrl:  "assets/images/member9.jpg",           /* THAY LINK ẢNH TẠI ĐÂY    */
  },
];

/* ================================================================
   BIẾN TOÀN CỤC – QUẢN LÝ AUDIO
   Đảm bảo chỉ có 1 bài nhạc phát tại 1 thời điểm
================================================================ */
let activeAudio   = null;  /* Đối tượng Audio đang phát         */
let activeCardEl  = null;  /* Card DOM element đang ở trạng thái playing */

/* ================================================================
   SVG ICONS (inline – tránh phụ thuộc thư viện ngoài)
================================================================ */
const ICON_TIKTOK = `
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5
             2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01
             a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34
             6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z"/>
  </svg>`;

/* Icon loa (trạng thái mặc định – chưa phát) */
const ICON_SPEAKER = `
  <svg class="icon-play" width="17" height="17" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round" aria-hidden="true">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
  </svg>`;

/* Icon tạm dừng (trạng thái đang phát) */
const ICON_PAUSE = `
  <svg class="icon-stop" width="17" height="17" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round" aria-hidden="true">
    <rect x="6" y="4" width="4" height="16"/>
    <rect x="14" y="4" width="4" height="16"/>
  </svg>`;

/* 5 thanh sóng nhạc (wave bars) */
const WAVE_BARS = `
  <div class="wave-visualizer" aria-hidden="true">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>`;

/* ================================================================
   HÀM: renderMembers()
   Tạo HTML cho tất cả card thành viên và inject vào #membersList
   Được gọi 1 lần khi DOM sẵn sàng
================================================================ */
function renderMembers() {
  const listEl = document.getElementById("membersList");
  if (!listEl) return;

  /* Placeholder ảnh khi URL bị lỗi – dùng màu chủ đạo của thành viên */
  const fallbackImg = (name, color) => {
    const bg    = encodeURIComponent(color.replace("#", ""));
    const label = encodeURIComponent(name);
    return `https://placehold.co/600x260/${bg}/ffffff?text=${label}`;
  };

  /* Tạo HTML cho 1 card thành viên */
  const buildCard = (member, index) => `
    <article
      class="member-card"
      id="card-${index}"
      role="listitem"
      style="--member-color: ${member.color};"
    >

      <!-- ─── ẢNH ĐẠI DIỆN (Idol) ───────────────────────────────
           ⚠️ THAY LINK ẢNH TẠI ĐÂY:
               Chỉnh giá trị imageUrl trong mảng members[] phía trên.
               Ảnh sẽ tự động có hiệu ứng mờ dần hai cạnh trái/phải
               thông qua CSS mask-image (xem style.css .card-image)
      ──────────────────────────────────────────────────────────── -->
      <div class="card-image-wrap">
        <img
          class="card-image"
          src="${member.imageUrl}"
          alt="Ảnh idol của ${member.name}"
          loading="lazy"
          decoding="async"
          onerror="this.onerror=null; this.src='${fallbackImg(member.name, member.color)}'"
        />
      </div>

      <!-- ─── THÔNG TIN THÀNH VIÊN ──────────────────────────── -->
      <div class="card-info">

        <!-- Tên + Sóng nhạc (wave chỉ hiện khi đang phát) -->
        <div class="card-name-row">
          <span class="card-name">${member.name}</span>
          ${WAVE_BARS}
        </div>

        <!-- Ngày sinh + Chấm màu chủ đạo -->
        <div class="card-meta">
          <span class="card-birthday">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.2" stroke-linecap="round"
                 stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8"  y1="2" x2="8"  y2="6"/>
              <line x1="3"  y1="10" x2="21" y2="10"/>
            </svg>
            ${member.birthday}
          </span>
          <span
            class="color-dot"
            style="background: ${member.color};"
            title="Màu chủ đạo: ${member.color}"
          ></span>
        </div>

        <!-- Nút TikTok & Nút Phát nhạc -->
        <div class="card-actions">

          <!-- ─── NÚT TIKTOK ───────────────────────────────────
               ⚠️ THAY LINK TIKTOK TẠI ĐÂY:
                   Chỉnh giá trị tiktokUrl trong mảng members[] phía trên
          ──────────────────────────────────────────────────────── -->
          <a
            class="action-btn tiktok-btn"
            href="${member.tiktokUrl}"
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok của ${member.name}"
            aria-label="Xem TikTok của ${member.name}"
          >
            ${ICON_TIKTOK}
          </a>

          <!-- ─── NÚT PHÁT NHẠC ────────────────────────────────
               ⚠️ THAY LINK NHẠC TẠI ĐÂY:
                   Chỉnh giá trị audioUrl trong mảng members[] phía trên.
                   Có thể dùng:
                   • File local: "assets/audio/member1.mp3"
                   • Cloudinary: "https://res.cloudinary.com/.../clip.mp3"
                   • Google Drive (public link trực tiếp)
          ──────────────────────────────────────────────────────── -->
          <button
            class="action-btn audio-btn"
            data-index="${index}"
            title="Nghe giọng ${member.name}"
            aria-label="Phát nhạc của ${member.name}"
            onclick="handleAudioToggle(${index})"
          >
            ${ICON_SPEAKER}
            ${ICON_PAUSE}
          </button>

        </div>
      </div>
    </article>
  `;

  /* Render tất cả thành viên và đổ vào DOM */
  listEl.innerHTML = members.map(buildCard).join("");
}

/* ================================================================
   HÀM: handleAudioToggle(index)
   Logic bật/tắt nhạc, đảm bảo chỉ 1 bài phát tại 1 thời điểm

   @param {number} index – Vị trí thành viên trong mảng members[]
================================================================ */
function handleAudioToggle(index) {
  const cardEl   = document.getElementById(`card-${index}`);
  const audioSrc = members[index].audioUrl;

  /* ── Nếu ĐANG PHÁT bài này → DỪNG lại ─────────────────────── */
  if (activeCardEl === cardEl && activeAudio && !activeAudio.paused) {
    stopActiveAudio();
    return;
  }

  /* ── Dừng bài ĐANG PHÁT khác (nếu có) ─────────────────────── */
  stopActiveAudio();

  /* ── Tạo đối tượng Audio mới và phát ──────────────────────── */
  const audio = new Audio(audioSrc);
  audio.volume = 1;

  activeAudio  = audio;
  activeCardEl = cardEl;

  /* Bật class 'playing' → CSS tự đổi icon + hiện wave + glow */
  cardEl.classList.add("playing");
  cardEl.querySelector(".audio-btn").setAttribute("aria-label",
    `Dừng nhạc của ${members[index].name}`);

  /* Thực sự phát */
  audio.play().catch((err) => {
    /* Xảy ra khi file chưa có hoặc browser block autoplay */
    console.warn(`[LZPPClub] Không thể phát audio index ${index}:`, err);
    resetCardState(cardEl, index);
    activeAudio  = null;
    activeCardEl = null;
  });

  /* Tự reset khi nhạc kết thúc */
  audio.addEventListener("ended", () => {
    resetCardState(cardEl, index);
    activeAudio  = null;
    activeCardEl = null;
  });
}

/* ================================================================
   HÀM: stopActiveAudio()
   Dừng và reset trạng thái card đang phát (dùng nội bộ)
================================================================ */
function stopActiveAudio() {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }
  if (activeCardEl) {
    /* Tìm index từ id của card để cập nhật aria-label */
    const idStr = activeCardEl.id;                  /* "card-N" */
    const idx   = parseInt(idStr.split("-")[1], 10);
    resetCardState(activeCardEl, idx);
    activeCardEl = null;
  }
}

/* ================================================================
   HÀM: resetCardState(cardEl, index)
   Xóa class playing và khôi phục aria-label về mặc định

   @param {HTMLElement} cardEl – Card cần reset
   @param {number}      index  – Index thành viên
================================================================ */
function resetCardState(cardEl, index) {
  cardEl.classList.remove("playing");
  const btn = cardEl.querySelector(".audio-btn");
  if (btn) {
    btn.setAttribute("aria-label", `Phát nhạc của ${members[index]?.name || ""}`);
  }
}

/* ================================================================
   HÀM: initCommentForm()
   Gửi form qua Formspree bằng fetch API (không reload trang)
   Hiện thông báo thành công sau khi gửi xong
================================================================ */
function initCommentForm() {
  const form       = document.getElementById("commentForm");
  const successMsg = document.getElementById("formSuccess");
  if (!form || !successMsg) return;

  form.addEventListener("submit", async (event) => {
    /* Ngăn form submit kiểu truyền thống (gây reload trang) */
    event.preventDefault();

    const submitBtn  = form.querySelector(".submit-btn");
    const labelSpan  = submitBtn?.querySelector(".btn-label");
    const arrowSpan  = submitBtn?.querySelector(".btn-arrow");

    /* UI loading */
    submitBtn.disabled = true;
    if (labelSpan) labelSpan.textContent = "Đang gửi...";
    if (arrowSpan) arrowSpan.textContent = "⏳";

    try {
      const response = await fetch(form.action, {
        method:  "POST",
        body:    new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        /* ─── THÀNH CÔNG ─────────────────────────────────── */
        form.reset();                           /* Xóa nội dung form */
        successMsg.classList.add("visible");    /* Hiện thông báo    */
        setTimeout(() => successMsg.classList.remove("visible"), 4500);
      } else {
        /* Server trả về lỗi (4xx, 5xx) */
        const data = await response.json().catch(() => ({}));
        alert(data?.errors?.[0]?.message ?? "Có lỗi xảy ra. Vui lòng thử lại!");
      }
    } catch {
      /* Lỗi mạng / CORS */
      alert("Không thể gửi. Kiểm tra kết nối mạng và thử lại!");
    } finally {
      /* Khôi phục nút gửi */
      submitBtn.disabled = false;
      if (labelSpan) labelSpan.textContent = "Gửi đi";
      if (arrowSpan) arrowSpan.textContent = "→";
    }
  });
}

/* ================================================================
   ENTRY POINT – Chạy khi DOM đã load xong
================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderMembers();    /* 1. Render toàn bộ card thành viên          */
  initCommentForm();  /* 2. Khởi tạo logic gửi form comment         */
});
