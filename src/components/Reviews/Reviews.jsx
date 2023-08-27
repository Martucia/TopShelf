import { Swiper, SwiperSlide } from 'swiper/react';
import google from '@images/google.png'
import star from "@images/star.png"
import styles from './Reviews.module.sass';
import Review from './Review/Review';
import { useState, useEffect } from 'react';
import { useMainContext } from '../../utils/context';
import 'swiper/css';
import { useSelector, useDispatch } from 'react-redux';
import { getReviews } from '../../actions/reviews';


const Reviews = () => {
    const [sliderWidth, setSliderWidth] = useState(0);
    const reviews = useSelector(state => state.reviews);

    const { width } = useMainContext();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!reviews) {
            dispatch(getReviews());
        }
    }, [reviews, dispatch])


    useEffect(() => {
        const updateDimensions = () => {
            const sliderContainer = document.querySelector('.swiper2');
            if (sliderContainer !== null) {
                setSliderWidth(sliderContainer.clientWidth);
            }
        }
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, [reviews]);

    const slidesPerView = sliderWidth / 380;

    if (reviews) return (
        <main className={styles.wrapper}>
            <h2 style={{ marginBottom: "1em", padding: width > 800 ? "0" : "0 20px" }} className='main-title'>
                CUSTOMER TESTIMONIALS
            </h2>

            <div className={styles.swiper_wrapper}>
                <div className={styles.block}>
                    <div className={styles.title}>
                        VOTED BEST ONLINE DISPENSARY IN CANADA
                    </div>
                    <img className={styles.google} src={google} alt="" />
                    <div className={styles.text}>
                        EXELLENCET
                    </div>
                    <div className={styles.rate}>
                        <div className={styles.mark}>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.reviews}>
                            135 <span>Reviews</span>
                        </div>
                    </div>
                </div>

                <Swiper
                    className='swiper2'
                    style={{ paddingLeft: width > 1000 ? "30px" : "20px", cursor: "grab" }}
                    spaceBetween={width > 1000 ? 50 : 20}
                    slidesPerView={width > 450 ? slidesPerView > reviews.length ? reviews.length : slidesPerView : 1}
                >
                    {reviews?.map(review => (
                        <SwiperSlide key={review._id}>
                            <Review {...review} date={review.createdAt} paddingRight={width > 450 ? 0 : "20px"} />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </main>
    );
}

export default Reviews;