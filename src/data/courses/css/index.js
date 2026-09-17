// CSS course — data-driven content consumed by Course/Topic pages.

export const cssCourse = {
  id: 'css',
  title: 'CSS',
  tagline: 'Style, layout, and design the web.',
  description:
    'Learn how CSS works — from syntax and selectors through the box model, layout, and common visual properties — with runnable examples for every concept.',
  level: 'Beginner → Advanced',
  icon: 'Paintbrush',
  accent: 'pink',
  chapters: [
    {
      id: 'css-fundamentals',
      title: 'CSS Fundamentals',
      topics: [
        {
          id: 'introduction-to-css',
          title: 'Introduction to CSS',
          summary: 'What CSS is, why it exists, and how it works with HTML.',
          content: [
            { type: 'paragraph', text: 'CSS stands for Cascading Style Sheets. It is a style sheet language used to describe how HTML elements should be displayed — on screen, on paper, or in other media.' },
            { type: 'heading', text: 'Why CSS?' },
            { type: 'list', ordered: false, items: [
              'Separates content from presentation — HTML handles structure, CSS handles design.',
              'Makes web pages more attractive and user-friendly.',
              'Saves time and increases consistency across many pages.',
              'Keeps large sites easy to maintain from one shared stylesheet.',
            ]},
            { type: 'heading', text: 'How CSS works' },
            { type: 'paragraph', text: 'HTML provides structure, CSS provides style, and together they produce the final page a user sees in the browser.' },
            { type: 'keypoints', items: [
              'CSS works together with HTML.',
              'CSS is case-sensitive for most values, but property names are not case-sensitive.',
              'CSS files use the .css extension.',
              'Rules are read from top to bottom, and later rules can override earlier ones.',
            ]},
          ],
        },
        {
          id: 'css-syntax',
          title: 'CSS Syntax',
          summary: 'Selectors, declaration blocks, properties, and values.',
          content: [
            { type: 'paragraph', text: 'A CSS rule-set consists of a selector and a declaration block. The selector chooses which HTML element(s) to style; the declaration block contains one or more property/value pairs.' },
            { type: 'code', language: 'css', title: 'Anatomy of a rule', code: `h1 {\n  color: blue;\n  font-size: 24px;\n}\n/* h1            -> selector\n   color: blue;  -> declaration (property: value) */` },
            { type: 'list', ordered: true, items: [
              'Selector — selects the HTML element to style.',
              'Declaration block — wrapped in curly braces, holds one or more declarations.',
              'Property — the style feature you want to change (e.g. color).',
              'Value — the value assigned to that property (e.g. blue).',
            ]},
            { type: 'callout', variant: 'note', text: 'Every declaration ends with a semicolon, and a rule-set must always start with a selector.' },
          ],
        },
        {
          id: 'ways-to-add-css',
          title: 'Ways to Add CSS',
          summary: 'Inline, internal, and external CSS — and when to use each.',
          content: [
            { type: 'paragraph', text: 'There are three ways to add CSS to an HTML page.' },
            { type: 'heading', text: '1. Inline CSS' },
            { type: 'paragraph', text: 'Applied directly on an element using the style attribute. Affects only that one element.' },
            { type: 'code', language: 'html', code: `<h1 style="color: red; font-size: 24px;">Hello CSS</h1>` },
            { type: 'heading', text: '2. Internal CSS' },
            { type: 'paragraph', text: 'Written inside a <style> tag in the document\'s <head>. Affects the whole page it\'s written on.' },
            { type: 'code', language: 'html', code: `<head>\n  <style>\n    h1 { color: blue; font-size: 24px; }\n  </style>\n</head>\n<body>\n  <h1>Hello CSS</h1>\n</body>` },
            { type: 'heading', text: '3. External CSS' },
            { type: 'paragraph', text: 'Written in a separate .css file and linked with a <link> tag. Can be reused across many pages.' },
            { type: 'code', language: 'html', code: `<!-- index.html -->\n<link rel="stylesheet" href="style.css">\n\n/* style.css */\nh1 { color: purple; font-size: 24px; }` },
            { type: 'callout', variant: 'tip', title: 'Best practice', text: 'External CSS is generally preferred — it keeps HTML clean and makes styles reusable and easy to maintain.' },
          ],
        },
        {
          id: 'css-selectors',
          title: 'CSS Selectors & Combinators',
          summary: 'Type, class, ID, universal, adjacent (+), and general (~) sibling selectors.',
          content: [
            { type: 'paragraph', text: 'CSS selectors are used to "select" HTML elements to style, based on their tag, class, ID, attributes, or sibling relationships.' },
            { type: 'heading', text: 'Basic Selectors' },
            { type: 'table', headers: ['Selector', 'Selects', 'Example'], rows: [
              ['Type', 'All elements of a given tag', 'p { color: blue; }'],
              ['Class ( . )', 'Elements with a specific class', '.box { color: white; }'],
              ['ID ( # )', 'The one element with a specific id', '#main { font-weight: bold; }'],
              ['Universal ( * )', 'Every element on the page', '* { margin: 0; padding: 0; }'],
            ]},
            { type: 'heading', text: 'Sibling Selectors (Combinators)' },
            { type: 'table', headers: ['Selector', 'Name', 'Description', 'Example'], rows: [
              ['A + B', 'Adjacent Sibling (+)', 'Selects element B ONLY if it immediately follows element A.', 'h2 + p { margin-top: 0; }'],
              ['A ~ B', 'General Sibling (~)', 'Selects ALL elements B that follow element A under the same parent.', 'h2 ~ p { color: gray; }'],
            ]},
            { type: 'code', language: 'css', title: 'Adjacent Sibling Selector (+)', code: `/* Styles ONLY the <p> that immediately follows <h2> */\nh2 + p {\n  font-weight: bold;\n  color: #2563eb;\n}` },
            { type: 'code', language: 'css', title: 'General Sibling Selector (~)', code: `/* Styles ALL <p> elements that follow <h2> under the same parent */\nh2 ~ p {\n  line-height: 1.6;\n  color: #374151;\n}` },
            { type: 'callout', variant: 'tip', title: 'Key Difference (+ vs ~)', text: 'Use + when targeting strictly the next immediate sibling. Use ~ when targeting all subsequent siblings at the same parent level.' },
            { type: 'callout', variant: 'note', text: 'An ID must be unique on a page; a class can be reused on many elements. Prefer classes for groups of elements, and reserve the universal selector for resets.' },
          ],
        },
      ],
    },
    {
      id: 'css-layout-styling',
      title: 'Layout & Styling',
      topics: [
        {
          id: 'css-properties',
          title: 'CSS Properties',
          summary: 'Core properties for color, text, fonts, backgrounds, and more.',
          content: [
            { type: 'paragraph', text: 'CSS properties control the layout, colors, fonts, spacing, and appearance of HTML elements.' },
            { type: 'table', headers: ['Property', 'Purpose', 'Example'], rows: [
              ['color', 'Sets the text color', 'h1 { color: blue; }'],
              ['font-size', 'Sets the size of the text', 'p { font-size: 20px; }'],
              ['font-family', 'Sets the font used for text', "p { font-family: Arial, sans-serif; }"],
              ['background-color', 'Sets the background color', 'div { background-color: yellow; }'],
              ['text-align', 'Aligns text horizontally', 'p { text-align: center; }'],
            ]},
          ],
        },
        {
          id: 'box-model',
          title: 'The CSS Box Model',
          summary: 'Every element is a box made of content, padding, border, and margin.',
          content: [
            { type: 'paragraph', text: 'Every HTML element is treated as a rectangular box in CSS. That box is made up of four layers, from the inside out.' },
            { type: 'list', ordered: false, items: [
              'Content — the actual text or image inside the element.',
              'Padding — space between the content and the border.',
              'Border — a line that wraps the padding (and content).',
              'Margin — space outside the border, separating the box from its neighbours.',
            ]},
            { type: 'code', language: 'css', title: 'Example box', code: `div {\n  width: 300px;\n  padding: 20px;\n  border: 5px solid blue;\n  margin: 30px;\n}\n/* total width = margin + border + padding + content width */` },
            { type: 'heading', text: 'box-sizing' },
            { type: 'table', headers: ['Value', 'Behaviour'], rows: [
              ['content-box (default)', 'Width/height apply only to the content area; padding and border add to the total size.'],
              ['border-box (recommended)', 'Width/height include content, padding, and border — the total size stays as given.'],
            ]},
            { type: 'callout', variant: 'tip', text: 'Most teams set * { box-sizing: border-box; } globally so sizes are predictable.' },
          ],
        },
        {
          id: 'display-property',
          title: 'Display Property',
          summary: 'block, inline, inline-block, none, and flex.',
          content: [
            { type: 'paragraph', text: 'The display property specifies how an element is displayed on the page.' },
            { type: 'table', headers: ['Value', 'Starts new line?', 'Width/height settable?', 'Notes'], rows: [
              ['block', 'Yes', 'Yes', 'Takes the full available width (div, h1–h6, p, form...).'],
              ['inline', 'No', 'No', 'Only takes the width of its content (span, a, img...).'],
              ['inline-block', 'No', 'Yes', 'Flows inline but width/height/margin can be set — great for buttons.'],
              ['none', '—', '—', 'Hides the element completely; it takes up no space.'],
              ['flex', 'Yes (as a container)', 'Yes', 'Enables flexbox layout for aligning and distributing children.'],
            ]},
            { type: 'code', language: 'css', code: `.box { display: inline-block; width: 100px; height: 60px; }` },
          ],
        },
      ],
    },
    {
      id: 'css-visual-effects',
      title: 'Positioning & Visual Detail',
      topics: [
        {
          id: 'position-property',
          title: 'Position Property',
          summary: 'static, relative, absolute, fixed, and sticky.',
          content: [
            { type: 'paragraph', text: 'The position property specifies the positioning method used for an element, and controls how top/right/bottom/left behave.' },
            { type: 'table', headers: ['Value', 'Relative to', 'Leaves a gap?', 'Typical use'], rows: [
              ['static (default)', 'Normal document flow', 'Yes', 'Default positioning for most elements.'],
              ['relative', 'Its own normal position', 'Yes', 'Small nudges, or as an anchor for absolute children.'],
              ['absolute', 'Nearest positioned ancestor', 'No', 'Overlapping elements, tooltips, badges.'],
              ['fixed', 'The browser viewport', 'No', 'Headers or buttons that stay put while scrolling.'],
              ['sticky', 'Scroll position (hybrid)', 'Yes (until stuck)', 'Sticky headers, section menus.'],
            ]},
            { type: 'callout', variant: 'tip', text: 'A common pattern: set position: relative on a parent, then position: absolute on a child to position it precisely inside that parent.' },
          ],
        },
        {
          id: 'background',
          title: 'CSS Background',
          summary: 'Background color, images, repeat, position, size, and attachment.',
          content: [
            { type: 'paragraph', text: 'Background properties add background color, image, repeat behaviour, position, and size to an element.' },
            { type: 'table', headers: ['Property', 'Purpose'], rows: [
              ['background-color', 'Sets the background color.'],
              ['background-image', "Sets an image as the element's background."],
              ['background-repeat', 'Controls whether/how the image repeats (repeat, repeat-x, no-repeat).'],
              ['background-position', 'Sets the starting position of the image.'],
              ['background-size', 'Sets the size of the image (cover fills the area, may crop).'],
              ['background-attachment', 'Whether the background scrolls with the page or stays fixed.'],
            ]},
            { type: 'code', language: 'css', title: 'Shorthand', code: `.box {\n  background: #f0f8ff url('pattern.png') no-repeat center / cover fixed;\n}` },
          ],
        },
        {
          id: 'border',
          title: 'CSS Border',
          summary: 'Border width, style, color, radius, and per-side borders.',
          content: [
            { type: 'paragraph', text: 'Borders define the edge (boundary) of an element.' },
            { type: 'table', headers: ['Property', 'Purpose', 'Example'], rows: [
              ['border', 'Shorthand for width, style, and color', 'border: 2px solid blue;'],
              ['border-width', 'Sets the thickness', 'border-width: 5px;'],
              ['border-style', 'solid, dashed, dotted, double, groove, ridge, none', 'border-style: dashed;'],
              ['border-color', 'Sets the color', 'border-color: #ff5722;'],
              ['border-radius', 'Rounds the corners', 'border-radius: 15px;'],
            ]},
            { type: 'callout', variant: 'note', text: 'You can also target a single side: border-top, border-right, border-bottom, border-left — each accepting its own width/style/color.' },
          ],
        },
        {
          id: 'width-height-margin',
          title: 'Width, Height & Margin',
          summary: 'Sizing an element and spacing it from its neighbours.',
          content: [
            { type: 'paragraph', text: 'width and height set the size of an element\'s content box; margin creates space outside its border.' },
            { type: 'table', headers: ['Property', 'Purpose'], rows: [
              ['width / height', 'Sets the size of the element.'],
              ['max-width / min-width', 'Constrains how large or small the element can get.'],
              ['margin', 'Shorthand to set space on all four sides.'],
              ['margin-top / right / bottom / left', 'Sets margin on one side only.'],
            ]},
            { type: 'code', language: 'css', title: 'Centering with auto margins', code: `.box {\n  width: 300px;\n  margin: 20px auto; /* auto left/right centers a block element */\n}` },
          ],
        },
        {
          id: 'padding',
          title: 'CSS Padding',
          summary: 'Creating space inside an element, between content and border.',
          content: [
            { type: 'paragraph', text: 'Padding is used to create space inside the border of an element — content never touches the border directly when padding is applied.' },
            { type: 'table', headers: ['Property', 'Purpose'], rows: [
              ['padding', 'Shorthand — equal padding on all four sides.'],
              ['padding-top / right / bottom / left', 'Sets padding on one side only.'],
            ]},
            { type: 'code', language: 'css', title: 'Shorthand order (clockwise)', code: `padding: 20px;              /* all sides */\npadding: 10px 20px;         /* top&bottom | left&right */\npadding: 10px 20px 30px;    /* top | left&right | bottom */\npadding: 10px 20px 30px 40px; /* top | right | bottom | left */` },
            { type: 'callout', variant: 'warning', title: 'Padding vs margin', text: 'Padding adds space inside the border (and increases the element\'s size unless using border-box). Margin adds space outside the border, between elements.' },
          ],
        },
      ],
    },
  ],
};
