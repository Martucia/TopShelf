import styles from './Loader.module.sass';
import img from '@images/loader.gif';
import './Animation.scss';

const Loader = () => {
    return (
        <div className={styles.loader}>
            <img className={styles.loader_img} src={img} alt="" />
            <div className="loader-text">
            </div>
        </div>
    );
}

export default Loader;