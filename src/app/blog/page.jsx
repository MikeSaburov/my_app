import Link from 'next/link';
import styles from './blog.module.css';
import Image from 'next/image';

async function getData() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((post) => (
        <Link href="blog/test" className={styles.container} key={post.id}>
          <div className={styles.imageContainer}>
            <Image
              src="https://img.freepik.com/free-vector/tiny-house-concept-illustration_114360-9087.jpg?w=826&t=st=1706952596~exp=1706953196~hmac=e161c1977930bbe17f0dab1b175c75e7700ad4dddee48cfef327165176be7fd2"
              alt="blog"
              width={400}
              height={250}
              className={styles.image}
              priority={true}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
