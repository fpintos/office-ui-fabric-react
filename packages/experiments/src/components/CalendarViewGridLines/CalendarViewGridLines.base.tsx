import * as React from 'react';
import { autobind, BaseComponent, classNamesFunction, customizable } from 'office-ui-fabric-react/lib/Utilities';
import { FocusZone, IFocusZone } from 'office-ui-fabric-react/lib/FocusZone';
import { ICalendarViewGridLines } from './CalendarViewGridLines.types';
import { ICalendarViewGridLinesProps } from './CalendarViewGridLines.types';
import { ICalendarViewGridLinesStyleProps } from './CalendarViewGridLines.types';
import { ICalendarViewGridLinesStyles } from './CalendarViewGridLines.types';

const getClassNames = classNamesFunction<ICalendarViewGridLinesStyleProps, ICalendarViewGridLinesStyles>();

@customizable('CalendarViewGridLines', ['theme'])
export class CalendarViewGridLinesBase extends BaseComponent<ICalendarViewGridLinesProps> implements ICalendarViewGridLines {
  public static defaultProps: Partial<ICalendarViewGridLinesProps> = {
  };

  private focusZone: IFocusZone;

  public render(): JSX.Element {
    const { getStyles, theme, className } = this.props;
    const classNames = getClassNames(getStyles, { theme: theme!, className: className });

    return (
      <div className={ classNames.root }>
        <FocusZone componentRef={ this._setFocusZone }>
          <div>CalendarViewGridLines</div>
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
