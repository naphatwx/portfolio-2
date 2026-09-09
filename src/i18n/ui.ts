// Translation dictionaries. Flat dot-keys keep the shape i18next-compatible
// if we ever swap the runtime. See src/i18n/utils.ts
export const languages = { en: 'English', th: 'ไทย' } as const;
export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'meta.title': 'Naphat Wattanarattnakul — Software Engineer',
    'meta.description':
      'Infrastructure software engineer. Internal tools, deployment systems and developer infrastructure.',

    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.skipToContent': 'Skip to content',

    'about.eyebrow': 'About me',
    'about.lead': 'I build the platforms other engineers ship on.',
    'exp.title': 'Experiences',
    'certs.title': 'Certificates',
    'certs.view': 'View certificate',
    'cta.title': 'Got a problem worth solving?',
    'cta.body': 'Open to platform and infrastructure work. Tell me what is breaking.',
    'nav.experience': 'Experience',
    'nav.certificates': 'Certificates',

    'hero.greeting': 'Hello',
    'hero.tagline': "I'm Naphat, an infrastructure software engineer",
    'stats.projects': 'Projects shipped',
    'stats.years': 'Years building',
    'nav.email': 'Email',

    'hero.headline': 'I build backend systems that stay boring under load.',

    'work.title': 'Projects',

    'about.education': 'Education',

    'skills.title': 'Stack',

    'contact.body': 'Email is fastest.',

    'cta.emailLabel': 'Email',
    'social.elsewhere': 'Or find me here',

    'footer.rights': 'All rights reserved.',
    'footer.builtWith': 'Built with Astro and Tailwind.',

    'theme.toggle': 'Toggle theme',
    'lang.switch': 'Switch language',
  },
  th: {
    'meta.title': 'นภัทร วัฒนรัตนกุล — วิศวกรซอฟต์แวร์',
    'meta.description':
      'วิศวกรซอฟต์แวร์สายโครงสร้างพื้นฐาน ดูแลเครื่องมือภายใน ระบบดีพลอย และโครงสร้างสำหรับนักพัฒนา',

    'nav.home': 'หน้าแรก',
    'nav.work': 'ผลงาน',
    'nav.about': 'เกี่ยวกับ',
    'nav.contact': 'ติดต่อ',
    'nav.skipToContent': 'ข้ามไปที่เนื้อหา',

    'about.eyebrow': 'เกี่ยวกับผม',
    'about.lead': 'ผมสร้างแพลตฟอร์มที่วิศวกรคนอื่นใช้ส่งงานขึ้นระบบ',
    'exp.title': 'ประสบการณ์',
    'certs.title': 'ใบรับรอง',
    'certs.view': 'ดูใบรับรอง',
    'cta.title': 'มีโจทย์ที่น่าแก้อยู่ไหม',
    'cta.body': 'สนใจงานแพลตฟอร์มและโครงสร้างพื้นฐาน เล่าให้ฟังได้เลยว่าติดอะไร',
    'nav.experience': 'ประสบการณ์',
    'nav.certificates': 'ใบรับรอง',

    'hero.greeting': 'สวัสดี',
    'hero.tagline': 'ผมนภัทร วิศวกรซอฟต์แวร์สายโครงสร้างพื้นฐาน',
    'stats.projects': 'โปรเจกต์ที่ส่งมอบ',
    'stats.years': 'ปีที่ทำงาน',
    'nav.email': 'อีเมล',

    'hero.headline': 'ผมสร้างระบบหลังบ้านที่ทำงานนิ่ง ๆ แม้โหลดหนัก',

    'work.title': 'ผลงาน',

    'about.education': 'การศึกษา',

    'skills.title': 'เทคโนโลยีที่ใช้',

    'contact.body': 'ส่งอีเมลมาเร็วที่สุด',

    'cta.emailLabel': 'อีเมล',
    'social.elsewhere': 'หรือทักผมได้ที่นี่',

    'footer.rights': 'สงวนลิขสิทธิ์',
    'footer.builtWith': 'สร้างด้วย Astro และ Tailwind',

    'theme.toggle': 'สลับธีมสว่าง/มืด',
    'lang.switch': 'เปลี่ยนภาษา',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
