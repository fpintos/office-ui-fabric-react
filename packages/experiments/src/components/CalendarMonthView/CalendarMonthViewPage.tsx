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
            <ExampleCard title={ CalendarMonthViewBasicExample.title } code={ CalendarMonthViewBasicExample.code }>
              <CalendarMonthViewBasicExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={ [require<string>('!raw-loader!./CalendarMonthView.types')] }
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
              <li />
            </ul>
          </div>
        }
        donts={
          <div>
            <ul>
              <li />
            </ul>
          </div>
        }
        isHeaderVisible={ this.props.isHeaderVisible }
      />
    );
  }
}
