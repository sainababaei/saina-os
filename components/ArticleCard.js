import Link from 'next/link';
export default function ArticleCard({tag,title,summary,tone='violet'}){
 return <article className="articleCard"><div className={`thumb ${tone}`}></div><div><span className="tag">{tag}</span><h3>{title}</h3><p className="muted">{summary}</p><Link href="/thinking/article" className="textLink">Read article →</Link></div></article>
}
