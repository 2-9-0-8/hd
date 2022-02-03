import Head from 'next/head'
import { client } from '@client'
import { GetStaticPropsContext } from 'next'
import { getNextStaticProps } from '@faustjs/next'
import { Header, Footer } from '@components/includes'

export default function Layout(props) {
  const { useQuery } = client
  const generalSettings = useQuery().generalSettings

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="author" content={generalSettings.title} />
        <meta name="description" content={generalSettings.description} />

        <meta name="theme-color" content="#ffffff" />
          
        {/* <link rel="icon" href="favicon.svg" type="image/svg+xml" />
        <link rel="mask-icon" href="mask-icon.svg" color="#ffffff" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="manifest" href="manifest.json" /> */}

        <title>{props.title} - {generalSettings.title}</title>
      </Head>

      <Header />

      <main
        className="main-content">
        <div className="container">
          {props.children}
        </div>
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    client,
  })
}