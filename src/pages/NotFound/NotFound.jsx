import styles from './NotFound.module.sass';
import img from '@images/404.png';
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div className={styles.not_found}>
            <div className={styles.image}>
                <img src={img} alt="" />
            </div>
            <div className={styles.text}>
                <div className={styles.title}>
                    <span>
                        4
                    </span>
                    <span>
                        0
                    </span>
                    <span>
                        4
                    </span>
                </div>
                <NavLink className={styles.link} to="/">
                    Go to stote
                </NavLink>
            </div>
        </div>
    );
}

export default NotFound;