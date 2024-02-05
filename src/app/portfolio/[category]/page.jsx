import styles from './category.module.css';
import Button from '@/components/button/button';
import Image from 'next/image';
import { items } from './data';
import { notFound } from 'next/navigation';

const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((cat) => (
        <div className={styles.item} key={cat.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{cat.title}</h1>
            <p className={styles.desc}>{cat.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={cat.image}
              alt={cat.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
