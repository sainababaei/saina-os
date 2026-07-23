import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';

const homeArticles = [
  {
    tag: 'Strategy',
    title: 'The end of best practice',
    summary: 'Context and decision rights matter more than copied playbooks.',
    href: '/thinking/the-end-of-best-practices',
    cover: '/images/covers/the-end-of-best-practices.png',
  },
  {
    tag: 'Product',
    title: 'Build the system before you scale the team',
    summary: 'Growth amplifies structure — and the absence of it.',
    href: '/thinking/product-is-a-system-not-a-roadmap',
    cover: '/images/covers/product-is-a-system-not-a-roadmap.png',
  },
  {
    tag: 'Field note',
    title: 'When product problems are relationship problems',
    summary: 'Ownership and invisible coordination costs shape delivery.',
    href: '/thinking/when-product-problems-are-relationship-problems',
    cover: '/images/covers/when-product-problems-are-relationship-problems.png',
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="wrap hero">
          <div>
            <div className="eyebrow">
              Professional relationships, made legible
            </div>

            <h1>
              Build better work through better systems and better relationships.
            </h1>

            <p className="lead">
              SAINA OS is a curated space where people discover ideas, book
              focused help, join events, build an optional evidence-based
              professional profile and enter higher-quality professional
              relationships over time.
            </p>

            <div className="actions">
              <Link className="button primary" href="/join">
                Start with a conversation
              </Link>

              <Link className="button secondary" href="/thinking">
                Explore the thinking
              </Link>
            </div>
          </div>

          <div className="heroVisual">
            <img src="/saina-babaei-curator.png" alt="Saina Babaei" />
            <div className="curatorTag">
              Curated by Saina Babaei · Business Systems Designer
            </div>
          </div>
        </section>

        <section className="wrap miniGrid">
          <div className="mini">
            <b>Learn</b>
            <span>
              Practical thinking on product, business, systems and AI.
            </span>
          </div>

          <div className="mini">
            <b>Work</b>
            <span>
              Focused help for product, business, pitch decks and operating
              challenges.
            </span>
          </div>

          <div className="mini">
            <b>Grow</b>
            <span>
              An optional dynamic profile enriched by evidence and real
              interaction.
            </span>
          </div>
        </section>

        <section className="section dark">
          <div className="wrap">
            <div className="eyebrow">The system behind the experience</div>

            <h2>Not everyone needs the same depth of relationship.</h2>

            <p className="intro light">
              Read without friction. Book one conversation with minimal data.
              Activate a professional identity only when deeper participation
              becomes useful.
            </p>

            <div className="cards">
              <div className="card darkCard">
                <div className="no">01 / VISITOR</div>
                <h3>Explore without friction</h3>
                <p>
                  Read, search and understand the thinking without creating an
                  account.
                </p>
              </div>

              <div className="card darkCard">
                <div className="no">02 / CONTACT</div>
                <h3>Start with one interaction</h3>
                <p>
                  Leave basic contact details, book a session or register for an
                  event.
                </p>
              </div>

              <div className="card darkCard">
                <div className="no">03 / MEMBER</div>
                <h3>Opt into identity growth</h3>
                <p>
                  Receive feedback, unlock resources and build an evidence-based
                  journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section wrap">
          <div className="eyebrow">Thinking</div>

          <h2>Ideas with structure, context and consequences.</h2>

          <p className="intro">
            Articles, field notes, series, frameworks and practical models
            across product, business, strategy, systems and AI.
          </p>

          <div className="thinkingGrid">
            <article className="feature">
              <img
                className="featureArt"
                src="/images/covers/most-ai-teams-are-solving-the-wrong-memory-problem.png"
                alt="Most AI Teams Are Solving the Wrong Memory Problem"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              <div className="featureBody">
                <span className="tag">Featured series · Agentic AI</span>

                <h3>Conversation memory is not organizational learning</h3>

                <p className="muted">
                  Accepted corrections become useful only when they change
                  rules, checks, ownership and the next run.
                </p>

                <Link
                  className="button secondary"
                  href="/thinking/most-ai-teams-are-solving-the-wrong-memory-problem"
                >
                  Read article
                </Link>
              </div>
            </article>

            <div className="stack">
              {homeArticles.map((article) => (
                <Link
                  key={article.href}
                  className="articleCard"
                  href={article.href}
                >
                  <img
                    src={article.cover}
                    alt={article.title}
                    style={{
                      width: '142px',
                      height: '100%',
                      minHeight: '150px',
                      objectFit: 'cover',
                      display: 'block',
                      flexShrink: 0,
                    }}
                  />

                  <div>
                    <span className="tag">{article.tag}</span>
                    <h3>{article.title}</h3>
                    <p className="muted">{article.summary}</p>
                    <span className="textLink">Read article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="offers" className="section wrap">
          <div className="eyebrow">Ways to work together</div>

          <h2>Start with the problem you actually have.</h2>

          <div className="cards">
            <div className="card">
              <div className="no">PRODUCT</div>
              <h3>Product clarity session</h3>
              <p>Roadmaps, discovery, priorities and decision bottlenecks.</p>
              <Link className="button secondary" href="/join">
                Book session
              </Link>
            </div>

            <div className="card">
              <div className="no">BUSINESS</div>
              <h3>Business system review</h3>
              <p>Business models, growth structure and operating rhythm.</p>
              <Link className="button secondary" href="/join">
                Book session
              </Link>
            </div>

            <div className="card">
              <div className="no">STORY</div>
              <h3>Pitch deck and narrative</h3>
              <p>Positioning, investor logic and decision-ready stories.</p>
              <Link className="button secondary" href="/join">
                Book session
              </Link>
            </div>
          </div>
        </section>

        <section id="events" className="section wrap">
          <div className="eyebrow">Events & community</div>

          <h2>High-context rooms, not noisy networking.</h2>

          <div className="cards">
            <div className="card">
              <span className="tag">Upcoming</span>
              <h3>Founder–Operator Alignment Lab</h3>
              <p>
                A working session to surface decision boundaries and
                collaboration risks.
              </p>
              <Link className="button primary" href="/join">
                Apply to attend
              </Link>
            </div>

            <div className="card">
              <span className="tag">Future</span>
              <h3>Curated Match Rooms</h3>
              <p>
                Context-rich introductions for founders, operators and
                specialists.
              </p>
            </div>

            <div className="card">
              <span className="tag">Community</span>
              <h3>Systems & Relationships Circle</h3>
              <p>
                A selective community for building better companies and better
                ways of working.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© 2026 SAINA OS</span>
        <span>Structure creates freedom.</span>
      </footer>
    </>
  );
}
