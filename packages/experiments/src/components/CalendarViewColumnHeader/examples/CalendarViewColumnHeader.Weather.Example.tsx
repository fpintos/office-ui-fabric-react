import * as React from 'react';
import { CalendarViewColumnHeader } from '../../CalendarViewColumnHeader';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export class CalendarViewColumnHeaderWeatherExample extends React.Component {
  public render(): JSX.Element {
    return (
      <CalendarViewColumnHeader>
        Jan 1st
        <Icon iconName='Sunny' style={ { marginLeft: 4 } } />
      </CalendarViewColumnHeader>
    );
  }
}
