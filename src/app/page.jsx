import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import Featured from '@/components/featured/Featured';
import PizzaList from '@/components/pizzaList/PizzaList';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured/>
      <PizzaList/>
    </div>
  );
};
