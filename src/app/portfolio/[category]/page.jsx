import styles from './category.module.css';

const Category = ({ params }) => {
  return (
    <div>
      <h1 className={styles.catTitle}>{params.category}</h1>
    </div>
  );
};

export default Category;
