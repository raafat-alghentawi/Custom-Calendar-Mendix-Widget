import { setMaxDate, setMinDate } from "../actions/actions";
import { SET_SHOW_CALENDAR, SET_DATE_VALUE, SET_MAX_DATE_VALUE, SET_MIN_DATE_VALUE } from "../actions/actionTypes";
import { setShowCalendar, setDateValue } from "./reducer-functions";

export let initialState = {
    showCalendar: false,
    dateValue: new Date(),
    minDate: new Date(),
    maxDate: new Date(),
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_SHOW_CALENDAR:
            return setShowCalendar(state, action);
        case SET_DATE_VALUE:
            return setDateValue(state, action);
        case SET_MIN_DATE_VALUE:
            return setMinDate(state, action);
        case SET_MAX_DATE_VALUE:
            return setMaxDate(state, action);
        default:
            return state;
    }
}

export default reducer;
