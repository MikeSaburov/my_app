import styles from './about.module.css';
import Image from 'next/image';

export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="" fill={true} alt="about us" className="styles.img" />
      </div>
    </div>
  );
};

export default About;
