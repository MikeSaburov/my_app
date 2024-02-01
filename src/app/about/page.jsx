import styles from './about.module.css';
import Image from 'next/image';

export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://img.freepik.com/free-photo/business-team-working-office-worker-concept_53876-23476.jpg?w=1800&t=st=1706781501~exp=1706782101~hmac=14b58d7733fd2bb5fd997c0cfa9bd880e4d0e1758c67384077ca401cc7096770"
          fill={true}
          alt="about us"
          className="styles.img"
        />
      </div>
    </div>
  );
};

export default About;
