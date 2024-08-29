import './globals.css';
import { Inter, Manrope } from 'next/font/google';
import { cx } from "../utils/index";
import Header from "@/src/components/Header";
import Footer from './../components/Footer/Footer';

const inter = Inter({ subsets: ['latin'], display: "swap", variable: "--font-im" })
const manrope = Manrope({ subsets: ['latin'], display: "swap", variable: "--font-mr"  })

export const metadata = {
  title: 'PopCultureQuest',
  description: 'Created with NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      className={cx(inter.variable, manrope.variable, "font-mr bg-light dark:bg-dark")}
      ><Header />{children}<Footer /></body>
    </html>
  )
}
