import { getNextStaticProps, is404 } from '@faustjs/next'
import { Posts, Pagination } from '@components/includes'
import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { client } from '@client'
import Layout from '@components/layouts/Layout'

export default function Page() {
  const { usePosts, useCategory } = client
  const { query = {} } = useRouter()
  const { categorySlug } = query
  const category = useCategory()
  const posts = usePosts()

  return (
    <Layout
      title={category?.name}
    >
      <h1 className="sr-only">
        {category?.name}
      </h1>
      
      <Posts posts={posts.nodes} />

      <Pagination
        pageInfo={posts.pageInfo}
        basePath={`/archive/category/${categorySlug}`}
      />
    </Layout>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
    notFound: await is404(context, { client }),
  })
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
