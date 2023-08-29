'use client'
import styles from './page.module.css'
import Link from 'next/link'
import { ArrowLeft } from 'phosphor-react'

export default function Experiences() {
  return (
    <>
      <Link href={'/'} legacyBehavior>
        <a className={styles.back}>
          <button>
            <ArrowLeft size={32} />{' '}
          </button>
        </a>
      </Link>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Pera que ainda não tá pronto</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            qui illo provident obcaecati voluptatum facere et! Sunt, ea tempora?
            Possimus natus reprehenderit totam doloremque eius? Rem, placeat?
            Earum, perspiciatis expedita?
          </p>
        </div>
      </main>
    </>
  )
}
