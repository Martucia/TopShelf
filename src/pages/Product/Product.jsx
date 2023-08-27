import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from './Product.module.sass';
import "./Product.sass";

import icon1 from '@images/p1.svg'
import icon2 from '@images/p2.svg'
import icon3 from '@images/p3.svg'
import star from "@images/star.png"

import OrderBlock from '../../components/OrderBlock/OrderBlock';
import ProductNav from '../../components/ProductNav/ProductNav';
import { BASE_URL } from '../../utils/constants';

import { getProduct } from '../../actions/product';

const Product = () => {
    const [images, setImages] = useState([]);
    const product = useSelector(state => state.product);
    const category = useSelector(state => state.categories.find(c => c._id == product?.category));

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(getProduct(id));
    }, [id])


    useEffect(() => {
        if (product) {
            let imgs = product.images.map(img => {
                return {
                    original: `${BASE_URL}/images/${img[0]}`,
                    thumbnail: `${BASE_URL}/images/${img[0]}`,
                    originalClass: "gallery_bullet",
                    thumbnailClass: "gallery_bullet_thumbnailClass"
                }
            });

            setImages(imgs);
        }
    }, [product]);

    if (product) return (
        <div className={styles.wrapper}>
            <div className={styles.gallery}>
                <ImageGallery
                    items={images}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    slideInterval={1000}
                    slideOnThumbnailOver={true}
                    lazyLoad={true}
                    useBrowserFullscreen={false}
                    showNav={false}
                    swipingTransitionDuration={100}
                />
            </div>

            <div className={styles.info}>
                <div className={styles.category}>
                    {category?.name}
                </div>
                <div className={styles.name}>
                    {product.name}
                </div>
                <div className={styles.compositions}>
                    {product?.composition.map(composition => (
                        <p key={composition} className={styles.composition}>
                            {composition}
                        </p>
                    ))}
                </div>

                <div className={styles.row}>
                    {product.discount !== 0
                        ? <div className={styles.price}>

                            <span className={styles.old_price}>
                                ${Number(product.price).toFixed(2)}
                            </span>
                            <span className={`${styles.onSale}`}>
                                ${Number(product.discount).toFixed(2)}
                            </span>
                        </div>
                        : <div className={`${styles.price}`}>
                            ${Number(product.price).toFixed(2)}
                        </div>
                    }

                    <div className={styles.rate}>
                        <div className={styles.mark}>
                            <img src={star} alt="" />
                            {product.average || 5}/5
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.reviews}>
                            {product.review ? product.reviews.length + 1 : product.reviews.length}
                            <span>Reviews</span>
                        </div>
                    </div>
                </div>

                <div className={styles.block_wrapper}>
                    <div className={styles.block}>
                        <div className={styles.block_icon}>
                            <img src={icon1} alt="" />
                        </div>
                        <div className={styles.block_inner}>
                            <div className={styles.block_title}>
                                EFFECTS
                            </div>
                            <div className={styles.block_text}>
                                Calming, Creative, Happy, Relaxing, Sleepy, Uplifting
                            </div>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.block_icon}>
                            <img src={icon2} alt="" />
                        </div>
                        <div className={styles.block_inner}>
                            <div className={styles.block_title}>
                                MAY RELIEVE
                            </div>
                            <div className={styles.block_text}>
                                Anxiety, Arthritis, Chronic Pain, Depression, Fatigue, Inflammation, Insomnia, Irregular Bowel Movements, Migraines, Mood Swings
                            </div>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.block_icon}>
                            <img src={icon3} alt="" />
                        </div>
                        <div className={styles.block_inner}>
                            <div className={styles.block_title}>
                                AROMAS
                            </div>
                            <div className={styles.block_text}>
                                Chemical, Citrus, Earthy, Pungent, Sour
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.desc}>
                    <div className={styles.desc_title}>
                        DESCRIPTION
                    </div>
                    <div className={styles.desc_text}>
                        {product.description}
                    </div>
                </div>
                <OrderBlock
                    id={product._id}
                    remainder={product.remainder}
                    price={product.price}
                    available={product.available}
                    name={product.name}
                />

                <ProductNav
                    productId={product._id}
                    reviews={product.reviews}
                    description={product.description}
                    userReview={product.review}
                />
            </div>
        </div>
    );
}

export default Product;