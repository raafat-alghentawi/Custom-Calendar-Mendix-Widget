import React from "react";

const useGetHolidaysData = props => {
    let myHolidaysData = [];

    // linked attribute to get name attribute of product object inside List<Product>
    const { DateFrom: DateFromValue } = props;
    const { DateTo: DateToValue } = props;

    const holidaysItems = props.DSHolidays.items;

    holidaysItems.forEach(item => {
        const holydayItemDateFrom = DateFromValue.get(item).value;
        const holydayItemDateTo = DateToValue.get(item).value;

        myHolidaysData.push({ holydayItemDateFrom, holydayItemDateTo });
    });



    return { myHolidaysData };
};

export default useGetHolidaysData;
