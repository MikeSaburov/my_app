import styles from './footer.module.css';
import Image from 'next/image';

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className={styles.container}>
      <div>{`${date} MY App. All rights reserved.`}</div>
      <div className={styles.social}>
        <Image
          src="/vk.png"
          width={30}
          height={30}
          className={styles.icon}
          alt="vk.com"
        />
        <Image
          src="/inst.png"
          width={30}
          height={30}
          className={styles.icon}
          alt="instagram.com"
        />
        <Image
          src="/twitter.png"
          width={30}
          height={30}
          className={styles.icon}
          alt="twitter.com"
        />
        <Image
          src="/yt.png"
          width={30}
          height={30}
          className={styles.icon}
          alt="youtube.com"
        />
      </div>
    </footer>
  );
}
