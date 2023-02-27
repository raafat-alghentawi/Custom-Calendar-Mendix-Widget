import React, { createElement, useState, useRef } from "react";
import { setShowCalendar } from "../actions/actions";
import UseGetContext from "../hooks/useGetContext";
import { getDateFrmat } from "../utils/utility";

const CalendarWrapper = () => {

    const { dispatch, state, setDateValueCurrent, DateCurrentValue, MinDate, MaxDate, EnumShowDate } = UseGetContext();
    let showCalendar = useRef(state.showCalendar)

    let {  dateValue } = state;

    const onShowCalendar = (e) => {
        showCalendar.current = !state.showCalendar;
        dispatch(setShowCalendar(showCalendar.current));
    };

    let strDateCurrentValue = getDateFrmat(DateCurrentValue, EnumShowDate)
    return (
        <div class="mx-compound-control">
            <input
                disabled
                class="form-control"
                type="text"
                id="26.MyFirstModule.Home_Web.datePicker1_rns_6"
                value={strDateCurrentValue}
                placeholder={EnumShowDate.replaceAll('_','/')}
            />
            <button type="button" class="btn mx-button" aria-label="Show date picker" tabindex="-1" onClick={onShowCalendar}>
                <span class="glyphicon glyphicon-calendar"></span>
            </button>
        </div>
    );
};

export default CalendarWrapper;
