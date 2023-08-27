import React from 'react';

import styles from './OrderProgressBar.module.sass';

const OrderProgressBar = ({ sum }) => {
    const progressStyle = {
        width: `${sum >= 100 ? 100 : sum}%`,
    };

    return (
        <>
            <div className={styles.progress_bar}>
                <div className={styles.progress} style={progressStyle}></div>
            </div>
            {sum < 100
                && <div className={styles.progress_info}>
                    <span>${sum.toFixed(2)}</span>
                    <span>$100.00</span>
                </div>
            }

        </>
    );
};

export default OrderProgressBar;
