import Link from 'next/link';
import styles from './portfolio.module.css';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href={'portfolio/illustrations'} className={styles.item}>
          <span className={styles.title}>illustrations</span>
        </Link>
        <Link href={'portfolio/illustrations'} className={styles.item}>
          <span className={styles.title}>illustrations</span>
        </Link>
        <Link href={'portfolio/illustrations'} className={styles.item}>
          <span className={styles.title}>illustrations</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
