import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

import styles from './List.module.sass';
import { BASE_URL } from "../../../utils/constants";

const List = ({ close }) => {
    const products = useSelector(state => state.search.slice(0, 5));


    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                {products.length > 0
                    ? products.map(product => (
                        <NavLink key={product._id} to={"/product/" + product._id} className={styles.product}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <div className={styles.image}>
                                    <img className={styles.image} src={`${BASE_URL}/images/` + product.images[0]} alt="image" />
                                </div>
                                <div className={styles.name}>
                                    {product.name}
                                </div>
                            </div>
                            {product.discount !== 0
                                ? <div className={styles.price}>
                                    <span className={styles.old_price}>${product.price.toFixed(2)}</span>
                                    <span className={styles.new_price}>${product.discount.toFixed(2)}</span>
                                </div>
                                : <div className={styles.price}>
                                    <span>${product.price.toFixed(2)}</span>
                                    {/*  / gram */}
                                </div>
                            }
                        </NavLink>)
                    )
                    : <div className={styles.empty}>
                        No such product found
                    </div>
                }
            </div>

            <button onClick={close} className={styles.close}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" /></svg>
            </button>
        </div>

    );
}

export default List;