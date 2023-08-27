import styles from './Reffer.module.sass';
import bg from "@images/bg-vector.svg"

const Reffer = () => {
    return (
        <div className={styles.reffer}>
            <img className={styles.bg} src={bg} alt="" />
            <div className={styles.text}>
                <h3 className={styles.title}>
                    REFER A FRIENDS
                </h3>
                <div className={styles.desc}>
                    And get <span>$30!</span>
                </div>
            </div>
            <div className={styles.btn}>
                <button style={{maxWidth: "200px"}} className="green-btn">
                    Refer Here
                </button>
            </div>
        </div>
    );
}

export default Reffer;