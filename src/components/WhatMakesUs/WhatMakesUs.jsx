import styles from './WhatMakesUs.module.sass';
import img1 from '@images/w1.png'
import img2 from '@images/w2.png'
import img3 from '@images/w3.png'
import img4 from '@images/w4.png'
import img5 from '@images/w5.png'
import img6 from '@images/w6.png'

const WhatMakesUs = () => {
    return (
        <main className={styles.wrapper}>
            <h2 style={{ maxWidth: "1000px" }} className='main-title'>
                WHAT MAKES US THE <span>#1</span> <br/> ONLINE MARIJUANA DISPENSARY IN CANADA?
            </h2>
            <div className={styles.desc}>
                When it comes to what makes us the foremost online marijuana dispensary in Canada, we could wax lyrical about our positive qualities. Instead, to make this information clearer, we’ve highlighted the six prioritized features that we feel makes us a cut above the rest.
            </div>

            <div className={styles.block_wrapper}>
                <div className={styles.block}>
                    <div className={styles.image}>
                        <img src={img1} alt="" />
                    </div>
                    <div className={styles.title}>
                        DELIVERY INSURANCE
                    </div>
                    <div className={styles.text}>
                        If your mail order marijuana becomes lost, stolen, or damaged during transit, we will send you a replacement completely free of charge. Free Canada Post Xpress shipping on all orders over $120
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.image}>
                        <img src={img2} alt="" />
                    </div>
                    <div className={styles.title}>
                        SECURITY
                    </div>
                    <div className={styles.text}>
                        When it comes to security, we only keep what details are necessary for you to have an account with us and make an order. When it comes to shipping your mail order marijuana out, we use only tamper-proof and discrete packaging so then what you’ve purchased is your business only.
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.image}>
                        <img src={img3} alt="" />
                    </div>
                    <div className={styles.title}>
                        BEST VALUE
                    </div>
                    <div className={styles.text}>
                        We are continually adjusting what we supply and our prices to ensure that we maintain an optimal balance of affordable and quality for our products. We invest in the best quality strains that we can find and are always on the lookout for new, affordable and high quality weed products.
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.image}>
                        <img src={img4} alt="" />
                    </div>
                    <div className={styles.title}>
                        DELIVERY INSURANCE
                    </div>
                    <div className={styles.text}>
                        If your mail order marijuana becomes lost, stolen, or damaged during transit, we will send you a replacement completely free of charge. Free Canada Post Xpress shipping on all orders over $120
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.image}>
                        <img src={img5} alt="" />
                    </div>
                    <div className={styles.title}>
                        HIGHEST QUALITY
                    </div>
                    <div className={styles.text}>
                        All of our cannabis products are tested to ensure that they are the highest quality possible. We work with expert suppliers and are always revising what makes a quality cannabis product to ensure that we have only the best available.
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.image}>
                        <img src={img6} alt="" />
                    </div>
                    <div className={styles.title}>
                        TRUST
                    </div>
                    <div className={styles.text}>
                        With over 15 years in the weed business, you can rest assured that you will be taken care of. You can guarantee that we have your best interests in mind. Feel free to check out our reviews.
                    </div>
                </div>
            </div>
        </main>
    );
}

export default WhatMakesUs;