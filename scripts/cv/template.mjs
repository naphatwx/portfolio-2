/*
THESIS: One A4 sheet on the site's Swiss grid. A label rail on the left, facts on the
right, the name as the only oversized move. Refuses the two-column sidebar resume with
photo, icons and skill bars.
OWN-WORLD: White paper, #222 ink, #6e6e73 metadata, #e6e6e6 hairlines, Inter/Anuphan
400/500. One KMUTT red dot marks the current role, nothing else.
STORY: A recruiter reads name, role and contact in one glance, then scans experience
labels down the rail, then stack and education.
FIRST VIEWPORT: Name top-left at 27pt; contact stacked in the right quarter; the
profile line under a full-width hairline.
FORM: Swiss editorial grid, extended from the portfolio site. Sections: profile,
experience, projects, stack, education, certificates.
*/

const COPY = {
  en: {
    title: 'Infrastructure Software Engineer',
    location: 'Bangkok, Thailand',
    profile:
      'Infrastructure software engineer building self-service platforms for engineers and the AI agents working beside them: deployment workflows, infrastructure as code, CI quality gates and MCP tools.',
    sections: {
      profile: 'Profile',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Stack',
      education: 'Education',
      certificates: 'Certificates',
    },
  },
  th: {
    title: 'วิศวกรซอฟต์แวร์ (โครงสร้างพื้นฐาน)',
    location: 'กรุงเทพฯ ประเทศไทย',
    profile:
      'วิศวกรซอฟต์แวร์สายโครงสร้างพื้นฐาน สร้างแพลตฟอร์มแบบบริการตัวเองให้วิศวกรและเอเจนต์ AI ที่ทำงานร่วมกัน ทั้งขั้นตอนการดีพลอย โครงสร้างพื้นฐานแบบโค้ด ด่านตรวจคุณภาพใน CI และเครื่องมือ MCP',
    sections: {
      profile: 'โปรไฟล์',
      experience: 'ประสบการณ์',
      projects: 'ผลงาน',
      skills: 'ทักษะ',
      education: 'การศึกษา',
      certificates: 'ใบรับรอง',
    },
  },
};

// The internal platform's architecture becomes the current role's lede instead of a project.
const PROJECT_SLUGS = ['finance-demo-trading', 'taxi-ads-cms'];
const PLATFORM_SLUG = 'internal-deployment-platform';
// Course completions are weak evidence for recruiters; the site keeps the full list.
const CERT_SLUGS = ['toeic-2025', 'basic-aws'];

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

const bare = (url) => url.replace(/^https?:\/\/(www\.)?/, '');

const section = (label, body) => `
  <section class="row">
    <h2 class="rail label">${esc(label)}</h2>
    <div class="body">${body}</div>
  </section>`;

export function renderCv(lang, data, css) {
  const { person, socials, experience, projects, skills, education, certificates } = data;
  const linkedin = socials.find((x) => x.id === 'linkedin');
  const c = COPY[lang];

  const platform = projects.find((p) => p.slug === PLATFORM_SLUG);
  const roles = experience
    .map(
      (role, i) => `
      <article class="role">
        <header class="role-head">
          <h3><span class="strong">${esc(role.company)}</span> <span class="sep">/</span> ${esc(role.title[lang])}</h3>
          <p class="label">${i === 0 ? '<span class="live" aria-hidden="true"></span>' : ''}${esc(role.period[lang])}</p>
        </header>
        <p class="lede">${esc((i === 0 && platform ? platform.summary : role.detail)[lang])}</p>
        <dl class="points">
          ${role.points
            .map((p) => `<div><dt class="label">${esc(p.label[lang])}</dt><dd>${esc(p.text[lang])}</dd></div>`)
            .join('')}
        </dl>
      </article>`,
    )
    .join('');

  const picked = PROJECT_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean);
  const projectList = picked
    .map(
      (p) => `
      <article class="project">
        <header class="role-head">
          <h3 class="strong">${esc(p.title[lang])}</h3>
          <p class="label">${esc(p.year)}</p>
        </header>
        <p>${esc(p.summary[lang])} <span class="muted">${esc(p.stack.join(' · '))}</span></p>
      </article>`,
    )
    .join('');

  const stack = `<dl class="points stack">${skills
    .map((g) => `<div><dt class="label">${esc(g.group[lang])}</dt><dd>${esc(g.items.join(' · '))}</dd></div>`)
    .join('')}</dl>`;

  const edu = `
    <header class="role-head">
      <h3 class="strong">${esc(education.schoolFull[lang])}</h3>
      <p class="label">${esc(education.period)}</p>
    </header>
    <p>${esc(education.degree[lang])}</p>`;

  const certs = `<ul class="certs">${certificates
    .filter((ct) => CERT_SLUGS.includes(ct.slug))
    .map((ct) => `<li><span>${esc(ct.title[lang])}</span> <span class="muted">${esc(ct.issuer)} ${esc(ct.year)}</span></li>`)
    .join('')}</ul>`;

  const contacts = [
    `<a href="mailto:${esc(person.email)}">${esc(person.email)}</a>`,
    `<a href="${esc(person.github)}">${esc(bare(person.github))}</a>`,
    // The profile URL ends in a numeric id; show the readable handle instead.
    `<a href="${esc(person.linkedin)}">linkedin.com/in/${esc(linkedin.handle)}</a>`,
    esc(c.location),
  ];

  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8" />
  <title>${esc(person.name)} — CV</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Anuphan:wght@400;500&display=block" />
  <style>${css}</style>
</head>
<body>
  <main class="sheet">
    <header class="masthead">
      <div>
        <h1 class="name">${esc(person.displayName[lang].join(' ').replaceAll('\u00ad', ''))}</h1>
        <p class="title">${esc(c.title)}</p>
      </div>
      <address class="contact">${contacts.map((x) => `<span>${x}</span>`).join('')}</address>
    </header>
    ${section(c.sections.profile, `<p class="profile">${esc(c.profile)}</p>`)}
    ${section(c.sections.experience, roles)}
    ${section(c.sections.projects, projectList)}
    ${section(c.sections.skills, stack)}
    ${section(c.sections.education, edu)}
    ${section(c.sections.certificates, certs)}
  </main>
</body>
</html>`;
}
