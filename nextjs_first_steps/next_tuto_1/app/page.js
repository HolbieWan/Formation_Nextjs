"use client"
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/">Home</Link>
        <Link href="/cv">CV</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/jeux">Jeux</Link>
        <Link href="/test-api">Test-API</Link>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
