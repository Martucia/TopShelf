import styles from './ProductNavRefer.module.sass';
import copy from '@images/copy.svg'

const ProductNavRefer = () => {
    return (
        <div className={styles.refer}>
            <div style={{ marginBottom: "16px" }} className={styles.title}>
                Referral Program
            </div>
            <div style={{ color: "#717378", marginBottom: "24px" }} className={styles.desc}>
                Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.
            </div>
            <div className={styles.referUrl}>
                <div className={styles.referUrl_inner}>
                    <div className={styles.referUrl_title}>
                        Your Referral URL
                    </div>
                    <div className={styles.referUrl_text}>
                        Referral code is available only to users with at least one order.
                    </div>
                </div>
                <button className={styles.referUrl_btn}>
                    <img src={copy} alt="" />
                </button>
            </div>

            <div className={styles.referUrl}>
                <div className={styles.referUrl_inner}>
                    <div className={styles.referUrl_title}>
                        Your Coupon Code to share
                    </div>
                    <div className={styles.referUrl_text}>
                        Referral code is available only to users with at least one order.
                    </div>
                </div>
                <button className={styles.referUrl_btn}>
                    <img src={copy} alt="" />
                </button>
            </div>
        </div>
    );
}

export default ProductNavRefer;