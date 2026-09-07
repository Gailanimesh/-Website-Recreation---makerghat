# MakerGhat — Our Story Webpage

A responsive, pixel-perfect frontend implementation of MakerGhat's "Our Story" page, built to match the Figma specification and optimized for Desktop, Tablet, and Mobile viewports.

---

## 🔗 Submission Links

- **Live Demo**: [Deploying to Vercel...]
- **GitHub Repository**: [Repository URL]

---

## 📁 Project Structure

```
frontend_task/
├── index.html            # Semantic HTML5 document with structured landmarks and metadata
├── css/
│   └── styles.css        # CSS styling (design tokens, layout, typography, animations, responsive breakpoints)
├── js/
│   └── main.js           # Vanilla JavaScript for navigation drawer, slideshow, and interactive year modals
├── assets/
│   └── images/           # 47 optimized production SVGs and raster images
├── .gitignore            # Git ignore rules for clean repository hygiene
└── README.md             # Project documentation and submission details
```

---

## 🛠️ Development Approach

1. **Vanilla Core Tech Stack (HTML5 + Modern CSS + Vanilla JS)**:
   - Built with pure semantic HTML5, modern CSS3 (Custom Properties / Design Tokens), and lightweight JavaScript without unnecessary framework overhead.
   - Ensures ultra-fast loading, minimal bundle footprint, zero build-step requirement, and full compatibility with MakerGhat.org's existing architecture.

2. **Pixel-Perfect Desktop Design**:
   - Implemented the 1440px desktop artboard with exact dimensional accuracy, including:
     - The signature layered pastel section tabs ("MakerGhat story", "MakerGhat team", "Support system", "Volunteers & Alumni") with zero-seam baseline and 24px top-right corner radius.
     - Intricate green circuit board path timeline running across 2018 through 2026.
     - Precise z-index layering (doodles, staircase graphic behind students, circuit line over purple accent bar).
     - Auto-rotating community photo slideshow with smooth cross-fades.

3. **Multi-Device Responsive Architecture**:
   - **Desktop (1100px+)**: Preserved 100% pixel-perfect desktop specification with proportional viewport scaling.
   - **Tablet (768px – 1099px)**:
     - Fluid layout with sticky header.
     - Horizontally scrollable tab bar preserving signature rounded tab aesthetics and pastel colors without awkward line wrapping.
     - Responsive auto-rotating Founders slideshow container.
     - Vertical circuit line connecting narrative milestones.
   - **Mobile (320px – 767px)**:
     - Accessible mobile navigation drawer with hamburger toggle button (`.nav-toggle`).
     - Interactive Year Cards: Tapping any year chip triggers an accessible bottom-sheet modal with blurred backdrop and close button (`×`).
     - Responsive single-column footer layout with fluid newsletter input and social icons.
     - Strict `overflow-x: hidden` to eliminate horizontal page jitter on all mobile screens.

4. **Production Asset Hygiene**:
   - Conducted an asset audit ensuring all 47 referenced production SVGs and images are present, verified, and load with HTTP 200 (zero 404s).
   - Removed all temporary diff, crop, and comparison artifacts for a lean, clean production repository.

---

## 💡 Assumptions Made

1. **Mobile / Tablet Viewport Adaptations**:
   - The Figma prototype focuses primarily on the 1440px desktop frame. For smaller viewports (Tablets and Smartphones), standard responsive UX patterns were adopted:
     - Converting the desktop 2D winding circuit track into a clean, legible vertical timeline on mobile while retaining the green circuit aesthetic and year milestones.
     - Presenting the year milestone bullet points as accessible bottom-sheet modals on touch devices rather than hover-only popups.
2. **Interactive Elements**:
   - Dropdown chevrons in the navigation bar were equipped with accessible toggle states (`aria-expanded`).
   - The Founders photo card in "How did MG start" cycles through community photos via a lightweight, non-blocking interval.
3. **Typography**:
   - Utilized Google Fonts (`Outfit` and `Parkinsans`) specified in the design tokens for authentic typography rendering across all operating systems.

---

## 🚀 Running Locally

To run locally without a build step:
```bash
# Using Python built-in server
python -m http.server 3000

# Or using Node.js npx serve
npx -y serve -p 3000 .
```
Then visit `http://localhost:3000` in your web browser.
