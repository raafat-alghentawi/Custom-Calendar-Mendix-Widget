import { produce } from "immer"

export const setShowCalendar = (state, action) => {
    return produce(state, (draftState) => {
         draftState.showCalendar = action.payload
    }
    )
}

export const setDateValue = (state, action) => {
    return produce(state, (draftState) => {
        draftState.dateValue = action.payload
    }
    )
}

export const setMinDate = (state, action) => {
    return produce(state, (draftState) => {
        draftState.minDate = action.payload
    }
    )
}


export const setMaxDate = (state, action) => {
    return produce(state, (draftState) => {
        draftState.maxDate = action.payload
    }
    )
}


