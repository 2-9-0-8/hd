import Link from 'next/link'
import { client } from '@client'
import { useRouter } from 'next/router'
import styles from '@styles/modules/MovePost.module.css'
import btoa from 'btoa'

export default function MovePost() {
  const { usePost } = client
  const post = usePost()
  const { query = {} } = useRouter()
  const { categorySlug } = query
  const { posts } = client.useQuery()
  const currentPaginationCursor = btoa( `arrayconnection:${post.databaseId}` )

  const previous = posts({
    first: 1,
    before: currentPaginationCursor,
    where: { categoryName: `${categorySlug}` },
  }).nodes[0]?.slug

  const next = posts({
    first: 1,
    after: currentPaginationCursor,
    where: { categoryName: `${categorySlug}` },
  }).nodes[0]?.slug

  return (
    <nav className={styles.move}>
      { previous && 
        <Link href={`/archive/${categorySlug}/${previous}`}>
          <a className={styles.previous}>
            <span>
              <svg width="25" xmlns="http://www.w3.org/2000/svg" height="25" fill="black" viewBox="0 0 6.3499999 6.3500002">
                <g id="layer1" transform="translate(0 -290.65)">
                  <path id="path9429" d="m2.2580394 291.96502a.26460982.26460982 0 0 0 -.1741496.46871l1.6190225 1.38699-1.6190225 1.38648a.26460982.26460982 0 1 0 .3436483.40049l1.8536335-1.58595a.26460982.26460982 0 0 0 0-.40256l-1.8536335-1.5875a.26460982.26460982 0 0 0 -.1694987-.0667z" />
                </g>
              </svg>
            </span>
            Previous
          </a>
        </Link>
      }

      { next && 
        <Link href={`/archive/${categorySlug}/${next}`}>
          <a className={styles.next}>
            Next
            <span>
              <svg width="25" xmlns="http://www.w3.org/2000/svg" height="25" fill="black" viewBox="0 0 6.3499999 6.3500002">
                <g id="layer1" transform="translate(0 -290.65)">
                  <path id="path9429" d="m2.2580394 291.96502a.26460982.26460982 0 0 0 -.1741496.46871l1.6190225 1.38699-1.6190225 1.38648a.26460982.26460982 0 1 0 .3436483.40049l1.8536335-1.58595a.26460982.26460982 0 0 0 0-.40256l-1.8536335-1.5875a.26460982.26460982 0 0 0 -.1694987-.0667z" />
                </g>
              </svg>
            </span>
          </a>
        </Link>
      }
    </nav>
  )
}