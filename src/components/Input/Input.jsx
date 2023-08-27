import { useEffect, useState } from 'react';
import styles from './Input.module.sass';
import eyeOpen from '@images/eye-open.png'
import eyeClose from '@images/eye-close.png'

const Input = ({ label = "", value, placeholder = "", type = "text", name, setValue, error = "", isForm = false }) => {
    const [currentType, setCurrentType] = useState(type);

    const handleWatchPassword = (e) => {
        e.preventDefault();

        if (currentType == "password") {
            setCurrentType("text");
        } else {
            setCurrentType("password");
        }
    }

    useEffect(() => {
        const handleWheel = (event) => {
            event.preventDefault();
        };

        const inputElement = document.querySelector(`input[name="${name}"]`);

        if (type == "number") {
            inputElement.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (type == "number") {
                inputElement.removeEventListener('wheel', handleWheel);
            }

        };
    }, [name]);

    if (type == "textarea") return (
        <label className={styles.label} htmlFor={name}>
            <div className={styles.name}>{label}</div>

            <div className={styles.block}>
                <textarea
                    className={`${styles.input} ${error.length > 0 ? styles.input_error : ""}`}
                    onChange={(event) => isForm ? setValue(event.target.value, name, type) : setValue(event.target.value)}
                    value={value}
                    type={currentType}
                    placeholder={placeholder}
                    name={name}
                    rows={5}
                    autoComplete="off"
                />
                {type == "password"
                    && <button
                        onClick={handleWatchPassword}
                        className={styles.watch}>
                        <img src={currentType == "password" ? eyeClose : eyeOpen} alt="" />
                    </button>}

            </div>

            <div className={styles.error}>{error}</div>
        </label>
    );

    return (
        <label className={styles.label} htmlFor={name}>
            <div className={styles.name}>{label}</div>

            <div className={styles.block}>
                <input
                    className={`${styles.input} ${error.length > 0 ? styles.input_error : ""}`}
                    onChange={(event) => isForm ? setValue(event.target.value, name, type) : setValue(event.target.value)}
                    value={value}
                    type={currentType}
                    placeholder={placeholder}
                    name={name}
                    inputMode={type === "number" ? "numeric" : undefined}
                    autoComplete="new-password"
                />
                {type == "password"
                    && <button
                        onClick={handleWatchPassword}
                        className={styles.watch}>
                        <img src={currentType == "password" ? eyeClose : eyeOpen} alt="" />
                    </button>}

            </div>

            <div className={styles.error}>{error}</div>
        </label>

    );
}

export default Input;