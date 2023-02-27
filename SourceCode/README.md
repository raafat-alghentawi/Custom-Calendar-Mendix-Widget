## CustomeCalendar
Calendar controller with below abilities:

- Show dates in the calendar only between the start and end date.

- disable weekdays based on configuration.

- disable holiday dates.

## Features

- features:

  - Show dates in the calendar only between the start and end date.
 
  - disable weekdays based on configuration.

  - disable holiday dates.

- limitation:

  - It builds on default styling, so if you need customer style, then you should add your style to the widget.

## Usage
- in the settings tab:

  - Specify the date attribute you want to use.

  - Specify the minimum date and maximum date to show the calendar view depending on them.

  - Specify the date format in order to show the selected date as selected format.
  
- in the working days tab:

  - set boolean attributes to enable or disable weekdays.
  
- in Holidays tab:
  - set the data source of holidays.

  - set the attribute from and to date from the holiday data source.



## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]
