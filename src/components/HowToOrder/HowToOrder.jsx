import Reffer from '../Reffer/Reffer'
import styles from './HowToOrder.module.sass';
import img1 from '@images/h1.png'
import img2 from '@images/h2.png'
import img3 from '@images/h3.png'
import img4 from '@images/h4.png'

const HowToOrder = () => {
    return (
        <main className={styles.wrapper}>
            <Reffer />
            <h2 style={{ textAlign: "center", maxWidth: "1000px", margin: "0 auto", color: "#fff" }} className='main-title'>
                HOW TO ORDER WEED ONLINE FROM TOP SHELF BC - MAIL ORDER MARIJUANA
            </h2>
            <div className={styles.desc}>
                Ordering weed online from Top Shelf BC is easy. We are proud to have made the process accessible across multiple platforms and simple to understand, meaning that more people can come to us to buy their cannabis products online.
            </div>
            <div className={styles.block_wrapper}>
                <div className={styles.block}>
                    <div className={styles.numeric}>
                        1
                    </div>
                    <div className={styles.image}>
                        <img src={img1} alt="" />
                    </div>
                    <div className={styles.title}>
                        REGISTER
                    </div>
                    <div className={styles.text}>
                        Sign up for an account with us. This is quick and simple. We don’t require any more details from you than the bare minimum needed for you to place an order and get your product delivered.
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.numeric}>
                        3
                    </div>
                    <div className={styles.image}>
                        <img src={img2} alt="" />
                    </div>
                    <div className={styles.title}>
                        SHOP
                    </div>
                    <div className={styles.text}>
                        Decide on what you want to purchase. We stock a wide range of edibles,flowers , concentrates and mushrooms there is bound to be something for everyone.
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.numeric}>
                        4
                    </div>
                    <div className={styles.image}>
                        <img src={img3} alt="" />
                    </div>
                    <div className={styles.title}>
                        MAKE PAYMENT
                    </div>
                    <div className={styles.text}>
                        Pay securely. Our site boasts sturdy protection certificates to keep your card details and related data safe.
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.numeric}>
                        1
                    </div>
                    <div className={styles.image}>
                        <img src={img4} alt="" />
                    </div>
                    <div className={styles.title}>
                        RELAX
                    </div>
                    <div className={styles.text}>
                        Your product will be packaged discretely and shipped by Canada Post Xpresspost. We will provide you with a tracking number so then you can follow your mail order marijuana every step of the way.
                    </div>
                </div>
            </div>
            <button style={{ maxWidth: "260px", margin: "0 auto" }} className='green-btn'>
                Choose your Weed
            </button>
        </main>
    );
}

export default HowToOrder;