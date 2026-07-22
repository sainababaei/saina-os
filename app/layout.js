import './globals.css';

export const metadata = {
  title: 'SAINA OS — Professional relationships, made legible',
  description: 'A curated professional ecosystem for ideas, focused work, dynamic identity, events and relationship intelligence.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
