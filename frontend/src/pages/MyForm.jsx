import "bootstrap/dist/css/bootstrap.min.css";
import "./MyForm.css";
import React, { useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Axios from 'axios';
import { useStateContext } from '../context/ContextProvider'
import { host } from '../config.js'

const MyForm = () => {
    //const [value, setValue] = useState(
    //    dayjs(new Date()),
    //  );
    const { loading, setLoading } = useStateContext();
    const [time, setTime] = useState(dayjs(new Date()));
    const [passengerCount, setPassengerCount] = useState(1)
    const handleChange = (newValue) => {
        setTime(newValue);
        console.log(time);
      };
    const submit = () => {
        setLoading(true)
        const passengerCount = Number(document.querySelector("#passengerCount").value)
        const tripDistance = Number(document.querySelector("#tripDistance").value)
        const ratecodeID = Number(document.querySelector("#ratecodeID").value)
        const puLocationID = Number(document.querySelector("#puLocationID").value)
        const doLocationID = Number(document.querySelector("#doLocationID").value)
        const averageSpeedInHour = Number(document.querySelector("#averageSpeedInHour").value)
        const ridesInHour = Number(document.querySelector("#ridesInHour").value)
        Axios.post(host+'forecast',{
            passengerCount:passengerCount,
            tripDistance:tripDistance,
            ratecodeID:ratecodeID,
            puLocationID:puLocationID,
            doLocationID:doLocationID,
            averageSpeedInHour:averageSpeedInHour,
            ridesInHour:ridesInHour,
            time:time
        }).then((res) => {
            console.log(res.data)
        })
    }
    return (
        <div  id="form-div">
        <Form>
            <Form.Label>Passenger Count</Form.Label>
            <Form.Select aria-label="Passenger Count" className="mb-2 form-select-lg" id="passengerCount">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </Form.Select>
            <Form.Label>Trip Distance</Form.Label>
            <Form.Control type="text" className="mb-2 form-control-lg" id="tripDistance"/>
            <Form.Label>Rate Code ID</Form.Label>
            <Form.Select aria-label="ratecodeID" className="mb-2 form-select-lg" id="ratecodeID">
                <option value="1">1.0</option>
                <option value="2">2.0</option>
                <option value="3">3.0</option>
                <option value="6">6.0</option>
            </Form.Select>
            <Form.Label>PU Location ID</Form.Label>
            <Form.Control type="text" className="mb-2 form-control-lg" id="puLocationID"/>
            <Form.Label>DO Location ID</Form.Label>
            <Form.Control type="text" className="mb-2 form-control-lg" id="doLocationID"/>
            <Form.Label>Average Speed In Hour</Form.Label>
            <Form.Control type="text" className="mb-2 form-control-lg" id="averageSpeedInHour"/>
            <Form.Label>Rides In Hour</Form.Label>
            <Form.Control type="text" className="mb-2 form-control-lg" id="ridesInHour"/>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={0}>
                    <Form.Label>Pick Up Date</Form.Label>
                    <DesktopDatePicker
                        inputFormat="MM/DD/YYYY"
                        value={time}
                        onChange={handleChange}
                        className="form-control"
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <Form.Label>Pick Up Time</Form.Label>
                    <TimePicker
                        ampm={false}
                        openTo="hours"
                        views={['hours', 'minutes', 'seconds']}
                        inputFormat="HH:mm:ss"
                        mask="__:__:__"
                        value={time}
                        className="mb-2 form-control"
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
            </LocalizationProvider>  
            <Button variant="primary" type="submit" className="lef" onClick={submit}>
                Submit
            </Button>
        </Form>
        </div>
    )
}

export default MyForm;
