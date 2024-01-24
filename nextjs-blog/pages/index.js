import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Achraf! I am studying computer science at 1337 which is part of the 42Network and I also do powerlifting as a serious hobby. You can find me on <a target="_blank" href="https://instagram.com/vxgxb0nd">Instagram</a></p>
        <p>
          (This is a sample website - you'll be building a site like this on {' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>)
        </p>
      </section>
    </Layout>
  )
}