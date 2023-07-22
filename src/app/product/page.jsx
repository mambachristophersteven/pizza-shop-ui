import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import PizzaList from '@/components/pizzaList/PizzaList';

export default function Product() {
  return (
    <div className={styles.container}>
        <PizzaList/>
    </div>
  );
};
