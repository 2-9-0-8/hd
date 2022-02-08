import Layout from '@components/layouts/Layout'
import { getNextServerSideProps, is404 } from '@faustjs/next'
import { GetServerSidePropsContext } from 'next'
import { client } from '@client'
import styles from '@styles/modules/Post.module.css'
import { CategoryNav } from '@components/includes'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const MovePost = dynamic(
  () => import('@components/includes/MovePost'),
  { loading: () => <p>Loading...</p> }
)

export default function Page() {
  const { usePost } = client
  const post = usePost()

  return (
    <>
      <Layout
        title={post?.title()}
      >        
        <CategoryNav />

        <article className={styles.post}>
          <div className={styles.image}>
            <img
              src={post?.featuredImage?.node?.sourceUrl()}
              alt={post?.featuredImage?.node?.altText}
              width={post?.featuredImage?.node?.mediaDetails?.width}
              height={post?.featuredImage?.node?.mediaDetails?.height}
              //objectFit="contain"
            />
          </div>
          <div className={styles.content}>
            <h1>{post?.title()}</h1>
            <div dangerouslySetInnerHTML={{ __html: post?.content() ?? '' }} />
          </div>
        </article>
        
        <MovePost />
      </Layout>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return getNextServerSideProps(context, {
    Page,
    client,
    notFound: await is404(context, { client }),
  })
}