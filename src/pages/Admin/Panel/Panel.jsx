import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";

import styles from './Panel.module.sass';
import { logout } from '../../../reducers/usersReducer';

const Panel = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <div className={styles.panel}>
            <NavLink className={styles.link} to="/admin/coupons">
                Coupons
            </NavLink>
            <NavLink className={styles.link} to="/admin/orders">
                Orders
            </NavLink>

            <button onClick={handleLogout} className={styles.logout}>
                Logout
            </button>
        </div>
    );
}

export default Panel;