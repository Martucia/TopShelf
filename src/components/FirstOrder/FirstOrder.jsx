import styles from './FirstOrder.module.sass';
import { useMainContext } from '../../utils/context';

const FirstOrder = () => {
    const { width } = useMainContext();

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>
                UNLOCK 20% OFF YOUR FIRST ORDER
            </h3>
            <div className={styles.desc}>
                Reveal coupon code by entering your email
            </div>

            <div className={styles.bottom}>
                <input className={styles.input} placeholder='Email Address' type="email" />
                <button style={{ maxWidth: width > 600 ? "200px" : "100%", fontWeight: "400" }} className="green-btn">
                    Reveal coupon
                </button>
            </div>
        </div>
    );
}

export default FirstOrder;