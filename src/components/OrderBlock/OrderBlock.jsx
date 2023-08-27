
import { useState } from 'react';
import styles from './OrderBlock.module.sass';
import done from '@images/done2.svg';
import { useMainContext } from '../../utils/context';
import { toCart } from '../../actions/cart'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const weights = [
    {
        "weight": "28g",
        "price": 120
    },
    {
        "weight": "1/2lb",
        "price": 160
    },
    {
        "weight": "1/4lb",
        "price": 210
    }
]

const OrderBlock = ({ id, remainder, price, available, name }) => {
    const [weight, setWeight] = useState(weights[0]);
    const [adds, setAdds] = useState([]);
    const [count, setCount] = useState(1);

    const isAuth = useSelector(state => state.user.isAuth);

    const { width } = useMainContext();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAdd = (id, price) => {
        if (adds.filter(add => add.name == id).length > 0) {
            setAdds(prev => prev.filter(pr => pr.name !== id))
        } else {
            setAdds(prev => [...prev, { name: id, price: price }])
        }
    }

    const handleChangeCount = (type) => {
        if (type) {
            setCount(prev => prev + 1)
        } else if (count > 1) {
            setCount(prev => prev - 1)
        }
    }

    const handleAddToCart = () => {
        if (isAuth) {
            dispatch(toCart(id, count));
        } else {
            navigate("/login");
        }
    }

    const getSum = () => {
        let addsSum = 0;
        adds.map(x => addsSum += x.price);

        return (weight.price.toFixed(2) * count + addsSum)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.row}>
                <div className={styles.weight}>
                    <div className={styles.title}>
                        WEIGHT
                    </div>
                    <div className={styles.weight_row}>
                        {weights.map(w => <button key={w.weight} onClick={() => setWeight(w)} className={weight.weight == w.weight ? styles.active : ""}>
                            {w.weight}
                        </button>)}
                    </div>
                </div>
                <div className={styles.adds}>
                    <div className={styles.title}>
                        Add Integra Pack
                    </div>
                    <div className={styles.adds_row}>
                        <label htmlFor="4g" className={styles.adds_label}>
                            <input id="4g" onClick={(e) => handleAdd(e.target.id, 2)} className={`${styles.adds_input} ${adds.filter(add => add.name == "4g").length > 0 ? styles.checked : ""}`} type="checkbox" />
                            <span>
                                4g (+$2.00)
                            </span>
                        </label>
                        <label htmlFor="8g" className={styles.adds_label}>
                            <input id="8g" onClick={(e) => handleAdd(e.target.id, 3)} className={`${styles.adds_input} ${adds.filter(add => add.name == "8g").length > 0 ? styles.checked : ""}`} type="checkbox" />
                            <span>
                                8g (+$3.00)
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div className={styles.bonuses}>
                Purchase this product now and earn <span>80</span> Points!
            </div>
            <div className={styles.order_wrapper}>
                <div className={styles.list}>
                    <div className={styles.product}>
                        <div className={styles.product_name}>
                            Khalifa Kush (AAAA)
                            <span className={styles.product_count}>
                                {count}x
                            </span>
                        </div>
                        <div className={styles.product_price}>
                            ${weight.price.toFixed(2) * count}
                        </div>
                    </div>
                    {adds.map(add => <div key={add.name} className={styles.product}>
                        <div className={styles.product_name}>
                            Add Integra Pack - {add.name}
                        </div>
                        <div className={styles.product_price}>
                            ${add.price.toFixed(2)}
                        </div>
                    </div>)}

                </div>
                <div className={styles.btns}>
                    <div className={styles.change_count}>
                        <button onClick={() => handleChangeCount(false)} className={styles.change_count_btn}>
                            -
                        </button>
                        <div className={styles.count}>
                            {count}
                        </div>
                        <button onClick={() => handleChangeCount(true)} className={styles.change_count_btn}>
                            +
                        </button>
                        <div className={`${styles.availability} ${available && remainder > 0 ? styles.true : ""}`}>
                            {available && remainder > 0 ? "In Stock" : "Sold out"}

                        </div>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        disabled={!available || remainder < 1 ? true : false}
                        style={{ maxWidth: width > 500 ? "250px" : "100%", fontSize: "16px" }}
                        className="green-btn"
                    >
                        <span>Add to Cart</span>
                        <span className="green-btn-border"></span>
                        <span>${getSum()}</span>
                    </button>
                </div>
                <div className={styles.services}>
                    <div className={styles.service}>
                        <img src={done} alt="" />
                        Free Xpress Shipping on orders over <span>$149</span>
                    </div>
                    <div className={styles.service}>
                        <img src={done} alt="" />
                        Order before 12:00pm for same day dispatch
                    </div>
                    <div className={styles.service}>
                        <img src={done} alt="" />
                        Support & ordering open 7 day a week
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderBlock;