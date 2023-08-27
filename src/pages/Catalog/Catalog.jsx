import { useEffect, useState } from 'react';
import Filter from '../../components/Filter/Filter';
import Shelf from '../../components/Shelf/Shelf';
import styles from './Catalog.module.sass';
import { getProducts } from '../../actions/catalog';
import { useDispatch, useSelector } from "react-redux";
import { useMainContext } from '../../utils/context';


const Catalog = () => {
    const dispatch = useDispatch();
    const [queryParams, setQueryParams] = useState(null);

    const products = useSelector(state => state.catalog);
    const isAdmin = useSelector(state => state.user.isAdmin);

    const { setAddNewProductOpen } = useMainContext();

    useEffect(() => {
        if (queryParams !== null) {
            dispatch(getProducts("catalog", null, queryParams));
        }

    }, [queryParams])

    return (
        <div className={styles.catalog}>
            <Filter queryParams={queryParams} setQueryParams={setQueryParams} />
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h3 className={styles.title}>
                        Shop
                    </h3>
                    {isAdmin
                        && <button className={styles.btn} onClick={() => setAddNewProductOpen(true)}>Add new</button>
                    }

                </div>
                <div className={styles.info}>
                    <h4 className={styles.info_title}>
                        Cannabis
                    </h4>
                    <p>
                        Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid, and Sativa medical cannabis strain selections at the best prices online. You can be assured that all our strains go through a strict screening process to ensure that all your cannabis needs are top-quality. All of our flowers are sourced from reputable growers, based in British Columbia, Canada. We have hige grade selection comes from growers that produce AAAA+ quality cannabis flowers and have many years of experience in the cannabis industry. You are guaranteed to be receiving high-quality flowers at the best prices online with our unbeatable sales!
                    </p>
                </div>
                {products?.length > 0
                    ? (
                        <Shelf type="catalog" products={products} />
                    )
                    : (
                        <div className={styles.empty}>
                            Not found
                        </div>
                    )
                }

            </div>
        </div>
    );
}

export default Catalog;