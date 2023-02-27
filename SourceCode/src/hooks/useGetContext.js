import React, {useContext} from "react";
import { CalendarStateContext } from "../CustomeCalendar";

const UseGetContext = () => {
    const context = useContext(CalendarStateContext);
    return context;
};

export default UseGetContext;
