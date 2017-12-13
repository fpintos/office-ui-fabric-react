import * as React from 'react';
import { autobind, BaseComponent, classNamesFunction, customizable } from '../../Utilities';
import { FocusZone, IFocusZone } from 'office-ui-fabric-react/lib/FocusZone';
import { ICalendarDayView } from './CalendarDayView.types';
import { ICalendarDayViewProps } from './CalendarDayView.types';
import { ICalendarDayViewStyleProps } from './CalendarDayView.types';
import { ICalendarDayViewStyles } from './CalendarDayView.types';

const getClassNames = classNamesFunction<ICalendarDayViewStyleProps, ICalendarDayViewStyles>();

@customizable('CalendarDayView', ['theme'])
export class CalendarDayViewBase extends BaseComponent<ICalendarDayViewProps> implements ICalendarDayView {
  public static defaultProps: Partial<ICalendarDayViewProps> = {
  };

  private focusZone: IFocusZone;

  public render(): JSX.Element {
    const { getStyles, theme, className } = this.props;
    const classNames = getClassNames(getStyles, { theme: theme!, className: className });

    const { day } = this.props;
    return (
      <div className={ classNames.root }>
        <FocusZone componentRef={ this._setFocusZone }>
          <div>day={ day.toDateString() }</div>
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
