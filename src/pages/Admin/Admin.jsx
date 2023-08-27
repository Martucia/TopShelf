import { useEffect } from 'react';
import styles from './Admin.module.sass';
import Coupons from './Coupons/Coupons';
import Panel from './Panel/Panel';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Admin = () => {
    const isAdmin = useSelector(state => state.user.isAdmin);
    const isAuth = useSelector(state => state.user.isAuth);

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth !== null) {
            if (!isAdmin) {
                navigate("/");
            }
        }
    }, [isAdmin])

    if (isAdmin) return (
        <div className={styles.wrapper}>
            <Panel />

            <div className={styles.inner}>
                <Routes>
                    <Route exact path="/coupons" element={<Coupons />} />
                </Routes>
            </div>
        </div>
    );
}

export default Admin;