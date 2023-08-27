import styles from './Filter.module.sass';
import { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMainContext } from '../../utils/context';
import { useSelector } from 'react-redux';

const filters = [
    {
        "name": "price",
        "title": "FILTER BY PRICE",
        "type": "slider",
        "min": 0,
        "max": 240

    },
    {
        "name": "orderBy",
        "title": "ORDER BY",
        "type": "radio",
        "variables": [
            {
                "name": "Review Count"
            },
            {
                "name": "Popularity"
            },
            {
                "name": "Average Rating"
            },
            {
                "name": "Newness"
            },
            {
                "name": "Price: Low to High"
            },
            {
                "name": "Price: High to Low"
            },
            {
                "name": "Random Products"
            },
            {
                "name": "Product Name"
            }
        ]
    }
]

const Filter = ({ queryParams, setQueryParams }) => {
    const defaultPrice = () => {
        let out = filters.find(filter => filter.name == "price");

        return [out.min, out.max];
    }

    const categories = {
        name: "category",
        title: "PRODUCT CATEGORY",
        type: "radio",
        variables: useSelector(state => state.categories)
    }

    const [category, setCategory] = useState(null);
    const [orderBy, setOrderBy] = useState("Review Count");
    const [price, setPrice] = useState(defaultPrice);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [isOpen, setOpen] = useState(false);

    const navigate = useNavigate();
    const { width } = useMainContext();

    useEffect(() => {
        // const searchParams = new URLSearchParams(window.location.search.split("?")[1]);

        // const params = {};
        // for (const [key, value] of searchParams) {
        //     params[key] = value;
        // }

        setQueryParams(window.location.search);
    }, [window.location.search])


    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);

        const categoryOut = queryParams.get("category");
        const orderByOut = queryParams.get("orderBy");
        const minPrice = queryParams.get("minPrice");
        const maxPrice = queryParams.get("maxPrice");

        if (categoryOut) {
            setCategory(categoryOut);
        }
        if (orderByOut) {
            setOrderBy(orderByOut);
        }
        if (minPrice && maxPrice) {
            setPrice([parseInt(minPrice), parseInt(maxPrice)]);
        }

        setIsInitialLoad(false);

        setQueryParams(window.location.search);
    }, [])

    useEffect(() => {
        if (isInitialLoad) {
            return;
        }

        const queryParams = new URLSearchParams();

        if (category) {
            queryParams.set("category", category);
        }
        if (orderBy !== "Review Count") {
            queryParams.set("orderBy", orderBy);
        }

        queryParams.set("minPrice", price[0]);
        queryParams.set("maxPrice", price[1]);

        const queryString = queryParams.toString();

        navigate(`/catalog?${queryString}`, { replace: true });

        setQueryParams(window.location.search);
    }, [category, orderBy, price, navigate])


    const handleClearFilters = () => {
        setCategory(null);
        setOrderBy("Review Count");
        setPrice(defaultPrice);
    }

    return (
        <div className={styles.filter}>
            <div className={styles.header}>
                <p>
                    Filters
                </p>
                {width < 1100 && <button onClick={() => setOpen(!isOpen)}>{isOpen ? "up" : "down"}</button>}

            </div>

            <div className={width > 1100 || isOpen ? styles.inner : styles.inner_close}>
                <FilterBlock
                    active={category}
                    set={setCategory}
                    filter={categories}
                />

                {filters.map((filter) => (
                    <FilterBlock
                        key={filter.name}
                        active={
                            filter.name === "price"
                                ? price
                                : orderBy
                        }
                        set={
                            filter.name === "price"
                                ? setPrice
                                : setOrderBy
                        }
                        filter={filter}
                    />
                ))}
                <button onClick={handleClearFilters} className={styles.clear}>
                    Clear Filters
                </button>
            </div>

        </div>
    );
}

const FilterBlock = ({ filter, set, active }) => {
    const [value, setValue] = useState(active);

    const customTheme = createTheme({
        components: {
            MuiSlider: {
                styleOverrides: {
                    thumb: {
                        color: "#808080",
                    },
                    track: {
                        color: "#808080",
                    },
                    rail: {
                        color: "#F4F4F4",
                    },
                },
            },
        },
    });

    useEffect(() => {
        if (filter.name == "price") {
            setValue(active);
        }
    }, [active])


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function valuetext(value) {
        return `${value}`;
    }

    const handleSetPrice = () => {
        set(value);
    }

    return (
        <div className={styles.block}>
            <div className={styles.block_title}>
                {filter.title}
            </div>
            {filter.type == "radio"
                &&
                <div className={styles.radios}>
                    {filter.variables.map(variable =>
                        <label key={variable.name} onClick={() => set(filter.name == "category" ? variable._id : variable.name)} className={`${styles.label} ${filter.name == "category" ? active == variable._id ? styles.active : "" : active == variable.name ? styles.active : ""}`} >
                            <div className={styles.radio_circle}>
                                <div className={styles.radio_circle_inner}>

                                </div>
                            </div>
                            <div className={styles.radio_text}>{variable.name}</div>
                            {variable.count && <div className={styles.count}>
                                {variable.count}
                            </div>}

                        </label>
                    )}
                </div>
            }

            {filter.type == "slider"
                && <div className={styles.slider}>
                    <div className={styles.slider_header}>
                        <div>
                            ${value[0]}
                        </div>
                        <div>
                            ${value[1]}
                        </div>
                    </div>
                    <ThemeProvider theme={customTheme}>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            min={filter.min}
                            step={1}
                            max={filter.max}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                    </ThemeProvider>

                    <button onClick={handleSetPrice} className={styles.slider_btn}>
                        Apply
                    </button>
                </div>

            }

        </div>
    )
}


export default Filter;