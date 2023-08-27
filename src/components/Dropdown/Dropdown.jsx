import styles from './Dropdown.module.sass';
import { useEffect, useState, useRef } from 'react';
import arrow from '@images/dropdown_arrow.svg'

const Dropdown = ({ label, options = [], value, name, setValue, error }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);

        setValue(option._id, name, "dropdown")

        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.dropdown}>
            <div className={styles.name}>{label}</div>

            <div className={styles.input_block}>
                <button className={`${styles.toggle} ${error?.length > 0 ? styles.toggle_error : ""}`} style={{ color: selectedOption ? "#000" : "#C8C9CB" }} onClick={toggleDropdown}>
                    <span>{selectedOption ? selectedOption.name : 'Select an option'}</span>

                    <img style={{ transform: !isOpen ? 'rotate(90deg)' : 'rotate(270deg)' }} className={styles.arrow} src={arrow} alt="" />
                </button>

                {isOpen && (
                    <ul className={styles.list}>
                        {options.map((option) => (
                            <li
                                key={option._id}
                                className={styles.option}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>




            <div className={styles.error}>{error}</div>

        </div>
    );
}

export default Dropdown;