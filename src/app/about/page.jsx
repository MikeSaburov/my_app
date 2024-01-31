import styles from './about.module.css';
import Image from 'next/image';

export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fill={true}
          alt="about us"
          className="styles.img"
        />
      </div>
    </div>
  );
};

export default About;
