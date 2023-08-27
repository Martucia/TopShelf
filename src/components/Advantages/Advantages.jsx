import styles from './Advantages.module.sass';
import img1 from "@images/ad1.svg";

const Advantages = () => {
    return (
        <main className={styles.wrapper}>
            <div className={styles.block}>
                <div className={styles.image}>
                    <img src={img1} alt="" />
                </div>
                <div className={styles.text}>
                    <h3 className={styles.title}>
                        Reliable Shipping
                    </h3>
                    <p className={styles.desc}>
                        Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!
                    </p>
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles.image}>
                    <img src={img1} alt="" />
                </div>
                <div className={styles.text}>
                    <h3 className={styles.title}>
                        You’re Safe With Us
                    </h3>
                    <p className={styles.desc}>
                        Our secure payment system accepts the most common forms of payments making the checkout process quicker! The payments we accept are debit, all major credit cards, and cryptocurrency.
                    </p>
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles.image}>
                    <img src={img1} alt="" />
                </div>
                <div className={styles.text}>
                    <h3 className={styles.title}>
                        Best Quality & Pricing
                    </h3>
                    <p className={styles.desc}>
                        Here at Green Society, we take pride in the quality of our products and service. Our prices are set to ensure you receive your medication at a reasonable price and safely
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Advantages;