import styles from './Cart.module.sass';
import Overflow from '../Overflow/Overflow'
import cartIcon from "@images/cart.svg"
import { NavLink } from "react-router-dom";
import arrow from "@images/arrow.svg"
import { useState, useEffect } from 'react';
import CartProduct from './CartProduct/CartProduct';
import cards from '@images/cards.png'
import { useMainContext } from '../../utils/context';
import { useSelector } from "react-redux";

const Cart = ({ close }) => {
    const [isOpen, setOpen] = useState(false);
    const cart = useSelector(state => state.user.currentUser.cart);

    const { width } = useMainContext();

    useEffect(() => {
        setOpen(true);
    }, []);

    const handleClose = () => {
        setOpen(false);

        setTimeout(() => {
            close(false);
        }, 350);
    }

    const getSum = () => {
        return cart.reduce((accumulator, product) => {
            return accumulator + (product.product.discount !== 0 ? product.product.discount : product.product.price) * product.quantity;
        }, 0).toFixed(2);
    }

    return (
        <Overflow close={handleClose}>
            <div className={isOpen ? `${styles.cart} ${styles.opened}` : `${styles.cart}`}>
                <div className={styles.header}>
                    <h2>
                        Your Cart
                    </h2>
                    <div className={styles.count}>
                        ({cart.length})
                    </div>
                </div>

                <div className={cart.length > 0 ? styles.inner : styles.empty}>
                    {cart.length > 0
                        ? <>

                            <div className={styles.list}>
                                {cart.map(product => (
                                    <CartProduct
                                        key={product._id}
                                        id={product.product._id}
                                        name={product.product.name}
                                        image={product.product.images[0]}
                                        discount={product.product.discount}
                                        remainder={product.product.remainder}
                                        available={product.product.available}
                                        price={product.product.price}
                                        quantity={product.quantity}
                                        close={handleClose}
                                    />
                                ))}

                            </div>
                            {width > 500 && <div className={styles.total}>
                                <div className={styles.text}>
                                    TOTAL
                                </div>

                                <div className={styles.sum}>
                                    ${getSum()}
                                </div>
                            </div>}

                            <div className={styles.btns}>
                                <NavLink onClick={handleClose} className='green-btn' to="/order" style={{ maxWidth: "180px", fontSize: "14px" }}>
                                    Checkout
                                </NavLink>

                                {width < 500 && <div className={styles.sum}>
                                    ${getSum()}
                                </div>}

                            </div>
                            {width > 500 && <div className={styles.cart_footer}>
                                <div className={styles.cart_footer_text}>
                                    SECURE PAYMENTS PROVIDED BY
                                </div>
                                <img src={cards} alt="" />
                            </div>}


                        </>
                        : <>
                            <div className={styles.circle}>
                                <img src={cartIcon} alt="" />
                            </div>
                            <NavLink onClick={handleClose} style={{ maxWidth: "190px" }} className="green-btn" to="/catalog">
                                Show Products
                            </NavLink>
                        </>}

                    <button onClick={handleClose} className={styles.close}>
                        <img src={arrow} alt="" />
                    </button>
                </div>

            </div>
        </Overflow>

    );
}

export default Cart;