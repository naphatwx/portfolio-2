// All page content. Sourced from src/raw-data.md.
import type { Lang } from '../i18n/ui';

export type Localized = Record<Lang, string>;

export const person = {
  name: 'Naphat Wattanarattanakul',
  shortName: 'Naphat',
  /** Hero h1, one line per name. Soft hyphen breaks the surname on narrow screens. */
  displayName: {
    en: ['Naphat', 'Wattana­rattanakul'],
    th: ['นภัทร', 'วัฒนรัตนกุล'],
  } as Record<Lang, [string, string]>,
  email: 'naphat.watt2002@gmail.com',
  github: 'https://github.com/naphatwx',
  linkedin: 'https://www.linkedin.com/in/naphat-wattanarattanakul-6334b6295',
  /** CV PDFs in public/, built by `npm run cv`. Unset to hide the hero CV button. */
  cv: { en: '/cv.pdf', th: '/cv-th.pdf' } as Localized | undefined,
};

export const contact = person;

/** Ordered for display: hero links and contact cards both read this. */
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

export const aboutPoints: Localized[] = [
  {
    en: 'Infrastructure software engineer. I build internal tools, deployment systems and developer infrastructure: the layer other engineers stand on.',
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
  period: '2021–2025',
  degree: {
    en: 'BSc Information Technology, School of Information Technology (SIT)',
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
    period: { en: 'Jul 2025 – Present', th: 'ก.ค. 2568 – ปัจจุบัน' },
    title: {
      en: 'Infrastructure Software Engineer',
      th: 'วิศวกรซอฟต์แวร์ (โครงสร้างพื้นฐาน)',
    },
    detail: {
      en: 'Building the self-service deployment and infrastructure platform that product teams use to ship, without waiting on the infra team.',
      th: 'สร้างแพลตฟอร์มดีพลอยและโครงสร้างพื้นฐานแบบบริการตัวเอง ที่ทีมผลิตภัณฑ์ใช้ส่งงานขึ้นระบบได้เองโดยไม่ต้องรอทีมโครงสร้างพื้นฐาน',
    },
    points: [
      {
        label: { en: 'Deploy workflow', th: 'ขั้นตอนการดีพลอย' },
        text: {
          en: 'End-to-end deployment tickets: a multi-step release wizard linked to Jira and Fast-ship, plus redeploys to production that only certain roles can run.',
          th: 'ทิกเก็ตดีพลอยครบวงจร ตั้งแต่หน้าจอสร้าง release หลายขั้นตอนที่เชื่อมกับ Jira และ Fast-ship ไปจนถึงการ redeploy ขึ้น production ที่จำกัดสิทธิ์ตามบทบาท',
        },
      },
      {
        label: { en: 'Self-service storage', th: 'จัดการ storage ได้เอง' },
        text: {
          en: 'Developers request S3 buckets from the web UI, and Jenkins and Terragrunt provision them with versioning and lifecycle rules. Existing buckets can be brought under the same management.',
          th: 'นักพัฒนาขอสร้าง S3 bucket ผ่านหน้าเว็บได้เอง โดย Jenkins และ Terragrunt สร้างให้พร้อม versioning และ lifecycle rule และนำ bucket เดิมเข้ามาจัดการในระบบเดียวกันได้',
        },
      },
      {
        label: { en: 'CI at scale', th: 'CI ทั้งองค์กร' },
        text: {
          en: 'A SonarQube quality gate across CI, including .NET; deployment manifests generated automatically for older Go, Python, C# and JS repos; and a move of old Jenkins jobs to the new flow that can be undone.',
          th: 'ด่านตรวจคุณภาพ SonarQube ทั่วทั้ง CI รวมถึง .NET, สร้าง deployment manifest อัตโนมัติให้ repo เก่าที่เขียนด้วย Go, Python, C# และ JS และย้าย Jenkins job เก่าไปใช้ flow ใหม่โดยย้อนกลับได้',
        },
      },
      {
        label: { en: 'AI-ready platform', th: 'แพลตฟอร์มพร้อมใช้กับ AI' },
        text: {
          en: "An MCP gateway that lets AI agents use platform actions, limited by the user's role, plus Claude Code skills for the infra team.",
          th: 'MCP gateway ที่ให้เอเจนต์ AI เรียกใช้งานแพลตฟอร์มได้ตามสิทธิ์ของผู้ใช้ พร้อม Claude Code skill สำหรับทีมโครงสร้างพื้นฐาน',
        },
      },
      {
        label: { en: 'Access control', th: 'ควบคุมสิทธิ์' },
        text: {
          en: 'Role-based permissions, whitelist approval tickets, and scheduled branch freezes.',
          th: 'สิทธิ์การใช้งานตามบทบาท ทิกเก็ตอนุมัติ whitelist และการตั้งเวลา freeze branch',
        },
      },
    ],
    tags: ['Go', 'Next.js', 'Jenkins', 'Terraform', 'AWS'],
  },
  {
    company: 'iPassion',
    period: { en: 'Jan – Jun 2024', th: 'ม.ค. – มิ.ย. 2567' },
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
  /** Repo or live demo. Rendered as a link on the title when set. */
  href?: string;
  /** Pipeline stages drawn as a flow diagram under the project. */
  flow?: Localized[];
};

export const projects: Project[] = [
  {
    slug: 'internal-deployment-platform',
    year: '2025–2026',
    title: { en: 'Internal deployment platform', th: 'แพลตฟอร์มดีพลอยภายใน' },
    summary: {
      en: 'The platform engineers use to ship. A Next.js web app and AI agents call a Go gRPC backend; a NestJS worker and RabbitMQ hand work to Jenkins, which provisions AWS through Terragrunt.',
      th: 'แพลตฟอร์มที่วิศวกรใช้ส่งงานขึ้นระบบ เว็บ Next.js และเอเจนต์ AI เรียก backend Go ผ่าน gRPC แล้ว worker NestJS กับ RabbitMQ ส่งงานต่อให้ Jenkins ซึ่งสร้างทรัพยากร AWS ผ่าน Terragrunt',
    },
    points: [
      {
        en: 'Go gRPC backend with a REST gateway, shared by the web app and the MCP tools',
        th: 'backend Go แบบ gRPC พร้อม REST gateway ใช้ร่วมกันทั้งเว็บและเครื่องมือ MCP',
      },
      {
        en: 'Event-driven jobs: RabbitMQ messages trigger Jenkins pipelines, which report status back to the platform',
        th: 'งานแบบ event-driven ข้อความผ่าน RabbitMQ สั่งงานไปป์ไลน์ Jenkins แล้วรายงานสถานะกลับมาที่แพลตฟอร์ม',
      },
      {
        en: 'Infrastructure as code: Terragrunt units generated per request across multiple AWS accounts',
        th: 'โครงสร้างพื้นฐานแบบโค้ด สร้าง Terragrunt unit ตามคำขอ รองรับหลายบัญชี AWS',
      },
    ],
    stack: ['Go', 'gRPC', 'Next.js', 'NestJS', 'Terragrunt', 'AWS'],
    flow: [
      { en: 'Web app and AI agents (MCP)', th: 'เว็บและเอเจนต์ AI (MCP)' },
      { en: 'Go gRPC backend', th: 'backend Go แบบ gRPC' },
      { en: 'NestJS worker, RabbitMQ', th: 'worker NestJS และ RabbitMQ' },
      { en: 'Jenkins pipelines', th: 'ไปป์ไลน์ Jenkins' },
      { en: 'AWS via Terragrunt', th: 'AWS ผ่าน Terragrunt' },
    ],
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
    year: '2024–2025',
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
    items: ['Go', 'TypeScript', 'Java', 'JavaScript', 'SQL'],
  },
  {
    group: { en: 'Backend and APIs', th: 'ระบบหลังบ้านและ API' },
    items: ['gRPC', 'Protobuf', 'Spring Boot', 'Node.js', 'NestJS', 'AdonisJS'],
  },
  {
    group: { en: 'Frontend', th: 'ระบบหน้าบ้าน' },
    items: ['React', 'Next.js', 'Vue.js', 'Tailwind'],
  },
  {
    group: { en: 'Data and messaging', th: 'ฐานข้อมูลและระบบส่งข้อความ' },
    items: ['PostgreSQL', 'MySQL', 'MSSQL', 'MongoDB', 'InfluxDB', 'RabbitMQ'],
  },
  {
    group: { en: 'Cloud and IaC', th: 'คลาวด์และ IaC' },
    items: ['AWS', 'Terraform', 'Terragrunt', 'Docker', 'Nginx'],
  },
  {
    group: { en: 'CI/CD and quality', th: 'CI/CD และคุณภาพโค้ด' },
    items: ['Jenkins', 'GitLab', 'GitHub', 'SonarQube', 'Playwright', 'Vitest', 'Grafana'],
  },
  {
    group: { en: 'AI tooling', th: 'เครื่องมือ AI' },
    items: ['MCP servers', 'Claude Code', 'Kiro', 'Roo Code'],
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

// Issuers read off the certificate images.
export const certificates: Certificate[] = [
  {
    slug: 'toeic-2025',
    issuer: 'ETS',
    year: '2025',
    title: { en: 'TOEIC Listening & Reading Score 680', th: 'TOEIC การฟังและการอ่าน คะแนน 680' },
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
