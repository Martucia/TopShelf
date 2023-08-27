import styles from './Navbar.module.sass';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = ({ isMobile, close, isOpen }) => {
    const [isOpen2, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, []);

    const handleClose = (e) => {
        if (isMobile && e.target === e.currentTarget) {
            close();
        }
    }

    useEffect(() => {
        if (isMobile) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            if (isMobile) {
                document.body.style.overflow = 'auto';
            }
        };
    }, []);

    return (
        <nav className={styles.navbar} onClick={handleClose}>
            <div className={isOpen2 && isMobile && isOpen ? `${styles.content} ${styles.opened}` : `${styles.content}`}>
                <NavLink className={styles.link} to="/catalog" >
                    Shop All
                </NavLink>
                <NavLink className={styles.link} to="/" >
                    Flower
                </NavLink>
                <NavLink className={styles.link} to="/catalog?category=6460f49ab7d467235dae24f6&minPrice=0&maxPrice=240" >
                    Weed
                </NavLink>
                <NavLink className={styles.link} to="/catalog?category=6460f4aab7d467235dae24fc&minPrice=0&maxPrice=240" >
                    Mushrooms
                </NavLink>
                <NavLink className={styles.link} to="/" >
                    Promotions/Bundles
                </NavLink>
                <NavLink className={styles.link} to="/" >
                    Support
                </NavLink>
                <NavLink className={styles.link} to="/" >
                    Rewards
                </NavLink>
                <NavLink className={styles.link} to="/" >
                    Blog
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;