import styles from './Checkbox.module.sass';

const Checkbox = ({ text, value, setValue, required }) => {
    const handleChange = () => {
        if (typeof value !== Boolean) {
            setValue(true)
        } else {
            setValue(!value)
        }
    }

    return (
        <div className={styles.block}>
            <input
                checked={value == true}
                onChange={handleChange}
                className={`${styles.checkbox} ${value == "error" && styles.error}`}
                type="checkbox"
            />
            <label className={styles.label}>
                {text}
            </label>
        </div>

    );
}

export default Checkbox;