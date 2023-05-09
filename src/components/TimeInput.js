import * as React from 'react';
//import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { FormControl} from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { SingleInputTimeRangeField } from '@mui/x-date-pickers-pro/SingleInputTimeRangeField';
import { addErrorIntoField } from "../utils";
import ErrorMessage from "./ErrorMessage";
import { Controller } from "react-hook-form"
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const TimeInput = ({ label, name, control, errors}) => {


    return (
        <>
        <FormControl fullWidth sx={{ mb: '1rem' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['SingleInputTimeRangeField']}>
        <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <TimePicker
            color="secondary"
            slotProps={{ textField: { variant: 'filled' } }}
            {...addErrorIntoField(errors[name])}{...field} required select label={label}/>
        )}
        />
        {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
        </DemoContainer>
        </LocalizationProvider>
        </FormControl>
        </>
    );
}
export default TimeInput