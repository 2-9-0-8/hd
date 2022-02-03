import Layout from '@components/layouts/Layout'
import { getNextStaticProps } from '@faustjs/next'
import { GetStaticPropsContext } from 'next'
import { client, PageIdType } from 'client'
import styles from '@styles/modules/Home.module.css'
import { Animate } from 'react-simple-animate'

export default function Home() {
  const { usePage } = client
  const page = usePage({
    id: '/',
    idType: PageIdType.URI,
  })

  return (
    <Layout
      title={page?.title()}
    >
      <div className={styles['home']}>
        <article className={styles.hi}>
          <Animate play delay={0.25} duration={3} start={{ opacity: 0 }} end={{ opacity: 1 }}>
            <div dangerouslySetInnerHTML={{ __html: page?.content() }} />
          </Animate>
        </article>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: Home,
    client,
  })
} 