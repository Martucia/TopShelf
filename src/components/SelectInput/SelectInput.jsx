import styles from './SelectInput.module.sass';
import { useEffect, useState, useRef } from 'react';
import arrow from '@images/dropdown_arrow.svg'

const SelectInput = ({ label, values, value, placeholder = "", name, setValue, error = "", isForm = false }) => {
    const [isOpen, setOpen] = useState(false);
    const [localValue, setLocalValue] = useState("");
    const selectRef = useRef(null);

    const handleSetValue = (e) => {
        setValue(e.target.id, name);
        setOpen(false);
    }

    const handleOnChange = (e) => {
        if (value?.length > 0) {
            setLocalValue(e.target.value);
            setValue("", name, "selectInput");
            setOpen(true);
        } else {
            setLocalValue(e.target.value);
            setOpen(true);
        }
    }

    const valuesOut = localValue.length > 0 && values ? values.filter(val => val.toLowerCase().includes(localValue.toLowerCase())) : values ? values : [];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <label className={styles.label} htmlFor={name}>
            <div className={styles.name}>{label}</div>

            <div className={styles.block} ref={selectRef}>
                <div className={styles.input_block}>
                    <input
                        className={`${styles.input} ${error.length > 0 ? styles.input_error : ""}`}
                        onClick={() => setOpen(true)}
                        onChange={handleOnChange}
                        value={value?.length > 0 ? value : localValue}
                        type="text"
                        placeholder={placeholder}
                        name={name}
                        autoComplete="new-password"
                    />
                    <button className={styles.drop} onClick={() => setOpen(!isOpen)}>
                        <img style={{ transform: !isOpen ? 'rotate(90deg)' : 'rotate(270deg)' }} className={styles.arrow} src={arrow} alt="" />
                    </button>
                </div>

                {isOpen && (
                    <div className={styles.list}>
                        {valuesOut && valuesOut.length > 0
                            ? valuesOut.map(val => (
                                <button key={val} id={val} onClick={handleSetValue}>
                                    {val}
                                </button>
                            ))
                            :
                            (
                                <span className={styles.empty}>Empty</span>
                            )
                        }

                    </div>
                )}

            </div>

            <div className={styles.error}>{error}</div>
        </label>
    );
}

export default SelectInput;
