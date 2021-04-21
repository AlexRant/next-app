import Head from 'next/head'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis pariatur tempora sit veniam libero voluptatum perspiciatis nesciunt maiores sunt obcaecati tenetur doloribus odio, fugiat veritatis facilis omnis alias magni quibusdam!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis pariatur tempora sit veniam libero voluptatum perspiciatis nesciunt maiores sunt obcaecati tenetur doloribus odio, fugiat veritatis facilis omnis alias magni quibusdam!</p>
      <Link href="/users">
        <a className={styles.btn}>See User Listing</a>
      </Link>
    </div>
  )
}
