import React, { createElement, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { setShowCalendar } from "../actions/actions";
import UseGetContext from "../hooks/useGetContext";
import { getEnableDayWork, getEnableHoliday } from "../utils/utility";
import "../ui/CustomeCalendar.css"

const CalendarMain = () => {
    const [value] = useState(new Date());
    const { dispatch, state, setDateValueCurrent, DateCurrentValue, MinDate, MaxDate,
        EnableMon,
        EnableTue,
        EnableWed,
        EnableThu,
        EnableFri,
        EnableSat,
        EnableSun,
        myHolidaysData
     } = UseGetContext();

     const daysWork = {
            EnableMon,
            EnableTue,
            EnableWed,
            EnableThu,
            EnableFri,
            EnableSat,
            EnableSun
     }
    let { showCalendar, dateValue } = state;
    const disableDate = ({ date }) => {
        let result = true;
        let isWorkingDay = getEnableDayWork(date, daysWork);
        
        let isHoliday = false;
        if (isWorkingDay){
            isHoliday = getEnableHoliday(date, myHolidaysData.myHolidaysData);
            result &= isHoliday;
        } else{
            result &= !isWorkingDay;
        }

        

        return result;
    };
    const onChange = e => {
        setDateValueCurrent(e);
        dispatch(setShowCalendar(false));
    };

    return (
        <div >
            {showCalendar ? (
                <Calendar 
                    className={'mx-calendar calendar' }
                    minDate={MinDate}                
                    maxDate={MaxDate}
                    onChange={onChange}
                    tileDisabled={disableDate}
                    value={!isNaN(DateCurrentValue)? DateCurrentValue:null }
                />
            ) : null}
        </div>
    );
};

export default CalendarMain;
