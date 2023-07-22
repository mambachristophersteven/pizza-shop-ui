"use client";
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { useState } from 'react';






export default function Product() {
  const [size, setSize] = useState(0);
  const pizza = 
  {
    id: 1,
    img: '/pizza.png',
    name: 'CAMPANOLA',
    price: [49.9, 62.9, 69.9],
    desc: 'Lorem ipsum dolor sit,  animi atque enim eos quam amet! animi atque enim eos quam amet animi atque enim eos quam amet! animi atque enim eos quam amet!',
  };



  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image src={pizza.img} width={500} height={500} alt='' className={styles.image}/>
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>{pizza.name}</h1>
          <span className={styles.price}>${pizza.price[size]}</span>
          <p className={styles.desc}>{pizza.desc}</p>
          <h3 className={styles.choose}>Choose your size</h3>
          <div className={styles.sizes}>
            <div className={styles.size} onClick={()=> setSize(0)}>
              <Image src='/size.png' width={50} height={50} alt='sizes'/>
              <span>Small</span>
            </div>
            <div className={styles.size}  onClick={()=> setSize(1)}>
              <Image src='/size.png' width={70} height={70} alt='sizes'/>
              <span>Medium</span>
            </div>
            <div className={styles.size}  onClick={()=> setSize(2)}>
              <Image src='/size.png' width={90} height={90} alt='sizes'/>
              <span>Large</span>
            </div>
          </div>
          <h3 className={styles.choose}>Choose additional ingredients</h3>
          <div className={styles.ingredients}>
            <div className={styles.option}>
              <input 
                type="checkbox" 
                name="double" 
                id="double" 
                className={styles.checkbox}
              />
              <label htmlFor="double">Double Ingredients</label>
            </div>
            <div className={styles.option}>
              <input 
                type="checkbox" 
                name="cheese" 
                id="cheese" 
                className={styles.checkbox}
              />
              <label htmlFor="cheese">Extra Cheese</label>
            </div>
            <div className={styles.option}>
              <input 
                type="checkbox" 
                name="spicy" 
                id="spicy" 
                className={styles.checkbox}
              />
              <label htmlFor="spicy">Spicy Sauce</label>
            </div>
            <div className={styles.option}>
              <input 
                type="checkbox" 
                name="garlic" 
                id="garlic" 
                className={styles.checkbox}
              />
              <label htmlFor="garlic">Garlic Sauce</label>
            </div>
          </div>
          <div className={styles.add}>
            <input type="number" name="quantity" id="quantity" defaultValue={1} min={1} className={styles.quantity}/>
            <button className={styles.button}>Add to Cart</button>
          </div>
        </div>
    </div>
  );
};
