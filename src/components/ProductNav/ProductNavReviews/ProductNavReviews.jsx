import styles from './ProductNavReviews.module.sass';
import Stars from '../../Stars/Stars';
import Review from '../../Reviews/Review/Review'
import { useState } from 'react';
import { addReview } from '../../../actions/reviews'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductNavReviews = ({ reviews, userReview }) => {
    const [mark, setMark] = useState(null);
    const [rewiewText, setRewiewText] = useState("");
    const [error, setError] = useState("");

    const dispatch = useDispatch();
    const { id } = useParams();

    const isAuth = useSelector(state => state.user.isAuth);

    const handleAddReview = () => {

        if (!mark) {
            setError("Be sure to rate it");
            return false;
        }

        dispatch(addReview(id, rewiewText, mark))
    }

    const handleSetMark = (value) => {
        setError("");

        setMark(value);
    }

    return (
        <div className={styles.reviews}>
            {userReview && <Review
                id={userReview._id}
                type="product"
                text={userReview.text}
                mark={userReview.mark}
                date={userReview.createdAt}
                author={userReview.author}
                isEdit={true}
            />}

            <div className={styles.reviews_list}>
                {reviews.map(review => (
                    <Review
                        key={review._id}
                        type="product"
                        text={review.text}
                        mark={review.mark}
                        date={review.createdAt}
                        author={review.author}
                    />
                ))}
            </div>

            {!userReview && isAuth && (
                <div className={styles.addNew}>
                    <div className={styles.title}>
                        Add A Review
                    </div>

                    <div className={styles.setmark}>
                        <p>Your rating:</p>
                        <div className={styles.stars}>
                            <Stars
                                type="set"
                                setMark={handleSetMark}
                                setedMark={mark} />
                        </div>
                    </div>

                    <label className={styles.label} htmlFor="">Your Review <span>*</span></label>

                    <textarea
                        placeholder='Enter your review'
                        className={styles.textarea}
                        rows="5"
                        onChange={(event) => setRewiewText(event.target.value)}
                        value={rewiewText}
                    >

                    </textarea>

                    <div className={styles.error}>{error}</div>

                    <button
                        className="green-btn"
                        style={{ maxWidth: "140px", fontSize: "16px" }}
                        onClick={handleAddReview}
                    >
                        Submit
                    </button>
                </div>
            )}

        </div>
    );
}

export default ProductNavReviews;