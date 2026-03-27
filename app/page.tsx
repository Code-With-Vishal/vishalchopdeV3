'use client';
import { useState } from 'react';
import WorkflowAnimation from '@/components/WorkflowAnimation';
import { ChevronDown, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

const problems = [
  { icon: '🚫', title: 'Leads Ignored', desc: 'Most agents take 4–24 hours to reply. By then, the lead is gone.' },
  { icon: '🐌', title: 'Slow Replies', desc: 'Manual response systems can\'t match the speed buyers expect today.' },
  { icon: '💸', title: 'Lost Deals', desc: 'Every unanswered lead is money left on the table — forever.' },
  { icon: '🔁', title: 'Manual Work', desc: 'You\'re spending hours on follow-ups instead of closing deals.' },
];

const solutions = [
  { icon: '⚡', title: 'Instant Replies', desc: 'AI responds to every lead in under 60 seconds — 24/7.' },
  { icon: '🤖', title: 'AI Follow-ups', desc: 'Automatic multi-channel follow-up sequences that never miss a lead.' },
  { icon: '✅', title: 'Auto Qualification', desc: 'AI identifies hot leads and prioritises your pipeline automatically.' },
  { icon: '📅', title: 'Auto Booking', desc: 'Calendly integration books viewings directly into your calendar.' },
  { icon: '🗂️', title: 'CRM Automation', desc: 'Every interaction logged to Airtable. Zero manual data entry.' },
];

const proofs = [
  { metric: '14hrs → 90s', label: 'Response Time', sub: 'Avg across all clients' },
  { metric: '3×', label: 'More Viewings', sub: 'From same lead volume' },
  { metric: '67%', label: 'After-Hours Bookings', sub: 'Captured automatically' },
  { metric: '12–18', label: 'Calls/Month', sub: 'Qualified strategy calls' },
];

const stack = [
  { icon: '⚙️', name: 'n8n', tag: 'AUTOMATION' },
  { icon: '🧠', name: 'OpenAI', tag: 'AI ENGINE' },
  { icon: '💬', name: 'WhatsApp', tag: 'MESSAGING' },
  { icon: '📊', name: 'Airtable', tag: 'CRM' },
  { icon: '📅', name: 'Calendly', tag: 'BOOKING' },
];

const faqs = [
  { q: 'How fast does the AI respond?', a: 'Under 60 seconds — every time, day or night. No exceptions.' },
  { q: 'Do I need technical knowledge to use this?', a: 'None. We handle the full setup, integrations, and onboarding. You just start receiving qualified bookings.' },
  { q: 'What if a lead asks something the AI can\'t answer?', a: 'The AI escalates to you instantly via WhatsApp, with full lead context already attached.' },
  { q: 'Which CRM does it work with?', a: 'We primarily use Airtable, but can integrate with HubSpot, GoHighLevel, or your existing CRM.' },
  { q: 'What\'s included in the $500/month?', a: 'Ongoing AI optimisation, prompt tuning, system monitoring, integrations support, and monthly performance reporting.' },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ===== 1. HERO ===== */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '5rem' }}>
        {/* Background animation */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.4, zIndex: 0 }}>
          <WorkflowAnimation />
        </div>

        {/* Radial gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 30%, var(--bg) 80%)', zIndex: 1 }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '860px' }}>
          {/* Label */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <span className="section-label">🤖 Real Estate AI OS</span>
          </div>

          {/* H1 */}
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', marginBottom: '1.5rem', color: 'var(--text)' }}>
            Get <span style={{ color: 'var(--accent)' }}>20–50 Qualified</span><br />
            Real Estate Leads <span style={{ color: 'var(--accent)' }}>Automatically</span>
          </h1>

          {/* Sub */}
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            AI responds, qualifies, and books calls for you — <strong style={{ color: 'var(--text)' }}>in under 60 seconds.</strong>
          </p>

          {/* Response badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <div className="badge">
              <span className="dot" />
              Response time: under 1 hour
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <Link href="/book" className="btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
              📅 Book Call
            </Link>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', borderRadius: '8px', background: '#25D366', color: '#fff', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', transition: 'box-shadow 0.3s ease, transform 0.2s ease' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 24px rgba(37,211,102,0.5)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}
            >
              ⚡ WhatsApp <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>fastest</span>
            </a>
            <a href="#demo" className="btn-secondary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
              <Play size={16} /> Watch Demo
            </a>
          </div>

          {/* Tertiary socials */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com', icon: '🔗' },
              { label: 'X', href: 'https://x.com', icon: '𝕏' },
              { label: 'Email', href: 'mailto:hello@aileadsystem.com', icon: '✉️' },
            ].map(s => (
              <a key={s.label} href={s.href} className="btn-ghost" target="_blank" rel="noreferrer">
                <span>{s.icon}</span> {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. DEMO EMBED ===== */}
      <section id="demo" className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">🎥 Live Demo</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '1rem 0 1.5rem' }}>
            See It Running <span style={{ color: 'var(--accent)' }}>Live</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.05rem' }}>
            Lead comes in → AI qualifies → WhatsApp message → Booking confirmed. All in under 60 seconds.
          </p>
          {/* Loom embed placeholder */}
          <div style={{ position: 'relative', maxWidth: '860px', margin: '0 auto', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--surface)', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', boxShadow: '0 24px 80px rgba(200,251,78,0.08)' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(200,251,78,0.05), rgba(99,102,241,0.05))' }} />
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 0 40px var(--accent-glow)', zIndex: 1, animation: 'glow-pulse 3s ease-in-out infinite' }}>
              <Play size={32} color="#0B0B0F" fill="#0B0B0F" />
            </div>
            <p style={{ color: 'var(--text-muted)', fontFamily: 'DM Mono, monospace', fontSize: '0.8rem', zIndex: 1 }}>
              REPLACE WITH LOOM — embed your 30s demo video here
            </p>
          </div>
          <p style={{ marginTop: '1.5rem', color: 'var(--text-dim)', fontSize: '0.85rem', fontFamily: 'DM Mono, monospace' }}>
            30 seconds · No fluff · Just the system running
          </p>
        </div>
      </section>

      {/* ===== 3. LIVE AI PIPELINE ===== */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">⚙️ Live System</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '1rem 0 1rem' }}>
            Your AI Pipeline, <span style={{ color: 'var(--accent)' }}>Always Running</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1.05rem' }}>
            Every lead flows through an automated system that never sleeps.
          </p>
          <WorkflowAnimation />
        </div>
      </section>

      {/* ===== 4. PROBLEM ===== */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">⚠️ The Problem</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '1rem 0 1rem' }}>
              Why Agents Lose <span style={{ color: '#F87171' }}>Deals Every Day</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
              The real estate market doesn&apos;t wait. Your competitors&apos; AI does.
            </p>
          </div>
          <div className="grid-4">
            {problems.map((p) => (
              <div key={p.title} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{p.icon}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--text)' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. SOLUTION ===== */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">✅ The Solution</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '1rem 0 1rem' }}>
              Everything <span style={{ color: 'var(--accent)' }}>Automated</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
              From first contact to booked viewing — hands-free.
            </p>
          </div>
          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
            {solutions.map((s) => (
              <div key={s.title} className="card">
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text)' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/book" className="btn-primary">Get Your AI System Built →</Link>
          </div>
        </div>
      </section>

      {/* ===== 6. PROOF ===== */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">📈 Real Results</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '1rem 0 1rem' }}>
              Numbers That <span style={{ color: 'var(--accent)' }}>Speak for Themselves</span>
            </h2>
          </div>
          <div className="grid-4">
            {proofs.map((p) => (
              <div key={p.metric} className="stat-card" style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem' }}>{p.metric}</div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)', marginBottom: '0.25rem' }}>{p.label}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'DM Mono, monospace' }}>{p.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. STACK ===== */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">🛠️ The Stack</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '1rem 0 1rem' }}>
            One Pipeline. <span style={{ color: 'var(--accent)' }}>No Manual Work.</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1.05rem' }}>
            Enterprise-grade tools configured for real estate agents.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '0' }}>
            {stack.map((s, i) => (
              <div key={s.name} style={{ display: 'flex', alignItems: 'center' }}>
                <div className="pipeline-node">
                  <div className={`pipeline-icon ${i <= 2 ? 'active' : ''}`} style={{ width: 72, height: 72, fontSize: '1.75rem' }}>
                    {s.icon}
                  </div>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)' }}>{s.name}</span>
                  <span className="tag">{s.tag}</span>
                </div>
                {i < stack.length - 1 && (
                  <ArrowRight size={20} color="rgba(200,251,78,0.4)" style={{ margin: '0 1rem', flexShrink: 0, marginTop: '-32px' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. OFFER ===== */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">💎 The Offer</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '1rem 0 1rem' }}>
            Done-For-You <span style={{ color: 'var(--accent)' }}>AI Lead System</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3.5rem', fontSize: '1.05rem' }}>
            We build it. You book clients.
          </p>
          <div className="grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Setup */}
            <div className="card" style={{ borderColor: 'rgba(200,251,78,0.3)', boxShadow: '0 0 40px rgba(200,251,78,0.06)', textAlign: 'left' }}>
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '1rem' }}>ONE-TIME SETUP</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '3rem', fontWeight: 800, color: 'var(--text)', marginBottom: '0.25rem' }}>$2,500</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.75rem' }}>Complete system build & launch</p>
              {['Full system build', 'Custom AI prompts', 'CRM setup (Airtable)', 'WhatsApp + Calendly integrations', 'Handoff + team training'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '1rem' }}>✓</span> {item}
                </div>
              ))}
              <Link href="/book" className="btn-primary" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>Get Started</Link>
            </div>
            {/* Retainer */}
            <div className="card" style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: 'var(--secondary)', letterSpacing: '0.1em', marginBottom: '1rem' }}>MONTHLY RETAINER</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '3rem', fontWeight: 800, color: 'var(--text)', marginBottom: '0.25rem' }}>$500<span style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>/mo</span></div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.75rem' }}>Continuous optimisation & support</p>
              {['AI prompt optimisation', 'System monitoring', 'Lead flow analytics', 'Monthly performance report', 'Priority support'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <span style={{ color: '#818CF8', fontSize: '1rem' }}>✓</span> {item}
                </div>
              ))}
              <Link href="/pricing" className="btn-secondary" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>See Full Details</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 9. CASE STUDY ===== */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">📋 Case Study</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '1rem 0 1rem' }}>
              Real Agent. <span style={{ color: 'var(--accent)' }}>Real Results.</span>
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '860px', margin: '0 auto' }}>
            {/* Before */}
            <div className="card" style={{ borderColor: 'rgba(248,113,113,0.2)' }}>
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: '#F87171', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>◉ BEFORE AI SYSTEM</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { label: 'Calls/Month', value: '4', icon: '📞' },
                  { label: 'Response Time', value: '14 hrs', icon: '⏱️' },
                  { label: 'After-Hours Bookings', value: '0%', icon: '🌙' },
                  { label: 'Manual Follow-ups', value: '3 hrs/day', icon: '📋' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.icon} {item.label}</span>
                    <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#F87171' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* After */}
            <div className="card" style={{ borderColor: 'rgba(200,251,78,0.3)', boxShadow: '0 0 40px rgba(200,251,78,0.06)' }}>
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>◉ AFTER AI SYSTEM</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { label: 'Calls/Month', value: '14+', icon: '📞' },
                  { label: 'Response Time', value: '< 90 sec', icon: '⏱️' },
                  { label: 'After-Hours Bookings', value: '67%', icon: '🌙' },
                  { label: 'Manual Follow-ups', value: '0 hrs/day', icon: '📋' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.icon} {item.label}</span>
                    <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'var(--accent)' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 10. MULTI-CHANNEL CTA ===== */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <span className="section-label">🚀 Get Started</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', margin: '1rem 0 1rem' }}>
            Ready to Stop <span style={{ color: '#F87171' }}>Losing Leads?</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.05rem' }}>
            Book a 30-min call. We&apos;ll show you exactly how many leads you&apos;re missing — and how to fix it.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <Link href="/book" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem', width: '100%', maxWidth: '380px', justifyContent: 'center' }}>
              📅 Book Your Demo Call
            </Link>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', width: '100%', maxWidth: '380px', padding: '1rem 2.5rem', borderRadius: '8px', background: '#25D366', color: '#fff', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', transition: 'box-shadow 0.3s ease' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 32px rgba(37,211,102,0.4)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'}
            >
              💬 WhatsApp <span style={{ fontSize: '0.75rem', opacity: 0.85 }}>⚡ Fastest Reply</span>
            </a>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com', icon: '🔗' },
                { label: 'X', href: 'https://x.com', icon: '𝕏' },
                { label: 'Email', href: 'mailto:hello@aileadsystem.com', icon: '✉️' },
              ].map(s => (
                <a key={s.label} href={s.href} className="btn-ghost" target="_blank" rel="noreferrer">
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 11. FAQ ===== */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">❓ FAQ</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '1rem 0' }}>
              Quick <span style={{ color: 'var(--accent)' }}>Answers</span>
            </h2>
          </div>
          <div>
            {faqs.map((f, i) => (
              <div key={i} className="faq-item">
                <button className="faq-trigger" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q}
                  <ChevronDown size={18} style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease', flexShrink: 0, color: 'var(--accent)' }} />
                </button>
                {openFaq === i && (
                  <div className="faq-content animate-slide-up">{f.a}</div>
                )}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/book" className="btn-primary">Still have questions? Book a call →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
