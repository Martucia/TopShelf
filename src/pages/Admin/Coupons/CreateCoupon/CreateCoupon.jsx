import { useDispatch } from 'react-redux';

import Overflow from '../../../../components/Overflow/Overflow';
import Input from '../../../../components/Input/Input';

import styles from './CreateCoupon.module.sass';

import { createCoupon } from '../../../../actions/coupon';
import { useEffect, useState } from 'react';
import SelectInput from '../../../../components/SelectInput/SelectInput.jsx';
import DatePickerInput from '../../../../components/DatePicker/DatePicker';

const CreateCoupon = ({ close }) => {
    const [couponData, setCouponData] = useState({});
    const [couponErrors, setCouponErrors] = useState({});
    const [wasChanged, setChanged] = useState(false);

    const dispatch = useDispatch();

    const handleCreateCoupon = () => {
        dispatch(createCoupon(couponData));
    }

    const handleInputChange = (value, name, type) => {

        setChanged(true);

        setCouponErrors(prev => ({ ...prev, [name]: "" }))

        setCouponData(prevData => {
            return {
                ...prevData,
                [name]:
                    type == "number" && Number(value) < 1 && value !== ""
                        ? 1
                        : value

            };
        });
    }

    return (
        <Overflow close={close}>
            {/* ref={modalRef} */}
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h3 className={styles.title}>
                        Add new coupon
                    </h3>
                    <button onClick={close}>
                        close
                    </button>
                </div>

                <div className={styles.inner}>
                    <Input
                        label="Coupon text"
                        value={couponData.text}
                        placeholder="Coupon text"
                        type="text"
                        name="text"
                        setValue={handleInputChange}
                        error={couponErrors.text}
                        isForm={true}
                    />

                    <Input
                        label="Residue"
                        value={couponData.residue}
                        placeholder="Residue"
                        type="number"
                        name="residue"
                        setValue={handleInputChange}
                        error={couponErrors.residue}
                        isForm={true}
                    />

                    <div className={styles.row}>
                        <Input
                            label="Discount"
                            value={couponData.discount}
                            placeholder="Discount"
                            type="number"
                            name="discount"
                            setValue={handleInputChange}
                            error={couponErrors.discount}
                            isForm={true}
                        />
                        <SelectInput
                            label="Discount type"
                            values={["%", "USD"]}
                            placeholder="Discount type"
                            value={couponData.type}
                            name="type"
                            setValue={handleInputChange}
                            error={couponErrors.type}
                        />
                    </div>

                    <Input
                        label="Expiration date"
                        placeholder="Expiration date"
                        value={couponData.expiration}
                        name="expiration"
                        setValue={handleInputChange}
                        error={couponErrors.expiration}
                        type="date"
                        isForm={true}
                    />

                    {/* <DatePickerInput
                        label="Expiration date"
                        placeholder="Expiration date"
                        value={couponData.expiration}
                        name="expiration"
                        setValue={handleInputChange}
                        error={couponErrors.expiration}
                    /> */}

                    <button style={{ maxWidth: "300px", fontSize: "14px", margin: "20px auto" }} className='green-btn' onClick={handleCreateCoupon}>Create</button>
                </div>
            </div>
        </Overflow>
    );
}

export default CreateCoupon;