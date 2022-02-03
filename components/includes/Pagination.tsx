import Link from 'next/link'
import type { WPPageInfo } from '@client'
import styles from '@styles/modules/Pagination.module.css'

interface NextPageNavigationProps {
  href: string;
}

function NextPageNavigation(props: NextPageNavigationProps) {
  return (
    <Link href={props.href}>
      <a aria-label={'Next page'}>Next Page →</a>
    </Link>
  );
}

interface PreviousPageNavigationProps {
  href: string;
}

function PreviousPageNavigation(props: PreviousPageNavigationProps) {
  return (
    <Link href={props.href}>
      <a aria-label={'Previous page'}>← Previous Page</a>
    </Link>
  );
}

export interface PaginationProps {
  pageInfo: WPPageInfo;
  basePath: string;
}

export default function Pagination({ pageInfo, basePath }: PaginationProps) {
  const previousPageUrl = `${basePath}/before/${pageInfo?.startCursor}`;
  const nextPageUrl = `${basePath}/after/${pageInfo?.endCursor}`;

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <ul>
        {pageInfo.hasPreviousPage && (
          <li>
            <PreviousPageNavigation href={previousPageUrl} />
          </li>
        )}

        {pageInfo.hasNextPage && (
          <li>
            <NextPageNavigation href={nextPageUrl} />
          </li>
        )}
      </ul>
    </nav>
  )
}
