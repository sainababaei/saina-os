import Link from 'next/link';
const links=[['/member','Dashboard'],['/member#identity','Dynamic identity'],['/member#journey','Journey'],['/member#feedback','Feedback'],['/member#resources','Resources'],['/member#match','Matchmaking'],['/admin/people','Admin · People'],['/admin/editorial','Admin · Editorial'],['/admin/agents','Admin · Agents']];
export default function AppShell({title,eyebrow='Prototype workspace',children}){
 return <div className="appShell"><aside className="sidebar"><Link href="/" className="brand sideBrand">SAINA OS</Link><nav className="sideNav">{links.map(([h,l])=><Link key={h+l} href={h}>{l}</Link>)}</nav><Link className="button secondary darkButton" href="/">Back to public site</Link></aside><main className="appMain"><div className="appTop"><div><div className="muted">{eyebrow}</div><h1 className="appTitle">{title}</h1></div><img className="avatar" src="/saina-babaei-curator.png" alt="Saina Babaei"/></div>{children}</main></div>
}
