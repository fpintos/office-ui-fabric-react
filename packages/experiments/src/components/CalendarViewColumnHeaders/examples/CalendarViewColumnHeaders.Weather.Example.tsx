import * as React from 'react';
import { CalendarViewColumnHeaders } from '../../CalendarViewColumnHeaders';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

const exampleWeather = [
  { date: new Date(2018, 0, 1), icon: 'Sunny' },
  { date: new Date(2018, 0, 2), icon: 'CloudWeather' },
  { date: new Date(2018, 0, 3), icon: 'Cloudy' },
  { date: new Date(2018, 0, 4), icon: 'Rain' },
];

export class CalendarViewColumnHeadersWeatherExample extends React.Component {
  public render(): JSX.Element {
    const columnHeaders = exampleWeather.map(
      weather =>
        <div>
          { weather.date.toLocaleDateString() }
          <Icon iconName={ weather.icon } />
        </div>
    );

    return (
      <CalendarViewColumnHeaders>
        { columnHeaders }
      </ CalendarViewColumnHeaders>
    );
  }
}

