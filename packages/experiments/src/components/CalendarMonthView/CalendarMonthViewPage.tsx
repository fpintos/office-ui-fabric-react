import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';

import { CalendarMonthViewBasicExample } from './examples/CalendarMonthView.Basic.Example';

export class CalendarMonthViewPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title='CalendarMonthView'
        componentName='CalendarMonthView'
        exampleCards={
          <div>
            <ExampleCard
              title='Month view of January, 2018'
              code={ require('!raw-loader!./examples/CalendarMonthView.Basic.Example') }
            >
              <CalendarMonthViewBasicExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={ [require('!raw-loader!./CalendarMonthView.types')] }
          />
        }
        overview={
          <div>
            <p>CalendarMonthView is used to display a set of calendar events in a month view.</p>
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
