# Mobile Menu Background Fix

## Goal
Fix the mobile hamburger menu so it opens with a solid background panel that does not visually overlap the header or the page content.

## Current State
- `src/components/Header.tsx` renders a fixed header with a translucent `bg-background/70` backdrop.
- The mobile menu overlay is `fixed inset-0 top-20 z-40 bg-background` and appears below the header.
- The user reports that, on phone view, tapping the 3-line menu causes it to overlap with something on screen.

## Proposed Changes
- Increase the mobile menu overlay's background opacity so the panel is fully opaque (`bg-background` is already solid, so add `bg-opacity-100` or switch to a themed surface color like `bg-card`).
- Raise the mobile menu overlay's z-index above the page but below the header, or wrap it so it clearly sits beneath the header and does not bleed over the top bar.
- Add a subtle border/separator between the header and the mobile menu (`border-t` or `border-separator`) for visual separation.
- Optionally, add a small backdrop blur to the mobile menu panel for consistency with the header.
- Prevent the large menu links from sitting flush against the header by adding a small top padding to the nav list.

## Implementation Steps
1. Read `src/components/Header.tsx` to confirm current markup.
2. Update the mobile menu overlay styling to use a solid, opaque background that clearly separates from the header.
3. Verify the menu is positioned below the header (`top-20`) and does not overlap it.
4. Test the change by rendering the component in the mobile preview and taking a screenshot to confirm the menu is fully readable.

## Verification
- Open the preview in mobile viewport.
- Tap the hamburger icon and confirm the menu opens as a clean panel with no overlap.
- Check both light and dark themes.
