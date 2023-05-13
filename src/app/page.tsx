import Social from "@/components/Social";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Social />
        <div className={styles.theme}>Powered By NextJs</div>
      </header>
      <div className={styles.description}>
        <h1>Olá, visitante!</h1>
        <p>
          Meu nome é Roberto Nicolau, sou desenvolvedor web com foco em
          front-end
        </p>
      </div>

      <div className={styles.grid}>
        <Link legacyBehavior href="/about">
          <a className={styles.card} target="" rel="noopener noreferrer">
            <h2>Sobre mim</h2>
            <p>
              Uma breve introdução sobre mim e como escolhi a área de tecnologia
            </p>
          </a>
        </Link>
        <Link legacyBehavior href="/about">
          <a className={styles.card} target="" rel="noopener noreferrer">
            <h2>Tecnologias</h2>
            <p>
              Uso ferramentas do ecossistema Javascript que me ajudam a
              desenvolver sites modernos{" "}
            </p>
          </a>
        </Link>
        <Link legacyBehavior href="/about">
          <a className={styles.card} target="" rel="noopener noreferrer">
            <h2>Projetos</h2>
            <p>
              Alguns do sites que criei desde que iniciei na jornada de
              programação{" "}
            </p>
          </a>
        </Link>
        <Link legacyBehavior href="/about">
          <a className={styles.card} target="" rel="noopener noreferrer">
            <h2>Experiência</h2>
            <p>
              Minha experiencia na área de tecnologia antes de ser desenvolvedor
            </p>
          </a>
        </Link>
      </div>
    </main>
  );
}
