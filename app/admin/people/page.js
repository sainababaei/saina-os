import AppShell from '@/components/AppShell';
import { getSupabaseAdminClient } from '@/lib/supabase-admin';

export const metadata = { title: 'Admin people' };
export const dynamic = 'force-dynamic';

function getInitials(name) {
  return name
    .split(/s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function formatDate(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return '—';
  }

  return new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

function formatStage(stage) {
  return stage.charAt(0).toUpperCase() + stage.slice(1);
}

export default async function People() {
  let people = [];
  let loadError = '';

  try {
    const supabase = getSupabaseAdminClient();
    const { data, error } = await supabase
      .from('people')
      .select('id,full_name,email,phone,stage,created_at')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    people = data || [];
  } catch (error) {
    console.error('Unable to load people:', error);
    loadError = 'People could not be loaded. Check the Supabase configuration.';
  }

  const leads = people.filter((person) => person.stage === 'lead').length;
  const members = people.filter((person) => person.stage === 'member').length;
  const clients = people.filter((person) => person.stage === 'client').length;

  return (
    <AppShell title="Admin · People & relationships" eyebrow="Relationship OS">
      <div className="grid3">
        <div className="panel">
          <div className="muted">Leads</div>
          <div className="metric">{leads}</div>
          <small>New applications</small>
        </div>
        <div className="panel">
          <div className="muted">Members</div>
          <div className="metric">{members}</div>
          <small>Active profiles</small>
        </div>
        <div className="panel">
          <div className="muted">Clients</div>
          <div className="metric">{clients}</div>
          <small>Active working relationships</small>
        </div>
      </div>

      <div className="panel spaceTop">
        <div className="filterBar">
          <button type="button">All people</button>
        </div>

        {loadError ? <p className="muted">{loadError}</p> : null}

        {!loadError && people.length === 0 ? (
          <p className="muted">No people yet.</p>
        ) : null}

        {!loadError
          ? people.map((person) => (
              <div className="person" key={person.id}>
                <div className="personMain">
                  <div className="initial">
                    {getInitials(person.full_name || 'Unknown')}
                  </div>
                  <div>
                    <b>{person.full_name || 'Unnamed person'}</b>
                    <div className="muted">
                      Email: {person.email || '—'} · Phone: {person.phone || '—'}
                    </div>
                    <small>{formatDate(person.created_at)}</small>
                  </div>
                </div>
                <span className="tag">{formatStage(person.stage)}</span>
              </div>
            ))
          : null}
      </div>
    </AppShell>
  );
}
import AppShell from '@/components/AppShell';
export const metadata={title:'Admin people'};
const people=[['AR','Arman Rezaei','Lead · phone only · event interest','Follow up'],['NS','Niloofar Shahri','Profile active · product operator','Member'],['MK','Mehdi Karimi','Client · pitch deck engagement','Active']];
export default function People(){return <AppShell title="Admin · People & relationships" eyebrow="Relationship OS"><div className="grid3"><div className="panel"><div className="muted">Leads</div><div className="metric">42</div><small>Phone/basic contact only</small></div><div className="panel"><div className="muted">Contacts</div><div className="metric">28</div><small>Profile or richer context</small></div><div className="panel"><div className="muted">Clients</div><div className="metric">11</div><small>Active working relationship</small></div></div><div className="panel spaceTop"><div className="filterBar"><button>All</button><button>Leads</button><button>Contacts</button><button>Profiles</button><button>Clients</button></div>{people.map(p=><div className="person" key={p[1]}><div className="personMain"><div className="initial">{p[0]}</div><div><b>{p[1]}</b><div className="muted">{p[2]}</div></div></div><span className="tag">{p[3]}</span></div>)}</div><div className="grid2 spaceTop"><div className="panel"><h3>Selected person · Niloofar</h3><label>Private meeting note</label><textarea rows="5" defaultValue="Strong systems intuition. Needs clearer execution ownership."/><button className="button primary">Save note</button></div><div className="panel"><h3>Observed capabilities</h3><div className="chips"><span>Systems thinking</span><span>Product judgment</span></div><label>Propose profile feedback</label><textarea rows="5" defaultValue="You consistently separate structural problems from feature-level symptoms."/><button className="button secondary">Send for member consent</button></div></div></AppShell>}
