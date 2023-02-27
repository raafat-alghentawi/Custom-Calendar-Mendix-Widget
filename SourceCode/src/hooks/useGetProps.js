import React from 'react'

export const UseGetProps = (props) => {
    
    // Attribute
    let DateCurrentValue = null;
    const {
        DateValue: { status: dateValueStatus, value:DateComming , setValue: setDateValueCurrent }
    } = props;

    if (dateValueStatus === "available") {
        DateCurrentValue = new Date(DateComming);
    }

    // Enum to show the date
    let { EnumShowDate } = props;

  



    //Min date to show
    let MinDate = "";
    const {
        MinDateToShow: { status: MinDateToShowStatus, value: MinDateToShow }
    } = props;

    if (MinDateToShowStatus === "available") {
        MinDate = MinDateToShow;
    }

    //Min date to show
    let MaxDate = "";
    const {
        MaxDateToShow: { status: MaxDateToShowStatus, value: MaxDateToShow }
    } = props;

    if (MaxDateToShowStatus === "available") {
        MaxDate = MaxDateToShow;
    }   

    //Enable Mon
    let EnableMon = true;
    const {
        EnableMon: { status: EnableMonStatus, value: EnableMonValue }
    } = props;

    if (EnableMonStatus === "available") {
        EnableMon = EnableMonValue;
    }      
    
    //Enable Tue
    let EnableTue = true;
    const {
        EnableTue: { status: EnableTueStatus, value: EnableTueValue }
    } = props;

    if (EnableTueStatus === "available") {
        EnableTue = EnableTueValue;
    }  
    
    //Enable Wed
    let EnableWed = true;
    const {
        EnableWed: { status: EnableWedStatus, value: EnableWedValue }
    } = props;

    if (EnableWedStatus === "available") {
        EnableWed = EnableWedValue;
    }  
    
    //Enable Thu
    let EnableThu = true;
    const {
        EnableThu: { status: EnableThuStatus, value: EnableThuValue }
    } = props;

    if (EnableThuStatus === "available") {
        EnableThu = EnableThuValue;
    }  
    
    //Enable Fri
    let EnableFri = true;
    const {
        EnableFri: { status: EnableFriStatus, value: EnableFriValue }
    } = props;

    if (EnableFriStatus === "available") {
        EnableFri = EnableFriValue;
    }  
    
    
    //Enable Sat
    let EnableSat = true;
    const {
        EnableSat: { status: EnableSatStatus, value: EnableSatValue }
    } = props;

    if (EnableSatStatus === "available") {
        EnableSat = EnableSatValue;
    }  
    
    
    //Enable Sun
    let EnableSun = true;
    const {
        EnableSun: { status: EnableSunStatus, value: EnableSunValue }
    } = props;

    if (EnableSunStatus === "available") {
        EnableSun = EnableSunValue;
    }  




  return {
    DateCurrentValue,
    setDateValueCurrent,
    MinDate,
    MaxDate,
    EnableMon,
    EnableTue,
    EnableWed,
    EnableThu,
    EnableFri,
    EnableSat,
    EnableSun,
    EnumShowDate
  }
}

export default UseGetProps;
