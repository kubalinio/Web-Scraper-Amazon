
import ClientProvider from '../components/ClientProvider'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className='flex bg-[#F7FBFF] h-screen'>
        <ClientProvider>

          <Sidebar />

          <main className='w-full p-10 mx-auto overflow-y-auto max-w-7xl'>
            <Header />
            {children}
          </main>

        </ClientProvider>
      </body>
    </html>
  )
}
