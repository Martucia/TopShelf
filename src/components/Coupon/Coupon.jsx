import { useDispatch } from 'react-redux';
import styles from './Coupon.module.sass';
import { useCoupon } from '../../actions/coupon';
import { useState } from 'react';

const Coupon = ({ setCoupon }) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const dispatch = useDispatch();

    const handleCheckCoupon = () => {
        if (value.length === 0) {
            setError("Can't be empty");
            return;
        }

        dispatch(useCoupon(value.trim(), setError, handleSetCoupon));
    }

    const handleSetCoupon = (couponId) => {
        setCoupon(couponId);
        setError(null);
        setSuccess("The coupon has been successfully used")
    }

    return (
        <>
            <div className={styles.coupon}>
                <input
                    placeholder='Coupon code'
                    value={value}
                    disabled={success}
                    onChange={(e) => setValue(e.target.value)}
                    className={`${styles.input} ${error && styles.inp_error} ${success && styles.inp_success}`}
                />
                <button disabled={success} className={styles.button} onClick={handleCheckCoupon}>
                    Apply Coupon
                </button>
            </div>
            {error && (
                <div className={styles.error}>{error}</div>
            )}
            {success && (
                <div className={styles.success}>{success}</div>
            )}
        </>

    );
}

export default Coupon;
