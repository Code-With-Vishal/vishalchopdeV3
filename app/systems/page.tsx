import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The System | AI Lead System',
  description: 'One fully automated pipeline: Lead capture → AI qualification → WhatsApp outreach → CRM sync → Booking.',
};

const modules = [
  {
    step: '01',
    icon: '👤',
    name: 'Lead Capture',
    tag: 'ENTRY POINT',
    desc: 'Leads arrive from any source — Meta Ads, Google Ads, Rightmove, Zoopla, your website, or organic DMs. The system captures them instantly via webhooks.',
    detail: 'Supports: Web forms · Meta Lead Ads · Google Ads · Manual import',
  },
  {
    step: '02',
    icon: '🧠',
    name: 'AI Qualification',
    tag: 'OPENAI GPT-4',
    desc: 'The AI instantly messages the lead on WhatsApp. It asks smart questions about budget, timeline, area, and intent — just like a top-performing agent would.',
    detail: 'Custom prompts tuned for real estate · Multi-turn conversation · Fallback to human',
  },
  {
    step: '03',
    icon: '💬',
    name: 'WhatsApp Outreach',
    tag: 'MESSAGING',
    desc: 'Every lead gets a personalised message in under 60 seconds. The AI follows up automatically if there\'s no response — at 1hr, 24hr, and 72hr intervals.',
    detail: 'WhatsApp Business API · Personalised context · Automatic follow-up sequences',
  },
  {
    step: '04',
    icon: '📊',
    name: 'CRM Sync',
    tag: 'AIRTABLE',
    desc: 'Every lead, every conversation, every qualification score is automatically logged to your CRM. No manual data entry. Ever.',
    detail: 'Airtable · HubSpot · GoHighLevel · Custom CRM via API',
  },
  {
    step: '05',
    icon: '📅',
    name: 'Auto Booking',
    tag: 'CALENDLY',
    desc: 'Qualified leads instantly receive a Calendly link. Hot leads can be pushed directly to a call in the same conversation thread.',
    detail: 'Calendly integration · Google Calendar sync · SMS confirmation',
  },
];

export default function SystemsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingTop: '8rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="section-label">⚙️ The System</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '1.25rem 0 1.25rem' }}>
            One Pipeline.<br />
            <span style={{ color: 'var(--accent)' }}>Zero Manual Work.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Every module talks to the next. Leads enter, bookings come out.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book" className="btn-primary">Build My System</Link>
            <Link href="/pricing" className="btn-secondary">See Pricing</Link>
          </div>
        </div>
      </section>

      {/* Pipeline visual */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', flexWrap: 'wrap', marginBottom: '5rem' }}>
            {['Lead', 'AI', 'WhatsApp', 'CRM', 'Booking'].map((label, i) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--surface2)', border: `2px solid ${i <= 2 ? 'rgba(200,251,78,0.5)' : 'var(--border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', boxShadow: i <= 2 ? '0 0 20px rgba(200,251,78,0.2)' : 'none' }}>
                    {['👤','🧠','💬','📊','📅'][i]}
                  </div>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: i <= 2 ? 'var(--accent)' : 'var(--text-muted)', letterSpacing: '0.05em' }}>{label}</span>
                </div>
                {i < 4 && <ArrowRight size={16} color="rgba(200,251,78,0.3)" style={{ margin: '0 0.75rem', marginTop: '-16px' }} />}
              </div>
            ))}
          </div>

          {/* Module cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {modules.map((m) => (
              <div key={m.step} className="card" style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: '2rem', alignItems: 'start' }}>
                <div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{m.step}</div>
                  <div style={{ fontSize: '2.5rem' }}>{m.icon}</div>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text)' }}>{m.name}</h3>
                    <span className="tag">{m.tag}</span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>{m.desc}</p>
                  <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: 'var(--text-dim)' }}>{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Ready to <span style={{ color: 'var(--accent)' }}>Deploy?</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>We build the full system in 5–7 days. You close more deals from week one.</p>
          <Link href="/book" className="btn-primary" style={{ fontSize: '1.05rem', padding: '1rem 2.5rem' }}>Book Your Build Call</Link>
        </div>
      </section>
    </>
  );
}
