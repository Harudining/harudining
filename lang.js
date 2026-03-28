/**
 * lang.js — Haru dining i18n (日本語 / English)
 * Usage: add data-i18n="key" to elements with text content,
 *        data-i18n-html="key" to elements where innerHTML should be replaced.
 */
(function () {
  'use strict';

  /* ============================================================
     TRANSLATION DICTIONARY
  ============================================================ */
  const translations = {

    /* ---- NAV (all pages) ---- */
    'nav.home': { ja: 'HOME', en: 'HOME' },
    'nav.menu': { ja: 'MENU', en: 'MENU' },
    'nav.photos': { ja: 'PHOTOS', en: 'PHOTOS' },
    'nav.access': { ja: 'ACCESS', en: 'ACCESS' },

    /* ---- FOOTER (all pages) ---- */
    'footer.genre': { ja: '創作鉄板料理', en: 'Creative Teppanyaki' },
    'footer.label.hours': { ja: '営業時間', en: 'Hours' },
    'footer.label.closed': { ja: '定休日', en: 'Closed' },
    'footer.label.tel': { ja: '電話番号', en: 'Phone' },
    'footer.label.ig': { ja: 'Instagram', en: 'Instagram' },
    'footer.label.access': { ja: 'アクセス', en: 'Access' },
    'footer.hours': { ja: '11:00〜14:30 ／ 17:30〜22:00', en: '11:00–14:30 / 17:30–22:00' },
    'footer.closed': { ja: '土曜・日曜・祝日', en: 'Sat, Sun & Holidays' },
    'footer.access': { ja: '東京メトロ 茅場町駅より徒歩4分', en: '4 min walk from Kayabacho Stn (Tokyo Metro)' },
    'footer.copy': { ja: '© 2011–2026 Haru dining. All rights reserved.', en: '© 2011–2026 Haru dining. All rights reserved.' },

    /* ---- FLOATING CONTACT (all pages) ---- */
    'contact.aria': { ja: '店舗へ電話する', en: 'Call us' },

    /* ---- INDEX: HERO ---- */
    'hero.tagline': { ja: 'Creative Teppanyaki since 2011', en: 'Creative Teppanyaki since 2011' },
    'hero.title': { ja: 'Haru dining', en: 'Haru dining' },
    'hero.sub': {
      ja: '厳選された旬の食材を、目の前の鉄板で丁寧に仕上げる。<br />五感で愉しむ、ここだけの創作鉄板料理。',
      en: 'Seasonal ingredients, carefully crafted on the iron plate before your eyes.<br />A one-of-a-kind creative teppanyaki experience for all five senses.'
    },

    /* ---- INDEX: CONCEPT ---- */
    'concept.label': { ja: 'Concept', en: 'Concept' },
    'concept.sub': { ja: '— こだわり —', en: '— Our Philosophy —' },
    'concept.p1': {
      ja: '2011年の創業以来、Haru dining は「鉄板で旬を届ける」という想いのもと、素材選びから調理法、盛り付けに至るまで一切の妥協を排してまいりました。毎朝市場へ足を運び、その日最も状態の良い食材だけを厳選。お客様の目の前で繰り広げるライブ調理は、味覚だけでなく視覚・聴覚・嗅覚すべてを刺激します。',
      en: 'Since our founding in 2011, Haru dining has pursued the ideal of "delivering the season through the iron plate," with zero compromise in ingredient selection, cooking methods, or presentation. Each morning we visit the market to source only the finest ingredients of the day. The live cooking performed right before your eyes stimulates not just taste, but sight, sound, and smell as well.'
    },
    'concept.p2': {
      ja: '和の繊細さと洋の大胆さを融合した "創作鉄板料理" は、伝統的な鉄板焼きの概念を超え、新しい食の体験を提供します。お一人おひとりのペースに合わせたコース仕立てで、大切な方とのお食事から、気軽なランチタイムまで幅広いシーンでお愉しみいただけます。',
      en: 'Our "creative teppanyaki," blending Japanese delicacy with Western boldness, transcends traditional teppanyaki and delivers a new dining experience. Served as a course at your own pace, it suits every occasion — from a special dinner with a loved one to a relaxed weekday lunch.'
    },
    'concept.quote': {
      ja: '「美味しいは当たり前。そこに"驚き"と"温もり"を添えて、<br />お客様の日常に小さな幸せをお届けしたい。」',
      en: '"Great taste is a given. We add surprise and warmth to every dish,<br />bringing a moment of happiness to your everyday life."'
    },

    /* ---- INDEX: CHEF ---- */
    'chef.label': { ja: 'Chef', en: 'Chef' },
    'chef.sub': { ja: '— シェフ紹介 —', en: '— Meet the Chef —' },
    'chef.name': { ja: '坊坂 康治', en: 'Yasuharu Bosaka' },
    'chef.role': { ja: 'オーナーシェフ ／ Haru dining 創業者', en: 'Owner Chef / Founder of Haru dining' },
    'chef.p1': {
      ja: '都内の名店で10年以上研鑽を積んだのち、2011年に独立。フレンチの技法をベースに、和食の繊細な味覚を取り入れた独自の鉄板料理スタイルを確立しました。',
      en: 'After honing his skills at renowned Tokyo restaurants for over a decade, he founded Haru dining in 2011. Building on a French culinary foundation, he created a unique teppanyaki style that incorporates the subtle flavors of Japanese cuisine.'
    },
    'chef.p2': {
      ja: '「食材との対話」を大切にし、仕入れから仕込み、調理のすべてを一人で担当。お客様一人ひとりの好みやアレルギーにも細やかに対応し、毎回新しい感動をお届けすることを信条としています。',
      en: 'He believes in "communicating with ingredients" and handles everything himself — from purchasing and prep to cooking. He carefully accommodates each guest\'s preferences and dietary restrictions, and is devoted to delivering a new moment of wonder with every visit.'
    },
    'chef.p3': {
      ja: '鉄板の前に立つときの真剣な眼差しと、お客様と交わす温かな笑顔。そのコントラストこそが Haru dining の魅力です。',
      en: 'The focused gaze as he stands before the iron plate, and the warm smile he shares with each guest — that contrast is what makes Haru dining so special.'
    },

    /* ---- INDEX: CALENDAR ---- */
    'cal.label': { ja: 'Calendar', en: 'Calendar' },
    'cal.sub': { ja: '— 営業カレンダー —', en: '— Business Calendar —' },
    'cal.legend.today': { ja: '本日', en: 'Today' },
    'cal.legend.holiday': { ja: '定休日（土日・祝日）', en: 'Closed (Sat, Sun & Holidays)' },

    /* ---- INDEX: NEWS ---- */
    'news.label': { ja: 'News', en: 'News' },
    'news.sub': { ja: '— お知らせ —', en: '— Announcements —' },
    'news.empty': { ja: '新しいお知らせはここに表示されます。', en: 'New announcements will appear here.' },

    /* ---- MENU page ---- */
    'menu.hero.sub': { ja: '— お品書き —', en: '— Our Menu —' },
    'menu.tab.lunch': { ja: 'LUNCH', en: 'LUNCH' },
    'menu.tab.dinner': { ja: 'DINNER', en: 'DINNER' },
    'menu.tab.takeout': { ja: 'TAKE OUT', en: 'TAKE OUT' },

    /* Lunch items */
    'menu.l1.name': { ja: '日替わり鉄板ランチ', en: 'Daily Teppan Lunch' },
    'menu.l1.desc': { ja: 'その日仕入れた旬の食材を使用した日替わりの鉄板焼きプレート。サラダ・スープ・ライス付き。', en: 'A daily-changing teppan plate featuring the freshest seasonal ingredients. Served with salad, soup, and rice.' },
    'menu.l2.name': { ja: '黒毛和牛ハンバーグセット', en: 'Wagyu Hamburger Steak Set' },
    'menu.l2.desc': { ja: 'A5ランクの黒毛和牛を贅沢に使用した、ジューシーなハンバーグ。特製デミグラスソースで。', en: 'A juicy hamburger steak made with luxurious A5-grade Kuroge Wagyu. Served with our housemade demi-glace sauce.' },
    'menu.l3.name': { ja: '海鮮鉄板焼き御膳', en: 'Seafood Teppan Set' },
    'menu.l3.desc': { ja: '帆立・海老・旬の魚介を鉄板で香ばしく焼き上げた御膳。レモンバターソースでお召し上がりください。', en: 'Scallops, shrimp, and seasonal seafood grilled to a fragrant finish on the iron plate. Served with lemon butter sauce.' },
    'menu.l4.name': { ja: '季節の野菜たっぷり鉄板パスタ', en: 'Seasonal Vegetable Teppan Pasta' },
    'menu.l4.desc': { ja: '鉄板で炒めた彩り豊かな季節野菜のパスタ。ガーリックオイルの香りが食欲をそそります。', en: 'Colorful seasonal vegetables stir-fried on the iron plate with pasta. The garlic oil aroma is irresistible.' },

    /* Dinner items */
    'menu.d1.name': { ja: 'おまかせコース "Haru"', en: 'Chef\'s Omakase Course "Haru"' },
    'menu.d1.desc': { ja: '前菜からデザートまで全8品。その日最も旬な食材をシェフのおまかせでお届けします。', en: 'A full 8-course meal from appetizer to dessert. The chef selects the finest seasonal ingredients of the day.' },
    'menu.d2.name': { ja: '黒毛和牛サーロインステーキ', en: 'Wagyu Sirloin Steak' },
    'menu.d2.desc': { ja: '厳選されたA5ランクの黒毛和牛サーロインを、絶妙な火加減で焼き上げる看板メニュー。', en: 'Our signature dish — A5-grade Kuroge Wagyu sirloin cooked to perfection with precise heat control.' },
    'menu.d3.name': { ja: '活オマール海老の鉄板焼き', en: 'Live Lobster Teppanyaki' },
    'menu.d3.desc': { ja: '生きたオマール海老を目の前で調理。プリプリの身を特製ソースとともに。', en: 'A live lobster prepared right before your eyes. Savor the plump, juicy flesh with our special sauce.' },
    'menu.d4.name': { ja: 'フォアグラと季節フルーツ', en: 'Foie Gras & Seasonal Fruit' },
    'menu.d4.desc': { ja: '鉄板で焼き上げたフォアグラに、季節のフルーツソースを合わせた贅沢な一皿。', en: 'Pan-seared foie gras on the iron plate paired with a luxurious seasonal fruit sauce.' },
    'menu.d5.name': { ja: '本日の鮮魚カルパッチョ', en: 'Fresh Fish Carpaccio of the Day' },
    'menu.d5.desc': { ja: '築地直送の新鮮な魚介を使用した一品。柑橘のヴィネグレットでさっぱりと。', en: 'Fresh seafood sourced directly from Tsukiji market. Served with a light citrus vinaigrette.' },
    'menu.d6.name': { ja: '鉄板焼きそば "Haru style"', en: 'Teppan Yakisoba "Haru Style"' },
    'menu.d6.desc': { ja: '海鮮と野菜をたっぷり使った当店オリジナルの焼きそば。〆の一品として人気です。', en: 'Our original yakisoba loaded with seafood and vegetables. A popular choice as the final savory course.' },

    /* Take Out items */
    'menu.t1.name': { ja: 'テイクアウト弁当 〜鉄板日替わり〜', en: 'Daily Teppan Bento' },
    'menu.t1.desc': { ja: 'その日の旬の食材を使った鉄板焼きをお弁当でどうぞ。ご飯付き。', en: 'Enjoy our daily teppan special as a bento box, featuring seasonal ingredients. Served with rice.' },
    'menu.t2.name': { ja: '黒毛和牛ハンバーグ弁当', en: 'Wagyu Hamburger Steak Bento' },
    'menu.t2.desc': { ja: 'A5ランク黒毛和牛のジューシーなハンバーグ。特製デミグラスソース付き。', en: 'A juicy A5-grade Wagyu hamburger steak bento. Served with our housemade demi-glace sauce.' },
    'menu.t3.name': { ja: '海鮮鉄板焼き弁当', en: 'Seafood Teppan Bento' },
    'menu.t3.desc': { ja: '帆立・海老・旬の魚介を鉄板で香ばしく焼き上げたお弁当。レモンバターソース付き。', en: 'Scallops, shrimp and seasonal seafood grilled on the iron plate, served as a bento with lemon butter sauce.' },
    'menu.t4.name': { ja: '鉄板焼きそば弁当', en: 'Teppan Yakisoba Bento' },
    'menu.t4.desc': { ja: '海鮮と野菜をたっぷり使った当店オリジナルの焼きそばをお持ち帰りで。', en: 'Take home our original yakisoba loaded with seafood and fresh vegetables.' },

    /* ---- PHOTOS page ---- */
    'photos.hero.sub': { ja: '— フォトギャラリー —', en: '— Photo Gallery —' },

    /* ---- ACCESS page ---- */
    'access.hero.sub': { ja: '— 店舗情報・アクセス —', en: '— Location & Info —' },
    'access.th.name': { ja: '店舗名', en: 'Restaurant' },
    'access.th.genre': { ja: 'ジャンル', en: 'Cuisine' },
    'access.td.genre': { ja: '創作鉄板料理', en: 'Creative Teppanyaki' },
    'access.th.founded': { ja: '創業', en: 'Founded' },
    'access.td.founded': { ja: '2011年〜', en: 'Since 2011' },
    'access.th.hours': { ja: '営業時間', en: 'Hours' },
    'access.td.hours': { ja: '11:00〜14:30 ／ 17:30〜22:00', en: '11:00–14:30 / 17:30–22:00' },
    'access.th.closed': { ja: '定休日', en: 'Closed' },
    'access.td.closed': { ja: '土曜・日曜・祝日', en: 'Sat, Sun & Holidays' },
    'access.th.tel': { ja: '電話番号', en: 'Phone' },
    'access.th.ig': { ja: 'Instagram', en: 'Instagram' },
    'access.li1': { ja: '東京メトロ 茅場町駅より徒歩4分', en: '4 min walk from Kayabacho Stn (Tokyo Metro)' },
    'access.li2': { ja: '東京メトロ・JR 八丁堀駅より徒歩10分', en: '10 min walk from Hatchobori Stn (Tokyo Metro / JR)' },
    'access.li3': { ja: '都営地下鉄 日本橋駅より徒歩4分', en: '4 min walk from Nihombashi Stn (Toei Subway)' },
    'access.li4': { ja: '東京メトロ 日本橋駅より徒歩6分', en: '6 min walk from Nihombashi Stn (Tokyo Metro)' },
  };

  /* ============================================================
     LANGUAGE PICKER UI
  ============================================================ */
  function buildPicker() {
    const wrapper = document.createElement('div');
    wrapper.className = 'lang-picker';
    wrapper.setAttribute('id', 'langPicker');

    wrapper.innerHTML = `
      <button class="lang-btn" id="langBtn" aria-haspopup="true" aria-expanded="false">
        <span class="lang-globe">🌐</span>
        <span class="lang-label" id="langLabel">Language</span>
        <span class="lang-arrow">▾</span>
      </button>
      <ul class="lang-dropdown" id="langDropdown" role="menu">
        <li><button class="lang-option" data-lang="ja" role="menuitem">🇯🇵 日本語</button></li>
        <li><button class="lang-option" data-lang="en" role="menuitem">🇬🇧 English</button></li>
      </ul>
    `;
    return wrapper;
  }

  /* ============================================================
     APPLY TRANSLATIONS
  ============================================================ */
  function applyLang(lang) {
    // Update html lang attribute
    document.documentElement.lang = lang;

    // Text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key] && translations[key][lang] !== undefined) {
        el.textContent = translations[key][lang];
      }
    });

    // HTML nodes (may contain <br />, <small>, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (translations[key] && translations[key][lang] !== undefined) {
        el.innerHTML = translations[key][lang];
      }
    });

    // aria-label attributes
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (translations[key] && translations[key][lang] !== undefined) {
        el.setAttribute('aria-label', translations[key][lang]);
      }
    });

    // Update picker label
    const label = document.getElementById('langLabel');
    if (label) label.textContent = lang === 'ja' ? '日本語' : 'English';

    // Highlight active option
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Store preference
    localStorage.setItem('haru-lang', lang);
  }

  /* ============================================================
     INIT
  ============================================================ */
  function init() {
    // Insert picker into header
    const headerInner = document.querySelector('.header-inner');
    if (headerInner) {
      const picker = buildPicker();
      // Insert before hamburger
      const hamburger = document.getElementById('hamburger');
      headerInner.insertBefore(picker, hamburger);
    }

    // Toggle dropdown
    const btn = document.getElementById('langBtn');
    const dropdown = document.getElementById('langDropdown');
    if (btn && dropdown) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = dropdown.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
      });

      // Close on outside click
      document.addEventListener('click', () => {
        dropdown.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });

      // Option click
      document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
          e.stopPropagation();
          applyLang(opt.dataset.lang);
          dropdown.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // Apply stored or default language
    const saved = localStorage.getItem('haru-lang') || 'ja';
    applyLang(saved);
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
