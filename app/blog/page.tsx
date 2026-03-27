import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | AI Lead System — Real Estate Automation Insights',
  description: 'Learn how real estate agents are using AI automation to generate 3x more leads and book viewings automatically.',
};

const posts = [
  {
    category: 'AI Automation',
    title: 'How Real Estate Agents Are Booking 14+ Calls Per Month With AI',
    excerpt: 'The average agent responds to leads in 14 hours. The top 1% respond in under 60 seconds — not because they work harder, but because they\'ve automated it.',
    readTime: '5 min read',
    date: 'Mar 2025',
    slug: '#',
  },
  {
    category: 'Lead Generation',
    title: 'WhatsApp + AI: The Highest-Converting Outreach Combo for Property Agents',
    excerpt: 'WhatsApp has a 98% open rate. Pair it with AI qualification and you have a lead machine that works around the clock without human effort.',
    readTime: '4 min read',
    date: 'Feb 2025',
    slug: '#',
  },
  {
    category: 'CRM Automation',
    title: 'Why Manual CRM Entry Is Killing Your Real Estate Business',
    excerpt: 'Agents lose 2–3 hours per day on manual data entry. Here\'s how AI automation reclaims that time and eliminates costly human error.',
    readTime: '6 min read',
    date: 'Jan 2025',
    slug: '#',
  },
  {
    category: 'AI Automation',
    title: 'n8n vs Zapier for Real Estate Automation: An Honest Comparison',
    excerpt: 'Both tools automate workflows, but only one gives you the flexibility to build complex, multi-step AI pipelines without ballooning costs.',
    readTime: '7 min read',
    date: 'Dec 2024',
    slug: '#',
  },
  {
    category: 'Lead Generation',
    title: 'The 67% Problem: Why Most Real Estate Leads Come in After Hours',
    excerpt: 'Data from 200+ agents shows that 67% of enquiries arrive between 6pm and 8am. Here\'s why most agents miss them — and how the AI Lead System doesn\'t.',
    readTime: '4 min read',
    date: 'Nov 2024',
    slug: '#',
  },
  {
    category: 'Case Study',
    title: 'From 4 to 14 Bookings Per Month: A London Agent\'s AI Transformation',
    excerpt: 'A solo London estate agent went from barely covering their costs to consistently hitting £20k+ monthly revenue — using one automated system.',
    readTime: '8 min read',
    date: 'Oct 2024',
    slug: '#',
  },
];

const categories = ['All', 'AI Automation', 'Lead Generation', 'CRM Automation', 'Case Study'];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingTop: '8rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <span className="section-label">📝 Blog</span>
          <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', margin: '1.25rem 0 1.25rem' }}>
            AI + Real Estate.<br />
            <span style={{ color: 'var(--accent)' }}>Insights That Convert.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Practical guides, case studies, and automation strategies for real estate agents who want to grow without working more hours.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section style={{ borderBottom: '1px solid var(--border)', paddingBottom: '2rem', marginBottom: '-1rem' }}>
        <div className="container" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {categories.map((c, i) => (
            <button key={c} style={{ padding: '0.4rem 1rem', borderRadius: '100px', border: '1px solid var(--border)', background: i === 0 ? 'var(--accent)' : 'transparent', color: i === 0 ? '#0B0B0F' : 'var(--text-muted)', fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', cursor: 'pointer', transition: 'all 0.2s', letterSpacing: '0.05em' }}>
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Posts grid */}
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {posts.map((post) => (
              <article key={post.title} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="tag">{post.category.toUpperCase()}</span>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: 'var(--text-dim)' }}>{post.date}</span>
                </div>
                <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.4 }}>{post.title}</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7, flex: 1 }}>{post.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: 'var(--text-dim)' }}>{post.readTime}</span>
                  <a href={post.slug} style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    Read → 
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--surface)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Ready to stop reading<br />
            <span style={{ color: 'var(--accent)' }}>and start automating?</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Book a 30-min call. We&apos;ll show you how many leads you&apos;re currently losing.</p>
          <Link href="/book" className="btn-primary" style={{ fontSize: '1.05rem', padding: '1rem 2.5rem' }}>
            Book Your Free Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}
