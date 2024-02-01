import styles from './about.module.css';
import Image from 'next/image';
import Button from '@/components/button/button';

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
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Lorem ipsum dolor sit</h1>
          <h2 className={styles.imgDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
