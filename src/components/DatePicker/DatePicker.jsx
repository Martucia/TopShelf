import './DatePicker.sass';
import styles from './DatePicker.module.sass';

import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerInput({ name, label, error, setValue, value }) {
    return (
        <label className={styles.label} htmlFor={name}>
            <div className={styles.name}>{label}</div>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    style={{ border: "1px solid #f4f4f4", borderRadius: "20px !important" }}
                    views={['year', 'month', 'day']}
                    value={value}
                    onChange={(newValue) => setValue(newValue, name)}
                    disablePast={true}
                />
            </LocalizationProvider>


            <div className={styles.error}>{error}</div>
        </label>
    );
}