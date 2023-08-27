import styles from './Overflow.module.sass';
import { useEffect, useState } from 'react';
import { useMainContext } from '../../utils/context';

const Overflow = ({ children, close = null, isCenter = false, zIndex = 10 }) => {
    const { width } = useMainContext();
    const [isMouseReleasedOnOverflow, setIsMouseReleasedOnOverflow] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        if (width > 500) {
            document.body.style.paddingRight = '5px';
        }

        return () => {
            document.body.style.overflow = 'auto';
            if (width > 500) {
                document.body.style.paddingRight = '0';
            }
        };
    }, []);

    const handleMouseDown = (e) => {
        if (e.target == e.currentTarget && e.button === 0) {
            setIsMouseReleasedOnOverflow(true);
        }
    };

    const handleClose = (e) => {
        if (e.target === e.currentTarget && e.target.id == "overflow" && isMouseReleasedOnOverflow && close) {
            close();
        } else {
            setIsMouseReleasedOnOverflow(false);
        }
    }

    return (
        <div
            id="overflow"
            className={`${styles.overflow} ${isCenter
                ? styles.overflow_center
                : ""}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleClose}
            style={{ zIndex: zIndex }}
        >
            {children}
        </div>
    );
}

export default Overflow;