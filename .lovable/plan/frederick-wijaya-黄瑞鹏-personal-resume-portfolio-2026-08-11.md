# Frederick WIjaya 黄瑞鹏 — Personal Resume Portfolio

## Goal
Transform the existing art portfolio into Frederick WIjaya 黄瑞鹏’s personal resume-style portfolio. Visitors should quickly understand Frederick’s academic background, current roles, event and operations experience, selected work, skills, and how to get in touch, while the existing visual work remains a polished portfolio layer.

## Content from the LinkedIn reference
Use the uploaded LinkedIn screenshot as a content reference only; do not embed it as an image. Add the visible, user-provided experience entries below without inventing additional employers or outcomes:

- Current profile positioning: Junior Interdisciplinary Program of Engineering undergraduate at National Tsing Hua University; curious and enthusiastic engineering student.
- Rotational Intern — Corporate Operations & Quality Control; Jul 2026–Present; Bade District, Taoyuan City, Taiwan; on-site.
- Rotational Intern — Manufacturing & Production Operations; Jun 2026–Jul 2026; Bade District, Taoyuan City, Taiwan; on-site.
- Member — Chassis Division | NTHU Racing; NTHU Racing; Mar 2026–Present; Hsinchu City, Taiwan; on-site.
- National Tsing Hua University roles:
  - Chief Trainer (司儀/襄儀教學長) | 清華大學紫荊大使 (NTHU ERSA); Jul 2026–Present.
  - Active Duty Member | 清華大學紫荊大使 (NTHU ERSA); Jul 2025–Present.
  - Trainee | 清華大學紫荊大使 (NTHU ERSA); Sep 2025–Jul 2026.
- NTHU IBPSA roles:
  - Senior Event Planner; Jun 2026–Present.
  - Junior Event Planner; Jul 2025–Jun 2026.
- Conservation and Inventory Project (Winter Internship), National Tsing Hua University, Institute of Anthropology; Dec 2025–Jan 2026; Hsinchu City, Taiwan; on-site.

Keep descriptions faithful to the screenshot: operations and administrative support, manufacturing-floor and production-line study, chassis engineering and workshop safety training, ceremonial hosting / Xiangyi protocol training and mentoring, university event planning, and inventory / digital cataloging of historical or research materials. Any details not visible in the reference—such as exact company name, degree dates, contact details, tools, achievements, or project outcomes—should remain clearly editable placeholders rather than factual claims.

## Experience
- Rebrand the site from “Jordan Studio” to “Frederick WIjaya 黄瑞鹏” throughout navigation, footer, page copy, and metadata.
- Keep the selected editorial portfolio direction: Syne headings, Plus Jakarta Sans body text, magazine-inspired composition, and a high-contrast ink / paper / ember / blue accent palette.
- Rework the home page into a resume-led introduction with Frederick’s name, positioning statement, a selected-work entry point, and a compact snapshot of experience and education.
- Rework the About page into a scannable resume page with:
  - Profile / introduction
  - Experience timeline using the LinkedIn entries above
  - Skills grouped around operations, manufacturing, event planning, public speaking / protocol, engineering teamwork, and inventory / cataloging
  - Education section for National Tsing Hua University with editable degree details where the screenshot does not provide them
  - Selected project context where useful
- Keep the Work page as the visual portfolio index, but add clearer role, category, year, and project context so each item reads as supporting evidence rather than only a gallery title.
- Update project detail pages to emphasize Frederick’s role, contribution, tools or disciplines, client/context, year, and project description while preserving the existing image-led presentation.
- Update Contact and footer content to use Frederick’s identity and editable placeholder contact details instead of Jordan Studio data.

## Technical details
- Update the global semantic color tokens in `src/index.css` for the selected editorial palette, preserving light/dark theme support and accessible contrast.
- Load Plus Jakarta Sans alongside Syne in the document head and update the Tailwind font mapping / typography utilities to use it for body and labels.
- Use existing layout, navigation, project data, and image assets where possible; make focused edits to the relevant pages and components rather than introducing a new framework or backend.
- Preserve responsive behavior for mobile recruiters and desktop portfolio visitors, including readable timelines, non-overlapping navigation, and accessible image alt text.
- Update `index.html` title, description, Open Graph title/description/type, and Twitter card metadata to match Frederick’s personal portfolio.
- Validate the finished routes and responsive rendering in the live preview, including home, work, project detail, about, and contact pages.