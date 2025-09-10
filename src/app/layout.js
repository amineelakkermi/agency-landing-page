import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Providers } from './components/providers';
import './globals.css'
export const metadata = {
  title: "Template",
  description: "تنطلق 'تخليد' من فكرة أن المملكة ذات موروث تاريخي وثقافي عظيم يستحق إعادة إخراجه من الكتب والذاكرة وتجسيده بشكل فني قادر على العبور محليا وعالمياً.",
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '16x16 32x32 48x48 64x64'
      }
    ]
  }
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
  );
}
