import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import { getAllArticles, estimateReadingTime } from '@/lib/articles';

export const metadata = {
  title: 'Thinking | SAINA OS',
  description:
    'Working ideas on AI, product strategy, organizational learning and professional relationships.',
};

function getCover(article) {
  return article.cover || `/images/covers/${article.slug}.png`;
}

export default function Thinking() {
  const articles = getAllArticles();
  const featured =
    articles.find((article) => article.featured) || articles[0];

  const rest = articles.filter(
    (article) => article.slug !== featured?.slug
  );

  return (
    <>
      <SiteHeader />

      <main className="wrap pagePad thinkingPage">
        <div className="eyebrow">Thinking</div>

        <h1 className="pageTitle">
          Ideas are drafts. Systems are conversations.
        </h1>

        <p className="lead">
          A growing collection of essays, frameworks and field notes on AI,
          product strategy, organizational learning and professional
          relationships.
        </p>

        {featured && (
          <section className="thinkingFeatured">
            <img
              className="featureArt"
              src={getCover(featured)}
              alt={featured.title}
              loading="eager"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />

            <div className="featureBody">
              <span className="tag">
                Featured · {featured.category}
              </span>

              <h2>{featured.title}</h2>

              <p>{featured.description}</p>

              <div className="articleMeta">
                {featured.date} ·{' '}
                {featured.readingTime ||
                  estimateReadingTime(featured.content)}{' '}
                min read
              </div>

              <Link
                className="button primary"
                href={`/thinking/${featured.slug}`}
              >
                Read essay
              </Link>
            </div>
          </section>
        )}

        <section className="articleArchive">
          <div className="sectionHeading">
            <div>
              <div className="eyebrow">Archive</div>
              <h2>Latest thinking</h2>
            </div>

            <span>{articles.length} pieces</span>
          </div>

          <div className="articleGrid">
            {rest.map((article) => (
              <Link
                className="articleArchiveCard"
                href={`/thinking/${article.slug}`}
                key={article.slug}
              >
                <img
                  src={getCover(article)}
                  alt={article.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    aspectRatio: '16 / 9',
                    objectFit: 'cover',
                    display: 'block',
                    borderRadius: '18px',
                    marginBottom: '18px',
                  }}
                />

                <div className="articleArchiveTop">
                  <span className="tag">{article.category}</span>
                  <span>{article.date}</span>
                </div>

                <h3>{article.title}</h3>

                <p>{article.description}</p>

                <div className="articleArchiveBottom">
                  <span>
                    {article.readingTime ||
                      estimateReadingTime(article.content)}{' '}
                    min read
                  </span>

                  <span>Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
