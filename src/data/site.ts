// All page content. Sourced from src/raw-data.md.
import type { Lang } from '../i18n/ui';

export type Localized = Record<Lang, string>;

export const person = {
  name: 'Naphat Wattanarattnakul',
  shortName: 'Naphat',
  email: 'naphat.watt2002@gmail.com',
  github: 'https://github.com/naphatwx',
  linkedin: 'https://www.linkedin.com/in/naphat-wattanarattanakul-6334b6295',
};

export const contact = person;

/** Ordered for display: header icons, contact cards and footer all read this. */
export const socials = [
  {
    id: 'github' as const,
    name: 'GitHub',
    handle: '@naphatwx',
    href: person.github,
  },
  {
    id: 'linkedin' as const,
    name: 'LinkedIn',
    handle: 'naphat-wattanarattanakul',
    href: person.linkedin,
  },
];

export type Social = (typeof socials)[number];

export const stats: { value: string; label: Localized }[] = [
  { value: '2', label: { en: 'Years building', th: 'ปีที่ทำงาน' } },
  { value: '6', label: { en: 'Certificates earned', th: 'ใบรับรองที่ได้รับ' } },
];

export const aboutPoints: Localized[] = [
  {
    en: 'Infrastructure software engineer. I build internal tools, deployment systems and developer infrastructure — the layer other engineers stand on.',
    th: 'วิศวกรซอฟต์แวร์สายโครงสร้างพื้นฐาน ผมสร้างเครื่องมือภายใน ระบบดีพลอย และโครงสร้างสำหรับนักพัฒนา ซึ่งเป็นชั้นที่วิศวกรคนอื่นใช้ทำงานต่อ',
  },
  {
    en: 'My focus is developer autonomy: self-service platforms that remove the infrastructure bottleneck instead of staffing a queue in front of it.',
    th: 'เป้าหมายของผมคือให้นักพัฒนาทำงานได้เอง สร้างแพลตฟอร์มแบบบริการตัวเอง เพื่อลดคอขวดด้านโครงสร้างพื้นฐาน แทนที่จะตั้งคนมารอคิวจัดการ',
  },
  {
    en: 'I work across the stack: services in Java and Spring Boot, Go and Node.js talking over gRPC, React, Next.js and Vue.js on the front, MySQL, PostgreSQL and InfluxDB behind them.',
    th: 'ผมทำงานได้ทั้งระบบ ทั้งบริการที่เขียนด้วย Java และ Spring Boot, Go และ Node.js ที่คุยกันผ่าน gRPC, ฝั่งหน้าเว็บด้วย React, Next.js และ Vue.js และฐานข้อมูล MySQL, PostgreSQL และ InfluxDB',
  },
];

export const education = {
  schoolFull: {
    en: 'King Mongkut University of Technology Thonburi (KMUTT)',
    th: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี',
  },
  period: '2021 — 2025',
  degree: {
    en: 'BSc Information Technology — School of Information Technology (SIT)',
    th: 'วิทยาศาสตรบัณฑิต สาขาเทคโนโลยีสารสนเทศ คณะเทคโนโลยีสารสนเทศ (SIT)',
  },
};

export type Role = {
  company: string;
  period: Localized;
  title: Localized;
  detail: Localized;
  points: { label: Localized; text: Localized }[];
  tags: string[];
};

export const experience: Role[] = [
  {
    company: 'Ngernturbo',
    period: { en: 'Jul 2025 — Present', th: 'ก.ค. 2568 — ปัจจุบัน' },
    title: {
      en: 'Infrastructure Software Engineer',
      th: 'วิศวกรซอฟต์แวร์ (โครงสร้างพื้นฐาน)',
    },
    detail: {
      en: 'Building self-service platforms that remove infrastructure bottlenecks, so product teams can ship without waiting on us.',
      th: 'สร้างแพลตฟอร์มแบบบริการตัวเอง เพื่อลดคอขวดด้านโครงสร้างพื้นฐาน ให้ทีมผลิตภัณฑ์ส่งงานได้เองโดยไม่ต้องรอ',
    },
    points: [
      {
        label: { en: 'Dev autonomy', th: 'ให้นักพัฒนาทำงานได้เอง' },
        text: {
          en: 'A web-based bucket management system that lets developers provision and manage their own cloud resources.',
          th: 'ระบบจัดการ bucket บนเว็บ ให้นักพัฒนาสร้างและดูแลทรัพยากรคลาวด์ของตัวเองได้',
        },
      },
      {
        label: { en: 'AI tooling', th: 'เครื่องมือสำหรับ AI' },
        text: {
          en: 'Exposed deployment infrastructure to AI agents as callable tools over the Model Context Protocol.',
          th: 'เปิดให้เอเจนต์ AI เรียกใช้ระบบดีพลอยเป็นเครื่องมือ ผ่าน Model Context Protocol',
        },
      },
      {
        label: { en: 'Observability', th: 'การมองเห็นระบบ' },
        text: {
          en: 'Custom Jenkins pipeline plugins collecting run metrics, execution state, error messages and stack traces.',
          th: 'ปลั๊กอิน Jenkins ที่เขียนขึ้นเอง เก็บค่าการทำงาน สถานะ ข้อความผิดพลาด และ stack trace ของไปป์ไลน์',
        },
      },
      {
        label: { en: 'CI/CD and quality', th: 'CI/CD และคุณภาพโค้ด' },
        text: {
          en: 'Deployment pipelines with automated SonarQube quality gates on every scan.',
          th: 'ไปป์ไลน์ดีพลอยที่มีด่านตรวจคุณภาพโค้ดด้วย SonarQube ทำงานอัตโนมัติทุกครั้ง',
        },
      },
    ],
    tags: ['Platform', 'DevOps', 'Jenkins'],
  },
  {
    company: 'iPassion',
    period: { en: 'Jan 2024 — Jun 2024', th: 'ม.ค. — มิ.ย. 2567' },
    title: { en: 'Intern Developer', th: 'นักพัฒนา (ฝึกงาน)' },
    detail: {
      en: 'Built web applications on the OutSystems low-code platform for enterprise clients.',
      th: 'พัฒนาเว็บแอปพลิเคชันบนแพลตฟอร์ม low-code OutSystems ให้ลูกค้าองค์กร',
    },
    points: [
      {
        label: { en: 'SCG', th: 'SCG' },
        text: {
          en: 'Reworked the layout and interaction design of an existing application.',
          th: 'ปรับผังหน้าจอและการใช้งานของแอปพลิเคชันเดิม',
        },
      },
      {
        label: { en: 'AIS', th: 'AIS' },
        text: {
          en: 'Internet package management with feature matching and a back-office console.',
          th: 'ระบบจัดการแพ็กเกจอินเทอร์เน็ต พร้อมการจับคู่ฟีเจอร์และหน้าจัดการหลังบ้าน',
        },
      },
    ],
    tags: ['OutSystems', 'Low-code', 'UX'],
  },
];

export type Project = {
  slug: string;
  year: string;
  title: Localized;
  summary: Localized;
  points: Localized[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: 'internal-deployment-platform',
    year: '2025 — 2026',
    title: { en: 'Internal deployment platform', th: 'แพลตฟอร์มดีพลอยภายใน' },
    summary: {
      en: 'The platform engineers use to ship. Deployment, pipeline visibility and code quality gates in one place — callable by people and by AI agents.',
      th: 'แพลตฟอร์มที่วิศวกรใช้ส่งงานขึ้นระบบ รวมการดีพลอย การมองเห็นไปป์ไลน์ และด่านตรวจคุณภาพโค้ดไว้ที่เดียว เรียกใช้ได้ทั้งจากคนและเอเจนต์ AI',
    },
    points: [
      {
        en: 'MCP integration exposing the deployment backend as AI-accessible tools',
        th: 'เชื่อม MCP เพื่อเปิดให้ AI เรียกใช้ระบบดีพลอยเป็นเครื่องมือ',
      },
      {
        en: 'Jenkins pipeline plugin collecting duration, result, error message and stack trace',
        th: 'ปลั๊กอิน Jenkins เก็บระยะเวลา ผลลัพธ์ ข้อความผิดพลาด และ stack trace',
      },
      {
        en: 'SonarQube pipeline script automating code quality scans',
        th: 'สคริปต์ SonarQube สำหรับตรวจคุณภาพโค้ดอัตโนมัติ',
      },
    ],
    stack: ['Go', 'Jenkins', 'SonarQube', 'Docker'],
  },
  {
    slug: 'finance-demo-trading',
    year: '2026',
    title: {
      en: 'Finance demo trading platform',
      th: 'แพลตฟอร์มเทรดหุ้นสำหรับฝึกซ้อม',
    },
    summary: {
      en: 'A paper-trading environment for practising without risk: refreshing prices, an order flow you can actually use, and a news feed for context.',
      th: 'สภาพแวดล้อมสำหรับฝึกเทรดโดยไม่ต้องเสี่ยงเงินจริง มีราคาที่อัปเดตต่อเนื่อง ระบบส่งคำสั่งซื้อขายที่ใช้งานได้จริง และฟีดข่าวประกอบการตัดสินใจ',
    },
    points: [
      {
        en: 'Price fetcher refreshing stock quotes every 5 minutes',
        th: 'ตัวดึงราคาหุ้น อัปเดตทุก 5 นาที',
      },
      {
        en: 'Demo trading engine for practice orders',
        th: 'ระบบเทรดจำลองสำหรับฝึกส่งคำสั่ง',
      },
      {
        en: 'Integrated news feed for financial updates',
        th: 'ฟีดข่าวการเงินในระบบ',
      },
    ],
    stack: ['TypeScript', 'Next.js', 'PostgreSQL'],
  },
  {
    slug: 'taxi-ads-cms',
    year: '2024 — 2025',
    title: {
      en: 'Taxi ads CMS',
      th: 'ระบบจัดการโฆษณาบนแท็กซี่',
    },
    summary: {
      en: 'Final-year capstone built for a partner company: a back office for the ads that run on taxis, from campaign setup through to the numbers they produce.',
      th: 'โปรเจกต์จบที่ทำร่วมกับบริษัทพันธมิตร เป็นระบบหลังบ้านสำหรับดูแลโฆษณาที่ติดบนแท็กซี่ ตั้งแต่การตั้งค่าแคมเปญไปจนถึงตัวเลขผลลัพธ์',
    },
    points: [
      {
        en: 'Backend built with AdonisJS, covering the advertisement management APIs',
        th: 'พัฒนาระบบหลังบ้านด้วย AdonisJS ครอบคลุม API จัดการโฆษณา',
      },
      {
        en: 'User settings and permissions for the back-office team',
        th: 'ตั้งค่าผู้ใช้และสิทธิ์การเข้าถึงสำหรับทีมหลังบ้าน',
      },
      {
        en: 'Data visualization endpoints powering the reporting views',
        th: 'ปลายทางข้อมูลสำหรับหน้ารายงานและกราฟสรุปผล',
      },
    ],
    stack: ['AdonisJS', 'TypeScript', 'MySQL'],
  },
];

export const skills: { group: Localized; items: string[] }[] = [
  {
    group: { en: 'Languages', th: 'ภาษา' },
    items: ['Java', 'Go', 'JavaScript', 'TypeScript', 'SQL', 'HTML'],
  },
  {
    group: { en: 'Backend', th: 'ระบบหลังบ้าน' },
    items: ['Spring Boot', 'Go', 'Node.js', 'AdonisJS', 'gRPC'],
  },
  {
    group: { en: 'Frontend', th: 'ระบบหน้าบ้าน' },
    items: ['Vue.js', 'React', 'Next.js', 'Tailwind'],
  },
  {
    group: { en: 'Cloud', th: 'คลาวด์' },
    items: ['AWS', 'Railway'],
  },
  {
    group: { en: 'Database', th: 'ฐานข้อมูล' },
    items: ['MySQL', 'MSSQL', 'PostgreSQL', 'InfluxDB', 'MongoDB'],
  },
  {
    group: { en: 'DevOps', th: 'DevOps' },
    items: ['Docker', 'Nginx', 'Jenkins', 'SonarQube', 'OutSystems'],
  },
  {
    group: { en: 'Monitoring and testing', th: 'การเฝ้าดูและทดสอบ' },
    items: ['Grafana', 'Unit testing', 'Postman'],
  },
  {
    group: { en: 'AI tools', th: 'เครื่องมือ AI' },
    items: ['Custom MCP'],
  },
  {
    group: { en: 'Version control', th: 'ระบบควบคุมเวอร์ชัน' },
    items: ['GitHub', 'GitLab'],
  },
  {
    group: { en: 'Management', th: 'การจัดการงาน' },
    items: ['Jira', 'Notion', 'Apidog'],
  },
];

export type Certificate = {
  slug: string;
  issuer: string;
  year: string;
  title: Localized;
  /** Wordmark shown when there is no thumbnail image. */
  short?: string;
};

/* Issuers read off the certificate images. TOEIC has no thumbnail on purpose:
   the score report shows date of birth and a registration ID. */
export const certificates: Certificate[] = [
  {
    slug: 'toeic-2025',
    issuer: 'ETS',
    year: '2025',
    title: { en: 'TOEIC Listening & Reading Score 680', th: 'TOEIC การฟังและการอ่าน คะเเนน 680' },
    short: 'TOEIC',
  },
  {
    slug: 'basic-aws',
    issuer: 'Udemy',
    year: '2025',
    title: { en: 'AWS Cloud from Zero to Production', th: 'AWS Cloud เริ่มจาก 0 จนใช้งานจริง' },
  },
  {
    slug: 'basic-typescript',
    issuer: 'Udemy',
    year: '2025',
    title: { en: 'TypeScript in Depth', th: 'เจาะลึก TypeScript' },
  },
  {
    slug: 'react-real-world-project',
    issuer: 'Udemy',
    year: '2025',
    title: { en: 'React — Real-World Projects', th: 'React สำหรับงานจริง' },
  },
  {
    slug: 'complete-java-programming',
    issuer: 'BorntoDev',
    year: '2025',
    title: { en: 'Complete Java Programming', th: 'Java ครบวงจร' },
  },
  {
    slug: 'computer-architecture9arm',
    issuer: 'BorntoDev',
    year: '2025',
    title: { en: 'Computer Architecture', th: 'สถาปัตยกรรมคอมพิวเตอร์' },
  },
];
