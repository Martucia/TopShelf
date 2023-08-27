import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../actions/users';
import { NavLink, useNavigate } from 'react-router-dom';
import Input from '../../Input/Input';
import styles from '../Auth.module.sass';

const Login = () => {
    const [data, setData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuth = useSelector(state => state.user.isAuth);

    useEffect(() => {
        if (isAuth) {
            navigate("/");
        }
    }, [isAuth]);

    const setError = (name, value) => {
        setErrors(prev => ({ ...prev, [name]: value }));
    }

    function isObjectEmpty(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key) && obj[key].trim() !== '') {
                return false;
            }
        }
        return true;
    }

    const isValid = () => {
        let isValid = true;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!data.email.trim()) {
            setError("email", "Incorrect email");
            isValid = false;
        } else if (!emailPattern.test(data.email)) {
            setError("email", "Incorrect email");
            isValid = false;
        }

        if (!data.password.trim()) {
            setError("password", "Incorrect password");
            isValid = false;
        }

        return isValid;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isValid() && isObjectEmpty(errors)) {
            dispatch(login(data)).then(res => {
                if (res?.message && res?.message.length > 0) {
                    setError("message", res.message);
                }
            });
        }
    }

    const handleChangeValue = (name, value) => {
        setErrors(prev => ({ ...prev, [name]: "", message: "" }));
        setData(prev => ({ ...prev, [name]: value }));
    }

    return (
        <div className={styles.auth}>
            <h3 className={styles.title}>
                Login
            </h3>

            <div className={styles.form}>
                <Input
                    label="Email"
                    name="email"
                    placeholder='Your email address'
                    value={data.email}
                    setValue={(value) => handleChangeValue("email", value)}
                    error={errors.email}
                />
                <Input
                    label="Password"
                    name="password"
                    type="password"
                    placeholder='Your password'
                    value={data.password}
                    setValue={(value) => handleChangeValue("password", value)}
                    error={errors.password}
                />

                <div className={styles.error}>{errors.message}</div>

                <button onClick={handleSubmit} className='green-btn' style={{ fontSize: "16px" }}>
                    Login
                </button>
            </div>

            <NavLink to="/reg" className={styles.link}>
                Don't have an account?
            </NavLink>
        </div>
    );
}

export default Login;
