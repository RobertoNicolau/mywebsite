"use client";
import styles from "./page.module.css";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export default function Social() {
  return (
    <div className={styles.social}>
      <a
        className={styles.socialLink}
        href="https://github.com/RobertoNicolau"
        target="_blank"
      >
        <GithubLogo size={32} />
      </a>
      <a
        className={styles.socialLink}
        href="https://www.linkedin.com/in/roberto-la-nicolau/"
        target="_blank"
      >
        <LinkedinLogo size={32} />
      </a>
      <a
        className={styles.socialLink}
        href="https://instagram.com/roberto_la_nicolau"
        target="_blank"
      >
        <InstagramLogo size={32} />
      </a>
    </div>
  );
}
