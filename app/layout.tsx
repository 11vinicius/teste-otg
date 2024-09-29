import './globals.css';
import '@/node_modules/react-modal-video/scss/modal-video.scss';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Loading from './components/Loading/index';


export const metadata = {
  title: 'Chat',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Loading/>
        <div className='h-full'>
         {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
