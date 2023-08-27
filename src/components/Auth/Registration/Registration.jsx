import { useEffect, useState } from 'react';
import Input from '../../Input/Input';
import styles from '../Auth.module.sass';
import { useDispatch, useSelector } from "react-redux";
import { registration } from '../../../actions/users';
import { NavLink, useNavigate } from "react-router-dom";

const Registration = () => {
    const [data, setData] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({});


    const dispatch = useDispatch()
    const navigate = useNavigate();

    const isAuth = useSelector(state => state.user.isAuth);

    useEffect(() => {
        if (isAuth) {
            navigate("/");
        }
    }, [isAuth]);

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

        if (!data.name.trim()) {
            setError("name", "Incorrect name");
            isValid = false;
        }

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValid() && isObjectEmpty(errors)) {
            dispatch(registration(data)).then(res => {
                if (res?.errors || res?.message) {
                    setErrors({ ...errors, ...res?.errors, message: res?.message })
                }
            });
        }
    }

    const setError = (name, value) => {
        setErrors(prev => ({ ...prev, [name]: value }));
    }

    const handleChangeValue = (name, value) => {
        setErrors(prev => ({ ...prev, [name]: "", message: "" }));
        setData(prev => ({ ...prev, [name]: value }));
    }

    return (
        <div className={styles.auth}>
            <h3 className={styles.title}>
                Registration
            </h3>

            <form className={styles.form}>
                <Input
                    label="Name"
                    name="name"
                    placeholder='Your name'
                    value={data.name}
                    setValue={value => handleChangeValue("name", value)}
                    error={errors.name}
                />
                <Input
                    label="Email"
                    name="email"
                    placeholder='Your email address'
                    value={data.email}
                    setValue={value => handleChangeValue("email", value)}
                    error={errors.email}
                />
                <Input
                    label="Password"
                    name="password"
                    placeholder='Your password'
                    value={data.password}
                    type="password"
                    setValue={value => handleChangeValue("password", value)}
                    error={errors.password}
                />

                <div className={styles.error}>{errors.message}</div>

                <button onClick={handleSubmit} className='green-btn' style={{ fontSize: "16px" }}>
                    Registration
                </button>
            </form>

            <NavLink to="/login" className={styles.link}>
                Already have an account?
            </NavLink>
        </div>
    );
}

export default Registration;