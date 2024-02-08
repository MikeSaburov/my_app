import Link from 'next/link';
import styles from './blog.module.css';
import Image from 'next/image';

export const metadata = {
  title: 'Blog',
  description: 'MY App Posts',
};

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  });
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
        <Link
          href={`blog/${post._id}`}
          className={styles.container}
          key={post._id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={post.img}
              alt="blog"
              width={400}
              height={250}
              className={styles.image}
              priority={true}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{post.title}</h1>
            <h3 className={styles.title}>{post.desc}</h3>
            <p className={styles.desc}>{post.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
