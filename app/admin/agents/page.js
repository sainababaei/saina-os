import AppShell from '@/components/AppShell';
export const metadata={title:'Admin agents'};
const agents=[['Content agent','Creates briefs, drafts, metadata and repurposed formats.','Human approval required'],['Editorial agent','Audits tone, sourcing, claims, SEO, AEO and GEO.','Cannot publish'],['CRM agent','Summarizes interaction history and suggests follow-ups.','Cannot send messages'],['Matchmaking agent','Ranks introductions using goals, evidence and context.','Curator approval required']];
export default function Agents(){return <AppShell title="Admin · AI agents" eyebrow="AI-ready layer"><div className="grid2">{agents.map(a=><div className="panel agentPanel" key={a[0]}><h3>{a[0]}</h3><p className="muted">{a[1]}</p><span className="tag">{a[2]}</span></div>)}</div></AppShell>}
