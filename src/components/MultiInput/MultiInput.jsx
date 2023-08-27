import { useEffect, useState } from 'react';
import styles from './MultiInput.module.sass';

const MultiInput = ({ label, value, placeholder = "", name, setValue, error = "" }) => {
    const [val, setVal] = useState(value);
    const [isFirstRended, setFirstRender] = useState(true);

    const handleChange = (e) => {
        setFirstRender(false);
        setVal(prev => prev.map((item, index) => index == e.target.id ? e.target.value : item));
    }

    const handlePlus = () => {
        setVal(prev => [...prev, ""])
    }

    const handleDelete = (index) => {
        setVal(prev => prev.filter((inp, i) => i !== index))
    }

    useEffect(() => {
        if (!isFirstRended) {
            setValue(val, name, "multiinput")
        }
    }, [val])

    return (
        <div className={styles.multiinput}>
            <div className={styles.name}>{label}</div>

            {val.map((inp, index) =>
                <div key={inp + index} className={styles.input_block}>
                    <input
                        id={index}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className={`${styles.input} ${error.length > 0 ? styles.input_error : ""}`}
                        type="text"
                        value={inp}
                    />
                    {index == val.length - 1
                        ? <button onClick={handlePlus} className={styles.btn}>Plus</button>
                        : <button onClick={() => handleDelete(index)} className={styles.btn}>Del</button>}

                </div>
            )}

            <div className={styles.error}>{error}</div>
        </div>
    );
}

export default MultiInput;