import { useState } from 'react';
import styles from './ProductNav.module.sass';
import ProductNavDesc from './ProductNavDesc/ProductNavDesc';
import ProductNavReviews from './ProductNavReviews/ProductNavReviews';
import ProductNavRefer from './ProductNavRefer/ProductNavRefer';

const ProductNav = ({ reviews, productId, description, userReview }) => {
    const [activePage, setPage] = useState("desc");

    return (
        <div className={styles.wrapper}>
            <div className={styles.nav}>
                <button onClick={() => setPage("desc")} className={`${styles.btn} ${activePage == "desc" ? styles.active : ""}`}>
                    Description
                </button>
                <button onClick={() => setPage("reviews")} className={`${styles.btn} ${activePage == "reviews" ? styles.active : ""}`}>
                    Reviews <span className={styles.count}>({userReview ? reviews.length + 1 : reviews.length})</span>
                </button>
                <button onClick={() => setPage("refer")} className={`${styles.btn} ${activePage == "refer" ? styles.active : ""}`}>
                    Refer a Friend
                </button>
            </div>


            <div className={styles.wrapper_inner}>
                {activePage == "desc" &&
                    <ProductNavDesc description={description} />}
                {activePage == "reviews" &&
                    <ProductNavReviews userReview={userReview} reviews={reviews} />}
                {activePage == "refer" &&
                    <ProductNavRefer />}


            </div>
        </div>
    );
}

export default ProductNav;