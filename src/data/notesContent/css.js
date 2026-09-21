export const cssContent = {
  id: 'css',
  slug: 'css',
  title: 'CSS',
  subtitle: 'Complete Styling, Layout & Responsive Design Guide',
  category: 'Web Development',
  description:
    'Comprehensive CSS guide covering selectors, cascade, box model, positioning, Flexbox, Grid, responsive design, animations, transitions, variables, architecture, accessibility, and production best practices.',
  sections: [
    {
      id: 'introduction-to-css',
      title: '1. Introduction to CSS',
      summary:
        'Understand CSS basics, language purpose, syntax, and methods for applying styles to HTML documents.',
      content: [
        {
          type: 'paragraph',
          text: 'CSS (Cascading Style Sheets) is the language used to control the presentation and layout of HTML documents. CSS can define colors, typography, spacing, borders, positioning, responsive layouts, transitions, animations, and many other visual properties.',
        },
        {
          type: 'heading',
          text: 'Ways to Add CSS',
        },
        {
          type: 'code',
          language: 'css',
          code: `/* External CSS - recommended for most projects */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

/* Element selector */
p {
  line-height: 1.6;
}

/* Class selector */
.card {
  padding: 20px;
}

/* ID selector */
#header {
  background: black;
}`,
        },
        {
          type: 'table',
          headers: ['Method', 'Example', 'Typical Use'],
          rows: [
            ['Inline', '<p style="color: red">Text</p>', 'Small or exceptional cases'],
            ['Internal', '<style>...</style>', 'Single-page styles'],
            ['External', '<link rel="stylesheet" href="style.css">', 'Most production applications'],
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Recommended Approach',
          text: 'Use external stylesheets or an organized styling system for maintainability. Avoid large amounts of inline CSS in production applications.',
        },
      ],
    },

    {
      id: 'css-selectors',
      title: '2. CSS Selectors',
      summary:
        'Target HTML elements using element, class, ID, attribute, combinator, pseudo-classes, and pseudo-elements.',
      content: [
        {
          type: 'paragraph',
          text: 'Selectors determine which HTML elements a CSS rule targets. Understanding basic selectors, combinators, pseudo-classes, and pseudo-elements is essential for writing precise, modern, and maintainable styles.',
        },
        {
          type: 'subheading',
          text: 'Basic Selectors & Combinators',
        },
        {
          type: 'code',
          language: 'css',
          code: `/* Basic Selectors */
p { color: #333; }                  /* Element / Type */
.card { padding: 20px; }            /* Class */
#main-header { height: 70px; }       /* ID */
input[type="email"] { border: 1px solid #ccc; } /* Attribute */

/* Combinators */
.card p { margin-bottom: 10px; }    /* Descendant */
.card > p { color: blue; }          /* Direct Child */
h2 + p { margin-top: 0; }           /* Adjacent Sibling */
h2 ~ p { color: #555; }             /* General Sibling */
h1, h2, h3 { line-height: 1.2; }   /* Selector Grouping */`,
        },
        {
          type: 'table',
          headers: ['Selector', 'Type / Combinator', 'Meaning'],
          rows: [
            ['p', 'Element / Type', 'Matches all <p> elements'],
            ['.card', 'Class', 'Matches elements with class="card"'],
            ['#header', 'ID', 'Matches element with id="header"'],
            ['[type="text"]', 'Attribute', 'Matches elements with attribute type="text"'],
            ['div p', 'Descendant', 'Matches <p> anywhere inside a <div>'],
            ['div > p', 'Child', 'Matches <p> that is a direct child of <div>'],
            ['h2 + p', 'Adjacent Sibling', 'Matches <p> immediately following <h2>'],
            ['h2 ~ p', 'General Sibling', 'Matches all <p> siblings after <h2>'],
            ['*', 'Universal', 'Matches all elements'],
          ],
        },
        {
          type: 'subheading',
          text: 'CSS Pseudo-Classes (:)',
        },
        {
          type: 'paragraph',
          text: 'A pseudo-class is specified with a single colon (:) and targets elements based on a dynamic state, user interaction, DOM position, or condition.',
        },
        {
          type: 'code',
          language: 'css',
          code: `/* 1. User Action & Interaction States */
button:hover { opacity: 0.8; }
a:visited { color: #6b21a8; }
button:active { transform: scale(0.98); }
input:focus { outline: 2px solid #3b82f6; }
button:focus-visible { outline: 2px solid #2563eb; } /* Keyboard focus only */
.card:focus-within { border-color: #2563eb; }     /* Focus on card or descendant */

/* 2. Structural & Position Pseudo-Classes */
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
tr:nth-child(even) { background-color: #f9fafb; }
tr:nth-child(3n+1) { background-color: #eff6ff; }
p:nth-of-type(2) { color: #1e40af; }
div:only-child { padding: 0; }
div:empty { display: none; }                        /* Matches elements with no children/text */

/* 3. Form & Input State Pseudo-Classes */
input:disabled { background-color: #e5e7eb; cursor: not-allowed; }
input:checked + label { color: #2563eb; font-weight: 600; }
input:required { border-left: 3px solid #ef4444; }
input:valid { border-color: #10b981; }
input:invalid { border-color: #ef4444; }
input:placeholder-shown { border-style: dashed; }

/* 4. Modern & Functional Pseudo-Classes */
/* :is() - groups selectors, takes highest specificity inside */
:is(header, footer, main) p { line-height: 1.6; }

/* :where() - groups selectors with 0 specificity */
:where(h1, h2, h3) a { text-decoration: none; }

/* :has() - parent / relational selector */
.card:has(img) { grid-template-columns: 1fr 2fr; }
form:has(input:invalid) button[type="submit"] { opacity: 0.5; }

/* :not() - negation pseudo-class */
button:not(:disabled):hover { background-color: #1d4ed8; }

/* :target - element matching current URL hash identifier */
section:target { highlight: yellow; animation: flash 1s; }`,
        },
        {
          type: 'table',
          headers: ['Pseudo-Class', 'Category', 'Description'],
          rows: [
            [':hover', 'User Action', 'Applies when mouse hovers over element'],
            [':focus', 'User Action', 'Applies when element receives focus'],
            [':focus-visible', 'User Action', 'Applies focus indicator for keyboard navigation'],
            [':focus-within', 'User Action', 'Applies when element or any descendant has focus'],
            [':active', 'User Action', 'Applies while element is being activated/clicked'],
            [':first-child', 'Structural', 'Targets element if it is the first child of its parent'],
            [':last-child', 'Structural', 'Targets element if it is the last child of its parent'],
            [':nth-child(n)', 'Structural', 'Targets element based on formula or index among siblings'],
            [':nth-of-type(n)', 'Structural', 'Targets element based on index among siblings of same type'],
            [':empty', 'Structural', 'Targets element with zero children (nodes/text)'],
            [':disabled', 'Form State', 'Targets disabled form elements'],
            [':checked', 'Form State', 'Targets checked checkboxes or radio buttons'],
            [':required / :optional', 'Form State', 'Targets form inputs with required or optional attribute'],
            [':valid / :invalid', 'Form State', 'Targets inputs matching validation constraints'],
            [':is(...)', 'Functional', 'Matches any selector in list; uses highest specificity'],
            [':where(...)', 'Functional', 'Matches any selector in list; always 0 specificity'],
            [':has(...)', 'Relational', 'Parent selector: matches parent containing matching children'],
            [':not(...)', 'Negation', 'Matches elements that do not match given selector'],
            [':target', 'URL State', 'Targets element whose ID matches URL fragment identifier'],
          ],
        },
        {
          type: 'subheading',
          text: 'CSS Pseudo-Elements (::)',
        },
        {
          type: 'paragraph',
          text: 'A pseudo-element is specified with a double colon (::) and styles a specific sub-part of an element or inserts generated content into the document tree.',
        },
        {
          type: 'code',
          language: 'css',
          code: `/* 1. Generated Content */
.button::before {
  content: "★ ";
  color: gold;
}

.card::after {
  content: "";
  display: block;
  clear: both;
}

/* 2. Text & Typography Formatting */
p::first-letter {
  font-size: 2.5rem;
  font-weight: bold;
  float: left;
  line-height: 1;
  margin-right: 8px;
}

p::first-line {
  font-weight: 600;
  letter-spacing: 1px;
}

/* 3. Text Selection & UI Features */
::selection {
  background-color: #3b82f6;
  color: #ffffff;
}

input::placeholder {
  color: #9ca3af;
  font-style: italic;
}

li::marker {
  color: #2563eb;
  font-weight: bold;
}

dialog::backdrop {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
}

input::file-selector-button {
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
}`,
        },
        {
          type: 'table',
          headers: ['Pseudo-Element', 'Description', 'Common Use Case'],
          rows: [
            ['::before', 'Inserts virtual content before element content', 'Icons, decorative shapes, badges'],
            ['::after', 'Inserts virtual content after element content', 'Clearfix, tooltip arrows, underline effects'],
            ['::first-letter', 'Styles the first letter of a block element', 'Drop caps in typography'],
            ['::first-line', 'Styles the first formatted line of block element', 'Leading paragraph highlights'],
            ['::selection', 'Styles text highlighted/selected by user', 'Branded selection colors'],
            ['::placeholder', 'Styles hint text in <input> and <textarea>', 'Custom input placeholder styling'],
            ['::marker', 'Styles list item bullet points or numbers', 'Custom list marker colors/fonts'],
            ['::backdrop', 'Styles background overlay behind <dialog> or fullscreen', 'Modal overlay dark blur effect'],
            ['::file-selector-button', 'Styles button inside <input type="file">', 'Custom file upload button styling'],
          ],
        },
        {
          type: 'callout',
          text: 'Pseudo-Class (:) vs Pseudo-Element (::): A pseudo-class (e.g. :hover, :first-child) selects an entire element based on state or DOM position. A pseudo-element (e.g. ::before, ::first-line) selects a specific sub-part of an element or injects decorative content. Standard CSS3 uses single colon for pseudo-classes and double colon for pseudo-elements.',
        },
        {
          type: 'subheading',
          text: 'Selector Specificity Rules',
        },
      ],
    },

    {
      id: 'cascade-specificity-inheritance',
      title: '3. Cascade, Specificity & Inheritance',
      summary:
        'Master how CSS rules interact, specificity calculation, inheritance rules, and resolving style conflicts.',
      content: [
        {
          type: 'paragraph',
          text: 'CSS stands for Cascading Style Sheets because multiple rules can apply to the same element. The browser resolves conflicts using factors including origin and importance, cascade layers, specificity, and source order.',
        },
        {
          type: 'code',
          language: 'css',
          code: `p {
  color: blue;
}

.article p {
  color: green;
}

#content p {
  color: red;
}

/*
  If all rules have the same origin, importance, and layer,
  the selector with greater specificity generally wins.
*/`,
        },
        {
          type: 'heading',
          text: 'Specificity Concept',
        },
        {
          type: 'table',
          headers: ['Selector', 'Specificity Category'],
          rows: [
            ['*', 'Universal selector - very low specificity'],
            ['p', 'Type selector'],
            ['.card', 'Class selector'],
            ['[type="text"]', 'Attribute selector'],
            ['#header', 'ID selector'],
            ['style="..."', 'Inline style'],
            ['!important', 'Importance modifier; avoid unnecessary use'],
          ],
        },
        {
          type: 'heading',
          text: 'Inheritance Example',
        },
        {
          type: 'code',
          language: 'css',
          code: `body {
  font-family: Arial, sans-serif;
  color: #222;
}

.card {
  /* Child text can inherit color */
}

.card p {
  color: inherit;
}`,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Avoid Specificity Wars',
          text: 'Deeply nested selectors and excessive !important usage make CSS difficult to maintain. Prefer simple class-based selectors and predictable component styles.',
        },
      ],
    },

    {
      id: 'css-box-model',
      title: '4. CSS Box Model',
      summary:
        'Understand content, padding, border, margin, and how box-sizing affects layout calculations.',
      content: [
        {
          type: 'paragraph',
          text: 'Every element is represented as a box. The box model consists of content, padding, border, and margin. Understanding the box model is essential for predictable sizing and spacing.',
        },
        {
          type: 'code',
          language: 'css',
          code: `.card {
  width: 300px;
  padding: 20px;
  border: 2px solid #ddd;
  margin: 30px;
}`,
        },
        {
          type: 'heading',
          text: 'box-sizing',
        },
        {
          type: 'code',
          language: 'css',
          code: `*,
*::before,
*::after {
  box-sizing: border-box;
}

.card {
  width: 300px;
  padding: 20px;
  border: 2px solid #ddd;
}`,
        },
        {
          type: 'table',
          headers: ['Property', 'Purpose'],
          rows: [
            ['width', 'Controls content or border-box width depending on box-sizing'],
            ['height', 'Controls content or border-box height depending on box-sizing'],
            ['padding', 'Space between content and border'],
            ['border', 'Visible boundary around the box'],
            ['margin', 'Space outside the border'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Modern Default',
          text: 'Many projects use box-sizing: border-box globally because declared widths and heights then include padding and border, making layout calculations more intuitive.',
        },
      ],
    },

    {
      id: 'css-units-and-values',
      title: '5. CSS Units & Values',
      summary:
        'Compare absolute (px) vs relative (%, rem, em, vw, vh, dvh, fr, ch) units for flexible styling.',
      content: [
        {
          type: 'paragraph',
          text: 'CSS supports absolute and relative units. Choosing appropriate units improves responsive behavior and accessibility.',
        },
        {
          type: 'table',
          headers: ['Unit', 'Type', 'Common Use'],
          rows: [
            ['px', 'Absolute CSS pixel unit', 'Borders, precise UI values'],
            ['%', 'Relative', 'Container-based sizing'],
            ['rem', 'Relative to root font size', 'Typography and spacing'],
            ['em', 'Relative to current element font size', 'Component-relative sizing'],
            ['vw', 'Viewport width', 'Viewport-based sizing'],
            ['vh', 'Viewport height', 'Viewport-based sizing'],
            ['dvw', 'Dynamic viewport width', 'Mobile viewport-aware layouts'],
            ['dvh', 'Dynamic viewport height', 'Mobile viewport-aware heights'],
            ['ch', 'Character width approximation', 'Text measure'],
            ['fr', 'Grid fractional unit', 'CSS Grid columns/rows'],
          ],
        },
        {
          type: 'code',
          language: 'css',
          code: `html {
  font-size: 16px;
}

.title {
  font-size: 2rem;
}

.container {
  width: min(90%, 1200px);
}

.hero {
  min-height: 100dvh;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Responsive Tip',
          text: 'Use relative units where they make the layout more flexible. rem is commonly useful for scalable typography and spacing, while % and fr are useful for layouts.',
        },
      ],
    },

    {
      id: 'css-display-and-positioning',
      title: '6. Display & Positioning',
      summary:
        'Control element layout modes (block, inline, flex, grid) and positions (static, relative, absolute, fixed, sticky).',
      content: [
        {
          type: 'paragraph',
          text: 'The display property controls how an element participates in layout. Positioning properties control how an element is placed relative to normal flow, its containing block, or the viewport.',
        },
        {
          type: 'code',
          language: 'css',
          code: `.block {
  display: block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
}

.grid {
  display: grid;
}

.hidden {
  display: none;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
  top: 0;
  right: 0;
}

.fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.sticky {
  position: sticky;
  top: 0;
}`,
        },
        {
          type: 'table',
          headers: ['Position', 'Behavior'],
          rows: [
            ['static', 'Normal document flow'],
            ['relative', 'Remains in flow while allowing offset positioning and containing positioned descendants'],
            ['absolute', 'Removed from normal flow and positioned relative to an appropriate containing block'],
            ['fixed', 'Positioned relative to the viewport in typical cases'],
            ['sticky', 'Acts like relative until a scroll threshold is reached, then sticks within its containing context'],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Positioning Pitfall',
          text: 'Absolute positioning should not be the default strategy for building complete page layouts. Prefer Flexbox or Grid for major layout structures.',
        },
      ],
    },

    {
      id: 'css-flexbox',
      title: '7. Flexbox',
      summary:
        'Master one-dimensional layouts with flex container and flex item alignment properties.',
      content: [
        {
          type: 'paragraph',
          text: 'Flexbox is a one-dimensional layout system designed for arranging items along a row or column. It is especially useful for navigation bars, cards, toolbars, alignment, and component-level layouts.',
        },
        {
          type: 'code',
          language: 'css',
          code: `.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.item {
  flex: 1 1 250px;
}`,
        },
        {
          type: 'table',
          headers: ['Property', 'Purpose'],
          rows: [
            ['display: flex', 'Creates a flex container'],
            ['flex-direction', 'Controls main axis direction'],
            ['justify-content', 'Aligns items along the main axis'],
            ['align-items', 'Aligns items along the cross axis'],
            ['align-self', 'Overrides cross-axis alignment for one item'],
            ['gap', 'Controls spacing between flex items'],
            ['flex-wrap', 'Controls whether items wrap'],
            ['flex', 'Controls growth, shrink, and basis'],
          ],
        },
        {
          type: 'heading',
          text: 'Centering With Flexbox',
        },
        {
          type: 'code',
          language: 'css',
          code: `.center {
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Flexbox Rule',
          text: 'Think of Flexbox as a one-dimensional system: organize items primarily along one main axis while controlling alignment on the cross axis.',
        },
      ],
    },

    {
      id: 'css-grid',
      title: '8. CSS Grid',
      summary:
        'Build complex two-dimensional layouts using grid templates, tracks, areas, gap, and repeat/minmax auto-fit rules.',
      content: [
        {
          type: 'paragraph',
          text: 'CSS Grid is a two-dimensional layout system that allows you to control rows and columns simultaneously. It is useful for page layouts, dashboards, galleries, card grids, and complex responsive interfaces.',
        },
        {
          type: 'code',
          language: 'css',
          code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  padding: 24px;
}

.featured {
  grid-column: span 2;
}`,
        },
        {
          type: 'heading',
          text: 'Responsive Grid',
        },
        {
          type: 'code',
          language: 'css',
          code: `.products {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(240px, 1fr)
  );
  gap: 24px;
}`,
        },
        {
          type: 'table',
          headers: ['Property', 'Purpose'],
          rows: [
            ['grid-template-columns', 'Defines grid columns'],
            ['grid-template-rows', 'Defines grid rows'],
            ['grid-column', 'Controls column placement'],
            ['grid-row', 'Controls row placement'],
            ['gap', 'Sets spacing between tracks'],
            ['minmax()', 'Defines minimum and maximum track sizes'],
            ['repeat()', 'Repeats track definitions'],
            ['grid-area', 'Places an item using named or numbered grid areas'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Flexbox vs Grid',
          text: 'Use Flexbox when the layout is primarily one-dimensional. Use Grid when you need coordinated rows and columns or a two-dimensional layout.',
        },
      ],
    },

    {
      id: 'css-responsive-design',
      title: '9. Responsive Design & Media Queries',
      summary:
        'Create adaptable interfaces using fluid layouts, viewport constraints, and mobile-first media query strategies.',
      content: [
        {
          type: 'paragraph',
          text: 'Responsive design allows a website to adapt to different viewport sizes and device capabilities. A modern responsive layout typically combines flexible sizing, fluid layouts, responsive images, and media or container queries where appropriate.',
        },
        {
          type: 'code',
          language: 'css',
          code: `.container {
  width: min(92%, 1200px);
  margin-inline: auto;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 900px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .cards {
    grid-template-columns: 1fr;
  }
}`,
        },
        {
          type: 'heading',
          text: 'Mobile-First Approach',
        },
        {
          type: 'code',
          language: 'css',
          code: `.hero {
  padding: 40px 20px;
  font-size: 1.8rem;
}

@media (min-width: 768px) {
  .hero {
    padding: 80px 40px;
    font-size: 3rem;
  }
}`,
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Start with a usable layout for smaller screens when a mobile-first approach fits the project.',
            'Use flexible widths instead of fixed desktop-only dimensions.',
            'Test real content at different viewport sizes.',
            'Do not target only specific device names; choose breakpoints based on where the layout needs to change.',
            'Ensure navigation, buttons, forms, and text remain usable on smaller screens.',
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Responsive Principle',
          text: 'A responsive website should adapt to the content and available space rather than being designed only for a fixed list of device sizes.',
        },
      ],
    },

    {
      id: 'css-typography',
      title: '10. CSS Typography',
      summary:
        'Format web text using font stacks, line heights, letter spacing, fluid clamp() typography, and readability metrics.',
      content: [
        {
          type: 'paragraph',
          text: 'Typography affects readability, hierarchy, branding, and accessibility. CSS provides control over font families, sizes, weights, line heights, letter spacing, alignment, and text wrapping.',
        },
        {
          type: 'code',
          language: 'css',
          code: `body {
  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  font-size: 1rem;
  line-height: 1.6;
  color: #222;
}

h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

p {
  max-width: 65ch;
}`,
        },
        {
          type: 'table',
          headers: ['Property', 'Purpose'],
          rows: [
            ['font-family', 'Font stack'],
            ['font-size', 'Text size'],
            ['font-weight', 'Text thickness'],
            ['line-height', 'Vertical spacing between lines'],
            ['letter-spacing', 'Spacing between characters'],
            ['text-align', 'Horizontal text alignment'],
            ['text-decoration', 'Decorations such as underline'],
            ['text-transform', 'Uppercase/lowercase transformations'],
            ['white-space', 'Controls whitespace and wrapping'],
            ['text-overflow', 'Controls overflow presentation'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Readable Text',
          text: 'Use appropriate line height and text width. Extremely long lines can reduce readability, while overly narrow text can create unnecessary scrolling.',
        },
      ],
    },

    {
      id: 'css-colors-backgrounds',
      title: '11. Colors, Backgrounds & Gradients',
      summary:
        'Apply color spaces (hex, rgb, hsl, oklch), linear/radial gradients, background images, and contrast checks.',
      content: [
        {
          type: 'paragraph',
          text: 'CSS supports several color formats and provides background properties for colors, images, gradients, positioning, sizing, and repetition.',
        },
        {
          type: 'code',
          language: 'css',
          code: `.card {
  color: #1f2937;
  background-color: #ffffff;
}

.hero {
  background:
    linear-gradient(
      135deg,
      #111827,
      #2563eb
    );
}

.banner {
  background-image: url("/images/banner.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}`,
        },
        {
          type: 'heading',
          text: 'Modern Color Functions',
        },
        {
          type: 'code',
          language: 'css',
          code: `:root {
  --primary: rgb(37 99 235);
  --surface: hsl(210 40% 98%);
  --text: oklch(25% 0.02 260);
}

.button {
  background: var(--primary);
  color: white;
}`,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Accessibility',
          text: 'Do not rely on color alone to communicate meaning. Also verify text and UI contrast and provide other visual or textual indicators where needed.',
        },
      ],
    },

    {
      id: 'css-transitions-animations',
      title: '12. Transitions & Animations',
      summary:
        'Animate property changes with transitions, create keyframe sequences, and respect prefers-reduced-motion.',
      content: [
        {
          type: 'paragraph',
          text: 'CSS transitions smoothly interpolate changes between states. CSS animations can define multi-step sequences using keyframes.',
        },
        {
          type: 'code',
          language: 'css',
          code: `.button {
  background: #2563eb;
  transform: translateY(0);
  transition:
    background-color 200ms ease,
    transform 200ms ease;
}

.button:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeIn 400ms ease both;
}`,
        },
        {
          type: 'heading',
          text: 'Respect Reduced Motion',
        },
        {
          type: 'code',
          language: 'css',
          code: `@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Animation Principle',
          text: 'Animations should communicate state or improve understanding rather than distract users. Always consider users who prefer reduced motion.',
        },
      ],
    },

    {
      id: 'css-custom-properties',
      title: '13. CSS Variables & Theming',
      summary:
        'Define design tokens with CSS custom properties (--var) for dynamic light/dark theming and maintainable styles.',
      content: [
        {
          type: 'paragraph',
          text: 'CSS custom properties allow reusable values to be defined and referenced throughout stylesheets. They are useful for design tokens, themes, spacing systems, colors, typography, and component customization.',
        },
        {
          type: 'code',
          language: 'css',
          code: `:root {
  --color-primary: #2563eb;
  --color-text: #111827;
  --color-surface: #ffffff;

  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;

  --radius-md: 12px;
}

.card {
  color: var(--color-text);
  background: var(--color-surface);
  padding: var(--space-lg);
  border-radius: var(--radius-md);
}

.button {
  background: var(--color-primary);
}`,
        },
        {
          type: 'heading',
          text: 'Dark Theme Example',
        },
        {
          type: 'code',
          language: 'css',
          code: `[data-theme="dark"] {
  --color-text: #f9fafb;
  --color-surface: #111827;
}

body {
  color: var(--color-text);
  background: var(--color-surface);
}`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Design Tokens',
          text: 'Centralizing repeated design values makes large interfaces easier to maintain and helps keep components visually consistent.',
        },
      ],
    },

    {
      id: 'css-best-practices',
      title: '14. CSS Best Practices',
      summary:
        'Write production-grade, predictable, scalable, and maintainable styles for modern web applications.',
      content: [
        {
          type: 'paragraph',
          text: 'Production CSS should be predictable, maintainable, responsive, accessible, and organized around reusable patterns rather than one-off overrides.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Use meaningful class names.',
            'Keep selectors reasonably simple.',
            'Avoid excessive nesting.',
            'Avoid unnecessary !important.',
            'Use CSS custom properties for repeated design values.',
            'Prefer Flexbox and Grid for layout.',
            'Use responsive units where appropriate.',
            'Keep interactive states visible.',
            'Respect prefers-reduced-motion.',
            'Optimize large background images and assets.',
            'Remove unused CSS when practical.',
            'Organize styles consistently across the project.',
            'Test layouts at different viewport sizes.',
            'Check text and interface contrast.',
            'Avoid relying on CSS hacks when a standard layout feature is available.',
          ],
        },
        {
          type: 'code',
          language: 'css',
          code: `/* Simple production-oriented structure */

:root {
  --primary: #2563eb;
  --text: #111827;
  --surface: #ffffff;
  --border: #e5e7eb;
  --radius: 12px;
}

.container {
  width: min(92%, 1200px);
  margin-inline: auto;
}

.card {
  padding: 24px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.card-title {
  margin: 0 0 8px;
  color: var(--text);
}

.card-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  border: 0;
  border-radius: 8px;
  background: var(--primary);
  color: white;
  cursor: pointer;
}

.card-button:focus-visible {
  outline: 3px solid currentColor;
  outline-offset: 3px;
}`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Production Rule',
          text: 'Good CSS is not just visually attractive. It should remain understandable and predictable when the application grows, content changes, and new developers work on the codebase.',
        },
      ],
    },

    {
      id: 'css-interview-questions',
      title: '15. CSS Interview Questions',
      summary:
        'Frequently asked CSS technical interview questions covering specificity, layout systems, responsiveness, variables, and performance.',
      content: [
        {
          type: 'faq',
          items: [
            {
              question: 'What is CSS?',
              answer:
                'CSS stands for Cascading Style Sheets and is used to control the presentation, styling, and layout of HTML content.',
            },
            {
              question: 'What is the CSS box model?',
              answer:
                'The box model describes an element as content surrounded by padding, border, and margin.',
            },
            {
              question: 'What is box-sizing: border-box?',
              answer:
                'It causes the declared width and height to include the element’s padding and border rather than applying those dimensions only to the content box.',
            },
            {
              question: 'What is specificity?',
              answer:
                'Specificity is part of the CSS cascade used to determine which competing selector rule has greater precedence when other relevant cascade factors are equal.',
            },
            {
              question: 'What is the difference between class and id selectors?',
              answer:
                'A class selector is designed to be reusable across multiple elements, while an id identifies a specific element and is normally unique within a document.',
            },
            {
              question: 'What is Flexbox?',
              answer:
                'Flexbox is a one-dimensional CSS layout system for arranging and aligning items along a main axis and cross axis.',
            },
            {
              question: 'What is CSS Grid?',
              answer:
                'CSS Grid is a two-dimensional layout system that controls rows and columns.',
            },
            {
              question: 'When should you use Flexbox instead of Grid?',
              answer:
                'Flexbox is generally useful for one-dimensional component layouts, while Grid is particularly useful when rows and columns need to be coordinated.',
            },
            {
              question: 'What is responsive web design?',
              answer:
                'Responsive web design creates layouts that adapt to different viewport sizes and device conditions using flexible layouts, responsive assets, and appropriate CSS features.',
            },
            {
              question: 'What are media queries?',
              answer:
                'Media queries apply CSS rules conditionally based on characteristics such as viewport dimensions or user preferences.',
            },
            {
              question: 'What is the difference between relative and absolute positioning?',
              answer:
                'Relative positioning keeps the element in normal flow while allowing offsets, whereas absolute positioning removes the element from normal flow and positions it relative to an appropriate containing block.',
            },
            {
              question: 'What is z-index?',
              answer:
                'z-index influences the stacking order of positioned or stacking-context elements where applicable.',
            },
            {
              question: 'What are CSS pseudo-classes?',
              answer:
                'Pseudo-classes target elements based on a state or condition, such as :hover, :focus, :checked, or :first-child.',
            },
            {
              question: 'What are pseudo-elements?',
              answer:
                'Pseudo-elements represent specific parts of an element or generated content, such as ::before, ::after, ::first-letter, and ::selection.',
            },
            {
              question: 'What are CSS custom properties?',
              answer:
                'CSS custom properties are reusable author-defined values, commonly called CSS variables, that can be referenced using the var() function.',
            },
            {
              question: 'What is the difference between em and rem?',
              answer:
                'rem is relative to the root element’s font size, while em is relative to the relevant element’s font size and can therefore compound through nested elements.',
            },
            {
              question: 'What is the difference between display: none and visibility: hidden?',
              answer:
                'display: none removes the element from the layout, while visibility: hidden generally preserves its layout space while hiding it.',
            },
            {
              question: 'What is a CSS transition?',
              answer:
                'A transition smoothly interpolates changes in specified CSS properties between states.',
            },
            {
              question: 'What is a CSS animation?',
              answer:
                'A CSS animation uses keyframes and animation properties to define a sequence of style changes over time.',
            },
            {
              question: 'Why should !important be avoided?',
              answer:
                'Excessive !important makes the cascade harder to reason about and can lead to specificity conflicts and difficult maintenance.',
            },
          ],
        },
      ],
    },
  ],
};

export default cssContent;
