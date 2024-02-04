import styles from './id.module.css';
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

const BlogId = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Description</p>
          <div className={styles.author}>
            <Image
              src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-a-cigarette_52683-34828.jpg?w=826&t=st=1706953919~exp=1706954519~hmac=f6f58336953e0536bf3c5c29a3dc971e116b6eec1736eab8ff601b932d21c328"
              alt=""
              width={80}
              height={80}
              className={styles.avatar}
            />
            <span className={styles.username}>username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://img.freepik.com/premium-photo/blog-writing-online-on-the-internet-blue-computer-keyboard_770123-7086.jpg?w=1380"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Content</p>
      </div>
    </div>
  );
};

export default BlogId;
