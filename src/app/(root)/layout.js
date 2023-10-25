import React from 'react';
import '../globals.css';
import { Inter } from 'next/font/google';
import TopBar from '../../components/shared/TopBar';
import LeftBar from '../../components/shared/LeftBar';
import RightBar from '../../components/shared/RightBar';
import BottomBar from '../../components/shared/BottomBar';
import { Providers } from "../../redux/provider";
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
            <div>{children}</div>      
      </body>
        </Providers>
    </html>
  );
}
