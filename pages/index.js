import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keyword' content='Homepage'/>
        <meta name='author' content='Akram Sakib'/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, error
          deleniti a molestiae aliquid aliquam? Odio ratione in consequuntur cum
          omnis, id sint, est porro eum nisi, amet eligendi deleniti?
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, error
          deleniti a molestiae aliquid aliquam? Odio ratione in consequuntur cum
          omnis, id sint, est porro eum nisi, amet eligendi deleniti?
        </p>
        <Link href="/ninja">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
