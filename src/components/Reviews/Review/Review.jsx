import Stars from '../../Stars/Stars';
import styles from './Review.module.sass';
import avatar from '@images/avatar.png'
import { useMainContext } from '../../../utils/context';
import { formatDate } from '../../../utils/functions';
import { useState } from 'react';
import Input from '../../Input/Input';
import { useDispatch } from "react-redux";
import { editReview } from '../../../actions/reviews';

const Review = ({ id, paddingRight = 0, type = "wrapper", text, mark, date, author, isEdit = false }) => {
    const { width } = useMainContext();
    const [isEditing, setEditing] = useState(false);
    const [reviewText, setReviewText] = useState(text);
    const [reviewMark, setReviewMark] = useState(mark);

    const dispatch = useDispatch();

    const handleSetEdit = () => {
        setEditing(!isEditing);
    }

    const handleSave = () => {
        dispatch(editReview(id, reviewText, reviewMark));
        setEditing(!isEditing);
    }

    return (
        <div className={styles.review} style={{ marginRight: paddingRight, maxWidth: type == "product" ? "100%" : "", padding: type == "product" || width < 450 ? "24px" : "40px" }}>
            <div className={styles.user} style={{ paddingBottom: type == "product" ? "16px" : "32px" }}>
                <div className={styles.avatar}>
                    <img src={avatar} alt="" />
                </div>
                <div className={styles.name}>
                    {author}
                </div>
                {type == "product"
                    && (
                        <div className={styles.date}>
                            {formatDate(date)}
                        </div>
                    )
                }
                {isEdit && (
                    <button onClick={handleSetEdit} className={styles.edit}>
                        {isEditing ? "cancel" : "edit"}
                    </button>
                )}
            </div>
            <div className={styles.rate} style={{ margin: type == "product" ? "24px 0 16px" : "32px 0 16px" }}>
                {isEditing
                    ? <Stars type="set" setedMark={reviewMark} setMark={setReviewMark} />
                    : <Stars mark={mark} />
                }

            </div>
            {isEditing
                ? <Input
                    type="textarea"
                    value={reviewText}
                    setValue={setReviewText}
                    placeholder='Write your review'
                />
                : <div className={styles.comment} style={{ marginBottom: type == "product" ? "0" : width < 450 ? "40px" : "70px" }}>
                    {text}
                </div>
            }

            {isEditing && (
                <button
                    onClick={handleSave}
                    style={{ fontSize: "14px" }}
                    className={`${styles.btn} green-btn`}>
                    Save
                </button>
            )}

            {type == "wrapper"
                && <div className={`${styles.date} ${styles.bottom_date}`}>
                    {formatDate(date)}
                </div>}

        </div>
    );
}

export default Review;