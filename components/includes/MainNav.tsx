import Link from 'next/link'
import { GetStaticPropsContext } from 'next'
import { getNextStaticProps } from '@faustjs/next'
import { client, MenuLocationEnum } from '@client'
import styles from '@styles/modules/MainNav.module.css'

const MainNav = () => {
  const { menuItems } = client.useQuery()
  const links = menuItems({
    where: { location: MenuLocationEnum.PRIMARY },
  }).nodes

  return (
    <>
      <nav>
        <ul className={styles['main-nav']}>
          {links?.map((link) => (
            <li key={`${link.label}$-menu`}>
              <Link href={link.url ?? ''}>
                <a>{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default MainNav

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    client,
  })
}