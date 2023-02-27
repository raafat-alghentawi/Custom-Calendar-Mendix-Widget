import { createElement, useState, createContext, useReducer } from "react";
import { setDateValue, setMaxDate, setMinDate } from "./actions/actions";
import CalendarMain from "./components/CalendarMain";

import CalendarWrapper from "./components/CalendarWrapper";
import useGetHolidaysData from "./hooks/useGetHolidaysData";
import UseGetProps from "./hooks/useGetProps";
import reducer, {initialState} from "./reducer/reducer";

import "./ui/CustomeCalendar.css";

export const CalendarStateContext = createContext();
export function CustomeCalendar(props) {
    let [state, dispatch] = useReducer(reducer, initialState);
    let {DateCurrentValue, setDateValueCurrent, MinDate, MaxDate,    
        EnableMon,
        EnableTue,
        EnableWed,
        EnableThu,
        EnableFri,
        EnableSat,
        EnableSun,
        EnumShowDate } = UseGetProps(props);

        const {
            DSHolidays: { status: DSHolidaysStatus }
        } = props;

        let myHolidaysData = [];
        if (DSHolidaysStatus === 'available') {
            myHolidaysData = useGetHolidaysData(props);
        }

    
 
    return (
        <div>
            <CalendarStateContext.Provider
                value={{
                    dispatch,
                    state,
                    setDateValueCurrent,
                    DateCurrentValue,
                    MinDate,
                    MaxDate,
                    EnableMon,
                    EnableTue,
                    EnableWed,
                    EnableThu,
                    EnableFri,
                    EnableSat,
                    EnableSun,
                    myHolidaysData,
                    EnumShowDate                                   
                }}
            >
                <CalendarWrapper></CalendarWrapper>
                <CalendarMain></CalendarMain>
            </CalendarStateContext.Provider>
        </div>
    );
}
