import Layout from '@components/layouts/Layout'
import { getNextStaticProps, is404 } from '@faustjs/next'
import { GetStaticPropsContext } from 'next'
import { client, Page as PageType } from '@client'

export interface PageProps {
  page: PageType | PageType['preview']['node'] | null | undefined
}

export function PageComponent({ page }: PageProps) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings

  return (
    <Layout
      title={page?.title()}
    >
      <article>
        <div dangerouslySetInnerHTML={{ __html: page?.content() ?? '' }} />
      </article>
    </Layout>
  )
}

export default function Page() {
  const { usePage } = client
  const page = usePage()

  return <PageComponent page={page} />
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
