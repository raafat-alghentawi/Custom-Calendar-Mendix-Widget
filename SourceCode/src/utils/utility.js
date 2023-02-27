export const generateRandomColor = () => {
    let maxVal = 0xffffff; // 16777215.
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
};

export const getEnableDayWork = (date, daysWorke) => {
    let result = true;
    switch (date.getDay()) {
        case 1:
            result = daysWorke.EnableMon;
            break;
        case 2:
            result = daysWorke.EnableTue;
            break;
        case 3:
            result = daysWorke.EnableWed;
            break;
        case 4:
            result = daysWorke.EnableThu;
            break;
        case 5:
            result = daysWorke.EnableFri;
            break;
        case 6:
            result = daysWorke.EnableSat;
            break;
        case 0:
            result = daysWorke.EnableSun;
            break;
    }

    return result;
};

export const getEnableHoliday = (date, myHolidaysData) => {
    let result = false;
    for (let i = 0; i < myHolidaysData.length; i++) {
        const element = myHolidaysData[i];
        if (date >= element.holydayItemDateFrom && date <= element.holydayItemDateTo) {
            result = true;
            break;
        }
    }

    return result;
};

export const getDateFrmat = (date, format) => {
    let ye = "";
    let mo = "";
    let da = "";
    let result = "";
    if (date != null && !isNaN(date)) {
        switch (format) {
            case "dd_MM_yyyy":
                ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
                mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(date);
                da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
                result = `${da}/${mo}/${ye}`;
                break;
            case "MM_dd_yyyy":
                ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
                mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(date);
                da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
                result = `${mo}/${da}/${ye}`;
                break;
            case "dd_MMMM_yyyy":
                ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
                mo = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
                da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
                result = `${da}/${mo}/${ye}`;
                break;
            default:
                ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
                mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(date);
                da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
                result = `${da}/${mo}/${ye}`;
        }
    }

    return result;
};
