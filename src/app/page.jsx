import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/button/button';
import Hero from '../../public/hero.png';

//GuvZAGkkXcO2bMRO (admin)

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>The Feature of AI the next few years</h1>
        <p className={styles.desc}>
          Tirning your Idea into Reality. We brong together the teams from the
          global tech industry.
        </p>
        <Button url={'/portfolio'} text={'See Our Works'} />
      </div>
      <div className={styles.item}>
        <Image src={Hero} className={styles.img} alt="main photo" />
      </div>
    </main>
  );
}
