import styles from './Title.module.sass';

const Title = ({ title, click, btnText }) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>
                {title}
            </h3>

            {btnText && (
                <button className={styles.btn} onClick={click}>
                    {btnText}
                </button>
            )}
        </div>
    );
}

export default Title;