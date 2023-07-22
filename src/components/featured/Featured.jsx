import Image from 'next/image';
import styles from './featured.module.css';
import Link from 'next/link';

const Features = [
    '/pizza.png',
    '/bike.png',
    '/arrowr.png',
];

export default function Featured() {
  return (
    <div className={styles.container}>
        {/* <div className={styles.arrowContainer} style={{left: 0}}>
            <Image src='/arrowl.png' alt='' fill={true} className={styles.arrowImage}/>
        </div> */}
        <div className={styles.wrapper}>
            <div className={styles.textContent}>
                <p className={styles.first}>HOT & SPICY</p>
                <p className={styles.second}>PIZZA</p>
                <p className={styles.third}>50% OFF</p>
                <p className={styles.third}>ORDER NOW</p>
                <p className={styles.fifth}>mambalev</p>
            </div>
            <div className={styles.imgContainer}>
                <Image src='/pizza.png' alt='' fill={true} className={styles.pizzaImage}/>
            </div>
        </div>
        {/* <div className={styles.arrowContainer}  style={{right: 0}}>
            <Image src='/arrowr.png' alt='' fill={true} className={styles.arrowImage}/>
        </div> */}
    </div>
  );
};
