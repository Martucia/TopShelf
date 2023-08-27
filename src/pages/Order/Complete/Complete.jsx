import { useSelector } from 'react-redux';
import styles from './Complete.module.sass';
import CompleteProduct from './CompleteProduct/CompleteProduct';
import { NavLink } from 'react-router-dom';

const Complete = () => {
    const order = useSelector(state => state.order);

    const getSum = () => {
        const sum = order?.products.reduce((total, product) => {
            return total + (product.price * product.quantity);
        }, 0);

        return sum ? sum.toFixed(2) : "0.00";
    };

    if (order) return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                {order?.products.map(product => (
                    <CompleteProduct key={product._id} {...product} />
                ))}
            </div>
            <div className={styles.total}>
                <p>
                    Total
                </p>
                <p className={styles.total_sum}>
                    ${getSum()}
                </p>
            </div>
            <div className={styles.info}>
                <div className={styles.block}>
                    <p>
                        <span>Shipping</span>
                        <span>{order?.shipping.country}, {order?.shipping.city}, {order?.shipping.street} {order?.shipping.apartment}</span>
                    </p>
                    <p>
                        <span>Shipping Options</span>
                        <span>Same-Day Dispatching</span>
                    </p>
                    <p>
                        <span>Email Money Transfer</span>
                        <span>Interac</span>
                    </p>
                </div>
                <div className={styles.block}>
                    <p>
                        <span>Subtotal</span>
                        <span>${order.sum.toFixed(2)}</span>
                    </p>
                    <p>
                        <span>Discount</span>
                        <span>${order.discount.toFixed(2)}</span>
                    </p>
                    {order.couponDiscount
                        && <p>
                            <span>Coupon discount</span>
                            <span>${order.couponDiscount.toFixed(2)}</span>
                        </p>}
                    <p>
                        <span>Shipping Costs</span>
                        <span>${order.shipping.cost.toFixed(2)}</span>
                    </p>
                    <div className={styles.finish_sum}>
                        <span>Total</span>
                        <span>${order.total_sum.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <div className={styles.text}>
                New Order, Click button bellow
            </div>

            <NavLink style={{ maxWidth: "160px", fontSize: "16px", margin: "0 auto" }} className="green-btn" to="/catalog">
                Shop Now
            </NavLink>
        </div>
    );
}

export default Complete;