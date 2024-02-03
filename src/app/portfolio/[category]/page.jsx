import styles from './category.module.css';
import Button from '@/components/button/button';
import Image from 'next/image';
const Category = ({ params }) => {
  return (
    <div>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item} key="1">
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://img.freepik.com/free-vector/shed-concept-illustration_114360-8308.jpg?w=826&t=st=1706951334~exp=1706951934~hmac=30850bf01c30e939de3db8b9a862559a80c5c8044a8f97d5ee8ead608d635a62"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
