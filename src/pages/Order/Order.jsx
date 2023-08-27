import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import OrderInfo from '../../components/OrderInfo/OrderInfo.jsx';
import OrderProducts from '../../components/OrderProducts/OrderProducts';
import OrderStages from '../../components/OrderStages/OrderStages';
import Shipping from './Shipping/Shipping';
import Complete from './Complete/Complete.jsx'

import styles from './Order.module.sass';

import { createOrder } from '../../actions/order.js';

const Order = () => {
    const [page, setPage] = useState(1);
    const [coupon, setCoupon] = useState(null);
    const [shipping, setShipping] = useState({});
    const [shippingErrors, setShippingErrors] = useState({});
    const [confirm, setConfirm] = useState(false);

    const cart = useSelector(state => state.user.currentUser.cart);
    const productsSum = useSelector(state => state.user.currentUser?.cart?.reduce((accumulator, product) => {
        return accumulator + product.product.price * product.quantity;
    }, 0));

    const totalProductsSum = useSelector(state => state.user.currentUser?.cart?.reduce((accumulator, product) => {
        return accumulator + (product.product.discount !== 0 ? product.product.discount : product.product.price) * product.quantity;
    }, 0));

    const productsDiscount = useSelector(state => state.user.currentUser?.cart?.reduce((accumulator, product) => {
        return accumulator + (product.product.discount !== 0 ? product.product.price - product.product.discount : 0) * product.quantity;
    }, 0));

    const shippingCost = 6;
    const isShippingFree = totalProductsSum >= 100 ? true : false;

    const couponDiscount = () => {
        if (coupon) {
            if (coupon.discount.type == "%") {
                return totalProductsSum * (coupon.discount.number / 100);
            } else if (coupon.discount.type == "USD") {
                return coupon.discount.number;
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    }


    const totalSum = Number(totalProductsSum + (isShippingFree ? 0 : shippingCost) - couponDiscount());

    const dispatch = useDispatch();

    useEffect(() => {
        setShipping(prevData => {
            return {
                ...prevData, city: ""
            };
        });
    }, [shipping.country]);

    const handleChange = (value, name) => {
        setShippingErrors(prev => ({ ...prev, [name]: "" }))

        setShipping(prevData => {
            return {
                ...prevData, [name]: value
            };
        });
    };

    const isObjectNotEmpty = (obj) => {
        return Object.entries(obj).length !== 0;
    };

    const validateShippingData = () => {

        const requiredFields = [
            "name",
            "lastname",
            "country",
            "city",
            "street",
            "email"
        ]

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let errors = {};

        if (!emailPattern.test(shipping.email)) {
            errors.email = "Email is incorrect";
        }

        requiredFields.forEach(field => {
            if (!shipping[field] || shipping[field].trim() === "") {
                errors[field] = "Can't be empty";
            }
        })

        return errors;
    };

    const chackData = () => {
        const errors = validateShippingData();

        if (isObjectNotEmpty(errors)) {
            setShippingErrors(errors);

            return true;
        }

        if (!confirm || confirm == "error") {
            setConfirm("error");

            return true;
        }

    };

    const handleNextPage = () => {
        if (page == 2) {
            const hasErrors = chackData();

            if (!hasErrors) {

                dispatch(createOrder({
                    ...shipping,
                    couponId: coupon?._id,
                    cart,
                    shippingCost: isShippingFree ? 0 : shippingCost,
                    total_sum: totalSum
                }));

                window.scrollTo(0, 0);
                setPage(prev => prev + 1);
            }
        } else {
            window.scrollTo(0, 0);
            setPage(prev => prev + 1);
        }


    };

    return (
        <div className={styles.order}>
            <OrderStages page={page} setPage={setPage} />

            <div className={page < 3 ? styles.wrapper : styles.wrapper2} >
                <div className={styles.inner}>
                    <div className={styles.title}>
                        {page == 1 ? "Your Cart" : page == 2 ? "Shipping" : "Your Order"}
                    </div>
                    {page == 1
                        ?
                        <OrderProducts
                            products={cart}
                        />
                        :
                        page == 2
                            ?
                            <Shipping
                                data={shipping}
                                set={handleChange}
                                errors={shippingErrors}
                            />
                            :
                            <Complete />
                    }

                </div>
                {page < 3 && (
                    <OrderInfo
                        page={page}
                        couponDiscount={couponDiscount()}
                        setCoupon={setCoupon}
                        productsSum={productsSum}
                        totalSum={totalSum}
                        shippingCost={shippingCost}
                        setPage={handleNextPage}
                        count={cart?.length || 0}
                        isShippingFree={isShippingFree}
                        productsDiscount={productsDiscount}
                        totalProductsSum={totalProductsSum}
                        confirm={confirm}
                        setConfirm={setConfirm}
                    />
                )}

            </div>

        </div>
    );
}

export default Order;