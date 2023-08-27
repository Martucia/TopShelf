import styles from './Footer.module.sass';
import logo from '@images/logo_white.svg'
import { NavLink } from 'react-router-dom';
import cards from '@images/cards.png'
import FirstOrder from '../FirstOrder/FirstOrder';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <FirstOrder />
            <div className={styles.inner}>
                <div className={styles.block}>
                    <NavLink to="/" className={styles.logo}>
                        <img src={logo} alt="" />
                    </NavLink>

                    <div className={styles.desc}>
                        #1 Canadian top rated online dispensary that meets the customers needs in every single medical marijuana aspect. The team here at TopShelfBC is heavily involved in the Canadian cannabis industry for over 15 years. We strive to provide the top quality products, service and care at the lowest prices you’ll ever find.
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.title}>
                        QUICK LINK
                    </div>
                    <div className={styles.block_column}>
                        <NavLink to="/" className={styles.link}>
                            Track Your Order
                        </NavLink>
                        <NavLink to="/" className={styles.link}>
                            Shop All
                        </NavLink>
                        <NavLink to="/" className={styles.link}>
                            Flower
                        </NavLink>
                        <NavLink to="/" className={styles.link}>
                            Edibles
                        </NavLink>
                        <NavLink to="/" className={styles.link}>
                            Concentrates
                        </NavLink>
                        <NavLink to="/" className={styles.link}>
                            Refunds
                        </NavLink>
                        <NavLink to="/" className={styles.link}>
                            Mushrooms
                        </NavLink>
                        <NavLink to="/" className={styles.link}>
                            Promotions / Bundles
                        </NavLink>
                        <NavLink to="/" className={styles.link}>
                            Support
                        </NavLink>
                        <NavLink to="/" className={styles.link}>
                            Reward
                        </NavLink>
                    </div>
                    <div className={styles.title}>
                        CONTACT US
                    </div>
                    <div className={styles.block_column}>
                        <NavLink to="/" className={styles.link}>
                            info@topshelfbc.cc
                        </NavLink>
                    </div>
                    <div className={styles.title}>
                        MORE
                    </div>
                    <div className={styles.block_column}>
                        <NavLink to="/" className={styles.link}>
                            Buy weed online in Canada
                        </NavLink>
                        <NavLink to="/" className={styles.link}>
                            Buy weed online in New Brunswick
                        </NavLink>
                        <NavLink to="/" className={styles.link}>
                            Buy weed online in Prince Edward Island
                        </NavLink>
                        <NavLink to="/" className={styles.link}>
                            Buy weed online in Northwest Territories
                        </NavLink>
                        <NavLink to="/" className={styles.link}>
                            Buy weed online in Saskatchewan
                        </NavLink>
                        <NavLink to="/" className={styles.link}>
                            Buy weed online in Manitoba
                        </NavLink>
                        <NavLink to="/" className={styles.link}>
                            Buy weed online in Quitebec
                        </NavLink>
                        <NavLink to="/" className={styles.link}>
                            Buy weed online in British Columbia
                        </NavLink>
                        <NavLink to="/" className={styles.link}>
                            Buy weed online in Ontario
                        </NavLink>
                        <NavLink to="/" className={styles.link}>
                            Buy weed online in Alberta
                        </NavLink>
                    </div>
                    <div className={styles.cards}>
                        <img src={cards} alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <span>
                    © 2022 Top Shelf BC. All Rights Reserved.
                </span>
                <div className={styles.row}>
                    <NavLink to="/" className={styles.link}>
                        Out Of Stock
                    </NavLink>
                    <NavLink to="/" className={styles.link}>
                        Privacy Policy
                    </NavLink>
                    <NavLink to="/" className={styles.link}>
                        Terms & Conditions
                    </NavLink>
                </div>
            </div>
        </footer>
    );
}

export default Footer;