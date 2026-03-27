import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing | AI Lead System',
  description: 'Simple, transparent pricing. $2,500 setup + $500/month to automate your real estate lead system.',
};

const included = [
  'Full AI system build (n8n + OpenAI)',
  'Custom AI qualification scripts',
  'WhatsApp Business API setup',
  'Airtable CRM configuration',
  'Calendly booking integration',
  'Lead routing & escalation logic',
  'Team onboarding & handoff call',
  'Monthly performance reports',
  'AI prompt optimisation (ongoing)',
  'Priority support via WhatsApp',
];

const faqs = [
  { q: 'Is the setup fee refundable?', a: 'Once work has started, the setup fee is non-refundable. We do offer a 14-day satisfaction guarantee on retainer if the system isn\'t performing.' },
  { q: 'Can I cancel the monthly retainer?', a: 'Yes, cancel anytime with 30 days notice. The system remains yours — we just stop the active management.' },
  { q: 'Do I need a WhatsApp Business account?', a: 'Yes. We help you set up and verify your WhatsApp Business API account as part of onboarding.' },
  { q: 'How long does it take to go live?', a: 'Typically 5–7 business days from the strategy call to full system launch.' },
];

export default function PricingPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '8rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="section-label">💎 Pricing</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '1.25rem 0 1.25rem' }}>
            Simple. Transparent. <span style={{ color: 'var(--accent)' }}>ROI-First.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            One extra deal per month covers the cost. Everything after that is pure profit.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-2" style={{ maxWidth: '860px', margin: '0 auto 4rem' }}>
            {/* Setup */}
            <div className="card" style={{ borderColor: 'rgba(200,251,78,0.4)', boxShadow: '0 0 50px rgba(200,251,78,0.07)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', color: '#0B0B0F', fontSize: '0.7rem', fontFamily: 'DM Mono, monospace', fontWeight: 500, padding: '0.25rem 1rem', borderRadius: '0 0 8px 8px', letterSpacing: '0.1em' }}>MOST POPULAR</div>
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '1rem', marginTop: '0.5rem' }}>ONE-TIME SETUP</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '3.5rem', fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>$2,500</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0.5rem 0 2rem' }}>Full end-to-end build</p>
              <Link href="/book" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: '2rem', fontSize: '1rem' }}>Book Build Call</Link>
              {['Full AI system architecture', 'OpenAI + n8n automation flows', 'WhatsApp Business API', 'Airtable CRM setup', 'Calendly integration', 'Custom AI qualification prompts', 'Onboarding + handoff session'].map(f => (
                <div key={f} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.65rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span> {f}
                </div>
              ))}
            </div>

            {/* Retainer */}
            <div className="card">
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: '#818CF8', letterSpacing: '0.1em', marginBottom: '1rem' }}>MONTHLY RETAINER</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '3.5rem', fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>$500<span style={{ fontSize: '1.5rem', color: 'var(--text-muted)', fontWeight: 400 }}>/mo</span></div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0.5rem 0 2rem' }}>Active management & optimisation</p>
              <Link href="/book" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', marginBottom: '2rem', fontSize: '1rem' }}>Get Started</Link>
              {['AI prompt tuning (weekly)', 'System health monitoring', 'Lead flow analytics', 'Performance dashboard', 'Monthly strategy report', 'WhatsApp priority support', 'New integrations as needed'].map(f => (
                <div key={f} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.65rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  <span style={{ color: '#818CF8' }}>✓</span> {f}
                </div>
              ))}
            </div>
          </div>

          {/* Everything included */}
          <div style={{ maxWidth: '720px', margin: '0 auto', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '2.5rem' }}>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.25rem', marginBottom: '1.75rem', textAlign: 'center' }}>
              Everything <span style={{ color: 'var(--accent)' }}>Included</span>
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {included.map(item => (
                <div key={item} style={{ display: 'flex', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--text-muted)', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '3rem', textAlign: 'center' }}>
            Pricing <span style={{ color: 'var(--accent)' }}>FAQ</span>
          </h2>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--border)', padding: '1.5rem 0' }}>
              <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--text)' }}>{f.q}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            One deal covers the cost. <span style={{ color: 'var(--accent)' }}>The rest is profit.</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Ready to build your AI Lead System?</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book" className="btn-primary" style={{ fontSize: '1.05rem', padding: '1rem 2.5rem' }}>Book a Call</Link>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', borderRadius: '8px', background: '#25D366', color: '#fff', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
