import Timer from '../Timer/Timer';
import styles from './Notification.module.sass';

const unix = 1691682563;

const Notification = () => {
    return (
        <div className={styles.notification}>
            <p className={styles.text}>
                LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.
            </p>
            <p className={styles.timer}>
                <Timer targetUnixTime={unix} />
            </p>
        </div>
    );
}

export default Notification;