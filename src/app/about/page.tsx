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
        <div className={styles.center}>
          <h1>Sobre Mim</h1>
          <p>Roberto é um jovem apaixonado por tecnologia desde criança.</p>
        </div>
      </main>
    </>
  );
}
