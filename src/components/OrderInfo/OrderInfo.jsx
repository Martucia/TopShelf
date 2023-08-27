import OrderProgressBar from '../OrderProgressBar/OrderProgressBar'

import { NavLink } from "react-router-dom";

import styles from './OrderInfo.module.sass';
import cards from '@images/cards.png'
import Coupon from '../Coupon/Coupon';
import Checkbox from '../Checkbox/Checkbox';

const OrderInfo = ({ confirm, setConfirm, productsSum, totalSum, setPage, couponDiscount, totalProductsSum, setCoupon, page, count, shippingCost, isShippingFree, productsDiscount }) => {

    return (
        <div className={styles.block}>
            <div className={styles.sums}>
                <div className={styles.sum_info}>
                    <div className={styles.sum_name}>
                        Subtotal
                    </div>
                    <div className={styles.sum_number}>
                        ${productsSum?.toFixed(2)}
                    </div>
                </div>
                <div className={styles.sum_info}>
                    <div className={styles.sum_name}>
                        Discount
                    </div>
                    <div className={styles.discount}>
                        -${productsDiscount?.toFixed(2)}
                    </div>
                </div>
                {couponDiscount > 0
                    && <div className={styles.sum_info}>
                        <div className={styles.sum_name}>
                            Coupon discount
                        </div>
                        <div className={styles.discount}>
                            -${couponDiscount.toFixed(2)}
                        </div>
                    </div>
                }

                <div className={styles.sum_info}>
                    <div className={styles.sum_name}>
                        Shipping Cost
                    </div>
                    {!isShippingFree
                        ?
                        <div className={styles.sum_number}>
                            ${shippingCost.toFixed(2)}
                        </div>
                        :
                        <div className={styles.sum_number}>
                            <span className={styles.old}>${shippingCost.toFixed(2)}</span>
                            <span>$0.0</span>
                        </div>
                    }

                </div>
            </div>

            <Coupon setCoupon={setCoupon} />

            {page == 1 && (
                <>
                    <OrderProgressBar sum={totalProductsSum} />

                    {!isShippingFree
                        ?
                        <div className={styles.text}>
                            Get <span className={styles.black}>Free Shipping</span> for orders over <span className={styles.red}>$100.00</span>
                        </div>
                        :
                        <div className={styles.text}>
                            You received <span className={styles.black}>Free Shipping</span> because you made an order over <span className={styles.red}>$100.00</span>
                        </div>
                    }

                    {!isShippingFree
                        && <NavLink className={styles.back_to_shop} to="/catalog">
                            Continue Shopping
                        </NavLink>
                    }
                </>
            )}

            {page == 2 && (
                <>
                    <Checkbox
                        text="I confirm that my address is 100% correct and WILL NOT hold Top Shelf BC liable if this shipment is sent to an incorrect address. *"
                        value={confirm}
                        setValue={setConfirm}
                    />
                </>
            )}


            <button
                onClick={() => setPage(2)}
                disabled={count == 0}
                className="green-btn"
                style={{ fontSize: "16px" }}
            >
                <span>Checkout</span>
                <span className="green-btn-border"></span>
                <span>${totalSum?.toFixed(2)}</span>
            </button>

            <div className={styles.cards}>
                <p>
                    SECURE PAYMENTS PROVIDED BY
                </p>
                <img src={cards} alt="" />
            </div>
        </div>
    );
}

export default OrderInfo;