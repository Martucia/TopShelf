import styles from "./Header.module.sass";
import { NavLink } from "react-router-dom";
import logo from '@images/logo.svg';
import cart from '@images/cart.svg';
import { useSelector } from "react-redux";
import Search from "../Search/Search";
import admin from "@images/admin.png"

const Header = ({ openCart, isHumburgerActive, setHumburgerActive, setNavbarOpen }) => {
    const isAuth = useSelector(state => state.user.isAuth);
    const isAdmin = useSelector(state => state.user.isAdmin);
    const cartCount = useSelector(state => state.user.currentUser?.cart?.length);

    const handleClickHumburger = () => {
        if (!isHumburgerActive) {
            setNavbarOpen(true);
            setHumburgerActive(true);
        } else {
            setNavbarOpen(false);
            setTimeout(() => {
                setHumburgerActive(false);
            }, 350);
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.home}>
                <div onClick={handleClickHumburger} className={`${styles.hamburger}  ${isHumburgerActive ? styles.active : null}`}>
                    <span className={`${styles.line} ${styles.line1}`}></span>
                    <span className={`${styles.line} ${styles.line2}`}></span>
                    <span className={`${styles.line} ${styles.line3}`}></span>
                </div>
                <NavLink className={styles.logo} to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>

            <Search />

            <div className={styles.user_section}>
                {isAdmin
                    ?
                    <NavLink className={styles.link} to="/admin">
                        Admin panel
                        <img src={admin} alt="" />
                    </NavLink>
                    :
                    isAuth
                        ? <>
                            <NavLink className={styles.link} to="/">
                                Your Account
                            </NavLink>
                            <div className={styles.line}></div>
                            <button className={styles.to_cart} onClick={openCart} >
                                <img src={cart} alt="cart" />
                                <span className={styles.to_cart__count}>
                                    {cartCount}
                                </span>
                            </button>
                        </>
                        : <NavLink className={styles.link} to="/login">
                            Login
                        </NavLink>

                }

            </div>
        </header>
    );
}

export default Header;