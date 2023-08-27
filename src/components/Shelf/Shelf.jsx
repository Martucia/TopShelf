import { useEffect, useState } from "react";
import ProductCart from "../ProductCart/ProductCart"
import styles from './Shelf.module.sass';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/catalog";
import { getGroup } from "../../actions/catalog";

const Shelf = ({ title, type = "none", products, group = "bestSellers" }) => {
    const [productsState, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (type == "shelf") {
            dispatch(getGroup(group, setProducts));
        }
    }, [])


    return (
        <main className={styles.shelf} style={{ padding: type == "catalog" ? "0" : "80px 5%" }} >
            <h2 style={{ marginBottom: "1em" }} className='main-title'>
                {title}
            </h2>

            {type !== "catalog" && group == "weed"
                && <div className={styles.filter}>
                    <span>Filter by Interest</span>
                    <div className={styles.filters}>
                        <button className={`${styles.navigate} ${styles.active}`}>
                            Flowers
                        </button>
                        <button className={`${styles.navigate}`}>
                            Mushrooms
                        </button>
                        <button className={`${styles.navigate}`}>
                            Concentrate
                        </button>
                        <button className={`${styles.navigate}`}>
                            Edibles
                        </button>
                        <button className={`${styles.navigate}`}>
                            Shop All Weed
                        </button>
                    </div>

                </div>
            }

            <div className={styles.wrapper}>
                {products
                    && <>
                        {products.map((product => <ProductCart key={product._id} product={...product} />))}
                    </>
                }

                {type == "shelf"
                    && <>
                        {productsState.map((product => <ProductCart key={product._id} product={...product} />))}
                    </>
                }


            </div>
        </main>
    );
}

export default Shelf;