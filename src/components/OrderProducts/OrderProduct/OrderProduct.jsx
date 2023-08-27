import { useDispatch } from 'react-redux';
import { changeQuantity } from '../../../actions/cart';
import styles from './OrderProduct.module.sass';
import { BASE_URL } from '../../../utils/constants';

const OrderProduct = ({ product, quantity }) => {
    const dispatch = useDispatch();

    const handleChangeCount = (type) => {
        dispatch(changeQuantity(product._id, type))
    }

    return (
        <div className={styles.product}>
            <div className={styles.image}>
                <img src={`${BASE_URL}/images/` + product.images[0]} alt="image" />
            </div>
            <div className={styles.inner}>
                <div className={styles.name}>
                    {product.name}
                </div>

                <div className={styles.count_block}>
                    <button disabled={quantity == 1} onClick={() => handleChangeCount("minus")} className={styles.change}>
                        -
                    </button>
                    <div className={styles.count}>
                        {quantity}
                    </div>
                    <button onClick={() => handleChangeCount("plus")} className={styles.change}>
                        +
                    </button>
                </div>

                {/* <div className={styles.price}>
                        ${product.discount !== 0 ? product.discount.toFixed(2) : product.price.toFixed(2)}
                    </div> */}

                {product.discount !== 0
                    ? <div className={styles.price}>
                        <span className={`${styles.onSale}`}>
                            ${Number(product.discount).toFixed(2)}
                        </span>
                        <span className={styles.old_price}>
                            ${Number(product.price).toFixed(2)}
                        </span>
                    </div>
                    : <div className={`${styles.price}`}>
                        ${Number(product.price).toFixed(2)}
                    </div>
                }

                <div className={styles.total}>
                    ${((product.discount !== 0 ? product.discount : product.price) * quantity).toFixed(2)}
                </div>
            </div>
        </div>
    );
}

export default OrderProduct;