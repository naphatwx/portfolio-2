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
    'exp.eyebrow': 'Experience',
    'exp.title': 'Where I have worked',
    'exp.intro': 'Platform and infrastructure work, plus a low-code internship before that.',
    'certs.eyebrow': 'Certificates',
    'certs.title': 'Proof of study',
    'certs.note': '{count} certificates. Newest first.',
    'certs.view': 'View certificate',
    'cta.title': 'Got a problem worth solving?',
    'cta.body': 'Open to platform and infrastructure work. Tell me what is breaking.',
    'work.eyebrow': 'Selected work',
    'nav.experience': 'Experience',
    'nav.certificates': 'Certificates',

    'hero.role': 'Infrastructure Software Engineer',
    'hero.year': '2026',
    'hero.greeting': 'Hello',
    'hero.tagline': "— I'm Naphat, an infrastructure software engineer",
    'hero.scroll': 'Scroll down',
    'stats.projects': 'Projects shipped',
    'stats.years': 'Years building',
    'nav.bookCall': 'Book a call',

    'hero.headline': 'I build backend systems that stay boring under load.',

    'work.title': 'Selected work',
    'work.note': '{count} projects worth showing in detail.',

    'about.education': 'Education',

    'skills.title': 'Stack',

    'contact.body': 'Email is fastest.',

    'footer.rights': 'All rights reserved.',
    'footer.builtWith': 'Built with Astro and Tailwind.',

    'theme.toggle': 'Toggle theme',
    'lang.switch': 'Switch language',
  },
  th: {
    'meta.title': 'ณภัทร วัฒนรัตนกุล — วิศวกรซอฟต์แวร์',
    'meta.description':
      'วิศวกรซอฟต์แวร์สายโครงสร้างพื้นฐาน ดูแลเครื่องมือภายใน ระบบดีพลอย และโครงสร้างสำหรับนักพัฒนา',

    'nav.home': 'หน้าแรก',
    'nav.work': 'ผลงาน',
    'nav.about': 'เกี่ยวกับ',
    'nav.contact': 'ติดต่อ',
    'nav.skipToContent': 'ข้ามไปที่เนื้อหา',

    'about.eyebrow': 'เกี่ยวกับผม',
    'about.lead': 'ผมสร้างแพลตฟอร์มที่วิศวกรคนอื่นใช้ส่งงานขึ้นระบบ',
    'exp.eyebrow': 'ประสบการณ์',
    'exp.title': 'ที่ทำงานที่ผ่านมา',
    'exp.intro': 'งานด้านแพลตฟอร์มและโครงสร้างพื้นฐาน และการฝึกงานสาย low-code ก่อนหน้านั้น',
    'certs.eyebrow': 'ใบรับรอง',
    'certs.title': 'หลักฐานการเรียน',
    'certs.note': 'ใบรับรอง {count} ใบ เรียงจากใหม่ไปเก่า',
    'certs.view': 'ดูใบรับรอง',
    'cta.title': 'มีโจทย์ที่น่าแก้อยู่ไหม',
    'cta.body': 'สนใจงานแพลตฟอร์มและโครงสร้างพื้นฐาน เล่าให้ฟังได้เลยว่าติดอะไร',
    'work.eyebrow': 'ผลงานที่คัดมา',
    'nav.experience': 'ประสบการณ์',
    'nav.certificates': 'ใบรับรอง',

    'hero.role': 'วิศวกรซอฟต์แวร์ (โครงสร้างพื้นฐาน)',
    'hero.year': '2569',
    'hero.greeting': 'สวัสดี',
    'hero.tagline': '— ผมณภัทร วิศวกรซอฟต์แวร์สายโครงสร้างพื้นฐาน',
    'hero.scroll': 'เลื่อนลง',
    'stats.projects': 'โปรเจกต์ที่ส่งมอบ',
    'stats.years': 'ปีที่ทำงาน',
    'nav.bookCall': 'นัดคุย',

    'hero.headline': 'ผมสร้างระบบหลังบ้านที่ทำงานนิ่ง ๆ แม้โหลดหนัก',

    'work.title': 'ผลงานที่คัดมา',
    'work.note': 'โปรเจกต์ {count} ชิ้น ที่อยากเล่าละเอียด',

    'about.education': 'การศึกษา',

    'skills.title': 'เทคโนโลยีที่ใช้',

    'contact.body': 'ส่งอีเมลมาเร็วที่สุด',

    'footer.rights': 'สงวนลิขสิทธิ์',
    'footer.builtWith': 'สร้างด้วย Astro และ Tailwind',

    'theme.toggle': 'สลับธีมสว่าง/มืด',
    'lang.switch': 'เปลี่ยนภาษา',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
