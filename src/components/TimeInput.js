import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { FormControl} from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SingleInputTimeRangeField } from '@mui/x-date-pickers-pro/SingleInputTimeRangeField';
//import ErrorMessage from "./ErrorMessage";

const TimeInput = ({ label, name, control, errors}) => {
    const [value, setValue] = React.useState(() => [
        dayjs('2023-05-30T15:30'),
        dayjs('2023-05-30T18:30'),
    ]);

    return (
        <>
        <FormControl fullWidth sx={{ mb: '1rem' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['SingleInputTimeRangeField']}>
            <SingleInputTimeRangeField
            label="Time range"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            slotProps={{ textField: { variant: 'filled' } }}
            />
        </DemoContainer>
        </LocalizationProvider>
        </FormControl>
        </>
    );
}
export default TimeInput