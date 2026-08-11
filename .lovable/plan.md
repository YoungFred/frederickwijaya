# Group experience by organization

## Goal
Present the resume experience in a LinkedIn-style company view: one organization heading per company or institution, with all roles held there grouped beneath it. Apply this to every repeated organization, not only Taiwan Felt.

## Changes
- Restructure the experience data into organization groups while preserving every existing role, date, location, work type, description, and skill.
- Keep the current chronological ordering of organizations based on their first appearance, and keep roles within each organization in the current order.
- Update the About page experience section to render one organization block at a time, with the organization name shown once and its roles displayed as nested entries beneath it.
- Keep the existing editorial styling, responsive layout, and experience copy; only change the hierarchy and grouping presentation.
- Leave one-off organizations, such as NTHU Racing and the Institute of Anthropology, as single-role organization blocks so all experience uses the same structure.

## Technical details
- Add a grouped experience type in `src/data/resume.ts` (or derive the groups from the existing entries) and update the About page mapping accordingly.
- Use stable keys for both organization groups and nested roles.
- Verify the About page at desktop and mobile widths to ensure organization headings, role metadata, and descriptions remain readable without overlap.
