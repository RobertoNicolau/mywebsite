"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { ArrowLeft } from "phosphor-react";

export default function About() {
  return (
    <>
      <Link href={"/"} legacyBehavior>
        <a className={styles.back}>
          <button>
            <ArrowLeft size={32} />{" "}
          </button>
        </a>
      </Link>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Sobre Mim</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et omnis
            amet sunt vel ipsum nihil architecto suscipit at, non molestias
            aspernatur accusamus fuga praesentium provident? Saepe aliquam esse
            quae hic?
          </p>
        </div>
      </main>
    </>
  );
}
