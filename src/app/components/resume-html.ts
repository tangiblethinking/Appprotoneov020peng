/**
 * Christopher Kenreigh Resume HTML
 * This file contains the HTML resume that opens in a new tab
 */

export const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Christopher Kenreigh – Product Design Director, Fintech</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --blue: #2563c7;
      --dark: #111111;
      --mid: #444444;
      --light: #666666;
      --rule: #dddddd;
      --bg: #ffffff;
      --sidebar-bg: #f7f8fa;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      font-size: 10.5pt;
      color: var(--dark);
      background: #e8e8e8;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 32px 16px;
      min-height: 100vh;
    }

    .page {
      background: var(--bg);
      width: 850px;
      max-width: 100%;
      box-shadow: 0 4px 40px rgba(0,0,0,0.18);
      display: grid;
      grid-template-rows: auto 1fr;
    }

    /* ── HEADER ── */
    header {
      padding: 28px 36px 18px;
      border-bottom: 2px solid var(--rule);
    }
    header h1 {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(20pt, 5vw, 30pt);
      font-weight: 400;
      color: var(--dark);
      letter-spacing: -0.5px;
      line-height: 1.1;
    }
    header .title-line {
      font-size: clamp(9pt, 2.5vw, 11pt);
      font-weight: 700;
      color: var(--blue);
      margin: 3px 0 8px;
      letter-spacing: 0.2px;
    }
    header .contact {
      font-size: 9.5pt;
      color: var(--mid);
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }
    header .contact a {
      color: var(--blue);
      text-decoration: none;
      font-weight: 500;
    }
    header .contact span { color: var(--rule); }

    /* ── BODY LAYOUT ── */
    .body {
      display: grid;
      grid-template-columns: 1fr 240px;
    }

    /* ── LEFT (Experience) ── */
    .main {
      padding: 24px 36px 32px;
      border-right: 1px solid var(--rule);
    }

    .section-title {
      font-family: 'DM Serif Display', serif;
      font-size: 14pt;
      font-weight: 400;
      color: var(--dark);
      border-bottom: 1.5px solid var(--dark);
      padding-bottom: 4px;
      margin-bottom: 14px;
    }

    .job { margin-bottom: 20px; }

    .job-title {
      font-size: 10.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .job-company {
      font-size: 10pt;
      font-weight: 500;
      color: var(--blue);
      text-decoration: none;
    }
    .job-company:hover { text-decoration: underline; }

    .job-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin: 2px 0 6px;
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }
    .job-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 16px;
      vertical-align: middle;
    }

    .job ul {
      list-style: disc;
      padding-left: 16px;
    }
    .job ul li {
      font-size: 9.5pt;
      color: var(--mid);
      line-height: 1.5;
      margin-bottom: 3px;
    }

    /* ── RIGHT (Sidebar) ── */
    .sidebar {
      background: var(--sidebar-bg);
      padding: 24px 22px 32px;
    }

    .sidebar-section { margin-bottom: 22px; }

    .sidebar .section-title {
      font-size: 12pt;
      border-bottom-color: var(--mid);
    }

    .summary-quote {
      font-size: 9.5pt;
      font-style: italic;
      color: var(--mid);
      line-height: 1.6;
      margin-bottom: 10px;
    }

    .summary-bullets {
      list-style: disc;
      padding-left: 14px;
    }
    .summary-bullets li {
      font-size: 8.8pt;
      color: var(--mid);
      line-height: 1.55;
      margin-bottom: 3px;
    }

    .tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 6px;
    }
    .tag {
      font-size: 8pt;
      font-weight: 500;
      color: var(--blue);
      background: rgba(37,99,199,0.08);
      border-radius: 3px;
      padding: 2px 7px;
    }

    .dot-list {
      list-style: disc;
      padding-left: 14px;
    }
    .dot-list li {
      font-size: 9pt;
      color: var(--mid);
      line-height: 1.6;
      margin-bottom: 3px;
    }

    /* Education */
    .edu-degree {
      font-size: 9.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .edu-school {
      font-size: 9pt;
      color: var(--blue);
      font-weight: 500;
    }
    .edu-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 5px;
      flex-wrap: wrap;
    }
    .edu-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 15px;
      vertical-align: middle;
    }

    .share-link {
      display: block;
      text-align: right;
      font-size: 8.5pt;
      color: var(--blue);
      text-decoration: none;
      font-style: italic;
      margin-top: 16px;
    }
    .share-link:hover { text-decoration: underline; }

    /* ── MOBILE RESPONSIVE ── */
    @media (max-width: 680px) {
      body {
        padding: 0;
        background: var(--bg);
        align-items: stretch;
      }
      .page {
        width: 100%;
        box-shadow: none;
        border-radius: 0;
      }
      header { padding: 20px 18px 14px; }
      header h1 { font-size: 22pt; }
      header .title-line { font-size: 9pt; }
      header .contact { font-size: 9pt; gap: 6px; row-gap: 4px; }
      .body {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
      }
      .main {
        padding: 18px 18px 24px;
        border-right: none;
        border-bottom: 1px solid var(--rule);
        order: 2;
      }
      .sidebar {
        padding: 18px 18px 20px;
        order: 1;
        border-bottom: 2px solid var(--rule);
      }
      .section-title { font-size: 13pt; }
      .sidebar .section-title { font-size: 11pt; }
      .job ul li { font-size: 9pt; }
      .job-meta { font-size: 8pt; gap: 4px; }
      .summary-quote { font-size: 9pt; }
      .tag { font-size: 7.5pt; }
    }

    @media (min-width: 681px) and (max-width: 900px) {
      body { padding: 16px 8px; }
      .page { width: 100%; }
      header { padding: 22px 24px 14px; }
      .main { padding: 20px 24px 28px; }
      .sidebar { padding: 20px 16px 28px; }
      .body { grid-template-columns: 1fr 200px; }
    }

    @media print {
      body { background: white; padding: 0; }
      .page { box-shadow: none; width: 100%; }
    }
  </style>
</head>
<body>
<div class="page">

  <!-- HEADER -->
  <header>
    <h1>Christopher Kenreigh</h1>
    <div class="title-line">Product Design Director | Fintech &amp; Spend Management UX | Design Systems Governance | AI-Powered Design Leadership</div>
    <div class="contact">
      <span style="color: #212121; font-weight:700">480-206-2145</span>
      <span>|</span>
      <a href="mailto:c.kenreigh@gmail.com" style="font-weight:800;">c.kenreigh@gmail.com</a>
      <span>|</span>
      <a href="https://www.linkedin.com/in/kenreigh/" target="_blank">LinkedIn</a>
      <span>|</span>
      <a href="https://www.uxapex.com/portfolioa18" target="_blank">Portfolio</a>
    </div>
  </header>

  <!-- BODY -->
  <div class="body">

    <!-- MAIN EXPERIENCE -->
    <main class="main">
      <h2 class="section-title">Experience</h2>

      <div class="job">
        <div class="job-title">Product Design Director (Principal)</div>
        <a class="job-company" href="https://www.plexusworldwide.com" target="_blank">Plexus Worldwide</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2024 – Present
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Directed 5 product designers across full lifecycle — discovery, strategy, build-ready execution, and post-launch measurement — for spend management, billing, and membership payment platforms across 3 international markets</li>
          <li>Led trust-first redesign of cart, checkout, and direct billing flows for 200K+ users — A/B tested high-fidelity prototypes with PM, Engineering, and Data partners; reduced abandonment 43% and drove subscription revenue growth</li>
          <li>Co-owned product roadmap as a Big-4-style partner — translating financial insights, user research, and business goals into intuitive flows that kept customers in control and unlocked rewards value</li>
          <li>Architected design system governance — consolidated 6 tools into unified component library with design tokens, pattern documentation, and 60–90% org reuse across web, iOS, and Android</li>
          <li>Led adoption of Figma Make, Cursor, and LLM-driven AI tooling — increasing sprint delivery velocity 35% and elevating team quality bar across the design organization</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior Product Designer</div>
        <a class="job-company" href="https://www.freeportmcmoran.com" target="_blank">Freeport-McMoRan</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          08/2022 – 10/2023
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Led end-to-end design for financial and operational data dashboards — translating complex multi-variable insights into high-trust, clarity-first interfaces that improved efficiency 30% across web and mobile</li>
          <li>Facilitated 10+ discovery workshops translating user needs into actionable product strategy and build-ready specifications across cross-functional teams</li>
          <li>Presented roadmaps and Agile design strategy to C-suite — communicating the strategic why with conviction and securing approval for 5 major product releases</li>
          <li>Architected scalable MUI React design system with full governance documentation — adopted across web, iOS, and Android, enabling engineering to build without friction</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior Product Designer</div>
        <a class="job-company" href="https://www.opentechalliance.com" target="_blank">OpenTech Alliance</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2021 – 08/2022
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Championed design vision to C-suite through strategic storytelling — securing budget for 3 new product design initiatives and elevating design maturity org-wide</li>
          <li>Redesigned Point of Sale and direct billing UX with trust-first interaction patterns — boosting task completion 75% and measurably increasing customer confidence at payment touchpoints</li>
          <li>Designed compliant data capture and rewards enrollment flows — reducing legal risk 100% while maintaining clarity and delight at every user touchpoint</li>
          <li>Drove data-informed UX improvements across digital commerce journeys via usability testing and A/B testing — increasing fulfillment and task success rates 25%</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">UX Design Lead</div>
        <a class="job-company" href="https://www.siemens.com" target="_blank">Siemens</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          07/2020 – 05/2021
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Remote
        </div>
        <ul>
          <li>Led design system unification across 4 simultaneous product initiatives — establishing shared component standards, interaction patterns, and governance in a regulated enterprise environment</li>
          <li>Produced design specifications and documentation reducing engineering dissemination needs 50% — enabling teams to build autonomously with speed and precision</li>
          <li>Secured executive approval for 2 high-impact initiatives through conviction-driven design rationale and stakeholder alignment</li>
          <li>Designed data-dense UI layouts integrating 3D and CAD visualization — delivering clarity and utility on complex enterprise interfaces</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior UX Designer</div>
        <a class="job-company" href="https://www.glynlyon.com" target="_blank">Glynlyon Inc</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          02/2014 – 04/2019
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Designed WCAG and ADA-compliant inclusive experiences across multi-platform digital products — setting the accessibility and clarity bar across iOS, Android, and web</li>
          <li>Drove data-informed design decisions through user research and usability testing — roadmapping UI features that increased task success and ease of use 65%</li>
          <li>Communicated complex interaction concepts to engineering and product partners with precision — ensuring technical feasibility and high-quality execution across platforms</li>
          <li>Led cross-functional Design Thinking workshops — aligning product strategy, user needs, and business goals at the earliest stage of the product lifecycle</li>
        </ul>
      </div>
    </main>

    <!-- SIDEBAR -->
    <aside class="sidebar">

      <div class="sidebar-section">
        <h2 class="section-title">Summary</h2>
        <p class="summary-quote" style="color: #212121; font-weight:700">"Product Design Director — full lifecycle ownership from discovery and strategy through build-ready execution — delivering high-trust fintech experiences across spend management, billing, rewards, and credit card platforms that drive clarity, conversion, and lasting user confidence."</p>
        <ul class="summary-bullets">
          <li>12+ years leading end-to-end fintech-adjacent and enterprise digital platforms</li>
          <li>Mentor and elevate teams of 4–6 designers while staying hands-on when craft demands it</li>
          <li>Design systems governance: 60–90% org reuse, design tokens, full documentation</li>
          <li>AI-powered design: Figma Make, Cursor, LLM-driven prototyping, MCP tooling</li>
          <li>Strategic storyteller — communicates the design vision and the business why to PM, Engineering, Data, and C-suite</li>
          <li>Conviction-led, data-driven, and WCAG-compliant across every product surface</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Key Achievements</h2>
        <ul class="dot-list">
          <li>43% billing abandonment reduction — trust-first payment UX</li>
          <li>–17% to +2% operating margin via AI-powered platform</li>
          <li>60–90% design system org reuse; 50% faster delivery</li>
          <li>10+ C-suite approvals through strategic design rationale</li>
          <li>35% velocity lift via Figma Make, Cursor, AI tooling</li>
          <li>100% regulatory compliance — rewards &amp; payment flows</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Skills</h2>
        <div class="tag-list">
          <span class="tag">Fintech UX</span>
          <span class="tag">Spend Management</span>
          <span class="tag">Billing &amp; Payments</span>
          <span class="tag">Rewards Design</span>
          <span class="tag">Full Product Lifecycle</span>
          <span class="tag">Design Direction</span>
          <span class="tag">Figma</span>
          <span class="tag">Figma Make</span>
          <span class="tag">Cursor</span>
          <span class="tag">Design Systems</span>
          <span class="tag">Design Tokens</span>
          <span class="tag">MUI React</span>
          <span class="tag">Google MD3</span>
          <span class="tag">WCAG</span>
          <span class="tag">A/B Testing</span>
          <span class="tag">Strategic Storytelling</span>
          <span class="tag">Team Mentorship</span>
          <span class="tag">Agile / Scrum</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">AI &amp; Tooling</h2>
        <div class="tag-list">
          <span class="tag">Figma Make</span>
          <span class="tag">Cursor</span>
          <span class="tag">MCP Tooling</span>
          <span class="tag">LLM Workflows</span>
          <span class="tag">Agentic AI</span>
          <span class="tag">RAG Systems</span>
          <span class="tag">Multimodal AI</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Education</h2>
        <div class="edu-degree">Bachelor of Art</div>
        <div class="edu-school">The Art Institute of Phoenix</div>
        <div class="edu-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          09/2002 – 09/2005
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ
        </div>
      </div>

    </aside>
  </div><!-- /body -->
</div><!-- /page -->
</body>
</html>`;

/**
 * Opens the resume HTML in a new browser tab using Blob URL
 */
export function openResumeInNewTab(): void {
  // Create a Blob from the HTML string
  const blob = new Blob([resumeHTML], { type: 'text/html' });
  
  // Generate a blob URL
  const blobURL = URL.createObjectURL(blob);
  
  // Open in new tab
  const newWindow = window.open(blobURL, '_blank');
  
  // Clean up the blob URL after a delay to ensure the page loads
  if (newWindow) {
    setTimeout(() => {
      URL.revokeObjectURL(blobURL);
    }, 1000);
  }
}
