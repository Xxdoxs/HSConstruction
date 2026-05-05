# Design System Document

## 1. Overview & Creative North Star: "The Structural Narrative"

This design system is built to reflect the architectural landscape of Bengaluru—a blend of rapid modernization and structural integrity. Moving away from the generic "template" look of modern SaaS, this system adopts an **Editorial Architectural** approach. 

The Creative North Star is **"The Structural Narrative."** We treat the screen not as a flat surface, but as a site of construction. We use intentional asymmetry, overlapping elements, and massive typographic anchors to guide the user through a premium, curated experience. Every element must feel "built," not just "placed." By leveraging high-contrast typography scales and generous white space, we communicate authority, trust, and high-end craftsmanship.

---

## 2. Colors

Our palette is anchored in technical precision and professional depth.

### Color Tokens & Roles
*   **Primary (The Foundation):** `primary` (#003fb1) and `primary_container` (#1A56DB). Used for primary actions and the signature blue gradient.
*   **Surface Hierarchy:**
    *   `surface` (#f9f9ff): The base canvas.
    *   `surface_container_low` (#f0f3ff): Used for secondary sectioning.
    *   `surface_container_lowest` (#ffffff): Used for floating cards and interactive elements.
*   **Accents:** `tertiary` (#005623) is reserved exclusively for the WhatsApp integration to maintain brand purity while ensuring functional recognition.

### The "No-Line" Rule
To maintain a premium, editorial feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through tonal shifts. For example, a project gallery section should transition from `surface` to `surface_container_low` to create a visual break without the "cheapness" of a structural line.

### Signature Textures
Main CTAs and Hero backgrounds should utilize a subtle linear gradient: 
*   **From:** `primary_container` (#1A56DB)
*   **To:** `primary` (#003fb1)
This provides a "soul" and visual depth that flat colors cannot achieve, mimicking the light reflecting off architectural glass.

---

## 3. Typography

The typography strategy relies on the contrast between the heavy, industrial weight of **Barlow Condensed** and the clean, approachable nature of **Barlow**.

*   **Display & Headlines (Barlow Condensed 900):** Use these to anchor the page. `display-lg` (3.5rem) should be used for Hero statements with tight leading to feel like a structural beam.
*   **Titles & Body (Barlow 400/600):** Use `body-lg` (1rem) for general descriptions. The 600 weight is reserved for sub-headers and emphasized text within cards.
*   **Editorial Spacing:** For `label-md` (used in section tags), apply `letter-spacing: 0.15em` and `text-transform: uppercase` to create a sophisticated, high-end "blueprint label" feel.

---

## 4. Elevation & Depth

We avoid the "flat" look by using **Tonal Layering** and **Ambient Shadows.**

### The Layering Principle
Depth is achieved by stacking surface tiers. A high-end project card (`surface_container_lowest`) should sit on a `surface_container_low` background. This creates a natural, soft lift.

### Ambient Shadows & "Ghost Borders"
*   **Standard Lift:** Use the specified blue shadow `0 4px 15px rgba(37,99,235,0.35)`.
*   **Ghost Borders:** For cards, use a `1.5px` border with `outline_variant` at 8% opacity (`rgba(37,99,235,0.08)`). This provides just enough definition for the eye without creating a visual cage.
*   **Glassmorphism:** For navigation overlays, use a semi-transparent `surface` color with a `backdrop-blur: 12px`. This integrates the UI into the photography behind it, making the experience feel layered and three-dimensional.

---

## 5. Components

### Buttons (The Interaction Points)
*   **Primary:** Blue gradient background, 20px radius. On hover, the button must `translateY(-3px)` with an increased shadow spread.
*   **Secondary:** Ghost style with the blue "Ghost Border."
*   **Floating CTAs:** 
    *   **WhatsApp:** `tertiary_container` (#25D366) anchored bottom-right.
    *   **Call:** `primary_container` (#1A56DB) anchored bottom-left. This button features a continuous `bounce` animation loop (2s duration) to draw the eye without being intrusive.

### Cards & Lists
*   **Construction Cards:** `20px` corner radius, `surface_container_lowest` background. 
*   **Interactions:** On hover, the "Ghost Border" transitions to a solid `primary` at 20% opacity, and the card lifts.
*   **No Dividers:** Lists within cards must use vertical spacing (8px/16px/24px scale) or a 10% opacity `surface_variant` background shift instead of divider lines.

### Section Tags
*   **Style:** Pill shape (`full` radius).
*   **Color:** `primary_fixed` background (#DBEAFE) with `primary` text.
*   **Typography:** Uppercase, spaced, `label-md`.

### Iconography
Icons must be "Construction-Core." Use a consistent line-weight (1.5px) to match the ghost borders. 
*   **Villas:** Minimalist rooflines.
*   **Blueprints:** Geometric grid patterns.
*   **Tools:** Clean, abstract silhouettes of cranes and levels.

---

## 6. Do's and Don'ts

### Do
*   **Embrace Asymmetry:** Place a large heading on the left and a staggered card array on the right.
*   **Use Staggered Animations:** When a section enters the viewport, use `fadeUp`. Stagger child elements (cards, icons) with a `0.1s` delay to create a "building" effect.
*   **Prioritize White Space:** If a layout feels "busy," increase the padding to the next tier in the scale.

### Don't
*   **No Pure Black:** Never use #000000. Use `on_surface` (#151c27) for text to maintain a premium navy undertone.
*   **No Sharp Corners:** Construction is about precision, but high-end design is about comfort. Always use the `xl` (1.5rem/20px) radius for containers.
*   **No Clutter:** If an icon or decorative element doesn't serve a structural or navigational purpose, remove it.