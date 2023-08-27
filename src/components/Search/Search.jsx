import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../actions/catalog";
import { useNavigate, useLocation } from "react-router-dom";

import styles from './Search.module.sass';
import search from '@images/search.svg';
import List from "./List/List";
import Overflow from "../Overflow/Overflow";

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [isOpenList, setOpenList] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleSearch = () => {
        navigate("/catalog");
        dispatch(findProducts(searchText));
        setOpenList(false);
    }

    const handleOnClick = () => {
        setOpenList(true);
    }

    useEffect(() => {
        setOpenList(false);
    }, [pathname])

    const handleOnChange = (e) => {
        setSearchText(e.target.value);

        dispatch(findProducts(e.target.value, "onChange"));

        setOpenList(true);
    }

    return (
        <>
            <div className={styles.search}>
                <input
                    onClick={handleOnClick}
                    value={searchText}
                    onChange={handleOnChange}
                    type="search"
                    placeholder="Search"
                />
                <button className={styles.btn} onClick={handleSearch}>
                    <img src={search} alt="logo" />
                </button>
                {searchText.length > 0 && isOpenList && <List close={() => setOpenList(false)} />}

            </div>
            {searchText.length > 0 && isOpenList && <Overflow zIndex={8} />}

        </>

    );
}

export default Search;