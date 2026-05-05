# HS Construction Website Maintenance Guide

This document provides simple instructions on how to update and maintain the HS Construction website. Use this as a reference when the client requests changes.

---

## 1. Global Components (Header & Footer)
**Important:** Every page has its own copy of the header and footer. If you change something (like a phone number), you must update it on **all 5 pages**: `index.html`, `services.html`, `projects.html`, `about.html`, and `contact.html`.

### Updating the Navigation
Find the `<nav class="nav-links">` block. To add a new page:
1. Copy an existing link: `<a href="new-page.html">New Page</a>`.
2. Ensure the `active` class is moved to the link representing the current page.

### Updating Contact Info (Phone/WhatsApp)
*   **Phone**: Search for `tel:+916364927700` and replace the number.
*   **WhatsApp**: Search for `https://wa.me/916364927700` and replace the number.
*   **Floating Buttons**: They are at the very bottom of each file under the comment `<!-- FLOATING FIXED BUTTONS -->`.

---

## 2. Page-Specific Edits

### `index.html` (Homepage)
*   **Hero Section**: Change the `<h1>` for big headlines.
*   **Featured Projects**: To add more, copy the `<div class="project-card">` blocks.
*   **Estimate Section**: This links to `#estimate`. The logic for the calculator is in `script.js`.

### `services.html` (Services)
*   **Service Cards**: Find `<div class="card" style="padding: 32px;">`. You can change the starting price or descriptions here.
*   **Bento Portfolio**: This is an asymmetric grid. 
    *   Use `bento-item-lg` for large horizontal images.
    *   Use `bento-item-tall` for vertical images.
*   **Pricing Table**: The "Signature Series" has the `signature` class which makes it stand out.
*   **FAQ (Accordions)**: Add new questions by copying the `<div class="accordion-item">` block.

### `projects.html` (Portfolio)
*   **Project Cards**: Copy the `<div class="project-card">` block. 
*   **Stats**: Update the Area (SQFT), Time (MO.), and Grade (A++) inside the card.
*   **Filtering**: The tabs at the top are currently static. If you want them to work, you need to add "category" classes to the cards and update `script.js`.

### `about.html` (Company Story)
*   **Milestone Journey**: To add a year, copy a timeline block. 
    *   The first one is right-aligned.
    *   The second has `flex-direction: row-reverse;` (left-aligned).
    *   Keep alternating them to maintain the zig-zag look.
*   **Team Members**: Copy the team `<img>` and `<h4>` blocks. Use grayscale filter `filter: grayscale(100%);` on images for the professional look.

### `contact.html` (Inquiries)
*   **Contact Cards**: Large blocks for Phone, Email, and Location.
*   **Quote Form**: This is a standard HTML `<form>`. To make it send emails, you will need a backend service (like Formspree or a PHP script).

---

## 3. Design System (`style.css`)
We use a specific "Structural Narrative" design. Avoid using bright colors or heavy borders.
*   **Primary Blue**: `#003fb1` (used for buttons and highlights).
*   **Background Alt**: `#f8fafc` (used for section backgrounds to create a "no-line" separation).
*   **Typography**: 
    *   Headings: `Barlow Condensed` (Uppercase, Bold).
    *   Body: `Plus Jakarta Sans`.

---

## 4. Interactivity (`script.js`)
This file handles:
1.  **Mobile Menu**: Toggles the navigation on mobile.
2.  **Smooth Scroll**: Makes links slide smoothly to sections.
3.  **Accordion**: Opens/closes the FAQ items.
4.  **Calculator**: Calculates construction costs based on SQFT and Package selection.

---

## 5. Adding New Images
When adding images, use **Unsplash** for the best look. 
Example URL: `https://images.unsplash.com/photo-ID?w=1200&q=80`
*   `w=1200`: Sets the width.
*   `q=80`: Sets the quality (smaller file size).
*   `fit=crop`: Ensures it fills the container.
