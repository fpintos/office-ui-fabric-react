import * as React from 'react';
import { CalendarWeekView } from '../../CalendarWeekView';

export class CalendarWeekViewStyledExample extends React.Component {
  public render(): JSX.Element {
    return (
      // Control can be styled with custom className or with
      // custom getStyles which returns partial set of styles.
      <CalendarWeekView
        firstDay={ new Date(2018, 0, 1) }
        numberOfDays={ 5 }
        className='calendarWeekViewStyledExample'
        getStyles={ styleProps => ({
          root: {
            backgroundColor: styleProps.theme.palette.themeLighter,
          }
        }) }
      />
    );
  }
}
