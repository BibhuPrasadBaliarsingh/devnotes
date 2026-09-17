export const htmlContent = {
  id: 'html',
  slug: 'html',
  title: 'HTML',
  subtitle: 'Complete HTML Guide & Reference',
  category: 'Web Development',
  description:
    'Comprehensive HTML guide covering document structure, semantic elements, forms, tables, multimedia, accessibility, SEO, modern HTML5 features, and best practices.',
  sections: [
    {
      id: 'introduction-to-html',
      title: '1. Introduction to HTML',
      summary:
        'Understand what HTML is, how a document is structured, and the relationship between HTML, CSS, and JavaScript.',
      content: [
        {
          type: 'paragraph',
          text: 'HTML (HyperText Markup Language) is the standard markup language used to structure content on the web. It defines elements such as headings, paragraphs, links, images, forms, tables, navigation areas, and other parts of a webpage. HTML provides structure, while CSS controls presentation and JavaScript provides behavior.',
        },
        {
          type: 'heading',
          text: 'Basic HTML Document',
        },
        {
          type: 'code',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>Welcome to my website.</p>
</body>
</html>`,
        },
        {
          type: 'table',
          headers: ['Part', 'Purpose'],
          rows: [
            ['<!DOCTYPE html>', 'Declares the document as HTML5'],
            ['<html>', 'Root element of the document'],
            ['<head>', 'Contains metadata and resource references'],
            ['<meta>', 'Provides metadata such as character encoding'],
            ['<title>', 'Defines the browser/page title'],
            ['<body>', 'Contains visible webpage content'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'HTML vs CSS vs JavaScript',
          text: 'HTML provides structure, CSS provides styling and layout, and JavaScript provides dynamic behavior and application logic.',
        },
      ],
    },

    {
      id: 'html-elements-and-tags',
      title: '2. HTML Elements & Tags',
      summary:
        'Learn how HTML tags work, common elements, and the difference between block-level and inline elements.',
      content: [
        {
          type: 'paragraph',
          text: 'HTML uses tags to define elements. Most elements have an opening tag and a closing tag, while some are void elements and do not have closing tags.',
        },
        {
          type: 'code',
          language: 'html',
          code: `<!-- Regular elements -->
<h1>Main Heading</h1>
<p>This is a paragraph.</p>

<!-- Void elements — no closing tag -->
<img src="image.jpg" alt="Example image">
<br>
<input type="text" placeholder="Enter your name">`,
        },
        {
          type: 'heading',
          text: 'Common HTML Elements',
        },
        {
          type: 'table',
          headers: ['Element', 'Purpose', 'Example'],
          rows: [
            ['h1–h6', 'Headings', '<h1>Title</h1>'],
            ['p', 'Paragraph', '<p>Hello</p>'],
            ['a', 'Hyperlink', '<a href="/">Home</a>'],
            ['img', 'Image', '<img src="image.jpg" alt="Image">'],
            ['button', 'Clickable button', '<button>Submit</button>'],
            ['div', 'Generic block container', '<div>Content</div>'],
            ['span', 'Generic inline container', '<span>Text</span>'],
            ['strong', 'Strong importance', '<strong>Important</strong>'],
            ['em', 'Emphasis', '<em>Important</em>'],
          ],
        },
        {
          type: 'heading',
          text: 'Block vs Inline Elements',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Block elements generally start on a new line and can contain larger structures.',
            'Inline elements generally flow within surrounding text.',
            'Examples of block elements include div, p, section, article, and h1.',
            'Examples of inline elements include span, a, strong, em, and img.',
          ],
        },
        {
          type: 'code',
          language: 'html',
          code: `<div>
  <h2>Product</h2>
  <p>This is a <strong>great</strong> product.</p>
</div>`,
        },
      ],
    },

    {
      id: 'semantic-html',
      title: '3. Semantic HTML',
      summary:
        'Use semantic elements to give meaningful structure that benefits maintainability, accessibility, and SEO.',
      content: [
        {
          type: 'paragraph',
          text: 'Semantic HTML uses elements that communicate the meaning and purpose of content. Semantic structure improves maintainability, accessibility, and helps search engines better understand the page.',
        },
        {
          type: 'table',
          headers: ['Element', 'Purpose'],
          rows: [
            ['header', 'Introductory content or site/page header'],
            ['nav', 'Navigation links'],
            ['main', 'Primary content of the document'],
            ['section', 'Thematic section of content'],
            ['article', 'Independent piece of content'],
            ['aside', 'Related or secondary content'],
            ['footer', 'Footer information'],
            ['figure', 'Self-contained visual/media content'],
            ['figcaption', 'Caption for a figure'],
          ],
        },
        {
          type: 'code',
          language: 'html',
          code: `<body>
  <header>
    <h1>My Website</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>Latest Articles</h2>

      <article>
        <h3>Learning HTML</h3>
        <p>HTML provides structure for websites.</p>
      </article>
    </section>

    <aside>
      <h2>Related Links</h2>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 My Website</p>
  </footer>
</body>`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Best Practice',
          text: 'Prefer semantic elements when they accurately describe the content. Use div and span for generic containers when no more meaningful semantic element applies.',
        },
      ],
    },

    {
      id: 'headings-paragraphs-text',
      title: '4. Headings, Paragraphs & Text Formatting',
      summary:
        'Structure documents with headings, paragraphs, blockquotes, and inline text formatting elements.',
      content: [
        {
          type: 'paragraph',
          text: 'Headings create a hierarchy within a document. Paragraphs represent blocks of text, while text-level elements provide emphasis, importance, citations, code representation, and other meanings.',
        },
        {
          type: 'code',
          language: 'html',
          code: `<h1>Website Title</h1>
<h2>Introduction</h2>
<h3>HTML Basics</h3>

<p>This is a paragraph.</p>

<p>
  Learn <strong>HTML</strong> and
  <em>build better websites</em>.
</p>

<blockquote>
  HTML describes the structure of web content.
</blockquote>

<code>console.log("Hello");</code>

<pre>
function hello() {
  console.log("Hello");
}
</pre>`,
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Use one clear primary page heading when appropriate.',
            'Maintain a logical heading hierarchy.',
            'Do not choose heading levels only because of their default visual size.',
            'Use CSS to control appearance rather than misusing headings.',
            'Use strong for strong importance and em for emphasis.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Heading Mistake',
          text: 'Avoid choosing h1, h2, or h3 only because the text looks bigger or smaller. Heading levels should represent the document structure.',
        },
      ],
    },

    {
      id: 'links-and-navigation',
      title: '5. Links & Navigation',
      summary:
        'Create links to pages, sections, emails, and files, and build accessible navigation menus.',
      content: [
        {
          type: 'paragraph',
          text: 'The anchor element creates hyperlinks. Links can point to another page, a section on the same page, a file, an email address, or another website.',
        },
        {
          type: 'code',
          language: 'html',
          code: `<!-- Internal link -->
<a href="/about">About</a>

<!-- External link -->
<a href="https://example.com">Visit Example</a>

<!-- Same-page anchor -->
<a href="#contact">Contact</a>

<!-- Email link -->
<a href="mailto:hello@example.com">Email Us</a>

<!-- Download link -->
<a href="document.pdf" download>Download PDF</a>

<!-- New tab (with security rel) -->
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Open Website
</a>`,
        },
        {
          type: 'heading',
          text: 'Navigation Example',
        },
        {
          type: 'code',
          language: 'html',
          code: `<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'External Links',
          text: 'When opening an external page in a new tab using target="_blank", use an appropriate rel value such as noopener noreferrer.',
        },
      ],
    },

    {
      id: 'images-and-multimedia',
      title: '6. Images & Multimedia',
      summary:
        'Embed images, audio, video, and responsive picture elements with proper alt text and accessibility.',
      content: [
        {
          type: 'paragraph',
          text: 'HTML provides elements for images, audio, video, responsive images, captions, and other media. Accessibility and performance should be considered whenever media is added.',
        },
        {
          type: 'code',
          language: 'html',
          code: `<!-- Basic image -->
<img
  src="profile.jpg"
  alt="Developer working on a laptop"
  width="600"
  height="400"
  loading="lazy"
>

<!-- Image with caption -->
<figure>
  <img
    src="architecture.jpg"
    alt="Application architecture diagram"
  >
  <figcaption>Application architecture</figcaption>
</figure>

<!-- Video -->
<video controls width="600">
  <source src="demo.mp4" type="video/mp4">
  Your browser does not support video playback.
</video>

<!-- Audio -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support audio playback.
</audio>`,
        },
        {
          type: 'heading',
          text: 'Responsive Images',
        },
        {
          type: 'code',
          language: 'html',
          code: `<picture>
  <source
    media="(max-width: 600px)"
    srcset="mobile.jpg"
  >

  <source
    media="(max-width: 1200px)"
    srcset="tablet.jpg"
  >

  <img
    src="desktop.jpg"
    alt="Responsive example"
  >
</picture>`,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Always Use Alt Text',
          text: 'Provide meaningful alt text for informative images. Decorative images can use an empty alt attribute so assistive technologies can ignore them.',
        },
      ],
    },

    {
      id: 'html-lists-and-tables',
      title: '7. Lists & Tables',
      summary:
        'Build unordered, ordered, and description lists, and properly structured accessible data tables.',
      content: [
        {
          type: 'paragraph',
          text: 'HTML provides unordered lists, ordered lists, description lists, and tables for structured tabular data.',
        },
        {
          type: 'code',
          language: 'html',
          code: `<!-- Unordered list -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Ordered list -->
<ol>
  <li>Install dependencies</li>
  <li>Write code</li>
  <li>Test application</li>
  <li>Deploy application</li>
</ol>

<!-- Description list -->
<dl>
  <dt>HTML</dt>
  <dd>Structures web content.</dd>

  <dt>CSS</dt>
  <dd>Styles web content.</dd>
</dl>`,
        },
        {
          type: 'heading',
          text: 'HTML Table',
        },
        {
          type: 'code',
          language: 'html',
          code: `<table>
  <caption>Employee Information</caption>

  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Role</th>
      <th scope="col">Experience</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Rahul</td>
      <td>Developer</td>
      <td>2 Years</td>
    </tr>
    <tr>
      <td>Anita</td>
      <td>Designer</td>
      <td>3 Years</td>
    </tr>
  </tbody>
</table>`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Table Usage',
          text: 'Use tables for genuinely tabular information. Do not use tables as a general-purpose layout system.',
        },
      ],
    },

    {
      id: 'html-forms',
      title: '8. HTML Forms & Input Elements',
      summary:
        'Build accessible forms with input types, labels, validation attributes, and proper submit controls.',
      content: [
        {
          type: 'paragraph',
          text: 'Forms allow users to enter and submit information. HTML provides many input types and attributes that help browsers validate and present appropriate controls.',
        },
        {
          type: 'code',
          language: 'html',
          code: `<form action="/register" method="post">
  <div>
    <label for="name">Full Name</label>
    <input
      id="name"
      name="name"
      type="text"
      required
      autocomplete="name"
    >
  </div>

  <div>
    <label for="email">Email</label>
    <input
      id="email"
      name="email"
      type="email"
      required
      autocomplete="email"
    >
  </div>

  <div>
    <label for="password">Password</label>
    <input
      id="password"
      name="password"
      type="password"
      required
    >
  </div>

  <button type="submit">Register</button>
</form>`,
        },
        {
          type: 'heading',
          text: 'Common Input Types',
        },
        {
          type: 'table',
          headers: ['Type', 'Use'],
          rows: [
            ['text', 'General text'],
            ['email', 'Email address'],
            ['password', 'Password'],
            ['number', 'Numeric input'],
            ['tel', 'Telephone number'],
            ['url', 'URL'],
            ['date', 'Date'],
            ['time', 'Time'],
            ['checkbox', 'Multiple independent selections'],
            ['radio', 'Single selection from a group'],
            ['file', 'File upload'],
            ['search', 'Search input'],
            ['submit', 'Submit form'],
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Accessibility Rule',
          text: 'Associate labels with form controls using the label for attribute and the matching input id. This improves usability and accessibility.',
        },
      ],
    },

    {
      id: 'html-attributes',
      title: '9. HTML Attributes',
      summary:
        'Understand global, event, ARIA, and data attributes, and how boolean attributes work.',
      content: [
        {
          type: 'paragraph',
          text: 'Attributes provide additional information or configuration for HTML elements. They are written inside the opening tag and generally use a name-value format.',
        },
        {
          type: 'code',
          language: 'html',
          code: `<input
  type="text"
  id="username"
  name="username"
  placeholder="Enter username"
  required
  minlength="3"
  maxlength="30"
>

<a
  href="/about"
  class="nav-link"
  id="about-link"
  title="About our company"
>
  About
</a>`,
        },
        {
          type: 'table',
          headers: ['Attribute', 'Purpose'],
          rows: [
            ['id', 'Unique identifier'],
            ['class', 'Reusable CSS/JavaScript hook'],
            ['href', 'Link destination'],
            ['src', 'Resource URL'],
            ['alt', 'Alternative text'],
            ['title', 'Additional advisory information'],
            ['name', 'Form/control name'],
            ['value', 'Control value'],
            ['required', 'Makes form control required'],
            ['disabled', 'Disables a form control'],
            ['hidden', 'Hides an element'],
            ['data-*', 'Stores custom data attributes'],
            ['aria-*', 'Provides accessibility-related information'],
          ],
        },
        {
          type: 'heading',
          text: 'Boolean Attributes',
        },
        {
          type: 'code',
          language: 'html',
          code: `<!-- Presence of the attribute enables it -->
<input type="text" required>

<button disabled>Submit</button>

<input type="checkbox" checked>`,
        },
      ],
    },

    {
      id: 'html-head-metadata-seo',
      title: '10. Head, Metadata & SEO',
      summary:
        'Configure the document head with charset, viewport, meta description, title, stylesheets, and favicon.',
      content: [
        {
          type: 'paragraph',
          text: 'The head element contains information about the document that is generally not displayed as page content. Metadata can influence browser behavior, sharing previews, search engine understanding, and responsive rendering.',
        },
        {
          type: 'code',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Character encoding -->
  <meta charset="UTF-8">

  <!-- Responsive viewport -->
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <!-- SEO description -->
  <meta
    name="description"
    content="Learn modern web development."
  >

  <!-- Page title -->
  <title>Web Development Guide</title>

  <!-- Stylesheet -->
  <link rel="stylesheet" href="/styles.css">

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico">
</head>
<body>
  <main>
    <h1>Web Development Guide</h1>
  </main>
</body>
</html>`,
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Use a meaningful and unique title for each important page.',
            'Write a useful meta description for search result context.',
            'Set the document language using the lang attribute.',
            'Use semantic HTML to provide meaningful structure.',
            'Use descriptive headings.',
            'Use descriptive link text.',
            'Provide appropriate alternative text for images.',
            'Avoid keyword stuffing.',
            'Ensure important content is accessible to users and assistive technologies.',
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'SEO Reminder',
          text: 'HTML structure supports SEO, but search visibility depends on many factors including content quality, accessibility, performance, links, technical configuration, and search engine policies.',
        },
      ],
    },

    {
      id: 'html-accessibility',
      title: '11. HTML Accessibility',
      summary:
        'Write accessible HTML using semantic elements, labels, ARIA roles, and keyboard-friendly patterns.',
      content: [
        {
          type: 'paragraph',
          text: 'Accessible HTML helps people with different abilities use websites effectively. Good accessibility starts with semantic HTML and correct native controls before adding custom behavior.',
        },
        {
          type: 'code',
          language: 'html',
          code: `<main>
  <h1>Contact Us</h1>

  <form>
    <label for="email">Email address</label>
    <input
      id="email"
      name="email"
      type="email"
      required
      aria-describedby="email-help"
    >

    <p id="email-help">
      We will use this email to respond to your request.
    </p>

    <button type="submit">Send Message</button>
  </form>
</main>`,
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Use semantic HTML elements whenever possible.',
            'Provide labels for form controls.',
            'Use meaningful alt text for informative images.',
            'Maintain logical heading structure.',
            'Ensure interactive controls are keyboard accessible.',
            'Use buttons for actions and links for navigation.',
            'Provide sufficient focus visibility through CSS.',
            'Use ARIA only when native HTML semantics are insufficient.',
            'Do not communicate important information using color alone.',
          ],
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Do Not Overuse ARIA',
          text: 'ARIA should complement correct HTML rather than replace native semantics. A native button is usually preferable to turning a div into a custom button.',
        },
      ],
    },

    {
      id: 'html-best-practices',
      title: '12. HTML Best Practices',
      summary:
        'Write production-ready HTML that is semantic, valid, accessible, and maintainable.',
      content: [
        {
          type: 'paragraph',
          text: 'Production HTML should be semantic, accessible, maintainable, valid, and easy for both humans and browsers to understand.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Use the HTML5 doctype.',
            'Set an appropriate lang attribute.',
            'Use semantic elements.',
            'Use meaningful class and id names.',
            'Keep nesting logical and valid.',
            'Use labels with form controls.',
            'Provide alt text for meaningful images.',
            'Use buttons for actions and anchors for navigation.',
            'Keep CSS separate from HTML when practical.',
            'Avoid inline styles for large applications.',
            'Validate HTML during development.',
            'Keep document structure simple and maintainable.',
          ],
        },
        {
          type: 'code',
          language: 'html',
          code: `<!-- Good semantic structure -->
<header class="site-header">
  <nav aria-label="Primary navigation">
    <a href="/" class="logo">DevNotes</a>

    <ul class="nav-list">
      <li><a href="/html">HTML</a></li>
      <li><a href="/css">CSS</a></li>
      <li><a href="/javascript">JavaScript</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>HTML Guide</h1>
    <p>Learn HTML from fundamentals to best practices.</p>
  </article>
</main>

<footer>
  <p>&copy; 2026 DevNotes</p>
</footer>`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Production Rule',
          text: 'Write HTML for meaning and structure first. Then use CSS for visual design and JavaScript for behavior.',
        },
      ],
    },

    {
      id: 'html-interview-questions',
      title: '13. HTML Interview Questions',
      summary:
        'Frequently asked HTML interview questions covering structure, semantics, forms, attributes, accessibility, and best practices.',
      content: [
        {
          type: 'faq',
          items: [
            {
              question: 'What is HTML?',
              answer:
                'HTML stands for HyperText Markup Language and is used to structure content on web pages.',
            },
            {
              question: 'What is the purpose of <!DOCTYPE html>?',
              answer:
                'It tells the browser that the document uses the HTML standard and enables standards-oriented rendering.',
            },
            {
              question: 'What is semantic HTML?',
              answer:
                'Semantic HTML uses elements whose names communicate the meaning or role of their content, such as header, nav, main, article, section, and footer.',
            },
            {
              question: 'What is the difference between div and span?',
              answer:
                'Both are generic containers, but div is commonly used as a block-level structural container while span is commonly used for inline content.',
            },
            {
              question: 'What is the difference between id and class?',
              answer:
                'An id identifies a specific element and should be unique within the document, while a class can be reused across multiple elements.',
            },
            {
              question: 'What is the difference between block and inline elements?',
              answer:
                'Block elements generally occupy their own line in normal flow, while inline elements generally flow within surrounding content.',
            },
            {
              question: 'Why is the alt attribute important?',
              answer:
                'Alt text provides an alternative description for images when they cannot be seen and helps users of assistive technologies understand informative images.',
            },
            {
              question: 'What is the difference between strong and b?',
              answer:
                'Strong conveys strong importance semantically, while b is primarily a generic stylistic offset without the same semantic meaning.',
            },
            {
              question: 'What is the difference between em and i?',
              answer:
                'Em represents emphasis, while i represents text offset from normal prose for a reason such as an alternate voice or technical term, depending on context.',
            },
            {
              question: 'What is the purpose of the meta viewport tag?',
              answer:
                'It helps browsers control the viewport dimensions and scaling used for responsive pages on mobile devices.',
            },
            {
              question: 'What is the difference between button and a?',
              answer:
                'A button is intended for an action such as submitting a form or triggering behavior, while an anchor is intended for navigation to a URL or document location.',
            },
            {
              question: 'What are HTML forms used for?',
              answer:
                'Forms collect user input and provide a mechanism for submitting that information to an application or server.',
            },
            {
              question: 'What are void elements?',
              answer:
                'Void elements do not contain child content and do not use closing tags. Examples include img, input, br, meta, and link.',
            },
            {
              question: 'What is accessibility in HTML?',
              answer:
                'HTML accessibility means structuring and labeling content and controls so that people with different abilities and assistive technologies can use the interface effectively.',
            },
            {
              question: 'What is the difference between section and article?',
              answer:
                'Section represents a thematic grouping of content, while article represents a self-contained piece of content that can generally stand independently.',
            },
          ],
        },
      ],
    },
  ],
};

export default htmlContent;
