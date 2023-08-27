import styles from './Education.module.sass';
import { NavLink } from "react-router-dom";
import img1 from '@images/e1.png'
import img2 from '@images/e2.png'
import img3 from '@images/e3.png'

const Education = () => {
    return (
        <main className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.wrapper_title}>
                    WEED EDUCATION
                </h2>
                <NavLink className={styles.link} to="/">Show All</NavLink>
            </div>

            <div className={styles.block_wrapper}>
                <div className={styles.block}>
                    <NavLink className={styles.image} to="/">
                        <img src={img1} alt="" />
                    </NavLink>
                    <div className={styles.date}>
                        January 24, 2023
                    </div>

                    <NavLink className={styles.title} to="/">
                        12 Mistakes To Avoid When Buying Cannabis Online
                    </NavLink>

                    <div className={styles.desc}>
                        Buying cannabis online can be a great way to get your hands on the products you need without leaving the comfort of your home. But …
                    </div>
                    <NavLink className={styles.link} to="/">Read More
                    </NavLink>
                </div>
                <div className={styles.block}>
                    <NavLink className={styles.image} to="/">
                        <img src={img2} alt="" />
                    </NavLink>
                    <div className={styles.date}>
                        January 20, 2023
                    </div>
                    <NavLink className={styles.title} to="/">
                        How To Store Cannabis and Keep it Fresh and Potent?
                    </NavLink>
                    <div className={styles.desc}>
                        Cannabis packaging has advanced dramatically in recent years, whether your state has a medicinal marijuana programme, legal adult-use weed, or both. Most ...
                    </div>
                    <NavLink className={styles.link} to="/">Read More
                    </NavLink>
                </div>
                <div className={styles.block}>
                    <NavLink className={styles.image} to="/">
                        <img src={img3} alt="" />
                    </NavLink>
                    <div className={styles.date}>
                        January 19, 2023
                    </div>
                    <NavLink className={styles.title} to="/">
                        The Ultimate Guide to Checking the Quality of Cannabis – 10 Industry Leading Tips
                    </NavLink>
                    <div className={styles.desc}>
                        Quality cannabis is a term used to describe cannabis products that meet specific standards of excellence. It is essential to understand what quality cannabis means, …
                    </div>
                    <NavLink className={styles.link} to="/">Read More
                    </NavLink>
                </div>
                <div className={styles.block}>
                    <NavLink className={styles.image} to="/">
                        <img src={img1} alt="" />
                    </NavLink>
                    <div className={styles.date}>
                        January 24, 2023
                    </div>
                    <NavLink className={styles.title} to="/">
                        12 Mistakes To Avoid When Buying Cannabis Online
                    </NavLink>
                    <div className={styles.desc}>
                        Buying cannabis online can be a great way to get your hands on the products you need without leaving the comfort of your home. But …
                    </div>
                    <NavLink className={styles.link} to="/">Read More
                    </NavLink>
                </div>
            </div>
        </main>
    );
}

export default Education;