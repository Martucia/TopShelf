import { NavLink } from 'react-router-dom';

import styles from './CompleteProduct.module.sass';

import { BASE_URL } from '../../../../utils/constants';

const CompleteProduct = ({ product, quantity }) => {

    const getSum = () => {
        return (quantity * (product.discount !== 0 ? product.discount : product.price)).toFixed(2);
    }

    return (
        <div className={styles.product}>
            <div className={styles.block}>
                <div className={styles.image}>
                    <img src={`${BASE_URL}/images/` + product.images[0]} alt="image" />
                </div>

                <NavLink className={styles.name} to={"/product/" + product._id}>
                    {product.name}
                </NavLink>
            </div>

            <div className={styles.info_price}>
                <div className={styles.count}>
                    {quantity}x
                </div>
                <div className={styles.price}>
                    ${product.discount !== 0 ? product.discount.toFixed(2) : product.price.toFixed(2)}
                </div>
            </div>

            <div className={styles.total}>
                ${getSum()}
            </div>
        </div>
    );
}

export default CompleteProduct;