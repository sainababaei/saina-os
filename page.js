import Link from 'next/link';
import Image from 'next/image';

const articles = [
  { tag: 'Agentic AI', title: 'Conversation memory is not organizational learning', href: '/thinking/conversation-memory', tone: 'violet' },
  { tag: 'Strategy', title: 'The end of best practice', href: '/thinking', tone: 'amber' },
  { tag: 'Product', title: 'Build the system before you scale the team', href: '/thinking', tone: 'lime' }
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <Link href="/" className="brand">SAINA OS</Link>
        <nav className="nav">
          <Link href="/thinking">Thinking</Link>
          <a href="#work">Ways to work</a>
          <a href="#events">Events</a>
          <Link href="/member">Member space</Link>
        </nav>
        <Link className="button primary" href="/member">Join / Book a session</Link>
      </header>

      <section className="hero wrap">
        <div>
          <div className="eyebrow">Professional relationships, made legible</div>
          <h1>Build better work through better systems and better relationships.</h1>
          <p className="lead">SAINA OS is a curated space where people can discover ideas, book focused help, join events, build an optional evidence-based professional profile and become part of a higher-quality relationship network over time.</p>
          <div className="actions">
            <Link className="button primary" href="/member">Start with a conversation</Link>
            <Link className="button secondary" href="/thinking">Explore the thinking</Link>
          </div>
        </div>
        <div className="portraitCard">
          <Image src="/images/saina-babaei-curator.png" alt="Saina Babaei" fill priority sizes="(max-width: 900px) 90vw, 42vw" />
          <div className="nameplate">Curated by Saina Babaei · Business Systems Designer</div>
        </div>
      </section>

      <section className="miniGrid wrap">
        <article><b>Learn</b><span>Read practical thinking on product, business, systems and AI.</span></article>
        <article><b>Work</b><span>Book targeted help for product, business, pitch decks and operating challenges.</span></article>
        <article><b>Grow</b><span>Optionally build a dynamic profile enriched by evidence and real interaction.</span></article>
      </section>

      <section className="darkSection">
        <div className="wrap section">
          <div className="eyebrow">Participation can stay light or become deeper</div>
          <h2>Not everyone needs the same relationship with the system.</h2>
          <p className="sectionLead">Someone may simply read an article. Someone else may book one session. Another person may activate a dynamic identity, receive feedback, attend events and enter a working relationship over time.</p>
          <div className="cards">
            <article className="card darkCard"><span>01 / VISITOR</span><h3>Explore without friction</h3><p>Read and understand the thinking without creating an account.</p></article>
            <article className="card darkCard"><span>02 / CONTACT</span><h3>Start with one interaction</h3><p>Leave basic contact data, register for an event or book a focused session.</p></article>
            <article className="card darkCard"><span>03 / MEMBER</span><h3>Opt into identity growth</h3><p>Activate evidence, feedback, resources and a richer professional journey.</p></article>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="eyebrow">Thinking</div>
        <h2>Ideas with structure, context and consequences.</h2>
        <p className="sectionLead">Articles, field notes, series and practical models across product, business, strategy, systems, organizational learning and AI.</p>
        <div className="articleGrid">
          {articles.map((item) => (
            <Link href={item.href} className="articleCard" key={item.title}>
              <div className={`articleArt ${item.tone}`} />
              <div><span className="tag">{item.tag}</span><h3>{item.title}</h3><p>Open article and editorial intelligence view.</p></div>
            </Link>
          ))}
        </div>
      </section>

      <section id="work" className="wrap section">
        <div className="eyebrow">Ways to work together</div>
        <h2>Start with the problem you actually have.</h2>
        <div className="cards">
          <article className="card"><span>PRODUCT</span><h3>Product clarity session</h3><p>Roadmap, discovery, prioritization and decision bottlenecks.</p><Link className="button secondary" href="/member">Book session</Link></article>
          <article className="card"><span>BUSINESS</span><h3>Business system review</h3><p>Business models, growth structure and cross-functional operating rhythm.</p><Link className="button secondary" href="/member">Book session</Link></article>
          <article className="card"><span>STORY</span><h3>Pitch deck and narrative</h3><p>Positioning, investor logic, customer narrative and decision-ready decks.</p><Link className="button secondary" href="/member">Book session</Link></article>
        </div>
      </section>

      <section id="events" className="wrap section">
        <div className="eyebrow">Events & community</div>
        <h2>High-context rooms, not noisy networking.</h2>
        <div className="cards">
          <article className="card"><span className="tag">Upcoming</span><h3>Founder–Operator Alignment Lab</h3><p>A working session around decision boundaries, expectations and collaboration risk.</p></article>
          <article className="card"><span className="tag">Future</span><h3>Curated Match Rooms</h3><p>Context-rich introductions for founders, operators, specialists and investors.</p></article>
          <article className="card"><span className="tag">Community</span><h3>Systems & Relationships Circle</h3><p>A selective community around better companies and better ways of working.</p></article>
        </div>
      </section>

      <footer className="footer wrap"><span>© 2026 SAINA OS</span><span>Structure creates freedom.</span></footer>
    </main>
  );
}
