'use client';
import Link from 'next/link';

const socials = [
  { label: 'WhatsApp', href: 'https://wa.me/1234567890', icon: '💬', fastest: true },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: '🔗' },
  { label: 'X (Twitter)', href: 'https://x.com', icon: '𝕏' },
  { label: 'Email', href: 'mailto:hello@aileadsystem.com', icon: '✉️' },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '4rem 0 2rem', background: 'var(--surface)' }}>
      <div className="container">
        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.25rem', marginBottom: '1rem' }}>
              AI Lead<span style={{ color: 'var(--accent)' }}>System</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '280px' }}>
              The AI Operating System for Real Estate Agents. Respond, qualify, and book —  automatically.
            </p>
            <div className="badge" style={{ marginTop: '1.25rem' }}>
              <span className="dot"></span>
              Response time: under 1 hour
            </div>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Navigate</p>
            {[
              { href: '/', label: 'Home' },
              { href: '/systems', label: 'Systems' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/book', label: 'Book Call' },
              { href: '/blog', label: 'Blog' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                style={{ display: 'block', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '0.5rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >{l.label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Contact</p>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '0.5rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <span>{s.icon}</span>
                {s.label}
                {s.fastest && <span style={{ fontSize: '0.65rem', background: 'rgba(200,251,78,0.12)', color: 'var(--accent)', border: '1px solid var(--accent-glow)', borderRadius: '4px', padding: '0.1rem 0.4rem', fontFamily: 'DM Mono, monospace' }}>FASTEST</span>}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', fontFamily: 'DM Mono, monospace' }}>
            © 2025 AI Lead System. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', fontFamily: 'DM Mono, monospace' }}>
            Built for real estate agents who don&apos;t sleep on leads.
          </p>
        </div>
      </div>
    </footer>
  );
}
