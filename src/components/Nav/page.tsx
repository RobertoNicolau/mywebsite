import Link from 'next/link'

import styles from './page.module.css'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href={'/'} legacyBehavior>
        <a className={styles.arrow + ' ' + styles.left}>
          <ArrowLeft size={32} />{' '}
        </a>
      </Link>
      <Link href={'/technologies'} legacyBehavior>
        <a className={styles.arrow + ' ' + styles.right}>
          <ArrowRight size={32} />{' '}
        </a>
      </Link>
    </nav>
  )
}
