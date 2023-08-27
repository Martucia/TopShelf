import styles from './Types.module.sass';
import { NavLink } from "react-router-dom";
import img1 from '@images/t1.svg'
import img2 from '@images/t2.svg'
import img3 from '@images/t3.svg'

const Types = () => {
    return (
        <main className={styles.wrapper}>
            <div className={styles.block}>
                <div className={styles.image}>
                    <img src={img1} alt="" />
                </div>
                <div className={styles.title}>
                    Indica
                </div>
                <div className={styles.desc}>
                    This type of cannabis is commonly taken by those who want to sink into a state of total relaxation in every limb. This reduces stress overall and can take your worries and fatigue away. Because of its relaxing effects, it is suggested to use this type of cannabis at night. It is particularly recommended for people who have trouble sleeping, be it due to insomnia, pain or other associated sleep issues.
                </div>
                <NavLink className={styles.link} to="/">
                    Shop Indica
                </NavLink>
            </div>
            <div className={styles.block}>
                <div className={styles.image}>
                    <img src={img2} alt="" />
                </div>
                <div className={styles.title}>
                    Sativa
                </div>
                <div className={styles.desc}>
                    Contrary to the deep all-body relaxation that comes with the use of indica strains, sativas are known for increasing the feeling of creativity, enhancing focus and lessening anxiety. This is more of a mind-centered high in terms of how and where you will feel the effects. Given its stimulating nature, it is recommended to use this during the day.
                </div>
                <NavLink className={styles.link} to="/">
                    Shop Sativa
                </NavLink>
            </div>
            <div className={styles.block}>
                <div className={styles.image}>
                    <img src={img3} alt="" />
                </div>
                <div className={styles.title}>
                    Hybrids
                </div>
                <div className={styles.desc}>
                    Hybrid strains are just that – they combine the head-focused high effects of sativas with the bodily relaxation of indicas. This is ideal for people who really want to sooth any fatigue and worries while also clearing the mind ready to focus fresh on something new. Hybrids are expertly tailored to result in strains with specific effects. Useful strain vocabulary to familiarize yourself with when it comes to hybrids includes sativa-dominant (full, bodily relaxation), indica-dominant (boosting creativity, increasing mood and lessening anxiety) and balanced (the best of both worlds).
                </div>
                <NavLink className={styles.link} to="/">
                    Shop Hybrids
                </NavLink>
            </div>
        </main>
    );
}

export default Types;