import styles from './contact.module.css';
import Image from 'next/image';
import Button from '@/components/button/button';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep in Touch</h1>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="contacts"
          fill={true}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Contact;
