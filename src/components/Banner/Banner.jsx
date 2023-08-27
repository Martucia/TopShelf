import styles from './Banner.module.sass';
import { NavLink } from "react-router-dom";
import boxes from "@images/banner-boxes.png";
import boxes_mobile from '@images/banner-boxes2.png'
import img1 from "@images/b1.png";
import img2 from "@images/b2.png";
import img3 from "@images/b3.png";
import { useMainContext } from '../../utils/context';

const Banner = () => {
    const { width } = useMainContext();
    
    return (
        <main className={styles.banner}>
            <div className={styles.block}>
                <h3>
                    BEST SELLER
                </h3>
                <h1>
                    BEST DISPENSARY TO BUY WEED ONLINE
                </h1>
                <h2>
                    Vitamins & Supplements
                </h2>
            </div>
            <div className={styles.block}>
                <p>
                    <span>
                        Get 25% off
                    </span>
                    <span className={styles.line}></span>
                    <span>
                        Free Shipping
                    </span>
                </p>

                <NavLink style={{ maxWidth: "185px", zIndex: 3 }} to="/catalog" className="green-btn">
                    Shop All
                </NavLink>
            </div>
            {width > 800
                ? <div className={styles.boxes}>
                    <img className={styles.boxes_img} src={boxes} alt="" />
                    <img className={styles.img1} src={img1} alt="" />
                    <img className={styles.img2} src={img2} alt="" />
                    <img className={styles.img3} src={img3} alt="" />
                </div>
                : <div className={styles.boxes}>
                    <img className={styles.boxes_img} src={boxes_mobile} alt="" />
                </div>
            }
        </main>
    );
};

export default Banner;