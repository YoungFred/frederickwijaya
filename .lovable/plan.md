# Personal Resume Portfolio

## Goal
Transform the existing art portfolio into Frederick WIjaya 黄瑞鹏’s personal resume-style portfolio: visitors should quickly understand who Frederick is, what he does, what he has worked on, and how to get in touch, while the existing visual work remains the strongest proof of experience.

## Experience
- Rebrand the site from “Jordan Studio” to “Frederick WIjaya 黄瑞鹏” throughout navigation, footer, page copy, and metadata.
- Keep the editorial portfolio direction selected by the user: Syne headings, Plus Jakarta Sans body text, magazine-inspired composition, and a high-contrast ink / paper / ember / blue accent palette.
- Rework the home page into a resume-led introduction with the name, a concise professional positioning statement, selected-work entry point, and visible resume sections preview.
- Rework the About page into a scannable resume page with:
  - Profile / introduction
  - Experience timeline
  - Skills grouped by capability
  - Education
  - Selected clients or project context where useful
- Keep the Work page as the visual portfolio index, but add clearer role, category, year, and project context so each item reads as resume evidence rather than only a gallery title.
- Update project detail pages to emphasize Frederick’s role, contribution, tools or disciplines, client/context, year, and project description while preserving the existing image-led presentation.
- Update Contact and footer content to use Frederick’s identity and editable placeholder contact details instead of Jordan Studio data.
- Clearly label any invented resume entries as editable placeholders so no unverified claims are presented as factual.

## Technical details
- Update the global semantic color tokens in `src/index.css` for the selected editorial palette, preserving light/dark theme support and accessible contrast.
- Load Plus Jakarta Sans alongside Syne in the document head and update the Tailwind font mapping / typography utilities to use it for body and labels.
- Use existing layout, navigation, project data, and image assets where possible; make focused edits to the relevant pages and components rather than introducing a new framework or backend.
- Preserve responsive behavior for mobile recruiters and desktop portfolio visitors, including readable timelines, non-overlapping navigation, and accessible image alt text.
- Update `index.html` title, description, Open Graph title/description/type, and Twitter card metadata to match Frederick’s personal portfolio.
- Validate the finished routes and responsive rendering in the live preview, including home, work, project detail, about, and contact pages.