import * as React from 'react';
import { autobind, BaseComponent, classNamesFunction, customizable } from '../../Utilities';
import { FocusZone, IFocusZone } from 'office-ui-fabric-react/lib/FocusZone';
import { ICalendarMonthView } from './CalendarMonthView.types';
import { ICalendarMonthViewProps } from './CalendarMonthView.types';
import { ICalendarMonthViewStyleProps } from './CalendarMonthView.types';
import { ICalendarMonthViewStyles } from './CalendarMonthView.types';

const getClassNames = classNamesFunction<ICalendarMonthViewStyleProps, ICalendarMonthViewStyles>();

@customizable('CalendarMonthView', ['theme'])
export class CalendarMonthViewBase extends BaseComponent<ICalendarMonthViewProps> implements ICalendarMonthView {
  public static defaultProps: Partial<ICalendarMonthViewProps> = {
  };

  private focusZone: IFocusZone;

  public render(): JSX.Element {
    const { getStyles, theme, className } = this.props;
    const classNames = getClassNames(getStyles, { theme: theme!, className: className });

    const { month } = this.props;
    return (
      <div className={ classNames.root }>
        <FocusZone componentRef={ this._setFocusZone }>
          <div>month={ month.toDateString() }</div>
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
