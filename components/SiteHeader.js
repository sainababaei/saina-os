import Link from 'next/link';
export default function SiteHeader(){
  return <header className="topbar">
    <Link className="brand" href="/">SAINA OS</Link>
    <nav className="nav">
      <Link href="/thinking">Thinking</Link>
      <Link href="/#offers">Ways to work</Link>
      <Link href="/#events">Events</Link>
      <Link href="/member">Member space</Link>
    </nav>
    <Link className="button primary" href="/join">Join / Book a session</Link>
  </header>
}
