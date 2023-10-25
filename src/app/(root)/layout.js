import React from 'react';
import '../globals.css';
import { Inter } from 'next/font/google';
import TopBar from '../../components/shared/TopBar';
import LeftBar from '../../components/shared/LeftBar';
import RightBar from '../../components/shared/RightBar';
import BottomBar from '../../components/shared/BottomBar';
import { Providers } from "../../redux/provider";
import Login from '../auth/Login';
import Verify from '../auth/Verify';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Volla',
  description: 'Volla Dashboard App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
      <body className={inter.className}>
        {/* <TopBar /> */}
<Verify/>
        {/* <main className="flex flex-row">
          <LeftBar />
          <section className="main-container">
            <div className="w-full max-w-4xl">{children}</div>
          </section> */}
          {/* @ts-ignore */}
          {/* <RightBar /> */}
        {/* </main> */}

        <BottomBar />
      </body>
        </Providers>
    </html>
  );
}
