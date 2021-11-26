import React, { useEffect, useState, useRef } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Pick_date = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker dateFormat="yyyy/MM/dd" selected={startDate} onChange={date => {
            props.onChange(date);
            setStartDate(date);
        }} />
    );
};

export default Pick_date;