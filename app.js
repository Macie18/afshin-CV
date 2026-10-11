// Afshin Elahi — bilingual professional portfolio
(function () {
  "use strict";

  const UI = {
    en: {
      nav: [
        ["about", "About"],
        ["expertise", "Expertise"],
        ["experience", "Experience"],
        ["portfolio", "Portfolio"],
        ["qualifications", "Qualifications"],
      ],
      contact: "Contact",
      menu: "Menu",
      heroEyebrow: "PHYSICAL EDUCATION · ATHLETICS · DEPARTMENT LEADERSHIP",
      heroHeadline: "Physical Education and Athletics Leadership",
      heroLead:
        "PE & Athletics Head of Department with 12 years of experience in public, bilingual and international schools. Current responsibilities include secondary PE, departmental leadership, House programmes and the Duke of Edinburgh’s Award.",
      primaryCta: "View experience",
      secondaryCta: "Contact",
      currentLabel: "CURRENT APPOINTMENT",
      photoLabel: "PE EDUCATOR · HOD · COACH",
      metrics: [
        ["12", "Years of experience"],
        ["K1–G12", "Age range taught"],
        ["IB · IGCSE", "Curriculum experience"],
        ["2", "Degrees in PE & sport science"],
      ],
      recognition: ["Department leadership", "Curriculum design", "Athletics & events", "Youth development"],
      aboutEyebrow: "PROFESSIONAL PROFILE",
      aboutTitle: "Department leadership supported by broad teaching and coaching experience.",
      aboutBody: [
        "Afshin Elahi is a PE and Athletics Head of Department with experience in school operations, curriculum planning, staff coordination, sports events and ECA provision. He currently works at SUIS Wuxi.",
        "His teaching experience covers K1–Grade 12 and includes multi-sport PE, Adventure Education, IB/IGCSE Sports Science, early-years motor development and youth strength and conditioning.",
      ],
      aboutNote: "Current focus: secondary PE, athletics, House programmes and the Duke of Edinburgh’s Award.",
      aboutImageLabel: "XIEHE INTER-SCHOOL SPORTS TOURNAMENT",
      expertiseEyebrow: "CORE RESPONSIBILITIES",
      expertiseTitle: "Areas of leadership and teaching practice",
      expertiseIntro:
        "These areas reflect his current responsibilities and prior experience.",
      expertise: [
        ["01", "Department Leadership", "Department planning, staff coordination, programme delivery and day-to-day operations."],
        ["02", "Curriculum & Sports Science", "Curriculum planning across IB, Chinese and IGCSE contexts, including IB/IGCSE Sport Science teaching."],
        ["03", "Athletics & School Events", "Planning and delivery of sports days, inter-school competition, House sport and ECA programmes."],
        ["04", "Youth Development", "Early-years motor development, youth conditioning and age-appropriate multi-sport instruction."],
        ["05", "Adventure Education", "Adventure Education and Duke of Edinburgh’s Award leadership, with a focus on preparation and student responsibility."],
        ["06", "Coach & Teacher Development", "Professional-development workshops for PE teachers and coaches."],
      ],
      experienceEyebrow: "EMPLOYMENT HISTORY",
      experienceTitle: "Professional experience",
      experienceIntro:
        "Appointments in international, bilingual and public-school settings, alongside sports coaching.",
      present: "PRESENT",
      perspectiveEyebrow: "INTERNATIONAL SCHOOL CONTEXT",
      perspectiveTitle: "Experience in China since 2020",
      perspectiveBody:
        "His work in Hangzhou, Changshu and Wuxi has included primary and secondary PE, Adventure Education, department leadership and co-curricular sport.",
      perspectiveLink: "View selected work",
      portfolioEyebrow: "SELECTED WORK",
      portfolioTitle: "Teaching, athletics and school sport",
      portfolioIntro:
        "Photographs, video, a school sports-day article and a Grade 7 student booklet.",
      galleryLabels: [
        "Inter-school sport",
        "Coaching in action",
        "Global sporting perspective",
        "Movement & learning",
        "School sports day",
        "Active school community",
        "Team culture",
        "Teaching in practice",
        "Adventure & endurance",
        "Student participation",
        "G7 curriculum resource",
      ],
      readArticle: "Read article",
      qualificationsEyebrow: "EDUCATION & PROFESSIONAL DEVELOPMENT",
      qualificationsTitle: "Academic qualifications and professional training",
      educationLabel: "Academic education",
      credentialsLabel: "Selected credentials",
      allCredentials: "View all certifications & recognitions",
      contactEyebrow: "PROFESSIONAL ENQUIRIES",
      contactTitle: "Contact Afshin Elahi",
      contactBody:
        "For enquiries relating to PE leadership, curriculum, athletics, coaching or professional development.",
      email: "Email Afshin",
      call: "Call / WeChat",
      location: "Wuxi, China",
      references: "References available upon request.",
      footerLine: "PE EDUCATION · ATHLETICS · SCHOOL LEADERSHIP",
      mediaClose: "Close media",
      mediaPrev: "Previous item",
      mediaNext: "Next item",
      openPdf: "Open full PDF",
    },
    zh: {
      nav: [
        ["about", "关于我"],
        ["expertise", "专业领域"],
        ["experience", "职业经历"],
        ["portfolio", "项目影像"],
        ["qualifications", "教育资历"],
      ],
      contact: "联系",
      menu: "菜单",
      heroEyebrow: "体育教育 · 田径运动 · 学科管理",
      heroHeadline: "体育教育与田径项目领导",
      heroLead:
        "拥有 12 年公立、双语和国际学校体育教学与管理经验。现阶段职责包括中学体育、学科管理、学院制项目及爱丁堡公爵奖。",
      primaryCta: "查看职业经历",
      secondaryCta: "联系方式",
      currentLabel: "现任职位",
      photoLabel: "体育教师 · 学科主任 · 教练",
      metrics: [
        ["12", "年从业经验"],
        ["K1–G12", "执教年龄跨度"],
        ["IB · IGCSE", "课程体系经验"],
        ["2", "体育与运动科学学位"],
      ],
      recognition: ["学科领导", "课程设计", "田径与赛事", "青少年发展"],
      aboutEyebrow: "职业概述",
      aboutTitle: "以广泛教学与执教经验为基础的体育学科管理。",
      aboutBody: [
        "Afshin Elahi 现任体育与田径学科主任，工作范围涵盖部门运营、课程规划、教师协作、体育赛事及课外活动管理，目前任职于无锡协和双语学校。",
        "其教学经验覆盖 K1 至 12 年级，包括多项目体育教学、探险教育、IB/IGCSE 运动科学、幼儿动作发展及青少年力量与体能训练。",
      ],
      aboutNote: "现阶段工作重点：中学体育、田径、学院制项目与爱丁堡公爵奖。",
      aboutImageLabel: "协和校际体育联赛",
      expertiseEyebrow: "主要职责",
      expertiseTitle: "学科管理与教学实践领域",
      expertiseIntro: "以下内容基于其现任职责及过往工作经验。",
      expertise: [
        ["01", "学科与部门管理", "负责部门规划、教师协作、课程实施及日常运营。"],
        ["02", "课程与运动科学", "具备 IB、中国国家课程与 IGCSE 情境下的课程规划经验，并教授 IB/IGCSE 运动科学。"],
        ["03", "田径与校园赛事", "策划并实施运动会、校际比赛、学院体育及课外活动项目。"],
        ["04", "青少年发展", "涵盖幼儿动作发展、青少年体能训练及符合年龄特点的多项目体育教学。"],
        ["05", "探险教育", "负责探险教育与爱丁堡公爵奖项目，重视行前准备和学生责任。"],
        ["06", "教师与教练发展", "面向体育教师与教练开展专业发展工作坊。"],
      ],
      experienceEyebrow: "任职经历",
      experienceTitle: "职业经历",
      experienceIntro: "先后任职于国际学校、双语学校及公立学校，并具有体育教练工作经验。",
      present: "至今",
      perspectiveEyebrow: "国际学校工作背景",
      perspectiveTitle: "自 2020 年起在中国任教",
      perspectiveBody:
        "他先后在杭州、常熟和无锡工作，职责涵盖小学及中学体育、探险教育、学科管理和课外体育项目。",
      perspectiveLink: "查看精选项目",
      portfolioEyebrow: "精选项目",
      portfolioTitle: "教学、田径与校园体育",
      portfolioIntro: "包括照片、视频、校园运动会文章及七年级学生手册。",
      galleryLabels: [
        "校际体育",
        "执教现场",
        "全球体育视野",
        "运动与学习",
        "校园运动会",
        "活力校园共同体",
        "团队文化",
        "教学实践",
        "探险与耐力",
        "学生参与",
        "G7 课程资源",
      ],
      readArticle: "阅读文章",
      qualificationsEyebrow: "教育与专业发展",
      qualificationsTitle: "学历与专业培训",
      educationLabel: "教育背景",
      credentialsLabel: "精选专业资历",
      allCredentials: "查看全部证书与荣誉",
      contactEyebrow: "职业联系",
      contactTitle: "联系 Afshin Elahi",
      contactBody: "欢迎就体育学科管理、课程、田径运动、执教或教师专业发展进行联系。",
      email: "发送邮件",
      call: "电话 / 微信",
      location: "中国无锡",
      references: "推荐信可按需提供。",
      footerLine: "体育教育 · 田径运动 · 学校领导力",
      mediaClose: "关闭媒体",
      mediaPrev: "上一项",
      mediaNext: "下一项",
      openPdf: "打开完整 PDF",
    },
  };

  const savedLanguage = localStorage.getItem("afshin-lang");
  let lang = savedLanguage === "zh" ? "zh" : "en";
  let activeGallery = [];
  let activeIndex = 0;
  let revealObserver;
  let keyHandler;

  const esc = (value) =>
    String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[character]));

  const arrowIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

  const mailIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="14" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="m4 6 8 7 8-7" fill="none" stroke="currentColor" stroke-width="1.5"/>
    </svg>`;

  function galleryCard(item, index, label, ui) {
    const media =
      item.type === "video"
        ? `<video src="${esc(item.src)}" muted loop playsinline preload="metadata"></video>
           <span class="media-play" aria-hidden="true">▶</span>`
        : `<img src="${esc(item.cover || item.src)}" alt="${esc(item.label || label)}" loading="lazy" />`;

    const meta = `
      <span class="gallery-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="gallery-caption">${esc(label)}</span>
      <span class="gallery-arrow">${arrowIcon}</span>`;

    if (item.type === "link") {
      return `
        <a class="gallery-card gallery-link reveal" href="${esc(item.href)}" target="_blank" rel="noopener">
          <div class="gallery-media">${media}</div>
          <div class="gallery-meta">${meta}</div>
          <span class="gallery-action">${esc(ui.readArticle)} ↗</span>
        </a>`;
    }

    return `
      <button class="gallery-card reveal" type="button" data-gallery-index="${index}" aria-label="${esc(label)}">
        <div class="gallery-media">${media}</div>
        <div class="gallery-meta">${meta}</div>
      </button>`;
  }

  function render() {
    const content = CONTENT[lang];
    const ui = UI[lang];
    const currentJob = content.experience.items[0];
    const currentYear = new Date().getFullYear();
    activeGallery = content.gallery.items;

    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title =
      lang === "zh"
        ? "Afshin Elahi（福星）— 体育教育与田径学科领导者"
        : "Afshin Elahi — PE & Athletics Leader";

    document.querySelector("#app").innerHTML = `
      <header class="site-header">
        <a class="brand" href="#top" aria-label="Afshin Elahi home">
          <span class="brand-mark">AE</span>
          <span class="brand-copy">
            <strong>Afshin Elahi</strong>
            <small>${lang === "zh" ? "福星 · 体育教育领导者" : "PE & Athletics Leader"}</small>
          </span>
        </a>
        <nav class="desktop-nav" aria-label="${lang === "zh" ? "主导航" : "Primary navigation"}">
          ${ui.nav.map(([id, label]) => `<a href="#${id}">${esc(label)}</a>`).join("")}
        </nav>
        <div class="header-actions">
          <button class="language-toggle" type="button" aria-label="Switch language / 切换语言">
            <span class="${lang === "en" ? "active" : ""}">EN</span>
            <i></i>
            <span class="${lang === "zh" ? "active" : ""}">中</span>
          </button>
          <a class="header-contact" href="#contact">${esc(ui.contact)}</a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-navigation">
            <span>${esc(ui.menu)}</span><i></i>
          </button>
        </div>
        <nav class="mobile-nav" id="mobile-navigation" aria-label="${lang === "zh" ? "移动导航" : "Mobile navigation"}">
          ${ui.nav.map(([id, label]) => `<a href="#${id}">${esc(label)}</a>`).join("")}
          <a href="#contact">${esc(ui.contact)}</a>
        </nav>
      </header>

      <main id="main-content">
        <section class="hero page-shell" id="top">
          <div class="hero-photo">
            <img src="assets/pic-3.jpg" alt="${lang === "zh" ? "Afshin Elahi 参加体育活动" : "Afshin Elahi at a sporting event"}" />
            <div class="hero-photo-shade"></div>
            <span class="hero-photo-label">${esc(ui.photoLabel)}</span>
          </div>
          <div class="hero-content">
            <p class="eyebrow">${esc(ui.heroEyebrow)}</p>
            <div class="hero-name-row">
              <h1>Afshin<br />Elahi</h1>
              <span class="hero-cn">福星</span>
            </div>
            <p class="hero-role">${esc(content.hero.title)}</p>
            <div class="hero-rule"></div>
            <h2>${esc(ui.heroHeadline)}</h2>
            <p class="hero-lead">${esc(ui.heroLead)}</p>
            <div class="hero-ctas">
              <a class="button button-gold" href="#experience">${esc(ui.primaryCta)} ${arrowIcon}</a>
              <a class="text-link light" href="#contact">${esc(ui.secondaryCta)} ${arrowIcon}</a>
            </div>
            <div class="hero-current">
              <span>${esc(ui.currentLabel)}</span>
              <strong>${esc(currentJob.institution)}</strong>
              <small>${esc(currentJob.role)}</small>
            </div>
          </div>
        </section>

        <section class="metrics page-shell" aria-label="${lang === "zh" ? "核心资历" : "Key credentials"}">
          ${ui.metrics
            .map(
              ([value, label]) => `
                <div class="metric reveal">
                  <strong>${esc(value)}</strong>
                  <span>${esc(label)}</span>
                </div>`
            )
            .join("")}
        </section>

        <div class="recognition-band" aria-hidden="true">
          <div class="recognition-track">
            ${ui.recognition.concat(ui.recognition).map((item) => `<span>${esc(item)}</span>`).join("")}
          </div>
        </div>

        <section class="about section page-shell" id="about">
          <div class="section-copy reveal">
            <p class="eyebrow green">${esc(ui.aboutEyebrow)}</p>
            <h2 class="display-title">${esc(ui.aboutTitle)}</h2>
            ${ui.aboutBody.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
            <a class="text-link" href="#expertise">${esc(ui.nav[1][1])} ${arrowIcon}</a>
          </div>
          <figure class="about-visual reveal">
            <img src="assets/pic-1.jpg" alt="${lang === "zh" ? "Afshin 与校际比赛学生团队" : "Afshin with a student team at an inter-school event"}" loading="lazy" />
            <figcaption>${esc(ui.aboutImageLabel)}</figcaption>
            <p class="about-note">${esc(ui.aboutNote)}</p>
          </figure>
        </section>

        <section class="expertise section" id="expertise">
          <div class="page-shell">
            <div class="section-intro split-intro reveal">
              <div>
                <p class="eyebrow gold">${esc(ui.expertiseEyebrow)}</p>
                <h2 class="display-title light-title">${esc(ui.expertiseTitle)}</h2>
              </div>
              <p>${esc(ui.expertiseIntro)}</p>
            </div>
            <div class="expertise-grid">
              ${ui.expertise
                .map(
                  ([number, title, body]) => `
                    <article class="expertise-card reveal">
                      <span>${esc(number)}</span>
                      <h3>${esc(title)}</h3>
                      <p>${esc(body)}</p>
                      <i>${arrowIcon}</i>
                    </article>`
                )
                .join("")}
            </div>
          </div>
        </section>

        <section class="experience section page-shell" id="experience">
          <div class="section-intro split-intro reveal">
            <div>
              <p class="eyebrow green">${esc(ui.experienceEyebrow)}</p>
              <h2 class="display-title">${esc(ui.experienceTitle)}</h2>
            </div>
            <p>${esc(ui.experienceIntro)}</p>
          </div>
          <div class="career-list">
            ${content.experience.items
              .map(
                (job, index) => `
                  <article class="career-item reveal ${job.current ? "current" : ""}">
                    <div class="career-index">${String(index + 1).padStart(2, "0")}</div>
                    <div class="career-date">
                      ${esc(job.date)}
                      ${job.current ? `<span>${esc(ui.present)}</span>` : ""}
                    </div>
                    <div class="career-main">
                      <h3>${esc(job.institution)}</h3>
                      <p>${esc(job.role)}</p>
                    </div>
                  </article>`
              )
              .join("")}
          </div>
        </section>

        <section class="perspective">
          <div class="perspective-image">
            <img src="assets/pic-2.jpg" alt="${lang === "zh" ? "Afshin 在巴黎奥运五环前" : "Afshin at the Olympic rings in Paris"}" loading="lazy" />
          </div>
          <div class="perspective-copy">
            <p class="eyebrow gold">${esc(ui.perspectiveEyebrow)}</p>
            <h2 class="display-title light-title">${esc(ui.perspectiveTitle)}</h2>
            <p>${esc(ui.perspectiveBody)}</p>
            <a class="text-link light" href="#portfolio">${esc(ui.perspectiveLink)} ${arrowIcon}</a>
          </div>
        </section>

        <section class="portfolio section page-shell" id="portfolio">
          <div class="section-intro split-intro reveal">
            <div>
              <p class="eyebrow green">${esc(ui.portfolioEyebrow)}</p>
              <h2 class="display-title">${esc(ui.portfolioTitle)}</h2>
            </div>
            <p>${esc(ui.portfolioIntro)}</p>
          </div>
          <div class="gallery-grid">
            ${content.gallery.items
              .map((item, index) => galleryCard(item, index, ui.galleryLabels[index] || content.gallery.title, ui))
              .join("")}
          </div>
        </section>

        <section class="qualifications section" id="qualifications">
          <div class="page-shell">
            <div class="section-intro split-intro reveal">
              <div>
                <p class="eyebrow gold">${esc(ui.qualificationsEyebrow)}</p>
                <h2 class="display-title light-title">${esc(ui.qualificationsTitle)}</h2>
              </div>
            </div>
            <div class="qualification-layout">
              <div class="education-column">
                <h3 class="column-label">${esc(ui.educationLabel)}</h3>
                ${content.education.items
                  .map(
                    (item, index) => `
                      <article class="education-item reveal">
                        <span>0${index + 1}</span>
                        <h4>${esc(item.degree)}</h4>
                        <p>${esc(item.school)}</p>
                      </article>`
                  )
                  .join("")}
              </div>
              <div class="credentials-column">
                <h3 class="column-label">${esc(ui.credentialsLabel)}</h3>
                ${content.certifications.items
                  .slice(0, 6)
                  .map(
                    (item, index) => `
                      <article class="credential-item reveal">
                        <span>${String(index + 1).padStart(2, "0")}</span>
                        <div><h4>${esc(item.t)}</h4><p>${esc(item.d)}</p></div>
                      </article>`
                  )
                  .join("")}
                <details class="all-credentials">
                  <summary>${esc(ui.allCredentials)} <span>+</span></summary>
                  <div class="all-credentials-list">
                    ${content.certifications.items
                      .slice(6)
                      .map(
                        (item, index) => `
                          <article class="credential-item">
                            <span>${String(index + 7).padStart(2, "0")}</span>
                            <div><h4>${esc(item.t)}</h4><p>${esc(item.d)}</p></div>
                          </article>`
                      )
                      .join("")}
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section class="contact page-shell" id="contact">
          <div class="contact-copy">
            <p class="eyebrow gold">${esc(ui.contactEyebrow)}</p>
            <h2>${esc(ui.contactTitle)}</h2>
            <p>${esc(ui.contactBody)}</p>
            <a class="contact-email" href="mailto:${esc(content.hero.email)}">${esc(content.hero.email)} ${arrowIcon}</a>
          </div>
          <div class="contact-details">
            <a href="mailto:${esc(content.hero.email)}">${mailIcon}<span>${esc(ui.email)}</span></a>
            <a href="tel:+8615867192025"><span class="contact-icon">＋</span><span>${esc(ui.call)}<small>${esc(content.hero.phone)}</small></span></a>
            <div><span class="contact-icon">⌖</span><span>${esc(ui.location)}<small>${esc(ui.references)}</small></span></div>
          </div>
        </section>
      </main>

      <footer class="site-footer page-shell">
        <div class="footer-brand">
          <span class="brand-mark">AE</span>
          <div><strong>Afshin Elahi · 福星</strong><small>${esc(ui.footerLine)}</small></div>
        </div>
        <span>© ${currentYear} Afshin Elahi</span>
        <a href="#top">${lang === "zh" ? "返回顶部" : "Back to top"} ↑</a>
      </footer>

      <div class="lightbox" role="dialog" aria-modal="true" aria-label="${lang === "zh" ? "媒体预览" : "Media preview"}" hidden>
        <button class="lightbox-close" type="button" aria-label="${esc(ui.mediaClose)}">×</button>
        <button class="lightbox-arrow lightbox-prev" type="button" aria-label="${esc(ui.mediaPrev)}">‹</button>
        <div class="lightbox-stage"></div>
        <button class="lightbox-arrow lightbox-next" type="button" aria-label="${esc(ui.mediaNext)}">›</button>
      </div>
    `;

    bindInteractions();
    observeReveals();
  }

  function bindInteractions() {
    const ui = UI[lang];
    const languageToggle = document.querySelector(".language-toggle");
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    const lightbox = document.querySelector(".lightbox");

    languageToggle.addEventListener("click", () => {
      lang = lang === "en" ? "zh" : "en";
      localStorage.setItem("afshin-lang", lang);
      if (keyHandler) document.removeEventListener("keydown", keyHandler);
      render();
    });

    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!open));
      mobileNav.classList.toggle("open", !open);
      document.body.classList.toggle("menu-open", !open);
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        mobileNav.classList.remove("open");
        document.body.classList.remove("menu-open");
      });
    });

    document.querySelectorAll(".gallery-card video").forEach((video) => {
      const card = video.closest(".gallery-card");
      card.addEventListener("mouseenter", () => video.play().catch(() => {}));
      card.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
      });
    });

    document.querySelectorAll("[data-gallery-index]").forEach((card) => {
      card.addEventListener("click", () => openLightbox(Number(card.dataset.galleryIndex)));
    });

    lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    lightbox.querySelector(".lightbox-prev").addEventListener("click", () => showLightbox(activeIndex - 1));
    lightbox.querySelector(".lightbox-next").addEventListener("click", () => showLightbox(activeIndex + 1));
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });

    keyHandler = (event) => {
      if (lightbox.hidden) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showLightbox(activeIndex - 1);
      if (event.key === "ArrowRight") showLightbox(activeIndex + 1);
    };
    document.addEventListener("keydown", keyHandler);

    const details = document.querySelector(".all-credentials");
    if (details) {
      details.addEventListener("toggle", () => {
        const indicator = details.querySelector("summary span");
        indicator.textContent = details.open ? "−" : "+";
      });
    }

    function openLightbox(index) {
      activeIndex = index;
      showLightbox(index);
      lightbox.hidden = false;
      lightbox.classList.add("open");
      document.body.classList.add("modal-open");
      lightbox.querySelector(".lightbox-close").focus();
    }

    function closeLightbox() {
      lightbox.classList.remove("open");
      document.body.classList.remove("modal-open");
      lightbox.querySelector(".lightbox-stage").innerHTML = "";
      setTimeout(() => {
        lightbox.hidden = true;
      }, 220);
    }

    function showLightbox(index) {
      activeIndex = (index + activeGallery.length) % activeGallery.length;
      const item = activeGallery[activeIndex];
      const stage = lightbox.querySelector(".lightbox-stage");

      if (item.type === "video") {
        stage.innerHTML = `<video src="${esc(item.src)}" controls autoplay playsinline></video>`;
      } else if (item.type === "pdf") {
        const pages = Array.from({ length: item.pages }, (_, pageIndex) => {
          const path = `${item.pagesDir}/page-${String(pageIndex + 1).padStart(2, "0")}.jpg`;
          return `<img src="${path}" loading="lazy" alt="${esc(item.label)} — ${pageIndex + 1}" />`;
        }).join("");
        stage.innerHTML = `
          <div class="document-preview">
            <div class="document-pages">${pages}</div>
            <a href="${esc(item.src)}" target="_blank" rel="noopener">${esc(ui.openPdf)} ↗</a>
          </div>`;
      } else if (item.type === "image") {
        stage.innerHTML = `<img src="${esc(item.src)}" alt="${esc(ui.galleryLabels[activeIndex] || "")}" />`;
      } else {
        stage.innerHTML = "";
      }
    }
  }

  function observeReveals() {
    if (revealObserver) revealObserver.disconnect();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
      return;
    }

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" }
    );

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
  }

  render();
})();
