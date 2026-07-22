import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '@/components/SiteHeader';
import { getAllArticles, getArticleBySlug, estimateReadingTime } from '@/lib/articles';

export function generateStaticParams() {
  return getAllArticles().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const canonical = `https://sainababaei.com/thinking/${slug}`;
  return {
    title: `${article.title} | SAINA OS`,
    description: article.description,
    alternates: { canonical },
    openGraph: { title: article.title, description: article.description, type: 'article', url: canonical },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  const related = getAllArticles().filter((item) => item.slug !== slug && item.tags?.some((tag) => article.tags?.includes(tag))).slice(0, 3);
  const canonical = `https://sainababaei.com/thinking/${slug}`;
  const schema = {
    '@context': 'https://schema.org', '@type': 'Article', headline: article.title,
    description: article.description, datePublished: article.date, dateModified: article.updated || article.date,
    author: { '@type': 'Person', name: 'Saina Babaei' }, mainEntityOfPage: canonical,
  };

  return <><SiteHeader/><main className="articlePage wrap">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <Link href="/thinking" className="backLink">← Back to Thinking</Link>
    <header className="articleHeader">
      <span className="tag">{article.category}</span>
      <h1>{article.title}</h1>
      <p className="articleDek">{article.description}</p>
      <div className="articleMeta">By Saina Babaei · {article.date} · {article.readingTime || estimateReadingTime(article.content)} min read</div>
      <div className="tagRow">{article.tags?.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </header>
    <article className="articleBody" dangerouslySetInnerHTML={{ __html: article.html }} />
    <section className="articleCTA"><div><div className="eyebrow">Continue the journey</div><h2>Turn the idea into a working decision.</h2><p>Book a focused conversation, explore a related essay, or join the evolving SAINA OS network.</p></div><div className="actions"><Link className="button primary" href="/join">Start a conversation</Link><Link className="button secondary" href="/thinking">Explore more ideas</Link></div></section>
    {related.length > 0 && <section className="relatedArticles"><div className="eyebrow">Related thinking</div><div className="articleGrid">{related.map((item) => <Link className="articleArchiveCard" href={`/thinking/${item.slug}`} key={item.slug}><span className="tag">{item.category}</span><h3>{item.title}</h3><p>{item.description}</p></Link>)}</div></section>}
  </main></>;
}
