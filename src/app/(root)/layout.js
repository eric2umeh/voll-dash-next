import React from 'react';
import '../globals.css';
import { Inter } from 'next/font/google';
import TopBar from '../../components/shared/TopBar';
import LeftBar from '../../components/shared/LeftBar';
import RightBar from '../../components/shared/RightBar';
import BottomBar from '../../components/shared/BottomBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Volla',
  description: 'Volla Dashboard App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />

        <main className="flex flex-row">
          <LeftBar />
          <section className="main-container">
            <div className="w-full max-w-4xl">{children}</div>
          </section>
          {/* @ts-ignore */}
          <RightBar />
        </main>

        <BottomBar />
      </body>
    </html>
  );
}
