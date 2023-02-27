import * as actionTypes from "./actionTypes";

export const setShowCalendar = (isShow) => {
    return {
        type: actionTypes.SET_SHOW_CALENDAR,
        payload: isShow};
}

export const setDateValue = (dateValue) => {
    return {
        type: actionTypes.SET_DATE_VALUE,
        payload: dateValue};
}

export const setMinDate = (dateValue) => {
    return {
        type: actionTypes.SET_MIN_DATE_VALUE,
        payload: dateValue};
}

export const setMaxDate = (dateValue) => {
    return {
        type: actionTypes.SET_MAX_DATE_VALUE,
        payload: dateValue};
}