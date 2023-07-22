import Image from 'next/image';
import styles from './navbar.module.css';
import Link from 'next/link';

const Links1 = [
  {
    id: 1,
    title: "Homepage",
    url: "/",
  },
  {
    id: 2,
    title: "Products",
    url: "/product",
  },
  {
    id: 3,
    title: "Menu",
    url: "/menu",
  },
  
];

const Links2 = [
  {
    id: 1,
    title: "Events",
    url: "/events",
  },
  {
    id: 2,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  },
  
];


export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src='/telephone.png' width={12} height={12} alt='phone'/>
        </div>
        <div className={styles.texts}>
        <div className={styles.text}>ORDER NOW!</div>
        <div className={styles.text}>024 256 6669</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.links}>
          {Links1.map(link=>(
            <Link href={link.url} key={link.id} className={styles.link}>{link.title}</Link>
          ))}
          <Image src='/logo.png' alt='logo' width={160} height={69} className={styles.logo}/>
          {Links2.map(link=>(
            <Link href={link.url} key={link.id} className={styles.link}>{link.title}</Link>
          ))}
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Link href='/cart'>
            <Image src='/cart.png' alt='cart' width={30} height={30} className={styles.cartImage}/>
            <div>2</div>
          </Link>
          
        </div>
      </div>
    </div>
  );
};
