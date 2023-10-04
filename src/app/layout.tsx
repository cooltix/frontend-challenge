import './globals.css';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { ApolloWrapper } from '@/utils/ApolloProvider';

const font = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cooltix',
  description: 'Cooltix demo project',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
