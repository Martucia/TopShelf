import { NavLink } from "react-router-dom";

import OrderProduct from './OrderProduct/OrderProduct'

import styles from './OrderProducts.module.sass';
import cartIcon from "@images/cart.svg"

const OrderProducts = ({ products }) => {

    return (
        <div className={styles.wrapper}>
            {products && products.length > 0
                ? (
                    <div className={styles.list}>
                        {products?.map(product => (
                            <OrderProduct key={product._id} product={product.product} quantity={product.quantity} />
                        ))}
                    </div>
                )
                : <div className={styles.empty}>
                    <div className={styles.circle}>
                        <img src={cartIcon} alt="" />
                    </div>
                    <NavLink style={{ maxWidth: "190px", fontSize: "16px" }} className="green-btn" to="/catalog">
                        Show Products
                    </NavLink>
                </div>
            }


            <div className={styles.info}>
                <div className={styles.block}>
                    <div className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none">
                            <path d="M6.16774 18.058C6.91941 17.2513 8.06525 17.3155 8.72525 18.1955L9.65108 19.433C10.3936 20.4138 11.5944 20.4138 12.3369 19.433L13.2627 18.1955C13.9227 17.3155 15.0686 17.2513 15.8202 18.058C17.4519 19.7997 18.7811 19.2222 18.7811 16.7838V6.45301C18.7811 2.75884 17.9194 1.83301 14.4544 1.83301H7.52442C4.05942 1.83301 3.19775 2.75884 3.19775 6.45301V16.7747C3.20692 19.2222 4.54524 19.7905 6.16774 18.058Z" stroke="#05422C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.479 9.16699H13.5207" stroke="#05422C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className={styles.title}>
                        Order by 10pm for free next day delivery on Orders overs $100
                    </div>
                    <div className={styles.text}>
                        We deliver Monday to Saturday - excluding Holidays
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22" fill="none">
                            <path d="M3.57227 6.81934L11.6664 11.5035L19.7056 6.84681" stroke="#05422C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.6665 19.8083V11.4941" stroke="#05422C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.4757 8.40551V13.5939C20.4757 13.6397 20.4757 13.6763 20.4666 13.7222C19.8249 13.163 18.9999 12.833 18.0832 12.833C17.2216 12.833 16.4241 13.1355 15.7916 13.6397C14.9482 14.3089 14.4166 15.3447 14.4166 16.4997C14.4166 17.1872 14.6091 17.838 14.9482 18.388C15.0307 18.5347 15.1316 18.6722 15.2416 18.8005L13.5641 19.7264C12.5191 20.313 10.8141 20.313 9.76907 19.7264L4.87407 17.013C3.76491 16.3989 2.85742 14.8589 2.85742 13.5939V8.40551C2.85742 7.14051 3.76491 5.60053 4.87407 4.98636L9.76907 2.27301C10.8141 1.68634 12.5191 1.68634 13.5641 2.27301L18.4591 4.98636C19.5682 5.60053 20.4757 7.14051 20.4757 8.40551Z" stroke="#05422C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21.7498 16.4997C21.7498 17.5997 21.264 18.5805 20.5032 19.2497C19.8524 19.818 19.009 20.1663 18.0832 20.1663C16.0573 20.1663 14.4165 18.5255 14.4165 16.4997C14.4165 15.3447 14.9482 14.3088 15.7915 13.6397C16.424 13.1355 17.2215 12.833 18.0832 12.833C20.109 12.833 21.7498 14.4738 21.7498 16.4997Z" stroke="#05422C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18.3123 15.3535V16.7285L17.1665 17.416" stroke="#05422C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className={styles.title}>
                        Free next day delivery to stores.
                    </div>
                    <div className={styles.text}>
                        Home delivery is $4.99 for orders under $100 and is FREE for all orders over $100
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22" fill="none">
                            <path d="M14.0837 1.83301V10.9997C14.0837 12.008 13.2587 12.833 12.2503 12.833H2.16699V6.98467C2.83616 7.78217 3.86285 8.27717 4.99952 8.24967C5.92535 8.23134 6.75949 7.87384 7.38283 7.27801C7.66699 7.03968 7.90535 6.73717 8.08868 6.40717C8.41868 5.848 8.60199 5.18798 8.58366 4.50048C8.55616 3.42798 8.07951 2.48384 7.33701 1.83301H14.0837Z" stroke="#05422C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.5003 12.833V15.583C20.5003 17.1047 19.272 18.333 17.7503 18.333H16.8337C16.8337 17.3247 16.0087 16.4997 15.0003 16.4997C13.992 16.4997 13.167 17.3247 13.167 18.333H9.50033C9.50033 17.3247 8.67533 16.4997 7.66699 16.4997C6.65866 16.4997 5.83366 17.3247 5.83366 18.333H4.91699C3.39533 18.333 2.16699 17.1047 2.16699 15.583V12.833H12.2503C13.2587 12.833 14.0837 12.008 14.0837 10.9997V4.58301H15.7703C16.4303 4.58301 17.0353 4.94052 17.3653 5.50885L18.9328 8.24967H17.7503C17.2462 8.24967 16.8337 8.66217 16.8337 9.16634V11.9163C16.8337 12.4205 17.2462 12.833 17.7503 12.833H20.5003Z" stroke="#05422C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.66683 20.1667C8.67935 20.1667 9.50016 19.3459 9.50016 18.3333C9.50016 17.3208 8.67935 16.5 7.66683 16.5C6.65431 16.5 5.8335 17.3208 5.8335 18.3333C5.8335 19.3459 6.65431 20.1667 7.66683 20.1667Z" stroke="#05422C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.0003 20.1667C16.0128 20.1667 16.8337 19.3459 16.8337 18.3333C16.8337 17.3208 16.0128 16.5 15.0003 16.5C13.9878 16.5 13.167 17.3208 13.167 18.3333C13.167 19.3459 13.9878 20.1667 15.0003 20.1667Z" stroke="#05422C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.5002 11V12.8333H17.7502C17.246 12.8333 16.8335 12.4208 16.8335 11.9167V9.16667C16.8335 8.6625 17.246 8.25 17.7502 8.25H18.9326L20.5002 11Z" stroke="#05422C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.58333 4.58366C8.58333 5.68366 8.09751 6.66449 7.33668 7.33366C6.68585 7.90199 5.8425 8.25033 4.91667 8.25033C2.89083 8.25033 1.25 6.60949 1.25 4.58366C1.25 3.42866 1.78167 2.39283 2.625 1.72366C3.2575 1.2195 4.055 0.916992 4.91667 0.916992C6.9425 0.916992 8.58333 2.55783 8.58333 4.58366Z" stroke="#05422C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.14583 3.4375V4.8125L4 5.5" stroke="#05422C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className={styles.text}>
                        30 days to return it to us for a refund. We have made returns SO EASY - you can now return your order to a store or send it with FedEx FOR FREE
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderProducts;