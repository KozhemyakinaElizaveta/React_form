import React from "react";
import dayjs from 'dayjs';
import { addErrorIntoField } from "../utils";
import ErrorMessage from "./ErrorMessage";
import { FormControl} from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from "react-hook-form"

const DateInput = ({ label, name, control, errors}) => {
    return (
        <>
        <FormControl fullWidth sx={{ mb: '1rem' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <DatePicker
                defaultValue={dayjs('2022-04-17')}
                slotProps={{ textField: { variant: 'filled' } }}
                {...addErrorIntoField(errors[name])}{...field} required select label={label}
                />
            )}
            />
            {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
            </LocalizationProvider>
        </FormControl>
        </>
    )
}


export default DateInput