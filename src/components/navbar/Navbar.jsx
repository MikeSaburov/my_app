import Link from 'next/link';

import styles from './navbar.module.css';

const links = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Portfolio', url: '/portfolio' },
  { id: 3, title: 'Blog', url: '/blog' },
  { id: 4, title: 'About', url: '/about' },
  { id: 5, title: 'Contact', url: '/contact' },
  { id: 6, title: 'Dashboard', url: '/dashboard' },
];

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <Link className={styles.logo} href="/">
        MY APP
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link href={link.url} key={link.id}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout}>Logout</button>
      </div>
    </nav>
  );
}
