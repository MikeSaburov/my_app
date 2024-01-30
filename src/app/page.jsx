import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>The Feature of AI the next few years</h1>
      </div>
    </main>
  );
}
