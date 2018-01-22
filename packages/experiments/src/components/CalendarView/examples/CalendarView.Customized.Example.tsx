import * as React from 'react';
import { CalendarView } from '../../CalendarView';
import { ICalendarViewRowHeaderProps, ICalendarViewRowHeaderStyles } from '../../CalendarViewRowHeader';
import { ICalendarViewRowHeaderStyleProps } from 'src/CalendarViewRowHeader';

export class CalendarViewCustomizedExample extends React.Component {
  public render(): JSX.Element {
    return (
      <CalendarView columnHeaders={ [
        "Day 1",
        "Day 2",
        "Day 3"
      ] }
        getRowHeaderProps={ getRowHeaderProps } />
    );
  }
}

function getRowHeaderProps(header: React.ReactNode, index: number): ICalendarViewRowHeaderProps {
  return {
    getStyles: index % 2 ? getOddRowHeaderStyle : getEvenRowHeaderStyle
  }
}

function getEvenRowHeaderStyle(styleProps: ICalendarViewRowHeaderStyleProps): Partial<ICalendarViewRowHeaderStyles> {
  return {
    root: {
      fontWeight: 'normal',
      backgroundColor: styleProps.theme.palette.themeLighter
    }
  }
}

function getOddRowHeaderStyle(styleProps: ICalendarViewRowHeaderStyleProps): Partial<ICalendarViewRowHeaderStyles> {
  return {
    root: {
      fontWeight: 'bold',
      backgroundColor: styleProps.theme.palette.themeLight
    }
  }
}
