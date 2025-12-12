// JS untuk Landing Page
const landing = document.getElementById('landing');
const enterBtn = document.getElementById('enterBtn');

enterBtn.addEventListener('click', () => {
  landing.style.display = 'none';
});

// JS untuk Audio
function toggleAudio() {
  const audio = document.getElementById('ambience');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// JS untuk Lightbox Galeri
document.addEventListener('DOMContentLoaded', function() {
  const figures = document.querySelectorAll('.gallery figure img');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbClose = document.getElementById('lb-close');

  figures.forEach(img => {
    img.addEventListener('click', () => {
      lbImg.src = img.src;
      lightbox.style.display = 'flex';
    });
  });

  lbClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', e => {
    if(e.target === lightbox) lightbox.style.display = 'none';
  });
});

// JS untuk Lightbox (versi kedua, ada duplikasi)
const thumbs = document.querySelectorAll('.thumb');
const lightbox_v2 = document.getElementById('lightbox');
const lbImg_v2 = document.getElementById('lb-img');
const closeBtn_v2 = document.getElementById('close');

thumbs.forEach((thumb) => {
  thumb.addEventListener('click', function() {
    const imgSrc = this.dataset.large || this.querySelector('img').src;
    lbImg_v2.src = imgSrc;
    lightbox_v2.classList.add('open');
  });
});

closeBtn_v2.addEventListener('click', function() {
  lightbox_v2.classList.remove('open');
});

// Tutup lightbox jika klik area gelap
lightbox_v2.addEventListener('click', function(e) {
  if (e.target === lightbox_v2) {
    lightbox_v2.classList.remove('open');
  }
});

// SCRIPT UNTUK GANTI LOKASI (Maps)
function showView(place) {
  let map = document.getElementById("mapFrame");
  let street = document.getElementById("streetFrame"); // streetFrame tidak ada di HTML, tapi ada di JS ini

  if (place === "bromo") {
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.3097969382337!2d112.95300!3d-7.94220!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6282542f7c6ef%3A0x9d6af6129245a1bc!2sGunung%20Bromo!5e0!3m2!1sid!2sid!4v1709999999999";
    street.src = "https://www.google.com/maps/embed?pb=!4v1710000000000!6m8!1m7!1sCAoSLEFGMVFpcE41SDFuRkV1S2V2V0ZpTFlJZ0VoZlZ2b0pNS2lyM1wvWjZvbEEw!2m2!1d-7.9422!2d112.9530!3f0!4f0!5f1.1924812503605782";
  }

  if (place === "penanjakan") {
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.167460734496!2d112.9094!3d-7.9573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd63f62f4211bbb%3A0x49c8ecba4c6ebe97!2sView%20Point%20Penanjakan!5e0!3m2!1sid!2sid!4v1710000000001";
    street.src = "https://www.google.com/maps/embed?pb=!4v1711000000100!6m8!1m7!1sCAoSLEFGMVFpcE1uUWRqLVpPSFNkQm55SjdMMW5mS1d1V2hLbG45QVN2ekpLSEpR!2m2!1d-7.944885!2d112.915784!3f48.2!4f5.2!5f1.1924812503605782";

  }

  if (place === "pasir") {
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.2794029327737!2d112.9567!3d-7.9450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62825b420e63f%3A0xf23c1c2835507c1a!2sPasir%20Berbisik!5e0!3m2!1sid!2sid!4v1710000000003";
    street.src = "https://www.google.com/maps/embed?pb=!4v1710000000004!6m8!1m7!1sV9yBdB7HSqgAAAQItZpGkA!2m2!1d-7.9449!2d112.9570!3f0!4f0!5f1.1924812503605782";
  }
}

// JS untuk Kritik & Saran
const form = document.getElementById("saranForm");
const input = document.getElementById("inputSaran");
const list = document.getElementById("listSaran");
const btn = document.getElementById("btnKirim");

// Efek tombol ditekan
btn.addEventListener("mousedown", () => {
  btn.style.transform = "scale(1.05)";
  btn.style.background = "#27ae60";
});
btn.addEventListener("mouseup", () => {
  btn.style.transform = "scale(1)";
  btn.style.background = "#2ecc71";
});
btn.addEventListener("mouseleave", () => {
  btn.style.transform = "scale(1)";
  btn.style.background = "#2ecc71";
});

// Submit komentar
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const teks = input.value.trim();
  if (!teks) return;

  // Buat elemen list
  const li = document.createElement("li");
  li.style.background = "var(--bg)"; // --bg tidak didefinisikan dalam :root
  li.style.padding = "14px 16px";
  li.style.borderRadius = "12px";
  li.style.border = "1px solid var(--accent)";
  li.style.color = "var(--text)";
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.alignItems = "center";

  // Isi teks
  const spanTeks = document.createElement("span");
  spanTeks.textContent = teks;

  // Tombol Hapus (X)
  const hapusBtn = document.createElement("button");
  hapusBtn.textContent = "✕";
  hapusBtn.style.background = "transparent";
  hapusBtn.style.border = "none";
  hapusBtn.style.color = "var(--accent)";
  hapusBtn.style.fontSize = "18px";
  hapusBtn.style.cursor = "pointer";
  hapusBtn.style.fontWeight = "bold";
  hapusBtn.style.marginLeft = "12px";

  // Event hapus
  hapusBtn.addEventListener("click", () => {
    li.remove();
  });

  // Gabungkan elemen
  li.appendChild(spanTeks);
  li.appendChild(hapusBtn);
  list.appendChild(li);

  input.value = "";
});

// JS untuk Toggle Tema
const toggleBtn = document.getElementById('themeToggle');
let isDark = true; // default gelap

toggleBtn.addEventListener('click', () => {
  if(isDark){
    // =========================
    // TEMA TERANG
    // =========================
    document.body.style.background = 'linear-gradient(180deg, rgba(255,245,230,0.85), rgba(255,220,180,0.65)), url("https://upload.wikimedia.org/wikipedia/commons/3/3c/Yadnya_Kasada_festival_at_Mount_Bromo.jpg") center/cover fixed no-repeat';
    
    // Semua teks utama menjadi gelap
    document.querySelectorAll('body *:not(.gallery figcaption)').forEach(el => {
      if(el.tagName.match(/^(P|H[1-6]|SPAN|DIV|SMALL|LABEL|TEXTAREA|BUTTON|LI)$/i)){
        el.style.color = '#333333';
      }
    });

    // Header
    const header = document.querySelector('header');
    header.style.background = 'linear-gradient(90deg, rgba(255,240,200,0.85), rgba(255,220,160,0.65))';
    header.querySelectorAll('nav a').forEach(a => a.style.color = '#b8860b'); // link gold

    // Hero-card
    const heroCard = document.querySelector('.hero-card');
    heroCard.style.background = 'linear-gradient(180deg, rgba(255,245,220,0.85), rgba(255,230,200,0.65))';
    heroCard.querySelectorAll('h1').forEach(el => el.style.color = '#b8860b'); // judul hero gold

    // Tombol ghost
    heroCard.querySelectorAll('.btn.ghost').forEach(btn => {
      btn.style.color = '#333333';
      btn.style.border = '1px solid rgba(184,134,11,0.6)';
    });

    // Hero-right frame
    document.querySelectorAll('.hero-right .ethnic-frame').forEach(frame => {
      frame.style.background = 'rgba(255,240,220,0.5)';
      frame.style.border = '1px solid rgba(184,134,11,0.4)';
    });

    // Footer
    document.querySelectorAll('footer').forEach(f => f.style.color = '#333333');

    isDark = false;
  } else {
    // =========================
    // KEMBALI TEMA GELAP
    // =========================
    document.body.style.background = 'linear-gradient(180deg, rgba(4,10,6,1) 0%, rgba(7,18,12,1) 60%), url("https://upload.wikimedia.org/wikipedia/commons/3/3c/Yadnya_Kasada_festival_at_Mount_Bromo.jpg") center/cover fixed no-repeat';
    
    document.querySelectorAll('body *:not(.gallery figcaption)').forEach(el => {
      el.style.color = ''; // kembalikan ke default css
    });

    const header = document.querySelector('header');
    header.style.background = 'linear-gradient(90deg, rgba(5,12,8,0.55), rgba(5,12,8,0.35))';
    header.querySelectorAll('nav a').forEach(a => a.style.color = 'var(--accent)');

    const heroCard = document.querySelector('.hero-card');
    heroCard.style.background = 'linear-gradient(180deg, rgba(6,20,14,0.6), rgba(8,26,18,0.55))';
    heroCard.querySelectorAll('h1').forEach(el => el.style.color = 'var(--accent)');
    heroCard.querySelectorAll('.btn.ghost').forEach(btn => {
      btn.style.color = 'var(--text)';
      btn.style.border = '1px solid rgba(183,238,201,0.12)';
    });

    document.querySelectorAll('.hero-right .ethnic-frame').forEach(frame => {
      frame.style.background = 'rgba(255,255,255,0.02)';
      frame.style.border = '1px solid rgba(183,238,201,0.08)';
    });

    document.querySelectorAll('footer').forEach(f => f.style.color = 'var(--muted)');

    isDark = true;
  }
});

// JS untuk Parallax Scroll
const layers = document.querySelectorAll('.hero .layer');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  layers.forEach(layer => {
    const speed = parseFloat(layer.dataset.speed);
    layer.style.transform = `translateY(${scrollY * speed}px)`;
  });
});