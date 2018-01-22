import * as React from 'react';
import { autobind, BaseComponent, classNamesFunction, customizable } from '../../Utilities';
import { FocusZone, IFocusZone } from 'office-ui-fabric-react/lib/FocusZone';
import { ICalendarWeekView } from './CalendarWeekView.types';
import { ICalendarWeekViewProps } from './CalendarWeekView.types';
import { ICalendarWeekViewStyleProps } from './CalendarWeekView.types';
import { ICalendarWeekViewStyles } from './CalendarWeekView.types';
import { CalendarView } from '../CalendarView';
import { addDays } from 'office-ui-fabric-react/lib/utilities/dateMath/DateMath';

const getClassNames = classNamesFunction<ICalendarWeekViewStyleProps, ICalendarWeekViewStyles>();

@customizable('CalendarWeekView', ['theme'])
export class CalendarWeekViewBase extends BaseComponent<ICalendarWeekViewProps> implements ICalendarWeekView {
  public static defaultProps: Partial<ICalendarWeekViewProps> = {
    numberOfDays: 7
  };

  private focusZone: IFocusZone;

  public render(): JSX.Element {
    const { getStyles, theme, className } = this.props;
    const classNames = getClassNames(getStyles, { theme: theme!, className: className });

    const { firstDay, numberOfDays } = this.props;
    const columnHeaders = [];
    for (let i = 0, day = firstDay; i < numberOfDays!; i++ , day = addDays(firstDay, 1)) {
      columnHeaders.push(day.toLocaleDateString())
    }

    return (
      <div className={ classNames.root }>
        <FocusZone componentRef={ this._setFocusZone }>
          <CalendarView columnHeaders={ columnHeaders } />
        </FocusZone>
      </div>
    );
  }

  public focus(): void {
    this.focusZone.focus();
  }

  @autobind
  private _setFocusZone(component: IFocusZone): void {
    this.focusZone = component;
  }
}