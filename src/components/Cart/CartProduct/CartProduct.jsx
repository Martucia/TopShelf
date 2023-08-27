import styles from './CartProduct.module.sass';
import del from '@images/close.svg';
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { removeFromCart } from '../../../actions/cart';
import { BASE_URL } from '../../../utils/constants';

const CartProduct = ({ close, id, name, image, discount, remainder, available, price, quantity, additional = [] }) => {

    const dispatch = useDispatch();

    const getSum = () => {
        return (quantity * (discount !== 0 ? discount : price)).toFixed(2);
    }

    const handleRemoveProduct = () => {
        dispatch(removeFromCart(id));
    }

    return (
        <div className={styles.product}>
            <div className={styles.image}>
                <img src={`${BASE_URL}/images/` + image} alt="image" />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <NavLink onClick={close} className={`${styles.name} ${styles.main}`} to={"/product/" + id}>
                        {name}
                    </NavLink>
                    <div className={styles.btn}>
                        <button onClick={handleRemoveProduct} className={styles.delete}>
                            <img src={del} alt="" />
                        </button>
                    </div>

                    <div className={styles.info}>
                        <div className={styles.count}>
                            {quantity}x
                        </div>
                        {/* <div className={styles.info_price}>
                            {discount !== 0
                                && <span
                                    className={styles.old_price}
                                >
                                    ${discount.toFixed(2)}
                                </span>
                            }
                            ${price.toFixed(2)}
                        </div> */}

                        {discount !== 0
                            ? <div className={styles.info_price}>
                                <span className={`${styles.on_sale}`}>
                                    ${Number(discount).toFixed(2)}
                                </span>
                                <span className={styles.old_price}>
                                    ${Number(price).toFixed(2)}
                                </span>
                            </div>
                            : <div className={`${styles.price}`}>
                                ${Number(price).toFixed(2)}
                            </div>
                        }
                    </div>
                    <div className={styles.price}>
                        ${getSum()}
                    </div>
                </div>
                {/* <div className={styles.block}>
                    <div className={styles.name}>
                        Add Integra Pack - 4g
                    </div>
                    <div className={styles.btn}>
                        <button className={styles.delete}>
                            <img src={del} alt="" />
                        </button>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.count}>
                            1x
                        </div>
                        <div className={styles.info_price}>
                            $2.00
                        </div>
                    </div>
                    <div className={styles.price}>
                        $2.00
                    </div>
                </div>*/}

                {additional.length > 0 && (
                    <div className={styles.wrapper_footer}>
                        <div className={styles.text}>
                            Subtotal
                        </div>

                        <div className={styles.sum}>
                            ${getSum()}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default CartProduct;