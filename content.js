/* ============================================================
 * Afshin Elahi — Resume & Portfolio Site
 * CONTENT DATA FILE (bilingual)
 *
 * HOW TO UPDATE LATER:
 *  - English (en) text is verbatim from the CV — do not reword.
 *  - Chinese (zh) is the translation shown after the toggle.
 *  - To add a portfolio project: copy one object inside
 *    `portfolio.slots` and fill title / desc / tags / link.
 *    Set `placeholder: false` to render it as a real project.
 * ============================================================ */

const CONTENT = {
  en: {
    langName: "English",
    nav: {
      summary: "Summary",
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      name: "Afshin Elahi",
      cnName: "福星",
      title: "PE Educator & Head of Department (HOD)",
      residenceLabel: "Current Residence",
      residence: "Wuxi, China",
      phoneLabel: "Mobile & WeChat",
      phone: "(+86) 15867192025",
      emailLabel: "Email",
      email: "afshin.elahi@gmail.com",
      scrollHint: "Scroll to explore",
      stats: [
        { num: 12, suffix: "+", label: "Years of Experience" },
        { num: 5, suffix: "", label: "Schools & Clubs" },
        { num: 24, suffix: "", label: "Certifications & Recognitions" },
        { num: 12, suffix: "", prefix: "G1–G", label: "Grade Range Taught", static: "G1–G12" },
      ],
    },
    marquee: [
      "ATHLETICS", "VOLLEYBALL", "HANDBALL", "FRISBEE", "ADVENTURE EDUCATION",
      "IB / IGCSE SPORTS SCIENCE", "STRENGTH & CONDITIONING", "EARLY YEARS MOTOR DEVELOPMENT",
      "CURRICULUM PLANNING", "SPORTS EVENTS", "TEAM LEADERSHIP",
    ],
    summary: {
      title: "Professional Summary",
      items: [
        "PE & Athletics HOD (Director) with 12 years of experience across leading and teaching in public, bilingual, and international school settings (G1–G12), including years based in China.",
        "Master's and Bachelor's degrees in Physical Education (PE) and Sports Science.",
        "Core expertise includes department operations; curriculum planning (integrating IB, Chinese, and IGCSE frameworks); sports event organization; sports ECA management; team leadership; multi-sport instruction (athletics, volleyball, handball, frisbee, etc.); adventure education; teaching IB/IGCSE Sports Science; early years motor development; youth strength and conditioning; and leading workshops for coaches and PE teachers.",
        "Former college runner and youth conditioning coach.",
      ],
    },
    experience: {
      title: "Work Experience",
      items: [
        {
          date: "Aug 2023 – Present",
          institution: "Shanghai United International School (SUIS) - Wuxi Campus (无锡市协和双语学校)",
          role: "Secondary School PE & Athletic HOD, House Master and Duke of Edinburgh (DofE) Award Leader",
          current: true,
        },
        {
          date: "Aug 2021 – July 2023",
          institution: "Kang Chiao International School (KCIS) - Changshu Campus, (康桥国际学校常熟校区)",
          role: "PE Teacher and AE (Adventure Education) Coach",
        },
        {
          date: "Mar 2020 – July 2021",
          institution: "Hangzhou Binjiang Experimental Primary School(杭州市滨江实验小学)",
          role: "PE Teacher and Coach",
        },
        {
          date: "Aug 2014 – Feb 2019",
          institution: "Farhang Saadat School",
          role: "PE Teacher and Coach",
        },
        {
          date: "Aug 2014 – Feb 2019",
          institution: "Palladium Fitness Club",
          role: "Coach & Sports Consultant",
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Master Degree in Physical Education (PE), Sport Biomechanics",
          school: "Tehran Central branch of Azad university, Tehran",
        },
        {
          degree: "Bachelor Degree in Physical Education (PE), Sports Engineering",
          school: "Science & Research branch of Azad university, Tehran",
        },
      ],
    },
    certifications: {
      title: "Professional Certifications & Recognitions",
      items: [
        { t: "Certificate of Recognition — Workshop Leader", d: "Xiehe Cross-Campus PD Day, 21 March 2026" },
        { t: "Football Behavior Management: Scouting, Player Selection, Team Direction (48 hrs)", d: "July 2025, Vrije Universiteit Amsterdam" },
        { t: "IB DP Sport, Exercise and Health Science (Cat.1) (16 hrs, online)", d: "Feb 2025, IB" },
        { t: "Letter of Appreciation — Volunteering at 19th Asian Games", d: "23 Sept – 8 Oct 2023, Iran Olympic Committee, Hangzhou" },
        { t: "Basic Instructor: Certified to Train Coaches (online)", d: "9–13 May 2023, IFBB Academy of Iran" },
        { t: "IB MYP Physical and Health Education (Cat.1) (16 hrs, online)", d: "Feb–March 2022, IB" },
        { t: "Kids' Fitness Course for Trainers (online)", d: "25–28 Jan 2022, Body Building Federation of Iran" },
        { t: "Coaching Fundamental Sport Skills of Young Athletes (6 hrs, online)", d: "26 Dec 2021, CAPS" },
        { t: "Coaching Children's Perceptual-Motor Skills (12 hrs, online)", d: "25–26 Feb 2021, CAPS" },
        { t: "Sport Talent Identification Master Course", d: "11–17 Feb 2017, Sport Sciences Research Institute of Iran" },
        { t: "Body Building Coaching (60 hrs)", d: "21 June 2016, Body Building & Powerlifting Federation of Iran" },
        { t: "Internship as Personal Trainer (3 months)", d: "Dec 2013 – Mar 2014, Oxygen Royal Fitness Club, Iran" },
        { t: "Sport Psychology Workshop, 9th Sport Medicine Congress", d: "11 Oct 2013, Iran" },
        { t: "9th Sport Medicine Congress", d: "10–11 Oct 2013, Iran" },
        { t: "Sport Psychology Workshop", d: "13 Sep 2013, Iran" },
        { t: "Exercise Programming Workshop", d: "14 Aug 2013, National Olympic Academy of Iran" },
        { t: "Applied Physiology in Sport Nutrition", d: "17 Feb 2013, Sport Medicine Federation of Iran" },
        { t: "Internship Training Course (150 hrs)", d: "Sep–Nov 2012, Zendegi Health Complex, Iran" },
        { t: "ISAK Level 1 Training Course", d: "26–28 June 2012, Sport Medicine Federation of Iran" },
        { t: "2nd National Conference of Sport Talent Identification", d: "17–18 Oct 2012, University of Tehran" },
        { t: "Weight Management & Nutrition Workshop, 2nd Sport Medicine Congress", d: "21–22 July 2011, Iran" },
        { t: "Corrective Exercise Programming Workshop, 2nd Sport Medicine Congress", d: "21–22 July 2011, Iran" },
        { t: "Fitness Instructor Diploma (60 hrs)", d: "7–11 Aug 2010, Iran Federation of Aerobics and Fitness" },
        { t: "Emergency Rescue Short Course (80 hrs)", d: "26 Feb – 10 Jun 2010, Iran" },
      ],
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Selected projects & showcases — more pieces are on the way.",
      slots: [
        {
          placeholder: true,
          title: "Project Slot 01",
          desc: "Portfolio piece coming soon — this space is reserved for an upcoming project showcase.",
          tags: ["Coming Soon"],
          link: "",
        },
        {
          placeholder: true,
          title: "Project Slot 02",
          desc: "Portfolio piece coming soon — this space is reserved for an upcoming project showcase.",
          tags: ["Coming Soon"],
          link: "",
        },
        {
          placeholder: true,
          title: "Project Slot 03",
          desc: "Portfolio piece coming soon — this space is reserved for an upcoming project showcase.",
          tags: ["Coming Soon"],
          link: "",
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      note: "(References available upon request)",
    },
    footer: "Afshin Elahi (福星) — PE Educator & Head of Department",
  },

  /* -------------------- 中文翻译 -------------------- */
  zh: {
    langName: "中文",
    nav: {
      summary: "职业概述",
      experience: "工作经历",
      education: "教育背景",
      certifications: "证书与荣誉",
      portfolio: "作品集",
      contact: "联系方式",
    },
    hero: {
      name: "Afshin Elahi",
      cnName: "福星",
      title: "体育教育者 · 体育学科主任（HOD）",
      residenceLabel: "现居地",
      residence: "中国无锡",
      phoneLabel: "手机 / 微信",
      phone: "(+86) 15867192025",
      emailLabel: "电子邮箱",
      email: "afshin.elahi@gmail.com",
      scrollHint: "下滑探索",
      stats: [
        { num: 12, suffix: "+", label: "年执教经验" },
        { num: 5, suffix: "", label: "所学校 / 俱乐部" },
        { num: 24, suffix: "", label: "项证书与荣誉" },
        { num: 12, suffix: "", prefix: "G1–G", label: "覆盖年级跨度", static: "G1–G12" },
      ],
    },
    marquee: [
      "田径", "排球", "手球", "飞盘", "探险教育",
      "IB / IGCSE 运动科学", "青少年体能训练", "幼儿动作发展",
      "课程规划", "赛事组织", "团队领导",
    ],
    summary: {
      title: "职业概述",
      items: [
        "体育与田径学科主任（总监级），拥有 12 年公立、双语及国际学校（G1–G12）教学与管理经验，其中多年在中国执教。",
        "持有体育教育（PE）与运动科学方向的硕士及学士学位。",
        "核心专长涵盖：部门运营管理；课程规划（融合 IB、中国国家课程与 IGCSE 体系）；体育赛事组织；体育课外活动（ECA）管理；团队领导；多运动项目教学（田径、排球、手球、飞盘等）；探险教育；IB/IGCSE 运动科学教学；幼儿动作发展；青少年力量与体能训练；以及面向教练员与体育教师的工作坊主持。",
        "曾任大学田径运动员及青少年体能教练。",
      ],
    },
    experience: {
      title: "工作经历",
      items: [
        {
          date: "2023 年 8 月 – 至今",
          institution: "上海协和双语学校（SUIS）无锡校区（无锡市协和双语学校）",
          role: "中学体育与田径学科主任、学院舍监、爱丁堡公爵奖（DofE）项目负责人",
          current: true,
        },
        {
          date: "2021 年 8 月 – 2023 年 7 月",
          institution: "康桥国际学校（KCIS）常熟校区（康桥国际学校常熟校区）",
          role: "体育教师兼探险教育（AE）教练",
        },
        {
          date: "2020 年 3 月 – 2021 年 7 月",
          institution: "杭州市滨江实验小学",
          role: "体育教师兼教练",
        },
        {
          date: "2014 年 8 月 – 2019 年 2 月",
          institution: "Farhang Saadat 学校（伊朗）",
          role: "体育教师兼教练",
        },
        {
          date: "2014 年 8 月 – 2019 年 2 月",
          institution: "Palladium 健身俱乐部（伊朗）",
          role: "教练兼运动顾问",
        },
      ],
    },
    education: {
      title: "教育背景",
      items: [
        {
          degree: "体育教育（PE）硕士 · 运动生物力学方向",
          school: "伊朗伊斯兰阿扎德大学 德黑兰中央分校，德黑兰",
        },
        {
          degree: "体育教育（PE）学士 · 运动工程方向",
          school: "伊朗伊斯兰阿扎德大学 科学研究分校，德黑兰",
        },
      ],
    },
    certifications: {
      title: "专业证书与荣誉",
      items: [
        { t: "荣誉证书 — 工作坊主讲人", d: "协和跨校区教师专业发展日，2026 年 3 月 21 日" },
        { t: "足球行为管理：球探、选材与球队指导（48 学时）", d: "2025 年 7 月，阿姆斯特丹自由大学" },
        { t: "IB DP 运动、锻炼与健康科学（Cat.1，16 学时，线上）", d: "2025 年 2 月，国际文凭组织（IB）" },
        { t: "感谢信 — 第 19 届亚运会志愿服务", d: "2023 年 9 月 23 日 – 10 月 8 日，伊朗奥委会，杭州" },
        { t: "基础指导员：教练员培训认证（线上）", d: "2023 年 5 月 9–13 日，伊朗 IFBB 学院" },
        { t: "IB MYP 体育与健康教育（Cat.1，16 学时，线上）", d: "2022 年 2–3 月，国际文凭组织（IB）" },
        { t: "儿童体能训练师课程（线上）", d: "2022 年 1 月 25–28 日，伊朗健美联合会" },
        { t: "青少年运动员基础运动技能执教（6 学时，线上）", d: "2021 年 12 月 26 日，CAPS" },
        { t: "儿童感知—动作技能执教（12 学时，线上）", d: "2021 年 2 月 25–26 日，CAPS" },
        { t: "运动人才识别大师课程", d: "2017 年 2 月 11–17 日，伊朗体育科学研究所" },
        { t: "健美教练（60 学时）", d: "2016 年 6 月 21 日，伊朗健美与力量举联合会" },
        { t: "私人教练实习（3 个月）", d: "2013 年 12 月 – 2014 年 3 月，伊朗 Oxygen Royal 健身俱乐部" },
        { t: "运动心理学工作坊（第 9 届运动医学大会）", d: "2013 年 10 月 11 日，伊朗" },
        { t: "第 9 届运动医学大会", d: "2013 年 10 月 10–11 日，伊朗" },
        { t: "运动心理学工作坊", d: "2013 年 9 月 13 日，伊朗" },
        { t: "运动处方工作坊", d: "2013 年 8 月 14 日，伊朗国家奥林匹克学院" },
        { t: "运动营养中的应用生理学", d: "2013 年 2 月 17 日，伊朗运动医学联合会" },
        { t: "实习培训课程（150 学时）", d: "2012 年 9–11 月，伊朗 Zendegi 健康中心" },
        { t: "ISAK 一级培训课程", d: "2012 年 6 月 26–28 日，伊朗运动医学联合会" },
        { t: "第二届全国运动人才识别大会", d: "2012 年 10 月 17–18 日，德黑兰大学" },
        { t: "体重管理与营养工作坊（第 2 届运动医学大会）", d: "2011 年 7 月 21–22 日，伊朗" },
        { t: "纠正性训练处方工作坊（第 2 届运动医学大会）", d: "2011 年 7 月 21–22 日，伊朗" },
        { t: "健身指导员文凭（60 学时）", d: "2010 年 8 月 7–11 日，伊朗有氧与健身联合会" },
        { t: "应急救援短期课程（80 学时）", d: "2010 年 2 月 26 日 – 6 月 10 日，伊朗" },
      ],
    },
    portfolio: {
      title: "作品集",
      subtitle: "精选项目与成果展示——更多作品正在路上。",
      slots: [
        {
          placeholder: true,
          title: "项目展位 01",
          desc: "作品即将上线——此展位为后续项目展示预留。",
          tags: ["敬请期待"],
          link: "",
        },
        {
          placeholder: true,
          title: "项目展位 02",
          desc: "作品即将上线——此展位为后续项目展示预留。",
          tags: ["敬请期待"],
          link: "",
        },
        {
          placeholder: true,
          title: "项目展位 03",
          desc: "作品即将上线——此展位为后续项目展示预留。",
          tags: ["敬请期待"],
          link: "",
        },
      ],
    },
    contact: {
      title: "与我联系",
      note: "（推荐信可按需提供）",
    },
    footer: "Afshin Elahi（福星）— 体育教育者 · 体育学科主任",
  },
};
