import Layout from '@components/layouts/Layout'
import { GetStaticPropsContext } from 'next'
import { getNextStaticProps } from '@faustjs/next'
import { client } from 'client'
import Link from 'next/link'
import { Posts } from '@components/includes'

export default function Archive() {
  const { usePosts } = client
  const posts = usePosts({
    first: 39,
  })

  return (
    <Layout
      title="Archive"
    >
      <h1 className="sr-only">
        Archive
      </h1>
      
      <Posts posts={posts.nodes} />
    </Layout>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: Archive,
    client,
  })
}