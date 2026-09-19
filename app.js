/* ============================================================
 * Afshin Elahi — Resume & Portfolio
 * Rendering + interactions (vanilla JS, no dependencies)
 * ============================================================ */

(function () {
  "use strict";

  const SAVED = localStorage.getItem("afshin-lang");
  let lang = SAVED === "zh" ? "zh" : "en"; // 默认英文

  const $ = (sel, el) => (el || document).querySelector(sel);
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------------- 模板 ---------------- */

  function sectionHead(index, title) {
    return `
      <div class="section-head reveal">
        <span class="section-index">${index}</span>
        <h2 class="section-title">${esc(title)}</h2>
        <span class="section-line"></span>
      </div>`;
  }

  /* Gallery 单项：图片 / 视频 / PDF 卡片 */
  function galleryItem(it, i) {
    const d = `reveal reveal-d${(i % 4) + 1}`;
    if (it.type === "video") {
      return `
        <figure class="g-item g-video ${d}" data-idx="${i}">
          <video src="${esc(it.src)}" muted loop playsinline preload="metadata"></video>
          <span class="g-play" aria-hidden="true">▶</span>
        </figure>`;
    }
    if (it.type === "pdf") {
      return `
        <figure class="g-item g-pdf ${d}" data-idx="${i}">
          <iframe src="${esc(it.src)}#toolbar=0&navpanes=0&scrollbar=0&view=FitH" scrolling="no" title="${esc(it.label || "PDF")}" loading="lazy"></iframe>
          <span class="g-pdf-label">📄 ${esc(it.label || "PDF")}</span>
        </figure>`;
    }
    return `
      <figure class="g-item ${d}" data-idx="${i}">
        <img src="${esc(it.src)}" alt="" loading="lazy" />
      </figure>`;
  }

  function render() {
    const c = CONTENT[lang];

    const chips = [
      { ico: "📍", label: c.hero.residenceLabel, value: c.hero.residence },
      { ico: "📱", label: c.hero.phoneLabel, value: c.hero.phone, href: "tel:+8615867192025" },
      { ico: "✉️", label: c.hero.emailLabel, value: c.hero.email, href: "mailto:" + c.hero.email },
    ];

    const marqueeItems = c.marquee.concat(c.marquee); // 双份实现无缝滚动

    $("#app").innerHTML = `
      <!-- HERO -->
      <header class="hero wrap">
        <span class="hero-badge reveal"><span class="dot"></span>${esc(c.hero.title)}</span>
        <h1 class="hero-name reveal reveal-d1">${esc(c.hero.name)}</h1>
        <div class="hero-cn reveal reveal-d2">${esc(c.hero.cnName)}</div>
        <p class="hero-title reveal reveal-d2">${esc(c.hero.title)}</p>
        <div class="hero-contacts reveal reveal-d3">
          ${chips
            .map((ch) => {
              const inner = `<span class="ico">${ch.ico}</span><span>${esc(ch.label)}: <b>${esc(ch.value)}</b></span>`;
              return ch.href
                ? `<a class="chip" href="${ch.href}">${inner}</a>`
                : `<span class="chip">${inner}</span>`;
            })
            .join("")}
        </div>
        <div class="hero-stats reveal reveal-d4">
          ${c.hero.stats
            .map(
              (s) => `
            <div class="stat">
              <div class="stat-num" data-count="${s.num}" data-suffix="${esc(s.suffix || "")}" data-static="${esc(s.static || "")}">0</div>
              <div class="stat-label">${esc(s.label)}</div>
            </div>`
            )
            .join("")}
        </div>
        <div class="scroll-hint"><div class="wheel"></div><span>${esc(c.hero.scrollHint)}</span></div>
      </header>

      <!-- MARQUEE -->
      <div class="marquee-band" aria-hidden="true">
        <div class="marquee-track">
          ${marqueeItems.map((w) => `<span class="marquee-item">${esc(w)}</span>`).join("")}
        </div>
      </div>

      <!-- SUMMARY -->
      <section id="summary" class="wrap">
        ${sectionHead("01", c.summary.title)}
        <div class="summary-card reveal">
          ${c.summary.items
            .map(
              (t) => `
            <div class="summary-item">
              <span class="summary-arrow">➡️</span><p>${esc(t)}</p>
            </div>`
            )
            .join("")}
        </div>
      </section>

      <!-- EXPERIENCE -->
      <section id="experience" class="wrap">
        ${sectionHead("02", c.experience.title)}
        <div class="timeline">
          ${c.experience.items
            .map(
              (e, i) => `
            <div class="tl-item reveal reveal-d${(i % 4) + 1}">
              <div class="tl-card">
                <span class="tl-date">${esc(e.date)}${e.current ? `<span class="live">${lang === "zh" ? "在职" : "NOW"}</span>` : ""}</span>
                <div class="tl-inst">${esc(e.institution)}</div>
                <div class="tl-role">${esc(e.role)}</div>
              </div>
            </div>`
            )
            .join("")}
        </div>
      </section>

      <!-- EDUCATION -->
      <section id="education" class="wrap">
        ${sectionHead("03", c.education.title)}
        <div class="edu-grid">
          ${c.education.items
            .map(
              (e, i) => `
            <div class="edu-card reveal reveal-d${i + 1}">
              <div class="edu-degree">${esc(e.degree)}</div>
              <div class="edu-school">${esc(e.school)}</div>
            </div>`
            )
            .join("")}
        </div>
      </section>

      <!-- CERTIFICATIONS -->
      <section id="certifications" class="wrap">
        ${sectionHead("04", c.certifications.title)}
        <div class="cert-grid">
          ${c.certifications.items
            .map(
              (cert, i) => `
            <div class="cert-card reveal reveal-d${(i % 4) + 1}">
              <span class="cert-num">${String(i + 1).padStart(2, "0")}</span>
              <div class="cert-t">${esc(cert.t)}</div>
              <div class="cert-d">${esc(cert.d)}</div>
            </div>`
            )
            .join("")}
        </div>
      </section>

      <!-- GALLERY -->
      <section id="gallery" class="wrap">
        ${sectionHead("05", c.gallery.title)}
        <p class="portfolio-sub reveal">${esc(c.gallery.subtitle)}</p>
        <div class="gallery-grid">
          ${c.gallery.items.map((it, i) => galleryItem(it, i)).join("")}
        </div>
      </section>

      <!-- CONTACT -->
      <section id="contact" class="wrap">
        ${sectionHead("06", c.contact.title)}
        <div class="contact-card reveal">
          <div class="hero-contacts" style="justify-content:center;margin-bottom:0">
            ${chips
              .map((ch) => {
                const inner = `<span class="ico">${ch.ico}</span><span>${esc(ch.label)}: <b>${esc(ch.value)}</b></span>`;
                return ch.href
                  ? `<a class="chip" href="${ch.href}">${inner}</a>`
                  : `<span class="chip">${inner}</span>`;
              })
              .join("")}
          </div>
          <p class="contact-note">${esc(c.contact.note)}</p>
        </div>
      </section>

      <footer>${esc(c.footer)} · © ${new Date().getFullYear()}</footer>
    `;

    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    observeReveals();
    animateStats();
    bindGallery(c.gallery.items);
  }

  /* ---------------- Gallery：灯箱 + 视频悬停播放 ---------------- */

  // 灯箱只创建一次，挂在 body 上，语言切换重渲染时不受影响
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
    <button class="lb-close" aria-label="Close">✕</button>
    <button class="lb-arrow lb-prev" aria-label="Previous">‹</button>
    <div class="lb-stage"></div>
    <button class="lb-arrow lb-next" aria-label="Next">›</button>`;
  document.body.appendChild(lightbox);

  let lbItems = [];
  let lbIndex = 0;

  function lbShow(i) {
    lbIndex = (i + lbItems.length) % lbItems.length;
    const it = lbItems[lbIndex];
    const stage = lightbox.querySelector(".lb-stage");
    if (it.type === "video") {
      stage.innerHTML = `<video src="${esc(it.src)}" controls autoplay playsinline></video>`;
    } else if (it.type === "pdf") {
      stage.innerHTML = `<iframe class="lb-pdf" src="${esc(it.src)}#toolbar=1&view=FitH" title="${esc(it.label || "PDF")}"></iframe>`;
    } else {
      stage.innerHTML = `<img src="${esc(it.src)}" alt="" />`;
    }
  }

  function lbOpen(i) {
    lbShow(i);
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function lbClose() {
    lightbox.classList.remove("open");
    lightbox.querySelector(".lb-stage").innerHTML = ""; // 停止视频/PDF
    document.body.style.overflow = "";
  }

  lightbox.querySelector(".lb-close").addEventListener("click", lbClose);
  lightbox.querySelector(".lb-prev").addEventListener("click", (e) => { e.stopPropagation(); lbShow(lbIndex - 1); });
  lightbox.querySelector(".lb-next").addEventListener("click", (e) => { e.stopPropagation(); lbShow(lbIndex + 1); });
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lbClose(); });
  addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") lbClose();
    if (e.key === "ArrowLeft") lbShow(lbIndex - 1);
    if (e.key === "ArrowRight") lbShow(lbIndex + 1);
  });

  function bindGallery(items) {
    lbItems = items;
    document.querySelectorAll(".g-item").forEach((fig) => {
      const idx = +fig.dataset.idx;
      fig.addEventListener("click", () => lbOpen(idx));
      const v = fig.querySelector("video");
      if (v) {
        fig.addEventListener("mouseenter", () => v.play().catch(() => {}));
        fig.addEventListener("mouseleave", () => v.pause());
      }
    });
  }

  /* ---------------- 语言切换 ---------------- */

  const toggle = $("#lang-toggle");
  toggle.dataset.lang = lang;

  function syncToggleUI() {
    toggle.dataset.lang = lang;
    toggle.querySelectorAll(".lang-opt").forEach((el) => {
      el.classList.toggle("active", el.dataset.lang === lang);
    });
  }
  syncToggleUI();

  toggle.addEventListener("click", () => {
    lang = lang === "en" ? "zh" : "en";
    localStorage.setItem("afshin-lang", lang);
    syncToggleUI();
    render();
    const app = $("#app");
    app.classList.remove("lang-fade");
    void app.offsetWidth; // 重启动画
    app.classList.add("lang-fade");
  });

  /* ---------------- 滚动显现 ---------------- */

  let observer;
  function observeReveals() {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            observer.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }

  /* ---------------- 数字滚动 ---------------- */

  function animateStats() {
    document.querySelectorAll(".stat-num").forEach((el) => {
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || "";
      const staticText = el.dataset.static;
      const io = new IntersectionObserver((ents) => {
        if (!ents[0].isIntersecting) return;
        io.disconnect();
        if (staticText) {
          // 形如 G1–G12 的文本：逐个字符弹出
          let i = 0;
          const tick = () => {
            el.textContent = staticText.slice(0, ++i);
            if (i < staticText.length) setTimeout(tick, 90);
          };
          tick();
          return;
        }
        const dur = 1400;
        const t0 = performance.now();
        const step = (now) => {
          const p = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
      io.observe(el);
    });
  }

  /* ---------------- 粒子星空 ---------------- */

  const canvas = $("#particles");
  const ctx = canvas.getContext("2d");
  let W, H, dots = [];
  const mouse = { x: -9999, y: -9999 };

  function resize() {
    W = canvas.width = innerWidth * devicePixelRatio;
    H = canvas.height = innerHeight * devicePixelRatio;
    canvas.style.width = innerWidth + "px";
    canvas.style.height = innerHeight + "px";
    const n = Math.min(90, Math.floor((innerWidth * innerHeight) / 16000));
    dots = Array.from({ length: n }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      r: (Math.random() * 1.6 + 0.6) * devicePixelRatio,
      hue: [24, 152, 215][Math.floor(Math.random() * 3)],
    }));
  }
  resize();
  addEventListener("resize", resize);

  function drawParticles() {
    ctx.clearRect(0, 0, W, H);
    const linkDist = 130 * devicePixelRatio;
    for (const d of dots) {
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0 || d.x > W) d.vx *= -1;
      if (d.y < 0 || d.y > H) d.vy *= -1;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${d.hue}, 90%, 65%, 0.55)`;
      ctx.fill();
    }
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < linkDist) {
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `hsla(210, 80%, 70%, ${0.12 * (1 - dist / linkDist)})`;
          ctx.lineWidth = devicePixelRatio * 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawParticles);
  }
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) drawParticles();

  /* ---------------- 光标光晕 ---------------- */

  const glow = $("#cursor-glow");
  addEventListener("pointermove", (e) => {
    glow.style.opacity = "1";
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
    mouse.x = e.clientX; mouse.y = e.clientY;
  });
  document.addEventListener("mouseleave", () => (glow.style.opacity = "0"));

  /* ---------------- 滚动进度条 ---------------- */

  const bar = $("#scroll-progress");
  addEventListener(
    "scroll",
    () => {
      const h = document.documentElement;
      bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + "%";
    },
    { passive: true }
  );

  /* ---------------- 启动 ---------------- */
  render();
})();
