import './styles/globals.css'
import { Providers } from './components/providers'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export const metadata = {
  title: "Agency Landing Page",
  description:
    "A modern and fast landing page template built with Next.js and Tailwind CSS, perfect for startups, agencies, and freelancers to showcase their services in a professional and attractive way.",
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '16x16 32x32 48x48 64x64',
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <body className="antialiased transition-colors duration-300">
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
