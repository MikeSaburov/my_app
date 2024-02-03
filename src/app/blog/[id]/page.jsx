import styles from './id.module.css';
import Image from 'next/image';

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
            src="https://img.freepik.com/free-photo/nobody-at-empty-desk-with-streaming-equipment-to-broadcast-live-conversation-on-social-media-no-people-in-space-with-podcast-station-microphone-and-headphones-sound-production_482257-42287.jpg?w=1380&t=st=1706953854~exp=1706954454~hmac=78ffd69a08ace8ef75a83e1ee0472f7923df58c5dc33f960332062f3b067219c"
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
