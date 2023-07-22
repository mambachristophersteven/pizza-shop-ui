import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContain}>
        <Image src='/bg.png' alt='footer image' width={500}
        height={450} className={styles.footerImage}/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>OH WEE!!, WE DID WHAT YOU WANTED. THE BEST PIZZA</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            3342 Weija Block Factory
            <br /> Kasoa, 80996
            <br /> 676667, Rowew
          </p>
          <p className={styles.text}>
            3342 Weija Block Factory
            <br /> Kasoa, 80996
            <br /> 676667, Rowew
          </p>
          <p className={styles.text}>
            3342 Weija Block Factory
            <br /> Kasoa, 80996
            <br /> 676667, Rowew
          </p>
          <p className={styles.text}>
            3342 Weija Block Factory
            <br /> Kasoa, 80996
            <br /> 676667, Rowew
          </p>
          <p className={styles.text}>
            3342 Weija Block Factory
            <br /> Kasoa, 80996
            <br /> 676667, Rowew
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </p>
        </div>
      </div>
    </div>
  );
};
