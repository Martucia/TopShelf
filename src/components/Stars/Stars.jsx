import React, { useState } from 'react';
import styles from './Stars.module.sass';

const Stars = ({ mark = 0, type = "show", setedMark, setMark }) => {
    const [hoveredStar, setHoveredStar] = useState(null);

    return (
        <>
            {[1, 2, 3, 4, 5].map((value) => (
                <Star
                    type={type}
                    key={value}
                    isFilled={value <= mark}
                    isHovered={value <= hoveredStar}
                    onMouseEnter={() => type == "set" ? setHoveredStar(value) : null}
                    onMouseLeave={() => type == "set" ? setHoveredStar(null) : null}
                    isActive={value <= setedMark}
                    onClick={() => type == "set" ? setMark(value) : null}
                />
            ))}
        </>
    );
}

const Star = ({ type, isFilled, isHovered, onMouseEnter, onMouseLeave, onClick, isActive }) => (
    <svg style={{ transition: "0.6s" }} className={`${isHovered || isActive ? styles.hovered : ""}`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
            fill={isFilled || isHovered ? '#FFC107' : '#F4F4F4'}
            stroke={isFilled || isHovered ? '#FFC107' : '#F4F4F4'}
            strokeWidth="1.5"
            style={{ transition: "0.6s", cursor: type == "set" ? "pointer" : "" }}
            strokeLinecap="round"
            strokeLinejoin="round"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        />
    </svg>
);

export default Stars;