import { Avatar, Box, Button, Typography } from "@mui/material"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TextFields from "../components/TextFields";
import SelectFields from "../components/SelectFields";
import DateInput from "../components/DateInput";
import TimeInput from "../components/TimeInput";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const options_tower = [
    {
        label: "Tower A",
        value: "A",
    },
    {
        label: "Tower B",
        value: "B",
    },
];

var options_floor = []
for(var i = 3; i < 28; i++){
    var item = {};
    let stri = ''
    stri += i;
    item.label = stri;
    item.value = stri;
    options_floor.push(item);
}

var options_room = []
for(var j = 1; j < 11; j++){
    var cur = {};
    let str = ''
    str += j;
    cur.label = str;
    cur.value = str;
    options_room.push(cur);
}


// create schema validation
const schema = yup.object({
    tower: yup.string().required('Tower selection is required'),
    floor: yup.string().required('Floor selection is required'),
    room: yup.string().required('Room selection is required'),
    date: yup.string().required('Date selection is required'),
    time: yup.string().required('Time selection is required'),
    });

    const RegisterForm = () => {
    const {reset, handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: {
        tower: '',
        floor: '',
        room: '',
        date: '',
        time: '',
        comment: '',
        },
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: '4rem',
        alignItems: 'center'
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <CalendarMonthIcon />
        </Avatar>
        <Typography component='h1'>Booking a meeting room</Typography>

        {/* Form */}
        <form noValidate component='form' onSubmit={handleSubmit(onSubmit)} sx={{width: '100%', mt: '2rem' }}>
            <SelectFields errors={errors} control={control} name='tower' label='Select a tower' dropdownOptions={options_tower}/>
            <SelectFields errors={errors} control={control} name='floor' label='Select floor' dropdownOptions={options_floor}/>
            <SelectFields errors={errors} control={control} name='room' label='Select room number' dropdownOptions={options_room}/>
            <DateInput errors={errors} control={control} name='date' label='Select date'/>
            <TimeInput errors={errors} control={control} name='time' label='Select time range'/>
            <TextFields errors={errors} control={control} name='comment' label='Enter a comment' />

            <Button
            type="comfirm"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            >Confirm</Button>
        </form>
        </Box>
    )
}

export default RegisterForm