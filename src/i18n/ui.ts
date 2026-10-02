// Translation dictionaries. Flat dot-keys keep the shape i18next-compatible
// if we ever swap the runtime. See src/i18n/utils.ts
export const languages = { en: 'English', th: 'ไทย' } as const;
export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'meta.title': 'Naphat Wattanarattanakul — Software Engineer',
    'meta.description':
      'Infrastructure software engineer. Internal tools, deployment systems and developer infrastructure.',
    'meta.ogAlt': 'Naphat Wattanarattanakul, infrastructure software engineer',

    'nav.label': 'Sections',
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.certificates': 'Certificates',
    'nav.contact': 'Contact',
    'nav.skipToContent': 'Skip to content',

    'hero.headline': 'I build platforms for engineers and the AI agents working beside them.',
    'hero.roleAt': '{role} at {company}',
    'hero.location': 'Bangkok, Thailand',
    'hero.emailMe': 'Email me',
    'hero.cv': 'Download CV',
    'hero.portraitAlt': 'Portrait of Naphat Wattanarattanakul',

    'about.title': 'About',
    'about.education': 'Education',
    'skills.title': 'Stack',
    'certs.title': 'Certificates',
    'certs.view': 'View certificate',
    'certs.close': 'Close',

    'exp.title': 'Experience',

    'projects.title': 'Projects',
    'projects.flowLabel': 'How a deploy moves through the platform',
    'projects.visit': 'View project',

    'cta.title': 'Got a problem worth solving?',
    'cta.body': 'Open to platform and infrastructure work. Tell me what is breaking.',
    'cta.emailLabel': 'Email',
    'cta.copy': 'Copy',
    'cta.copyLabel': 'Copy email address',
    'cta.copied': 'Copied',
    'cta.copiedStatus': 'Email address copied to clipboard',
    'social.elsewhere': 'Or find me here',

    'footer.top': 'Back to top',

    'theme.dark': 'Dark theme',
    'lang.switch': 'Switch language',
    'a11y.newTab': '(opens in a new tab)',
  },
  th: {
    'meta.title': 'นภัทร วัฒนรัตนกุล — วิศวกรซอฟต์แวร์',
    'meta.description':
      'วิศวกรซอฟต์แวร์สายโครงสร้างพื้นฐาน ดูแลเครื่องมือภายใน ระบบดีพลอย และโครงสร้างสำหรับนักพัฒนา',
    'meta.ogAlt': 'นภัทร วัฒนรัตนกุล วิศวกรซอฟต์แวร์สายโครงสร้างพื้นฐาน',

    'nav.label': 'ส่วนต่าง ๆ ของหน้า',
    'nav.menu': 'เมนู',
    'nav.about': 'เกี่ยวกับ',
    'nav.experience': 'ประสบการณ์',
    'nav.projects': 'ผลงาน',
    'nav.certificates': 'ใบรับรอง',
    'nav.contact': 'ติดต่อ',
    'nav.skipToContent': 'ข้ามไปที่เนื้อหา',

    'hero.headline': 'ผมสร้างแพลตฟอร์มให้วิศวกร และเอเจนต์ AI ที่ทำงานเคียงข้างพวกเขา',
    'hero.roleAt': '{role} ที่ {company}',
    'hero.location': 'กรุงเทพฯ ประเทศไทย',
    'hero.emailMe': 'ส่งอีเมลหาผม',
    'hero.cv': 'ดาวน์โหลด CV',
    'hero.portraitAlt': 'ภาพถ่ายของนภัทร วัฒนรัตนกุล',

    'about.title': 'เกี่ยวกับผม',
    'about.education': 'การศึกษา',
    'skills.title': 'เทคโนโลยีที่ใช้',
    'certs.title': 'ใบรับรอง',
    'certs.view': 'ดูใบรับรอง',
    'certs.close': 'ปิด',

    'exp.title': 'ประสบการณ์',

    'projects.title': 'ผลงาน',
    'projects.flowLabel': 'เส้นทางของการดีพลอยผ่านแพลตฟอร์ม',
    'projects.visit': 'ดูโปรเจกต์',

    'cta.title': 'มีโจทย์ที่น่าแก้อยู่ไหม',
    'cta.body': 'สนใจงานแพลตฟอร์มและโครงสร้างพื้นฐาน เล่าให้ฟังได้เลยว่าติดอะไร',
    'cta.emailLabel': 'อีเมล',
    'cta.copy': 'คัดลอก',
    'cta.copyLabel': 'คัดลอกที่อยู่อีเมล',
    'cta.copied': 'คัดลอกแล้ว',
    'cta.copiedStatus': 'คัดลอกที่อยู่อีเมลแล้ว',
    'social.elsewhere': 'หรือทักผมได้ที่นี่',

    'footer.top': 'กลับขึ้นด้านบน',

    'theme.dark': 'ธีมมืด',
    'lang.switch': 'เปลี่ยนภาษา',
    'a11y.newTab': '(เปิดในแท็บใหม่)',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
