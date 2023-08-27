import styles from './BestsWrapper.module.sass';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCart from '../ProductCart/ProductCart';
import { NavLink } from 'react-router-dom';
import img from "@images/s2.png"
import { useMainContext } from '../../utils/context';
import 'swiper/css';
import { useDispatch } from "react-redux";
import { getGroup } from '../../actions/catalog';

const BestsWrapper = () => {
    const [sliderWidth, setSliderWidth] = useState(0);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState("bestSellers");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGroup(page, setProducts));
    }, [page])

    const { width } = useMainContext();

    useEffect(() => {
        const updateDimensions = () => {
            const sliderContainer = document.querySelector('.swiper1');
            if (sliderContainer !== null) {
                setSliderWidth(sliderContainer.clientWidth);
            }
        }
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, [products]);



    const slidesPerView = sliderWidth / 320;

    return (
        <main className={styles.wrapper}>
            <h2 style={{ textAlign: "center", maxWidth: "1100px", margin: "0 auto 1em" }} className='main-title'>
                BEST DISPENSARY TO BUY WEED ONLINE IN CANADA
            </h2>

            <div className={styles.nav}>
                <button onClick={() => setPage("bestSellers")} className={`${styles.navigate} ${page == "bestSellers" ? styles.active : ""}`}>
                    Best Sellers
                </button>
                <button onClick={() => setPage("promotions")} className={`${styles.navigate} ${page == "promotions" ? styles.active : ""}`}>
                    Bundles & Promotions
                </button>
                <button onClick={() => setPage("sale")} className={`${styles.navigate} ${page == "sale" ? styles.active : ""}`}>
                    On Sale
                </button>
            </div>

            <div className={styles.swiper_wrapper}>
                <div className={styles.block}>
                    <div className={styles.bg_figure}>

                    </div>
                    <img className={styles.image} src={img} />
                    <div className={styles.name}>
                        Shop our Best Sellers
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius lorem blandit lectus magnis feugiat.
                    </div>
                    <NavLink className={styles.link} to="/catalog" >
                        View All
                    </NavLink>
                </div>

                <Swiper
                    className='swiper1'
                    style={{ paddingLeft: width > 1000 ? "50px" : "20px", cursor: "grab" }}
                    spaceBetween={width > 1000 ? 50 : 20}
                    slidesPerView={width > 450 ? slidesPerView > products.length ? products.length : slidesPerView : 1}

                >
                    {products.map(product => <SwiperSlide key={product._id}>
                        <ProductCart product={...product} paddingRight={width > 450 ? 0 : "20px"} />
                    </SwiperSlide>)}
                </Swiper>


            </div>

            {/* <SwiperComponent /> */}
        </main>
    );
}

export default BestsWrapper;