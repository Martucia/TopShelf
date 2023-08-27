import styles from './ProductCart.module.sass';
import star from "@images/star.png"
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { toCart } from '../../actions/cart'
import { BASE_URL } from '../../utils/constants';

const ProductCart = ({ paddingRight = 0, product }) => {
    const category = useSelector(state => state.categories.find(c => c._id == product.category));
    const isAuth = useSelector(state => state.user.isAuth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleToCart = () => {
        if (isAuth) {
            dispatch(toCart(product._id));
        } else {
            navigate("/login");
        }
    }

    const checkDiscount = () => product.price / product.discount > 1.5 && product.discount !== 0;

    return (
        <div className={styles.block} style={{ paddingRight: paddingRight }}>
            {checkDiscount() && (
                <div className={styles.info}>
                    HOT PRICE
                </div>
            )}

            <NavLink className={styles.image_block} to={"/product/" + product._id} >
                <img className={styles.image} src={`${BASE_URL}/images/` + product.images[0]} alt="image" />
            </NavLink>
            <div className={styles.category}>
                {category?.name}
            </div>
            <NavLink className={styles.name} to={"/product/" + product._id} >
                {product.name}
            </NavLink>
            <div className={styles.rate}>
                <div className={styles.mark}>
                    <img src={star} alt="" />
                    4.6/5
                </div>
                <div className={styles.line}></div>
                <div className={styles.reviews}>
                    {product.reviews.length} <span>Reviews</span>
                </div>
            </div>

            <div className={styles.composition}>
                {product.composition.map(comp => <p key={comp}>{comp}</p>)}
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

            {/* <div className={styles.correlation}>
                {product.options.map(opt =>
                    <button
                        className={activeOption == opt.weight ? styles.active : ""}
                        onClick={() => setOption(opt.weight)}
                    >
                        {opt.weight}
                    </button>)}
            </div> */}
            <button onClick={handleToCart} className={styles.to_cart}>
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCart;