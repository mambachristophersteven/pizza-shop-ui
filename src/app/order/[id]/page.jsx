import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import PizzaList from '@/components/pizzaList/PizzaList';

export default function Order() {
    const status = 0;

    const statusClass = (index)=>{
        if(index-status < 1) return styles.done;
        if(index-status === 1) return styles.inProgress;
        if(index-status > 1) return styles.undone;

    };
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>
                        <span className={styles.id}>2244224</span>
                        </td>
                        <td>
                        <span className={styles.name}>
                            Kwesi Odei
                        </span>
                        </td>
                        <td>
                        <span className={styles.adress}>Weija St. 565</span>
                        </td>
                        <td>
                        <span className={styles.total}>¢156.90</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image src='/paid.png' alt='paid' width={30} height={30}/>
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                        <Image src='/checked.png' alt='paid' width={20} height={20}/>
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <Image src='/bake.png' alt='paid' width={30} height={30}/>
                    <span>Preparing</span>
                    <div className={styles.checkedIcon}>
                        <Image src='/checked.png' alt='paid' width={20} height={20}/>
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <Image src='/bike.png' alt='paid' width={30} height={30}/>
                    <span>On the way</span>
                    <div className={styles.checkedIcon}>
                        <Image src='/checked.png' alt='paid' width={20} height={20}/>
                    </div>
                </div>
                <div className={statusClass(3)}>
                    <Image src='/delivered.png' alt='paid' width={30} height={30}/>
                    <span>Delivered</span>
                    <div className={styles.checkedIcon}>
                        <Image src='/checked.png' alt='paid' width={20} height={20}/>
                    </div>
                </div>
            </div>
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
                <button className={styles.button}>PAID!!</button>
            </div>
        </div>
    </div>
  );
};
