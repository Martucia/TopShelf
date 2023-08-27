import { useEffect, useState } from 'react';
import styles from './Coupons.module.sass';
import { useDispatch, useSelector } from "react-redux";
import Title from '../Title/Title';
import CreateCoupon from './CreateCoupon/CreateCoupon';
import { getCoupons } from '../../../actions/coupon';
import { formatDate } from '../../../utils/functions';

const Coupons = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const coupons = useSelector(state => state.coupons);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCoupons());
    }, [])

    const handleOpenModal = () => {
        setModalOpen(true);
    }

    return (
        <>
            <div className={styles.coupons}>
                <Title title="Coupons" btnText="Add new" click={handleOpenModal} />

                <div className={styles.list}>
                    {coupons?.map(coupon => (
                        <div className={styles.coupon}>
                            <div className={styles.name}>
                                {coupon.text}
                            </div>

                            <div className={styles.date}>
                                {formatDate(coupon.expiration)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isModalOpen && (
                <CreateCoupon close={() => setModalOpen(false)} />
            )}
        </>
    );
}

export default Coupons;