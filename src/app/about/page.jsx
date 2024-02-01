import styles from './about.module.css';
import Image from 'next/image';

export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://img.freepik.com/free-photo/diverse-businesspeople-having-a-meeting_53876-103954.jpg?w=1380&t=st=1706781338~exp=1706781938~hmac=2c1515abc5e052170e888ac50f2f5710d695ffcf9b183f34e2f87d0b8e76aa0f"
          fill={true}
          alt="about us"
          className="styles.img"
        />
      </div>
    </div>
  );
};

export default About;
