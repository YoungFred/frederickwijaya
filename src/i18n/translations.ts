export type Lang = "en" | "zh" | "ja" | "fr";

export const languages: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "中文", short: "中文" },
  { code: "ja", label: "日本語", short: "日本語" },
  { code: "fr", label: "Français", short: "FR" },
];

type Dict = {
  nav: { resume: string; projects: string; contact: string; explore: string; location: string; legal: string; contactLabel: string };
  intro: { greeting: string; enter: string };
  common: { downloadCv: string; letsConnect: string; scroll: string; basedIn: string; education: string };
  home: {
    est: string;
    whoLabel: string;
    whoText: string;
    whoWord: string;
    nowLabel: string;
    nowTitle: string;
    fullExperience: string;
    projectsLabel: string;
    projectsTitle: string;
    exploreProjects: string;
    toolkitLabel: string;
    toolkitTitle: string;
  };
  about: {
    kicker: string;
    title: string;
    experienceLabel: string;
    experienceTitle: string;
    educationLabel: string;
    skillsLabel: string;
    styleLabel: string;
    styleText: string;
  };
  work: { kicker: string; title: string; intro: string };
  contact: { kicker: string; title: string; intro: string; outro: string };
  profile: { title: string; summary: string; location: string };
  education: { program: string; description: string };
  skillLabels: string[];
  experience: { role: string; type: string; period: string; location: string; description: string; highlights: string[] }[];
};

export const translations: Record<Lang, Dict> = {
  en: {
    nav: { resume: "Resume", projects: "Projects", contact: "Contact", explore: "Explore", location: "Location", legal: "Legal", contactLabel: "Contact" },
    intro: { greeting: "Welcome", enter: "Enter" },
    common: { downloadCv: "Download CV", letsConnect: "Let’s connect", scroll: "Scroll to explore", basedIn: "Based in", education: "Education" },
    home: {
      est: "Est. 2006",
      whoLabel: "01 / who I am",
      whoText: "An engineering student who is equally at home on a production floor, in a workshop, and on stage hosting a ceremony — {word} about how systems and people work.",
      whoWord: "curious",
      nowLabel: "02 / now",
      nowTitle: "What I’m doing",
      fullExperience: "Full experience",
      projectsLabel: "03 / selected projects",
      projectsTitle: "Projects that show how I think and make.",
      exploreProjects: "Explore all projects",
      toolkitLabel: "04 / toolkit",
      toolkitTitle: "Skills across systems and people.",
    },
    about: {
      kicker: "Resume / profile",
      title: "About me.",
      experienceLabel: "01 / experience",
      experienceTitle: "Learning by being in the work.",
      educationLabel: "02 / education",
      skillsLabel: "03 / skills",
      styleLabel: "04 / working style",
      styleText: "I bring curiosity to unfamiliar systems, care to the details, and energy to the rooms where people work together.",
    },
    work: { kicker: "Portfolio / projects", title: "Selected projects.", intro: "A visual record of creative, digital, and experimental projects." },
    contact: {
      kicker: "Let’s connect",
      title: "Have a project, opportunity, or good question?",
      intro: "I’m open to conversations around engineering, operations, events, and creative collaboration.",
      outro: "Reach out through any of the channels above — I’ll get back to you as soon as I can.",
    },
    profile: {
      title: "Engineering student",
      summary:
        "Analytical engineering student at National Tsing Hua University with practical experience in operational workflow optimization, project management, and diplomatic leadership. Proven track record in data cataloging, cross-functional team management, and international stakeholder coordination.",
      location: "Hsinchu City, Taiwan",
    },
    education: {
      program: "B.S. in Power Mechanical Engineering & Industrial Engineering",
      description: "GPA: 3.6 / 4.3. University Scholarship recipient since enrollment. Relevant coursework: Engineering Economics, Manufacturing Processes, Computer-Aided Drawing, Energy Engineering.",
    },
    skillLabels: ["Data & Analytics", "Engineering & Software", "Languages"],
    experience: [
      {
        role: "Rotational Intern (Corporate Operations & Manufacturing)",
        type: "On-site",
        period: "Jun 2026 — Aug 2026",
        location: "Bade District, Taoyuan City, Taiwan",
        description: "Rotated across corporate divisions and manufacturing floors to standardize operations, document workflows, and identify production bottlenecks.",
        highlights: [
          "Standardized administrative workflows and operational documentation across 3 corporate divisions, reducing internal document processing time by 15%.",
          "Analyzed end-to-end production lines and machinery workflows across 4 manufacturing shop floors to identify and eliminate process bottlenecks.",
        ],
      },
      {
        role: "Engineering Member (Chassis Division)",
        type: "On-site",
        period: "Mar 2026 — Present",
        location: "Hsinchu City, Taiwan",
        description: "Active chassis division member applying CAD-based design and engineering teamwork to develop competition vehicle systems.",
        highlights: ["Utilized Autodesk Inventor to design high-performance chassis systems, optimizing structural integrity and vehicle safety frame specs."],
      },
      {
        role: "Chief Trainer & Diplomatic Protocol Lead",
        type: "Part-time",
        period: "Jul 2025 — Present",
        location: "Hsinchu City, Taiwan",
        description: "Protocol lead and chief trainer for NTHU’s diplomatic ambassador team, designing curricula and hosting high-profile ceremonies for international delegations.",
        highlights: [
          "Promoted to Chief Trainer (Jul 2026); designed and delivered a comprehensive 6-week training curriculum on diplomatic protocol and public speaking to 12 trainees.",
          "Served as primary English Master of Ceremonies (MC) for 8+ high-profile university ceremonies hosting VIP international delegations.",
        ],
      },
      {
        role: "Senior Event Planner",
        type: "Full-time",
        period: "Jul 2025 — Present",
        location: "Hsinchu City, Taiwan",
        description: "Senior planner directing logistics, cross-departmental teams, and event budgets for international flagship campus events.",
        highlights: ["Advanced to Senior Planner to direct end-to-end logistics, cross-departmental teams of 15+ members, and more than NT$75,000 budget for international flagship campus events."],
      },
      {
        role: "Conservation & Inventory Project Intern",
        type: "On-site",
        period: "Dec 2025 — Jan 2026",
        location: "Hsinchu City, Taiwan",
        description: "Winter intern supporting the systematic inventory, categorization, and digital archiving of historical and research artifacts.",
        highlights: ["Executed systematic data cataloging, categorization, and digital archiving for 500+ historical artifacts, improving database search efficiency and ensuring data integrity."],
      },
    ],
  },
  zh: {
    nav: { resume: "履歷", projects: "專案", contact: "聯絡", explore: "探索", location: "所在地", legal: "版權", contactLabel: "聯絡方式" },
    intro: { greeting: "歡迎", enter: "進入" },
    common: { downloadCv: "下載履歷", letsConnect: "與我聯繫", scroll: "向下瀏覽", basedIn: "所在地", education: "學歷" },
    home: {
      est: "生於 2006",
      whoLabel: "01 / 關於我",
      whoText: "一位工程系學生，既能在生產線與工廠裡動手，也能站上舞台主持典禮——對系統與人的運作充滿{word}。",
      whoWord: "好奇",
      nowLabel: "02 / 現在",
      nowTitle: "我正在做的事",
      fullExperience: "完整經歷",
      projectsLabel: "03 / 精選專案",
      projectsTitle: "呈現我如何思考與創作的專案。",
      exploreProjects: "瀏覽所有專案",
      toolkitLabel: "04 / 技能",
      toolkitTitle: "跨越系統與人際的能力。",
    },
    about: {
      kicker: "履歷 / 簡介",
      title: "關於我。",
      experienceLabel: "01 / 經歷",
      experienceTitle: "在實作中學習。",
      educationLabel: "02 / 學歷",
      skillsLabel: "03 / 技能",
      styleLabel: "04 / 工作風格",
      styleText: "面對陌生的系統保持好奇，對細節保持用心，並為團隊合作的場合帶來能量。",
    },
    work: { kicker: "作品集 / 專案", title: "精選專案。", intro: "創意、數位與實驗性專案的視覺紀錄。" },
    contact: {
      kicker: "與我聯繫",
      title: "有專案、機會，或想問的問題嗎？",
      intro: "歡迎與我談談工程、營運、活動策劃與各種創意合作。",
      outro: "透過以上任一管道聯絡我，我會盡快回覆。",
    },
    profile: {
      title: "工程系學生",
      summary:
        "國立清華大學工程系學生，具備營運流程優化、專案管理與外賓接待領導的實務經驗，擅長資料建檔、跨部門團隊管理與國際貴賓協調。",
      location: "台灣新竹市",
    },
    education: {
      program: "動力機械工程與工業工程學士",
      description: "GPA: 3.6 / 4.3。自入學起獲頒大學獎學金。相關課程：工程經濟學、製造工程、電腦輔助製圖、能源工程。",
    },
    skillLabels: ["資料與分析", "工程與軟體", "語言"],
    experience: [
      {
        role: "輪調實習生（企業營運與製造）",
        type: "現場",
        period: "2026 年 6 月 — 2026 年 8 月",
        location: "台灣桃園市八德區",
        description: "輪調於企業各部門與生產現場，標準化營運流程、撰寫作業文件並找出生產瓶頸。",
        highlights: [
          "標準化 3 個部門的行政流程與營運文件，將內部文件處理時間縮短 15%。",
          "分析 4 個生產現場的完整產線與機台流程，找出並消除製程瓶頸。",
        ],
      },
      {
        role: "工程隊員（底盤組）",
        type: "現場",
        period: "2026 年 3 月 — 至今",
        location: "台灣新竹市",
        description: "底盤組成員，運用 CAD 設計與團隊協作開發賽車系統。",
        highlights: ["使用 Autodesk Inventor 設計高性能底盤系統，優化結構強度與車輛安全框架規格。"],
      },
      {
        role: "首席培訓長暨外賓禮賓負責人",
        type: "兼職",
        period: "2025 年 7 月 — 至今",
        location: "台灣新竹市",
        description: "清華大學親善大使團禮賓負責人與首席培訓長，設計培訓課程並主持接待國際貴賓的重要典禮。",
        highlights: [
          "2026 年 7 月晉升首席培訓長；為 12 位學員設計並執行 6 週的禮賓與公開演說培訓課程。",
          "擔任 8 場以上校級重要典禮的英語主持人，接待國際貴賓代表團。",
        ],
      },
      {
        role: "資深活動企劃",
        type: "全職",
        period: "2025 年 7 月 — 至今",
        location: "台灣新竹市",
        description: "資深企劃，統籌國際級校園旗艦活動的後勤、跨部門團隊與預算。",
        highlights: ["晉升資深企劃，負責國際旗艦活動的完整後勤、15 人以上跨部門團隊，以及超過新台幣 75,000 元的預算。"],
      },
      {
        role: "文物保存與典藏專案實習生",
        type: "現場",
        period: "2025 年 12 月 — 2026 年 1 月",
        location: "台灣新竹市",
        description: "寒假實習，協助歷史與研究文物的系統性盤點、分類與數位典藏。",
        highlights: ["完成 500 件以上歷史文物的系統性建檔、分類與數位典藏，提升資料庫檢索效率並確保資料完整性。"],
      },
    ],
  },
  ja: {
    nav: { resume: "経歴", projects: "プロジェクト", contact: "お問い合わせ", explore: "サイト内", location: "所在地", legal: "著作権", contactLabel: "連絡先" },
    intro: { greeting: "ようこそ", enter: "入る" },
    common: { downloadCv: "履歴書をダウンロード", letsConnect: "つながりましょう", scroll: "スクロールして見る", basedIn: "拠点", education: "学歴" },
    home: {
      est: "2006年生まれ",
      whoLabel: "01 / 私について",
      whoText: "生産現場でも工房でも、式典の司会でも力を発揮する工学部の学生。システムと人の仕組みに{word}を持っています。",
      whoWord: "好奇心",
      nowLabel: "02 / 現在",
      nowTitle: "今していること",
      fullExperience: "経歴をすべて見る",
      projectsLabel: "03 / 主なプロジェクト",
      projectsTitle: "考え方とつくり方が伝わるプロジェクト。",
      exploreProjects: "すべてのプロジェクトを見る",
      toolkitLabel: "04 / スキル",
      toolkitTitle: "システムと人、両方に効くスキル。",
    },
    about: {
      kicker: "経歴 / プロフィール",
      title: "私について。",
      experienceLabel: "01 / 職務経験",
      experienceTitle: "現場で学ぶこと。",
      educationLabel: "02 / 学歴",
      skillsLabel: "03 / スキル",
      styleLabel: "04 / 仕事のスタイル",
      styleText: "未知のシステムには好奇心を、細部には丁寧さを、そしてチームの場には活気をもたらします。",
    },
    work: { kicker: "ポートフォリオ / プロジェクト", title: "主なプロジェクト。", intro: "クリエイティブ・デジタル・実験的なプロジェクトの記録です。" },
    contact: {
      kicker: "つながりましょう",
      title: "プロジェクトや機会、ご質問はありますか？",
      intro: "エンジニアリング、オペレーション、イベント、クリエイティブな協業についてお気軽にご相談ください。",
      outro: "上記のいずれかの方法でご連絡ください。できるだけ早くお返事します。",
    },
    profile: {
      title: "工学部の学生",
      summary:
        "国立清華大学の工学部生。業務フローの最適化、プロジェクト管理、国際来賓対応のリーダーシップに実務経験があり、データ整理、部門横断のチーム運営、海外関係者との調整を得意としています。",
      location: "台湾・新竹市",
    },
    education: {
      program: "動力機械工学・産業工学 学士",
      description: "GPA: 3.6 / 4.3。入学以来、大学奨学金受給者。関連履修科目：工程経済学、製造プロセス、コンピュータ支援設計（CAD）、エネルギー工学。",
    },
    skillLabels: ["データと分析", "エンジニアリングとソフトウェア", "言語"],
    experience: [
      {
        role: "ローテーションインターン（経営管理・製造）",
        type: "出社",
        period: "2026年6月 — 2026年8月",
        location: "台湾 桃園市 八徳区",
        description: "各部門と製造現場をローテーションし、業務の標準化、手順の文書化、生産ボトルネックの特定を担当。",
        highlights: [
          "3部門の管理業務フローと運用文書を標準化し、社内の書類処理時間を15%短縮。",
          "4つの製造現場の生産ライン・設備フローを分析し、工程のボトルネックを特定・解消。",
        ],
      },
      {
        role: "エンジニアリングメンバー（シャシー部門）",
        type: "出社",
        period: "2026年3月 — 現在",
        location: "台湾・新竹市",
        description: "シャシー部門のメンバーとして、CAD設計とチーム連携で競技車両システムを開発。",
        highlights: ["Autodesk Inventorで高性能シャシーを設計し、構造剛性と安全フレーム仕様を最適化。"],
      },
      {
        role: "チーフトレーナー兼 儀典プロトコル責任者",
        type: "パートタイム",
        period: "2025年7月 — 現在",
        location: "台湾・新竹市",
        description: "清華大学アンバサダーチームの儀典責任者兼チーフトレーナー。研修設計と国際来賓を迎える式典の司会を担当。",
        highlights: [
          "2026年7月にチーフトレーナーへ昇格。12名の研修生に6週間の儀典・スピーチ研修を設計・実施。",
          "海外VIP代表団を迎える大学の重要式典8件以上で英語司会を担当。",
        ],
      },
      {
        role: "シニアイベントプランナー",
        type: "フルタイム",
        period: "2025年7月 — 現在",
        location: "台湾・新竹市",
        description: "国際的な大型キャンパスイベントのロジスティクス、部門横断チーム、予算を統括。",
        highlights: ["シニアプランナーとして、15名以上の部門横断チームと75,000台湾ドル超の予算、全体運営を統括。"],
      },
      {
        role: "保存・収蔵プロジェクトインターン",
        type: "出社",
        period: "2025年12月 — 2026年1月",
        location: "台湾・新竹市",
        description: "歴史資料や研究資料の体系的な棚卸し、分類、デジタルアーカイブを支援。",
        highlights: ["500点以上の歴史資料をデータ整理・分類・デジタル化し、検索効率とデータ整合性を向上。"],
      },
    ],
  },
  fr: {
    nav: { resume: "CV", projects: "Projets", contact: "Contact", explore: "Explorer", location: "Localisation", legal: "Mentions", contactLabel: "Contact" },
    intro: { greeting: "Bienvenue", enter: "Entrer" },
    common: { downloadCv: "Télécharger le CV", letsConnect: "Restons en contact", scroll: "Faites défiler", basedIn: "Basé à", education: "Formation" },
    home: {
      est: "Né en 2006",
      whoLabel: "01 / qui je suis",
      whoText: "Un étudiant en ingénierie aussi à l’aise sur une ligne de production, dans un atelier que sur scène pour animer une cérémonie — {word} de comprendre les systèmes et les gens.",
      whoWord: "curieux",
      nowLabel: "02 / en ce moment",
      nowTitle: "Ce que je fais",
      fullExperience: "Parcours complet",
      projectsLabel: "03 / projets sélectionnés",
      projectsTitle: "Des projets qui montrent ma façon de penser et de créer.",
      exploreProjects: "Voir tous les projets",
      toolkitLabel: "04 / compétences",
      toolkitTitle: "Des compétences entre systèmes et personnes.",
    },
    about: {
      kicker: "CV / profil",
      title: "À propos de moi.",
      experienceLabel: "01 / expérience",
      experienceTitle: "Apprendre en étant sur le terrain.",
      educationLabel: "02 / formation",
      skillsLabel: "03 / compétences",
      styleLabel: "04 / méthode de travail",
      styleText: "J’aborde les systèmes inconnus avec curiosité, les détails avec soin, et j’apporte de l’énergie aux équipes.",
    },
    work: { kicker: "Portfolio / projets", title: "Projets sélectionnés.", intro: "Un aperçu visuel de projets créatifs, numériques et expérimentaux." },
    contact: {
      kicker: "Restons en contact",
      title: "Un projet, une opportunité ou une bonne question ?",
      intro: "Je suis ouvert aux échanges autour de l’ingénierie, des opérations, de l’événementiel et de la collaboration créative.",
      outro: "Écrivez-moi via l’un des canaux ci-dessus — je réponds dès que possible.",
    },
    profile: {
      title: "Étudiant en ingénierie",
      summary:
        "Étudiant en ingénierie à l’Université Nationale Tsing Hua, avec une expérience concrète en optimisation des flux opérationnels, gestion de projet et protocole diplomatique. Solide pratique du catalogage de données, de la gestion d’équipes transverses et de la coordination d’interlocuteurs internationaux.",
      location: "Hsinchu, Taïwan",
    },
    education: {
      program: "Licence en génie mécanique de puissance et génie industriel",
      description: "Moyenne (GPA) : 3,6 / 4,3. Boursier de l'université depuis l'inscription. Cours pertinents : Économie de l'ingénierie, Procédés de fabrication, Dessin assisté par ordinateur (DAO), Ingénierie de l'énergie.",
    },
    skillLabels: ["Données et analyse", "Ingénierie et logiciels", "Langues"],
    experience: [
      {
        role: "Stagiaire en rotation (opérations et production)",
        type: "Sur site",
        period: "Juin 2026 — Août 2026",
        location: "District de Bade, Taoyuan, Taïwan",
        description: "Rotation entre les services de l’entreprise et les ateliers pour standardiser les opérations, documenter les processus et repérer les goulots d’étranglement.",
        highlights: [
          "Standardisation des flux administratifs et de la documentation de 3 services, réduisant de 15 % le temps de traitement des documents internes.",
          "Analyse des lignes de production et des flux machines de 4 ateliers afin d’identifier et d’éliminer les goulots d’étranglement.",
        ],
      },
      {
        role: "Membre ingénierie (division châssis)",
        type: "Sur site",
        period: "Mars 2026 — Aujourd’hui",
        location: "Hsinchu, Taïwan",
        description: "Membre de la division châssis, conception CAO et travail d’équipe pour développer les systèmes du véhicule de compétition.",
        highlights: ["Conception de châssis haute performance sous Autodesk Inventor, en optimisant la rigidité structurelle et l’arceau de sécurité."],
      },
      {
        role: "Formateur en chef et responsable du protocole",
        type: "Temps partiel",
        period: "Juil. 2025 — Aujourd’hui",
        location: "Hsinchu, Taïwan",
        description: "Responsable du protocole et formateur en chef de l’équipe d’ambassadeurs de NTHU : conception des formations et animation de cérémonies pour des délégations internationales.",
        highlights: [
          "Promu formateur en chef (juil. 2026) ; conception et animation d’un programme de 6 semaines sur le protocole et la prise de parole pour 12 stagiaires.",
          "Maître de cérémonie anglophone principal pour plus de 8 cérémonies universitaires accueillant des délégations internationales VIP.",
        ],
      },
      {
        role: "Cheffe de projet événementiel senior",
        type: "Temps plein",
        period: "Juil. 2025 — Aujourd’hui",
        location: "Hsinchu, Taïwan",
        description: "Pilotage de la logistique, des équipes transverses et des budgets des grands événements internationaux du campus.",
        highlights: ["Promu planificateur senior : logistique de bout en bout, équipes transverses de plus de 15 personnes et budget de plus de 75 000 TWD."],
      },
      {
        role: "Stagiaire projet conservation et inventaire",
        type: "Sur site",
        period: "Déc. 2025 — Janv. 2026",
        location: "Hsinchu, Taïwan",
        description: "Stage d’hiver : inventaire systématique, catégorisation et archivage numérique d’objets historiques et de recherche.",
        highlights: ["Catalogage, classement et archivage numérique de plus de 500 objets historiques, améliorant la recherche en base et l’intégrité des données."],
      },
    ],
  },
};
