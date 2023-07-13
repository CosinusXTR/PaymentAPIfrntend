import { Inter } from 'next/font/google'
import Header from '@/Components/header/header'
import Footer from '@/Components/footer/footer'
import Form from '@/Components/form/form'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Payment Page',
  description: 'Electra Web Payment Page for all methods',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        <header className={inter.className}>
          <Header />
        </header>
        <Form/>
        <footer className={inter.className}>
     
        </footer>
      </body>
    </html>
  )
}
