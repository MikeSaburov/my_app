import Link from 'next/link';
import styles from './blog.module.css';
import Image from 'next/image';

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="blog/test" className={styles.container} key="1">
        <div className={styles.imageContainer}>
          <Image
            src="https://img.freepik.com/free-vector/tiny-house-concept-illustration_114360-9087.jpg?w=826&t=st=1706952596~exp=1706953196~hmac=e161c1977930bbe17f0dab1b175c75e7700ad4dddee48cfef327165176be7fd2"
            alt="blog"
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            atque consequuntur fugiat quos! Ex inventore quos rerum repudiandae
            nobis, voluptate corporis illo. Soluta nobis et minus alias,
            molestias fugiat aut?
          </p>
        </div>
      </Link>
      <Link href="blog/test2" className={styles.container} key="2">
        <div className={styles.imageContainer}>
          <Image
            src="https://img.freepik.com/free-vector/tiny-house-concept-illustration_114360-9087.jpg?w=826&t=st=1706952596~exp=1706953196~hmac=e161c1977930bbe17f0dab1b175c75e7700ad4dddee48cfef327165176be7fd2"
            alt="blog"
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            atque consequuntur fugiat quos! Ex inventore quos rerum repudiandae
            nobis, voluptate corporis illo. Soluta nobis et minus alias,
            molestias fugiat aut?
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
