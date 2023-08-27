import styles from './Toggle.module.sass';

const Toggle = ({ label, value, name, setValue }) => {

    return (
        <div className={styles.toggle}>
            <div className={styles.name}>{label}</div>

            <label onClick={() => setValue(!value, name, "toggle")} className={styles.toggle_control}>
                <span className={`${styles.control} ${value ? styles.active : ""}`}></span>
            </label>
        </div>
    );
}

export default Toggle;