import styles from './Confirm.module.sass';
import Overflow from '../Overflow/Overflow'

const Confirm = ({ alert, btnText, onSubmit, cancel }) => {
    return (
        <Overflow isCenter={true}>
            <div className={styles.confirm}>
                <h4 className={styles.title}>Are you sure?</h4>

                <div className={styles.text}>
                    {alert}
                </div>

                <div className={styles.btns}>
                    <button onClick={cancel} className={`${styles.btn} ${styles.cancel}`}>
                        Cancel
                    </button>

                    <button onClick={onSubmit} className={`${styles.btn} ${styles.accept}`}>
                        {btnText}
                    </button>
                </div>
            </div>
        </Overflow>
    );
}

export default Confirm;