import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import Navbar from './components/navbar/Navbar'
import ToasterProvider from './providers/ToasterProvider'
import './globals.css'
import getCurrentUser from './actions/getCurrentUser'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone created with Next.js',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang='en'>
      <body>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
