import './globals.css';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sainababaei.com'),
  title: { default: 'SAINA OS', template: '%s · SAINA OS' },
  description: 'A curated professional relationship operating system for ideas, focused help, dynamic identity, events and high-context introductions.',
  openGraph: {
    title: 'SAINA OS',
    description: 'Professional relationships, made legible.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
