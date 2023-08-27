import styles from './Shipping.module.sass';

import Input from '../../../components/Input/Input';
import SelectInput from '../../../components/SelectInput/SelectInput';

const country = [
    "Ukraine",
    "Italy",
    "Poland",
    "Germany",
    "France",
    "Brazil"
];

const cities = {
    "Ukraine": [
        "Ternopil",
        "Kyiv",
        "Dnipro",
        "Odessa",
        "Lviv",
        "Kharkiv",
    ],
    "Italy": [
        "Rome",
        "Bologna",
        "Genoa",
        "Parma",
        "Verona",
        "Milan"
    ],
    "Poland": [
        "Warsaw",
        "Poznan",
        "Gdynia",
        "Pila",
        "Wrorlaw",
        "Krakiw"
    ],
    "Germany": [
        "Berlin",
        "Hanover",
        "Cologne",
        "Frankfurt",
        "Munich",
        "Esseno"
    ],
    "France": [
        "Paris",
        "Lyon",
        "Nantes",
        "Toulouse",
        "Geneva",
        "Marseille"
    ],
    "Brazil": [
        "Brasilia",
        "Manaus",
        "Sao Luis",
        "Natal",
        "Belem",
        "Palmas"
    ]
}

const Shipping = ({ data, set, errors }) => {


    return (
        <div className={styles.wrapper}>
            <div className={styles.row}>
                <Input
                    label="First Name *"
                    value={data.name}
                    placeholder="First Name"
                    name="name"
                    setValue={set}
                    error={errors.name}
                    isForm={true}
                />
                <Input
                    label="Last Name *"
                    value={data.lastname}
                    placeholder="Last Name"
                    name="lastname"
                    setValue={set}
                    error={errors.lastname}
                    isForm={true}
                />
            </div>
            <SelectInput
                label="Country *"
                value={data.country}
                values={country}
                placeholder="Country"
                name="country"
                setValue={set}
                error={errors.country}
                isForm={true}
            />

            <SelectInput
                label="City *"
                value={data.city}
                values={cities[data.country]}
                placeholder="City"
                name="city"
                setValue={set}
                error={errors.city}
                isForm={true}
            />

            <Input
                value={data.street}
                placeholder="House number and street name"
                name="street"
                setValue={set}
                error={errors.street}
                isForm={true}
            />

            <Input
                value={data.apartment}
                placeholder="Apartment, suite, unit, etc. (optional)"
                name="apartment"
                setValue={set}
                error={errors.apartment}
                isForm={true}
            />

            <div className={styles.row}>
                <Input
                    label="Phone (optional)"
                    value={data.phone}
                    placeholder="Phone"
                    name="phone"
                    setValue={set}
                    error={errors.phone}
                    isForm={true}
                />

                <Input
                    label="Email address *"
                    value={data.email}
                    placeholder="Email address"
                    name="email"
                    setValue={set}
                    error={errors.email}
                    isForm={true}
                />
            </div>

            <Input
                label="Order Notes (optional)"
                value={data.notes}
                placeholder="Order Notes"
                name="notes"
                setValue={set}
                error={errors.notes}
                isForm={true}
                type="textarea"
            />
        </div>
    );
}

export default Shipping;