import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Call | AI Lead System',
  description: 'Book a 30-minute strategy call to see how the AI Lead System can automate your real estate pipeline.',
};

const trust = [
  { icon: '⚡', label: 'Response in < 1hr' },
  { icon: '🔒', label: 'Confidential & NDA available' },
  { icon: '🎯', label: 'Strategy-focused, no sales pitch' },
  { icon: '📅', label: '30 min, no commitment' },
];

export default function BookPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
            {/* Left: Copy */}
            <div>
              <span className="section-label">📅 Book a Call</span>
              <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', margin: '1.25rem 0 1.25rem' }}>
                Let&apos;s Build Your<br />
                <span style={{ color: 'var(--accent)' }}>AI Lead Machine</span>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                In 30 minutes, we&apos;ll map your current lead flow, identify exactly where you&apos;re losing deals, and show you how the AI Lead System fixes it — immediately.
              </p>

              {/* What we'll cover */}
              <div style={{ marginBottom: '2.5rem' }}>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '1rem' }}>WHAT WE&apos;LL COVER</p>
                {[
                  'Your current lead sources & volume',
                  'How many leads you\'re losing (we\'ll calculate live)',
                  'Exact AI system design for your business',
                  'Pricing, timeline & what to expect',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--accent)' }}>→</span> {item}
                  </div>
                ))}
              </div>

              {/* Trust signals */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {trust.map(t => (
                  <div key={t.label} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '10px', padding: '0.75rem 1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <span style={{ fontSize: '1.1rem' }}>{t.icon}</span> {t.label}
                  </div>
                ))}
              </div>

              {/* Alternative contact */}
              <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px' }}>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '1rem' }}>PREFER TO CHAT FIRST?</p>
                <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.875rem 1.25rem', borderRadius: '10px', background: '#25D366', color: '#fff', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', marginBottom: '0.75rem' }}>
                  💬 Message on WhatsApp <span style={{ fontSize: '0.7rem', opacity: 0.85, marginLeft: 'auto' }}>⚡ Fastest</span>
                </a>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {[
                    { label: 'LinkedIn', href: 'https://linkedin.com', icon: '🔗' },
                    { label: 'X', href: 'https://x.com', icon: '𝕏' },
                    { label: 'Email', href: 'mailto:hello@aileadsystem.com', icon: '✉️' },
                  ].map(s => (
                    <a key={s.label} href={s.href} className="btn-ghost" style={{ flex: 1, justifyContent: 'center' }}>{s.icon} {s.label}</a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Calendly embed */}
            <div>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', overflow: 'hidden', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1.5rem', padding: '3rem 2rem', textAlign: 'center', boxShadow: '0 24px 80px rgba(200,251,78,0.06)' }}>
                <div style={{ fontSize: '3rem' }}>📅</div>
                <div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Calendly Embed</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Replace this placeholder with your Calendly embed code:
                  </p>
                </div>
                <code style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', background: 'var(--surface2)', padding: '1rem 1.5rem', borderRadius: '8px', color: 'var(--accent)', border: '1px solid var(--border)', whiteSpace: 'pre-wrap', textAlign: 'left', width: '100%' }}>
                  {`<!-- Calendly inline widget -->\n<div class="calendly-inline-widget"\n  data-url="YOUR_URL"\n  style="min-height:700px;">\n</div>\n<script src="https://assets.calendly.com\n/assets/external/widget.js">\n</script>`}
                </code>
                <a href="https://calendly.com" target="_blank" rel="noreferrer" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  📅 Schedule a Call on Calendly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
