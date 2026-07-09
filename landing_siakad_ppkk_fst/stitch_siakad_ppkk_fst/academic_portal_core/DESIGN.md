---
name: Academic Portal Core
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#3f4943'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#6f7973'
  outline-variant: '#bec9c2'
  surface-tint: '#1b6b50'
  primary: '#00422f'
  on-primary: '#ffffff'
  primary-container: '#005c42'
  on-primary-container: '#87d2b1'
  inverse-primary: '#8bd6b4'
  secondary: '#006a6a'
  on-secondary: '#ffffff'
  secondary-container: '#8cf3f3'
  on-secondary-container: '#007070'
  tertiary: '#4c3600'
  on-tertiary: '#ffffff'
  tertiary-container: '#684b00'
  on-tertiary-container: '#f9b80b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a6f2d0'
  primary-fixed-dim: '#8bd6b4'
  on-primary-fixed: '#002115'
  on-primary-fixed-variant: '#00513a'
  secondary-fixed: '#8cf3f3'
  secondary-fixed-dim: '#6fd7d6'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f4f'
  tertiary-fixed: '#ffdea3'
  tertiary-fixed-dim: '#fdbc13'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4200'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  tabular-nums:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 32px
  margin-tablet: 24px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

The design system is engineered for the **PPKK FST UIN Sunan Kalijaga**, prioritizing institutional authority, data density, and administrative clarity. The brand personality is professional, secure, and modern, blending the academic heritage of UIN with a forward-thinking technical edge suitable for the Faculty of Science and Technology.

The design style is **Corporate / Modern**, leaning into a structured, functionalist aesthetic. It utilizes a refined grid system and subtle depth to organize complex academic datasets into digestible dashboard views. The emotional response should be one of reliability and confidence, ensuring that students, faculty, and administrators can navigate sensitive academic information without cognitive friction. High-contrast interfaces ensure accessibility and long-term legibility for intensive administrative tasks.

## Colors

The palette is anchored by **Deep Green**, representing the Islamic identity and institutional prestige of UIN Sunan Kalijaga. This is supported by **Teal** to introduce a modern, technical feel appropriate for the Faculty of Science and Technology.

- **Primary (Deep Green):** Used for primary navigation, headers, and key call-to-action buttons. It signifies authority and stability.
- **Secondary (Teal):** Used for data visualization, progress indicators, and interactive highlights.
- **Tertiary (Gold):** Reserved for alerts, critical status updates (e.g., pending approvals), and academic honors.
- **Neutral Grays:** A strictly defined scale of Cool Grays is used for background layering, table borders, and secondary text to maintain a clean, uncluttered interface.
- **Semantic Colors:** Standardized Success (Emerald), Error (Crimson), and Warning (Amber) tones are adjusted for high contrast against white backgrounds.

## Typography

This design system utilizes **Inter** for all roles to leverage its exceptional legibility in data-heavy environments. The typeface's tall x-height and systematic spacing make it ideal for the dense tables and complex forms found in academic management.

- **Headlines:** Use Bold and Semi-Bold weights with slight negative letter-spacing to create a strong visual hierarchy for page titles and section headers.
- **Body Text:** Primarily uses `body-md` (14px) for dashboard content and lists to maximize information density without sacrificing readability.
- **Tabular Data:** For all numeric values in tables (grades, credits, IDs), use `tabular-nums` settings to ensure vertical alignment and easy scanning of columns.
- **Labels:** Small caps or tracking-heavy labels are used for metadata and category tags to differentiate them from actionable body copy.

## Layout & Spacing

The design system follows a **Fixed-Fluid Hybrid Grid**. On desktop, a 12-column grid system is used with a maximum container width of 1440px. The sidebar is fixed at 280px, while the main content area expands to fill the remaining space.

- **Rhythm:** An 8px base grid drives all spatial relationships. Small components (buttons, inputs) use 4px increments for internal padding.
- **Density:** To accommodate large datasets, the design system allows for a "Compact" mode in tables and lists, reducing vertical padding by 50%.
- **Breakpoints:**
  - **Desktop (1280px+):** 12 columns, 32px margins.
  - **Tablet (768px - 1279px):** 8 columns, 24px margins. Sidebar collapses to icons-only.
  - **Mobile (<767px):** 4 columns, 16px margins. Sidebar transforms into a bottom-sheet or hamburger menu.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layering** and crisp outlines rather than aggressive shadows. This ensures the UI remains lightweight and professional.

- **Level 0 (Background):** Solid `#F9FAFB` for the main application canvas.
- **Level 1 (Cards/Containers):** Pure white `#FFFFFF` with a 1px border in Gray-200. This is the primary surface for all dashboard widgets.
- **Level 2 (Dropdowns/Modals):** Pure white with a 1px border and an extra-diffused ambient shadow (`0 10px 15px -3px rgba(0, 0, 0, 0.05)`).
- **Active State:** Elements like focused input fields or active sidebar items use a subtle 2px Primary Green left-border or a soft Primary Green tint (`5% opacity`) as a background fill.

## Shapes

The shape language is conservative and geometric. **Soft (0.25rem)** roundedness is used for the majority of UI components to maintain a modern look while appearing more professional and "institutional" than fully rounded alternatives.

- **Small (0.25rem):** Standard buttons, input fields, checkboxes, and tags.
- **Medium (0.5rem):** Dashboard cards, modal containers, and alert banners.
- **Large (0.75rem):** Massive hero sections or main navigation containers if floating.
- **Interactive Elements:** Maintain consistent corner radii across all form elements to ensure a unified "block" feel in complex forms.

## Components

### Buttons
- **Primary:** Solid Deep Green with white text. High contrast, sharp focus states.
- **Secondary:** Outline Teal with 1px border. Used for secondary actions like "Export" or "Filter."
- **Ghost:** No background or border, Teal text. Used for less prominent navigation within cards.

### Data Tables
The core of the system. Tables must include:
- Zebra-striping (Gray-50) for row differentiation.
- Sticky headers for long academic records.
- Sorted state indicators using Primary Green icons.
- Inline status chips (e.g., "Active," "Graduated," "On Leave").

### Form Fields
- **Inputs:** Standardized height (40px) with Gray-300 borders that transition to Primary Green on focus.
- **Validation:** Error states must use a combination of red borders and a supporting icon for accessibility.

### Dashboard Cards
- Consistent padding (24px).
- Header includes a Title-md and an optional "More" menu or "Filter" icon.
- Content is strictly aligned to the 8px grid.

### Progress Indicators
- Linear bars for course completion and GPA tracking, using the Teal/Green gradient or solid Primary Green.