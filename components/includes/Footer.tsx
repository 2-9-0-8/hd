import { GetStaticPropsContext } from 'next'
import { getNextStaticProps } from '@faustjs/next'
import { client, MenuLocationEnum } from '@client'
import styles from '@styles/modules/Footer.module.css'

const Footer = () => {
  const { menuItems } = client.useQuery()
  const links = menuItems({
    where: { location: MenuLocationEnum.FOOTER },
  }).nodes
  
  const year = new Date().getFullYear()

  return (
    <footer className="main-footer">
      <div className="container">
        <div className={styles['footer-content']}>
          <nav>
            <ul className={styles['about-links']}>
              {links?.map((link) => (
                <li key={`${link.label}$-menu`}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>

            <ul className={styles['social-links']}>
              <li>
                Say hi
              </li> 

              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="27.52" height="27.53" viewBox="0 0 27.52 27.53">
                    <path d="M13.77 6.69a7.07 7.07 0 1 0 7.06 7.07 7.07 7.07 0 0 0-7.06-7.07Zm0 11.65a4.59 4.59 0 1 1 4.58-4.58 4.58 4.58 0 0 1-4.58 4.58Z" data-name="Path 19"/>
                    <path d="M19.44.09C16.9 0 10.64 0 8.1.09a8.23 8.23 0 0 0-5.78 2.22C-.32 5 0 8.53 0 13.76s-.28 8.83 2.32 11.44 6.28 2.31 11.45 2.31 7.13 0 9-.72a7.53 7.53 0 0 0 4.66-7.36c.12-2.54.11-8.8 0-11.34a7.59 7.59 0 0 0-7.15-8 6 6 0 0 0-.85 0Zm4 23.36C21.7 25.19 19.29 25 13.72 25c-5.73 0-8 .08-9.71-1.6-1.93-1.92-1.58-5-1.58-9.69 0-6.34-.64-10.9 5.72-11.23 1.46 0 1.89-.07 5.57-.07 6.11 0 10.91-.64 11.2 5.72.07 1.45.08 1.88.08 5.55 0 5.67.11 8-1.6 9.7Z" data-name="Path 20"/>
                    <circle cx="21.11" cy="6.42" r="1.65" data-name="Ellipse 44"/>
                  </svg>
                </a>
              </li>

              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23.53" height="23.51" viewBox="0 0 23.53 23.51">
                    <path d="M23.53 23.51v-8.62c0-4.22-.91-7.47-5.84-7.47A5.11 5.11 0 0 0 13.08 10H13V7.81H8.34v15.7h4.87v-7.77c0-2.05.39-4 2.92-4s2.54 2.34 2.54 4.16v7.64Z" data-name="Path 21"/>
                    <path d="M.42 7.81h4.87v15.7H.42Z" data-name="Path 22"/>
                    <path d="M2.85 0a2.84 2.84 0 1 0 2.82 2.85A2.82 2.82 0 0 0 2.85 0Z" data-name="Path 23"/>
                  </svg>
                </a>
              </li>

              <a href="#">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="27.52" height="22.36" viewBox="0 0 27.52 22.36">
                    <path d="M24.7 5.58a11.23 11.23 0 0 0 2.82-2.93 11.79 11.79 0 0 1-3.25.89A5.63 5.63 0 0 0 26.76.42a11.3 11.3 0 0 1-3.58 1.37 5.64 5.64 0 0 0-9.76 3.85 5.54 5.54 0 0 0 .13 1.29A16 16 0 0 1 1.92 1a5.64 5.64 0 0 0 1.73 7.57 5.57 5.57 0 0 1-2.55-.7v.07a5.66 5.66 0 0 0 4.52 5.54 5.67 5.67 0 0 1-1.48.19 5.46 5.46 0 0 1-1.07-.1 5.69 5.69 0 0 0 5.28 3.93 11.39 11.39 0 0 1-7 2.4A10.18 10.18 0 0 1 0 19.83a15.92 15.92 0 0 0 8.66 2.53A16 16 0 0 0 24.72 6.53c0-.32-.01-.64-.02-.95Z" data-name="twitter"/>
                  </svg>
                </li>
              </a>
            </ul>
          </nav>

          <p className={styles.copyright}>Helena Traill © {year}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    client,
  })
}