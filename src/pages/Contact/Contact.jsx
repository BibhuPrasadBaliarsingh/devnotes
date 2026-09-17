import { useState } from 'react';
import { Mail, Send, Check, Copy, MessageSquare, Lightbulb, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

const CATEGORIES = [
  { id: 'missing_topic', label: 'Request Missing Course/Topic', icon: Lightbulb },
  { id: 'incomplete_content', label: 'Report Incomplete Notes / Bug', icon: AlertCircle },
  { id: 'feedback', label: 'General Feedback & Ideas', icon: Sparkles },
  { id: 'other', label: 'Other Question', icon: MessageSquare },
];

const TARGET_EMAIL = 'bibhupbaliarsingh@gmail.com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'missing_topic',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategorySelect = (catId) => {
    setFormData((prev) => ({ ...prev, category: catId }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(TARGET_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const categoryLabel = CATEGORIES.find((c) => c.id === formData.category)?.label || formData.category;

    try {
      // Send form submission via FormSubmit.co
      const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          category: categoryLabel,
          _subject: formData.subject || `DevNotes Contact: ${categoryLabel}`,
          message: formData.message,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const data = await response.json();
      if (data.success === 'true' || data.success === true || response.ok) {
        setSubmitted(true);
      } else {
        triggerMailto();
        setSubmitted(true);
      }
    } catch {
      triggerMailto();
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerMailto = () => {
    const categoryLabel = CATEGORIES.find((c) => c.id === formData.category)?.label || 'Feedback';
    const mailtoSubject = encodeURIComponent(formData.subject || `DevNotes Contact: ${categoryLabel}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${categoryLabel}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${TARGET_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Mail className="h-6 w-6" />
        </div>
        <h1 className="mt-4 text-2xl font-bold text-fg sm:text-3xl">Get in Touch</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
          Notice anything missing or incomplete? Have a suggestion or course request? Send your feedback directly!
        </p>
      </div>

      {/* Quick Direct Email Banner */}
      <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-medium text-muted">Direct Email</p>
            <p className="text-sm font-semibold text-fg">{TARGET_EMAIL}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 rounded-lg border border-border bg-bg px-3 py-1.5 text-xs font-medium text-fg hover:bg-hover transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? 'Copied!' : 'Copy Email'}
          </button>
          <a
            href={`mailto:${TARGET_EMAIL}?subject=${encodeURIComponent('DevNotes Inquiry / Request')}`}
            className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-fg hover:opacity-90 transition-opacity"
          >
            <Send className="h-3.5 w-3.5" />
            Open Mail Client
          </a>
        </div>
      </div>

      {/* Main Content Form */}
      <div className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8">
        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-500">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-fg">Thank You for Your Feedback!</h2>
            <p className="mt-2 text-sm text-muted">
              Your message has been formatted and submitted to <span className="font-semibold text-fg">{TARGET_EMAIL}</span>.
            </p>
            <p className="mt-1 text-xs text-muted">We review suggestions to continuously improve DevNotes.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', category: 'missing_topic', subject: '', message: '' });
                }}
                className="rounded-lg border border-border bg-bg px-4 py-2 text-xs font-medium text-fg hover:bg-hover"
              >
                Send Another Message
              </button>
            </div>
          </div>
        ) : (
          <form
            action={`https://formsubmit.co/${TARGET_EMAIL}`}
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Category selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                What would you like to share?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const selected = formData.category === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategorySelect(cat.id)}
                      className={`flex items-center gap-2.5 rounded-xl border p-3 text-left transition-all ${
                        selected
                          ? 'border-primary bg-primary/10 text-fg'
                          : 'border-border bg-bg/50 text-muted hover:border-border/80 hover:text-fg'
                      }`}
                    >
                      <Icon className={`h-4.5 w-4.5 shrink-0 ${selected ? 'text-primary' : 'text-muted'}`} />
                      <span className="text-xs font-medium">{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input fields row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-fg mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Alex Smith"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-bg px-3.5 py-2 text-sm text-fg placeholder:text-muted focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-fg mb-1">
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-bg px-3.5 py-2 text-sm text-fg placeholder:text-muted focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-xs font-medium text-fg mb-1">
                Subject / Topic Title
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="e.g. Requesting TypeScript async/await notes or found typo in React hooks"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-lg border border-border bg-bg px-3.5 py-2 text-sm text-fg placeholder:text-muted focus:border-primary focus:outline-none"
              />
            </div>

            {/* Message area */}
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-fg mb-1">
                Message / Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Describe what topic you'd like added, or what details need updates..."
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-border bg-bg px-3.5 py-2.5 text-sm text-fg placeholder:text-muted focus:border-primary focus:outline-none resize-y"
              />
            </div>

            {/* Submit button */}
            <div className="flex items-center justify-between gap-4 pt-2">
              <p className="text-xs text-muted">
                Direct receiver: <span className="font-mono text-fg">{TARGET_EMAIL}</span>
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-fg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
