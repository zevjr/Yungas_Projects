import React, {useState} from 'react'
import {DatePicker} from 'antd'
import 'antd/lib/date-picker/style/css'
import moment from "moment";


export const DataInputStyle = ({labelInput = '', value = null, idName = labelInput}) => {
    const [startDate, setStartDate] = useState(new Date());
    let momentData = null
    if (value !== null) {
        momentData = moment(value, 'YYYY/MM/DD')
    }
    return (

        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" type="button" id="button-addon1">{labelInput}</button>
            </div>
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="MMMM d, yyyy h:mm aa"
                name={idName}
                defaultValue={momentData}
            />
        </div>
    );
};

