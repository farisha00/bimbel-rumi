// ===============================
// Bimbel RUMI - Frontend only
// ===============================

// GANTI dengan nomor WhatsApp RUMI.
// Format: kode negara tanpa + atau spasi.
// Contoh Indonesia: 6281234567890
const WHATSAPP_NUMBER = "6281322201089";

const navbar = document.getElementById("navbar");
const topBtn = document.getElementById("topBtn");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("navbar-scrolled", window.scrollY > 20);
  topBtn.classList.toggle("show", window.scrollY > 500);
});

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

document.querySelectorAll(".mobile-link").forEach(link => {
  link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
});

topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// FAQ accordion
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const wasOpen = item.classList.contains("open");

    document.querySelectorAll(".faq-item.open").forEach(openItem => {
      openItem.classList.remove("open");
    });

    if (!wasOpen) item.classList.add("open");
  });
});

// Gallery filter
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    document.querySelectorAll(".gallery-item").forEach(item => {
      const show = filter === "all" || item.dataset.category === filter;
      item.classList.toggle("hide", !show);
    });
  });
});

// Gallery lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.image;
    lightboxImage.alt = item.dataset.caption;
    lightboxCaption.textContent = item.dataset.caption;
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
    document.body.style.overflow = "hidden";
  });
});

function closeLightbox() {
  lightbox.classList.add("hidden");
  lightbox.classList.remove("flex");
  document.body.style.overflow = "";
}
document.getElementById("closeLightbox").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

// Direct WhatsApp contact (for questions/general inquiries)
document.querySelectorAll(".whatsapp-contact").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const text = "Halo Bimbel RUMI 👋 Saya ingin bertanya mengenai program dan informasi Bimbel RUMI.";

    if (WHATSAPP_NUMBER.includes("X")) {
      showToast("Nomor WhatsApp RUMI belum diisi di script.js 😊");
      return;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
});

// Registration -> WhatsApp
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const parentName = document.getElementById("parentName").value.trim();
  const childName = document.getElementById("childName").value.trim();
  const childClass = document.getElementById("childClass").value.trim();
  const program = document.getElementById("programSelect").value;
  const selectedClass = document.getElementById("classSelect").value;
  const message = document.getElementById("message").value.trim();

  const text =
`Halo Bimbel RUMI 👋

Saya ingin mendaftarkan anak saya.

👤 Nama Orang Tua: ${parentName}
👧 Nama Anak: ${childName}
🎒 Kelas/Usia: ${childClass}
📚 Program: ${program}
📖 Pilihan Kelas: ${selectedClass}
${message ? `💬 Pesan: ${message}` : ""}

Mohon informasi lebih lanjut mengenai jadwal dan pendaftarannya. Terima kasih 😊`;

  if (WHATSAPP_NUMBER.includes("X")) {
    showToast("Nomor WhatsApp RUMI belum diisi di script.js 😊");
    return;
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3200);
}

document.getElementById("year").textContent = new Date().getFullYear();


// ===============================
// V2 INTERACTIONS
// ===============================

// Active navigation section
const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-link")];

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

sections.forEach(section => sectionObserver.observe(section));

// Little sparkle effect while interacting with the page.
const sparkleLayer = document.getElementById("sparkleLayer");
let lastSparkle = 0;

document.addEventListener("pointerdown", (e) => {
  const now = Date.now();
  if (now - lastSparkle < 120) return;
  lastSparkle = now;

  const symbols = ["✦", "✧", "•", "★"];
  for (let i = 0; i < 4; i++) {
    const spark = document.createElement("span");
    spark.className = "cursor-spark";
    spark.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    spark.style.left = `${e.clientX}px`;
    spark.style.top = `${e.clientY}px`;
    spark.style.setProperty("--dx", `${(Math.random() - .5) * 70}px`);
    spark.style.setProperty("--dy", `${(Math.random() - .5) * 70}px`);
    spark.style.color = ["#ffd43b", "#ee5c91", "#37a7e8", "#238b45"][i];
    sparkleLayer.appendChild(spark);
    setTimeout(() => spark.remove(), 850);
  }
});

// Motivational messages
const motivationBtn = document.getElementById("motivationBtn");
const motivationText = document.getElementById("motivationText");
const motivationMessages = [
  "Kamu nggak harus langsung bisa. Yang penting berani mencoba! 💚",
  "Sedikit demi sedikit, lama-lama jadi hebat! 🌱",
  "Hari ini belajar, besok makin percaya diri! ⭐",
  "Jangan takut salah. Salah itu bagian dari belajar! 📚",
  "Semangat! Kamu punya banyak hal keren untuk dipelajari! 🌈",
  "Hebat! Terus bertumbuh dan jadi versi terbaikmu! 🦋"
];

if (motivationBtn) {
  motivationBtn.addEventListener("click", () => {
    const current = motivationText.textContent;
    let next = current;
    while (next === current) {
      next = motivationMessages[Math.floor(Math.random() * motivationMessages.length)];
    }
    motivationText.animate(
      [{opacity: .2, transform: "translateY(6px)"}, {opacity: 1, transform: "translateY(0)"}],
      {duration: 300, easing: "ease-out"}
    );
    motivationText.textContent = next;
    showToast("Semangat dari RUMI terkirim! ✨");
  });
}
