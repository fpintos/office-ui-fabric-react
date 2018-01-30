import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';

import { CalendarDayViewBasicExample } from './examples/CalendarDayView.Basic.Example';
import { CalendarDayViewPeopleExample } from './examples/CalendarDayView.People.Example';

export class CalendarDayViewPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title='CalendarDayView'
        componentName='CalendarDayView'
        exampleCards={
          <div>
            <ExampleCard
              title='Day view of Jan 1st, 2018'
              code={ require('!raw-loader!./examples/CalendarDayView.Basic.Example') }
            >
              <CalendarDayViewBasicExample />
            </ExampleCard>

            <ExampleCard
              title='Day view of Jan 1st, 2018 split by People'
              code={ require('!raw-loader!./examples/CalendarDayView.People.Example') }
            >
              <CalendarDayViewPeopleExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={ [require('!raw-loader!./CalendarDayView.types')] }
          />
        }
        overview={
          <div>
            <p>CalendarDayView is used to display a set of calendar events in a day view.</p>
          </div>
        }
        bestPractices={ <div /> }
        dos={
          <div>
            <ul>
              <li>TODO</li>
            </ul>
          </div>
        }
        donts={
          <div>
            <ul>
              <li>TODO</li>
            </ul>
          </div>
        }
        isHeaderVisible={ this.props.isHeaderVisible }
      />
    );
  }
}
