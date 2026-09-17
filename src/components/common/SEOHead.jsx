import { useEffect } from 'react';

export default function SEOHead({ title, description, canonicalUrl, ogType = 'website' }) {
  useEffect(() => {
    const siteName = 'Developer Notes';
    const fullTitle = title ? `${title} | ${siteName}` : 'Developer Notes — Developer Documentation & Learning Platform';
    document.title = fullTitle;

    const defaultDesc =
      'Free web developer notes and documentation for JavaScript, React, Node.js, Express, Python, SQL, SDLC, Testing, and HR Interviews.';
    const metaDescription = description || defaultDesc;

    setMetaTag('name', 'description', metaDescription);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', metaDescription);
    setMetaTag('property', 'og:type', ogType);

    const url = canonicalUrl || window.location.href;
    setMetaTag('property', 'og:url', url);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', url);
  }, [title, description, canonicalUrl, ogType]);

  return null;
}

function setMetaTag(attrName, attrValue, content) {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}
