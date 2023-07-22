import Image from 'next/image';
import styles from './pizzaList.module.css';
import Link from 'next/link';
import PizzaCard from '../pizzaCard/PizzaCard';

export default function PizzaList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, adipisci. Repellat impedit animi quis ut cum in, porro, non eligendi quasi dolorem at facilis quaerat eius. Est aspernatur illo quo.</p>
      <div className={styles.wrapper}>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
      </div>
    </div>
  );
};
