import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';

import { CalendarDayViewBasicExample } from './examples/CalendarDayView.Basic.Example';

export class CalendarDayViewPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title='CalendarDayView'
        componentName='CalendarDayView'
        exampleCards={
          <div>
            <ExampleCard title={ CalendarDayViewBasicExample.title } code={ CalendarDayViewBasicExample.code }>
              <CalendarDayViewBasicExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={ [require<string>('!raw-loader!./CalendarDayView.types')] }
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
