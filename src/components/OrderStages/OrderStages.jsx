import styles from './OrderStages.module.sass';

const OrderStages = ({ page }) => {
    
    return (
        <div className={styles.stages}>
            <div className={styles.inner}>
                <button className={`${styles.link} ${page > 1 ? styles.completed : styles.active}`}>
                    <span className={styles.icon}>
                        {page > 1
                            ? (
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.31445 3.99988L4.43445 7.11988L10.6855 0.879883" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )
                            : (
                                <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.375 4.47454V3.9087C4.375 2.5962 5.43083 1.30704 6.74333 1.18454C8.30667 1.03287 9.625 2.2637 9.625 3.79787V4.60287" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.25014 12.8337H8.75014C11.0951 12.8337 11.5151 11.8945 11.6376 10.7512L12.0751 7.25116C12.2326 5.82783 11.8243 4.66699 9.33348 4.66699H4.66681C2.17598 4.66699 1.76764 5.82783 1.92514 7.25116L2.36264 10.7512C2.48514 11.8945 2.90514 12.8337 5.25014 12.8337Z" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.03895 6.99967H9.04419" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.95497 6.99967H4.96021" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )
                        }

                    </span>
                    <span className={styles.text}>
                        Shopping Cart
                    </span>
                </button>

                <div className={`${styles.line} ${page > 1 && styles.active}`}>
                    <div className={styles.progress}></div>
                </div>

                <button className={`${styles.link} ${page > 2 ? styles.completed : page == 2 ? styles.active : ""}`}>
                    <span className={styles.icon}>
                        {page > 2
                            ? (
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.31445 3.99988L4.43445 7.11988L10.6855 0.879883" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )
                            : (
                                <svg viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3332 6.99967V9.91634C13.3332 11.6663 12.1665 12.833 10.4165 12.833H4.58317C2.83317 12.833 1.6665 11.6663 1.6665 9.91634V6.99967C1.6665 5.41301 2.62317 4.30467 4.11067 4.11801C4.26234 4.09467 4.41984 4.08301 4.58317 4.08301H10.4165C10.5682 4.08301 10.714 4.08883 10.854 4.11217C12.359 4.28717 13.3332 5.40134 13.3332 6.99967Z" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.8551 4.11282C10.7151 4.08949 10.5693 4.08367 10.4176 4.08367H4.58432C4.42098 4.08367 4.26348 4.09533 4.11182 4.11866C4.19348 3.95533 4.31015 3.80366 4.45015 3.66366L6.34598 1.76199C7.14515 0.968659 8.44015 0.968659 9.23932 1.76199L10.2601 2.7945C10.6335 3.162 10.8318 3.62866 10.8551 4.11282Z" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.3332 7.29199H11.5832C10.9415 7.29199 10.4165 7.81699 10.4165 8.45866C10.4165 9.10033 10.9415 9.62533 11.5832 9.62533H13.3332" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}

                    </span>
                    <span className={styles.text}>
                        Checkout
                    </span>
                </button>

                <div className={`${styles.line} ${page > 2 && styles.active}`}>
                    <div className={styles.progress}></div>
                </div>


                <button className={`${styles.link} ${page == 3 ? styles.active : ""}`}>
                    <span className={styles.icon}>
                        <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.031 8.57104C11.031 9.32354 11.6493 9.93604 12.4018 9.93604C12.4018 12.1235 11.8535 12.6719 9.666 12.6719H4.19433C2.00683 12.6719 1.4585 12.1235 1.4585 9.93604V9.66771C2.211 9.66771 2.82933 9.04937 2.82933 8.29687C2.82933 7.54437 2.211 6.92604 1.4585 6.92604V6.65771C1.46433 4.47021 2.00683 3.92188 4.19433 3.92188H9.66016C11.8477 3.92188 12.396 4.47021 12.396 6.65771V7.20604C11.6435 7.20604 11.031 7.81271 11.031 8.57104Z" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.45631 3.92178H4.15381L5.86298 2.21262C7.25714 0.81845 7.95714 0.81845 9.35131 2.21262L9.70131 2.56262C9.33381 2.93012 9.24631 3.47262 9.45631 3.92178Z" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.7627 3.92188L5.7627 12.6719" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5" />
                        </svg>
                    </span>
                    <span className={styles.text}>
                        Order Complete
                    </span>
                </button>
            </div>
        </div>
    );
}

export default OrderStages;