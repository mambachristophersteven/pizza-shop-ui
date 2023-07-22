import Image from 'next/image';
import styles from './pizzaCard.module.css';
import Link from 'next/link';

export default function PizzaCard() {
  return (
    <Link href='/product/1212' className={styles.container}>
      <div>
        <Image src='/pizza.png' alt='pizza image' width={180} height={180}/>
        <h1 className={styles.title}>FIORI DI COZA</h1>
        <span className={styles.price}>¢59.90</span>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </Link>
    
  );
};