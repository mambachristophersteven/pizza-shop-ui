import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Cart() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image 
                  src='/pizza.png' 
                  alt='pizza image' 
                  width={100} 
                  height={100}
                  className={styles.image}
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>CORALZO</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>¢78.90</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>¢156.90</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image 
                  src='/pizza.png' 
                  alt='pizza image' 
                  width={100} 
                  height={100}
                  className={styles.image}
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>CORALZO</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>¢78.90</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>¢156.90</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>¢120.76
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>¢0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>¢120.76
          </div>
          <button className={styles.button}>CHECKOUT NOW!!</button>
        </div>       
      </div>
    </div>
  );
};
