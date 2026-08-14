# Update resume content and add CV download

## Goal
Refresh the portfolio site with the latest resume content from the uploaded PDF and add a clear way for visitors to download the CV.

## Verified current state
- The current profile, experience, education, and skills live in `src/data/resume.ts`.
- The current site shows the older, more fragmented role history (two separate Taiwan Felt roles, three ERSA roles, two IBPSA roles) and a simpler skills list.
- The uploaded PDF (`Frederick_WIjaya_CV_-_Universal.pdf`) consolidates several roles and adds new details: phone, TinyURL, GPA, coursework, technical skills, and achievement-oriented bullets.

## Content changes

### Profile
- Keep name: `Frederick WIjaya 黄瑞鹏`.
- Update title to: `Engineering student` (matches CV header).
- Rewrite summary to match the CV’s analytical, operations, and diplomatic-leadership positioning.
- Add phone: `+886-970-019-931`.
- Add a new TinyURL link field: `tinyurl.com/frederickw168` (to be used alongside LinkedIn and Instagram).
- Keep email and LinkedIn as-is because they already match the CV.

### Education
- Update program to: `B.S. in Power Mechanical Engineering & Industrial Engineering`.
- Update period to: `2024 – 2028`.
- Add GPA: `3.5 / 4.0`.
- Add relevant coursework: `Engineering Economics, Manufacturing Processes, Computer-Aided Drawing, Energy Engineering`.

### Skills
Replace the current four loose skill groups with the CV’s three categories:
- **Data & Analytics:** Data cataloging, Database archiving, Advanced Microsoft Excel (VLOOKUP, Pivot Tables), Process optimization, Vibe coding.
- **Engineering & Software:** Autodesk Inventor, CAD drawing, Microsoft Office (PowerPoint, Word).
- **Languages:** English (Fluent), Chinese (Working proficiency).

### Experience
Consolidate the existing entries into the CV’s five organization blocks, preserving the grouped-by-organization style already on the About page.

1. **Taiwan Felt Co., Ltd.** — Rotational Intern (Corporate Operations & Manufacturing) | Jun 2026 – Aug 2026 | Bade District, Taoyuan City, Taiwan | On-site
   - Standardized administrative workflows and operational documentation across 3 corporate divisions, reducing internal document processing time by 15%.
   - Analyzed end-to-end production lines and machinery workflows across 4 manufacturing shop floors to identify and eliminate process bottlenecks.

2. **NTHU Racing** — Engineering Member (Chassis Division) | Mar 2026 – Present | Hsinchu City, Taiwan | On-site
   - Utilized Autodesk Inventor to design high-performance chassis systems, optimizing structural integrity and vehicle safety frame specs.

3. **NTHU Student Ambassadors (ERSA)** — Chief Trainer & Diplomatic Protocol Lead | Jul 2025 – Present | Hsinchu City, Taiwan | Part-time
   - Promoted to Chief Trainer (Jul 2026); designed and delivered a comprehensive 6-week training curriculum on diplomatic protocol and public speaking to 12 trainees.
   - Served as primary English Master of Ceremonies (MC) for 8+ high-profile university ceremonies hosting VIP international delegations.

4. **NTHU IBPSA** — Senior Event Planner | Jul 2025 – Present | Hsinchu City, Taiwan | Full-time
   - Advanced to Senior Planner to direct end-to-end logistics, cross-departmental teams of 15+ members, and more than NT$75,000 budget for international flagship campus events.

5. **NTHU Institute of Anthropology** — Conservation & Inventory Project Intern | Dec 2025 – Jan 2026 | Hsinchu City, Taiwan | On-site
   - Executed systematic data cataloging, categorization, and digital archiving for 500+ historical artifacts, improving database search efficiency and ensuring data integrity.

## CV download button
- Register the uploaded PDF as a Lovable asset so it can be served from a CDN URL without committing the binary to the repo.
- Add a prominent `Download CV` button near the top of the homepage hero, next to the primary contact/CTA links, so visitors see it immediately.
- Add a secondary `Download CV` link/button in the About page experience section for visitors who are already reading the resume.
- Ensure the button uses the existing themed accent color and is available in both light and dark modes.

## Technical details
- Update `src/data/resume.ts` with the new profile, education, experience groups, and skills.
- Add a `resumeUrl` field in `src/data/resume.ts` pointing to the Lovable asset URL after registration.
- Update `src/pages/Index.tsx` to include the Download CV button in the hero.
- Update `src/pages/About.tsx` to add a Download CV link in the resume header or experience section.
- Ensure `src/pages/Contact.tsx` reflects the new phone and TinyURL fields if needed.
- Verify the updated About page at desktop and mobile widths to confirm the consolidated experience groups remain readable.
- Run a build check and capture preview screenshots of the home and About pages to confirm the download button and updated content render correctly.
