'use client'
import Nav from '@/components/Nav/page'
import styles from './page.module.css'

export default function About() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.about}>
          <h1>Sobre mim</h1>
          <div className={styles.description}>
            <p>
              Sou Roberto Nicolau, tenho 23 anos e moro em São José do Rio Preto
              - SP
            </p>
            <br />
            <p>
              Desde mais novo sempre tive interesse pela área de tecnologia. Aos
              14 anos tive meu primeiro contato com o mundo da programação, e
              criei meu primeiro site usando as tecnologias que aprendi na época
              (Adobe Flash Professional e Dreamweaver).
            </p>
            <br />

            <p>
              Anos depois quando comecei na faculdade de informática para
              negócios em 2018 comecei a focar na programação e venho me
              especializando nisso desde então.
            </p>
          </div>
        </section>
        <br />
        <Nav />
      </main>
    </>
  )
}
