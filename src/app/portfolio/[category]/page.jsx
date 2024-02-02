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
            src="https://images.unsplash.com/photo-1480506132288-68f7705954bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
